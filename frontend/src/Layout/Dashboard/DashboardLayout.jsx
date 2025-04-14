import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const isAdmin = true;

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-start justify-start my-8 mx-6">
                    {/* Page content here */}
                    
                    <Outlet />

                    
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mt-4">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side shadow-xl">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 space-y-2">
                        {/* Sidebar content here */}
                        {
                            isAdmin ? (
                                <>
                                     <li className='font-semibold'><NavLink to="/dashboard/admin-home"><FaHome></FaHome>Admin Home</NavLink></li>
                                    <li className="font-semibold"><NavLink to="/dashboard/add-flight"><FaCalendarAlt /> Add Flight</NavLink></li>
                                    <li className="font-semibold"><NavLink to="/dashboard/all-booking"><FaShoppingCart /> All Booking List</NavLink></li>
                                    <li className="font-semibold"><NavLink to='/dashboard/all-user'><FaHome /> All Users</NavLink></li>
                                </>
                            ) : (
                                <>
                                    <li className="font-semibold"><NavLink to='/dashboard/user-home'><FaHome /> User Home</NavLink></li>
                                    <li className="font-semibold"><NavLink to='/dashboard/payment'><FaWallet /> Payment History</NavLink></li>
                                    <li className="font-semibold"><NavLink to='/dashboard/my-booking'><FaWallet /> My Booking</NavLink></li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
