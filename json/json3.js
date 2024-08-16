var movie = {
    movies: [
      {
        type: "bollywood",
        data: [
          {
            id: "A1",
            name: "3 idiots",
            rating: 9,
            lang: "hindi",
            year: 2009,
          },
          {
            id: "A2",
            name: "Thugs of hindustan",
            rating: -10,
            lang: "hindi",
            year: 2018,
          },
        ],
      },
      {
        type: "hollywood",
        data: [
          {
            id: "B1",
            name: "Avengers",
            rating: 9,
            lang: "english",
            year: 2018,
          },
          {
            id: "B2",
            name: "Titanic",
            rating: 10,
            lang: "english",
            year: 1997,
          },
        ],
      },
    ],
  };
  console.log(movie);
  console.log("movies", movie.movies);
  console.log("movies", movie.movies[0]);
  console.log("movies", movie.movies[0].type);
  console.log("movies", movie.movies[0].data);
  
  console.log("movies", movie.movies[1]);
  console.log("movies", movie.movies[1].type);
  console.log("movies", movie.movies[1].data);
  