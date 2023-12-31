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
import { GetIdInput, GetIdResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetIdCommandInput extends GetIdInput {}
export interface GetIdCommandOutput extends GetIdResponse, __MetadataBearer {}
export declare class GetIdCommand extends $Command<
  GetIdCommandInput,
  GetIdCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  readonly input: GetIdCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetIdCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIdCommandInput, GetIdCommandOutput>;
  private serialize;
  private deserialize;
}
