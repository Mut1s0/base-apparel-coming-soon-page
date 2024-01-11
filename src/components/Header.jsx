import { logo } from "../assets";

function Header() {
    return(

        <header>

            <div className="max-w-[90%] mx-auto py-[70px]">

                <img src={logo} alt="logo" className="w-[170px]"/>

            </div>

        </header>
    )
}

export default Header;