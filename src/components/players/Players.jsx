import  { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

const Players = ({playersPromise , coin , setCoin}) => {
  const players = use(playersPromise)
  const [buttonType , setButtonType] = useState('available')



  
    
    return (


        <div className='container mx-auto'>
            <div className='flex justify-between gap-4 mb-2'>
                <h2 className='font-bold text-xl'>{buttonType==='available' ? 'Available Players' : 'Selelcted Players'} </h2>
<div>
  <button onClick={()=>setButtonType('available')} className={`btn rounded-r-none ${buttonType==='available' ? 'btn-success' : '' }  `}>Available</button>
  <button onClick={()=>setButtonType('selected')} className={`btn rounded-l-none ${buttonType==='selected' ? 'btn-success' : ''} `}>Selected</button>
</div>
            </div>
  {buttonType==='available' ? <AvailablePlayers coin={coin} setCoin={setCoin} players={players}></AvailablePlayers> : <SelectedPlayers></SelectedPlayers> }
        </div>
    );
};

export default Players;