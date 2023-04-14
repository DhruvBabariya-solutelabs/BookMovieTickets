import Movie from "../models/Movie.js";
import adminService from "../services/AdminService.js";

const saveMovie = async (req, res, next) => {
  try {
    const { title, releaseDate, castName, directorsName, choreographers } =
      req.body;

    const movie = new Movie({
      title: title,
      releaseDate: releaseDate,
      castName: castName,
      directorsName: directorsName,
      choreographers: choreographers,
    });

    const movieData = adminService.createMovie(movie);

    res.status(201).json({
      message: "Movie create successful",
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const findAllMovie = async (req, res, next) => {
  try {
    const movies = await adminService.findAllMovie();
    if (movies) {
      res.status(200).json({
        movies: movies,
      });
    } else {
      res.status(400).json({
        message: "Data Not Found",
      });
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const updateMovie = async (req, res, next) => {
  try {
    const movieId = req.params.id;
    const { title, releaseDate, castName, directorsName, choreographers } =
      req.body;
    const movie = await adminService.findById(movieId);

    if (!movie) {
      return res.status(404).json({
        message: "Movie Not Found",
      });
    }

    movie.title = title;
    movie.releaseDate = releaseDate;
    movie.castName = castName;
    movie.directorsName = directorsName;
    movie.choreographers = choreographers;

    const movieData = adminService.createMovie(movie);

    res.status(202).json({
      message: "Movie Updated successful",
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const findById = async (req, res, next) => {
  try {
    const movieId = req.params.id;
    const movie = await adminService.findById(movieId);
    if (!movie) {
      return res.status(404).json({
        message: "Movie Not Found",
      });
    } else {
      return res.status(200).json({
        movie: movie,
      });
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const deleteMovie = async (req, res, next) => {
  const movieId = req.params.id;
  try {
    const result = await adminService.deleteById(movieId);
    if (!result) {
      return res.status(404).json({
        message: "Movie Not Found",
      });
    } else {
      return res.status(204).json({
        message: "Movie Deleted Successful",
      });
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
export default { saveMovie, findAllMovie, updateMovie, findById, deleteMovie };
