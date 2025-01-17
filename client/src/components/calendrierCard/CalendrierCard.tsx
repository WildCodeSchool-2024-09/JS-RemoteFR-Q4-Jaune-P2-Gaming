import "./CalendrierCard.css";

interface platform{
    platform:{
        name:string};
}

interface gameType{
    game:{
    id: number;
    name: string;
    background_image: string;
    released:string;
    platforms: platform[];
    }
}


export default function CalendrierCard({ game }:gameType) {
    const platforms= game.platforms
   
  return (
    <>
      <img src={game.background_image} alt="" />
      <p>{game.name}</p>
      <p>sortie le: {game.released}</p>

      {/* verifie si game.platforms est toujours un tableau (même vide)  */}
      <p>{platforms?.map((p) => p.platform.name).join(" - ") || []}</p>

    </>
  );
}
