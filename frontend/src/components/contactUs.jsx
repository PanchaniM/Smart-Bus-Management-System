import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'
import Contact from './pContact'

export default function contactUs() {
    return (
        <div className="booking-background">
            <Header/>
    
            <div className="contact-comp">
                <Contact/>
            </div>
        </div>
    )
}
