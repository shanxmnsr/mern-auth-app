import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate();

  const { user, setUser } = useAuth();


  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");

      setUser(null);

      toast.success("Logout successful");

      navigate("/login");

    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed.");
    }
  };


  return (
    <div
      className="
        min-h-screen
        bg-[#F8EDE8]
        px-4
        py-6
        sm:px-6
        sm:py-8
      "
    >

      <div
        className="
          mx-auto
          mt-4
          sm:mt-6

          w-full
          max-w-5xl

          overflow-hidden

          rounded-2xl
          sm:rounded-3xl

          bg-white

          shadow-2xl
        "
      >

        {/* Header */}
        <div
          className="
            flex
            flex-col
            gap-6

            border-b
            border-[#E7D6C7]

            px-6
            py-6

            sm:px-10
            sm:py-8

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >

          <div>

            <span
              className="
                inline-flex

                rounded-full

                bg-[#F5E6DC]

                px-3
                sm:px-4

                py-1

                text-[10px]
                sm:text-xs

                font-semibold

                uppercase

                tracking-[0.25em]

                text-[#B87333]
              "
            >
              Dashboard
            </span>


            <h1
              className="
                mt-4

                text-3xl
                sm:text-4xl

                font-bold

                tracking-tight

                text-[#1F1F1F]
              "
            >
              Your Workspace
            </h1>


            <p
              className="
                mt-3

                max-w-lg

                text-sm
                sm:text-[15px]

                leading-6
                sm:leading-7

                text-gray-600
              "
            >
              Manage your account and securely access your protected resources.
            </p>

          </div>



          <button
            onClick={handleLogout}
            className="
              w-full
              sm:w-auto

              rounded-xl
              sm:rounded-2xl

              border
              border-[#DCC8B6]

              bg-white

              px-6
              py-3

              font-semibold

              text-[#1F1F1F]

              shadow-sm

              transition-all
              duration-300

              hover:-translate-y-1

              hover:border-[#B87333]

              hover:bg-[#B87333]

              hover:text-white

              hover:shadow-xl
            "
          >
            Logout
          </button>

        </div>



        {/* Body */}
        <div
          className="
            p-6
            sm:p-10
          "
        >

          {user && (

            <div
              className="
                rounded-2xl
                sm:rounded-3xl

                border
                border-[#DCC8B6]

                bg-white/60

                p-6
                sm:p-10

                shadow-xl

                backdrop-blur-xl
              "
            >


              {/* User */}
              <div
                className="
                  flex
                  flex-col

                  gap-5

                  border-b
                  border-[#E7D6C7]

                  pb-8

                  sm:flex-row
                  sm:items-center
                  sm:gap-6
                "
              >

                <div
                  className="
                    flex

                    h-16
                    w-16

                    sm:h-20
                    sm:w-20

                    items-center
                    justify-center

                    rounded-2xl

                    bg-gradient-to-br
                    from-[#C98A4C]
                    to-[#A66A3F]

                    text-2xl
                    sm:text-3xl

                    font-bold

                    text-white

                    shadow-lg
                  "
                >
                  {user.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>



                <div>

                  <h2
                    className="
                      text-2xl
                      sm:text-3xl

                      font-bold

                      text-[#1F1F1F]
                    "
                  >
                    Welcome back, {user.name}
                  </h2>


                  <p className="mt-2 text-sm sm:text-base text-gray-600">
                    Your account has been successfully authenticated.
                  </p>

                </div>

              </div>



              {/* Cards */}
              <div
                className="
                  mt-8
                  sm:mt-10

                  grid

                  gap-5
                  sm:gap-6

                  md:grid-cols-2
                "
              >

                <InfoCard
                  title="Full Name"
                  value={user.name}
                />

                <InfoCard
                  title="Email Address"
                  value={user.email}
                />

              </div>




              {/* Status */}
              <div
                className="
                  mt-6
                  sm:mt-8

                  rounded-2xl

                  border
                  border-[#DCC8B6]

                  bg-[#FFF8F2]

                  p-5
                  sm:p-6
                "
              >

                <div className="flex items-center gap-3">

                  <div className="relative flex h-3 w-3">

                    <span
                      className="
                        absolute
                        inline-flex
                        h-full
                        w-full
                        animate-ping
                        rounded-full
                        bg-green-400
                        opacity-75
                      "
                    />

                    <span
                      className="
                        relative
                        inline-flex
                        h-3
                        w-3
                        rounded-full
                        bg-green-500
                      "
                    />

                  </div>


                  <span className="text-base sm:text-lg font-semibold text-[#1F1F1F]">
                    Session Status
                  </span>

                </div>


                <p
                  className="
                    mt-4

                    text-sm
                    sm:text-base

                    leading-6
                    sm:leading-7

                    text-gray-600
                  "
                >
                  Your session is active and protected using JWT authentication
                  with HTTP-only cookies. You can securely access all protected
                  routes.
                </p>


              </div>


            </div>

          )}

        </div>

      </div>

    </div>
  );
};



const InfoCard = ({ title, value }) => (
  <div
    className="
      rounded-2xl

      border
      border-[#DCC8B6]

      bg-white/80

      p-5
      sm:p-6

      shadow-sm

      transition-all
      duration-300

      hover:-translate-y-1

      hover:border-[#B87333]/50

      hover:shadow-xl
    "
  >

    <p
      className="
        mb-3

        text-[10px]
        sm:text-xs

        font-semibold

        uppercase

        tracking-[0.25em]

        text-[#8B5E3C]
      "
    >
      {title}
    </p>


    <h3
      className="
        break-all

        text-xl
        sm:text-2xl

        font-bold

        text-[#1F1F1F]
      "
    >
      {value}
    </h3>

  </div>
);


export default Dashboard;