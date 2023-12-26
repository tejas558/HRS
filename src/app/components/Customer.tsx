"use client";

import { useRouter } from 'next/navigation';

export default function Customer() {

    const router = useRouter();

    return (
        <div className="">
            <center>
            <div>
                Hi! Are you a valued guest?
            </div>
            </center>
            <center>
            <button onClick={() => router.push('/customer/login')}>
                Click here to Login!
            </button>
            </center>
            <center>
            <button onClick={() => router.push('/customer/signup')}>
                Click here to Signup!
            </button>
            </center>
        </div>
    )
}