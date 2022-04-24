import classNames from "classnames";

import "./index.less";

const GamePlayItem = (props) => {
  const prefix = "component-gamePlayItem";
  return (
    <div className={classNames(prefix)}>
      <div className={classNames(`${prefix}-img`)}>
        <img src={props.img} alt={props.text} />
      </div>
      <div className={classNames(`${prefix}-text`)}>{props.text}</div>
      <div className={classNames(`${prefix}-desc`)}>{props.desc}</div>
    </div>
  );
};

export default GamePlayItem;
