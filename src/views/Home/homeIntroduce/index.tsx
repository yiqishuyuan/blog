import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import homeIntroduceCss from "./index.module.scss";
function HomeIntroduce() {
  const boxMoveRef = useRef<HTMLDivElement>(null);
  const text = "HTML";
  return (
    <>
      <div>
        {/* 标题 */}
        <div className={homeIntroduceCss["title"]}>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className={homeIntroduceCss["hTitle"]}
          >
            前端
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className={homeIntroduceCss["introduce-content"]}
          >
            多种技术栈结合，打造高效、优美的页面体验。
          </motion.p>
        </div>

        {/* 内容 */}
        <div className={homeIntroduceCss["grid"]}>
          <motion.div
            className={homeIntroduceCss["grid-item"]}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            {text.split("").map((char, i) => (
              <motion.h3
                key={i}
                initial={{ opacity: 0, x: -20 + i * 2 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.5, // 每个字母依次延迟
                }}
                style={{ display: "inline-block", marginRight: "2px" }}
                className={homeIntroduceCss["grid-title"]}
              >
                {char}
              </motion.h3>
            ))}
            {/* <h3>HTML</h3> */}
            <p className={homeIntroduceCss["grid-content"]}>构筑蓝图</p>
          </motion.div>
          <motion.div
            className={homeIntroduceCss["grid-item"]}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            {"CSS".split("").map((char, i) => (
              <motion.h3
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.2, // 每个字母依次延迟
                }}
                style={{ display: "inline-block", marginRight: "2px" }}
                className={homeIntroduceCss["grid-title"]}
              >
                {char}
              </motion.h3>
            ))}
            <p className={homeIntroduceCss["grid-content"]}>实现蓝图</p>
          </motion.div>
          <motion.div
            className={homeIntroduceCss["grid-item"]}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            {"JAVASCRIPT".split("").map((char, i) => (
              <motion.h3
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.2, // 每个字母依次延迟
                }}
                style={{ display: "inline-block", marginRight: "2px" }}
                className={homeIntroduceCss["grid-title"]}
              >
                {char}
              </motion.h3>
            ))}
            <p className={homeIntroduceCss["grid-content"]}>
              为构建物提供灵魂
            </p>
          </motion.div>
          <motion.div
            className={homeIntroduceCss["grid-item"]}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            {"VUE".split("").map((char, i) => (
              <motion.h3
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.2, // 每个字母依次延迟
                }}
                style={{ display: "inline-block", marginRight: "2px" }}
                className={homeIntroduceCss["grid-title"]}
              >
                {char}
              </motion.h3>
            ))}
            <p className={homeIntroduceCss["grid-content"]}>
              声明式编程，简易友好
            </p>
          </motion.div>
          <motion.div
            className={homeIntroduceCss["grid-item"]}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            {"REACT".split("").map((char, i) => (
              <motion.h3
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.2, // 每个字母依次延迟
                }}
                style={{ display: "inline-block", marginRight: "2px" }}
                className={homeIntroduceCss["grid-title"]}
              >
                {char}
              </motion.h3>
            ))}
            <p className={homeIntroduceCss["grid-content"]}>
              声明式编程，更易灵活
            </p>
          </motion.div>
          <motion.div
            className={homeIntroduceCss["grid-item"]}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            {"JQUERY".split("").map((char, i) => (
              <motion.h3
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.2, // 每个字母依次延迟
                }}
                style={{ display: "inline-block", marginRight: "2px" }}
                className={homeIntroduceCss["grid-title"]}
              >
                {char}
              </motion.h3>
            ))}
            <p className={homeIntroduceCss["grid-content"]}>
              命令式编程，学习成本低
            </p>
          </motion.div>
        </div>
      </div>
      {/* 方块的移动 */}

      <div className={homeIntroduceCss["animate-box"]}>
        <div className={homeIntroduceCss["move-box"]} ref={boxMoveRef}>
          后端
        </div>
        <div className={homeIntroduceCss["animate-grid"]}>
          <div className={homeIntroduceCss["animate-grid-item"]}>NODE.js</div>
          <div className={homeIntroduceCss["animate-grid-item"]}>JAVAWEB</div>
          <div className={homeIntroduceCss["animate-grid-item"]}>
            PYTHON-DJANGO
          </div>
          <div className={homeIntroduceCss["animate-grid-item"]}>Go-WEB</div>
        </div>
      </div>
    </>
  );
}
export default HomeIntroduce;
