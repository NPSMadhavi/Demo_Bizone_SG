/** Lowercase so PostgreSQL lists it in pgAdmin without quotes. bizone_<slug> */
export function companyDatabaseName(slug: string): string {
  return `bizone_${slug}`;
}

export function normalizeCompanySlug(raw: string): string {
  return raw.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
}

/**
 * All companies share DATABASE_URL (BizoneDB). Do not CREATE DATABASE per signup.
 */
export async function provisionCompanyDatabase(_slug: string): Promise<string> {
  return "";
}

export async function dropCompanyDatabase(_dbName: string): Promise<void> {
  // Shared-database mode: never drop a PostgreSQL database from the app.
}
