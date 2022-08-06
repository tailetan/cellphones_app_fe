import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://d731-42-115-169-248.ap.ngrok.io/api",
      changeOrigin: true,
    })
  );
}
