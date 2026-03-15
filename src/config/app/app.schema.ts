import { z } from "zod";

export const appSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  PORT: z.coerce
    .number()
    .int()
    .min(1, "Port must be >= 1")
    .max(65_535, "Port must be <= 65535")
    .default(3000),
});

export type AppConfig = z.infer<typeof appSchema>;
