import {Link} from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-6xl md:text-9xl text-green-400 font-semibold">404</div>  
      <Link to="/" className="bg-green-400 text-white mt-8 px-2 py-2">Return to home page</Link>
    </div>
  )
}

export default PageNotFound