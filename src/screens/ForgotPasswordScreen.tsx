import { Link } from 'react-router-dom'
import { forgotPassword } from "../redux/features/authSlice";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import ActionButton from "../partials/SecondaryActionButton";
import { useState, useEffect } from "react";
import swal from 'sweetalert';

const ForgotPasswordScreen = () => {
    const dispatch: AppDispatch = useDispatch();
    const { forgotPasswordSuccess, forgotPasswordError, forgotPasswordLoading } = useSelector((state: any) => state.auth);

    const [email, setEmail] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const handleForgotPassword = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const userData = { email };
            await dispatch(forgotPassword({ userData }));
        } catch (error) {
            console.error(error);
            swal('Error!', 'Something went wrong. Please try again later.', 'error');
        }
    };

    useEffect(() => {
        if (forgotPasswordSuccess) {
            setEmailSent(true);
        }
        if (forgotPasswordError) {
            setEmailSent(false);
        }
    }, [forgotPasswordSuccess, forgotPasswordError]);

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="w-full flex flex-col justify-center items-center h-screen p-4 md:p-8 bg-white">
                <Link to="/">
                    <h1 className="text-6xl font-bold text-green-400 mb-2">Doofy</h1>
                </Link>

                {!emailSent ? (
                    <form className="w-full max-w-md" onSubmit={handleForgotPassword}>
                        <p className="mb-4 text-center">Parolunu yenilə!</p>
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

                        <div className="flex flex-col">
                            <ActionButton
                                content="Parolu yenilə"
                                success={forgotPasswordSuccess}
                                loading={forgotPasswordLoading}
                                error={forgotPasswordError}
                                message="Emailinizi yoxlayın"
                            />
                            <span className="text-center pt-2 inline-block align-baseline text-sm text-gray-500 hover:text-green-800">
                                Hesabınız var? <Link to="/auth/login" className="text-green-500">Daxil ol</Link>
                            </span>
                        </div>
                    </form>
                ) : (
                    <div className="w-full flex flex-col items-center justify-center max-w-md text-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#05DF72" className="size-40">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <p className="mb-4 opacity-[0.7]">Parolunuzu sıfırlamaq üçün e-poçtunuza baxın.</p>
                        <Link to="/" className="cursor-pointer bg-green-400 text-white text-center px-8 py-3 inline-block align-baseline text-sm text-gray-500 hover:text-green-800">
                           Ana səhifəyə geri dön
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ForgotPasswordScreen;
