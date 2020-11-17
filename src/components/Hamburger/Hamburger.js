import {useContext} from "react"
import {AppContext} from "context/App"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"

const HamburgerWrapper = styled(FontAwesomeIcon)`
    display: none;
    cursor: pointer;
    font-size: 1.5rem;

    @media (max-width: 600px) {
        display: block;
    }
`

const Hamburger = () => {
    const appContext = useContext(AppContext)
    const {setOpen} = appContext

    const onClick = () => {
        setOpen(true)
    }

    return (
        <HamburgerWrapper aria-label="menu" icon={faBars} onClick={onClick} />
    )
}

export default Hamburger