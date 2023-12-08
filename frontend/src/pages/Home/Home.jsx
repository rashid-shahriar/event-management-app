import Card from "../../components/Card"; // Replace './Card' with the correct path to your Card component
import { historyData } from "../../components/Data"; // Replace './Data' with the correct path to your Data component

const Home = () => {
  const todayData = historyData[0].playerData;

  const totalPlayer = historyData[0].playerData.length;
  const isJoined = historyData[0].playerData.filter(
    (item) => item.cancel === undefined
  );

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
          {!isJoined ? "Click here to join" : "Joined"}
        </a>
      </div>

      <h3 className="text-center">Joined Players</h3>

      {todayData.map((item, index) => (
        <div
          key={index}
          className="flex justify-between py-2 border-b border-accent-color"
        >
          <p>{item.name}</p>
          <a className="text-text-color text-base" href="">
            {item.cancel == true ? "Cancel" : `Joined at ${item.time}`}
          </a>
        </div>
      ))}

      <h3 className="mt-10 text-center">
        Estimated start time will be 8.17 pm
      </h3>
    </Card>
  );
};

export default Home;
