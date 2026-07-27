
// function AuthLayout({ children, title, subtitle }) {
//   return (
//     <div className="relative min-h-screen overflow-hidden bg-[#F8EDE8] flex items-center justify-center px-6 py-10">

//       <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#E8C8B8] opacity-60 blur-3xl" />

//       <div className="absolute -bottom-40 -right-32 h-[450px] w-[450px] rounded-full bg-[#D9B08C] opacity-50 blur-3xl" />

//       <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-3xl" />

//       <div
//         className="
//           relative
//           z-10
//           flex
//           w-full
//           max-w-6xl
//           overflow-hidden
//           rounded-[32px]
//           border
//           border-white/50
//           bg-white/40
//           shadow-[0_30px_80px_rgba(0,0,0,0.12)]
//           backdrop-blur-2xl
//         "
//       >
//         {/*  Left Section */}
//         <div
//           className="
//             w-full
//             lg:w-1/2
//             p-8
//             sm:p-10
//             lg:p-14
//             flex
//             flex-col
//             justify-center
//           "
//         >
//           <span className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#B87333]">
//             Authentication
//           </span>

//           <h1 className="text-4xl font-bold text-[#1F1F1F]">
//             {title}
//           </h1>

//           <p className="mt-3 mb-8 max-w-sm text-gray-600 leading-relaxed">
//             {subtitle}
//           </p>

//           {children}
//         </div>

//         {/*  Right Section  */}
//         <div
//           className="
//             relative
//             hidden
//             lg:flex
//             w-1/2
//             items-center
//             justify-center
//             overflow-hidden
//             bg-gradient-to-br
//             from-[#E7C7A8]
//             via-[#C89B6D]
//             to-[#9C6339]
//             p-12
//           "
//         >
          
//           <div className="absolute top-10 right-10 h-32 w-32 rounded-full border border-white/30 bg-white/10 backdrop-blur-xl" />

//           <div className="absolute bottom-10 left-10 h-24 w-24 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl" />

     
//           <div className="absolute bottom-16 right-16 rounded-2xl border border-white/30 bg-white/15 p-5 backdrop-blur-xl shadow-xl">
//             <p className="text-sm text-white/80">
//               Trusted by
//             </p>

//             <h3 className="mt-1 text-2xl font-bold text-white">
//               10K+
//             </h3>

//             <p className="text-sm text-white/70">
//               Developers
//             </p>
//           </div>

   
//           <div className="relative z-10 max-w-md text-white">
//             <h2 className="text-6xl font-bold leading-tight">
//               Build.
//               <br />
//               Manage.
//               <br />
//               Grow.
//             </h2>

//             <p className="mt-8 text-lg leading-8 text-white/85">
//               Secure authentication with a clean,
//               modern interface designed for your next
//               full-stack application.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AuthLayout;


function AuthLayout({ children, title, subtitle }) {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#F8EDE8]
        flex
        items-center
        justify-center
        px-4
        py-6
        sm:px-6
        sm:py-10
      "
    >

      {/* Background Blobs */}
      <div
        className="
          absolute
          -top-20
          -left-20
          h-64
          w-64
          sm:h-96
          sm:w-96
          rounded-full
          bg-[#E8C8B8]
          opacity-60
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -bottom-20
          -right-20
          h-72
          w-72
          sm:h-[450px]
          sm:w-[450px]
          rounded-full
          bg-[#D9B08C]
          opacity-50
          blur-3xl
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-80
          w-80
          sm:h-[550px]
          sm:w-[550px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/30
          blur-3xl
        "
      />


      {/* Main Card */}
      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-6xl
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-white/50
          bg-white/40
          shadow-[0_30px_80px_rgba(0,0,0,0.12)]
          backdrop-blur-2xl

          lg:flex-row
        "
      >

        {/* Left Section */}
        <div
          className="
            w-full
            p-6
            sm:p-10
            lg:w-1/2
            lg:p-14
            flex
            flex-col
            justify-center
          "
        >

          <span
            className="
              mb-3
              text-xs
              sm:text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#B87333]
            "
          >
            Authentication
          </span>


          <h1
            className="
              text-3xl
              sm:text-4xl
              font-bold
              text-[#1F1F1F]
            "
          >
            {title}
          </h1>


          <p
            className="
              mt-3
              mb-8
              max-w-sm
              text-sm
              sm:text-base
              text-gray-600
              leading-relaxed
            "
          >
            {subtitle}
          </p>


          {children}

        </div>



        {/* Right Section */}
        <div
          className="
            relative
            hidden
            lg:flex
            w-1/2
            items-center
            justify-center
            overflow-hidden
            bg-gradient-to-br
            from-[#E7C7A8]
            via-[#C89B6D]
            to-[#9C6339]
            p-12
          "
        >

          {/* Decorative circles */}
          <div
            className="
              absolute
              top-10
              right-10
              h-32
              w-32
              rounded-full
              border
              border-white/30
              bg-white/10
              backdrop-blur-xl
            "
          />

          <div
            className="
              absolute
              bottom-10
              left-10
              h-24
              w-24
              rounded-full
              border
              border-white/20
              bg-white/10
              backdrop-blur-xl
            "
          />



          {/* Stats Card */}
          <div
            className="
              absolute
              bottom-16
              right-16
              rounded-2xl
              border
              border-white/30
              bg-white/15
              p-5
              backdrop-blur-xl
              shadow-xl
            "
          >

            <p className="text-sm text-white/80">
              Trusted by
            </p>

            <h3 className="mt-1 text-2xl font-bold text-white">
              10K+
            </h3>

            <p className="text-sm text-white/70">
              Developers
            </p>

          </div>



          {/* Hero Text */}
          <div
            className="
              relative
              z-10
              max-w-md
              text-white
            "
          >

            <h2
              className="
                text-5xl
                xl:text-6xl
                font-bold
                leading-tight
              "
            >
              Build.
              <br />
              Manage.
              <br />
              Grow.
            </h2>


            <p
              className="
                mt-8
                text-lg
                leading-8
                text-white/85
              "
            >
              Secure authentication with a clean,
              modern interface designed for your next
              full-stack application.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;