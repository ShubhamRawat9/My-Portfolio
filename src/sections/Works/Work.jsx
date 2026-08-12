import React, { useEffect } from 'react';
import "./Work.css";
import Works from "./Works.jsx"

export default function Work() {
    
    return (
        <>
            <section className="work section" id="portfolio">
                <h2 className="section-title">Portfolio</h2>
                <span className="section-subtitle">Most Recent Works</span>

                <Works />
            </section>
        </>
    )
}


