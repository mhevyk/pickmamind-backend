import { Injectable } from "@nestjs/common";
import { Environment } from "../../../shared/enums/index.js";
import { ConfigService } from "../config.service.js";

@Injectable()
export class AppEnvService {
  constructor(private readonly configService: ConfigService) {}

  isDevelopment(): boolean {
    return this.configService.app.NODE_ENV === Environment.Development;
  }

  isProduction(): boolean {
    return this.configService.app.NODE_ENV === Environment.Production;
  }
}
