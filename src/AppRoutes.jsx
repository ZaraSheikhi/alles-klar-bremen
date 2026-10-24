import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { seoPages } from "./content/siteContent";
import Home from "./pages/Home";
import Kontakt from "./pages/Kontakt";
import { Agb, Datenschutz, Impressum } from "./pages/Legal";
import Leistungen from "./pages/Leistungen";
import ServicePage from "./pages/ServicePage";
import { Danke, NotFound } from "./pages/Simple";
import UeberUns from "./pages/UeberUns";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="leistungen" element={<Leistungen />} />
        {seoPages.map((p) => (
          <Route key={p.slug} path={p.slug} element={<ServicePage page={p} />} />
        ))}
        <Route path="ueber-uns" element={<UeberUns />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="danke" element={<Danke />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="datenschutz" element={<Datenschutz />} />
        <Route path="agb" element={<Agb />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
