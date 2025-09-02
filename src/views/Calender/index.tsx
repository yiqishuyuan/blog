import React from "react";
import type { BadgeProps, CalendarProps } from "antd";
import { Badge, Calendar } from "antd";
import type { Dayjs } from "dayjs";
import { motion } from "framer-motion";
import CalenderCss from "./index.module.scss";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";

const getListData = (value: Dayjs) => {
  let listData: { type: string; content: string }[] = []; // Specify the type of listData
  switch (value.date()) {
    case 8:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
      ];
      break;
    case 10:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
        { type: "error", content: "This is error event." },
      ];
      break;
    case 15:
      listData = [
        { type: "warning", content: "This is warning event" },
        { type: "success", content: "This is very long usual event......" },
        { type: "error", content: "This is error event 1." },
        { type: "error", content: "This is error event 2." },
        { type: "error", content: "This is error event 3." },
        { type: "error", content: "This is error event 4." },
      ];
      break;
    default:
  }
  return listData || [];
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};
// 下面函数做日历更新
const data = Array.from({ length: 23 }).map((_, i) => ({
  href: "https://ant.design",
  title: `ant design part ${i}`,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description:
    "关于PAI-2025版本更新",
  content:
    "检查了部分惰性程序学习，消除了部分程序错误代码，并处理了部分数据集错误，确定下次更新",
}));
const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
// 导出
const Calendari: React.FC = () => {
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>在这里</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge
              status={item.type as BadgeProps["status"]}
              text={item.content}
            />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  return (
    <>
      <div style={{ width: "100%", marginTop: "100px" }}>
        <div
          className="calender-container"
          style={{ width: "1300px", margin: " 0 auto" }}
        >
          {/* 日历header */}
          <div className="main" style={{ marginBottom: "40px" }}>
            <div className={CalenderCss["section-title"]}>
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className={CalenderCss["hTitle"]}
              >
                日历
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className={CalenderCss["introduce-content"]}
              >
                记录网站活动，信息更新！
              </motion.p>
            </div>
            <Calendar cellRender={cellRender} />
          </div>
          {/* 日历 */}
          <div className="calender-list">
            <div className="calender-view">
              <div className={CalenderCss["section-title"]}>
                <motion.h1
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                  className={CalenderCss["hTitle"]}
                >
                  博客活动
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className={CalenderCss["introduce-content"]}
                >
                  记录博客活动，网站信息更新！
                </motion.p>
              </div>
              <div className="calender-render" style={{ margin: "30px 0" }}>
                <List
                  itemLayout="vertical"
                  size="large"
                  pagination={{
                    onChange: (page) => {
                      console.log(page);
                    },
                    pageSize: 3,
                  }}
                  dataSource={data}
                  footer={
                    <div>
                      <b>ant design</b> footer part
                    </div>
                  }
                  renderItem={(item) => (
                    <List.Item
                      key={item.title}
                      actions={[
                        <IconText
                          icon={StarOutlined}
                          text="156"
                          key="list-vertical-star-o"
                        />,
                        <IconText
                          icon={LikeOutlined}
                          text="156"
                          key="list-vertical-like-o"
                        />,
                        <IconText
                          icon={MessageOutlined}
                          text="2"
                          key="list-vertical-message"
                        />,
                      ]}
                      extra={
                        <img
                          width={500}
                          alt="logo"
                          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                      }
                    >
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                      />
                      {item.content}
                    </List.Item>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendari;
