import { type SignUpAuthValue, SignUpAuthSchema } from "@/Auth/SignUpAuth";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import api from "@/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { router } from "@inertiajs/react";

const SignUpForm = () => {
    const defaultValues: Partial<SignUpAuthValue> = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const form = useForm<SignUpAuthValue>({
        resolver: zodResolver(SignUpAuthSchema),
        defaultValues,
        mode: "onChange",
    });
    async function onSubmit(values: SignUpAuthValue) {
        const payload = {
            username: values.username,
            email: values.email,
            password: values.password,
            password_confirmation: values.confirmPassword,
        };

        try {
            const response = await api.post("/api/user/create", payload);
            if (response.status != 201) {
                console.log(
                    "Error when trying to create user",
                    response.data?.message
                );
                return;
            }

            console.log("User was submmited with success", response.data);
            toast.success("Usuário cadastrado com sucesso!");

            form.reset(values);
        } catch (err: any) {
            console.log(err.response.status);
            if (err.response.status == 422) {
                console.log(
                    "The specied email not avaiable anymore on our system "
                );
                toast.error("Este email está cadastrado");
                return;
            }
            console.error("Error when trying request the server API", err);
        }
    }
    const handleCancel = () => {
        router.visit("/signin");
    };
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                closeOnClick
                pauseOnHover
                hideProgressBar={true}
                theme="Light"
            />
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-2 bg-white p-4 w-1/4 text-md rounded-md flex flex-col"
                >
                    <div className="text-black font-semibold text-[21px]">
                        {" "}
                        SignUp
                    </div>
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Digite aqui seu nome de usuario"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Digite aqui seu email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Senha</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Digite aqui sua senha"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirme sua senha</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Digite novamente sua senha"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="justify-self-center self-center">
                        Já tem uma conta?{" "}
                        <a href="/signin" className="text-blue-500">
                            entre aqui!
                        </a>
                    </div>
                    <div className="gap-5 flex self-center items-center justify-center w-full border">
                        <Button type="submit" className="justify-self-start">
                            Confirmar
                        </Button>
                        <Button
                            type="button"
                            onClick={handleCancel}
                            className="justify-self-end bg-white border border-black text-black hover:text-white
                        transition-all duration-200"
                        >
                            Cancelar
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    );
};
export default SignUpForm;
