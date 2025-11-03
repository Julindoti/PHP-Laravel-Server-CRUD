
import { Head, usePage } from '@inertiajs/react';
import AnimatedCanvas from '@/Components/AnimatedCanvas'
import {useState, useEffect } from 'react';

export default function HomePage(){
    const { props } = usePage();
    const user = props.auth?.user;
    const guest = !user;

    const [loaded, setIsLoaded] = useState(false);
    useEffect(()=>{
    setIsLoaded(true);
     if(!user){
           console.log("no user logged, using guest account")
            return
        }
    console.log("user logged:", user.name, user.email)
    },[])

    return(
        <>
          <Head  title="Home"/>

           <div className={`h-dvh w-full bg-black flex flex-col justify-center items-center `}>
            {guest ? (

                <h1 className={` text-white transition-all text-xl font-medium
                 duration-900 delay-300 origin-top ${loaded ? 'opacity-100 translate-y-0 ' : 'opacity-0 -translate-y-full'}
                `}>Welcome, Guest
               </h1>
            ) : (

                <h1 className={` text-white transition-all text-xl font-medium
                 duration-900 delay-300 origin-top ${loaded ? 'opacity-100 translate-y-0 ' : 'opacity-0 -translate-y-full'}
                `}>Welcome, {user.name}
               </h1>
                    )}

            <div className={`transition-all duration-500 delay-200 origin-top ${loaded ? 'opacity-100 translate-y-0 ' : 'opacity-0 -translate-y-full'}`}>
             <AnimatedCanvas />
            </div>

           </div>
        </>
    )
}
