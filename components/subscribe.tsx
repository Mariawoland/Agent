"use client";
import React, { useRef } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';

export default function Subscribe() {

    const form = useRef(null);

    const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
            form.current
        ) {
            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                    form.current,
                    process.env.NEXT_PUBLIC_EMAILJS_USER_ID
                )
                .then(
                    (result) => {
                        alert(result.text);
                    },
                    (error) => {
                        alert(error.text);
                    }
                );
        }
    };

    return (
        <div className='w-full'>
            <form ref={form} onSubmit={sendEmail} id='subscribe' className="sm:flex hidden lg:w-[83%] w-full text-four-1 mt-3 rounded-full overflow-hidden bg-white-1">

                <p className='py-4 ps-5 text-four-4 text-[24px]'>
                    <MdOutlineEmail />
                </p>

                <input
                    type="email"
                    className="focus:outline-none w-[160px] py-4 px-2 grow"
                    name="email"
                    placeholder="Enter your email..."
                />

                <input type="submit" className={`cursor-pointer transition-all duration-300 bg-one-1 py-4 px-[8%] text-white-1 rounded-full`} value="Subscribe" />

            </form>

            <form ref={form} onSubmit={sendEmail} id='subscribe' className="sm:hidden flex flex-col gap-5 w-full text-four-1 mt-3">

                <input
                    type="email"
                    className="focus:outline-none w-full p-4 rounded-full"
                    name="email"
                    placeholder="Enter your email..."
                />

                <input type="submit" className={`cursor-pointer transition-all duration-300 bg-one-1 w-full p-4 text-white-1 rounded-full`} value="Subscribe" />

            </form>
        </div>

    );
}