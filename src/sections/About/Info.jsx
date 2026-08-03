import {
  MedalStarAlt2,
  BriefcaseAlt2,
  HeadphoneMic,
} from "@boxicons/react";

const cards = [
  {
    icon: MedalStarAlt2,
    title: "Experience",
    subtitle: "1 Year",
  },
  {
    icon: BriefcaseAlt2,
    title: "Completed",
    subtitle: "3+ Projects",
  },
  {
    icon: HeadphoneMic,
    title: "Support",
    subtitle: "Online 24/7",
  },
];

export default function Info() {
  return (
    <div className="about-info grid">
      {cards.map(({ icon: Icon, title, subtitle }) => (
        <div
          key={title}
          className="about-box"
        >
          <Icon className="about-icon" />

          <h3 className="about-title">
            {title}
          </h3>

          <p className="about-subtitle">
            {subtitle}
          </p>
        </div>
      ))}
    </div>
  );
}



