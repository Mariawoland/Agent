"use server";

import { connectToDatabase } from "../database";
import Vacancies from "../database/models/Vacancies.model";
import { GetAllVacanciesParams } from '@/types'
import { handleError } from "../utils";

export async function getAllVacancies({ limit, page }: GetAllVacanciesParams) {
    try {
        await connectToDatabase()

        const skipAmount = (Number(page) - 1) * limit
        const vacanciesQuery = Vacancies.find()
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(limit)

        const vacancies = await vacanciesQuery;
        const vacanciesCount = await Vacancies.countDocuments()

        return {
            data: JSON.parse(JSON.stringify(vacancies)),
            totalPages: Math.ceil(vacanciesCount / limit),
        }
    } catch (error) {
        handleError(error)
    }
}