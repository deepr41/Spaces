import { useNavigate } from "react-router-dom";
import NavBarItem from "./navBarItem";
import NavProfileImage from "./navProfileImage";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 bg-white supports-backdrop-blur:bg-white/95">
        <div className="max-w-8xl mx-auto">
          <div className="py-4 border-b border-slate-900/10 lg:border-0 mx-4 lg:mx-0">
            <div className="relative flex items-center">
              <ul className="ml-4 flex space-x-8">
                <NavBarItem link="/home" text="Home" />
                <NavBarItem link="/explore" text="Explore" />
                <NavBarItem link="/near" text="Near me" />
              </ul>
              <div className="relative hidden lg:flex items-center ml-auto mr-8">
                <nav className="text-sm leading-6 font-semibold text-slate-700 ">
                  <ul className="flex space-x-8">
                    {/* {isLoggedIn && <NavBarItem link="/profile" text="Profile" />}
            {isLoggedIn && <NavBarItem link="/logout" text="Log Out" />} */}
                    <NavBarItem
                      link="/logout"
                      text="Logout"
                      disabled={true}
                      onClick={() => {
                        localStorage.clear();
                        navigate("/");
                      }}
                    />
                    <NavProfileImage link="/profile" imamgeLink="User Name" />
                    <div
                      className="hidden group-hover:block absolute bg-gray-100 border rounded-none mt-2"
                      style={{ right: "-25px", top: "16px" }}
                    ></div>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
