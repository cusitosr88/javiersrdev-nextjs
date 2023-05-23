import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
export default function Footer () {
    return (
        <footer className="mt-7 mb-0 pb-5 flex items-center justify-between h-20 mx-auto px-5 text-slate-100">
        <div className="w-1/2 md:w-full">© 2023 Created by JavierDev with ❤️ <br/> Built with Next.js</div>
        <div className="flex items-center justify-center space-x-2">
            <a href="https://www.linkedin.com/in/javiersr88/" target="_blank" className="hover:text-slate-400">
                <AiFillLinkedin size="3em"/>
            </a>
            <a href="https://github.com/cusitosr88" target="_blank" className="hover:text-slate-400">
                <AiFillGithub size="3em"/>
            </a>
        </div>
        </footer>
    )
}