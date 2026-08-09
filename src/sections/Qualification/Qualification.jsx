import React, { useState } from 'react';
import "./Qualification.css";
import { Education, BriefcaseAlt2, CalendarEvent } from "@boxicons/react";

export default function Qualification() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };


    return (
        <>
            <section className="qualification section">
                <h2 className="section-title">Qualification</h2>
                <span className="section-subtitle">My Personal Journey</span>

                <div className="qualification-container container">
                    <div className="qualification-tabs">
                        <div
                            className={toggleState === 1
                                ? "qualification-button qualification-active button-flex"
                                : "qualification-button button-flex"
                            }
                            onClick={() => toggleTab(1)}
                        >
                            <Education className="qualification-icon" />
                            Education
                        </div>

                        <div
                            className={toggleState === 2
                                ? "qualification-button qualification-active button-flex"
                                : "qualification-button button-flex"
                            }
                            onClick={() => toggleTab(2)}
                        >
                            <BriefcaseAlt2 className="qualification-icon" />
                            Experience
                        </div>
                    </div>

                    <div className="qualification-sections">
                        <div
                            className={toggleState === 1
                                ? "qualification-content qualification-content-active"
                                : "qualification-content"
                            }
                        >
                            <div className="qualification-data">
                                <div className="first-graduation">
                                    <h3 className="qualification-title">BCA</h3>
                                    <span className="qualification-subtitle">
                                        Graphic Era Hill University
                                    </span>
                                    <div className="qualification-celender">
                                        <CalendarEvent />
                                        <span>2021 - 2024</span>
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification-rounder"></span>
                                    <span className="qualification-line"></span>
                                </div>
                            </div>

                            <div className="qualification-data">
                                <div></div>

                                <div>
                                    <span className="qualification-rounder"></span>
                                    <span className="qualification-line"></span>
                                </div>

                                <div className="second-graduation">
                                    <h3 className="qualification-title">MCA</h3>
                                    <span className="qualification-subtitle">
                                        University of Petroleum and Energy Studies
                                    </span>
                                    <div className="qualification-celender">
                                        <CalendarEvent />
                                        2024 - 2026
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={toggleState === 2
                                ? "qualification-content qualification-content-active"
                                : "qualification-content"
                            }
                        >
                            <div className="qualification-data">
                                <div className="second-exp">
                                    <h3 className="qualification-title">AI/ML Intern</h3>
                                    <span className="qualification-subtitle">
                                        Xebia
                                    </span>
                                    <div className="qualification-celender">
                                        <CalendarEvent />
                                        01/2026 - 06/2026
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification-rounder"></span>
                                    <span className="qualification-line"></span>
                                </div>
                            </div>

                            <div className="qualification-data">
                                <div></div>

                                <div>
                                    <span className="qualification-rounder"></span>
                                    <span className="qualification-line"></span>
                                </div>

                                <div className="first-exp">
                                    <h3 className="qualification-title">Backend Developer Intern</h3>
                                    <span className="qualification-subtitle">
                                        Anantixia
                                    </span>
                                    <div className="qualification-celender">
                                        <CalendarEvent />
                                        08/2025 - 01/2026
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
