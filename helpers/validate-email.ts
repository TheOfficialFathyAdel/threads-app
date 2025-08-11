import { emailSchema } from "./email-schema";

export const validateEmail = (text: string, setError: Function) => {
  const result = emailSchema.safeParse(text);
  setError("");
  if (!result.success) {
    setError(result.error.issues[0].message);
  }
};
