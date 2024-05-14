import IconDribbble from '../assets/image/IconLatestProjects/Dribbble.svg'
import IconDropbox from '../assets/image/IconLatestProjects/Dropbox.svg'
import IconEnvanto from '../assets/image/IconLatestProjects/Envanto.svg'
import IconFigma from '../assets/image/IconLatestProjects/Figma.svg'
import IconGoogle from '../assets/image/IconLatestProjects/Google.svg'
import IconAllApps from '../assets/image/IconNavigation/IconAllApps.svg'
import IconCalendar from '../assets/image/IconNavigation/IconCalendar.svg'
import IconContacts from '../assets/image/IconNavigation/IconContact.svg'
import IconDashBoard from '../assets/image/IconNavigation/IconDashboard.svg'
import IconKaban from '../assets/image/IconNavigation/IconKaban.svg'
import IconProject from '../assets/image/IconNavigation/IconProject.svg'
import IconTasks from '../assets/image/IconNavigation/IconTasks.svg'

const listNavigation = [
  {
    icon: IconDashBoard,
    label: 'Dashboard',
    to: '/dashboard',
  },
  {
    icon: IconProject,
    label: 'Projects',
    to: '/projects',
  },
  {
    icon: IconTasks,
    label: 'Tasks',
    to: '/tasks',
  },
  {
    icon: IconKaban,
    label: 'Kaban Desk',
    to: '/kaban-desk',
  },
  {
    icon: IconCalendar,
    label: 'Calendar',
    to: '/calendar',
  },
  {
    icon: IconContacts,
    label: 'Contacts',
    to: '/contacts',
  },
  {
    icon: IconAllApps,
    label: 'All Apps',
    to: '/all-apps',
  },
]
const lastestProjects = [
  {
    icon: IconDribbble,
    label: 'UI/UX Inspiration',
  },
  {
    icon: IconEnvanto,
    label: 'Theme Development',
  },
  {
    icon: IconDropbox,
    label: 'Campaing Design',
  },
  {
    icon: IconGoogle,
    label: 'Content Creation',
  },
  {
    icon: IconFigma,
    label: 'SaaS Template Design',
  },
]
export { listNavigation, lastestProjects }
