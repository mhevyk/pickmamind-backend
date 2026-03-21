import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import { ConfigService } from "./core/config/config.service.js";

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  await app.listen(config.app.PORT);

  logger.log(
    `Application started on port ${config.app.PORT} (${config.app.NODE_ENV})`,
  );
}

// TODO: configure error handling
bootstrap().catch((error) => {
  const errorMessage = error instanceof Error ? error.message : String(error);

  logger.error(`Failed to bootstrap application: ${errorMessage}`);
  process.exit(1);
});
