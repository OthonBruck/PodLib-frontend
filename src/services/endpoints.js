export const endpoints = {
  API_URL: "http://localhost:2222/",

  buscarPodcast: (query) => `searchpodcast?${query}`,
  getAllPodcast: `podcast`,
  deletePodcast: (id) => `podcast/${id}`,
  changePodcast: (idPod, epi) => `podcast/${idPod}/${epi}`,
};
