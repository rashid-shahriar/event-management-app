import Card from '../../components/Card';
import { historyData } from '../../components/Data';

const History = () => {
  const todayData = historyData[0];
  const isJoined = todayData.playerData.filter(
    (item) => item.cancel === undefined
  );

  const totalJoined = todayData.playerData.length;

  console.log(totalJoined);

  return (
    <Card>
      <div>
        <div className='flex justify-between items-center'>
          <h2>
            {historyData[0].id == 1 ? 'Today' : ''} ({historyData[0].type}){' '}
          </h2>
          <div className='flex items-center gap-2'>
            <div
              className={
                historyData[0].id === 1
                  ? 'w-2 h-2 rounded-full bg-[#05FF00]'
                  : 'w-2 h-2 rounded-full bg-[#ff0000]'
              }
            ></div>
            <h4>{historyData[0].id === 1 ? 'Active' : 'Closed'}</h4>
          </div>
        </div>

        <p>Starts at {historyData[0].time}. Please bring money</p>

        <div className='flex justify-between items-center mb-2 py-2 border-b border-accent-color'>
          <h4>Total Joined: {totalJoined}</h4>
          <a className='text-text-color text-base md:text-lg' href=''>
            {!isJoined ? 'Click here to join' : 'Cancle'}
          </a>
        </div>
      </div>

      {historyData.slice(1).map((item, index) => (
        <div key={index}>
          <div className='flex justify-between items-center'>
            <h2>
              {item.date} ({item.type})
            </h2>
            <div className='flex items-center gap-2'>
              <div
                className={
                  item.id > 1 ? 'w-2 h-2 rounded-full bg-[#ff0000]' : ''
                }
              ></div>
              <h4>{item.id > 1 ? 'Closed' : ''}</h4>
            </div>
          </div>

          <p>Starts at {item.time}. Please bring money</p>

          <div className='flex justify-between items-center mb-2 py-2 border-b border-accent-color'>
            <h4>Total Joined: {item.playerData.length}</h4>
            <a className='text-text-color text-base md:text-lg' href=''>
              {!isJoined ? 'Click here to join' : ''}
            </a>
          </div>
        </div>
      ))}

      <h3 className='mt-10 text-center'>
        Estimated start time will be 8.17 pm
      </h3>
    </Card>
  );
};

export default History;
