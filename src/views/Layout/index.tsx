import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import "@/styles/hero.scss";
import layoutIndexCss from "./index.module.scss";
import LayoutFooter from "./layoutFooter";
import { Outlet } from "react-router-dom";
import LayoutBanner from "@/views/Layout/layoutBanner";
function App() {
  return (
    <div className="hero-container">
      {/* 顶部导航 */}
      <div className="banner-nav">
        <LayoutBanner></LayoutBanner>
      </div>
      {/* 技术介绍 */}
      <AnimatePresence>
        <>
          <Outlet></Outlet>
          <LayoutFooter></LayoutFooter>
        </>
      </AnimatePresence>
    </div>
  );
}

export default App;
