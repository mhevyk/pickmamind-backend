import { Injectable } from "@nestjs/common";
import { ConfigService as NestConfigService } from "@nestjs/config";
import type { AppConfig } from "./app/index.js";

@Injectable()
export class ConfigService {
  constructor(private readonly configService: NestConfigService) {}

  private getRequiredConfig<T>(key: string): T {
    const config = this.configService.get<T>(key);

    if (!config) {
      throw new Error(`${key} config not found`);
    }

    return config;
  }

  get app(): AppConfig {
    return this.getRequiredConfig<AppConfig>("app");
  }

  get isDevelopment(): boolean {
    return this.app.NODE_ENV === "development";
  }

  get isProduction(): boolean {
    return this.app.NODE_ENV === "production";
  }
}
