import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "src/components/HomePage";
import MainLayout from "src/layouts";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
