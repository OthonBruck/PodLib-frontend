import React, { useCallback, useEffect, useState } from "react";
import Pesquisa from "../../components/Pesquisa/index";
import api from "../../services/api";
import { endpoints } from "../../services/endpoints";
import PodcastWrapper from "../../components/PodcastWrapper/index";

export default function Home() {
  const [cast, setCast] = useState([]);

  const fetchCast = useCallback(async () => {
    const response = await api.get(endpoints.buscarPodcast("search=nerd"));
    setCast(response.data);
  }, []);

  useEffect(() => {
    fetchCast();
  }, [fetchCast]);

  return (
    <div>
      <PodcastWrapper lista={cast} />
    </div>
  );
}
