import { server } from "./server/Server";

const port = Number(process.env.PORT) || 3333;

server.listen(port, () => {
  console.log(`Prime Estate API listening on http://localhost:${port}`);
});
