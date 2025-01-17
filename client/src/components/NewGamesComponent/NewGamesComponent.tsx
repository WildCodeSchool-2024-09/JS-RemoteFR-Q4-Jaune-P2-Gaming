import "./NewGamesComponent.css";

interface NewGameType {
  newGame: {
    background_image: string;
    name: string;
  };
}

export default function NewGamesComponent({ newGame }: NewGameType) {
  return (
    <div>
      <img src={newGame.background_image} alt="" />

      <p>{newGame.name}</p>
    </div>
  );
}
