import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-8 bg-white">
      <p className="max-w-screen-xl mx-auto py-8 px-4">
        &copy;2023 All Rights Reserved by &nbsp;
        <Link to="https://nadim.vercel.app" className="text-blue-500">
          Nadim Chowdhury
        </Link>
      </p>
    </footer>
  );
}
