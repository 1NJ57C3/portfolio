import { useState } from "react";
import "./TechCard.css";

interface TechCardProps {
  name: string;
  logo: string;
  website: string;
  category: string[];
  associations: string[];
  confidence: number;
  imgWidth: string;
}

function TechCard({
  name,
  logo,
  // website,
  // category,
  // associations,
  // confidence,
  imgWidth,
}: TechCardProps) {
  const [hovered, setHovered] = useState(false);

  function handleMouseEnter() {
    setHovered(() => true);
  }

  function handleMouseLeave() {
    setHovered(() => false);
  }

  return (
    <article
      className="TechCard"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tech-card-bg" />
      <img
        className={hovered ? "hovered" : ""}
        src={logo}
        alt={name}
        height={imgWidth}
        width={imgWidth}
      />
      <strong>
        <p className={hovered ? "hovered" : ""}>{name}</p>
      </strong>
    </article>
  );
}

export default TechCard;
