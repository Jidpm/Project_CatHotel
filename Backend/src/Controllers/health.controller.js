/**
 * Health check endpoint
 * Returns the status of the API server
 */
export const healthCheck = (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
};
