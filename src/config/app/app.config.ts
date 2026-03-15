import { registerAs } from "@nestjs/config";
import { appSchema } from "./app.schema.js";

export const appConfig = registerAs("app", () => appSchema.parse(process.env));
