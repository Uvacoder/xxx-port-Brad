import type {LoaderFunctionArgs, MetaFunction} from "@remix-run/node"
import {json} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"

import FourOhFour from "~/components/FourOhFour"
import Layout from "~/components/Layout"
import {getMeta} from "~/utils/meta"
import {getLatestPost} from "~/utils/posts"
import {checkRedirects} from "~/utils/redirects"
import {getLatestVideos} from "~/utils/videos"

export const loader = async ({request}: LoaderFunctionArgs) => {
    console.log("$")
    checkRedirects(request)

    const latestPost = getLatestPost()
    const latestVideos = await getLatestVideos(2)

    return json({
        latestPost,
        latestVideos,
    })
}

export const meta: MetaFunction = () => {
    const meta = getMeta({
        title: "🤷🏼‍♂️ not found",
    })

    return meta
}

const NotFoundRoute = () => {
    const {latestPost, latestVideos} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <FourOhFour post={latestPost} videos={latestVideos} />
        </Layout>
    )
}

export default NotFoundRoute
