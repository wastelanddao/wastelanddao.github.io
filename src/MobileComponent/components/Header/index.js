import classNames from "classnames";

import "./index.less";
import Img_left from "../../../assets/images/mobile/img_left@2x.png";
import Img_right from "../../../assets/images/mobile/img_right@2x.png";

const Header = (props) => {
  const prefix = "component-header";
  return (
    <div className={classNames(`${prefix}-header`)}>
      <div className={classNames(`${prefix}-header-img`)}>
        <img src={Img_left} alt="Img_left" />
      </div>
      <div className={classNames(`${prefix}-header-text`)}>{props.title}</div>
      <div className={classNames(`${prefix}-header-img`)}>
        <img src={Img_right} alt="Img_right" />
      </div>
    </div>
  );
};

export default Header;
