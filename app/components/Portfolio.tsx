import { AiOutlineLink } from "react-icons/ai";
import BlurImage from "./BlurImage";

interface PortfolioItem {
    title: string;
    image: string;
    description: string;
    tech: string[];
    link: string;
  }
  
  const portfolio: PortfolioItem[] = [
    {
      title: '(SPA) Video Editor',
      image: '/images/mindmovies.webp',
      description: 'Creation Kit is a fantastic tool that helps you create a short, 3-minute video vision board of your dream life. It\'s like watching a movie that features powerful affirmations, beautiful images, motivating videos, and uplifting music which gives you a positive mindset.',
      tech: ['Vue.js', 'JavaScript', 'Quasar Framework', 'AWS', 'PWA'],
      link: 'https://platinum.mindmovies.com/'
    },
    {
      title: 'Community Service Manager',
      image: '/images/ammecs.webp',
      description: 'Is a Web app, a powerful tool for managing the sale of medical insurance policies. It offers insurance agents a streamlined platform to customize and sell policies, as well as track sales and revenue. The user-friendly interface makes managing sales a breeze.',
      tech: ['Django', 'Python', 'Vue.js', 'JavaScript', 'Quasar Framework'],
      link: ''
    },
    {
      title: 'Housettel',
      image: '/images/housettel.webp',
      description: 'HOUSETTEL is a one-stop-shop for new-build housing listings in Spain. This web portal simplifies the search process by gathering all available options for you to browse, compare, and consider at your leisure.',
      tech: ['Django', 'Python', 'Vue.js', 'JavaScript', 'Quasar Framework'],
      link: 'https://www.housettel.com/en/'
    },
    {
      title: 'MY Booking engine',
      image: '/images/my-booking.webp',
      description: 'Is designed to simplify the booking process for guests and hotels alike. Built using Vue.js and TypeScript, it provides a flexible and scalable solution that can cater to the needs of hotels of any size.',
      tech: ['Vue.js', 'TypeScript', 'Quasar Framework', 'Vuex'],
      link: 'https://mybooking.com.es/?client_id=12&client_secret=ZtgRLX1FJSSfr4fd3LUfY0mKK1AlLvhn6TuQoBA1'
    },
    {
      title: 'Syncbed',
      image: '/images/syncbed.webp',
      description: 'Syncbed is a feature-rich hotel software that simplifies the complexity of managing your booking calendars. It synchronizes and updates your vacation property calendar automatically across sites such as Airbnb, Booking, etc.',
      tech: ['Vue.js', 'JavaScript', 'Quasar Framework', 'Django', 'Python'],
      link: 'https://www.syncbed.com/'
    },
    {
      title: 'Vufink',
      image: '/images/vufink.webp',
      description: 'VuFink is a powerful web application designed to simplify the management of community organizations.',
      tech: ['Vue.js', 'JavaScript', 'Quasar Framework', 'Django', 'Python'],
      link: 'https://www.vuestrafinca.com/'
    }
  ]

export default function Portfolio () {
    return (
        <section id="portfolio" className="mx-auto lg:max-w-6xl">
            <div className="max-w-screen-xl px-0 py-8 mx-auto sm:px-2 sm:py-12 lg:px-8">
                <header className="text-center">
                    <h2 className="text-xl font-bold text-slate-800 sm:text-3xl">
                        Latest Projects
                    </h2>
                </header>
                <ul className="grid px-5 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                {
                    portfolio.map((p, index) => {
                        return (
                            <li key={index}>
                            <span className="block overflow-hidden pb-2 group rounded-md border-2">
                            <BlurImage image={p.image}/>
                                <div className="relative pt-3 px-2">
                                <h3
                                className="text-md font-bold text-slate-900"
                                >
                                {p.title }
                                </h3>
                                
                                <div className="mt-2 pb-2">
                                <ul className="flex items-center space-x-1 flex-wrap">
                                {
                                  p.tech.map((tech, index) => {
                                    return (
                                      <li key={index} className="inline-block
                                      px-2 py-1 mt-2
                                      bg-slate-700 text-slate-100
                                      rounded-full text-xs">
                                        { tech }
                                      </li>
                                    )
                                  })
                                }
                                </ul>
                                </div>
                                <div className="mt-2 pb-2">
                                <p className="tracking-wider text-gray-900"> { p.description }</p>
                                </div>
                                {
                                p.link.length > 0 ? (
                                    <div className="mt-1 pb-2 mb-2" >
                                        <a href={p.link} target="_blank" className="flex float-left">
                                        View <AiOutlineLink className="ml-2 mt-1"/>
                                        </a>
                                    </div>
                                ) : null
                                }
                            </div>
                            </span>
                        </li>
                        )
                    })
                }
                </ul>
            </div>
        </section>
    )
}