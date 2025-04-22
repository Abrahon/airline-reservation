
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {

    const{createUser,updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSignUp = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const newPassword = form.newPassword.value;
        const confirmPassword = form.confirmPassword.value;
      
        if (newPassword !== confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
      
        try {
          // 1. Create user in Firebase
          const result = await createUser(email, newPassword);
          const user = result.user;
      
          // 2. Update displayName in Firebase
          await updateUserProfile(name);
      
          // 3. Prepare data to save in MongoDB
          const userData = {
            email: user.email,
            displayName: name, // explicitly passing displayName
            password: newPassword // (never store plain text password in production)
          };
      
          // 4. Send user to backend MongoDB
          const res = await fetch("https://wingbooker.vercel.app/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
          });
      
          const resultData = await res.json();
      
          if (resultData.message === 'user already exists') {
            alert("User already exists!");
          } else {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Account created successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
      
          console.log("Server response:", resultData);
        } catch (error) {
          console.error("Error signing up:", error);
          alert("Something went wrong. Try again.");
        }
      };
      

    return (
        <div>
            <div className="max-w-md mx-auto shadow-2xl p-4 my-10 rounded-md">
                <div className="flex justify-between py-4">
                {/* <Link to='/signup'><button className="text-2xl text-blue-600 hover:text-blue-800 font-bold text-center">Sign Up</button></Link> */}
                {/* <Link to='/login'><button className="text-2xl text-blue-600 hover:text-blue-8 font-bold text-center">Sign In</button></Link> */}
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
                    <div className="mt-2">
                        <span className="text-sm ml-2 hover:text-green-500 cursor-pointer">Already you have a WingBooker?</span>
                        <span className='text-orange-400 font-semibold bg-transparent hover:text-amber-400 hover:font-bold'>
                            <Link to="/login"> Log In</Link>
                        </span>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SignUp;