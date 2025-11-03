import z from "zod"

export const SignInAuthSchema= z.object({
    username: z.string().min(3,{
        message: "Nome de usário deve conter pelo menos 3 caracteres"
    }).max(30, {
        message:"Nome de usuário deve conter no maximo 30 caracteres",
    }),
    email: z.string().email({
        message: "Email valido é necessario para o cadastro",
    }),
    password: z.string().min(8, {
        message:"A senha deve conter pelo menos 8 caracteres",
    }),
    confirmPassword: z.string().min(8, {
        message:"As senhas devem ser iguais!"
    }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não são iguais",
    path:["confirmPassword"],

});

export type SigInAuthValue = z.infer<typeof SignInAuthSchema>;
