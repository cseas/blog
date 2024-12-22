import { config } from "../config";

export const pageMeta = {
  title: config.name,
  description: config.description,
  image: config.basePath + config.photo,
  imageAlt: `Headshot of ${config.name}`,
  twitter: config.twitter,
};
