import { AwsCredentialIdentityProvider } from "@smithy/types";
export declare const ENV_KEY = "AWS_ACCESS_KEY_ID";
export declare const ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
export declare const ENV_SESSION = "AWS_SESSION_TOKEN";
export declare const ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
export declare const fromEnv: () => AwsCredentialIdentityProvider;
