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
    <div className={`flex justify-center ml-auto container mr-12 pt-8 gap-4`}>
      <div className="flex flex-col justify-center items-center w-[33rem] h-[14rem] bg-[#131313] rounded-2xl text-3xl gap-4 p-2">
        <h1 className="font-bold">Total Number of Games:</h1>
        <p>{totalGames}</p>
      </div>
      <div className="flex flex-col justify-center items-center w-[33rem] h-[14rem] bg-[#131313] rounded-2xl text-3xl gap-4 p-2">
        <h1 className="font-bold">Average Rating of all Games:</h1>
        <p>{averageRating.toFixed(2)}</p>
      </div>
      <div className="flex flex-col justify-center items-center w-[33rem] h-[14rem] bg-[#131313] rounded-2xl text-3xl gap-4 p-2">
        <h1 className="font-bold">Most Owned Copies:</h1>
        <p>{mostOwnedGameName}</p>
      </div>
    </div>
  );
};

export default SummaryStat;
