import camelcaseKeys from "camelcase-keys";
import snakecaseKeys from "snakecase-keys";

// Convert object keys to snake_case for database operations
export const toSnakeCase = <T>(data: T): Record<string, unknown> => {
  return snakecaseKeys(data as Record<string, unknown>, { deep: true });
};

// Convert object keys to camelCase for use in JS/TS
export const toCamelCase = <T>(data: unknown): T => {
  return camelcaseKeys(data as Record<string, unknown>, { deep: true }) as T;
};
