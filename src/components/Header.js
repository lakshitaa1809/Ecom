import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { useDispatch, useSelector } from "react-redux";
import { logout, login } from "../redux/authSlice";

const Header = () => {
  const { productData } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(
      auth,
      provider.setCustomParameters({ prompt: "select_account" })
    )
      .then((result) => {
        const user = result.user;
        dispatch(
          login({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full h-20 bg-white text-black sticky top-0 z-50 ">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img
              className="w-15 h-15 rounded-full"
              src="https://res.cloudinary.com/dehghhzey/image/upload/v1684640390/logo_glmbmg.jpg"
              alt=""
            />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex item-center gap-8">
            <Link to="/">
              <li className="text-base text-blue-900 font-bold hover:text-red-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
            </Link>
            <Link to="/products">
              <li className="text-base text-blue-900 font-bold hover:text-red-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Products
              </li>
            </Link>
          </ul>
          {!userInfo ? (
            <>
              <Link to="/cart">
                <div className="relative text-blue-900 hover:text-red-900 ">
                  <AiOutlineShoppingCart className="w-12 h-6 text-blue-900 hover:text-red-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300" />
                  <span className="absolute w-10 h-4 top-4 left-4 text-sm flex items-center justify-center font-semibold font-titleFont">
                    0
                  </span>
                </div>
              </Link>
              <div
                className="text-base font-titleFont font-semibold text-blue-900 hover:text-red-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
                onClick={handleLogin}
              >
                Login{" "}
              </div>
            </>
          ) : (
            <>
              <Link to="/cart">
                <div className="relative text-blue-900 hover:text-red-900 ">
                  <AiOutlineShoppingCart className="w-12 h-6 text-blue-900 hover:text-red-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300" />
                  <span className="absolute w-10 h-4 top-4 left-4 text-sm flex items-center justify-center font-semibold font-titleFont text-blue-900 hover:text-red-900">
                    {productData.length}
                  </span>
                </div>
              </Link>
              <p className="text-base font-titleFont font-semibold underline underline-offset-2  text-blue-900 hover:text-red-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                {userInfo.name}
              </p>
              <div
                className="text-base font-titleFont font-semibold  text-blue-900 hover:text-red-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
                onClick={handleLogout}
              >
                Logout{" "}
              </div>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
