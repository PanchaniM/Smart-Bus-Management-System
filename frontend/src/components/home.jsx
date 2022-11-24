import { React, useEffect } from 'react'
import Header from './header'
import { Link } from 'react-router-dom'
import Logincart from './usercard/card'
import FeedbackCards from './feedbackCards/feedbackCards'
import Aos from 'aos'
import "aos/dist/aos.css"
import AboutUsCards from './AboutUs/AboutUsCards'
import FeedBack from 'react-feedback-popup';


export default function Home() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div className="home-background">
            <Header />
            <Logincart />

            <div className="hero-image" data-aos="fade-left" >
                <div className="bg_banner" ></div>
                <div className="hero-text" data-aos="fade-right">
                    <h1>CONNECTING PEOPLE <br />
                        <font color="#002D67">WITH</font> <br />
                        DESTINATIONS </h1>
                    <p>With a whole new experience and completely adaptable. <br />
                        Booking, your significant serenity begins second <br />
                        you start dreaming.</p>

                    <div className="book-now-link" >
                        <a href="#">Book now
                            <i className="far fa-arrow-circle-right"></i>
                        </a>
                    </div>

                    <div className="home-buttons">

                        <Link to="/Login-Page">
                            <button>Login</button>   
                        </Link>

                        <Link to="/Sign-Up">
                            <button>Sign up</button>
                        </Link>
                    </div>



                </div>

            </div>

            <div className="home-content">
                <div className="whyus-container">
                    <div className="gold-hr">
                        <hr />
                    </div>
                    <div className="home_headings">
                        <h1>WHY US?</h1>
                    </div>


                </div>

                <div className="whyus-content" data-aos="fade-left">
                    <div className="whyus-img"><div className="img1"></div></div>
                    <div className="whyus-txt-l"></div>
                </div>
                <div className="whyus-content" data-aos="fade-right">
                    <div className="whyus-img-l" ></div>
                    <div className="whyus-txt" ><div className="img2"></div></div>
                </div>

                <div data-aos="fade-left" className="whyus-content">
                    <div className="whyus-img"><div className="img3"></div></div>
                    <div className="whyus-txt-l"></div>
                </div>

            </div>
            {/* <div className="feedbackCards" data-aos="zoom-out-up">
                <FeedbackCards />
            </div> */}


            <div className="about-us-cards">
                <AboutUsCards />
            </div>

            <FeedBack
				style={{zIndex:'2', marginLeft:'20px', position:'fixed'}}
				position="left"
				numberOfStars={5}
				headerText="Hello"
				bodyText="Your feedback"
				buttonText="Your Feedback"
				handleClose={() => console.log("handleclose")}
				handleSubmit={(data) => 
					fetch('xxxxxx', {
						headers: {
							Accept: 'application/json',
							'Content-Type': 'application/json'
						},
						method: 'POST', // or 'PUT'
						body: JSON.stringify(data),
					}).then((response) => { 
						if (!response.ok) {
							return Promise.reject('Our servers are having issues! We couldn\'t send your feedback!');
						}
						response.json()
					}).then(() => {
						alert('Success!');
					}).catch((error) => {
						alert('Our servers are having issues! We couldn\'t send your feedback!', error);
					})
				}
				handleButtonClick={() => console.log("handleButtonClick")}
			/>
        </div>
    )
}
