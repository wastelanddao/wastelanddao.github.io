import { externalLine } from "./constant";

export const getUserAgent = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|WindowsCE/i.test(
    navigator.userAgent
  );
};

export const jumpToExternalLink = (val) => {
  const obj = externalLine.find((item) => item.key === val);
  if (obj) {
    window.location.href = obj.value;
  }
};
