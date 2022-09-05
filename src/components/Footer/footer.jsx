import React from "react"
import "./footer.css"
import crappoLogo from "../../images/logo.svg"
import visaLogo from "../../images/visa.png"
import masterCardLogo from "../../images/mastercard.png"
import bitcoinLogo from "../../images/bitcoin.png"
import youtubeLogo from "../../images/youtube 1.png"
import whatsappLogo from "../../images/facebook-f 1.png"
import instagramLogo from "../../images/instagram 1.png"
import twitterLogo from "../../images/twitter 1.png"
import linkedInLogo from "../../images/linkedin 1.png"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_upper_div">
                <div className="footer_div">
                    <img src={crappoLogo} alt="logo" />
                </div>
                <div className="footer_div">
                    <ul className="footer_list">
                        <li className="list_header">Quick Links</li>
                        <li className="list_item">Home</li>
                        <li className="list_item">Products</li>
                        <li className="list_item">About</li>
                        <li className="list_item">Features</li>
                        <li className="list_item">Contact</li>
                    </ul>
                </div>
                <div className="footer_div">
                    <ul className="footer_list">
                        <li className="list_header">Resources Links</li>
                        <li className="list_item">Download Whitepapper</li>
                        <li className="list_item">Smart Token</li>
                        <li className="list_item">Blockchain Explore</li>
                        <li className="list_item">Crypto API</li>
                        <li className="list_item">Interest</li>
                    </ul>
                </div>
                <div className="payment_options_div footer_div">
                    <p>We accept the following payment systems</p>
                    <div className="payment_options_images">
                        <div className="payment_logo_div">
                            <img src={visaLogo} alt="visa" />
                        </div>
                        <div className="payment_logo_div">
                            <img src={masterCardLogo} alt="mastercard" />
                        </div>
                        <div className="payment_logo_div">
                            <img src={bitcoinLogo} alt="bitcoin" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom_div">
                <p>© 2022 CRAPPO. All rights reserved.</p>
                <div className="social_media_contacts">
                    <img src={youtubeLogo} alt="youtubeLogo" />

                    <img src={whatsappLogo} alt="whatsappLogo" />

                    <img src={instagramLogo} alt="instagramLogo" />

                    <img src={twitterLogo} alt="twitterLogo" />

                    <img src={linkedInLogo} alt="linkedInLogo" />
                </div>
            </div>
        </footer>
    )
}

export default Footer
