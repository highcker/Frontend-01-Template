const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request received");
  console.log(req.headers);
  res.setHeader("Content-Type", "text/html");
  res.setHeader("X-Foo", "bar");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`
    <html>
      <head>
        <style>
          .container {
            width: 600px;
            height: 600px;
            background-color: rgb(255,255,255);
          }
        </style>
      </head>
      <body>
        <div class="container"></div>
      </body>  
    </html>
  `);
});

server.listen(8088, (req, res) => {
  console.log("server  listend at 8088");
});
