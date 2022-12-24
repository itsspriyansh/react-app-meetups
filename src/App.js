import { Route, Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorite";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path = "/" element={<AllMeetupsPage />}></Route>
        <Route path = "/favorites" element={<FavoritesPage />}></Route>
        <Route path = "/newmeetup" element={<NewMeetupPage />}></Route>
      </Routes>
    </Layout>
  ) 
}

export default App;

