export const config = {
  basePath: "", // "" or "/subpath"
  name: "Abhijeet Singh",
  description: "Software Engineer at Razorpay | Mozilla Rep",
  photo: "/images/profile.jpg",
  twitter: "@cse_as",
  host: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://blog.absingh.com",
};
