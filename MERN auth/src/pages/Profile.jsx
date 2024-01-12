import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.profilePicture}
          alt="profile"
          className="h-24 w-24 self-center cursor-pointer rounded-full object-cover"
        />
        <input
          defaultValue={currentUser.username}
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 rounded-lg p-3 outline-none"
        />
        <input
          defaultValue={currentUser.email}
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 rounded-lg p-3 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 rounded-lg p-3 outline-none"
        />
        <button className="bg-slate-700 font-bold text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-70">Update</button>
      </form>
      <div className="flex justify-between mt-4 font-bold">
        <div className="text-white justify-center py-2 px-4 bg-red-700 rounded-lg cursor-pointer hover:opacity-95 transition">Delete account</div>
        <div className="text-white justify-center py-2 px-4 bg-red-700 rounded-lg hover:opacity-90 cursor-pointer transition">Sign out</div>
      </div>
    </div>
  );
}
