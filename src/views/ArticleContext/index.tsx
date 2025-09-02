import ArticleContextCss from "./index.module.scss";
import React from "react";
const html = `
<p style="text-align: start;"><strong>Nuxt 4.0 来了！</strong> 🎉</p><p style="text-align: start;">经过一年的实际测试，我们很高兴地宣布 Nuxt 4 正式发布。这是一个注重稳定性的<code>主要版本</code>，引入了一些深思熟虑的突破性变化，以改善开发体验。</p><p><br></p><pre><code class="language-python">如果您一直关注，您会认出其中的许多功能和变化 - 如果您是第一次接触它们，我们希望您会欢迎它们。
测试入宫
烦烦烦方法
111111111111111111111</code></pre><p><br></p>
`;

function ArticleContext() {
  const handleCopy = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      alert("已复制链接：" + url);
    } catch (err) {
      console.error("复制失败", err);
    }
  };

  return (
    <div className={ArticleContextCss["Article-Context"]}>
      <div className="context-container">
        <div className={ArticleContextCss["context-title"]}>
          <div className="publish">
            <div className="publish-mode">日常</div> ·
            <time dateTime="2025-12-1" className="publish-time">
              2025年7月15日
            </time>
          </div>
          <div className="publish-content">
            <div className="publish-title">Nuxt 4.0 正式发布</div>
            <div className="publish-detail">
              Nuxt 4.0
              来了！这是一次深思熟虑的升级，专注于开发者体验，具有更好的项目组织、更智能的数据获取和改进的类型安全性。
            </div>
          </div>
          <div className="publisher">lily</div>
        </div>

        <div className={ArticleContextCss["context-main"]}>
          {/* 服务器编辑请求渲染位置 */}
          <div
            className={ArticleContextCss["context-left-text"]}
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
          <div className={ArticleContextCss["context-right-catalogue"]}>
            <span className="catalogue-title">目录</span>
            <ul>
              <li>1. 有什么新鲜事？</li>
            </ul>
          </div>
        </div>
        <div className="copyLinkInPage" onClick={handleCopy}>
          复制网址
        </div>
      </div>
    </div>
  );
}

export default ArticleContext;
