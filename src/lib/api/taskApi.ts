import dayjs from "dayjs";
import type { CreateTask, EditTask, Task } from "../../types/task.type";
import { apiFetch } from "./fetcher";

export const taskApi = {
    getList: () => apiFetch.get<Task[]>("tasks"),
    create: (data:CreateTask) => apiFetch.post<Task>("tasks", {...data, createdAt: dayjs().toISOString()}),
    delete: (id:number) => apiFetch.delete(`tasks/${id}`),
    edit: (id:number, data:EditTask) => apiFetch.patch<Task>(`tasks/${id}`, data)
}