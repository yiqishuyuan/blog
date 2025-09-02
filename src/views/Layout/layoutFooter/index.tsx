import React from "react";
import footerCss from "./index.module.scss";

const LayoutFooter: React.FC = () => {
  return (
    <footer className={footerCss.footer}>
      <div className={footerCss.container}>
        <div className={footerCss.info}>
          <strong>Lily Blog</strong> &copy; {new Date().getFullYear()}
          <br />
          Powered by{" "}
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className={footerCss.react}
          >
            React
          </a>{" "}
          &amp;{" "}
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={footerCss.ts}
          >
            TypeScript
          </a>
        </div>
        <div className={footerCss.links}>
          <a href="mailto:yiqishuyuan@gamil.com" className={footerCss.email}>
            联系邮箱: yiqishuyuan@gamil.com
          </a>
          <br />
          <a href="/privacy" className={footerCss.link}>
            隐私政策
          </a>
          <a href="/terms" className={footerCss.link}>
            服务条款
          </a>
        </div>
        <div className={footerCss["web-version"]}>
          <div>
            网站版本：
            <a className={footerCss["a-link"]} href="javascipt:;">
              {__APP_VERSION__}
            </a>
          </div>
          <div>
            数据清洗和信息支持：
            <a className={footerCss["a-link"]} href="javascipt:;">
              PAI
            </a>
          </div>
        </div>
        <div className={footerCss.copyright}>
          版权所有，未经许可不得转载 | ICP备案号：京ICP备12345678号
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;
