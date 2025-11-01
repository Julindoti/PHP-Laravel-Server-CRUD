import React from "react";
import { Button } from "@/components/ui/button";

function LoginModal(){
  return(
    <>
    <div
        className="bg-white gap-4 p-10 py-2 rounded-md justify-center items-center text-lg h-110 w-90 justify-self-center flex ">
        <form
            className=" relative p-2 h-full w-full gap-4  justify-self-center self-center flex flex-col">
            <label className="self-center font-bold text-lg">Login</label>
            <label className="">Email</label>
            <input type="email" placeholder="" className="p-1 border border-gray-600" />
            <label className="">Senha</label>
            <input type="password" placeholder="" className="p-1 border border-gray-600 " />

            <span className="text-sm self-center">
                Não possui uma conta? <a href="/signup" className="text-blue-600"> clique aqui</a> !

            </span>
            <Button type="submit">
                Conectar</Button>
        </form>
        </div>
    </>
  )
}

export default LoginModal;
