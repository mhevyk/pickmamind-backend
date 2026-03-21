import { Global, Module, type ModuleMetadata } from "@nestjs/common";
import { AppEnvService } from "./app/index.js";
import { ConfigService } from "./config.service.js";

const services = [ConfigService, AppEnvService];

const meta: ModuleMetadata = {
  providers: services,
  exports: services,
};

@Global()
@Module(meta)
export class ConfigDomainModule {}
