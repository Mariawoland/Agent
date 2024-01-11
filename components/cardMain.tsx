"use client";
import { IVacancies } from '@/lib/database/models/Vacancies.model'
import React from 'react'
import { FaBuilding } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { PiCurrencyGbpBold } from 'react-icons/pi';

type CardProps = {
    vacancies: IVacancies,
}

const CardMain = ({ vacancies }: CardProps) => {
    return (
        <button className='h-full min-w-[270px] w-[300px] max-w-[350px] border border-four-2 overflow-hidden rounded-2xl rem-2 transition-all duration-500 relative'>

            <p className='absolute top-2 right-2 text-[10px] text-one-1 bg-three-1 rounded-full py-1 px-2 ms-auto w-[54px]'>IT Jobs</p>

            <div className='p-5'>
                <h3 className='block pt-4 text-2xl font-semibold text-four-3 hover:text-one-1 transition-all duration-500'>{vacancies.title}</h3>

                <div className='flex items-center gap-2 text-four-3 pt-4'>
                    <span className='2xl'>
                        <FaBuilding />
                    </span>
                    <span>{vacancies.company}</span>
                </div>

                <div className='flex items-center gap-2 text-four-3'>
                    <span className='2xl'>
                        <IoLocationOutline />
                    </span>
                    <span>{vacancies.place}</span>
                </div>

                <div className='flex items-center gap-2 text-four-3'>
                    <span className='2xl'>
                        <PiCurrencyGbpBold />
                    </span>
                    <span>{vacancies.salary}</span>
                </div>
            </div>

        </button>
    )
}

export default CardMain;