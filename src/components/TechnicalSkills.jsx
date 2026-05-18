import javaImg from '../assets/java.png'
import htmlImg from '../assets/html5.png'
import cssImg from '../assets/css-3.png'
import jsImg from '../assets/java-script.png'
import reactImg from '../assets/react.png'
import gitImg from '../assets/git.png'
import nextImg from '../assets/nextjs.svg'
import nodeImg from '../assets/nodejs.svg'
import mongoImg from '../assets/mongodb.svg'
import tsImg from '../assets/typescript.svg'
import tailwindImg from '../assets/tailwindcss.svg'
import angularImg from '../assets/angular.svg'
import pythonImg from '../assets/python.svg'

const skillCategories = [
  {
    category: 'Frontend Development',
    icon: 'bx bx-code-alt',
    skills: ['ReactJS', 'NextJS', 'AngularJS', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Redux', 'Tailwind CSS'],
  },
  {
    category: 'Backend Development',
    icon: 'bx bx-server',
    skills: ['NodeJS', 'ExpressJS', 'Java', 'REST APIs'],
  },
  {
    category: 'Database Management',
    icon: 'bx bx-data',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL', 'Database Design'],
  },
  {
    category: 'UI Component Libraries',
    icon: 'bx bx-palette',
    skills: ['Shadcn UI', 'MUI (Material UI)', 'Accent UI', 'Chakra UI', 'DaisyUI'],
  },
  {
    category: 'Other Languages',
    icon: 'bx bx-terminal',
    skills: ['C/C++', 'Core Java', 'Python'],
  },
  {
    category: 'CS Fundamentals',
    icon: 'bx bx-book',
    skills: ['Data Structures', 'Algorithms', 'OOP', 'RBAC', 'SSR', 'Lazy Loading'],
  },
]

const techIcons = [
  { img: reactImg,    name: 'React' },
  { img: nextImg,     name: 'Next.js' },
  { img: angularImg,  name: 'Angular' },
  { img: jsImg,       name: 'JavaScript' },
  { img: tsImg,       name: 'TypeScript' },
  { img: htmlImg,     name: 'HTML5' },
  { img: cssImg,      name: 'CSS3' },
  { img: tailwindImg, name: 'Tailwind CSS' },
  { img: nodeImg,     name: 'Node.js' },
  { img: mongoImg,    name: 'MongoDB' },
  { img: javaImg,     name: 'Java' },
  { img: pythonImg,   name: 'Python' },
  { img: gitImg,      name: 'Git' },
]

export default function TechnicalSkills() {
  return (
    <section className="skills" id="skills">
      <div className="section-title">
        <h2>Technical <span>Skills</span></h2>
        <p>Full stack technologies I work with</p>
        <div className="title-line" />
      </div>

      {/* Icon strip */}
      <div className="skills-container">
        {techIcons.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <img src={skill.img} alt={skill.name} />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Categorised skill tags */}
      <div className="skill-categories">
        {skillCategories.map((cat) => (
          <div className="skill-category-card" key={cat.category}>
            <div className="skill-cat-header">
              <i className={cat.icon} />
              <h4>{cat.category}</h4>
            </div>
            <div className="skill-tags">
              {cat.skills.map((s) => (
                <span className="skill-tag" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
