import { Link, useLocation } from 'react-router-dom'
import { loginUser } from "../redux/features/authSlice";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import ActionButton from "../partials/ActionButton";
import { useState } from "react";
import swal from 'sweetalert';

const LoginScreen = () => {
    const dispatch: AppDispatch = useDispatch();
    const { signinSuccess, signinError, signinLoading } = useSelector((state: any) => state.auth);
    const location = useLocation()


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const userData = { email, password };
            await dispatch(loginUser({ userData }));
        } catch (error) {
            console.error(error);
        }
    };




    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="w-full flex flex-col justify-center items-center h-screen p-4 md:p-8 bg-white">
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
                                placeholder="E-poçtunuzu yazın"
                                className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                            />

                            <span className="absolute right-4 top-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
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
                                placeholder="Parolunuzu yazın"
                                className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
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
                    </div>

                    <div className="flex flex-col">
                        <ActionButton
                            content="Daxil ol"
                            success={signinSuccess}
                            loading={signinLoading}
                            error={signinError}
                            path={location.search.includes('checkout') ? '/checkout' : '/'}
                            message="Uğurlu giriş"
                        />
                        <span className="text-center pt-2 inline-block align-baseline text-sm text-gray-500 hover:text-green-800">
                            Hesabınız yoxdur? <Link to="/auth/register" className="text-green-500">Qeydiyyatdan keçin</Link>
                        </span>
                        <span className="text-center pt-2 inline-block align-baseline text-sm text-gray-500 hover:text-green-800">
                            <Link to="/auth/forgot-password" className="text-red-500">Parolunu unutmusan?</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen