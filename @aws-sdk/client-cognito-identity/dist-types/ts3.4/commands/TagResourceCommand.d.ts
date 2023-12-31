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
import { TagResourceInput, TagResourceResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface TagResourceCommandInput extends TagResourceInput {}
export interface TagResourceCommandOutput
  extends TagResourceResponse,
    __MetadataBearer {}
export declare class TagResourceCommand extends $Command<
  TagResourceCommandInput,
  TagResourceCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  readonly input: TagResourceCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: TagResourceCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagResourceCommandInput, TagResourceCommandOutput>;
  private serialize;
  private deserialize;
}
