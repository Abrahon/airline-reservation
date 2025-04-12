import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {

    const{createUser, updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const email = form.email.value;
        const newPassword = form.newPassword.value;
        const confirmPassword = form.confirmPassword.value;
        const newValue = {name,email,newPassword,confirmPassword}
        if(newPassword === confirmPassword){
            // alert("Passowrd is correct!!")
            console.log(newValue);
            createUser(email,newPassword)
            .then(result=>{
                const user = result.user;
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "account created successfully !!",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')
                console.log(user)
    
                updateUserProfile(name)
            })
            
            .catch(error => console.log(error))
        }
        else{
            alert("Enter the correct password")
        }

    }
    return (
        <div>
            <div className="max-w-md mx-auto shadow-2xl p-4 my-10 rounded-md">
                <div className="flex justify-between py-4">
                <Link to='/signup'><button className="text-2xl text-blue-600 hover:text-blue-800 font-bold text-center">Sign Up</button></Link>
                <Link to='/login'><button className="text-2xl text-blue-600 hover:text-blue-8 font-bold text-center">Sign In</button></Link>
                </div>
                <form onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input type="text" id="name" name="name" className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" id="password" name="newPassword" className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirmPassword" className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>
                    <div className="flex items-center justify-between">
                        <input className="bg-blue-700 hover:bg-blue-900 cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" value="Signup" type="Submit"/>
                    </div>
                    <div className="text-center ">
                        <h1 className="text-xl">OR</h1>
                    <button className="text-4xl mt-3 "> <FaGoogle></FaGoogle> </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SignUp;