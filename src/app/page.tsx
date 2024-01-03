import NavBar from '@/components/navigation/NavBar'
import SolarSystem from '@/components/background/SolarSystem'
import Apod from '@/components/apod/Apod'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <SolarSystem />
      <Apod/>
    </main>
  )
}
