import { app } from "../../firebase.config";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { logOutUser } from "../../store/slices/userSlice";
import HeaderPages from "../headers/headerPages";
import { getAuth, signOut } from "firebase/auth";

const Profile = () => {
  const auth = getAuth(app);

  const user = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();

  const loguotHandler = () => {
    signOut(auth)
      .then(() => {
        alert("Do you really want to logout?");
        dispatch(logOutUser());
      })
      .catch((error) => {
        alert({ error });
      });
  };

  return (
    <>
      <HeaderPages />
      <div className="mt-14 px-1 sm:px-9">
        <h2 className="font-bold text-2xl text-center mb-12">
          {user ? "Welcome to your profile" : "Sign in to go shopping"}
        </h2>
        <div className="flex flex-col gap-10 mb-12">
          <div className="flex justify-end items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>
            <button
              className="w-24 h-9 bg-black text-white"
              onClick={loguotHandler}
            >
              Logout
            </button>
          </div>
          <div className="flex flex-col items-center sm:items-start sm:flex-row gap-10">
            <img
              src="https://static.thenounproject.com/png/576092-200.png"
              alt="profile"
              className="w-32 h-32 sm:w-44 sm:h-44"
            />
            <div className="flex flex-col gap-10">
              <div className="font-bold text-xl">
                {user ? user.userName : "Guest"}
              </div>
              <div>
                {user
                  ? "Duis euismod libero a scelerisque pulvinar. Donec fermentum quisnisi nec pharetra. Donec pharetra elit tellus, a luctus libero facilisis ut."
                  : ""}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 mb-12">
          <h3 className="uppercase text-lg font-bold">recently viewed</h3>
          <p>
            {user
              ? "You don't have any recently viewed properties yet"
              : "Avalible to login users"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
