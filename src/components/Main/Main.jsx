import React from "react"
import Select from "react-select"
import "./main.css"

import heroImage from "../../images/hero-img.png"
import _30b from "../../images/$30b.png"
import _10m from "../../images/10m.png"
import _195 from "../../images/195.png"
import whyImage from "../../images/why-img.png"
import bitcoinImage from "../../images/bitcon.png"
import ethereumImage from "../../images/ethereum.png"
import litecoinImage from "../../images/litecoin.png"
import featureImage1 from "../../images/feature-1-img.png"
import featureImage2 from "../../images/feature-2-img.png"
import featureImage3 from "../../images/feature-3-img.png"
import arrowRight from "../../images/Arrow Right.png"
import arrowRight1 from "../../images/Arrow Right (1).png"

function Main() {
    const [activeCoin, setActiveCoin] = React.useState(0)
    const options = [
        { value: "TH/s", label: "TH/s" },
        { value: "H/s", label: "H/s" },
        { value: "KH/s", label: "KH/s" },
        { value: "GH/s", label: "GH/s" },
        { value: "MH/s", label: "MH/s" },
    ]
    // const observer = new IntersectionObserver()
    return (
        <main>
            <div className="flex_div">
                <div className="fastest_secure_div grow_big">
                    <div className="black_friday">
                        <small>
                            <span>70% SAVE</span>
                            for the best black friday deals
                        </small>
                    </div>
                    <h1>Fastest & Secure Platform To Invest In Crypto</h1>
                    <small className="almost_white">
                        buy and sell cryptocurrencies by trusted 10M wallets, in
                        over 100m transactions
                    </small>
                    <div className="try_for_free">
                        Try For FREE <img src={arrowRight} alt="" />
                    </div>
                </div>
                <div className="image_div">
                    <img src={heroImage} alt="heroImage" />
                </div>
            </div>

            <div className="flex_div number_info_divs flex_div_3_items">
                <div className="number_info_div">
                    <img src={_30b} alt="$30b" />
                    <div>
                        <h2>$30B</h2>
                        <small className="almost_white">
                            Digital Currency Exchange
                        </small>
                    </div>
                </div>
                <div className="number_info_div">
                    <img src={_195} alt="195+" />
                    <div>
                        <h2>190+</h2>
                        <small className="almost_white">
                            Counties Around The World
                        </small>
                    </div>
                </div>
                <div className="number_info_div">
                    <img src={_10m} alt="$10m" />
                    <div>
                        <h2>$10M</h2>
                        <small className="almost_white">
                            Trusted Wallet Investors
                        </small>
                    </div>
                </div>
            </div>
            <div className="flex_div reverse">
                <div className="image_div">
                    <img src={whyImage} alt="whyImage" />
                </div>
                <div className="why_chappo">
                    <h1>why you should choose CHAPPO</h1>
                    <p className="almost_white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero, laboriosam? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. In, praesentium.
                    </p>
                    <div className="learn_more">learn more</div>
                </div>
            </div>
            <div className="amount_to_earn">
                <h2>How Much Can You Earn With Us</h2>
                <small className="almost_white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro, id similique temporibus dignissimos tempore odio?
                </small>
            </div>
            <div className="rate_calculation_outerdiv">
                <div className="rate_calculation_div">
                    <div className="flex_div calculation_div">
                        <input
                            type="text"
                            placeholder="Enter your hash rate"
                            className="input_text"
                        />
                        <Select
                            options={options}
                            placeholder="TH/s"
                            className="select"
                        />
                        <div className="calculate_button">Calculate</div>
                    </div>
                    <p className="blue">ESTIMATED 24 HOUR REVENUE:</p>
                    <h1>
                        0.055 130 59 ETH <span>($1275)</span>
                    </h1>
                    <p className="grey">
                        Revenue will change based on mining difficulty and
                        Ethereum price.
                    </p>
                </div>
            </div>
            <div className="trade_securely_outer_div">
                <div className="trade_securely">
                    <h2>
                        Trade Securely And Market The High Growth
                        Cryptocurrencies.
                    </h2>
                    <div className="flex_div crypto_divs flex_div_3_items">
                        <div
                            onClick={() => setActiveCoin(1)}
                            className={`crypto_div ${
                                activeCoin === 1 ? "active_coin" : ""
                            }`}
                        >
                            <img src={bitcoinImage} alt="bitcoin logo" />
                            <h2>Bitcoin </h2> <span>BTC</span>
                            <p>
                                Digital currency in which a record of
                                transactions is maintained.
                            </p>
                            <div className="start_mining_div">
                                {activeCoin === 1 && "Start Mining"}
                                <img
                                    src={
                                        activeCoin === 1
                                            ? arrowRight
                                            : arrowRight1
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                        <div
                            onClick={() => setActiveCoin(2)}
                            className={`crypto_div ${
                                activeCoin === 2 ? "active_coin" : ""
                            }`}
                        >
                            <img src={ethereumImage} alt="ethereum logo" />
                            <h2>Ethereum </h2> <span>ETH</span>
                            <p>
                                Blockchain technology to create and run
                                decentralized digital applications.
                            </p>
                            <div className="start_mining_div">
                                {activeCoin === 2 && "Start Mining"}
                                <img
                                    src={
                                        activeCoin === 2
                                            ? arrowRight
                                            : arrowRight1
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                        <div
                            onClick={() => setActiveCoin(3)}
                            className={`crypto_div ${
                                activeCoin === 3 ? "active_coin" : ""
                            }`}
                        >
                            <img src={litecoinImage} alt="litecoin logo" />
                            <h2>Litecoin </h2>
                            <span>LTC</span>
                            <p>
                                Cryptocurrency that enables instant payments to
                                anyone in the world.
                            </p>
                            <div className="start_mining_div">
                                {activeCoin === 3 && "Start Mining"}
                                <img
                                    src={
                                        activeCoin === 3
                                            ? arrowRight
                                            : arrowRight1
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="market_sentiments">
                Market Sentiments, Portfolio, And Run The Infrastructure Of Your
                Choice
            </h1>
            <div className="flex_div">
                <div>
                    <h2>Invest Smart</h2>
                    <small className="almost_white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aspernatur rem ducimus vitae maiores dolorum
                        alias.
                    </small>
                    <div className="learn_more">
                        <small>learn more</small>
                    </div>
                </div>
                <div className="image_div">
                    <img src={featureImage1} alt="feature image" />
                </div>
            </div>
            <div className="flex_div reverse">
                <div className="image_div">
                    <img src={featureImage2} alt="feature image" />
                </div>
                <div>
                    <h2>Detailed Statistics</h2>
                    <small className="almost_white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aspernatur rem ducimus vitae maiores dolorum
                        alias.
                    </small>
                    <div className="learn_more">
                        <small>learn more</small>
                    </div>
                </div>
            </div>
            <div className="flex_div">
                <div>
                    <h2>Grow Your Profit And Track Your Investments</h2>
                    <small className="almost_white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aspernatur rem ducimus vitae maiores dolorum
                        alias.
                    </small>
                    <div className="learn_more">
                        <small>learn more</small>
                    </div>
                </div>
                <div className="image_div">
                    <img src={featureImage3} alt="feature image" />
                </div>
            </div>
            <div className="start_mining_now_div flex_div">
                <div className="flex_column">
                    <h2>Start Mining Now</h2>
                    <small>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Iste, ipsum.
                    </small>
                    <small>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ad, saepe
                    </small>
                </div>
                <input
                    type="text"
                    placeholder="enter message"
                    className="input_text"
                />
                <div className="subscribe_div">Subscribe</div>
            </div>
        </main>
    )
}

export default Main
