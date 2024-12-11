import React from "react";
import { AbandonedObject } from "@/types/objects";

interface Props {
  object: AbandonedObject;
}

const AboutSection = ({ object }: Props) => {
  const {
    created_at,
    abandoned_at,
    built_at,
    preservation_level,
    difficulty_level,
    security_level,
  } = object;

  return (
    <div className="text-text text-xs">
      <p>Created at: {created_at}</p>
      <p>Built at: {built_at}</p>
      <p>Abandoned at: {abandoned_at}</p>
      <p>
        Difficulty: <span className="underline">{difficulty_level}</span>
      </p>
      <p>
        State: <span className="underline">{preservation_level}</span>
      </p>
      <p>
        Security: <span className="underline">{security_level}</span>
      </p>
    </div>
  );
};

export default AboutSection;
