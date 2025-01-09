import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <div className='flex items-center justify-center min-h-screen min-w-full bg-gradient-to-r from-black to-gray-800'>
    <form className='bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col gap-4'>
      <label htmlFor="email" className='text-white text-lg font-semibold'>Email:</label>
      <input id="email" name="email" type="email" required className='p-3 rounded-md border border-gray-600 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500' />
      <label htmlFor="password" className='text-white text-lg font-semibold'>Password:</label>
      <input id="password" name="password" type="password" required className='p-3 rounded-md border border-gray-600 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500' />
      <button formAction={login} className="mt-4 p-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300">Log in</button>
      <button formAction={signup} className="mt-2 p-3 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 transition duration-300">Sign up</button>
    </form>
    </div>
  )
}