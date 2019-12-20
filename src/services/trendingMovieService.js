import apiManager from "./apiManager";

export default function trendingMoviesService(mediaType = 'all',timeWindow = 'day') {
  const config = {
    url: `/3/trending/${mediaType}/${timeWindow}`,
    queryParams: {
      api_key: "3a94078fb34b772a31d9a1348035bed7"
    }
  };
  return apiManager.get(config).catch((error) => {
      return {
          error: true,
          errorMessage: error.message
      }
  });
}

window.trs = trendingMoviesService;
