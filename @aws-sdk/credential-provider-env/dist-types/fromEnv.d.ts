import { AwsCredentialIdentityProvider } from "@smithy/types";
/**
 * @internal
 */
export declare const ENV_KEY = "AWS_ACCESS_KEY_ID";
/**
 * @internal
 */
export declare const ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
/**
 * @internal
 */
export declare const ENV_SESSION = "AWS_SESSION_TOKEN";
/**
 * @internal
 */
export declare const ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
/**
 * @internal
 *
 * Source AWS credentials from known environment variables. If either the
 * `AWS_ACCESS_KEY_ID` or `AWS_SECRET_ACCESS_KEY` environment variable is not
 * set in this process, the provider will return a rejected promise.
 */
export declare const fromEnv: () => AwsCredentialIdentityProvider;
