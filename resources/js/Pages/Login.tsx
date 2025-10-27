import { Head } from "@inertiajs/react";
import LoginModal from "./login_modal";

export default function Login(){
    return(
        <>
          <Head title="Login"/>
          <div className="h-dvh w-full bg-slate-950 flex justify-center items-center"> 
           <LoginModal />
           </div>
        </>
    )
}