import { heroDesktop, heroMobile } from "../assets";

function HeroIllustration() {

    return(

        <article>

            <div>

                <picture>

                    <source media="(min-width: 1024px)" srcSet={heroDesktop} />

                    <img src={heroMobile} alt="Hero Illustration" className="w-full"/>

                </picture>

            </div>

        </article>

    )
}

export default HeroIllustration;