import Home from "./pages/Home";
import FaHome from "./pages/FaHome";

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  return path === "/fa" ? <FaHome /> : <Home />;
}
