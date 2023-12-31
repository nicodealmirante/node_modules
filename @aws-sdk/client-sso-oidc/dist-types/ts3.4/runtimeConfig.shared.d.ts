import { SSOOIDCClientConfig } from "./SSOOIDCClient";
export declare const getRuntimeConfig: (config: SSOOIDCClientConfig) => {
  apiVersion: string;
  base64Decoder: import("@smithy/types").Decoder;
  base64Encoder: import("@smithy/types").Encoder;
  disableHostPrefix: boolean;
  endpointProvider: (
    endpointParams: import("./endpoint/EndpointParameters").EndpointParameters,
    context?: {
      logger?: import("@smithy/types").Logger | undefined;
    }
  ) => import("@smithy/types").EndpointV2;
  logger: import("@smithy/types").Logger;
  serviceId: string;
  urlParser: import("@smithy/types").UrlParser;
  utf8Decoder: import("@smithy/types").Decoder;
  utf8Encoder: import("@smithy/types").Encoder;
};
