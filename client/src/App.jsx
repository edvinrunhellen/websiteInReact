import './App.css'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'

// pages
import Cards from './pages/Cards'
import Checkout from './pages/Checkout'
import Faq from './pages/Help/Faq'
import Contact from './pages/Help/Contact'
import NotFound from './pages/NotFound'
import Profiles, { profilesLoader } from './pages/profiles/Profiles'
import ProfileDetails, { ProfileDetailsLoader } from './pages/profiles/ProfileDetails'
import ProfilesError from  './pages/profiles/ProfilesError'

// layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import ProfilesLayout from './layouts/ProfilesLayout'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Cards />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="help" element={<HelpLayout />}>
                <Route path="faq" element={<Faq />} />
                <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="profiles" element={<ProfilesLayout />} errorElement={<ProfilesError />}>
                <Route index element={<Profiles />} loader={profilesLoader} />
                <Route
                    path=":id"
                    element={<ProfileDetails />}
                    loader={ProfileDetailsLoader}
                />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

function App() {
    return <RouterProvider router={router} />
    
}

export default App
