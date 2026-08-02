import { socialLinks } from "../../data/socialLinks";
import "./SocialLinks.css";

export default function SocialLinks() {
  return (
    <div className="home-social">
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            className="home-social-icon"
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}

