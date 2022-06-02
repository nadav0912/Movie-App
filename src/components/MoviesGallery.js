import React from "react";
import MovieCard from "./MovieCard";
import LoadingCard from "./LoadingCard";

function MoviesGallery({ filters }) {
  const [moviesIds, setMoviesIds] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [page, setPage] = React.useState({ current: 1, last: 1 });

  const loadData = async () => {
    const data = await fetch(
      `https://omdbapi.com/?apikey=2e004ade&s=${filters.search}&type=${filters.type}&y=${filters.year}&page=${page.current}`
    )
      .then((res) => {
        if (!res.ok) throw Error("cant fetch the data");

        return res.json();
      })
      .then((data) => {
        if (data.Response === "True") {
          // Data okey
          setMoviesIds((prevMoviesData) => [
            ...new Set([
              ...prevMoviesData,
              ...data.Search.map((movie) => movie.imdbID),
            ]),
          ]);

          if (page.current === 1) {
            const lastPage = Math.ceil(data.totalResults / 10);
            setPage((prevPage) => ({ ...prevPage, last: lastPage }));
          }

          if (error) setError(false);
        } else {
          // No results found
          setMoviesIds([]);
          setError(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (
      scrollHeight - scrollTop <= clientHeight + 500 &&
      page.current < page.last
    )
      setPage((prevPage) => ({ ...prevPage, current: prevPage.current + 1 }));
  };

  // Reset states and reload data when search new movie
  React.useEffect(() => {
    setMoviesIds([]);
    setLoading(true);
    setPage({ current: 1, last: 1 });
    loadData();
  }, [filters]);

  // Get more movies when user scroll to the end
  React.useEffect(() => {
    loadData();
  }, [page.current]);

  const loadingCards = (
    <>
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </>
  );

  return (
    <div className="gallery--container" onScroll={handleScroll}>
      <div className="gallery">
        {loading ? (
          loadingCards
        ) : error ? (
          <div>movie note found!</div>
        ) : (
          moviesIds.map((id) => <MovieCard key={id} movieId={id} />)
        )}
      </div>
    </div>
  );
}

export default MoviesGallery;
