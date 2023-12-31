import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetFederationTokenRequest,
  GetFederationTokenResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  STSClientResolvedConfig,
} from "../STSClient";
export { __MetadataBearer, $Command };
export interface GetFederationTokenCommandInput
  extends GetFederationTokenRequest {}
export interface GetFederationTokenCommandOutput
  extends GetFederationTokenResponse,
    __MetadataBearer {}
export declare class GetFederationTokenCommand extends $Command<
  GetFederationTokenCommandInput,
  GetFederationTokenCommandOutput,
  STSClientResolvedConfig
> {
  readonly input: GetFederationTokenCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetFederationTokenCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: STSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFederationTokenCommandInput, GetFederationTokenCommandOutput>;
  private serialize;
  private deserialize;
}
