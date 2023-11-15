import type {MetaFunction} from "@remix-run/node"

const meta: MetaFunction = () => [
    {
        title: "💿 remix starter | hire me",
    },
]

const IndexRoute = () => {
    return <h2 className="text-2xl font-bold">hire me</h2>
}

export default IndexRoute
export {meta}
