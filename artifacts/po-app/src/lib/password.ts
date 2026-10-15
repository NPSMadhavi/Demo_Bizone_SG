export const PASSWORD_LENGTH = 8;

export const PASSWORD_RULE_MESSAGE =
  "Password must be 8 characters with uppercase, lowercase, number and special character";

export function validateMixedPassword(password: string): string | null {
  if (password.length !== PASSWORD_LENGTH) return PASSWORD_RULE_MESSAGE;
  if (!/[A-Z]/.test(password)) return PASSWORD_RULE_MESSAGE;
  if (!/[a-z]/.test(password)) return PASSWORD_RULE_MESSAGE;
  if (!/[0-9]/.test(password)) return PASSWORD_RULE_MESSAGE;
  if (!/[^A-Za-z0-9]/.test(password)) return PASSWORD_RULE_MESSAGE;
  return null;
}
