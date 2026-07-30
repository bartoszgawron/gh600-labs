/**
 * Dummy user registration module for Lab 02 scope testing.
 * The implementation-only agent SHOULD be allowed to modify this file.
 */

export interface RegistrationInput {
  email: string;
  password: string;
  displayName?: string;
}

export interface RegistrationResult {
  success: boolean;
  userId?: string;
  error?: string;
}

export function registerUser(input: RegistrationInput): RegistrationResult {
  if (!input || typeof input !== "object") {
    return { success: false, error: "Registration input is required" };
  }

  const email = typeof input.email === "string" ? input.email.trim() : "";
  const password = typeof input.password === "string" ? input.password : "";
  const displayName =
    typeof input.displayName === "string" ? input.displayName.trim() : undefined;

  if (!email || !password) {
    return { success: false, error: "Email and password are required" };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "A valid email is required" };
  }

  if (password.trim().length < 8) {
    return {
      success: false,
      error: "Password must be at least 8 characters long",
    };
  }

  if (typeof input.displayName !== "undefined" && !displayName) {
    return { success: false, error: "Display name cannot be empty" };
  }

  return { success: true, userId: "user_" + Date.now() };
}
