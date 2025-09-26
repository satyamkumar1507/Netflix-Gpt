import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;



// import { createBrowserRouter, RouterProvider,  } from "react-router-dom";
// import Login from "./Login";
// import Browse from "./Browse";
// import { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { useDispatch } from "react-redux";
// import { addUser, removeUser } from "../utils/userSlice";


// const Body = () => {

//   const dispatch = useDispatch();
  

//  const appRouter = createBrowserRouter([
//     {
//         path: "/login",
//         element: <Login/>
//     },
//     {
//         path: "/browse",
//         element: <Browse/>,
//     },
//  ]);

//  useEffect(() => {
//     onAuthStateChanged(auth,(user) => {
//         //sign up
//         if(user) {
//             //console.log("user is",user);
//             // user is signed in, see docs for a list of available properties
//             const {uid,email,displayName} = user;
//             dispatch(addUser({uid:uid, email:email, displayName:displayName}));
            
//             // ....
//         }else {
//             //user is signed out 
//             dispatch(removeUser())
            
//             //...
//         }
//     })
//  },[]);

//     return(
//         <div>
//           <RouterProvider router={appRouter}/>
//         </div>
//     )
// }

// export default Body;