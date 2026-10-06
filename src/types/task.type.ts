export const STATUSES = ["Todo", 'In Progress', "Done"] as const
export const PRIORITIES = ['Low', 'Medium', 'High'] as const

export type Status = (typeof STATUSES)[number]
export type Priority = (typeof PRIORITIES)[number]

export interface Task{
    id:number;
    title:string;
    description:string;
    status: Status;
    priority:Priority;
    createdAt:string;

}

export type CreateTask = Omit<Task, "id" | "createdAt">
export type EditTask = Partial<CreateTask>