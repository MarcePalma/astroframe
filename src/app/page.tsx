import Apod from '@/components/apod/Apod'
import NavBar from '@/components/navigation/NavBar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar/>
      <Apod />
    </main>
  )
}
