import SEO from "@bradgarropy/gatsby-plugin-seo"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import {link} from "styles/partials"

const Uses = styled.div`
    ${link}
`

const UsesPage = ({data}) => {
    const {html} = data.uses

    return (
        <>
            <SEO title="💠 uses" />

            <Uses dangerouslySetInnerHTML={{__html: html}} />
        </>
    )
}

UsesPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export const usesPageQuery = graphql`
    {
        uses: markdownRemark(
            fileAbsolutePath: {regex: "/content/pages/uses/"}
        ) {
            html
        }
    }
`

export default UsesPage
