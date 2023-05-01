import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import jwt_decode from "jwt-decode";
import { client } from "../client";

const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (res) => {
    const decoded_res = jwt_decode(res.credential);
    console.log(decoded_res);

    const { name, sub, picture } = decoded_res;
    localStorage.setItem("user", JSON.stringify(decoded_res));

    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };

    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} alt="logo" width="130px"></img>
          </div>
          <div className="shadow-2xl">
            <GoogleOAuthProvider
              clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
              cookiePolicy="single_host_origin"
            >
              <GoogleLogin
                onSuccess={(response) => responseGoogle(response)}
                onError={(response) => responseGoogle(response)}
              />
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
