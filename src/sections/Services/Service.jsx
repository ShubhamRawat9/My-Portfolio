import { useState } from "react";
import "./Service.css";

import {
  ArrowRightStroke,
  X,
  CheckCircle,
  MountainView,
  Cog,
  Bug,
} from "@boxicons/react";

export default function Service() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const services = [
    {
      id: 1,
      title: (
        <>
          Frontend <br /> Development
        </>
      ),
      icon: MountainView,
      modalTitle: "Frontend Development",
      description:
        "Build responsive and modern web applications with optimized user experience.",
      items: [
        "Developed fully responsive websites optimized for all devices.",
        "Built modern, user-friendly interfaces using modern technologies.",
        "Improved user experience through user friendly interface.",
        "Integrated REST APIs to display dynamic data.",
      ],
    },
    {
      id: 2,
      title: (
        <>
          Backend <br /> Development
        </>
      ),
      icon: Cog,
      modalTitle: "Backend Development",
      description:
        "Service with 1 Year of experience. Providing quality work to the organisation.",
      items: [
        "Designed scalable backend architectures.",
        "Developed secure RESTful APIs.",
        "Optimized database queries for performance.",
        "Handled CRUD operations efficiently.",
      ],
    },
    {
      id: 3,
      title: (
        <>
          Bug <br /> Fixing
        </>
      ),
      icon: Bug,
      modalTitle: "Bug Fixing",
      description:
        "Service with 1 Year of experience. Providing quality work to the organisation.",
      items: [
        "Identified and resolved software defects.",
        "Debugged frontend and backend issues.",
        "Improved application stability and reliability.",
        "Fixed API integration and response errors.",
      ],
    },
  ];

  return (
    <section className="services section" id="services">
      <h2 className="section-title">Services</h2>
      <span className="section-subtitle">What I Offer</span>

      <div className="services-container conrainer grid">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div className="services-content" key={service.id}>
              <div>
                <Icon className="service-icon" />

                <h3 className="services-title">{service.title}</h3>
              </div>

              <span
                className="services-button"
                onClick={() => toggleTab(service.id)}
              >
                View More
                <ArrowRightStroke className="service-button-icon" />
              </span>

              <div
                className={
                  toggleState === service.id
                    ? "services-model active-model"
                    : "services-model"
                }
              >
                <div className="services-model-content">
                  <X
                    className="services-model-close"
                    onClick={() => toggleTab(0)}
                  />

                  <h3 className="services-model-title">
                    {service.modalTitle}
                  </h3>

                  <p className="services-model-description">
                    {service.description}
                  </p>

                  <ul className="services-model-services grid">
                    {service.items.map((item, index) => (
                      <li
                        className="services-model-service"
                        key={index}
                      >
                        <CheckCircle className="services-model-icon" />

                        <p className="services-model-info">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}