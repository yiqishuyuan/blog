import React from "react";
import { Segmented } from "antd";
import TableComponents from "../components/tableComponents";
import CardContentComponents from "../components/other";
const LayoutDaily: React.FC = () => {
  return (
    <div
      className="calender-daily-container"
      style={{ marginTop: "100px", height: "800px" }}
    >
      <Segmented
        onChange={(value) => {
          console.log(value); // string
        }}
        options={[
          "全部",
          "长期任务",
          "短期任务",
          "日常任务",
          "生活碎碎念",
          "公告",
        ]}
      />
      <TableComponents></TableComponents>
      <CardContentComponents></CardContentComponents>
    </div>
  );
};

export default LayoutDaily;
