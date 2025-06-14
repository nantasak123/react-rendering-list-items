const movies = [
  {
    title: "Avatar",
    year: "2009",
    runtime: "162 min",
    director: "James Cameron",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    genres: ["Action", "Adventure", "Fantasy"],
    imdbRating: "7.9",
    imdbVotes: "890,617",
  },
  {
    title: "I Am Legend",
    year: "2007",
    runtime: "101 min",
    director: "Francis Lawrence",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
    genres: ["Drama", "Horror", "Sci-Fi"],
    imdbRating: "7.2",
    imdbVotes: "533,874",
  },
  {
    title: "300",
    year: "2006",
    runtime: "117 min",
    director: "Zack Snyder",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
    genres: ["Action", "Drama", "Fantasy"],
    imdbRating: "7.7",
    imdbVotes: "611,046",
  },
  {
    title: "The Avengers",
    year: "2012",
    runtime: "143 min",
    director: "Joss Whedon",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    genres: ["Action", "Sci-Fi", "Thriller"],
    imdbRating: "8.1",
    imdbVotes: "1,003,301",
  },
  {
    title: "The Wolf of Wall Street",
    year: "2013",
    runtime: "180 min",
    director: "Martin Scorsese",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    genres: ["Biography", "Comedy", "Crime"],
    imdbRating: "8.2",
    imdbVotes: "786,985",
  },
  {
    title: "Interstellar",
    year: "2014",
    runtime: "169 min",
    director: "Christopher Nolan",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    imdbRating: "8.6",
    imdbVotes: "937,412",
  },
  {
    title: "Game of Thrones",
    year: "2011–",
    runtime: "56 min",
    director: "N/A",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    genres: ["Adventure", "Drama", "Fantasy"],
    imdbRating: "9.5",
    imdbVotes: "1,046,830",
  },
  {
    title: "Vikings",
    year: "2013–",
    runtime: "44 min",
    director: "N/A",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg",
    genres: ["Action", "Drama", "History"],
    imdbRating: "8.6",
    imdbVotes: "198,041",
  },
  {
    title: "Gotham",
    year: "2014–",
    runtime: "42 min",
    director: "N/A",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDI3ODYyODY4OV5BMl5BanBnXkFtZTgwNjE5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
    genres: ["Action", "Crime", "Drama"],
    imdbRating: "8.0",
    imdbVotes: "133,375",
  },
  {
    title: "Power",
    year: "2014–",
    runtime: "50 min",
    director: "N/A",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZTgwODYxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
    genres: ["Crime", "Drama"],
    imdbRating: "8.0",
    imdbVotes: "14,770",
  },
  {
    title: "Narcos",
    year: "2015–",
    runtime: "49 min",
    director: "N/A",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDMzMTc0MF5BMl5BanBnXkFtZTgwMTAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    genres: ["Biography", "Crime", "Drama"],
    imdbRating: "8.9",
    imdbVotes: "118,680",
  },
  {
    title: "Breaking Bad",
    year: "2008–2013",
    runtime: "49 min",
    director: "N/A",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMzI5NDc5Nl5BMl5BanBnXkFtZTgwMjM0MTI2MDE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
    genres: ["Crime", "Drama", "Thriller"],
    imdbRating: "9.5",
    imdbVotes: "889,883",
  },
  {
    title: "Doctor Strange",
    year: "2016",
    runtime: "N/A",
    director: "Scott Derrickson",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg",
    genres: ["Action", "Adventure", "Fantasy"],
    imdbRating: "N/A",
    imdbVotes: "N/A",
  },
  {
    title: "Rogue One: A Star Wars Story",
    year: "2016",
    runtime: "N/A",
    director: "Gareth Edwards",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzA4Nzk3NV5BMl5BanBnXkFtZTgwNjAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
    genres: ["Action", "Adventure", "Sci-Fi"],
    imdbRating: "N/A",
    imdbVotes: "N/A",
  },
  {
    title: "Assassin's Creed",
    year: "2016",
    runtime: "N/A",
    director: "Justin Kurzel",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
    genres: ["Action", "Adventure", "Fantasy"],
    imdbRating: "N/A",
    imdbVotes: "N/A",
  },
  {
    title: "Luke Cage",
    year: "2016–",
    runtime: "55 min",
    director: "N/A",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
    genres: ["Action", "Crime", "Drama"],
    imdbRating: "N/A",
    imdbVotes: "N/A",
  },
];

export function MoviesBox(item){
  return <div className="movie-box">
                    <img src={item.image} alt="" />
                    <div className="movie-infomation">
                      <ul>
                        <li>Title: <span>{item.title}</span></li>
                        <li>Year: <span>{item.year}</span></li>
                        <li>Runtime: <span>{item.runtime}</span></li>
                        <li className="genres-item">Genres: <ul >{item.genres.map((i) => {
                                          return <li>{i}</li>
                                      })}
                                  </ul></li>
                        <li>IMDB Rating: <span>{item.imdbRating}</span></li>
                        <li>IMDB Votes: <span>{item.imdbVotes}</span></li>
                      </ul>
                    </div>
                  </div>
}




export default movies;
