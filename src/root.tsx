import type {LinksFunction, MetaFunction} from "@remix-run/node"
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react"

import {createImageUrl} from "~/utils/cloudinary"

// import tailwindStyles from "~/styles/tailwind.css"

const meta: MetaFunction = () => [
    {charset: "utf-8"},
    {title: "💿 remix starter"},
    {viewport: "width=device-width,initial-scale=1"},
]

const links: LinksFunction = () => {
    const links = [
        // {
        //     rel: "stylesheet",
        //     href: tailwindStyles,
        // },
        {
            rel: "icon",
            href: createImageUrl("/site/favicon.ico"),
        },
    ]

    return links
}

const App = () => {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>

            <body className="">
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

export default App
export {links, meta}
