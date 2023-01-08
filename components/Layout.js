import NavBar from '../components/core/NavBar'
import Footer from '../components/core/Footer'

const cart = [
  {
    "id": 1,
    "name": "product one",
    "price": 2500,
    "quantity": 1,
    "img": "/img1.jpg",
    "desc": "Loriem ipsium dolor avec konsa timo utas"
  },
  {
    "id": 2,
    "name": "product two",
    "price": 550,
    "quantity": 2,
    "img": "/img2.jpg",
    "desc": "Loriem ipsium dolor avec konsa timo utas"
  },
]

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>
        { children }
      </div>
      <Footer />
    </>
  )
}
