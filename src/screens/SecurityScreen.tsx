import { updateProfilePassword } from '../redux/features/profileSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import swal from 'sweetalert'
import { AppDispatch } from '../redux/store'
import ActionButton from "../partials/ActionButton"


const SecurityScreen = () => {

   const dispatch: AppDispatch = useDispatch()
      const {  updateProfilePasswordSuccess, updateProfilePasswordLoading, updateProfilePasswordError } = useSelector((state: any) => state.profile)
  
      const [current_password, setCurrentPassword] = useState<string | undefined>('')
      const [new_password, setNewPassword] = useState<string | undefined>('')
      const [confirm_password, setConfirmPassword] = useState<string | undefined>('')
      


      const handleUpdateProfilePassword = async (e: React.FormEvent) => {
        e.preventDefault()

        if(new_password !== confirm_password){
            swal('Error!', 'Passwords do not match', 'error')
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
      <h2 className='pb-4 text-2xl'>Your profile</h2>
      <form className='' onSubmit={handleUpdateProfilePassword}>
        <div className='grid grid-cols-1 gap-4'>
      

     

        <div className="mb-4">
          <label className="mb-2 block font-medium text-black opacity-[0.6]">
            Current password
          </label>
          <input
            className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
            id="current_password"
            onChange={(e) => setCurrentPassword(e.target.value)}
            type="password"
            placeholder="Write current password"
          />
        </div>


        <div className="mb-4">
          <label className="mb-2 block font-medium text-black opacity-[0.6]">
            New password
          </label>
          <input
            className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
            id="new_password"
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            placeholder="Write new password"
          />
        </div>


        <div className="mb-4">
          <label className="mb-2 block font-medium text-black opacity-[0.6]">
            Confirm password
          </label>
          <input
            className="w-full rounded-sm placeholder:text-sm border border-gray-200 bg-transparent py-3 pl-2 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
            id="current_password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Write confirm password"
          />
        </div>


      
        </div>

        <ActionButton
                        content="Change profile password"
                        success={updateProfilePasswordSuccess}
                        loading={updateProfilePasswordLoading}
                        error={updateProfilePasswordError}
                        path={`/profile/password`}
                        message="Profile password updated successfully"
                    />
      </form>
    </div>
  )
}

export default SecurityScreen