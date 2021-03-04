import React from "react";
import AccordionFavorite from "../../components/AccordionFavorite";
import DialogSearch from "../../components/DialogSearch/index";

export default function Favoritos() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <DialogSearch />
      <AccordionFavorite />
    </div>
  );
}
