import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(6, "Password must be at least 10 characters")
  .max(128, "Password must be less than 129 characters")
  .refine((p) => !/\s/.test(p), "Password must not contain spaces")
  .refine(
    (p) => /[a-z]/.test(p),
    "Password must contain at least one lowercase letter"
  )
  .refine(
    (p) => /[A-Z]/.test(p),
    "Password must contain at least one uppercase letter"
  )
  .refine((p) => /[0-9]/.test(p), "Password must contain at least one number")
  .refine(
    (p) => /[^A-Za-z0-9]/.test(p),
    "Password must contain at least one special character"
  );
