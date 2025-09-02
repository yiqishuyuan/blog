import React from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import layoutGlobalCss from "./index.module.scss";
import { useState, useEffect } from "react";

import { setLocalStorage, getLocalStorage } from "@/utils";
import WebIcon from "@/components/web_icon";
const HomeView = () => {
  const [showContent, setShowContent] = useState(false);
  const [isScrollDownVisible, setScrollingDown] = useState(false);
  const [show, setShow] = useState(false);

  const handleWebIconComplete = () => {
    setShow(true); // 隐藏 WebIcon
    setShowContent(false); // 显示主体
    // 设置本地存储，异步存储防止赋值后动画未播放完毕
    setTimeout(() => {
      setLocalStorage("heroAnimationPlayed", false);
      setShowContent(true);
    }, 7000);
  };

  // 先监听本地是否有动画播放过,有则不播放,否则等待第一次播放完毕后设置本地存储
  useEffect(() => {
    const hasPlayed = getLocalStorage("heroAnimationPlayed");
    if (!hasPlayed && hasPlayed !== null) {
      setShowContent(true);
      setShow(false);
    } else {
      // 第一次播放完毕后设置本地存储
      handleWebIconComplete();
    }
  }, []);

  // 10 秒后隐藏动画和显示剩余动画
  useEffect(() => {
    const hasPlayed = getLocalStorage("heroAnimationPlayed");
    if (hasPlayed) return;
    const timer = setTimeout(() => setShow(false), 6000); // 10 秒后隐藏
    const animateTimer = setTimeout(() => setShowContent(true), 7000);
    return () => {
      clearTimeout(timer);
      clearTimeout(animateTimer);
    };
  }, []);

  // 禁止滚动
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const hasPlayed = getLocalStorage("heroAnimationPlayed");
    if (hasPlayed) return;
    document.body.style.overflow = "hidden"; // 禁止滚动
    if (show) {
      timer = setTimeout(() => {
        document.body.style.overflow = "auto"; // 动画结束恢复滚动
      }, 6000); // 8 秒后恢复
    } else {
      timer = setTimeout(() => {
        document.body.style.overflow = "auto"; // 动画结束恢复滚动
      });
    }

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [show]);
  //  监听滚动
  useEffect(() => {
    // 页面加载时，如果滚动条在顶部，显示提示
    if (window.scrollY === 0) {
      setScrollingDown(false);
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollingDown(true); // 向下滚动就隐藏
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* 初始渲染动画 */}
      <AnimatePresence>
        {show && (
          <motion.div
            className="w-full text-center mt-6 text-2xl font-bold text-blue-500 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -700 }} // 退出动画
            transition={{ duration: 1 }}
          >
            <WebIcon></WebIcon>
          </motion.div>
        )}
      </AnimatePresence>
      {/* 设置view主体动画 */}
      <AnimatePresence>
        {showContent && (
          <>
            
            {/*  */}
            <div className="hero-bg">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: -40 }}
                transition={{ duration: 1 }}
              >
                <span className={layoutGlobalCss["title"]}>
                  共同进步、谦虚前行！
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                style={{
                  maxWidth: "600px",
                  margin: "20px auto",
                  fontSize: 18,
                  letterSpacing: "0.1em",
                }}
              >
                “我并不特别聪明，我只是对问题保持好奇心并不断尝试，因为我相信，只有通过不断探索与实践，我们才能让不可能变为可能，让创意真正落地。”
                <strong
                  style={{
                    display: "block",
                    marginTop: "0.5em",
                    float: "right",
                  }}
                >
                  — 爱因斯坦
                </strong>
              </motion.p>

              {/* 底部 */}
              {!isScrollDownVisible && (
                <div
                  style={{
                    marginTop: "30px",
                    fontSize: 16,
                    bottom: 0,
                    position: "fixed",
                    left: "50%",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                    style={{ color: "gray", textAlign: "center" }}
                  >
                    下滑开始
                  </motion.div>
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 150 150"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      overflow: "visible",
                      margin: "0 auto",
                      display: "block",
                    }}
                  >
                    <motion.path
                      d="M50 10 L75 40 L100 10"
                      stroke="gray"
                      strokeWidth="6"
                      fill="transparent"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, y: 0 }} // 初始路径长度为 0
                      animate={{ pathLength: 1, y: [0, 5, 0] }} // 动画路径长度为 1（完整路径）
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 0.6,
                      }} // 延迟 2 秒开始动画
                    />
                  </svg>
                </div>
              )}
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomeView;
