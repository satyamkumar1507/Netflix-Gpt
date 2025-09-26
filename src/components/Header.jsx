import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;



// import { useRef, useState } from "react";
// import { LOGO } from "../utils/constants";
// import {checkValidData} from "../utils/validate";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";

// const Header = () => {

// const [isSignInForm,setisSifnInForm] = useState(true);
// const [errMessage,seterrMessage] = useState();
// const navigate = useNavigate();

// const toggleSignInForm = () => {
//   setisSifnInForm(!isSignInForm);
// }

// const email = useRef(null);
// const password = useRef(null);
// //const name = useRef(null);

// const ClickHandler = () => {
  
//    //console.log(name.current.value);
//   // console.log(password.current.value);

// //const fullName = !isSignInForm && name.current ? name.current.value : "";

//  const message = checkValidData(email.current.value,password.current.value);
//  seterrMessage(message);
//  if(message) return;

//  if (!isSignInForm) {
//   //signup logic
//   createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
//   .then((userCredentials) => {
//     //signed in
//     const user = userCredentials.user;
//     console.log(user);
//     navigate("/browse");
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     seterrMessage(errorCode +"-"+errorMessage);
//   });
//  }else{
//   //sign in logic
//   signInWithEmailAndPassword(auth,email.current.value,password.current.value)
//   .then((userCredentials) => {
//     //signed in
//     const user = userCredentials.user;
//     console.log(user);
//     navigate("/browse");
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     seterrMessage(errorCode +"-"+errorMessage);
//   });
//  }
// }

//   return (
//     <div className="w-full absolute flex flex-row justify-between items-center px-50 py-4">
//       {/* Netflix Logo */}
//       <div>
//         <img
//           className="w-[250px] bg-gradient-to-b to-black"
//           src={LOGO}
//           alt="Netflix Logo"
//         />
//       </div>

      
//       {/* <div className="flex flex-row items-center gap-4">
      
//         <select className="p-2 bg-black text-white border border-gray-500 rounded">
//           <option value="en">English</option>
//           <option value="hi">Hindi</option>
//         </select>

        
//         <button className="p-2 bg-orange-600 text-white font-bold rounded">
//           {isSignInForm ? "Sign In" : "Sign Up"}
//         </button>
//       </div> */}

//       <div className="absolute bg-black/70 mt-150 ml-120 text-white">
//         <form onSubmit={(evt) => {evt.preventDefault()}} className="w-[500px] flex flex-col items-center gap-y-4">
//             <h1 className="text-white font-bold text-2xl mt-10">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
//             { !isSignInForm &&
//               <input type="text" className="w-[400px] bg-gray-600 p-3 m-2" placeholder="Enter Full Name"/>
//             }
//             <input type="email" className="w-[400px] bg-gray-600 p-3 m-2" placeholder="Email or Mobile number" ref={email} />
//             <input type="password" className="w-[400px] bg-gray-600 p-3 m-2" placeholder="Enter password" ref={password} />
//             <div> {isSignInForm} <p className="text-red-700 font-bold text-center">{errMessage}</p> </div>
          
//             <button
//              className="w-[400px] p-3 bg-orange-700 text-white cursor-pointer font-bold m-2 mb-3"
//              onClick={() => {
//               ClickHandler();
//              }}
//              >
//                 {isSignInForm ? "Sign In" : "Sign Up"}
//             </button>
//             <p className="flex font-bold mb-7 cursor-pointer" onClick={() => {toggleSignInForm()}} >
//               {isSignInForm ? "New to Netflex? Sign Up" : "Already a User? Sign In"}
//               </p>
//         </form>
//       </div>
//     </div>
//   );
// };



// export default Header;