import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
import { MainProvider } from "./context";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import "./styles/tailwind.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <MainProvider>
      <Provider store={store}>
        <App />
        <ToastContainer newestOnTop />
      </Provider>
    </MainProvider>
  </BrowserRouter>
);
