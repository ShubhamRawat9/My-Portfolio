import { socialLinks } from "../../data/SocialLinks";
import "./SocialLinks.css";

export default function SocialLinks({ className = "" }) {
  return (
    <>
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            className={`home-social-icon ${className}`}
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className={`icon ${className}`} />
          </a>
        );
      })}
    </>
  );
}
