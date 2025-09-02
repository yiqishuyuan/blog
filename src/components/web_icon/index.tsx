import { motion } from "framer-motion"; // 引入动画库

export default function Logo() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 flex-col">
      <svg
        width="150"
        height="150"
        viewBox="0 0 150 150"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        {/* 动态圆环 */}
        <motion.circle
          cx="75"
          cy="75"
          r="60" // 圆心 (75,75)，半径 60
          stroke="dodgerblue"
          strokeWidth="8" // 蓝色边框，线宽 8px
          fill="transparent" // 圆内部透明
          strokeDasharray="377" // 设置圆周长（2πr ≈ 377）
          strokeDashoffset="377" // 初始时完全“隐藏”
          animate={{ strokeDashoffset: 0 }} // 动画让圆周慢慢画完
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* 画横线 */}
        <motion.path
          d="M30 50 C70 45, 130 45, 170 50"
          stroke="black"
          strokeWidth="6"
          fill="transparent"
          strokeLinecap="round"
          initial={{ pathLength: 0 }} // 初始路径长度为 0
          animate={{ pathLength: 1 }} // 动画路径长度为 1（完整路径）
          transition={{ duration: 2, ease: "easeInOut" }} // 延迟 2 秒开始动画
        />

        {/* 画嘴 */}
        <motion.path
          d="M55 90 Q75 110, 95 90"
          stroke="black"
          strokeWidth="6"
          fill="transparent"
          strokeLinecap="round"
          initial={{ pathLength: 0 }} // 初始路径长度为 0
          animate={{ pathLength: 1 }} // 动画路径长度为 1（完整路径）
          transition={{ duration: 2, ease: "easeInOut" }} // 延迟 2 秒开始动画
        />
      </svg>

      {/* 渐显介绍 */}
      <motion.div
        style={{
          width: "100% - 40px",
          textAlign: "center",
          marginTop: "20px",
          fontSize: "28px",
          marginLeft: "20px",
          fontWeight: "bold",
          color: "dodgerblue",
          letterSpacing: "0.2em",
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        欢迎、这是我的博客！
      </motion.div>
    </div>
  );
}
