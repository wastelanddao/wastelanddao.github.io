import { useState } from "react";
import classNames from "classnames";

import "./index.less";
import Icon_an from "../../../assets/images/pc/icon_an@2x.png";
import Icon_an1 from "../../../assets/images/pc/icon_an1@2x.png";

const FAQItem = (props) => {
  const prefix = "component-FAQItem";
  const [status, setStatus] = useState(props.initStatus || false);

  const handleClick = () => {
    setStatus(!status);
  };

  return (
    <div className={classNames(prefix)}>
      <div className={classNames(`${prefix}-line`)}>
        <div className={classNames(`${prefix}-line-left`)}>{props.title}</div>
        <div
          className={classNames(`${prefix}-line-right`)}
          onClick={handleClick}
        >
          <img src={status ? Icon_an : Icon_an1} alt="Icon_an" />
        </div>
      </div>
      <div
        className={classNames(`${prefix}-desc`)}
        style={{ display: status ? "" : "none" }}
      >
        {props.desc}
      </div>
    </div>
  );
};

export default FAQItem;
