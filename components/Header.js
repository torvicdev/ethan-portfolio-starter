import Link from 'next/link'
import Socials from '../components/Socials'

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex flex-wrap items-center px-16 xl:px-0 xl:h-[90]">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={'/'}>
            <h1 className="text-4xl">
              Victor <span className="font-thin">Silva</span>
              <span className=" text-red-500">.</span>
            </h1>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  )
}

export default Header
