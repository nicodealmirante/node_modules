import { NodeHttpHandler as RequestHandler } from "@smithy/node-http-handler";
import { SSOOIDCClientConfig } from "./SSOOIDCClient";
export declare const getRuntimeConfig: (config: SSOOIDCClientConfig) => {
  runtime: string;
  defaultsMode: import("@smithy/types").Provider<
    import("@smithy/smithy-client").ResolvedDefaultsMode
  >;
  bodyLengthChecker: import("@smithy/types").BodyLengthCalculator;
  defaultUserAgentProvider: import("@smithy/types").Provider<
    import("@smithy/types").UserAgent
  >;
  maxAttempts: number | import("@smithy/types").Provider<number>;
  region: string | import("@smithy/types").Provider<string>;
  requestHandler:
    | (import("@smithy/types").RequestHandler<
        any,
        any,
        import("@smithy/types").HttpHandlerOptions
      > &
        import("@smithy/protocol-http").HttpHandler)
    | RequestHandler;
  retryMode: string | import("@smithy/types").Provider<string>;
  sha256: import("@smithy/types").HashConstructor;
  streamCollector: import("@smithy/types").StreamCollector;
  useDualstackEndpoint: boolean | import("@smithy/types").Provider<boolean>;
  useFipsEndpoint: boolean | import("@smithy/types").Provider<boolean>;
  apiVersion: string;
  urlParser: import("@smithy/types").UrlParser;
  base64Decoder: import("@smithy/types").Decoder;
  base64Encoder: import("@smithy/types").Encoder;
  utf8Decoder: import("@smithy/types").Decoder;
  utf8Encoder: import("@smithy/types").Encoder;
  disableHostPrefix: boolean;
  serviceId: string;
  logger: import("@smithy/types").Logger;
  endpoint?:
    | ((
        | string
        | import("@smithy/types").Endpoint
        | import("@smithy/types").Provider<import("@smithy/types").Endpoint>
        | import("@smithy/types").EndpointV2
        | import("@smithy/types").Provider<import("@smithy/types").EndpointV2>
      ) &
        (
          | string
          | import("@smithy/types").Provider<string>
          | import("@smithy/types").Endpoint
          | import("@smithy/types").Provider<import("@smithy/types").Endpoint>
          | import("@smithy/types").EndpointV2
          | import("@smithy/types").Provider<import("@smithy/types").EndpointV2>
        ))
    | undefined;
  endpointProvider: (
    endpointParams: import("./endpoint/EndpointParameters").EndpointParameters,
    context?: {
      logger?: import("@smithy/types").Logger | undefined;
    }
  ) => import("@smithy/types").EndpointV2;
  tls?: boolean | undefined;
  retryStrategy?:
    | import("@smithy/types").RetryStrategy
    | import("@smithy/types").RetryStrategyV2
    | undefined;
  customUserAgent?: string | import("@smithy/types").UserAgent | undefined;
};
