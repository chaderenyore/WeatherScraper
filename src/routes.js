import About from './components/about'
import Help from './components/help'
import navbar from "./components/navbar";
// import App from "./App";
import Home from "./components/Home";

export const routes = [
  {
    path: '',
    components: {
      default: Home,
      'navbar': navbar,
    }
  },
  {
    path:'/about',
    name: 'About',
    components: {
      default: About,
      'about-navbar': navbar
    }
  },
  {
    path: '/help',
    name: 'Help',
    components: {
      default: Help,
      'help-navbar': navbar
    }
  },
  {
    path: '/owner',
    redirect: '/About'
  }
]
