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
  // Placeholder implementation
  if (!input.email || !input.password) {
    return { success: false, error: "Email and password are required" };
  }
  return { success: true, userId: "user_" + Date.now() };
}
