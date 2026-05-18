import aconewsImg from '../assets/AconewsSS.png'
import weatherImg from '../assets/WeatherSs.png'
import emiImg from '../assets/EMIss.png'
import dashboardImg from '../assets/dashboard_mockup.png'
import developerImg from '../assets/developer_mockup.png'
import socialImg from '../assets/social_mockup.png'
import mobileImg from '../assets/mobile_mockup.png'

const projects = [
  {
    img: aconewsImg,
    title: 'ACONEWS',
    subtitle: 'Web Application',
    desc: 'Real-time news app built with React using the GNews API. Features category filters, search, pagination, and a dynamic modern UI.',
    link: 'https://aconews-nu.vercel.app',
    tags: ['React', 'API', 'Responsive'],
  },
  {
    img: weatherImg,
    title: 'Weather App',
    subtitle: 'Web Application',
    desc: 'Real-time weather data & forecast via OpenWeather API with smooth animations and mobile-first design.',
    link: 'https://weather-app-z1-tech-lake.vercel.app',
    tags: ['JavaScript', 'API', 'CSS'],
  },
  {
    img: emiImg,
    title: 'EMI Calculator',
    subtitle: 'Finance Tool',
    desc: 'Estimates monthly loan payments with inputs for loan amount, interest rate, tenure, and down payment.',
    link: 'https://emi-calculator-iota.vercel.app',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    img: dashboardImg,
    title: 'TaskFlow Dashboard',
    subtitle: 'Management Tool',
    desc: 'Collaborative task organizer with drag-and-drop kanban boards, real-time sync, and productivity metrics.',
    link: 'https://github.com/kalpanak2203',
    tags: ['React', 'Node.js', 'Socket.io'],
  },
  {
    img: developerImg,
    title: 'ShopSphere API',
    subtitle: 'E-Commerce Backend',
    desc: 'Robust RESTful backend service for multi-vendor online stores with JWT authentication and payment gateways.',
    link: 'https://github.com/kalpanak2203',
    tags: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    img: socialImg,
    title: 'DevConnect',
    subtitle: 'Social Network',
    desc: 'Networking platform for software developers to share posts, host tech discussion groups, and find job roles.',
    link: 'https://github.com/kalpanak2203',
    tags: ['React', 'Redux', 'Express'],
  },
  {
    img: socialImg,
    title: 'ChatSync E2EE',
    subtitle: 'Messaging App',
    desc: 'Instant chat room software with end-to-end custom encryption, file sharing, and online status indicators.',
    link: 'https://github.com/kalpanak2203',
    tags: ['Next.js', 'WebSockets', 'Crypto'],
  },
  {
    img: dashboardImg,
    title: 'FinTrack Pro',
    subtitle: 'Finance App',
    desc: 'Interactive budget manager featuring monthly expense breakdown, responsive charts, and budget limit notifications.',
    link: 'https://github.com/kalpanak2203',
    tags: ['React', 'Chart.js', 'CSS'],
  },
  {
    img: socialImg,
    title: 'MindWrite MD',
    subtitle: 'Publishing Platform',
    desc: 'Lightweight Markdown-powered blogging system with draft storage, read-time calculator, and dark mode toggles.',
    link: 'https://github.com/kalpanak2203',
    tags: ['Next.js', 'Markdown', 'Tailwind'],
  },
  {
    img: developerImg,
    title: 'AuthShield MFA',
    subtitle: 'Security Service',
    desc: 'Independent authorization service implementing multi-factor checks, session revoking, and access logs.',
    link: 'https://github.com/kalpanak2203',
    tags: ['Java', 'Spring Boot', 'JWT'],
  },
  {
    img: dashboardImg,
    title: 'MedSecure Portal',
    subtitle: 'Healthcare Portal',
    desc: 'Role-based access portal for clinical management, securing patient records and doctor appointments.',
    link: 'https://github.com/kalpanak2203',
    tags: ['Angular', 'Node.js', 'SQL'],
  },
  {
    img: mobileImg,
    title: 'GitView REST',
    subtitle: 'Search Engine',
    desc: 'Sleek visual search tool that fetches live stats, commits, and user contributions using the GitHub API.',
    link: 'https://github.com/kalpanak2203',
    tags: ['JavaScript', 'REST API', 'CSS'],
  },
  {
    img: mobileImg,
    title: 'FoodDash Tracker',
    subtitle: 'Food Delivery',
    desc: 'On-demand delivery platform with live order updates, restaurant sorting, and dynamic delivery coordinate maps.',
    link: 'https://github.com/kalpanak2203',
    tags: ['React', 'Google Maps', 'Node'],
  },
]

export default function Projects() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="section-title">
        <h2>Latest <span>Projects</span></h2>
        <p>Things I've built recently</p>
        <div className="title-line" />
      </div>
      <div className="portfolio-content">
        {projects.map((p) => (
          <div className="row" key={p.title}>
            <img src={p.img} alt={p.title} />
            
            {/* Always visible title bar at the bottom */}
            <div className="project-info">
              <h5>{p.title}</h5>
              <span className="project-subtitle">{p.subtitle}</span>
            </div>

            {/* Hover details overlay */}
            <div className="layer">
              <h5>{p.title}</h5>
              <p>{p.desc}</p>
              
              {/* Dynamic project tag pills */}
              <div className="project-tags">
                {p.tags.map((tag) => (
                  <span className="project-tag-pill" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <a href={p.link} target="_blank" rel="noreferrer">
                <i className="bx bx-link-external" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
