import { createServer } from "http";
import next from 'next';
import { parse } from "url";

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV != 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  });
  server.listen(port, () => {
    console.log(`start server : http://localhost:${port}`);
  });
});
