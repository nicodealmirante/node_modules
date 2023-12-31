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
  GetOpenIdTokenInput,
  GetOpenIdTokenResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetOpenIdTokenCommandInput extends GetOpenIdTokenInput {}
export interface GetOpenIdTokenCommandOutput
  extends GetOpenIdTokenResponse,
    __MetadataBearer {}
export declare class GetOpenIdTokenCommand extends $Command<
  GetOpenIdTokenCommandInput,
  GetOpenIdTokenCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  readonly input: GetOpenIdTokenCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetOpenIdTokenCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOpenIdTokenCommandInput, GetOpenIdTokenCommandOutput>;
  private serialize;
  private deserialize;
}
