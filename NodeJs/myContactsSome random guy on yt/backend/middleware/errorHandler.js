const { constants } = require("../constants");
const errorhandler = (error, request, response, next) => {
  const statusCode = response.statusCode ? response.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      response.json({
        title: "Validation failed",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case constants.NOT_FOUND:
      response.json({
        title: "Not Found",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      response.json({
        title: "Unauthorized",
        message: error.message,
        stackTrace: error.stack,
      });
      break;

    case constants.FORBIDDEN:
      response.json({
        title: "Forbidden",
        message: error.message,
        stackTrace: error.stack,
      });
      break;

    case constants.SERVER_ERROR:
      response.json({
        title: "Server error",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    default:
      console.log("no Error, all good");
      break;
  }
};

module.exports = errorhandler;
