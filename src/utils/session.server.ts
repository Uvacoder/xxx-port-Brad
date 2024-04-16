import {createCookieSessionStorage} from "@remix-run/cloudflare"

import type {Theme} from "~/types/theme"

type Session = {
    theme: Theme
}

const {getSession, commitSession} = createCookieSessionStorage<Session>({
    cookie: {
        httpOnly: true,
        name: "bgTheme",
        path: "/",
        secure: true,
        // TODO: FIX THIS
        // secrets: [process.env.SESSION_SECRET],
        secrets: [""],
        sameSite: "lax",
    },
})

const getTheme = async (request: Request) => {
    const cookieHeader = request.headers.get("Cookie")
    const session = await getSession(cookieHeader)
    const theme: Theme = session.get("theme") ?? "light"

    return theme
}

const setTheme = async (theme: Theme, request: Request) => {
    const cookieHeader = request.headers.get("Cookie")
    const session = await getSession(cookieHeader)

    session.set("theme", theme)

    const cookie = await commitSession(session)
    return cookie
}

export {getTheme, setTheme}
