import { type SigInAuthValue, SignInAuthSchema } from "@/Auth/SingInAuth";
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

const SignInForm = () => {
    const defaultValues: Partial<SigInAuthValue> = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const form = useForm<SigInAuthValue>({
        resolver: zodResolver(SignInAuthSchema),
        mode: "onSubmit",
    });
    function onSubmit(values: SigInAuthValue) {
        console.log("User was submmited with sucess", values);

        console.log(JSON.stringify(values, null, 2));
    }
    return (
        <>
            <Form {...form} >
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6 bg-white p-4 w-1/4 text-md rounded-md flex flex-col"
                >
                <div className="text-black font-semibold text-[21px]"> SignIn</div>
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
                    <FormField 
                      control={form.control}
                      name="confirmPassword"
                      render={({field})=>(
                         <FormItem>
                          <FormLabel>Confirme sua senha</FormLabel>
                          <FormControl>
                          <Input placeholder="Digite novamente sua senha" {...field}/>  
                         </FormControl>  
                         <FormMessage />
                        </FormItem>
                        )}
                    
                    />
                    <div className="justify-self-center">
                        Já tem uma conta?<a href="/signin" className="text-blue-500">entre aqui!</a>
                    </div>
                    <Button type="submit" className="justify-self-end" >Confirmar</Button>
                </form>
            </Form>
        </>
    );
};
export default SignInForm;
