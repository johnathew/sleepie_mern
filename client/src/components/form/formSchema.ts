import { z } from "zod";

export const schema = z
  .object({
    email: z.string().trim().email({
      message: "Invalid email address. Please enter a valid email address.",
    }),
    password: z.string().trim().min(6),
    confirmPassword: z.string().trim().min(6),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match.",
        path: ["confirmPassword"],
      });
    }
  });
