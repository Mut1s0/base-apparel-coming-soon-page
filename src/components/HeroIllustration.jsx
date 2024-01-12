import { heroDesktop, heroMobile } from "../assets";

function HeroIllustration() {

    return(

        <article className="h-full">

            <div className="h-full">

                <picture className="">

                    <source media="(min-width: 1024px)" srcSet={heroDesktop} />

                    <img src={heroMobile} alt="Hero Illustration" className="w-full h-full"/>

                </picture>

            </div>

        </article>

    )
}

export default HeroIllustration;