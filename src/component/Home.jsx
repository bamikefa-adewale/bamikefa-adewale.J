const Home = () => {
  const profile =
    "https://res.cloudinary.com/dbrub0d6r/image/upload/v1741016876/Bamtech_blusza.jpg";

  return (
    <section
      id="home"
      className="flex flex-col font-outfit items-center gap-6 sm:gap-9  px-4"
    >
      <img
        src={profile}
        alt="profile"
        className="size-60 md:size-80 lg:size-96 rounded-full"
      />
      <h1 className="text-center font-semibold text-[30px] text-white sm:text-[40px] md:text-[50px] w-[90%] sm:w-[70%] md:w-[50%]">
        <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
          I'm Adewale Bamikefa,
        </span>{" "}
        a Software Developer specializing in scalable backend systems and
        production-grade applications.
      </h1>
      <p className="text-[18px] text-gray-50 sm:text-[16px] md:text-[20px] leading-7 sm:leading-8 text-center w-[95%] sm:w-[80%] md:w-[60%]">
        I engineer robust backend services using NestJS, TypeScript, and PostgreSQL,
        building real-time systems with WebSockets, event-driven architectures,
        and financial-grade reliability. Experienced in designing scalable APIs,
        optimizing database performance, and deploying production systems that
        handle high-traffic operations with confidence.
      </p>
      <div className="flex  items-center gap-4 sm:gap-6 text-[16px] sm:text-[24px]">
        <a
          href="https://wa.me/2348166176457"
          target="_blank"
          rel="noopener noreferrer"
          className="py-[10px] sm:py-[20px] capitalize px-[30px] sm:px-[50px] cursor-pointer rounded-full bg-gradient-to-r text-white from-primary to-secondary hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
        >
          Connect with me
        </a>
        <a
          href="/Bamikefa_Fullstack_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border py-[10px] text-white hover:text-black sm:py-[20px] capitalize px-[30px] sm:px-[50px] cursor-pointer rounded-full hover:bg-slate-200 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg inline-block text-center"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
