import SignUpForm from "../Components/SignUp";
import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function SignUpPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 10);
    }, []);

    return (
        <>
            <Head title="SignUp" />
            <div className="h-dvh w-full  overflow-hidden bg-gradient-to-t from-slate-800 via-gray-900 to-slate-950  flex justify-center items-center">
                <div
                    className={`flex justify-center items-center w-full transition all duration-1000 ${
                        isLoaded
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-full"
                    }`}
                >
                    <SignUpForm />
                </div>
            </div>
        </>
    );
}
