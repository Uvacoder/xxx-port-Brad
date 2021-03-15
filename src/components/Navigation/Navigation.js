import {Link} from "gatsby"
import styled from "styled-components"

const NavigationWrapper = styled.nav`
    display: grid;
    grid-auto-flow: column;
    column-gap: 1.25rem;

    @media (max-width: 600px) {
        display: none;
    }
`

const NavigationLink = styled(Link)`
    color: ${({theme}) => theme.colors.black};

    &:hover {
        color: ${({theme}) => theme.colors.primary};
    }
`

const Navigation = () => {
    return (
        <NavigationWrapper>
            <NavigationLink to="/blog">blog</NavigationLink>
            <span>|</span>
            <NavigationLink to="/now">now</NavigationLink>
            <span>|</span>
            <NavigationLink to="/uses">uses</NavigationLink>
            <span>|</span>
            <NavigationLink to="/hire-me">hire me</NavigationLink>
            <span>|</span>
            <NavigationLink to="/contact">contact</NavigationLink>
        </NavigationWrapper>
    )
}

export default Navigation
