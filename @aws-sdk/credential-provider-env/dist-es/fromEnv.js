import { CredentialsProviderError } from "@smithy/property-provider";
export const ENV_KEY = "AWS_ACCESS_KEY_ID";
export const ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
export const ENV_SESSION = "AWS_SESSION_TOKEN";
export const ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
export const fromEnv = () => async () => {
    const accessKeyId = process.env[ENV_KEY];
    const secretAccessKey = process.env[ENV_SECRET];
    const sessionToken = process.env[ENV_SESSION];
    const expiry = process.env[ENV_EXPIRATION];
    if (accessKeyId && secretAccessKey) {
        return {
            accessKeyId,
            secretAccessKey,
            ...(sessionToken && { sessionToken }),
            ...(expiry && { expiration: new Date(expiry) }),
        };
    }
    throw new CredentialsProviderError("Unable to find environment variable credentials.");
};
