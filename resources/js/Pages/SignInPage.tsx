import SignInForm from "../Components/SignIn";
import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import {useState, useEffect} from 'react';

export default function SignInPage(){

    const [isLoaded, setIsLoaded]= useState(false);

    useEffect(() => {
        setTimeout(() => {

      setIsLoaded(true)
        }, 10);
    }, [])

    //this is how i can retrieve data from a user to some page
    const { props } = usePage();

    const user = props.auth?.user;

    const guest = !user;

     return(
       <>
          <Head title="SignIn"/>
          <div className="h-dvh w-full  overflow-hidden bg-gradient-to-t from-slate-800 via-gray-900 to-slate-950  flex justify-center items-center">
                <div className={`flex justify-center items-center w-full transition all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
                <SignInForm />
                </div>
           </div>
        </>

     )

}
