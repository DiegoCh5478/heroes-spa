import { Routes, Route } from 'react-router-dom'
import { Navbar } from '../../ui'

export const HeroesRoutes = () => {
  return (
    <>  
        <Navbar></Navbar>

        <Routes>

            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DcPage />} />

            <Route path="/" element={<Navigate to='/marvel'/>}/>

        </Routes>
    </>
  )
}
