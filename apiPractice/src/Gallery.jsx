import axios from "axios";
import React from "react";
import { useQuery } from "@tanstack/react-query";

const url =
  "https://api.unsplash.com/search/photos?client_id=vQNkfucCGtAIRCUjgCKCCL3Cnjq3auoQR1Y-0X-9-sQ&query=office";

const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);

      return result.data;
    },
  });
  console.dir(response);
  return <h2>Gallery</h2>;
};

export default Gallery;
