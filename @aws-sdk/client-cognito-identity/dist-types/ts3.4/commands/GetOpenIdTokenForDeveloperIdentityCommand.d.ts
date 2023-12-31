import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CognitoIdentityClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityClient";
import {
  GetOpenIdTokenForDeveloperIdentityInput,
  GetOpenIdTokenForDeveloperIdentityResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetOpenIdTokenForDeveloperIdentityCommandInput
  extends GetOpenIdTokenForDeveloperIdentityInput {}
export interface GetOpenIdTokenForDeveloperIdentityCommandOutput
  extends GetOpenIdTokenForDeveloperIdentityResponse,
    __MetadataBearer {}
export declare class GetOpenIdTokenForDeveloperIdentityCommand extends $Command<
  GetOpenIdTokenForDeveloperIdentityCommandInput,
  GetOpenIdTokenForDeveloperIdentityCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  readonly input: GetOpenIdTokenForDeveloperIdentityCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetOpenIdTokenForDeveloperIdentityCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetOpenIdTokenForDeveloperIdentityCommandInput,
    GetOpenIdTokenForDeveloperIdentityCommandOutput
  >;
  private serialize;
  private deserialize;
}
