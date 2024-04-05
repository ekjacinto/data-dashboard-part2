/* eslint-disable react/prop-types */
const SummaryStat = ({ data }) => {
  const totalGames = data.length;
  const totalRatings = data.reduce((sum, game) => sum + game.rating, 0);
  const averageRating = totalGames > 0 ? totalRatings / totalGames : 0;
  const gameWithMostOwned = data.reduce((maxOwned, game) => {
    return game.added_by_status.owned > maxOwned.added_by_status.owned
      ? game
      : maxOwned;
  }, data[0]);

  const mostOwnedGameName = data.length > 0 ? gameWithMostOwned.name : "";

  return (
    <div className="top-[2.9%] left-[12.5%] absolute flex gap-4 justify-evenly">
      <div className="flex flex-col justify-center items-center w-[31rem] h-[14rem] bg-[#131313] rounded-2xl text-3xl gap-4">
        <h1 className="font-bold">Total Number of Games:</h1>
        <p>{totalGames}</p>
      </div>
      <div className="flex flex-col justify-center items-center w-[31rem] h-[14rem] bg-[#131313] rounded-2xl text-3xl gap-4">
        <h1 className="font-bold">Average Rating of all Games:</h1>
        <p>{averageRating.toFixed(2)}</p>
      </div>
      <div className="flex flex-col justify-center items-center w-[30.25rem] h-[14rem] bg-[#131313] rounded-2xl text-3xl gap-4">
        <h1 className="font-bold">The Game With Most Owned Copies:</h1>
        <p>{mostOwnedGameName}</p>
      </div>
    </div>
  );
};

export default SummaryStat;
