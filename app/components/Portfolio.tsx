import { AiOutlineLink } from 'react-icons/ai';
import BlurImage from './BlurImage';

interface PortfolioItem {
  title: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
}

const portfolio: PortfolioItem[] = [
  {
    title: 'Remoto List App',
    image: '/images/remotolist.jpg',
    description:
      'RemotoList - is an Android app that seamlessly connects you to high-quality job opportunities around the world. Enjoy the flexibility that remote work offers',
    tech: ['Vue.js', 'TypeScript', 'Quasar Framework', 'Capacitor'],
    link: 'https://play.google.com/store/apps/details?id=com.remotolist.app&hl=en&gl=US',
  },
  {
    title: '(SPA) Video Editor',
    image: '/images/mindmovies.jpg',
    description:
      "Creation Kit is a fantastic tool that helps you create a short, 3-minute video vision board of your dream life. It's like watching a movie that features powerful affirmations, beautiful images, motivating videos, and uplifting music which gives you a positive mindset.",
    tech: ['Vue.js', 'JavaScript', 'Quasar Framework', 'AWS', 'PWA'],
    link: 'https://platinum.mindmovies.com/',
  },
  {
    title: 'Community Service Manager',
    image: '/images/ammecs.jpg',
    description:
      'Is a Web app, a powerful tool for managing the sale of medical insurance policies. It offers insurance agents a streamlined platform to customize and sell policies, as well as track sales and revenue. The user-friendly interface makes managing sales a breeze.',
    tech: ['Django', 'Python', 'Vue.js', 'JavaScript', 'Quasar Framework'],
    link: '',
  },
  {
    title: 'Srnity Haven',
    image: '/images/srheaven.jpg',
    description:
      "Serenity Haven is a consultancy firm that believes in creating meaningful connections with clients and helping them achieve their full potential. The firm's focus on trust, empathy, and leadership has helped it to build a strong reputation for providing exceptional services.",
    tech: ['Vue.js', 'TypeScript', 'NuxtJs', 'Netlify', 'Tailwind'],
    link: 'https://srnityhaven.com/',
  },
  {
    title: 'Housettel',
    image: '/images/housettel.jpg',
    description:
      'HOUSETTEL is a one-stop-shop for new-build housing listings in Spain. This web portal simplifies the search process by gathering all available options for you to browse, compare, and consider at your leisure.',
    tech: ['Django', 'Python', 'Vue.js', 'JavaScript', 'Quasar Framework'],
    link: 'https://www.housettel.com/en/',
  },
  {
    title: 'MY Booking engine',
    image: '/images/my-booking.jpg',
    description:
      'Is designed to simplify the booking process for guests and hotels alike. Built using Vue.js and TypeScript, it provides a flexible and scalable solution that can cater to the needs of hotels of any size.',
    tech: ['Vue.js', 'TypeScript', 'Quasar Framework', 'Vuex'],
    link: 'https://mybooking.com.es/?client_id=12&client_secret=ZtgRLX1FJSSfr4fd3LUfY0mKK1AlLvhn6TuQoBA1',
  },
  {
    title: 'Syncbed',
    image: '/images/syncbed.jpg',
    description:
      'Syncbed is a feature-rich hotel software that simplifies the complexity of managing your booking calendars. It synchronizes and updates your vacation property calendar automatically across sites such as Airbnb, Booking, etc.',
    tech: ['Vue.js', 'JavaScript', 'Quasar Framework', 'Django', 'Python'],
    link: 'https://www.syncbed.com/',
  },
  {
    title: 'Vufink',
    image: '/images/vufink.jpg',
    description:
      'VuFink is a powerful web application designed to simplify the management of community organizations.',
    tech: ['Vue.js', 'JavaScript', 'Quasar Framework', 'Django', 'Python'],
    link: 'https://www.vuestrafinca.com/',
  },
];

export default function Portfolio() {
  return (
    <section id='portfolio' className='mx-auto lg:max-w-6xl'>
      <div className='max-w-screen-xl px-0 py-8 mx-auto sm:px-2 sm:py-12 lg:px-8'>
        <header className='text-center'>
          <h2 className='text-xl font-bold text-slate-800 sm:text-3xl'>
            Latest Projects
          </h2>
        </header>
        <ul className='grid px-5 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3'>
          {portfolio.map((p, index) => {
            return (
              <li key={index}>
                <span className='block overflow-hidden pb-2 group rounded-lg border-2'>
                  <BlurImage image={p.image} />
                  <div className='relative pt-3 px-2'>
                    <h3 className='text-md font-bold text-slate-900'>
                      {p.title}
                    </h3>

                    <div className='mt-2 pb-2'>
                      <ul className='flex items-center space-x-1 flex-wrap'>
                        {p.tech.map((tech, index) => {
                          return (
                            <li
                              key={index}
                              className='inline-block
                                      px-2 py-1 mt-2
                                      bg-slate-700 text-slate-100
                                      rounded-full text-xs'>
                              {tech}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className='mt-2 pb-2'>
                      <p className='tracking-wider text-gray-900'>
                        {' '}
                        {p.description}
                      </p>
                    </div>
                    {p.link.length > 0 ? (
                      <div className='mt-1 pb-2 mb-2'>
                        <a
                          href={p.link}
                          target='_blank'
                          className='flex float-left text-slate-800'>
                          View <AiOutlineLink className='ml-2 mt-1' />
                        </a>
                      </div>
                    ) : null}
                  </div>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
