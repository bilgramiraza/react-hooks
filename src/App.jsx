import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState('');

  useEffect(()=>{
    fetch('https://randomuser.me/api/',{mode:'cors'})
      .then(res=>{
        if(!res.ok) throw new Error('server Error');
        return res.json();
      })
      .then(res=>setName(res.results[0].name.first))
      .catch(err=>console.error(err));
  },[]);

  return (
    <main>
      <h1>Hooks </h1>
      <h1>{name}</h1>
    </main>
  );
}

export default App
