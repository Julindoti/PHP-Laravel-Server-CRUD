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
import { router } from "@inertiajs/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import api from "@/api";
import { ToastContainer, toast }  from 'react-toastify';

const SignUpForm = () => {
    const defaultValues: Partial<SigInAuthValue> = {
        email: "",
        password: "",
    };

    const form = useForm<SignUpAuthValue>({
        resolver: zodResolver(SignUpAuthSchema),
        mode: "onSubmit",
    });
    async function onSubmit(values: SignUpAuthValue) {

        try {const response = await api.post('/api/user/login', values)

            if(response.data?.code != 201){

                console.error("The request failed to load properly", response.status);
                toast.error("Credenciais invalidas");
                return
            }
            console.log("User was logged with constess", values);
            toast.success("Login relizado com sucesso!")
            router.visit('/homepage')

        }catch(err){
            console.error("Something went wrong when executing the login ")
        }

    }
    return (
            <>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                closeOnClick
                pauseOnHover
                hideProgressBar={true}
                Theme="Light"
            />
            <Form {...form} >
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6 bg-white p-4 w-1/4 text-md rounded-md flex flex-col"
                >
                <div className="text-black font-semibold text-[21px]"> SignUp</div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({field}) =>(
                        <FormItem >
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Digite aqui seu email"
                          {...field }/>
                        </FormControl>
                        <FormMessage />

                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({field})=> (
                        <FormItem>
                          <FormLabel>Senha</FormLabel>
                          <FormControl>
                          <Input placeholder="Digite aqui sua senha" {...field} />
                         </FormControl>
                         <FormMessage />
                        </FormItem>
                        )}
                    />
                    <span className="self-center">
                      Não tem uma conta? <a href="/signup" className="text-blue-500">clique aqui!</a>
                    </span>
                    <Button>Entrar</Button>

                    </form>

                    </Form>
                    </>
         )
}

export default SignUpForm;
