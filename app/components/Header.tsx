import Logo from "./Logo";
import Link from 'next/link';

interface NavItem {
    name: string
    link: string
}
const nav: NavItem[] = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'Portfolio',
            link: '/#portfolio'
        },
        {
            name: 'Blog',
            link: '/blog'
        }
    ]

export default function Header () {
    return (
        <header className="flex bg-slate-800 items-center justify-between h-20 lg:max-w-6xl mx-auto px-5 xl:px-5">
           <Link href="/"><Logo/></Link>
           <ul className="flex items-center space-x-2">
           {
            nav.map((n, index) => {
                return (
                    <li key={index}>
            <Link
                href={n.link}
                className="inline-block text-slate-200 text-xs lg:text-base px-2 py-2 rounded-full hover:text-blue-800 transition-all duration-300"
            >
                {n.name}
            </Link>
                </li>
                )
            })
           }
           </ul>
        </header>
    )
}