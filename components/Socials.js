import Link from 'next/link'
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiGithubLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiLinkedinLine,
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link
        href={'https://github.com/torvicdev'}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiGithubLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine />
      </Link>
      <Link href={''} className="hover:text-accent">
        <RiBehanceLine />
      </Link>
    </div>
  )
}

export default Socials
