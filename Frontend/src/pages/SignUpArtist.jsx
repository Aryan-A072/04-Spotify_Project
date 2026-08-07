import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const SignUp = () => {
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const userData = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      role: "artist"
    };

    try{
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        userData
      )

      alert(response.data.message)
      navigate("/")

    } catch(err) {
        console.log(err)
        alert(err.resposne?.data?.message || "Registeration failed")
        navigate("/error")
    }
  }
  const navigate = useNavigate()
  return (
    <div className='w-screen h-screen overflow-auto bg-black text-white flex flex-col items-center'>
      <div className='flex flex-col items-center justify-center mt-30 mb-10'>
        <img
          className='w-16 object-cover'
          src='https://i.pinimg.com/736x/4b/48/2c/4b482c8cdaa66254150a0e692b263ea6.jpg' 
          alt='spotify logo' />
        <h1 className='text-5xl font-bold text-center'>Sign up to <br/> create music</h1>
      </div>

      <form 
      onSubmit={handleSubmit}
      className='w-85 flex flex-col justify-start bg-white/5 p-5 gap-2 rounded-2xl'>
        <p className='text-md font-bold pb-2'>Email</p>
        <input
        type='text'
        name='username'
        className='border border-white/50 active:border-white rounded py-3 px-2'
        placeholder='Enter a username'
        required
        />
        <input
        type='text'
        name='email'
        className='border border-white/50 active:border-white rounded py-3 px-2'
        placeholder='name@domain.com'
        required
        />
        <input
        type='password'
        name='password'
        className='border border-white/50 active:border-white rounded py-3 px-2'
        placeholder='Enter a password'
        required
        />
        <button
        type='submit'
        className='px-1 py-3 rounded-full bg-green-500 text-black font-bold text-lg mt-5'>
          Continue
        </button>
        <p className='my-5 text-center'>or</p>
        <p className='my-5 text-white/70 text-center'>Already have an account?</p>
        <button
        onClick={ () => navigate("/login")}
        className='font-bold'
        >Log in</button>
      </form>
      <p className='mb-5 mt-20 text-white/70 text-center'>@spotify project 2026</p>
    </div>
  )
}

export default SignUp