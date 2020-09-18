import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

let app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4001);

console.log("Running a GraphQL API server at http://localhost:4001/graphql");
