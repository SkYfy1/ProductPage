import { useCallback } from "react";
import svg from "../assets/stylenest.svg";
import { ToastContainer, toast } from "react-toastify";
import AuthComponent from "../components/Login/AuthComponent";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const LoginPage = () => {
  const navigate = useNavigate();

  const store = useAuthStore();
  const submitFunc = useCallback(async (dat) => {
    const { email, password } = dat;

    const result = await store.login(email, password);

    if (result?.error) {
      toast(result.message);
    } else {
      navigate("/");
    }
  }, []);
  return (
    <div className="flex justify-center items-center h-screen">
      <ToastContainer />
      <img className="absolute top-12 left-12" src={svg} alt="logoImg" />
      <div className="w-1/4 bg-white rounded text-center">
        <p className="mt-12 text-2xl">Welcome to Login page</p>
        <AuthComponent type="Login" submit={submitFunc} />
      </div>
    </div>
  );
};

export default LoginPage;
