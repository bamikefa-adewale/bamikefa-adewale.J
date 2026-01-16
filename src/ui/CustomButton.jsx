
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line react/prop-types
const CustomButton = ({ title, onClick, children, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={twMerge(
        "bg-gradient-to-r from-primary to-secondary text-white rounded-full py-[10px] sm:py-[20px] px-[30px] sm:px-[50px] cursor-pointer hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out",
        className
      )}
    >
      {children || title}
    </button>
  );
};

export default CustomButton;
