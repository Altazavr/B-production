import { Routes, Route, Link } from "react-router-dom";
import "./styles/index.scss";
import { Suspense } from "react";
import { AboutPageAsync } from "./components/AboutPage/index.async";
import { MainPageAsync } from "./components/MainPage/index.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";
function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggleTheme</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
      {/* asdfasf
      <Counter /> */}
    </div>
  );
}

export default App;
