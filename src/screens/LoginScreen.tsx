import { Link } from 'react-router-dom'
import { loginUser } from "../redux/features/authSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AppDispatch } from '../redux/store';
import ActionButton from "../partials/ActionButton";
import { useState } from "react";
import swal from 'sweetalert';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const LoginScreen = () => {
    const dispatch: AppDispatch = useDispatch();
    const { signinSuccess, signinError, signinLoading } = useSelector((state: any) => state.auth);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const userData = { email, password };
            await dispatch(loginUser({ userData }));
        } catch (error) {
            swal('Error!', 'Wrong email or password', 'error');
            console.error(error);
        }
    };




    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
            <div className="w-full flex flex-col justify-center items-center p-8 bg-white">
                <Link to="/">
                    <h1 className="text-6xl font-bold text-green-400 mb-2">Doofy</h1>
                </Link>
                <p className="mb-4">Səni yenidən görməyə məmnunuq!</p>
                <form className="w-full max-w-md" onSubmit={handleLogin}>
                    <div className="mb-4">
                    <label className="mb-2 block font-medium text-black opacity-[0.6]">
                    E-poçt
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Write your email"
                                className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                            />

                            <span className="absolute right-4 top-4">
                                <svg
                                    className="fill-current"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g opacity="0.5">
                                        <path
                                            d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                                            fill=""
                                        />
                                    </g>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="mb-6">
                    <label className="mb-2 block font-medium text-black opacity-[0.6]">
                    Parol
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Write your password"
                                className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                            />

                            <div
                                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                                ) : (
                                    <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <ActionButton
                            content="Daxil ol"
                            success={signinSuccess}
                            loading={signinLoading}
                            error={signinError}
                            path={`/`}
                            message="Uğurlu giriş"
                        />
                        <Link to="/auth/register" className="text-center pt-2 inline-block align-baseline text-sm text-gray-500 hover:text-green-800">
                            Already don't have an account? Register
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen