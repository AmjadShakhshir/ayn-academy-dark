const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404); // 404 = not found
    next(error);
}

const errorHandler = (err, req, res, next) => {
    // 500 = server error
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    const message = err.message;

    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        res.status(400).json({ message: 'Resource not found' });
    } else if (err.name === 'ValidationError') {
        res.status(400).json({ message: 'Invalid request' });
    } else {
        res.status(statusCode);
    }

    res.status(statusCode).json({
        message: err.message,
        // only show stack trace if not in production
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
}

export { notFound, errorHandler };