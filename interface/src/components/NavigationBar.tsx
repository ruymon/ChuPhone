import { BiSquareRounded } from "react-icons/bi";
import { HiOutlineChevronLeft } from 'react-icons/hi';
import { SlMenu } from "react-icons/sl";
import { useLocation, useNavigate } from "react-router-dom";

export function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleBack() {
    navigate(-1);
  }

  function handleGoToHome() {
    navigate('/home', { replace: true });
  }

  return (
    <div className="w-full h-fit flex items-center justify-center gap-12 pb-2 text-lg text-white">
      <button type="button" className="hover:bg-black/20 hover:backdrop-blur-sm transition-all p-4 rounded-xl hover:cursor-pointer">
        <SlMenu className="rotate-90"/>
      </button>

      <button type="button" onClick={handleGoToHome} className="hover:bg-black/20 hover:backdrop-blur-sm transition-all p-4 rounded-xl cursor-pointer">
        <BiSquareRounded />
      </button>

      <button type="button" onClick={handleBack} className="hover:bg-black/20 hover:backdrop-blur-sm transition-all p-4 rounded-xl cursor-pointer">
        <HiOutlineChevronLeft className="text-xl"/>
      </button>
    </div>
  );
};
