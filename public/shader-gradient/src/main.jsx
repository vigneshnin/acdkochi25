// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import ShaderBG from "./ShaderBG";

const mount = document.getElementById("shaderbg-root");
if (!mount) throw new Error("#shaderbg-root not found");

ReactDOM.createRoot(mount).render(<ShaderBG />);
