import Apod from '@/components/apod/Apod'
import NavBar from '@/components/navigation/NavBar'
import SolarSystem from '@/components/background/SolarSystem'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <SolarSystem />
      <Apod />
    </main>
  )
}
