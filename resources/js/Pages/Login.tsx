import { Head } from "@inertiajs/react";
import LoginModal from "../Components/SignUp";
import SignInForm from "@/Components/SignIn";

export default function Login(){
    return(
        <>
          <Head title="Login"/>
          <div className="h-dvh w-full bg-slate-950 flex justify-center items-center"> 
           <SignInForm />
           </div>
        </>
    )
}