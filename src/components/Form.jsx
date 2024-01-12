import { iconArrow } from "../assets";

function Form() {

    return(

        <form>

            <div className="relative max-w-[100%] w-[600px] mx-auto lg:ml-0">

                <div>

                    <input type="email" placeholder="Email Address" className={`border border-desaturatedRed w-full py-5 pl-10 rounded-[40px] placeholder:text-desaturatedRed`} />

                </div>

                <button type="submit" className="absolute top-[-2px] right-[-1px] bg-desaturatedRed rounded-full w-[90px] h-[70px] flex items-center justify-center"><img src={iconArrow} alt="Icon Arrow" className="w-[15px]"/></button>

            </div>

        </form>

    )
}

export default Form;