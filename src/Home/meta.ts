import { config } from "../config.js";

export const pageMeta = {
  title: config.name,
  description: config.description,
  image: config.basePath + config.photo,
  imageAlt: `Headshot of ${config.name}`,
  twitter: config.twitter,
};
