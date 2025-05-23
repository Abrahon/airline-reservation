import React, { useContext } from 'react'
// import { FaRegUser } from 'react-icons/fa';
import { Player } from '@lottiefiles/react-lottie-player';
import { AuthContext } from '../../../context/AuthProvider';

const AdminHome = () => {
    const { user } = useContext(AuthContext);
  return (
    <div>
        <h1 className='text-4xl font-semibold text-green-500'>Welcome to The Admin Home</h1>
        <div>
            <h2 className="text-2xl text-center">Welcome</h2>
            <h1 className="mt-5 text-center mx-auto py-3 font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-600">{user?.displayName}</h1>
            <div className='my-10'>
                <Player
                    src='https://assets2.lottiefiles.com/packages/lf20_jrpzvtqz.json'
                    className="player rounded-lg"
                    loop
                    autoplay
                    speed={1}
                />
            </div>

        </div>
    </div>
  )
}
export default AdminHome