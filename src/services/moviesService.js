import apiManager from "./apiManager";

export default function popularMoviesService() {
  const config = {
    url: "/3/discover/movie",
    queryParams: {
      api_key: "3a94078fb34b772a31d9a1348035bed7",
      language: "en-US",
      sort_by: 'popularity.desc',
      include_adult:false,
      include_video:false,
      page:1
    }
  };
  return apiManager.get(config).catch((error) => {
      return {
          error: true,
          errorMessage: error.message
      }
  });
}

window.pms = popularMoviesService;
