import React from "react"
import "./navbar.css"
import crappoLogo from "../../images/logo.svg"
import menu from "../../images/menu.svg"
import cancel from "../../images/cancel.svg"
import { useMediaQuery } from "react-responsive"

function Navbar() {
    const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" })
    const [showOptions, setShowOpotions] = React.useState(true)

    function toggleOptions() {
        if (isSmallScreen) {
            setShowOpotions((prevState) => !prevState)
        } else {
            setShowOpotions(true)
        }
    }
    React.useEffect(toggleOptions, [isSmallScreen])

    return (
        <nav className="navbar">
            <img src={crappoLogo} alt="crappo logo" />
            {isSmallScreen && (
                <div className="menu_button_div" onClick={toggleOptions}>
                    <img src={menu} alt="crappo logo" />
                </div>
            )}
            {showOptions && (
                <div className="nav_options">
                    {isSmallScreen && (
                        <div onClick={toggleOptions} className="cancel_button">
                            <img src={cancel} alt="" />
                        </div>
                    )}
                    <a href="" className="navbar_option_link">
                        Products
                    </a>
                    <a href="" className="navbar_option_link">
                        Features
                    </a>
                    <a href="" className="navbar_option_link">
                        About
                    </a>
                    <a href="" className="navbar_option_link">
                        Contact
                    </a>
                    <div className="navbar_buttons">
                        <divs className="navbar_login_button">Login</divs>|
                        <divs className="navbar_register_button">Register</divs>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
