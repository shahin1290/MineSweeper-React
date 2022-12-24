import React from "react";
import { createRoot } from "react-dom/client";
import { Scoreboard } from "./components/Scoreboard";

import { Top } from "./components/Top";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

root.render(
  <>
    <Top feature="Flag" firstAction="ctrl" secondAction="click">
      Minesweeper
    </Top>
    <Scoreboard
      time="000"
      levels={["beginner", "intermediate", "expert"]}
      mines="010"
      onReset={() => null}
    />
  </>
);
