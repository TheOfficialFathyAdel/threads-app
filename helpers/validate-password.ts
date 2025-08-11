import { passwordSchema } from "./password-schema";

export const validatePassword = (text: string, setError: Function) => {
  const result = passwordSchema.safeParse(text);
  setError("");
  if (!result.success) {
    setError(result.error.issues[0].message);
  }
};
