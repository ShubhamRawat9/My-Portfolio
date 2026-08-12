import React from 'react'
import { ArrowRightStroke } from "@boxicons/react";

export default function WorkItems({ item }) {
  return (
    <>
      <div className="work-card" key={item.id}>
        <img src={item.image} alt="img" className="work-img"/>
        <h3 className="work-title">{item.title}</h3>
        <div>

        </div>
        <a href="#" className="work-button">
          Demo <ArrowRightStroke className="work-button-icon" />
        </a>
      </div>
    </>
  )
}
