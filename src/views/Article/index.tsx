import React from "react";
import { Button, Input, Select, Space } from "antd";
import { motion } from "framer-motion";
import ArticleContainerCss from "./index.module.scss";
import CalenderTable from "./components/tableComponents";
import CalenderDaily from "./components/other";
const Article: React.FC = () => {
  return (
    <div className={ArticleContainerCss["Article-container"]}>
      {/* 文章头部 */}
      <div className={ArticleContainerCss["article-header"]}>
        <h1 className={ArticleContainerCss["header-title"]}>Lily 博客</h1>
        <p className={ArticleContainerCss["header-content"]}>
          阅读有关所有 Lily 博客消息，关注新的产品和博客动态，从文章到技术。
        </p>
        <div className={ArticleContainerCss["header-subscription"]}>
          <span className={ArticleContainerCss["sub-title"]}>
            订阅网站讯息、了解我的博客动态
          </span>
          <span className={ArticleContainerCss["sub-content"]}>
            及时了解网站博客更新、产品的新功能和指南
          </span>
          <Space.Compact style={{ width: "400px" }}>
            <Input placeholder="请输入你的邮箱订阅" />
            <Button type="primary">订阅</Button>
          </Space.Compact>
        </div>
      </div>
      {/* 文章 */}
      <div className={ArticleContainerCss["checked-section"]}>
        <div className="main" style={{ marginBottom: "40px" }}>
          <div className={ArticleContainerCss["section-title"]}>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className={ArticleContainerCss["hTitle"]}
            >
              长期任务
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className={ArticleContainerCss["introduce-content"]}
            >
              记录主要更新和日期进度！
            </motion.p>
          </div>
          <CalenderTable></CalenderTable>
          <CalenderDaily></CalenderDaily>
        </div>
        <div className="main" style={{ marginBottom: "40px" }}>
          <div className={ArticleContainerCss["section-title"]}>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className={ArticleContainerCss["hTitle"]}
            >
              短期任务
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className={ArticleContainerCss["introduce-content"]}
            >
              记录短期更新和日期进度！
            </motion.p>
          </div>
          <CalenderTable></CalenderTable>
          <CalenderDaily></CalenderDaily>
        </div>
      </div>
    </div>
  );
};

export default Article;
