import SEO from "@bradgarropy/next-seo"
import Sponsors from "components/Sponsors"
import {useSponsors} from "hooks"
import {FC} from "react"

const SponsorsPage: FC = () => {
    const sponsors = useSponsors()

    return (
        <>
            <SEO title="💜 sponsors" />

            <Sponsors sponsors={sponsors} />
        </>
    )
}

export default SponsorsPage
