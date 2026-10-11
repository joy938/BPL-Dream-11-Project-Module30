import  { use } from 'react';
import AvailablePlayers from './AvailablePlayers';

const Players = ({playersPromise}) => {
  const players = use(playersPromise)

  
    
    return (


        <div className='container mx-auto'>
            <div className='flex justify-between gap-4 mb-2'>
                <h2 className='font-bold text-xl'>Available Players: {players.length} </h2>
  <div>
    <button className='btn btn-success'>Available</button>
    <button className='btn '>Selected</button>
  </div>
            </div>
            <AvailablePlayers players={players}></AvailablePlayers>
        </div>
    );
};

export default Players;