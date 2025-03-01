import { Link } from 'react-router-dom'
import { registerUser } from "../redux/features/authSlice";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import ActionButton from "../partials/ActionButton";
import { useState } from "react";
import swal from 'sweetalert';

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
                <p className="mb-4">Hesabınızı indicə bir kliklə yaradın</p>
                <form className="w-full max-w-md" onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="mb-2 block font-medium text-black opacity-[0.6]">
                            Ad və soyad
                        </label>
                        <input
                            className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                            id="fullname"
                            onChange={(e) => setFullName(e.target.value)}
                            type="text"
                            placeholder="Adınızı və soyadınızı yazın"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="mb-2 block font-medium text-black opacity-[0.6]">
                            E-poçt
                        </label>
                        <input
                            className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="E-poçtunuzu yazın"
                        />
                    </div>
                    <label className="mb-2 block font-medium text-black opacity-[0.6]">
                        Parol
                    </label>
                    <div className="mb-6 relative">

                        <input
                            className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Parol yazın"
                        />
                        <div
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            ) : (

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            )}
                        </div>
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
                        <span className="text-center pt-2 inline-block align-baseline text-sm text-gray-500 hover:text-green-800">
                            Artıq hesabınız var? <Link to="/auth/login" className="text-green-500">Daxil olun</Link>
                        </span>
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