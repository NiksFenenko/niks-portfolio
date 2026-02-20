export const Hero = () => {

    return (


        <section className=" h-screen w-full l- overflow-hidden bg-[#0b0d17]">

            <div className="absolute inset-0 z-0">
                <img
                    src="/Main.jpg"
                    className="h-screen w-full object-cover opacity-50"
                    alt="background"
                />

            </div>

            <div className="relative z-10 flex flex-col items-center h-full text-center">

                <h1 className="relative text-center font-bold text-gray-700 font-serif md:text-4xl flex">
                    My CV
                </h1>
            </div>

            <div>

                <img
                    src="/Close.jpg"
                    className="absolute inset-x-0 bottom-0 z-20 rounded-xs mx-auto max-h-[20vh] object-contain"
                    alt="me"
                />

                <img
                    src="DawnLogo.svg"
                    className="absolute bottom-90 mx-10 right-1 size-14"
                    alt="logo"
                />

                <div>
                    <h2 className="font-serif text-gray-700 left-1 px-10 bottom-90 absolute">
                        About Me:
                        Professional Ice Hockey Player (2010 – Present)
                        • Played in the junior league Baie-Comeau Drakkar (Canada) from 2021 to 2024
                        • Played for Jokerit (Finland) during the 2024–2025 season
                        • Currently playing for Mogo in the Latvian Hockey League
                        • Multiple participant of IIHF World Junior Championships (U20) representing Latvia
                        • Invited to the Latvian National Team
                    </h2>
                </div>

                <div>
                    <p className="text-gray-500 tracking-[0.3em] uppercase text-right p-4 font-bold text-sm">
                        N.F
                    </p>
                </div>
            </div>




            <div className="absolute inset-x-0 bottom-0 h-40 from-[#0b0d17] to-transparent z-30" />
        </section>
    );
}


