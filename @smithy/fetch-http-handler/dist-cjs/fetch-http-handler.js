"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchHttpHandler = void 0;
const protocol_http_1 = require("@smithy/protocol-http");
const querystring_builder_1 = require("@smithy/querystring-builder");
const request_timeout_1 = require("./request-timeout");
class FetchHttpHandler {
    constructor(options) {
        if (typeof options === "function") {
            this.configProvider = options().then((opts) => opts || {});
        }
        else {
            this.config = options !== null && options !== void 0 ? options : {};
            this.configProvider = Promise.resolve(this.config);
        }
    }
    destroy() {
    }
    async handle(request, { abortSignal } = {}) {
        var _a, _b;
        if (!this.config) {
            this.config = await this.configProvider;
        }
        const requestTimeoutInMs = this.config.requestTimeout;
        if (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted) {
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            return Promise.reject(abortError);
        }
        let path = request.path;
        const queryString = (0, querystring_builder_1.buildQueryString)(request.query || {});
        if (queryString) {
            path += `?${queryString}`;
        }
        if (request.fragment) {
            path += `#${request.fragment}`;
        }
        let auth = "";
        if (request.username != null || request.password != null) {
            const username = (_a = request.username) !== null && _a !== void 0 ? _a : "";
            const password = (_b = request.password) !== null && _b !== void 0 ? _b : "";
            auth = `${username}:${password}@`;
        }
        const { port, method } = request;
        const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
        const body = method === "GET" || method === "HEAD" ? undefined : request.body;
        const requestOptions = {
            body,
            headers: new Headers(request.headers),
            method: method,
        };
        if (typeof AbortController !== "undefined") {
            requestOptions["signal"] = abortSignal;
        }
        const fetchRequest = new Request(url, requestOptions);
        const raceOfPromises = [
            fetch(fetchRequest).then((response) => {
                const fetchHeaders = response.headers;
                const transformedHeaders = {};
                for (const pair of fetchHeaders.entries()) {
                    transformedHeaders[pair[0]] = pair[1];
                }
                const hasReadableStream = response.body != undefined;
                if (!hasReadableStream) {
                    return response.blob().then((body) => ({
                        response: new protocol_http_1.HttpResponse({
                            headers: transformedHeaders,
                            reason: response.statusText,
                            statusCode: response.status,
                            body,
                        }),
                    }));
                }
                return {
                    response: new protocol_http_1.HttpResponse({
                        headers: transformedHeaders,
                        reason: response.statusText,
                        statusCode: response.status,
                        body: response.body,
                    }),
                };
            }),
            (0, request_timeout_1.requestTimeout)(requestTimeoutInMs),
        ];
        if (abortSignal) {
            raceOfPromises.push(new Promise((resolve, reject) => {
                abortSignal.onabort = () => {
                    const abortError = new Error("Request aborted");
                    abortError.name = "AbortError";
                    reject(abortError);
                };
            }));
        }
        return Promise.race(raceOfPromises);
    }
}
exports.FetchHttpHandler = FetchHttpHandler;
