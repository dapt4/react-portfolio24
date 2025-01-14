// Skills icons - https://icon-sets.iconify.design/
import { Icon } from '@iconify/react'
import react from './images/logo.png'
import reactQuery from './images/react-query.png'
import vue from './images/vue.png'
import meFoto from './images/me.jpeg'

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from './images/hero-light.jpg'
import HeroDark from './images/hero-dark.jpg'

// Projects Images (add your images to the images directory and import below)
// import Logo from './images/logo.svg'
import GitHubImg from './images/GH.svg'

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = 'dapt4'

// Navbar Logo image
export const navLogo = meFoto

/* Main
 **************************************************************
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null

// Hero images (imported above - lines 8-9)
export { HeroLight as Light }
export { HeroDark as Dark }

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo = `I’m passionate about using technology to build efficient and scalable web 
   applications that make a real impact. My expertise spans Python and TypeScript,
   and front-end frameworks like Angular, React, and Vue. 
   On the backend, I work with Django or Node.js and Express to create robust APIs.
   I also build cross-platform mobile apps using Ionic, Cordova, and Capacitor.
   I enjoy learning and sharing knowledge to help others leverage these tools
   for productivity and innovation.
  `

/* Skills
 **************************************************************
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon='simple-icons:python' className='icon-color display-4' />,
    name: 'Python'
  },
  {
    id: 2,
    skill: <Icon icon='skill-icons:django' className='icon-color display-4' />,
    name: 'Django'
  },
  {
    id: 3,
    skill: (
      <Icon icon='skill-icons:nodejs-dark' className='icon-color display-4' />
    ),
    name: 'Nodejs'
  },
  {
    id: 4,
    skill: <Icon icon='devicon:express' className='icon-color display-4' />,
    name: 'Express'
  },
  {
    id: 5,
    skill: <Icon icon='simple-icons:ionic' className='icon-color display-4' />,
    name: 'Ionic'
  },
  {
    id: 6,
    skill: <Icon icon='logos:cordova' className='icon-color display-4' />,
    name: 'Cordova'
  },
  {
    id: 7,
    skill: <Icon icon='skill-icons:sass' className='icon-color display-4' />,
    name: 'Sass'
  },
  {
    id: 8,
    skill: <Icon icon='fa6-brands:js' className='icon-color display-4' />,
    name: 'Javascript'
  },
  {
    id: 9,
    skill: (
      <Icon
        icon='akar-icons:typescript-fill'
        className='icon-color display-4'
      />
    ),
    name: 'Typescript'
  },
  {
    id: 10,
    skill: <Icon icon='mdi:angular' className='icon-color display-4' />,
    name: 'Angular'
  },
  {
    id: 11,
    skill: <Icon icon='mdi:react' className='icon-color display-4' />,
    name: 'React'
  },
  {
    id: 12,
    skill: <Icon icon='carbon:logo-vue' className='icon-color display-4' />,
    name: 'Vue'
  },
  {
    id: 13,
    skill: (
      <Icon icon='akar-icons:redux-fill' className='icon-color display-4' />
    ),
    name: 'Redux'
  },
  {
    id: 14,
    skill: <Icon icon='bi:git' className='icon-color display-4' />,
    name: 'Git'
  },
  {
    id: 15,
    skill: (
      <Icon icon='fa6-brands:square-github' className='icon-color display-4' />
    ),
    name: 'GitHub'
  },
  {
    id: 16,
    skill: <Icon icon='mdi:eslint' className='icon-color display-4' />,
    name: 'Eslint'
  },
  {
    id: 17,
    skill: <Icon icon='lucide:ellipsis' className='icon-color display-4' />,
    name: 'And more...'
  }
]

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = 'https://dapt4.github.io/react-cv-resume-2025/'

/* Projects
 **************************************************************
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = [
  'react-hero-app',
  'vue_sorting_hat',
  'podcastapp'
]

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: 'react-hero-app',
    image: react,
    homepage: 'https://astonishing-naiad-95d8b4.netlify.app/'
  },
  {
    name: 'vue_sorting_hat',
    image: vue,
    homepage: 'https://vuesortinghat.netlify.app/'
  },
  {
    name: 'podcastapp',
    image: reactQuery,
    homepage: 'https://podcastdapt4.netlify.app/'
  }
]

/* Contact Info
 **************************************************************
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = 'https://formspree.io/f/xeoqjzee'

// Footer icons theme (light or dark)
export const footerTheme = 'dark'
