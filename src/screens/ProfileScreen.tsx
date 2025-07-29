import { profileDetails, updateProfile } from '../redux/features/profileSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import swal from 'sweetalert'
import { AppDispatch } from '../redux/store'
import ActionButton from "../partials/ActionButton"
import Loading from '../components/Loader'
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css';

const ProfileScreen = () => {
  const dispatch: AppDispatch = useDispatch()
    const { t } = useTranslation();

  const { profile, loading, error, updateProfileSuccess, updateProfileLoading, updateProfileError } = useSelector((state: any) => state.profile)
  
  const location = useLocation();
  const currentLang = location.pathname.split('/')[1] || 'en';

  const [fullName, setFullName] = useState<string | undefined>(profile?.fullName || undefined)
  const [email, setEmail] = useState<string | undefined>(profile?.email || undefined)
  const [phonePrefix, setPhonePrefix] = useState<string>("050")
  const [phoneDigits, setPhoneDigits] = useState<string>("")
  const [customer_type, setCustomerType] = useState<string | undefined>(profile?.customerType || undefined);


  useEffect(() => {
    dispatch(profileDetails())
  }, [dispatch])


  useEffect(() => {
    if (profile) {
      setFullName(profile.fullName || '')
      setEmail(profile.email || '')

      if (profile.phoneNumber) {
        const prefix = profile.phoneNumber.slice(0, 3) // First 3 characters
        const digits = profile.phoneNumber.slice(4) // Everything after '-'

        if (["050", "055","070", "077"].includes(prefix)) {
            setPhonePrefix(prefix)
            setPhoneDigits(digits)
        }
    }

      setCustomerType(profile.customer_type || '')
    }
  }, [profile])


  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, '') // Remove non-numeric characters
    input = input.slice(0, 7) // Ensure max length is 7 digits

    setPhoneDigits(input) // Store onl 7-digit number
}
  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const updatedProfile = {
        fullName,
        phoneNumber: `${phonePrefix}-${phoneDigits}`,
        customer_type,
        email
      }
      await dispatch(updateProfile({ updatedProfile }))
    } catch (error) {
      swal(t('modal_error_message_title'), t('modal_error_message_description'),'error')
    }
  }

  if (loading) {
    return <div>
      <Loading />
    </div>
  }



  return (
    <div className='w-[100%]'>
      <h2 className='pb-4 text-xl md:text-2xl'>
        {t('profile_page_title')}
      </h2>
      <form className='' onSubmit={handleUpdateProfile}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className="md:mb-4">
            <label className="mb-2 block font-medium text-black opacity-[0.6]">
               {t('profile_page_form_label1')}
            </label>
            <input
              className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
              id="fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Enter your name and surname"
            />
          </div>

          <div className="md:mb-4">
            <label className="mb-2 block font-medium text-black opacity-[0.6]">
               {t('profile_page_form_label2')}
            </label>
            <input
              className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
              id="fullname"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="md:mb-4">
            <label className="mb-2 block font-medium text-black opacity-[0.6]">
                             {t('profile_page_form_label3')}

            </label>
            
            <div className="flex">
              <select
                className="w-1/4 rounded-sm border border-gray-200 bg-transparent py-3 px-2 outline-none focus:border-primary"
                value={phonePrefix}
                onChange={(e) => setPhonePrefix(e.target.value)}
              >
                <option value="050">050</option>
                <option value="055">055</option>
                <option value="070">070</option>
                <option value="077">077</option>
              </select>
              <input
                className="w-3/4 rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 px-2 outline-none focus:border-primary"
                value={phoneDigits}
                onChange={handlePhoneChange}
                type="text"
                placeholder="000-00-00"
              />
            </div>
          </div>

        </div>

        <ActionButton
          content={t('profile_page_form_button')}
          success={updateProfileSuccess}
          loading={updateProfileLoading}
          error={updateProfileError}
          path={`/${currentLang}/profile`}
         message={t('profile_page_modal_desc')}

        />
      </form>
    </div>
  )
}

export default ProfileScreen