import  { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers';

const Players = ({playersPromise}) => {
  const players = use(playersPromise)

  const [buttonType , setButtonType] = useState('selected')

  
    
    return (


        <div className='container mx-auto'>
            <div className='flex justify-between gap-4 mb-2'>
                <h2 className='font-bold text-xl'>Available Players: {players.length} </h2>
  <div>
    <button className={`btn ${buttonType==='available' ? 'btn-success ' : '' }  rounded-r-none `}>Available</button>
    <button className={`btn ${buttonType==='selected' ? 'btn-success ' : '' }  rounded-l-none `}>Selected</button>
  </div>
            </div>
            <AvailablePlayers players={players}></AvailablePlayers>
        </div>
    );
};

export default Players;