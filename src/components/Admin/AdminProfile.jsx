
import Header2 from '../Header2'

const navigation = [
  { name: 'Home', href: '/adminprofile', current: true },
  { name: 'Dashbord', href: '/admindashbord', current: false },
  { name: 'Connect', href: '/generatemeeting', current: false },

  { name: 'Add Event', href: '/eventcontroler', current: false },
]

export default function AdminProfile() {
  return (
    <Header2 navigation={navigation}></Header2>

  )
    
}
