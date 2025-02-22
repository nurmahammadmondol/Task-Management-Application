import React, { useContext } from 'react';
import LoginLottieFile from '../assets/Animation-login.json';
import Lottie from 'lottie-react';
import GoogleIcon from '../assets/Icon/icons8-google-48.png';
import Bg_image from '../assets/Image/bg.png';
import { authContext } from '../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate(null);
  const { LoginWithGoogle } = useContext(authContext);

  const handleLoginGoogle = () => {
    LoginWithGoogle()
      .then(res => {
        console.log(res?.user);
        navigate('/dashboard');
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Bg_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="-my-10 py-14"
    >
      <div className="card-body md:w-1/2 mx-auto border">
        <div className="h-[400px]">
          <Lottie className="h-full" animationData={LoginLottieFile}></Lottie>
        </div>

        <button
          onClick={handleLoginGoogle}
          className="w-full btn btn-accent text-white mt-2 flex items-center gap-3"
        >
          <img className="w-9" src={GoogleIcon} alt="" />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
