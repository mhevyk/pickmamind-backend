import { Injectable } from "@nestjs/common";
import { ConfigService as NestConfigService } from "@nestjs/config";
import type { AppConfig } from "./app/index.js";

@Injectable()
export class ConfigService {
  constructor(private readonly configService: NestConfigService) {}

  get app(): AppConfig {
    return this.configService.getOrThrow<AppConfig>("app");
  }

  get isDevelopment(): boolean {
    return this.app.NODE_ENV === "development";
  }

  get isProduction(): boolean {
    return this.app.NODE_ENV === "production";
  }
}
