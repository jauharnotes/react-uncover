import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Movie from "./components/Movie";
import { MovieGenres } from "./components/MovieGenres";

 // Generate tahun
 let years = [];
 const thisYear = new Date().getFullYear();
 for (let i = 0; i < 10; i++) {
   years.push(thisYear - i);
 }

const App = () => {
  const [movies, setMovies] = useState([]);
  const [year, setYear] = useState(thisYear);
  const [genreId, setGenreId] = useState("");
  const [genreName, setGenreName] = useState("All");
  const [page, setPage] = useState(1);

  const handleYearChange = (event) => {
    // Untuk mengambil tahun dari <select>
    setYear(event.target.value);
  }

  const handleGenreChange = (event) => {
    setGenreId(event.target.value);

    // Untuk mengambil nama genre dari <select>
    let index = event.target.selectedIndex;
    setGenreName(event.target[index].text);

     // Untuk reset page
     setPage(1);
  }

  const handleLoadMoreClick = () => {
    setPage(prevPage => prevPage + 1);
  }

  useEffect(() => {
    const myFetch = async () => {
      try {
        let url = `https://api.themoviedb.org/3/discover/movie`;
        url += `?api_key=b6eae0c714177b0400785923c9891018`;
        url += `&certification_country=US`;
        url += `&certification.lte=PG-13`;
        url += `&primary_release_year=${year}`;
        url += `&with_genres=${genreId}`;
        url += `&page=${page}`;

        let response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Terjadi gangguan dengan kode: ${response.status}`);
        }
        let data = await response.json();
        // jika halaman 1, isi ulang state movies
        // Jika halaman 2, atau lebih, tambahkan ke dalam movie
        if (page === 1) {
          setMovies(data.results);
        } else {
          setMovies((prevMovie) => [...prevMovie, ...data.results]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    myFetch();
  }, [year, genreId, page]);
  
  return (
    <>
      <Header />
      <nav>
        <div className="container text-white">
          <div className="row">
            <div className="col d-flex align-items-center">
              <hr className="flex-grow-1 me-3" />
              <small>powered by themoviedb.org</small>
              </div>
              <div className="col-3 d-flex">
                <div className="me-3">
                  <label htmlFor="year" className="form-label">Year</label>
                  <select className="form-select" onChange={handleYearChange} value={year} id="year">
                    {years.map((year) =>
                    <option key={year.toString()} value={year}>{year}</option>
                    )}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="genre" className="form-label">Genre</label>
                    <select className="form-select" onChange={handleGenreChange} value={genreId} id="genre">
                      {MovieGenres.map((genre) =>
                      <option key={genre.id} value={genre.id}>{genre.name}</option>
                      )}
                      </select>
                  </div>
                </div>
            </div>
          </div>
      </nav>

      <main className="pb-5">
        <div className="container">
          <h2 className="py-5 text-white text-center">
            {`Best Movie ${year}, Genre: ${genreName}`}
            </h2>
            <div className="row">
              {movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
            </div>
            <div className="row">
              <button className="btn btn-dark" onClick={handleLoadMoreClick}>
                Load More...
                </button>
              </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
