// Локальный просмотр: платформа этот файл не запускает — проект статический.
const http = require("node:http");
http.createServer((_, res) => res.end("dev only")).listen(3000);
