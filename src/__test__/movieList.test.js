import MovieList from '../module/movieList.js';
import Movie from '../module/movie.js';

describe('Testing movieList.getMoiveCount method', () => {
  it('movieList.getMoiveCount must give exact number of movies (3)', () => {
    // arrange
    const movieList = new MovieList();
    // act
    movieList.push(new Movie('1', 'name', 'type', 'lang', 'genres', 'rating', 'img', 'sumarry', 'like'));
    movieList.push(new Movie('2', 'name', 'type', 'lang', 'genres', 'rating', 'img', 'sumarry', 'like'));
    movieList.push(new Movie('3', 'name', 'type', 'lang', 'genres', 'rating', 'img', 'sumarry', 'like'));

    const result = movieList.getMoiveCount();

    // assert
    expect(result).toStrictEqual(3);
  });

  it('movieList.getMoiveCount must give 0 for empty movies', () => {
    // arrange
    const movieList = new MovieList();
    // act

    const result = movieList.getMoiveCount();

    // assert
    expect(result).toStrictEqual(0);
  });
});
