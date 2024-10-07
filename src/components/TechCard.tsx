import { useState } from "react";
import "../styles/TechCard.css";

interface TechProps {
  name: string;
  logo: string;
  website: string;
  category: string[];
  associations: string[];
  confidence: number;
  imgWidth: string;
}

function TechCard({ name, logo, website, category, associations, confidence, imgWidth }: TechProps) {
  const [hovered, setHovered] = useState(false);

  function handleMouseEnter() {
    setHovered(() => true);
  }
  function handleMouseLeave() {
    setHovered(() => false);
  }

  return (
    <div className="TechCard" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
      <img className={hovered ? "hovered" : ""} src={logo} alt={name} height={imgWidth} width={imgWidth} />
      <strong>
        <p className={hovered ? "hovered" : ""}>{name}</p>
      </strong>
    </div>
  )
}

export default TechCard;
