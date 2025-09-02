import React, { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { AppstoreTwoTone, BuildTwoTone } from "@ant-design/icons";
import { Tooltip, Button } from "antd";
import layoutCalenderCss from "./index.module.scss";
import CalenderTable from "./calendarTable";
import CalenderDaily from "./calendarDaily";

const LayoutCalendar: React.FC = () => {
  const [checkedStyled, setCheckedStyled] = useState<boolean>(false);
  const setCheckedFun = () => {
    setCheckedStyled(!checkedStyled);
  };
  useEffect(() => {
    return;
  }, []);
  return (
    <>
      <div className={layoutCalenderCss["title"]}>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className={layoutCalenderCss["hTitle"]}
        >
          日历/文章
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className={layoutCalenderCss["introduce-content"]}
        >
          记录日常更新和日期进度！
        </motion.p>
      </div>
      <div className="Date" style={{height:"1850px" }}>
        <div className={layoutCalenderCss["check-styled-button"]}>
          <Tooltip title="切换样式">
            <span
              className={layoutCalenderCss["checked-span"]}
              onClick={() => setCheckedFun()}
            >
              {checkedStyled ? <AppstoreTwoTone /> : <BuildTwoTone />}
            </span>
          </Tooltip>
        </div>
        <div className={layoutCalenderCss["checked-section"]}>
          <CalenderTable></CalenderTable>
          <CalenderDaily></CalenderDaily>
        </div>
      </div>
    </>
  );
};

export default LayoutCalendar;
