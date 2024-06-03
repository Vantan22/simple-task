import Blue from '@assets/image/ImgCountersWave/Blue.svg'
import Green from '@assets/image/ImgCountersWave/Green.svg'

const listWidget = [
  {
    number: '345',
    title: 'New tasks',
    img: Blue,
  },
  {
    number: '128',
    title: 'Tasks Done',
    img: Green,
  },
]

const listTaskAndEvent = [
  {
    title: 'Pending tasks',
    typeTask: 'Due date',
    date: "8 Dec 2024",
    label: 'Design search page',
    content: 'This free AI powered Instagram caption generator will create the perfect caption for your photo and help you get more likes.',
  },
  {
    title: 'Upcoming events',
    typeTask: 'Event date',
    date: "8 Dec 2024",
    label: 'Meeting about website design',
    content:"Email is a powerful marketing tool. Email generator helps you write more effective marketing emails in minutes.",
  },
]


export { listWidget ,listTaskAndEvent}
