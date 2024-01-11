"use client";
import React, { useRef } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';

const page = () => {

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
        <div className='w-full sm:p-8 p-4'>
            <form ref={form} onSubmit={sendEmail} id='subscribe' className='bg-three-1 rounded-3xl  overflow-hidden sm:p-8 p-6'>

                <h1 className='pt-4 sm:text-5xl text-3xl text-one-1 font-semibold text-center'>Contact</h1>

                <hr className='h-[2px] border-0 bg-white-1 my-10' />

                <div className="w-full flex sm:flex-row flex-col gap-8">
                    <input
                        type="name"
                        className="focus:outline-none sm:w-[220px] w-full rounded-full p-4 grow"
                        name="firstname"
                        placeholder="Enter your First Name..."
                    />
                    <input
                        type="name"
                        className="focus:outline-none rounded-full sm:w-[220px] w-full p-4 grow"
                        name="lastname"
                        placeholder="Enter your Last Name..."
                    />
                </div>

                <div className="w-full flex py-8">
                    <input
                        type="email"
                        className="focus:outline-none sm:w-[220px] w-full rounded-full p-4 grow"
                        name="email"
                        placeholder="Enter your First Email..."
                    />
                </div>

                <div className="w-full flex">
                    <input
                        type="number"
                        className="focus:outline-none sm:w-[220px] w-full rounded-full p-4 grow"
                        name="number"
                        placeholder="Enter your phone number..."
                    />
                </div>

                <div className="w-full flex py-8">
                    <textarea
                        className="focus:outline-none sm:w-[220px] w-full rounded-3xl p-4 grow"
                        name="message"
                        placeholder="Write your message..."
                    ></textarea>
                </div>


                <div className='w-full flex'>
                    <input type="submit" className={`w-full cursor-pointer transition-all duration-300 bg-one-1 py-4 text-white-1 rounded-full`} value="Send" />
                </div>

                <hr className='h-[2px] border-0 bg-white-1 my-10' />

                <p className='p-6 bg-white-1 text-four-1 rounded-3xl font-semibold'>We welcome your inquiries and feedback. Our dedicated team is here to assist you and ensure that your experience with us is seamless. Whether you have questions about our products, services, or if you just want to drop us a friendly message, we're eager to hear from you. Feel free to reach out via the contact form below, and we'll get back to you promptly. Additionally, you can connect with us through our social media channels for the latest updates and news. Your thoughts matter to us, and we appreciate the opportunity to connect. Thank you for considering us for your needs.</p>

            </form>

        </div>
    )
}

export default page