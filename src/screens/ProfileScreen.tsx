import { profileDetails,updateProfile } from '../redux/features/profileSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import swal from 'sweetalert'
import { AppDispatch } from '../redux/store'
import ActionButton from "../partials/ActionButton"
import Loading from '../components/Loader'



const ProfileScreen = () => {
   const dispatch: AppDispatch = useDispatch()
      const { profile, loading, error, updateProfileSuccess, updateProfileLoading, updateProfileError } = useSelector((state: any) => state.profile)

      const [fullName, setFullName] = useState<string | undefined>(profile?.fullName || undefined)
      const [email, setEmail] = useState<string | undefined>(profile?.email || undefined)
      const [phoneNumber, setPhoneNumber] = useState<string | undefined>(profile?.phoneNumber || undefined)
      const [customer_type, setCustomerType] = useState<string | undefined>(profile?.customerType || undefined);
    

      

      useEffect(() => {
          dispatch(profileDetails())
      }, [dispatch])
  
  
      useEffect(() => {
          if (profile) {
              setFullName(profile.fullName || '')
              setEmail(profile.email || '')
              setPhoneNumber(profile.phoneNumber || '')
              setCustomerType(profile.customerType || '')
          }
      }, [profile])


      const handleUpdateProfile = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const updatedProfile = {
                fullName,
                phoneNumber,
                customer_type,
                email
            }
            await dispatch(updateProfile({ updatedProfile }))
        } catch (error) {
            swal('Error!', 'Wrong email or password', 'error')
            console.error(error)
        }
    }

      if (loading) {
        return <div>
          <Loading/>
        </div>
      }



  return (
    <div className='w-[100%]'>
      <h2 className='pb-4 text-xl md:text-2xl'>Your profile</h2>
      <form className='' onSubmit={handleUpdateProfile}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className="md:mb-4">
          <label className="mb-2 block font-medium text-black opacity-[0.6]">
          Ad və soyad
          </label>
          <input
            className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
            id="fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            placeholder="Adınızı və soyadınızı yazın"
            />
        </div>

        <div className="md:mb-4">
          <label className="mb-2 block font-medium text-black opacity-[0.6]">
            E-poçt
          </label>
          <input
            className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
            id="fullname"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-poçtunuzu yazın"
          />
        </div>

        <div className="md:mb-4">
          <label className="mb-2 block font-medium text-black opacity-[0.6]">
            Əlaqə nömrəsi
          </label>
          <input
            className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
            id="fullname"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="tel"
            placeholder="Əlaqə nömrənizi yazın"
          />
        </div>


        <div className="md:mb-4">
          <label className="mb-2 block font-medium text-black opacity-[0.6]">
            Rol
          </label>
          <select
            className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
            id="customerType"
            value={customer_type}
            onChange={(e) => setCustomerType(e.target.value)}
          >
            <option value="Individual">Valideyn</option>
            <option value="Company">Şirkət</option>
            <option value="VIP">VIP</option>
          </select>
        </div>
        </div>

        <ActionButton
                        content="Yadda saxla"
                        success={updateProfileSuccess}
                        loading={updateProfileLoading}
                        error={updateProfileError}
                        path={`/profile`}
                        message="Təbriklər"
                    />
      </form>
    </div>
  )
}

export default ProfileScreen