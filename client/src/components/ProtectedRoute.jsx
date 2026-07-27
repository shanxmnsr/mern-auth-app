import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div
        className="
          min-h-screen
          bg-[#F8EDE8]
          flex
          items-center
          justify-center
          px-4
          py-6
          sm:px-6
        "
      >

        <div
          className="
            w-full
            max-w-md
            rounded-2xl
            sm:rounded-3xl

            border
            border-[#DCC8B6]

            bg-white/60
            backdrop-blur-xl

            p-6
            sm:p-8
            lg:p-10

            shadow-xl
          "
        >

          <div className="flex flex-col items-center">

            {/* Spinner */}
            <div
              className="
                h-12
                w-12
                sm:h-14
                sm:w-14

                rounded-full

                border-4
                border-[#E7D6C7]
                border-t-[#B87333]

                animate-spin
              "
            />


            <span
              className="
                mt-6
                sm:mt-8

                inline-flex

                rounded-full

                bg-[#FFF3E8]

                px-3
                sm:px-4

                py-1

                text-[10px]
                sm:text-xs

                font-semibold

                uppercase

                tracking-[0.2em]
                sm:tracking-[0.25em]

                text-[#B87333]
              "
            >
              Authenticating
            </span>



            <h2
              className="
                mt-4
                sm:mt-5

                text-2xl
                sm:text-3xl

                font-bold

                text-center

                text-[#1F1F1F]
              "
            >
              Please wait...
            </h2>



            <p
              className="
                mt-3

                text-sm
                sm:text-base

                text-center

                leading-6
                sm:leading-7

                text-gray-600
              "
            >
              We're securely verifying your session before accessing your
              dashboard.
            </p>

          </div>

        </div>

      </div>
    );
  }


  if (!user) {
    return <Navigate to="/login" replace />;
  }


  return children;
};

export default ProtectedRoute;