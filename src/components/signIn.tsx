import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { app } from "../firebase.config";
import { useAppDispatch } from "../hooks/redux";
import { setUser } from "../store/slices/userSlice";

interface Props {
  setIsSignInOpen: (x: boolean) => void;
  setIsRegistrationOpen: (x: boolean) => void;
}

const SignIn = ({ setIsSignInOpen, setIsRegistrationOpen }: Props) => {
  const dispatch = useAppDispatch();

  const auth = getAuth(app);

  const registerHandler = () => {
    setIsSignInOpen(false);
    setIsRegistrationOpen(true);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState(false);
  const [errPassword, setErrPassword] = useState(false);

  const [userEmailErr, setUserEmailErr] = useState("");
  const [userPassErr, setUserPassErr] = useState("");

  const [successSignIn, setSuccessSignIn] = useState("");

  const singInHandler = () => {
    if (!email || !email.includes("@") || !email.includes("."))
      setErrEmail(true);
    if (!password || password.length < 6) setErrPassword(true);

    if (
      email &&
      email.includes("@") &&
      email.includes(".") &&
      password &&
      password.length >= 6
    ) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user) {
            dispatch(
              setUser({
                id: new Date(),
                userName: user.displayName,
                email: user.email,
                image: user.photoURL,
              })
            );
            setSuccessSignIn("Logged in successfully! Welcome you back!");
            setTimeout(() => {
              setIsSignInOpen(false);
            }, 2000);
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/invalid-email")) {
            setUserEmailErr("Invalid email");
          }
          if (errorCode.includes("auth/wrong-password")) {
            setUserPassErr("Wrong password");
          }
          console.log("Something wrong with log in");
        });
      setEmail("");
      setPassword("");
      setErrEmail(false);
      setErrPassword(false);
    }
  };

  return (
    <div className="w-full sm:w-1/3 h-full bg-white mt-12 p-5">
      {!successSignIn ? (
        <div className="flex flex-col gap-7">
          <div className="flex justify-between">
            <h2 className="font-bold text-2xl">SIGN IN</h2>
            <button onClick={() => setIsSignInOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 hover:stroke-fuchsia-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex flex-col gap-4 mb-4">
              <h3>SIGN IN</h3>
              <p className="text-xs text-slate-400">*Required Field</p>
            </div>
            <div>
              <p>Email*</p>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="name@domain.com"
                className="login-input"
              />
              {errEmail && (
                <p className="text-xs text-red-700 mt-2">
                  The email address was not found
                </p>
              )}
              {userEmailErr && (
                <p className="text-xs text-red-700 mt-2">{userEmailErr}</p>
              )}
            </div>
            <div>
              <p>Password*</p>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="login-input"
              />
              {errPassword && (
                <p className="text-xs text-red-700 mt-2">
                  The password must be at least 6 symbols
                </p>
              )}
              {userPassErr && (
                <p className="text-xs text-red-700 mt-2">{userPassErr}</p>
              )}
            </div>
            <button
              className="w-full h-12 bg-fuchsia-900 text-white"
              onClick={singInHandler}
            >
              SIGN IN
            </button>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex flex-col gap-4 mb-4">
              <h3>CREATE AN ACCOUNT</h3>
              <p className="text-sm text-slate-400">
                Create an account to track your order more easily
              </p>
            </div>
            <button
              className="w-full h-12 uppercase text-fuchsia-900 border-2 border-gray-200"
              onClick={registerHandler}
            >
              register
            </button>
          </div>
        </div>
      ) : (
        <h2 className="text-sm font-semibold text-green-600">
          {successSignIn}
        </h2>
      )}
    </div>
  );
};

export default SignIn;
