import svg from "../assets/stylenest.svg";
import AuthComponent from "../components/Login/AuthComponent";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const RegisterPage = () => {
  const navigate = useNavigate();
  const store = useAuthStore();

  const submitFunc = async (dat) => {
    const { email, name, password } = dat;

    const result = await store.registration(email, name, password);

    if (result?.error) {
      toast(result?.message);
    } else {
      setTimeout(() => navigate("/"), 1000);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <ToastContainer />
      <img className="absolute top-12 left-12" src={svg} alt="logoImg" />
      <div className="w-1/4 bg-white rounded text-center">
        <p className="mt-12 text-2xl">Welcome to Register page</p>
        <AuthComponent type="Register" submit={submitFunc} />
      </div>
    </div>
  );
};

export default RegisterPage;
