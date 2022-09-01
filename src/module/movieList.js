class MovieList {
  constructor(list = []) {
    this.list = list;
  }

  push(movie) {
    this.list.push(movie);
  }

  getMoiveCount() {
    return this.list.length;
  }
}

export default MovieList;
