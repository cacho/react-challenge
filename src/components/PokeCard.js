import React from "react";
import { mockPokemonData } from "../mock/pokeData.js";
import "../styles.css";

export default function PokeCard() {
  return (
    <div className="card">
      <div className="card__title">
        <h1>{mockPokemonData.name}</h1>
      </div>
      <div className="card__images">
        <div>
          <img src={mockPokemonData.sprites.front_default} alt="" />
        </div>
        <div>
          <img src={mockPokemonData.sprites.front_shiny} alt="" />
        </div>
      </div>
      <div className="card__link">
        <a
          href={mockPokemonData.video}
          target="_blank"
          rel="noopener noreferrer"
        >
          Video
        </a>
      </div>
    </div>
  );
}
