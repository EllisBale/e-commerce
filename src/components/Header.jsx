const Header = () => {

    return(
        <header className="relative overflow-hidden">
            <picture>
                <source
                    type="image/png"
                    srcSet="
                        /images/phone_header_400.png 400w,
                        /images/phone_header_800.png 800w,
                        /images/phone_header_1200.png 1200w,
                        /images/phone_header_1600.png 1600w,
                    "
                />

                <img 
                    src="phone_header_1200" 
                    alt="Smartphone hero image"
                    loading="eager"
                    decoding="async" 
                    className="h-lvh w-full drop-shadow-2xl"
                />
            </picture>
        </header>
    )
};

export default Header;