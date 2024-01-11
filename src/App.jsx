import { Header, Hero, HeroIllustration } from "./components";


function App() {

  return(

    <main>

      <div className="font-josefinSans">

        <section>

          <Header />

        </section>

        <section>

          <HeroIllustration/>

        </section>

        <section>

          <Hero/>

        </section>

      </div>

    </main>

  )
}

export default App;