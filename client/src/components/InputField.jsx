function InputField({ 
  label, 
  name,
  type = "text", 
  placeholder, 
  value, 
  onChange 
}) {
  return (
    <div className="flex flex-col gap-1.5 sm:gap-2 mb-4 sm:mb-5">

      <label
        className="
          text-xs
          sm:text-sm
          font-medium
          text-[#1F1F1F]
        "
      >
        {label}
      </label>


      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="
          w-full

          px-4
          sm:px-5

          py-3
          sm:py-3.5

          rounded-lg
          sm:rounded-xl

          bg-white/60
          backdrop-blur-md

          border
          border-gray-300

          text-sm
          sm:text-base

          text-[#1F1F1F]

          placeholder:text-gray-400

          outline-none

          transition-all
          duration-300

          focus:border-[#B87333]
          focus:ring-2
          focus:ring-[#B87333]/20
        "
      />

    </div>
  );
}

export default InputField;