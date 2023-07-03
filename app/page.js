import Image from 'next/image'
import Hero from './components/hero'
import Grid from './components/imggrid'
import Ourclub from './components/ourclub'
import Logo from './components/logodes'
import Teetime from './components/teetime'
import Events from './components/events'

export default function Home() {
  return (
    <div>
      <Hero />
      <Ourclub />
      <Logo />
      <Grid />
      <Teetime />
      <Events />
    </div>
  )
}
