import { ArrowRightStroke } from "@boxicons/react";
import React from 'react'

export default function WorkItems({ item }) {
  return (
    <>
      <div className="work-card" key={item.id}>
        <img src={item.image} alt="img" className="work-img"/>
        <h3 className="work-title">{item.title}</h3>
        <div>

        </div>
        <a href="https://github.com/ShubhamRawat9?tab=repositories" className="work-button">
          Demo <ArrowRightStroke className="work-button-icon" />
        </a>
      </div>
    </>
  )
}
