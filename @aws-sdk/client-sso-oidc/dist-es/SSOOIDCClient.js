import { getHostHeaderPlugin, resolveHostHeaderConfig, } from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getUserAgentPlugin, resolveUserAgentConfig, } from "@aws-sdk/middleware-user-agent";
import { resolveRegionConfig } from "@smithy/config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig } from "@smithy/middleware-retry";
import { Client as __Client, } from "@smithy/smithy-client";
import { resolveClientEndpointParameters, } from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
export { __Client };
export class SSOOIDCClient extends __Client {
    constructor(configuration) {
        const _config_0 = __getRuntimeConfig(configuration);
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = resolveRegionConfig(_config_1);
        const _config_3 = resolveEndpointConfig(_config_2);
        const _config_4 = resolveRetryConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveUserAgentConfig(_config_5);
        super(_config_6);
        this.config = _config_6;
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}
