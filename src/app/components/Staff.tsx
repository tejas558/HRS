"use client";

import { useRouter } from "next/navigation";

export default function Staff() {
    
    const router = useRouter();

    return (
        <div className="">
            <center>
            <div>
                Hi! Are you a member of our staff?
            </div>
            </center>
            <center>
            <button onClick={() => router.push('/staff/login')}>
                Click here to Login!
            </button>
            </center>
        </div>
    )
}