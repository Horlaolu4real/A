import style from "./GameCard.module.css";
// import Image from "next/image";
export default function GameCard({ game }) {
  return (
    <>
      <div className={style.body}>
        <img src={game.imgUrl} alt={game.name} width={200} height={150} />
        <div className={style.details}>
          <h2 className={style.white}>Category: {game.category}</h2>
          <h2 className={style.white}>Name: {game.name}</h2>
        </div>
      </div>
    </>
  );
}
