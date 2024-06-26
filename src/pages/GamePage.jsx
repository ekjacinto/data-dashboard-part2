import { useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
function GamePage({ toggle, data }) {
  const { name } = useParams();
  const game = data.find((item) => item.name === name);
  console.log(data);
  console.log(game);
  return (
    <div
      className={`flex flex-col justify-center items-center ${
        toggle
          ? "ml-[32rem] w-[70%] duration-[400ms]"
          : "w-[96%] duration-[750ms]"
      }
    transition-all`}
    >
      <div className="flex flex-col justify-center items-center mt-[10rem] ml-[15rem] w-[85rem] h-[55rem] bg-[#131313] rounded-3xl">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className=" text-6xl font-bold">{name}</h1>
          <h1 className="text-4xl">Rating: {game.rating} / 5</h1>
          <h1 className="text-4xl">
            Total Reviewer Playtime: {game.playtime} hours
          </h1>
          <h1 className="text-4xl">Release Date: {game.released}</h1>
          <h1 className="text-4xl">Owned: {game.added_by_status.owned}</h1>
          <h1 className="text-4xl">
            Metacritic Score: {game.metacritic} / 100
          </h1>
          <h1 className="text-4xl">ESRB Rating: {game.esrb_rating.name}</h1>
          <div className="flex  gap-4">
            <h1 className="text-4xl">Platforms: </h1>
            {game.parent_platforms.map((platform, index) => (
              <h1 className="text-4xl underline" key={index}>
                {platform.platform.name}
              </h1>
            ))}
          </div>

          <img
            src={game.background_image}
            width={500}
            alt={`Background Image of ${game.name}`}
            className="mt-4 border-4 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default GamePage;
