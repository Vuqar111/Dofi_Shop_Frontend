import { Link } from 'react-router-dom'
import { registerUser } from "../redux/features/authSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AppDispatch } from '../redux/store';
import ActionButton from "../partials/ActionButton";
import { useState } from "react";
import swal from 'sweetalert';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const RegisterScreen = () => {
    const dispatch: AppDispatch = useDispatch();
    const { registerSuccess, registerError, registerLoading } = useSelector((state: any) => state.auth);

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [customer_type, setCustomerType] = useState('Individual');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const userData = { email, password, customer_type, fullName };
            await dispatch(registerUser({ userData }));
        } catch (error) {
            swal('Error!', 'Wrong email or password', 'error');
            console.error(error);
        }
    };


    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center h-screen p-4 md:p-8 bg-white">
                <Link to="/">
                    <h1 className="text-6xl font-bold text-green-400 mb-2">Doofy</h1>
                </Link>
                <p className="mb-4">Create your account</p>
                <form className="w-full max-w-md" onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="mb-2 block font-medium text-black opacity-[0.6]">
                            Full Name
                        </label>
                        <input
                            className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                            id="fullname"
                            onChange={(e) => setFullName(e.target.value)}
                            type="text"
                            placeholder="Write full name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="mb-2 block font-medium text-black opacity-[0.6]">
                            Email
                        </label>
                        <input
                            className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Write email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="mb-2 block font-medium text-black opacity-[0.6]">
                            Password
                        </label>
                        <input
                            className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex flex-col">
                        <ActionButton
                            content="Qeydiyyat ol"
                            success={registerSuccess}
                            loading={registerLoading}
                            error={registerError}
                            path={`/`}
                            message="Uğurlu qeydiyyat"
                        />
                        <Link to="/auth/login" className="text-center pt-2 inline-block align-baseline text-sm text-gray-500 hover:text-green-800">
                            Already have an account? Login
                        </Link>
                    </div>
                </form>
            </div>
            <div className="hidden md:block md:w-1/2 relative">
                <img
                    src="https://images.pexels.com/photos/2026960/pexels-photo-2026960.jpeg?auto=compress&cs=tinysrgb&w=1920"
                    alt="Register Wallpaper"
                    className="absolute inset-0 w-full h-full object-cover"
                />

            </div>
        </div>
    )
}

export default RegisterScreen