export default function HeroSection() {
    return (
        <>
            <div className="pad flex h-screen w-full flex-col items-center justify-start p-10">
                <div className="flex h-fit w-full flex-row items-center justify-between">
                    <h1 className="text-6xl md:text-9xl xl:text-[9vw] xxl:text-[13vw]">
                        Nuaké
                    </h1>
                    <div className="h-30 w-30 rounded-2xl bg-muted p-6 text-center text-lg md:text-4xl"></div>
                </div>

                <div className="flex h-fit w-full flex-row items-center justify-start gap-4 md:gap-[3vw]">
                    <h1 className="xxl:text-[13vw] text-6xl md:text-9xl xl:text-[9vw]">
                        ONG
                    </h1>
                    <p className="max-w-[60ch] text-lg md:text-2xl xl:text-3xl">
                        Car demain c&apos;est deja aujourd&apos;hui.
                    </p>
                </div>

                <div className="flex h-fit w-full flex-row items-center justify-between gap-10 md:gap-[3vw] mt-4">
                    <div className="flex h-fit w-full flex-row items-start justify-start gap-4 ">
                        <p className="max-w-[40ch] text-lg md:text-2xl xl:text-3xl">
                            Construire un avenir durable pour les générations futures.
                        </p>
                        {/* <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl p-2">
                                    Read More
                                </button> */}
                    </div>
                    <h1 className="text-6xl md:text-9xl xl:text-[9vw] xxl:text-[13vw]">Togo</h1>
                </div>
            </div>
        </>
    )
}