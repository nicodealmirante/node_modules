import { SSOToken } from "@smithy/shared-ini-file-loader";
export declare const getNewSsoOidcToken: (
  ssoToken: SSOToken,
  ssoRegion: string
) => Promise<import("@aws-sdk/client-sso-oidc").CreateTokenCommandOutput>;
