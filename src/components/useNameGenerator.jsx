import { useEffect, useState } from "react";

const getData = async (handleName, handleError, handleLoading) => {
  try {
    const res = await fetch('https://randomuser.me/api/', { mode: 'cors' });
    if (!res.ok) throw new Error('Server Issue');
    const data = await res.json();
    handleName(data.results[0].name.first);
  } catch (err) {
    handleError(err);
  } finally {
    handleLoading(false);
  }
};

const useNameGenerator = () =>{
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData(setName, setError, setLoading);
  }, []);
  return { name, error, loading};
};

export default useNameGenerator;
