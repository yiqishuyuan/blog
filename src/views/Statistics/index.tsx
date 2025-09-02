import type React from "react";
import { useRef, useEffect, useState } from "react";
import StatisticCss from "./index.module.scss";
import { motion } from "framer-motion";
import * as echarts from "echarts/core";

import type { DatePickerProps } from "antd";
import { DatePicker,Switch } from "antd";
import "echarts-gl";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";

const onChange: DatePickerProps<Dayjs[]>["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const defaultValue = [
  dayjs("2000-01-01"),
  dayjs("2000-01-03"),
  dayjs("2000-01-05"),
];

import type {
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
} from "echarts/components";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
} from "echarts/components";
import { LineChart } from "echarts/charts";
import type { LineSeriesOption } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LineSeriesOption
>;

interface DataItem {
  name: string;
  value: [string, number];
}
function randomData(): DataItem {
  now = new Date(+now + oneDay);
  value = value + Math.random() * 21 - 10;
  return {
    name: now.toString(),
    value: [
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
      Math.round(value),
    ],
  };
}

const data: DataItem[] = [];
let now = new Date(1997, 9, 3);
const oneDay = 24 * 3600 * 1000;
let value = Math.random() * 1000;
for (let i = 0; i < 1000; i++) {
  data.push(randomData());
}

// 统计
const Statistics: React.FC = () => {
  const allPvRef = useRef(null)!;
  const [disabled, setDisabled] = useState(true);

  const toggle = () => {
    console.log("toggle-statistics on !");
    setDisabled(!disabled);
  };
  useEffect(() => {
    const myChart = echarts.init(allPvRef.current);

    const option: EChartsOption = {
      title: {
        text: "网站总访问量分布图",
      },
      tooltip: {
        trigger: "axis",
        formatter: function (params: any) {
          params = params[0];
          const date = new Date(params.name);
          return (
            date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear() +
            " : " +
            params.value[1]
          );
        },
        axisPointer: {
          animation: false,
        },
      },
      xAxis: {
        type: "time",
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: "value",
        boundaryGap: [0, "100%"],
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: "Fake Data",
          type: "line",
          showSymbol: false,
          data: data,
        },
      ],
    };

    const timer = setInterval(function () {
      console.error("the timer no destoryed ");
      for (let i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
      }

      myChart.setOption<EChartsOption>({
        series: [
          {
            data: data,
          },
        ],
      });
    }, 1000);
    if (option) {
      myChart.setOption(option);
    }
    clearInterval(timer);
    // 清理
    return () => {
      clearInterval(timer);
      myChart.dispose(); // 销毁图表
    };
  }, [allPvRef]);

  return (
    <div className="statistics" style={{ width: "100%", marginTop: "100px" }}>
      <div
        className="calender-container"
        style={{ width: "1300px", margin: " 0 auto" }}
      >
        {/* 统计header */}
        <div className="main" style={{ marginBottom: "40px" }}>
          <div className={StatisticCss["section-title"]}>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className={StatisticCss["hTitle"]}
            >
              网站统计
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className={StatisticCss["introduce-content"]}
            >
              记录博客所有信息！
            </motion.p>
          </div>
        </div>
        {/* content */}
        <div className="render-container">
          <div
            className="checked-timer"
            style={{
              width: "100%",
              display: "flex",
              height: "100px",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div
              className="select-container"
              style={{ width: "700px", display: "flex", alignItems: "center" }}
            >
              <p className="checked-title">筛选时间段网站流量：</p>
              <div className="selected-tiemr" style={{ width: "500px" }}>
                <DatePicker
                  multiple
                  onChange={onChange}
                  maxTagCount="responsive"
                  defaultValue={defaultValue}
                  size="large"
                />
              </div>
            </div>
            <div
              className="switch-button"
              style={{ display: "flex", alignItems: "center" }}
            >
              <p className="checked-title">切换地区访问图：</p>
              <Switch
                checkedChildren="开启"
                unCheckedChildren="关闭"
                onClick={toggle}
                defaultChecked
              />
            </div>
          </div>
          <div className="statistics-container">
            <div className="all-pv">
              {/* <div className="pv-title">
              <p>网站访问量</p>
            </div> */}
              <div
                className="all-pv-content"
                style={{ width: "100%", height: "500px" }}
                ref={allPvRef}
              ></div>
            </div>
          </div>
        </div>
        <div className="render-container">
          <div
            className="checked-timer"
            style={{
              width: "100%",
              display: "flex",
              height: "100px",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div
              className="select-container"
              style={{ width: "700px", display: "flex", alignItems: "center" }}
            >
              <p className="checked-title">筛选时间段网站人数：</p>
              <div className="selected-tiemr" style={{ width: "500px" }}>
                <DatePicker
                  multiple
                  onChange={onChange}
                  maxTagCount="responsive"
                  defaultValue={defaultValue}
                  size="large"
                />
              </div>
            </div>
            <div
              className="switch-button"
              style={{ display: "flex", alignItems: "center" }}
            >
              <p className="checked-title">切换地区访问图：</p>
              <Switch
                checkedChildren="开启"
                unCheckedChildren="关闭"
                onClick={toggle}
                defaultChecked
              />
            </div>
          </div>
          <div className="statistics-container">
            <div className="all-pv">
              {/* <div className="pv-title">
              <p>网站访问量</p>
            </div> */}
              <div
                className="all-pv-content"
                style={{ width: "100%", height: "500px" }}
                ref={allPvRef}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
