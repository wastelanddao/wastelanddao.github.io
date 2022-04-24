export const getUserAgent = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|WindowsCE/i.test(
    navigator.userAgent
  );
};
