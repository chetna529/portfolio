import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Gateway from "./pages/Gateway";
import ProjectDetails from "./pages/ProjectDetails";
import StartProject from "./pages/StartProject";
import NotFound from "./pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Gateway />} />
      <Route
        path="/portfolio"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/portfolio/start-project"
        element={
          <MainLayout>
            <StartProject />
          </MainLayout>
        }
      />
      <Route
        path="/projects/:projectId"
        element={
          <MainLayout>
            <ProjectDetails />
          </MainLayout>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRoutes;
