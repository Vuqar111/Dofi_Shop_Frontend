import { Link, useLocation } from 'react-router-dom'
import { registerUser } from "../redux/features/authSlice";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import ActionButton from "../partials/ActionButton";
import { useState, useEffect } from "react";
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';

interface ValidationErrors {
    fullName?: string;
    email?: string;
    password?: string;
    general?: string;
}

const RegisterScreen = () => {
    const dispatch: AppDispatch = useDispatch();
    const { registerSuccess, registerError, registerLoading } = useSelector((state: any) => state.auth);

    const location = useLocation()
    const currentLang = location.pathname.split('/')[1] || 'en';

    const { t } = useTranslation();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [customer_type, setCustomerType] = useState('Individual');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<ValidationErrors>({});
    const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

    // Validation functions
    const validateFullName = (name: string): string | undefined => {
        if (!name.trim()) {
            return 'Full name is required';
        }
        if (name.trim().length < 2) {
            return 'Full name must be at least 2 characters long';
        }
        if (name.trim().length > 50) {
            return 'Full name must be less than 50 characters';
        }
        if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) {
            return 'Full name can only contain letters, spaces, hyphens, and apostrophes';
        }
        return undefined;
    };

    const validateEmail = (email: string): string | undefined => {
        if (!email.trim()) {
            return 'Email is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            return 'Please enter a valid email address';
        }
        if (email.length > 254) {
            return 'Email address is too long';
        }
        return undefined;
    };

    const validatePassword = (password: string): string | undefined => {
        if (!password) {
            return 'Password is required';
        }
        if (password.length < 8) {
            return 'Password must be at least 8 characters long';
        }
        if (password.length > 128) {
            return 'Password must be less than 128 characters';
        }
        if (!/(?=.*[a-z])/.test(password)) {
            return 'Password must contain at least one lowercase letter';
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            return 'Password must contain at least one uppercase letter';
        }
        if (!/(?=.*\d)/.test(password)) {
            return 'Password must contain at least one number';
        }
        if (!/(?=.*[@$!%*?&])/.test(password)) {
            return 'Password must contain at least one special character (@$!%*?&)';
        }
        return undefined;
    };

    // Real-time validation
    useEffect(() => {
        const newErrors: ValidationErrors = {};

        if (touched.fullName) {
            const fullNameError = validateFullName(fullName);
            if (fullNameError) newErrors.fullName = fullNameError;
        }

        if (touched.email) {
            const emailError = validateEmail(email);
            if (emailError) newErrors.email = emailError;
        }

        if (touched.password) {
            const passwordError = validatePassword(password);
            if (passwordError) newErrors.password = passwordError;
        }

        setErrors(newErrors);
    }, [fullName, email, password, touched]);

    // Handle field blur (when user leaves the field)
    const handleBlur = (field: string) => {
        setTouched(prev => ({ ...prev, [field]: true }));
    };

    // Validate entire form
    const validateForm = (): boolean => {
        const newErrors: ValidationErrors = {};

        const fullNameError = validateFullName(fullName);
        if (fullNameError) newErrors.fullName = fullNameError;

        const emailError = validateEmail(email);
        if (emailError) newErrors.email = emailError;

        const passwordError = validatePassword(password);
        if (passwordError) newErrors.password = passwordError;

        setErrors(newErrors);
        setTouched({ fullName: true, email: true, password: true });

        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form before submission
        if (!validateForm()) {
            swal('Validation Error!', 'Please fix the errors before submitting', 'error');
            return;
        }

        try {
            const userData = {
                email: email.trim(),
                password,
                customer_type,
                fullName: fullName.trim()
            };
            await dispatch(registerUser({ userData }));
        } catch (error) {
            swal('Error!', 'Registration failed. Please try again.', 'error');
            console.error(error);
        }
    };

    // Helper function to determine input class based on validation state
    const getInputClass = (fieldName: string) => {
        const baseClass = "w-full rounded-sm placeholder:text-sm border bg-transparent py-3 pl-2 pr-10 outline-none focus-visible:shadow-none";
        if (errors[fieldName as keyof ValidationErrors]) {
            return `${baseClass} border-red-500 focus:border-red-500`;
        }
        if (touched[fieldName] && !errors[fieldName as keyof ValidationErrors]) {
            return `${baseClass} border-green-500 focus:border-green-500`;
        }
        return `${baseClass} border-gray-200 focus:border-primary`;
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center h-screen p-4 md:p-8 bg-white">
                <Link to="/">
                    <h1 className="text-6xl font-bold text-green-400 mb-2">Dofi</h1>
                </Link>
                <p className="mb-4">
                    {t('register_page_title')}
                </p>
                <form className="w-full max-w-md" onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="mb-2 block font-medium text-black opacity-[0.6]">
                            {t('register_page_label1')} *
                        </label>
                        <input
                            className={getInputClass('fullName')}
                            id="fullname"
                            onChange={(e) => setFullName(e.target.value)}
                            onBlur={() => handleBlur('fullName')}
                            type="text"
                            placeholder={t('register_page_input1')}
                            value={fullName}
                            aria-describedby={errors.fullName ? 'fullname-error' : undefined}
                            aria-invalid={!!errors.fullName}
                        />
                        {errors.fullName && (
                            <p id="fullname-error" className="mt-1 text-sm text-red-600">
                                {errors.fullName}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="mb-2 block font-medium text-black opacity-[0.6]">
                            {t('register_page_label2')} *
                        </label>
                        <input
                            className={getInputClass('email')}
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={() => handleBlur('email')}
                            type="email"
                            placeholder={t('register_page_input2')}
                            value={email}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                            aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                            <p id="email-error" className="mt-1 text-sm text-red-600">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <label className="mb-2 block font-medium text-black opacity-[0.6]">
                        {t('register_page_label3')} *
                    </label>
                    <div className="mb-6 relative">
                        <input
                            className={getInputClass('password')}
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={() => handleBlur('password')}
                            placeholder={t('register_page_input3')}
                            value={password}
                            aria-describedby={errors.password ? 'password-error' : undefined}
                            aria-invalid={!!errors.password}
                        />
                        <div
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                            role="button"
                            tabIndex={0}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    setShowPassword(!showPassword);
                                }
                            }}
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
                    {errors.password && (
                        <p id="password-error" className="mt-1 text-sm text-red-600">
                            {errors.password}
                        </p>
                    )}
                    {/* Password strength indicator */}
                    {password && !errors.password && (
                        <div className="mt-2">
                            <div className="flex space-x-1">
                                <div className={`h-1 flex-1 rounded ${password.length >= 8 ? 'bg-green-400' : 'bg-gray-300'}`}></div>
                                <div className={`h-1 flex-1 rounded ${/(?=.*[a-z])(?=.*[A-Z])/.test(password) ? 'bg-green-400' : 'bg-gray-300'}`}></div>
                                <div className={`h-1 flex-1 rounded ${/(?=.*\d)/.test(password) ? 'bg-green-400' : 'bg-gray-300'}`}></div>
                                <div className={`h-1 flex-1 rounded ${/(?=.*[@$!%*?&])/.test(password) ? 'bg-green-400' : 'bg-gray-300'}`}></div>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">
                                Strong password contains: 8+ characters, uppercase, lowercase, number, special character
                            </p>
                        </div>
                    )}

                    <div className="flex flex-col">
                        <ActionButton
                            content={t('register_page_button')}
                            success={registerSuccess}
                            loading={registerLoading}
                            error={registerError}
                            path={`/`}
                            message={t('modal_register_message_description')}
                        />
                        <span className="text-center pt-2 inline-block align-baseline text-sm text-gray-500 hover:text-green-800">
                            {t('register_page_footer1')} <Link to={`/${currentLang}/auth/login`} className="text-green-500">{t('register_page_footer2')}</Link>
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