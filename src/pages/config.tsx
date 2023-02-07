export const config = {
  urlApi: process.env.MODE === "development"
    ? process.env.VITE_APP_DEV_MODE as string
    : process.env.VITE_APP_BACKEND_URL as string
}
// export const config = {
//   urlApi: import.meta.env.MODE === "development"
//     ? import.meta.env.VITE_APP_DEV_MODE as string
//     : import.meta.env.VITE_APP_BACKEND_URL as string
// }
