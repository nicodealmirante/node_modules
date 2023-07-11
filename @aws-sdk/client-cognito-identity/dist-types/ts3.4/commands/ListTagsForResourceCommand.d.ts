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
  ListTagsForResourceInput,
  ListTagsForResourceResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListTagsForResourceCommandInput
  extends ListTagsForResourceInput {}
export interface ListTagsForResourceCommandOutput
  extends ListTagsForResourceResponse,
    __MetadataBearer {}
export declare class ListTagsForResourceCommand extends $Command<
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  readonly input: ListTagsForResourceCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListTagsForResourceCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput>;
  private serialize;
  private deserialize;
}
