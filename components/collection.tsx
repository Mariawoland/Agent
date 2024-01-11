import { IVacancies } from '@/lib/database/models/Vacancies.model'
import React from 'react'
import Card from './card';

type CollectionProps = {
    data: IVacancies[],
    limit: number,
}

const Collection = ({
    data
}: CollectionProps) => {
    return (
        <>
            <div className="p-8">
                <ul className="w-full flex flex-wrap justify-center">
                    {data.map((vacancies) => {

                        return (
                            <li key={vacancies._id} className="flex justify-center">
                                <Card vacancies={vacancies} />
                            </li>
                        )
                    })}
                </ul>

            </div>
        </>
    )
}

export default Collection;