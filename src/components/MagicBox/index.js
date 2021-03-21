import React from "react";
import useClock from "../../hooks/useClock";
import useMagicColor from "../../hooks/useMagicColor";

function MagicBox() {
  const { color } = useMagicColor();
  const { timeClock } = useClock();

  return (
    <h2 style={{ color: color, marginBottom: "40px", textAlign: "center" }}>
      {timeClock}
    </h2>
  );
}

export default MagicBox;
