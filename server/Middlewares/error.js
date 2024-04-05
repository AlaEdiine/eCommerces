
// Not Found Middleware

// const notFound = ((req, res, next) => {
//   const error = new Error(`not found - ${req.originalUrl}`)
//   res.status(400)
//   next(error) 
// });


// Error Handler Middleware

const errorHandler = ((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong";
  return res.status(errorStatus).json({
    succes: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

module.exports = { errorHandler  }