import "./styles/index.scss";
import { UseTheme } from "app/providers/ThemeProvider/index";
import { classNames } from "shared/index";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/router";
import { Suspense } from "react";

function App() {
  const { theme } = UseTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
