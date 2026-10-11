


import { Suspense } from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Players from './components/players/Players';
import './index.css'; 


const playersFetch = async() => {
  const res = await fetch('/data.json')
  const data= await res.json()
  return data ;
}
  const playersPromise = playersFetch()
function App() {


  
  return (
<>

<Navbar></Navbar>
<Banner></Banner>
<Suspense fallback={<p>Loading Data...</p>}>
  <Players playersPromise={playersPromise} ></Players>
</Suspense>

</>
  );
}

export default App;

