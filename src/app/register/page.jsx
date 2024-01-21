"use client";

import { axios } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignUp = async () => {};
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Sign Up</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input type="text" id="username" value={user.username} onChange={(e)=>setUser({...user, username:e.target.value})} />
    </div>
  );
};

export default Register;
