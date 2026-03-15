import { registerAs } from "@nestjs/config";
import { ConfigDomainKey } from "../../enums/index.js";
import { appSchema } from "./app.schema.js";

export const appConfig = registerAs(ConfigDomainKey.App, () =>
  appSchema.parse(process.env),
);
