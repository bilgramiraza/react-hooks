import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState('');

  useEffect(()=>{
    const getData = async (handleName)=>{
      try{
      const res = await fetch('https://randomuser.me/api/',{mode:'cors'});
      if(!res.ok) throw new Error('Server Issue');
      const data = await res.json();
      handleName(data.results[0].name.first);
      }catch(err){
        console.error(err);
      }
    };
    getData(setName);
  },[]);

  return (
    <main>
      <h1>Hooks </h1>
      <p>{name}</p>
    </main>
  );
}

export default App
