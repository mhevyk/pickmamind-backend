import { Injectable } from "@nestjs/common";
import { ConfigService as NestConfigService } from "@nestjs/config";
import { ConfigDomainKey } from "../enums/index.js";
import type { AppConfig } from "./app/index.js";

@Injectable()
export class ConfigService {
  constructor(private readonly configService: NestConfigService) {}

  get app(): AppConfig {
    return this.configService.getOrThrow<AppConfig>(ConfigDomainKey.App);
  }
}
