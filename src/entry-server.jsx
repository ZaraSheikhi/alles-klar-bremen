import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import AppRoutes from "./AppRoutes";
import { company } from "./content/siteContent";

export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>
  );
}

export { metaFor } from "./content/routeMeta";
export { routeMeta } from "./content/routeMeta";

export const siteUrl = company.siteUrl;
