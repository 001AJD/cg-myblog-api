import { getFeaturedBlogsDbFunction } from "../dbFunctions/getFeaturedBlogsDbFunction.js";
import { getFeaturedBlogsResponseMapper } from "./responseMapper/getFeaturedBlogsResponseMapper.js";

const getFeaturedBlogsService = () => {
  return new Promise((resolve, reject) => {
    getFeaturedBlogsDbFunction()
      .then((dbResponse) => {
        resolve(getFeaturedBlogsResponseMapper(dbResponse));
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { getFeaturedBlogsService };
