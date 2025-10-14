import React, { useState } from "react";
import { motion } from "framer-motion";
import SponsorshipCss from "./index.module.scss";
import { AutoComplete, Table, DatePicker } from "antd";
import type { AutoCompleteProps } from "antd";
// import { QuestionCircleOutlined } from "@ant-design/icons";
const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    method: "支付宝",
    price: "00.01",
    date: "2025年7月13日",
  },
  {
    key: "2",
    name: "胡彦祖",
    method: "微信",
    price: "12.00",
    date: "2025年7月13日",
  },
  {
    key: "3",
    name: "胡彦祖",
    method: "paypal",
    price: "12.00",
    date: "2025年7月13日",
  },
];

const columns = [
  {
    title: "昵称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "捐赠方式",
    dataIndex: "method",
    key: "method",
  },
  {
    title: "费用",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "捐赠日期",
    dataIndex: "date",
    key: "date",
  },
];
const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});
import type { DatePickerProps, GetProps } from "antd";

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

const { RangePicker } = DatePicker;

const onOk = (value: DatePickerProps["value"] | RangePickerProps["value"]) => {
  console.log("onOk: ", value);
};

const Sponsorship: React.FC = () => {
  const [value, setValue] = useState("");
  const [anotherOptions, setAnotherOptions] = useState<
    AutoCompleteProps["options"]
  >([]);

  const getPanelValue = (searchText: string) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  const onChange = (data: string) => {
    setValue(data);
  };

  return (
    <div style={{ width: "1300px", margin: "0 auto", marginTop: "100px" }}>
      <div className="main" style={{ marginBottom: "40px" }}>
        <div className={SponsorshipCss["section-title"]}>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className={SponsorshipCss["hTitle"]}
          >
            捐赠
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className={SponsorshipCss["introduce-content"]}
          >
            感谢为网站及其产品提供活力！
          </motion.p>
        </div>
      </div>
      <div className="sponsor-container">
        <div className="sponsor-title" style={{ marginBottom: "20px" }}>
          <div
            className="search"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <p>按照昵称搜索：</p>
              <div className="input">
                <AutoComplete
                  value={value}
                  options={anotherOptions}
                  style={{ width: 200 }}
                  onSelect={onSelect}
                  onSearch={(text) => setAnotherOptions(getPanelValue(text))}
                  onChange={onChange}
                  placeholder="enter 进行搜索"
                />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p>按照时间搜索：</p>
              <div className="input">
                <RangePicker
                  showTime={{ format: "HH:mm" }}
                  format="YYYY-MM-DD HH:mm"
                  onChange={(value, dateString) => {
                    console.log("Selected Time: ", value);
                    console.log("Formatted Selected Time: ", dateString);
                  }}
                  onOk={onOk}
                />
              </div>
            </div>
            {/* <div className="comments">
              <QuestionCircleOutlined />
            </div> */}
          </div>
        </div>
        <div className="sponsor-table">
          <Table dataSource={dataSource} columns={columns} />;
        </div>
      </div>
      <div className="sponsor-collape">

      </div>
    </div>
  );
};

export default Sponsorship;
