/* eslint-disable react/prop-types */


const NavMenu = ({ navitems, activeItem, setActiveItem, handleScroll }) => {
  return (
    <ul className="flex flex-col md:flex-row gap-2 md:gap-20 text-center md:text-left">
      {navitems.map((item, index) => (
        <li
          key={index}
          onClick={() => {
            setActiveItem(item.name);
            handleScroll(item.link);
          }}
          className={`text-white cursor-pointer px-4 py-2 ${
            activeItem === item.name
              ? "border-b-2 border-pink-100"
              : "border-b-4 border-transparent"
          }`}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
