import delay from "@/utils/delay"
import { useState } from "react"

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH"

function useFetch() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    async function fetchData(url: string, bodyData?: Record<string, string>, method: HttpMethod = "GET") {
        setLoading(true)
        setError("")
        // fake 1s delay
        await delay(1000)

        try {
            let response
            if (method === "GET") {
                response = await fetch(url)
            } else {
                response = await fetch(url, {
                    method,
                    headers: { "Content-Type": "application/json" },
                    body: bodyData ? JSON.stringify(bodyData) : undefined,
                })
            }
            const data = await response.json()

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`)
            } else if (bodyData?.username !== data.username || bodyData?.password !== data.password) {
                // for frontend login testing purposes only
                throw new Error("Invalid username or password")
            }

            return data

        } catch (err: any) {
            setError(err.message || "Unknown error")
        } finally {
            setLoading(false)
        }
    }
    return { loading, error, fetchData }
}

export default useFetch