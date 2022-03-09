import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Movie from "./components/Movie";

const App = () => {
  const [movies, getMovies] = useState([]);

  useEffect(() => {
    const myFetch = async () => {
      try {
        let url = `https://api.themoviedb.org/3/discover/movie`;
        url += `?api_key=b6eae0c714177b0400785923c9891018`;
        url += `&certification_country=US`;
        url += `&certification.lte=PG-13`;
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Terjadi gangguan dengan kode: ${response.status}`);
        }
        let data = await response.json();
        getMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    myFetch();
  }, []);
  
  return (
    <>
      <Header />
      <main className="pb-5">
        <div className="container">
          <h2 className="py-5 text-white text-center">Best Movie</h2>
          <div className="row">
            {movies.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
