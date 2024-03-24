import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase.config";
import { Link } from "react-router-dom";

interface Props {
  setIsRegistrationOpen: (x: boolean) => void;
}

const Registration = ({ setIsRegistrationOpen }: Props) => {
  const auth = getAuth(app);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRePass] = useState("");

  const [errName, setErrName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const [errRePass, setErrRePass] = useState(false);

  const [firebaseErr, setFirebaseErr] = useState("");

  const [isSignUp, setisSignUp] = useState(false);

  const singUpHandler = () => {
    if (!name) setErrName(true);
    if (!email || !email.includes("@") || !email.includes(".")) {
      setErrEmail(true);
      setFirebaseErr("");
    }
    if (!password || password.length < 6) setErrPassword(true);
    if (!rePass || password !== rePass) setErrRePass(true);

    if (
      name &&
      email &&
      email.includes("@") &&
      email.includes(".") &&
      password &&
      password.length >= 6 &&
      rePass &&
      rePass === password
    ) {

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL:
              "https://optimise2.assets-servd.host/maniacal-finch/production/animals/ring-tailed-lemur-hero.jpg?w=1200&h=630&q=82&auto=format&fit=clip&dm=1638122974&s=c73108f9eb29858c7bad0c368435ddd2",
          });

          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/email-already-in-use")) {
            setFirebaseErr("Email is already used");
          }
        });
        
      setisSignUp(true);
    }
  };

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setErrName(false);
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setErrPassword(false);
  };

  const rePassHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRePass(e.target.value);
    setErrRePass(false);
  };

  return (
    <div className="w-full sm:w-1/3 h-full bg-white mt-12 p-5">
      {!isSignUp ? (
        <div className="flex flex-col gap-7">
          <div className="flex justify-between">
            <h2 className="font-bold text-2xl">SIGN UP</h2>
            <button onClick={() => setIsRegistrationOpen(false)}>
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
              <h3 className="uppercase">sign up</h3>
              <p className="text-xs text-slate-400">*Required Field</p>
            </div>
            <div>
              <p>Your name*</p>
              <input
                value={name}
                onChange={nameHandler}
                type="text"
                placeholder="name"
                className="login-input"
              />
              {errName && (
                <p className="text-xs text-red-700 mt-2">Enter your name</p>
              )}
            </div>
            <div>
              <p>Email*</p>
              <input
                value={email}
                onChange={emailHandler}
                type="email"
                placeholder="name@domain.com"
                className="login-input"
              />
              {errEmail && (
                <p className="text-xs text-red-700 mt-2">
                  The email address was not found
                </p>
              )}
              {firebaseErr && (
                <p className="text-xs text-red-700 mt-2">{firebaseErr}</p>
              )}
            </div>

            <div>
              <p>Password*</p>
              <input
                value={password}
                onChange={passwordHandler}
                type="password"
                placeholder="Enter your password"
                className="login-input"
              />
              {errPassword && (
                <p className="text-xs text-red-700 mt-2">
                  The password must be at least 6 symbols
                </p>
              )}
            </div>
            <div>
              <p>Re-enter the password*</p>
              <input
                value={rePass}
                onChange={rePassHandler}
                type="password"
                placeholder="Your password"
                className="login-input"
              />
              {errRePass && (
                <p className="text-xs text-red-700 mt-2">
                  Passwords don't match
                </p>
              )}
            </div>
            <button
              className="w-full h-12 bg-fuchsia-900 text-white uppercase"
              onClick={singUpHandler}
            >
              sign up
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col items-center gap-6">
            <p>Now you're have an account</p>
            <button
              className="w-32 h-9 bg-black text-white text-sm"
              onClick={() => setIsRegistrationOpen(false)}
            >
              Go shopping
            </button>
            <Link to={"/profile"}>
              <button className="w-32 h-9 bg-black text-white text-sm">
                Go to profile
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
