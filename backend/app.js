const http = require('http');

const server = http.createServer((req, res) => {
  res.end("🚀 Backend API is running on Kubernetes");
});

server.listen(3000, () => {
  console.log("Backend running on port 3000");
});
