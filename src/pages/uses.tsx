import "styles/fancyLinks.css"

import SEO from "@bradgarropy/next-seo"
import {FC} from "react"

type UsesPageProps = {
    data: {
        uses: {
            html: string
        }
    }
}

const UsesPage: FC<UsesPageProps> = ({data}) => {
    const {html} = data.uses

    return (
        <>
            <SEO title="💠 uses" />

            <div
                className="fancyLinks"
                dangerouslySetInnerHTML={{__html: html}}
            />
        </>
    )
}

export default UsesPage
