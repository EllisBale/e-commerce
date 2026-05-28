import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="relative overflow-hidden min-h-screen flex flex-col lg:flex-row" >

      {/* IMAGE */}
      <picture className="relative w-full h-[50vh] lg:absolute lg:h-full select-none">
        <source
          type="image/png"
          srcSet="
            /images/phone_header_400.png 400w,
            /images/phone_header_800.png 800w,
            /images/phone_header_1200.png 1200w,
            /images/phone_header.png 1600w
          "
        />

        <img
          src="/images/phone_header_1200.png"
          alt="Smartphone hero image"
          loading="eager"
          decoding="async"
          draggable="false"
          className="
            absolute inset-0
            w-full h-full
            object-cover
            select-none
          "
        />
      </picture>

      {/* OVERLAY CONTENT */}
      {/* Content */}
      <div className="relative flex flex-col lg:flex-row  items-center py-8 lg:py-0 shrink-0 justify-center">
        {/* text container */}
        <div className="relative z-[1] mt-[1vw] mx-10  lg:ml-[20vw] lg:mr-auto justify-center items-center">
          {/* text inner container */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-shadow-white-950">
              Premium Smartphones
            </h1>
            <p className="text-xl mb-5 leading-[2]">Sophisticated engineering, crafted without compromise.</p>
            <Link to="/phones" className=" bg-purple-700 hover:bg-purple-600 text-white mt-4 py-3 px-4 rounded-full cursor-pointer transition-transform duration-200 hover:scale-110">
              Browse
            </Link>
          </div>
        </div>
      </div>
      
    </header>
  );
};

export default Header;