import ColorTheme from "components/ColorTheme"
import Logo from "components/Logo"
import MobileNavigation from "components/MobileNavigation"
import Navigation from "components/Navigation"
import Streaming from "components/Streaming"
import {Link} from "gatsby"
import {useLive} from "hooks"

import * as styles from "./Header.module.css"

const Header = () => {
    const live = useLive()

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <Link to="/" aria-label="bg">
                    <Logo />
                </Link>

                {live && <Streaming />}
            </div>

            <div className={styles.right}>
                <Navigation />
                <MobileNavigation />
                <ColorTheme />
            </div>
        </header>
    )
}

export default Header
