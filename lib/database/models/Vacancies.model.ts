import { Document, Schema, model, models } from "mongoose";

export interface IVacancies extends Document {
    _id: string;
    title: string;
    description: string;
    company: string;
    salary: string;
    place: string;
}

const VacanciesSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    company: { type: String },
    salary: { type: String },
    place: { type: String }
})

const Vacancies = models.Vacancies || model('Vacancies', VacanciesSchema);

export default Vacancies;