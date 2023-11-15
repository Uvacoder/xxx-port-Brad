import type {MetaFunction} from "@remix-run/node"

export const meta: MetaFunction = () => [
    {
        title: "💿 remix starter | now slug",
    },
]

const IndexRoute = () => {
    return <h2 className="text-2xl font-bold">now slug</h2>
}

export default IndexRoute
