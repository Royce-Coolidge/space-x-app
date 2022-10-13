import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useJokes } from "../../context/jokes-context";
import { useGeekJokes } from "../../data/use-geek-jokes-api";

export default function Jokes() {
  const [jokes, setJokes] = useState([]);
  const { myJokes } = useJokes();
  const { data, refetch } = useGeekJokes();

  useEffect(() => {
    if (data && !jokes.includes(data.joke)) {
      setJokes((jokes) => [...jokes, data.joke]);
    }
  }, [data]);

  return (
    <div >
      <header>
        <div>
          <h1>
            <Link to="/" title="Geek Jokes" aria-label="Remix Jokes">
              <span className="logo">🤪</span>
              <span className="logo-medium">J🤪KES</span>
            </Link>
          </h1>
        </div>
      </header>
      <main>
        <div>
          <p>{data.joke}</p>
          <button className="button" onClick={refetch}>
            Get Random Joke
          </button>
          <Link to="new">
            Add Your Own Hilarious Joke!
          </Link>
        </div>
        {myJokes.length > 0 && (
          
            <div>
              <h1>Your Awesome Jokes</h1>
              <div className="jokes-list">
                <ul>
                  {myJokes.map((joke, i) => (
                    <li key={joke.id}>{joke.content}</li>
                  ))}
                </ul>i 
              </div>
            </div>
        )}
      </main>
    </div>
  );
}