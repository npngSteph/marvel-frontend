import "./App.css";
import { useState, useEffect, startTransition } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMyMarvelBackend = async () => {
      const response = await axios.get("http://localhost:4000/characters");
      setData(response.data);
      setIsLoading(false);
    };

    fetchMyMarvelBackend();
  }, []);

  return (
    <div className="App">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
        width={100}
        height={50}
      />

      <nav className="menu">
        <ul className="container">
          <li className="button">Characters</li>
          <li className="button">Comics</li>
          <li className="button">Favorites</li>
        </ul>
      </nav>

      {isLoading === true ? (
        <h2>En cours de chargement</h2>
      ) : (
        <>
          <p>test</p>
          {console.log(data)}
          {data.results.map((item) => {
            return (
              <div>
                <img src={item.thumbnail.path} />
                <h1>{item.name}</h1>
                <h6>{item.description}</h6>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default App;
