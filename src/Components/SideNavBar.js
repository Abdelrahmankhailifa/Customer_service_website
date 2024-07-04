import { useNavigate } from "react-router-dom";
import * as bsIcons from "react-icons/bs";
import * as biIcons from "react-icons/bi";
import * as siIcons from "react-icons/si";
import * as tbIcons from "react-icons/tb";
import * as ioIcons from "react-icons/io";

const SideNavBar = ({ open, setOpen }) => {
  const menus = [
    { title: "Dashboard" },
    { title: "Analytics", icons: <tbIcons.TbReportAnalytics /> },
  ];

  const logoutNavigate = useNavigate();
  const handleLogout = () => {
    logoutNavigate("/login");
  };

  const liveChat = useNavigate();
  const handleLiveChat = () => {
    liveChat("/livechat");
  };
  return (
    <>
      <div className="flex ">
        <div
          className={` bg-dark-purple  h-screen p-5 pt-8 ${
            open ? "w-72" : "w-20"
          } duration-300 relative`}
        >
          <bsIcons.BsArrowLeftShort
            className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer rotate-icon ${
              !open && "rotate-180 "
            }`}
            onClick={() => setOpen(!open)}
          />

          <div className="inline-flex">
            <bsIcons.BsFillTaxiFrontFill
              className={`bg-transparent text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
                open && "rotate-[360deg]"
              }`}
              style={{ color: "white" }}
            />
            <h1
              className={`text-gray-300 origin-left font-medium text-2xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              {" "}
              WASAL{" "}
            </h1>
          </div>

          <div
            className={`flex items-center rounded-md bg-light-white mt-6 px-6 py-2 ${
              !open ? "px-2.5" : "px-4"
            }`}
          >
            <bsIcons.BsSearch
              className={`text-white text-lg block float-left cursor-pointer ${
                open && "mr-2"
              }`}
            />
            <input
              type={"search"}
              placeholder="Search"
              className={`text-base bg-transparent w-full text-white focus:outline-none ${
                !open && "hidden"
              }`}
            />
          </div>
          <ul className="pt-2">
            {menus.map((menu, index) => (
              <>
                <li
                  key={index}
                  className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2"
                >
                  <span className="text-2xl block float-left">
                    {menu.icons ? menu.icons : <biIcons.BiSolidDashboard />}
                  </span>
                  <span
                    className={`text-base font-medium flex-1 duration-200 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                </li>
              </>
            ))}

            <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
              <button onClick={handleLiveChat}>
                <span className="text-2xl block float-left">
                  <siIcons.SiLivechat />
                </span>
                <span
                  className={` ml-4 text-base font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  Live chat
                </span>
              </button>
            </li>
            <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
              <button onClick={handleLogout}>
                <span className="text-2xl block float-left">
                  <ioIcons.IoMdLogOut />
                </span>
                <span
                  className={` ml-4 text-base font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  Logout
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideNavBar;
