import Card from "../components/Card"; // Replace './Card' with the correct path to your Card component
import { playerData } from "../components/Data"; // Replace './Data' with the correct path to your Data component

const Home = () => {
  const totalPlayer = playerData.length;
  const isJoined = playerData.filter((item) => item.cancle === undefined);

  return (
    <Card>
      <div className="flex justify-between items-center">
        <h2>Today (Friendly)</h2>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#05FF00]"></div>
          <h4>Active</h4>
        </div>
      </div>

      <p>Starts at 8 PM. Please bring money</p>

      <div className="flex justify-between items-center mb-2 py-2 border-b border-accent-color">
        <h4>Total Joined: {totalPlayer}</h4>
        <a className="text-text-color text-base md:text-lg" href="">
          {!isJoined ? "Click here to join" : ""}
        </a>
      </div>

      <h3 className="text-center">Joined Players</h3>

      {playerData.map((item, index) => (
        <div
          key={index}
          className="flex justify-between py-2 border-b border-accent-color"
        >
          <p>{item.name}</p>
          <a className="text-text-color text-base" href="">
            {item.cancle ? "Cancle" : `Joined at ${item.time}`}
          </a>
        </div>
      ))}

      <h3 className="mt-10 text-center">Estimated start time will be 8.17</h3>
    </Card>
  );
};

export default Home;
