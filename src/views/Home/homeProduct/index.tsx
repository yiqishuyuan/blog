import React from "react";

import layoutProductCss from "./jndex.module.scss";
const LayoutProduct = () => {
  return (
    <div className="layout-product">
      <h3 className={layoutProductCss["product-title"]}>我的产品或我的能力</h3>
      <div className={layoutProductCss['product-container']}>
        <div className={layoutProductCss["card-grid"]}>
          {/* 页面 */}
          {[...Array(4)].map((_, index) => (
            <div className={layoutProductCss["grid-item"]}>
              <div className={layoutProductCss["grid-flex"]}>
                <div className={layoutProductCss["card-title"]}>PAI</div>
                <div className={layoutProductCss["card-content"]}>
                  PAI,客户端，用于提供账单，如记账、加载合并收支出。
                </div>
              </div>
              <div className={layoutProductCss["card-footer"]}>
                <div className="card-update">
                  PAI 3.13 已经发布 - 移植回我们为 PAI 2.12 构建的一些新功能！
                </div>
                <time dateTime="2025-07-14T16:00:00.000Z">2025年7月15日</time>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LayoutProduct;
