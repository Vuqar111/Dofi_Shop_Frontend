import { Link } from 'react-router-dom'
import { forgotPassword } from "../redux/features/authSlice";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import ActionButton from "../partials/ActionButton";
import { useState } from "react";
import swal from 'sweetalert';


const ForgotPasswordScreen = () => {
    const dispatch: AppDispatch = useDispatch();
    const { forgotPasswordSuccess, forgotPasswordError, forgotPasswordLoading } = useSelector((state: any) => state.auth);


    const [email, setEmail] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            console.log(email);
            const userData = { email };
            await dispatch(forgotPassword({ userData }));
        } catch (error) {
            swal('Error!', 'Wrong email or password', 'error');
            console.error(error);
        }
    };




    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="w-full flex flex-col justify-center items-center h-screen p-4 md:p-8 bg-white">
                <Link to="/">
                    <h1 className="text-6xl font-bold text-green-400 mb-2">Doofy</h1>
                </Link>
                <p className="mb-4">Parolunu yenilə!</p>
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


                    <div className="flex flex-col">
                        <ActionButton
                            content="Parolu yenilə"
                            success={forgotPasswordSuccess}
                            loading={forgotPasswordLoading}
                            error={forgotPasswordError}
                            path={`/`}
                            message="Emailinizi yoxlayın"
                        />
                        <span className="text-center pt-2 inline-block align-baseline text-sm text-gray-500 hover:text-green-800">
                            Hesabınız var? <Link to="/auth/login" className="text-green-500">Daxil ol</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPasswordScreen