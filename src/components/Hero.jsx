/* eslint-disable react/no-unescaped-entities */
import Form from "./Form";

function Hero() {

    return(

        <article>

            <div>

                <div className="text-center">

                    <h1 className="text-[4rem] font-semiBold leading-[70px] uppercase text-darkGrayishRed"><span className="text-desaturatedRed font-light">we're</span> <br /> coming <br /> soon</h1>

                    <p className="text-desaturatedRed font-regular">Hello fellow shoppers! We're currently building <br className="block md:hidden"/> our new <br className="hidden md:block"/> fashion store. Add your email below to <br className="block md:hidden"/> stay up-to-date with <br className="hidden md:block"/> announcements and our <br className="block md:hidden"/> launch deals</p>

                </div>

                <div>

                    <Form />

                </div>

            </div>

        </article>
    )
}

export default Hero;