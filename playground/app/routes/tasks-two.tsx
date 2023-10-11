import { json } from "@remix-run/node";
import { json as J } from "@remix-pwa/sw";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = () => {
  console.log("loader in tasks-two route - hmhmm")
  return json({ message: "Hello from the server!" });
}

export const workerLoader = () => {
  console.log("workerLoader in tasks-two route");

  return J({ message: "Hello from the worker!" });
}

export default function Tasks() {
  const { message } = useLoaderData();

  return (
    <div>
      <p>Tasks Double! With a Banger!</p>
      <p>{message}</p>
      <Link to='/indigo'>Back Home</Link>
    </div>
  )
}