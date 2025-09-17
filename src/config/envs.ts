import "dotenv/config"
import { get } from "env-var"

export const envs = {
  PORT: get("PORT").default("3000").asPortNumber()
}