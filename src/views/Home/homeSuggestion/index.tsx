import React from "react";
import { Input } from "antd";
import layoutSuggetion from "./index.module.scss";
const { TextArea } = Input;
const onChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  console.log("Change:", e.target.value);
};
const LayoutSuggestion: React.FC = () => {
  return (
    <div className={layoutSuggetion["layout-suggestion"]}>
      <h3 className={layoutSuggetion["suggestion-title"]}>留言/建议</h3>
      <div className="suggestion-container">
        <TextArea
          showCount
          maxLength={100}
          onChange={onChange}
          placeholder="少侠且慢，留下你的建议！"
          style={{ height: 120, resize: "none" }}
        />
      </div>
    </div>
  );
};

export default LayoutSuggestion;
