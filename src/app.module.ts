import { Module, type ModuleMetadata } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
import { ConfigService } from "./config/config.service.js";
import { configuration } from "./config/configuration.js";

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
  providers: [AppService, ConfigService],
  exports: [ConfigService],
};

@Module(meta)
export class AppModule {}
