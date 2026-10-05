import dayjs, { type Dayjs } from "dayjs";

export interface Item{
    id:number;
    title:string;
    description:string;
    createdAt:string;
}

export const createInitialItems = ():Item[] => [
    ['Матриця', 'Кіберпанк про вибір між двома пігулками'],
    ['Інтерстеллар', 'Подорож крізь червоточину заради людства'],
    ['Дюна', 'Політика, спайс і піщані черви'],
    ['Початок', 'Крадіжка ідей у чужих снах'],
    ['Гладіатор', 'Помста римського генерала'],
].map(([title, description], i) => ({
    id: i + 1,
    title,
    description,
    createdAt: dayjs().subtract(i, "day").toISOString()
}))

export const filterItems = (items:Item[], query:string, date:Dayjs | null) => {
    const q = query.trim().toLowerCase()
    return items.filter((item) => {
        const byText = !q || item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)
        const byDate = !date || dayjs(item.createdAt).isSame(date, "day")
        return byText && byDate
    })
}