import { z } from "zod";

export const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .min(6, "Email too short")
  .max(254, "Email too long")
  .refine(
    (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    "Email must be valid and properly formatted"
  )
  .refine(
    (email) => {
      const allowedDomains = [
        "gmail.com",
        "yahoo.com",
        "outlook.com",
        "hotmail.com",
        "live.com",
        "icloud.com",
        "protonmail.com",
        "aol.com",
        "msn.com",
      ];
      const domain = email.split("@")[1]?.toLowerCase();
      return allowedDomains.includes(domain);
    },
    {
      message: "Email must be (e.g., Gmail, Yahoo, Outlook)",
    }
  );
