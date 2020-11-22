import api from "api";
import { AxiosResponse } from "axios";

export const trendingURL = `https://github-trending-api.now.sh/repositories?`;

export const getTrendingRepos = (
  language: string = "",
  period: string = ""
): Promise<AxiosResponse> => {
  return api.get(`${trendingURL}since=${period}&language=${language}`);
};
