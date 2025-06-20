import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from "../context/AuthProvider";


const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [authUser, setAuthUser] = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios.post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Signup Successfully");
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          setAuthUser(res.data.user);
          setTimeout(() => {
          navigate(from, { replace: true });
        }, 100); // 100ms is usually enough

          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className="w-[600px] relative border p-5 rounded-md shadow-md bg-white dark:bg-slate-800 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close Button */}
            <Link
              to='/'
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Signup</h3>

            {/* Name Field */}
            <div className="mt-4">
              <label className="block mb-1 text-black dark:text-white">Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                {...register("fullname", { required: "Full name is required" })}
              />
              {errors.fullname && (
                <p className="text-sm text-red-500 mt-1">{errors.fullname.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="mt-4">
              <label className="block mb-1 text-black dark:text-white">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="mt-4">
              <label className="block mb-1 text-black dark:text-white">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Buttons */}
            <div className='flex justify-between mt-6 items-center'>
              <button
                type="submit"
                className='bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200'>
                Signup
              </button>

              <div className="text-sm">
                Have an account?{" "}
                <button
                  type="button"
                  className='underline text-blue-500 dark:text-blue-300'
                  onClick={() => {
                    const loginModal = document.getElementById('my_modal_3');
                    if (loginModal) loginModal.showModal();
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Modal must exist in DOM */}
      <Login />
    </>
  );
};

export default Signup;
