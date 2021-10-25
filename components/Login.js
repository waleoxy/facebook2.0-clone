import React from 'react';
import Image from "next/image";
import { signIn } from 'next-auth/client';

function Login() {
    return (
        <div className="grid mt-20 place-items-center">
            <Image
                alt="logo"
                src="https://www.teahub.io/photos/full/172-1725552_facebook-logo-png.png"
                width={200} height={200}
                objectFit="contain"
            />
            <h1 
                onClick={signIn}
                className="p-5 mt-5 bg-blue-500 rounded-full text-white text-center mt-28
                cursor-pointer"
            >
                Log in with facebook
            </h1>
        </div>
    )
}

export default Login
