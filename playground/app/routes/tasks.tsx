import { Link } from "@remix-run/react";

export default function Tasks () {
  return (
    <div>
      Tasks

      <Link to={'/indigo'}>Home</Link>
    </div>
  )
}