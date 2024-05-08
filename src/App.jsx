import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import {
  Counter,
  DynamicButton,
  TodoList,
  AutoCount,
  Navbar,
} from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {" "}
        <Navbar />
        <Counter />
      </>
    ),
  },
  {
    path: "/todo",
    element: (
      <>
        {" "}
        <Navbar />
        <TodoList />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      {/* <Counter />
      <TodoList />
      <DynamicButton />
      <AutoCount /> */}
    </>
  );
}

export default App;
