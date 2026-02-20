import Contact from './contact'
import './index.css'
import WhyUs from './WhyMe'

function App() { 
  return (
    <div className="font-sans">

      <section className="relative h-screen overflow-hidden">
        <div className="h-screen">
          <img
            src="Main.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="font-serif relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
            <h1 className='text-8xl font-bold opacity-70 '>Niks Fenenko</h1>
            <p className='mt-2 text-6xl opacity-70'>Ice Hockey Player</p>
          </div>
          <img 
          src="DawnLogo.svg"
          alt="Tom company Logo"
          className="absolute top-8 right-18 w-20 h-20"
          />
        </div>

        </section>

      <section className="relative h-screen overflow-hidden">


        <img
          src="/Close.jpg"
          alt="Me"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>


        <div className="absolute bottom-10 left-10 z-10 text-white font-serif">
          <ul className=" mb-6">
            <ul className='absolute bottom-150 left-40 text-6xl'>About Me</ul>
            <ul className='absolute bottom-137 text-3xl'>Professional Ice Hockey Player (2010-Present)</ul>
          </ul>
          <ul className="relative mt-3 space-y-2 bottom-10 text-3xl">
            <li>• Played in the junior league Baie-Comeau Drakkar (Canada) from 2021 to 2024</li>
            <li>• Played for Jokerit (Finland) during the 2024–2025 season</li>
            <li>• Currently playing for Mogo in the Latvian Hockey League</li>
            <li>• Multiple participant of IIHF World Junior Championships (U20) representing Latvia</li>
            <li>• Invited to the Latvian National Team</li>
          </ul>

          <p className=" max-w-xl leading-relaxed">

          </p>

          

        </div>
      </section>
      <WhyUs/> 
      <Contact/>
     
        
      </div>

  )
}
export default App