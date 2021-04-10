import Link from "components/Link"
import PropTypes from "prop-types"
import styled from "styled-components"

const Title = styled.h2`
    font-size: 4.5rem;
    font-weight: 900;
    letter-spacing: -0.2rem;
    margin: 0rem 0rem 1.75rem 0rem;
`

const StyledLink = styled(Link)`
    display: inline-block;

    :hover {
        text-shadow: 3px 3px ${({theme}) => theme.colors.primary};
    }
`

const Section = ({title, link, children}) => {
    return (
        <section>
            <StyledLink to={link}>
                <Title>{title}</Title>
            </StyledLink>

            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    children: PropTypes.node,
}

export default Section
