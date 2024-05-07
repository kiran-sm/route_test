import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { Counter, DynamicButton, TodoList, AutoCount } from "./components";

function App() {
  return (
    <>
      <Counter />
      <TodoList />
      <DynamicButton />
      <AutoCount />
      {/* 
      <BrowserRouter>
        <Routes>
          <Route path="/" elemnt={<TodoList />}>
            <Route index element={<AutoCount />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      {/* <nav>
        <ul>
          <li>
            <Link to="./components/autoCount">Check</Link>
          </li>
        </ul>
      </nav>
      <Outlet /> */}
    </>
  );
}

export default App;
