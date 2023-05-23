import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Portfolio from "@/app/components/Portfolio";

const navFollow = [
  {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/javiersr88/',
      icon: 'AiFillLinkedin'
  },
  {
      name: 'Github',
      link: 'https://github.com/cusitosr88',
      icon: 'AiFillGithub'
  }
]

export default function Home() {
  return (
    <main className="mx-auto px-0 lg:px-0 pt-14 lg:pt-12 h-3/4">
      <div>
        <h1 className="capitalize text-slate-100 font-light text-[38px] lg:text-4xl text-center leading-snug">
            Hello, I&rsquo;m Javier<br/>
            <span className="font-extrabold lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-500 to-blue-500">
                Web developer
            </span>
        </h1>
        <div className="mx-auto lg:max-w-6xl mt-4 lg:mt-4 text-center space-x-4 px-10">
            <span className="text-slate-100 lg:text-lg">Discover how I can help you build 
            high-quality and efficient web applications using my skills in 
            Vuejs, Quasar Framework, Nuxt, Pinia, Vite, Nextjs, Javascript, HTML, CSS, 
            Django Rest Framework, Python, Git, and Linux. Explore my portfolio 
            and learn more about my experience and work.
            </span>
        </div>
        <div className="mt-10 lg:mt-14 text-center space-x-2">
            <div className="text[32] font-bold text-slate-100">Follow me</div><br/>
            <ul className="flex items-center justify-center space-x-2">
              {
                navFollow.map((nav, index) => {
                    return (
                      <li key={index}>
                    <a
                        href={nav.link}
                        target="_blank"
                        className="inline-block px-3 py-2 text-slate-800 bg-slate-200 rounded-full hover:bg-slate-400 transition-all duration-300"
                    >
                    <div className="flex items-center space-x-2">
                      { nav.icon === 'AiFillLinkedin' 
                      ? <AiFillLinkedin size="1.5em"/> : <AiFillGithub size="1.5em"/>}
                      <span className="font-medium"> { nav.name }</span>
                    </div>
                            </a>
                      </li>
                    )
                })
              }
            </ul>
        </div>
        <div className="mt-8 flex flex-wrap lg:pl-4 bg-white">
          <Portfolio/>
        </div>
    </div>
    </main>
  )
}
