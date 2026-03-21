import { Module, type ModuleMetadata } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
import { ConfigDomainModule } from "./core/config/config-domain.module.js";
import { configuration } from "./core/config/index.js";
import { Environment } from "./shared/enums/index.js";

const nodeEnv = process.env.NODE_ENV || Environment.Development;
const envFilePath = [`.env.${nodeEnv}`, ".env"];

const meta: ModuleMetadata = {
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: configuration,
      envFilePath,
      cache: true,
      expandVariables: true,
    }),
    ConfigDomainModule,
  ],
  controllers: [AppController],
  providers: [AppService],
};

@Module(meta)
export class AppModule {}
