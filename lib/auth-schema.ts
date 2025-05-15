import { z } from "zod";

export const formSchema = z.object({
    name: z
        .string()
        .min(2, {message: 'Name must be atleast 2 characters long'})
        .max(50, {message: 'Name cannot exceed 50 characters long'}),

    email: z
        .string()
        .email({message: 'Please enter a vaild email address'})
        .min(2)
        .max(50),

    password: z
        .string()
        .min(8, {message: 'Password must be atleast 2 characters long'})
        .max(50, {message: 'Password cannot exceed 50 characters long'})

})

export const sigInFormSchema = formSchema.pick({
    email: true,
    password: true
})