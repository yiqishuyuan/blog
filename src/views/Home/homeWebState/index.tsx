import React from "react";
import type { StatisticProps } from "antd";
import { Col, Row, Statistic } from "antd";
import CountUp from "react-countup";
import layoutWebStateCss from "./index.module.scss";

const formatter: StatisticProps["formatter"] = (value) => (
  <CountUp end={value as number} separator="," />
);
const HomeWebState: React.FC = () => {
  return (
    <div className={layoutWebStateCss["layout-webState"]}>
      <h3 className={layoutWebStateCss["webState-title"]}>网站状态/收集统计</h3>
      <div className={layoutWebStateCss["webState-container"]}>
        <div className={layoutWebStateCss["visit-caller"]}>
          <Statistic
            title="网站总访问量"
            value={10002893}
            formatter={formatter}
          />
          <Statistic
            title="截止目前网站访问人数"
            value={112893}
            precision={2}
            formatter={formatter}
          />
          <Statistic
            title="网站总数据（含文章、视频、音频等）"
            value={893}
            precision={2}
            formatter={formatter}
          />
          <Statistic
            title="今日总访问"
            value={93}
            precision={2}
            formatter={formatter}
          />
        </div>
        <div className={layoutWebStateCss["webSite-running"]}>
          <div className="state">
            <span className={layoutWebStateCss["state-title"]}>运行状态：</span>
            <div className="running-state">正常</div>
          </div>
          {/* 运行时间， */}
          <div className="time">
            <span className={layoutWebStateCss["state-title"]}>
              网站运行时间：
            </span>
            <div className="running-time">
              3 年 07 月 13 天 21 时 33 分 35 秒
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWebState;
