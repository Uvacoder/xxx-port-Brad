import SEO from "@bradgarropy/next-seo"
import type {LoaderArgs} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"
import Layout from "components/Layout"
import PostList from "components/PostList"
import TopicMeta from "components/TopicMeta"
import type {FC} from "react"
import {getPostsByTopic, getTopic} from "utils/posts"

const loader = ({params}: LoaderArgs) => {
    // TODO: fix this
    const name = params.name as string
    const topic = getTopic(name)
    const posts = getPostsByTopic(topic.name)

    return {
        topic,
        posts,
    }
}

const TopicRoute: FC = () => {
    const {topic, posts} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <SEO title={`${topic.icon} ${topic.name}`} />

            <TopicMeta topic={topic} />
            <PostList posts={posts} />
        </Layout>
    )
}

export default TopicRoute
export {loader}
