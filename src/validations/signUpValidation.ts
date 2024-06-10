import { z } from "zod";

const signUpSchema = z
    .object({
        firstName: z.string()
            .min(6, { message: "First name must be 6 min charcters" })
            .max(10, { message: "first name must be no longer" }),
        lastName: z.string()
            .min(6, { message: "Last name must be 6 min charcters" })
            .max(10, { message: "last name must be no longer" }),
        email: z.string().min(1, { message: "Email address is required" }).email(),
        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters longs" })
            .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
                message: "Password should contain at least 1 special character",
            }),
        confirmPassword: z
            .string()
            .min(1, { message: "Confirm Password is required" }),
    })
    .refine((input) => input.password === input.confirmPassword, {
        message: "Password and Confirm Password does not match",
        path: ["confirmPassword"],
    });

type signUpType = z.infer<typeof signUpSchema>;

export { signUpSchema, type signUpType }