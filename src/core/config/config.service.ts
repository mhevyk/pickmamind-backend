import { Injectable } from "@nestjs/common";
import { ConfigService as NestConfigService } from "@nestjs/config";
import { ConfigDomainKey } from "../../shared/enums/index.js";
import type { AppConfig } from "./app/app.schema.js";

@Injectable()
export class ConfigService {
  constructor(private readonly configService: NestConfigService) {}

  get app(): AppConfig {
    return this.configService.getOrThrow<AppConfig>(ConfigDomainKey.App);
  }
}
