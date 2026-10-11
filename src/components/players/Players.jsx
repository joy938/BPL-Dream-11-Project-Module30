import React, { use } from 'react';
import AvailablePlayers from './AvailablePlayers';

const Players = ({playersPromise}) => {
  const players = use(playersPromise)

  
    
    return (
        <div>
            <AvailablePlayers players={players}></AvailablePlayers>
        </div>
    );
};

export default Players;