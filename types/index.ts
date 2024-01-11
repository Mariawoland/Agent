export type GetAllVacanciesParams = {
    limit: number
    page: number
}
export type Vacancies = {
    _id: string
    title: string
    description: string
    company: string
    salary: string
    place: string
}
export type UrlQueryParams = {
    params: string
    key: string
    value: string | null
}

export type RemoveUrlQueryParams = {
    params: string
    keysToRemove: string[]
}

export type SearchParamProps = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}