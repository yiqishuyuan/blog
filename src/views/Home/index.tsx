import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import "@/styles/hero.scss";

import HomeIntroduce from "./homeIntroduce";
import HomeCalender from "./homeCalender";
import HomeView from "./homeView";
import HomeProduct from "./homeProduct";
import HomeWebState from "./homeWebState";
import HomeSuggestion from "./homeSuggestion";
function App() {
  return (
    <div className="hero-container">
      {/* 技术介绍 */}
      <AnimatePresence>
        <>
          <HomeView></HomeView>
          <div className="introduce-section" style={{ width: "100%" }}>
            <HomeIntroduce></HomeIntroduce>
            <HomeCalender></HomeCalender>
          </div>
          <HomeProduct></HomeProduct>
          <HomeWebState></HomeWebState>
          <HomeSuggestion></HomeSuggestion>
        </>
      </AnimatePresence>
    </div>
  );
}

export default App;
