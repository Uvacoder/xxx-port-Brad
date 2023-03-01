import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import Uses from "components/Uses"
import type {GetStaticProps} from "next"
import type {FC} from "react"
import type {Markdown} from "types/markdown"
import {getMarkdownBySlug} from "utils/markdown"

type UsesPageProps = {
    uses: Markdown
}

const UsesPage: FC<UsesPageProps> = ({uses}) => {
    return (
        <Layout>
            <SEO title="💠 uses" />
            <Uses uses={uses} />
        </Layout>
    )
}

const getStaticProps: GetStaticProps = async () => {
    const uses = await getMarkdownBySlug("uses")

    return {
        props: {
            uses,
        },
    }
}

export default UsesPage
export {getStaticProps}
