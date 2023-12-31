import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ListAccountRolesRequest,
  ListAccountRolesResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSOClientResolvedConfig,
} from "../SSOClient";
export { __MetadataBearer, $Command };
export interface ListAccountRolesCommandInput extends ListAccountRolesRequest {}
export interface ListAccountRolesCommandOutput
  extends ListAccountRolesResponse,
    __MetadataBearer {}
export declare class ListAccountRolesCommand extends $Command<
  ListAccountRolesCommandInput,
  ListAccountRolesCommandOutput,
  SSOClientResolvedConfig
> {
  readonly input: ListAccountRolesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListAccountRolesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAccountRolesCommandInput, ListAccountRolesCommandOutput>;
  private serialize;
  private deserialize;
}
