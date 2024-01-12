import { Header, Hero, HeroIllustration } from "./components";


function App() {

  return(

    <main>

      <div className="font-josefinSans md:grid md:grid-cols-5 md:grid-rows-3 h-screen">

        <section className="md:col-start-1 md:col-span-3 md:row-end-1">

          <Header />

        </section>

        <section className="md:col-span-2 md:col-end-6 md:row-span-4">

          <HeroIllustration/>

        </section>

        <section className="md:col-start-1 md:col-span-3 md:row-start-1 md:row-end-4">

          <Hero/>

        </section>

      </div>

    </main>

  )
}

export default App;