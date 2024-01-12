import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function SignIn() {
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

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);
      
      navigate('/')
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="p-3 max-w-lg m-auto ">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
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
          {loading ? "Loading.." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-3 font-semibold justify-center">
        <p>Dont have an account?</p>
        <Link to="/sign-up">
          <span className="font-bold text-blue-400 hover:text-blue-500 transition">Create!</span>
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
