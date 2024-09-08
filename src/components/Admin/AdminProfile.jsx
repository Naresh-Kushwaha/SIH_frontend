
import Header2 from '../Header2'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

export default function AdminProfile() {
  return (
    <Header2 navigation={navigation}></Header2>

  )
    
}
