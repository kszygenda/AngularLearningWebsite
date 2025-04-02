import {kuka_photo} from './photos/kuka_photo';
import {stm_photo} from './photos/stm_photo';
import {website_photo} from './photos/personal_website_photo';
type ProjectMenuItem = {
  title: string,
  description: string,
  photo: string,
  url: string,
  languages: Array<string>,
}

export const cards: ProjectMenuItem[] = [
  {
    title: "Laser cut element sorter",
    description: "Engineer thesis: Fully automated sorting metal cut elements, integrated with industrial manipulator and hand built computer vision system for quality control. ",
    photo: kuka_photo,
    url: 'https://github.com/R3K77/Praca-inzynierska---sortowanie-elementow-wycinanych-laserowo',
    languages: ['Python, Matlab, KRL'],
  },
  {
    title: "Miniature room automatic temperature control",
    description: "STM32 Embedded application for automatic room temperature control, with physical interface and GUI application",
    photo: stm_photo,
    url: 'https://github.com/kszygenda/STM32-Mini-room-Automatic-temperature-Control',
    languages: ['C'],
  },
  {
    title: "Personal Website",
    description: "Vue + Vuetify personal website project to learn composition API",
    photo: website_photo,
    url: 'https://kszygenda.github.io/personal-website/Home',
    languages: ['Vue, Html, Css, Sass, JavaScript'],
  },
]
