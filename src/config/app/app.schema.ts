import { z } from "zod";
import { Environment } from "../../enums/index.js";

const MIN_PORT_VALUE = 1;
const MAX_PORT_VALUE = 65_535;
const DEFAULT_PORT = 3000;

export const appSchema = z.object({
  NODE_ENV: z
    .enum([Environment.Development, Environment.Production])
    .default(Environment.Development),
  PORT: z.coerce
    .number()
    .int()
    .min(MIN_PORT_VALUE, `Port must be >= ${MIN_PORT_VALUE}`)
    .max(MAX_PORT_VALUE, `Port must be <= ${MAX_PORT_VALUE}`)
    .default(DEFAULT_PORT),
});

export type AppConfig = z.infer<typeof appSchema>;
