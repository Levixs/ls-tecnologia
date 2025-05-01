import LandingPage from "@/pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";

export function Router() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
