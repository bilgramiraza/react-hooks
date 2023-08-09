import useNameGenerator from "./components/useNameGenerator";

function App() {
  const  {name, error, loading} = useNameGenerator();

  return (
    <main>
      <h1>Hooks </h1>
      {error && <p>{error}</p>}
      {loading ? <p>Loading...</p> : <p>{name}</p>}
    </main>
  );
}

export default App
