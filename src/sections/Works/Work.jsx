import { useEffect } from 'react';
import Works from "./Works.jsx"
import "./Work.css";

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


