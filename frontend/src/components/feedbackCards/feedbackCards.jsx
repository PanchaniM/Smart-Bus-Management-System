import { React, useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

export default function FeedbackCards() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div>
            <div className="card_container">
            <div className="gold-hr">
                <hr/>
            </div>
                <div className="home_headings">
                    <h1>CUSTOMER FEEDBACKS</h1>
                </div>

                <div className="card" data-aos="flip-down">

                </div>
            </div>
        </div>
    )
}

