import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import Header from './components/Header/Header'
import MyListPage from './pages/MyListPage'
import SearchResultsPage from './pages/SearchResultsPage'
import Footer from './components/Foolter/Foolter'
import MoviesPage from './pages/MoviesCatalogPage'
import TvShowsPage from './pages/TvShowsCatalogPage'

import LoginPage from './pages/LoginPage'
// import HalloweenCollectionPage from './pages/CollectionPage';
import Home from './pages/Home'

function App() {

  return (
   <div className="App">
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='home' element={<Home/>} />
        <Route path='filmes' element={<MoviesPage/>} />
        <Route path='series' element={<TvShowsPage />}/>
        {/* <Route path='celebridades' element={<Celebridades/>} /> */}
        <Route path='searchresultspage' element={<SearchResultsPage />} />
        <Route path='mylistpage' element={<MyListPage />} />
        {/* <Route path='collectionpage' element={<HalloweenCollectionPage/>} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
   </div>
  )
}
export default App;