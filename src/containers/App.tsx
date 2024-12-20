import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


import Project from "../layouts/Pages/Project";
import Home from "../layouts/Pages/Home";
import Goals from "../layouts/Pages/Goals";
import RootLayout from "../layouts/RootLayout";
import Collaborations from "../layouts/Pages/Collaborations";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/goals" element={<Goals />} />
      <Route path="/collaborations" element={<Collaborations />} />
    </Route>,
  ),
);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
