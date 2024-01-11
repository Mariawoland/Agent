import { IVacancies } from '@/lib/database/models/Vacancies.model'
import React from 'react'
import CardMain from './cardMain';

type CollectionProps = {
    data: IVacancies[],
    limit: number,
}

const Collection = ({
    data
}: CollectionProps) => {
    return (
        <>
            <div className='p-6 w-full'>

                <div className='flex overflow-x-auto yuti'>
                    {data.map((vacancies) => {

                        return (
                            <div key={vacancies._id} className="p-[10px] block">
                                <CardMain vacancies={vacancies} />
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default Collection;