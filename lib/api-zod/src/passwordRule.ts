export const PASSWORD_LENGTH = 8;

export const PASSWORD_RULE_MESSAGE =
  "Password must be 8 characters with uppercase, lowercase, number and special character";

export function isMixedPassword(password: string): boolean {
  return (
    password.length === PASSWORD_LENGTH &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
  );
}
