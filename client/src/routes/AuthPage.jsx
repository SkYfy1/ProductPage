import { useState } from "react";
import svg from "../assets/stylenest.svg";
import ModalWindow from "../components/ModalWindow";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const auth = async (email) => {
    const res = await fetch("/api/auth", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (data.error) {
      toast.error(data.error);
      return navigate("/signup");
    }

    navigate("/login");
  };

  return (
    <>
      <ToastContainer />
      <img
        src={svg}
        onClick={() => navigate("/")}
        alt="logoImg"
        className="absolute left-12 top-12"
      />
      <div className="h-screen flex bg-gray-200 justify-center items-center">
        <div className="px-12 py-12 w-1/4 bg-white rounded">
          <div className="mb-10 text-center">
            <h1 className="font-bold text-2xl">
              Введите ваш адрес электронной почты
            </h1>
            <p className="text-sm mt-2">Продолжить с MDN Plus</p>
          </div>
          <div className="flex flex-col gap-5 ">
            <input
              value={email}
              placeholder="Input you email address"
              onChange={(e) => setEmail(e.target.value)}
              className="rounded py-5 px-5 border border-gray-400"
              type="text"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                auth(email);
              }}
              className="w-full rounded hover:bg-blue-900 text-base bg-blue-800 text-white py-5"
            >
              Register or Log in
            </button>
          </div>
          <div className="relative">
            <div className="border-b border-gray-300 my-10"></div>
            <span className="absolute -bottom-3 left-1/2 -translate-x-2/3 z-30 bg-white w-10 text-center">
              or
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <button className="w-full rounded border border-gray-400 mb-3 text-base  text-gray-600 py-5 flex justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
                />
              </svg>
              Continue with Google
            </button>
            <button className="w-full rounded border border-gray-400 text-base  text-gray-600 py-5 flex justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
              Continue with Yabloko
            </button>
          </div>
          {showMore && (
            <ModalWindow>
              <h1 className="text-2xl mb-3">Privacy and Use Terms</h1>
              <div className="w-full h-[380px] no-scrollbar overflow-y-scroll mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                mauris felis, ultrices et dolor et, tristique pretium lacus.
                Proin fermentum leo ac lectus fringilla, a suscipit dolor
                euismod. Aenean luctus urna id ipsum iaculis semper. Maecenas
                finibus est nisl, eget viverra ante bibendum vitae. Nulla tempor
                sit amet quam in tincidunt. Donec arcu diam, blandit sit amet
                nulla quis, lobortis vehicula justo. Proin tristique ipsum sit
                amet lorem tempor facilisis. Maecenas sollicitudin, tellus ac
                euismod dapibus, elit odio ornare magna, a varius lorem ante et
                tortor. Sed efficitur sapien sed diam commodo, sit amet suscipit
                justo rutrum. Praesent a enim luctus, hendrerit nunc non,
                commodo massa. Sed ultrices ex bibendum felis lacinia, id
                sagittis dolor faucibus. Nam aliquam ullamcorper placerat. Duis
                nisi sapien, pellentesque id dolor vitae, dapibus imperdiet
                libero. Ut eu diam id lorem aliquam ornare a a elit. Sed mollis
                dolor ante, id consequat nunc gravida ut. Nulla sed tellus
                hendrerit, pharetra diam molestie, euismod turpis. Sed quis
                tellus eget est elementum auctor quis sed lacus. Aliquam erat
                volutpat. Nullam commodo nulla eu urna porta, ut consequat nisi
                venenatis. Quisque a odio eget sem facilisis pellentesque ut sit
                amet ipsum. Morbi mattis ante pulvinar, tincidunt lorem id,
                iaculis quam. Vestibulum massa orci, semper a urna sit amet,
                vestibulum laoreet enim. Nam lacinia nisi sapien, sed pretium
                augue pharetra ut. Donec interdum, lectus quis sollicitudin
                dictum, ante mi aliquam mi, at congue elit elit id lectus. Fusce
                at porta odio. Praesent eleifend velit ut ullamcorper tempus. In
                condimentum tristique lectus, et fermentum ante vulputate vel.
                Etiam non dignissim nunc. Etiam cursus, massa nec vehicula
                ultrices, odio est aliquam dolor, at porta urna erat vulputate
                nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer vel faucibus nunc. Aliquam ullamcorper risus at varius
                tempus. Maecenas at dictum turpis, vel tempor massa. Sed laoreet
                vestibulum neque. Aliquam diam mauris, laoreet sit amet nisl sit
                amet, pretium luctus quam. Phasellus in faucibus velit, eu
                imperdiet mi. Vestibulum iaculis vel ante a accumsan. Aenean sem
                orci, sagittis nec facilisis at, vehicula quis sapien. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. In quis fringilla justo. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Nullam id ipsum et
                sem commodo fermentum. Suspendisse pulvinar ante felis, id porta
                nunc posuere non. Suspendisse ex est, convallis vitae malesuada
                vitae, laoreet nec est. Proin rhoncus eros non eros porta
                sollicitudin. Praesent semper iaculis urna eu dignissim. Mauris
                fringilla lorem quis enim pharetra dapibus a nec justo. Donec ut
                feugiat neque.
              </div>
              <button
                onClick={() => {
                  setShowMore(!showMore);
                }}
                className="w-full rounded hover:bg-blue-900 text-base bg-blue-800 text-white py-2"
              >
                Go Back
              </button>
            </ModalWindow>
          )}
          <p className="text-xs mt-6">
            Продолжая, вы принимаете{" "}
            <span
              onClick={() => {
                setShowMore(!showMore);
              }}
              className="text-blue-500 underline decoration-blue-400"
            >
              Условия использования
            </span>{" "}
            и{" "}
            <span
              onClick={() => {
                setShowMore(!showMore);
              }}
              className="text-blue-500 underline decoration-blue-400"
            >
              Уведомление о конфиденциальности
            </span>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
