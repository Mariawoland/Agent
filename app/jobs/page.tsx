import Collection from '@/components/collection';
import React from 'react';
import { getAllVacancies } from '@/lib/actions/Vacancies.actions';

export default async function Jobs() {

    const vacancies = await getAllVacancies({
        page: 1,
        limit: 100
    });

    return (

        <>
            <div className='px-[5%] pt-8'>
                <p className='text-4xl text-six-1 font-semibold'>All Vacancies</p>
                <p className='text-four-1 font-semibold pt-2'>Browse through endless offers and give your career a fresh start</p>
            </div>
            <div>
                <Collection
                    data={vacancies?.data}
                    limit={100}
                />
            </div>
        </>
    )
}