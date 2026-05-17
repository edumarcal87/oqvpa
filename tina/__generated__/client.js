import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: "http://localhost:4001/graphql", token: "84c81f186c7da56182c6b027e7f5df495c32093f", queries });
export default client;
