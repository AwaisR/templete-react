const isProduction = process.env.APP_ENV === "production";
export default {
  BASE_URL: isProduction ? "" : "",
};
