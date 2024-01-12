/* eslint-disable react/no-unescaped-entities */
import Form from "./Form";

function Hero() {

    return(

        <article className="h-full md:flex md:flex-row items-center">

            <div className="max-w-[90%] md:w-[700px] mx-auto py-[70px] md:py-0">

                <div className="text-center md:text-left flex flex-col gap-5 lg:items-start lg:justify-center">

                    <h1 className="text-[2.5rem] sm:text-[5rem] md:text-[3rem] lg:text-[5.5rem] font-semiBold leading-[60px] sm:leading-[90px] md:leading-[60px] lg:leading-[100px] uppercase text-darkGrayishRed tracking-[15px]"><span className="text-desaturatedRed font-light">we're</span> <br /> coming <br /> soon</h1>

                    <p className="text-desaturatedRed font-regular text-[1rem] sm:text-[1.5rem] md:text-[1.1rem] lg:text-[1.3rem]">Hello fellow shoppers! We're currently building <br className="block md:hidden"/> our new <br className="hidden md:block"/> fashion store. Add your email below to <br className="block md:hidden"/> stay up-to-date with <br className="hidden md:block"/> announcements and our <br className="block md:hidden"/> launch deals</p>

                </div>

                <div className="pt-[50px]">

                    <Form />

                </div>

            </div>

        </article>
    )
}

export default Hero;