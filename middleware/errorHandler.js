function errorHandler(err, req, res, next) {
  if (err.response && err.response.data && err.response.data.error) {
    // Handle OpenAI API errors
    const error = err.response.data.error;

    let message;
    if (error.type === "parameter_error") {
      message =
        "Invalid request parameters. Please check your request and try again.";
    } else if (error.type === "server_error") {
      message =
        "The OpenAI API is currently experiencing technical difficulties. Please try again later.";
    } else {
      message =
        "An error occurred while processing your request. Please try again later.";
    }

    res.status(error.code).json({ success: false, message: message });
  } else {
    // Handle other errors
    console.error(err);
    res
      .status(500)
      .json({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      });
  }
}

export default errorHandler;
