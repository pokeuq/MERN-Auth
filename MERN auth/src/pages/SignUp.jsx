import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(false);
      setLoading(true);
      console.log(formData);
      console.log(JSON.stringify(formData));

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);

      navigate('/sign-in')
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="p-3 max-w-lg m-auto ">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg outline-none"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg outline-none"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg outline-none"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-70"
        >
          {loading ? "Loading.." : "Sign Up"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-3 font-semibold justify-center">
        <p>Already have an account?</p>
        <Link to="/sign-in">
          <span className="font-bold text-blue-400 hover:text-blue-500 transition">Im logged in!</span>
        </Link>
      </div>
      {error && (
        <p className="flex text-red-700 font-bold mt-3 justify-center">
          Something went wrong :c
        </p>
      )}
    </div>
  );
}
