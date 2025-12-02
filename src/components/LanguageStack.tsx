
import LogoCarousel from "./ui/logo-carousel"



export function LanguageStack() {
  return (
    <div className="space-y-8  py-24">
      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center bg-transparent space-y-8">
        {/* <div className="text-center">
          <h2>
        //   dsds
            The best are already here
          </h2>
          <a href="https://www.newcult.co" target="_blank">
            <h2 >Join new cult</h2>
          </a>
        </div> */}

        <LogoCarousel columnCount={6} />
      </div>
    </div>
  )
}
