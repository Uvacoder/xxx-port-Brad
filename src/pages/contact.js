import "styles/fancyLinks.css"

import SEO from "@bradgarropy/gatsby-plugin-seo"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

const Contact = styled.div`
    align-self: center;
    justify-self: center;

    font-size: 1rem;

    table {
        font-size: 1.5rem;
        margin-left: 0;
    }

    td {
        padding: 0 1rem 0 0;
    }
`

const ContactPage = ({data}) => {
    const {html} = data.contact

    return (
        <>
            <SEO title="👋🏼 say hi" />

            <Contact
                className="fancyLinks"
                dangerouslySetInnerHTML={{__html: html}}
            />
        </>
    )
}

ContactPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        contact: markdownRemark(
            fileAbsolutePath: {regex: "/content/pages/contact/"}
        ) {
            html
        }
    }
`

export default ContactPage
