import z from 'zod'
import { email } from 'zod/v4-mini'

export const SignUpAuthSchema = z.object({
    email: z.string().email({
        message: "Esse email é invalido"
    }),
    password: z.string().min(8,{
        message: "Essa senha é invalida"
    })
})

export type SigUpAuthValue =  z.infer<typeof SignUpAuthSchema>