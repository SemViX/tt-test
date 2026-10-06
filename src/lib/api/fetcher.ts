
const BASE_URL = import.meta.env.VITE_API_URL?? "http://localhost:3000/"

async function fetcher<T>(path:string, init?:RequestInit): Promise<T>{
    let res:Response

    try{
        res = await fetch(`${BASE_URL}${path}`, {
            headers: {"Content-Type":"aplication/json"},
            ...init
        })
    }
    catch{
        throw new Error("Сервер недоступний.")
    }

    if(!res.ok){
        throw new Error(`Помилка сервера - ${res.status}`)
    }

    return res.json()
}

export const apiFetch = {
    get: <T>(path:string) => {
        return fetcher<T>(path)
    },
    post: <T>(path:string, body:undefined) => {
        return fetcher<T>(path, {method:"POST", body:JSON.stringify(body)})
    },
    patch: <T>(path:string, body:undefined) => {
        return fetcher<T>(path, {method:"PATCH", body:JSON.stringify(body)})
    },
    delete:<T>(path:string) => {
        return fetcher<T>(path, {method:"DELETE"})
    }

}