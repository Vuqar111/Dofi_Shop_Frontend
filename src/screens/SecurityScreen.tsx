import { updateProfilePassword } from '../redux/features/profileSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import swal from 'sweetalert'
import { AppDispatch } from '../redux/store'
import ActionButton from "../partials/ActionButton"
import BreadCrumb from "../components/BreadCrumb";
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';


const SecurityScreen = () => {
  const location = useLocation();
  const dispatch: AppDispatch = useDispatch()
  const { t } = useTranslation();
  const { updateProfilePasswordSuccess, updateProfilePasswordLoading, updateProfilePasswordError } = useSelector((state: any) => state.profile)
  const currentLang = location.pathname.split('/')[1] || 'az';

  const [current_password, setCurrentPassword] = useState<string | undefined>('')
  const [new_password, setNewPassword] = useState<string | undefined>('')
  const [confirm_password, setConfirmPassword] = useState<string | undefined>('')

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);






  const breadcrumbPaths = [
    { name: t('breadcrumb_home'), href: '/' },
    { name: t('breadcrumb_profile'), href: '/profile' },
    { name: t('breadcrumb_security'), href: '/profile/security' },
  ];




  const handleUpdateProfilePassword = async (e: React.FormEvent) => {
    e.preventDefault()

    if (new_password !== confirm_password) {
      swal(t('modal_error_message_title'), t('modal_error_message_description'), 'error')
      return
    }

    try {
      const updatedProfilePassword = {
        current_password,
        new_password,
      }
      await dispatch(updateProfilePassword({ updatedProfilePassword }))
    } catch (error) {
      swal('Error!', 'Wrong password', 'error')
      console.error(error)
    }
  }




  return (
    <div className='w-[100%] '>
      <BreadCrumb paths={breadcrumbPaths} />
      <h2 className='pb-4 text-2xl'>{t('profile_security_page_title')}</h2>
      <form className='' onSubmit={handleUpdateProfilePassword}>
        <div className='grid grid-cols-1 gap-4'>



          <label className="block font-medium text-black opacity-[0.6]">
            {t('profile_security_form_label1')}
          </label>
          <div className="mb-4 relative">
            <input
              className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
              id="current_password"
              onChange={(e) => setCurrentPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              placeholder={t('profile_security_form_placeholder1')}

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

          <label className="block font-medium text-black opacity-[0.6]">
            {t('profile_security_form_label2')}

          </label>
          <div className="mb-4 relative">
            <input
              className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
              id="new_password"
              onChange={(e) => setNewPassword(e.target.value)}
              type={showNewPassword ? 'text' : 'password'}
              placeholder={t('profile_security_form_placeholder2')}
            />
            <div
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? (
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
          <label className="block font-medium text-black opacity-[0.6]">
            {t('profile_security_form_label3')}
          </label>
          <div className="mb-4 relative">
            <input
              className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
              id="current_password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              type={showConfirmedPassword ? 'text' : 'password'}
              placeholder={t('profile_security_form_placeholder3')}
            />
            <div
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowConfirmedPassword(!showConfirmedPassword)}
            >
              {showConfirmedPassword ? (
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
        <ActionButton
          content={t('profile_security_form_button')}
          success={updateProfilePasswordSuccess}
          loading={updateProfilePasswordLoading}
          error={updateProfilePasswordError}
          path={`${currentLang}/auth/login`}
          message={t('profile_security_modal_desc')}
        />
      </form>
    </div>
  )
}

export default SecurityScreen