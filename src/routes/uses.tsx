import type {MetaFunction} from "@remix-run/cloudflare"
import {json} from "@remix-run/cloudflare"
import {useLoaderData} from "@remix-run/react"

import Layout from "~/components/Layout"
import Uses from "~/components/Uses"
import {getMarkdownBySlug} from "~/utils/markdown.server"
import {getMeta} from "~/utils/meta"

export const loader = async () => {
    const uses = await getMarkdownBySlug("uses")
    return json({uses})
}

export const meta: MetaFunction = () => {
    const meta = getMeta({
        title: "💠 uses",
    })

    return meta
}

const UsesRoute = () => {
    const {uses} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <Uses uses={uses} />
        </Layout>
    )
}

export default UsesRoute
