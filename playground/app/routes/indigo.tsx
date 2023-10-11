import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = () => {
  return null;
}

export const workerLoader = () => {
  console.log("workerLoader in indigo route");

  return null;
}

export default function Index() {
  return (
    <div>
      <h1 className="block">Welcome to Tasks Page - Unstable</h1>
      <Link to={'/tasks'}>Tasks</Link>
      <Link to={'/tasks-two'}>Tasks Double</Link>
    </div>
  );
}
