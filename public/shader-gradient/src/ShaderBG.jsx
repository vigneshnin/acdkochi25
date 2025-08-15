// src/ShaderBG.jsx
import React from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function ShaderBG() {
  return (
    
      <ShaderGradientCanvas style={{ width: "100%", height: "100%", display: "block" }}>
        <ShaderGradient
          control="props"          // important: we’re feeding props, not a URL
          animate="on"             // "on" | "off"
          // colors must be strings
          color1="#8a2be2"
          color2="#00e5ff"
          color3="#d0bce1"
          // motion / shape (numbers)
          uSpeed={0.4}
          uStrength={4}
          uDensity={1.3}
          uFrequency={5.5}
          // lighting / effects
          lightType="3d"           // "3d" | "env"
          envPreset="city"         // "city" | "dawn" | "lobby"
          brightness={1.2}
          // grain in v2 is "on"/"off" plus blending amount
          grain="on"
          grainBlending={0.03}
        />
      </ShaderGradientCanvas>

  );
}
