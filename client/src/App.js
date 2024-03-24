import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { CheckUserExists } from "./helper/helper";

// react routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/quiz",
    element: (
      <CheckUserExists>
        <Quiz />
      </CheckUserExists>
    ),
  },
  {
    path: "/result",
    element: (
      <CheckUserExists>
        <Result />
      </CheckUserExists>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
