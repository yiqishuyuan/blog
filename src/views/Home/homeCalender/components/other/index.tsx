import React from "react";
import { Divider, Flex, Tag } from "antd";
import CardComponentsCss from "./index.module.scss";
const itemImage = [
  {
    image: "../../../../../../public/favicon.jpg",
    keyId: 1,
    name: "lily",
  },
  {
    image: "../../../../../../public/favicon.jpg",
    keyId: 1,
    name: "lily",
  },
];
const itemImage1 = [
  {
    image: "../../../../../../public/favicon.jpg",
    keyId: 1,
    name: "lily",
  },
];
function Card(): React.ReactElement {
  return (
    <>
      <div className={CardComponentsCss["card-container"]}>
        <div className={CardComponentsCss["card-grid"]}>
          {/* 页面 */}
          {[...Array(9)].map((_, index) => (
            <div className={CardComponentsCss["grid-item"]}>
              <div className={CardComponentsCss["card-publish"]}>
                <Flex gap="4px 0" wrap>
                  <Tag color="green">长期</Tag>
                  <Tag color="red">重要</Tag>
                  <Tag color="blue">未完成</Tag>
                </Flex>
                <time dateTime="2025-07-14T16:00:00.000Z">2025年7月15日</time>
              </div>
              <div className={CardComponentsCss["card-title"]}>Nuxt UI v3</div>
              <div className={CardComponentsCss["card-content"]}>
                Nuxt 3.13 已经发布 - 移植回我们为 Nuxt 4 构建的一些新功能！
              </div>
              <div className={CardComponentsCss["card-footer"]}>
                <div className={CardComponentsCss["card-wall"]}>
                  <img src="../../../../../../public/favicon.jpg" alt="" />
                  <img src="../../../../../../public/favicon.jpg" alt="" />
                  <img src="../../../../../../public/favicon.jpg" alt="" />
                </div>
                {itemImage.length === 1 && (
                  <span className={CardComponentsCss["sign"]}>lily</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Card;
