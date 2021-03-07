import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [url, setUrl] = useState(
    "https://rickandmortyapi.com/api/character/?name="
  );
  const [info, setInfo] = useState({});
  const [results, setResults] = useState([]);
  
  // const [search, setSearch] = useState("");

  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };

  useEffect(() => {
    axios
      .get(url)
      // .get(`${url}${search}`)
      .then((result) => {
        // console.log(result);
        setInfo(result.data.info);
        setResults(result.data.results);
      })
      .catch((err) => console.log(err));
  // }, [search]);
}, []);

  useEffect(() => {
    console.log("url: ", url);
    console.log("info: ", info);
    console.log("results: ", results);
    // console.log("search: ", search);
  // }, [url, info, results, search]);
   }, [url, info, results, ]);

  return (
    <div className="App">
      {/* <input
        className="input"
        type="text"
        value={search}
        onChange={handleChange}
      /> */}
      <main className="main">
        <div className="characters">
          {results.splice(0,10).map((el, ind) => (
            <div className="card" key={ind}>
              <img src={el.image} alt={`nety foto s ${el.name}`} />
              <p>{ind + 1}</p>
              <p>{el.name}</p>
              <p>{el.status}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;