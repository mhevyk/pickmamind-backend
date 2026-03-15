import { Module, type ModuleMetadata } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
import { AppEnvService } from "./config/app/index.js";
import { ConfigService } from "./config/config.service.js";
import { configuration } from "./config/index.js";

const meta: ModuleMetadata = {
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: configuration,
      envFilePath: [`.env.${process.env.NODE_ENV}`],
      cache: true,
      expandVariables: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService, AppEnvService],
  exports: [ConfigService, AppEnvService],
};

@Module(meta)
export class AppModule {}
