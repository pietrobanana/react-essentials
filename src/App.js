import './App.css';
import React, {useState, useEffect} from 'react';

// https://api.github.com/users/pietrobanana

function App({ login }) {
  const [data, setData] = useState(null);
  const[loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if(loading) return <h1>loading...</h1>;
  if(error) 
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  if(!data) return null;
    
  return (
      <div>
        <h1>{data.login}</h1>
        <p>{data.id}</p>
        <img atl={data.login} src={data.avatar_url} />
      </div>
  );
}

export default App;
