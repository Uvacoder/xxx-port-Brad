import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import Sponsors from "components/Sponsors"
import {GetStaticProps} from "next"
import {FC} from "react"
import {Sponsors as SponsorsType} from "types/sponsor"
import {getSponsors} from "utils/sponsors"

type SponsorsPageProps = {
    sponsors: SponsorsType
}

const SponsorsPage: FC<SponsorsPageProps> = ({sponsors}) => {
    return (
        <Layout>
            <SEO title="💜 sponsors" />
            <Sponsors sponsors={sponsors} />
        </Layout>
    )
}

const getStaticProps: GetStaticProps = async () => {
    const sponsors = await getSponsors()

    return {
        props: {
            sponsors,
        },
    }
}

export default SponsorsPage
export {getStaticProps}
