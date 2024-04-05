import {http} from "@bradgarropy/http"
import type {ActionFunctionArgs} from "@remix-run/cloudflare"
import {json} from "@remix-run/cloudflare"

export const action = async ({request}: ActionFunctionArgs) => {
    const {email} = await request.json()
    const apiKey = process.env.LOOPS_API_KEY

    const subscriber = await http.post(
        "https://app.loops.so/api/v1/contacts/create",
        {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
            body: {
                email,
                source: "bradgarropy.com",
            },
        },
    )

    return json(subscriber)
}
