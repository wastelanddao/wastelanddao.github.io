import "./App.css";
import { useViewport } from "./components/viewportContext";
import DesktopComponent from "./DesktopComponent";
import MobileComponent from "./MobileComponent";
import { getUserAgent } from "./utils/common";

const App = () => {
  const { width } = useViewport();
  const userAgent = getUserAgent();
  const breakpoint = 750;

  return width <= breakpoint || userAgent ? (
    <MobileComponent />
  ) : (
    <DesktopComponent />
  );
};

export default App;
