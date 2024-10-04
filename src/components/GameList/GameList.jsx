import { useState } from "react";
import style from "./GameList.module.css";
import GameCard from "../GameCard/GameCard";

export default function GameList({ games, categories }) {
  const [searchItem, setSearchItem] = useState("");
  const [searchFilter, setSearchFilter] = useState("All");

  const filteredGame = games.filter((game) => {
    return (
      (searchFilter === "All" || game.category === searchFilter) &&
      game.name.toLowerCase().includes(searchItem.toLowerCase())
    );
  });

  return (
    <div>
      <div className={style.front_page}>
        <div className={style.filter}>
          <input
            type="text"
            placeholder="Search...."
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className={style.input_style}
          />

          {categories.map((category) => (
            <button key={category} onClick={() => setSearchFilter(category)} className={style.color}>
              {category}
            </button>
          ))}
        </div>
        <div className={style.games}>
          {filteredGame.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}
