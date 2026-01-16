/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";
import NavMenu from "./NavMenu";

const MobileMenuModal = ({
  navitems,
  activeItem,
  setActiveItem,
  handleScroll,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col items-center  min-h-screen">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white text-2xl focus:outline-none focus:ring-2 focus:ring-primary rounded p-1"
        aria-label="Close navigation menu"
      >
        <FaTimes />
      </button>
      {/* Mobile Nav Menu */}
      <div className="fixed inset-0 mt-40 bg-black bg-opacity-80 z-50 flex flex-col items-center ">
        {" "}
        <NavMenu
          navitems={navitems}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          handleScroll={handleScroll}
        />
      </div>
      {/* Contact Button */}
      <div className="mt-5 hidden">
        <button
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });

            // Close the modal after scrolling
            setTimeout(() => {
              onClose(false);
            }, 500); // Delay closing slightly to allow smooth scrolling
          }}
          className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default MobileMenuModal;
