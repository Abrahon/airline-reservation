
import { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthProvider";
import { FcGoogle } from 'react-icons/fc'
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    // const[signinError, setSigninError] = useState('');
    const navigate = useNavigate();

    // const{signIn} = useContext(AuthContext)
    const{signIn,signInGoogle} = useContext(AuthContext)
    
    const handleSignIn = e =>{
        console.log(e)
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const loginData = {email,password}
        console.log(email,password);

        signIn(email,password)
        .then(result=>{
            const user= result.user;
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "user signin successfully !!",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/');
            console.log(user)
            // show the user name
            
        })
        .catch(error=>console.log(error))
        // setSigninError(error.message)
       
    }
    const googleProvider = new GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        signInGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                let userInfo = { displayName: user?.displayName, email: user?.email, uid: user?.uid, photoUrl: user?.photoURL };
                saveUser(userInfo);
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div>
        <div className="max-w-md mx-auto my-10 shadow-2xl p-4 rounded-md">
            <div className="flex justify-between py-4">
            <Link to='/signup'><button className="text-2xl text-blue-600 hover:text-blue-800 font-bold text-center">Sign Up</button></Link>
            <Link to='/login'><button className="text-2xl text-blue-600 hover:text-blue-8 font-bold text-center">Sign In</button></Link>
            </div>
            <form onSubmit={handleSignIn}>
             
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input type="password" id="password" name="password" className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                
                <div className="flex items-center justify-between">
                    <input className='bg-blue-700 hover:bg-blue-900 cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full' value="Signin" type="submit" />
                </div>

                <div className='mt-4'>
                        Don't have an account? <Link to='/signup'><span className='text-orange-400 font-semibold hover:text-amber-400  hover:font-bold'>Sign up</span></Link>
                    </div>
                    <div className="divider text-center">OR</div>

                  
                    <div className="flex justify-center items-center mt-6">
                   <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    className="transform transition-transform duration-300 hover:scale-110" >
                    <FcGoogle className="text-5xl animate-bounce" />
                    </button>
                </div>
                    
            </form>

        </div>
    </div>
    );
};

export default Login;