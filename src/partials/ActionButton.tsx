import Swal from 'sweetalert2';
import { useEffect } from 'react';
import swal from 'sweetalert';

const Button = ({
  content,
  success,
  loading,
  error,
  path,
  message
}: {
  content: string;
  success: any;
  loading: boolean;
  error: any;
  path: string;
  message: string
}) => {


  useEffect(() => {
    if (success) {
      swal('Success!', message, 'success').then(() => {
        window.location.replace(path);
      });
    }
    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
        confirmButtonText: 'OK',
      });
    }
  }, [success, error, path]);

  return (
    <div className="w-[100%] mx-auto mt-4">
      <button
        type="submit"
        className={`flex w-full cursor-pointer justify-center rounded bg-green-400 p-3 font-medium text-white ${
          loading ? 'disabled' : ''
        }`}
        disabled={loading}
      >
        {loading ? (
          <div className="flex items-center">
            <span>Loading...</span>
            <svg
              className="animate-spin h-5 w-5 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.004 8.004 0 014 12H0c0 6.627 5.373 12 12 12v-4c-3.86 0-7.27-1.53-9.878-4.022l-2.122 2.121z"
              ></path>
            </svg>
          </div>
        ) : (
          content
        )}
      </button>
    </div>
  );
};

export default Button;
