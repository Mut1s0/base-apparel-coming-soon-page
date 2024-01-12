import { logo } from "../assets";

function Header() {
    return(

        <header className="">

            <div className="max-w-[90%] md:w-[700px] mx-auto py-[50px] md:py-[30px] md:pt-[30px] lg:pt-[90px]">

                <img src={logo} alt="logo" className="w-[150px] sm:w-[200px]"/>

            </div>

        </header>
    )
}

export default Header;