import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Error from './pages/Error404'

import Dashboard from './pages/Dashboard'

import Analytics from './pages/Dashboard/Analytics'
import Announcement from './pages/Dashboard/Announcement'
import Faculties from './pages/Dashboard/Faculties'
import Profile from './pages/Dashboard/Profile'
import Schedule from './pages/Dashboard/Schedule'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/dashboard' element={<Dashboard />}>
          <Route index path='announcement' element={<Announcement/>}/>
          <Route path='analytics' element={<Analytics/>}/>
          <Route path='faculties' element={<Faculties/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='schedule' element={<Schedule/>}/>

        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;