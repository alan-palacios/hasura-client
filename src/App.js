import React from 'react'
import Header from './components/Header'
import Movies from './components/Movies'
import MoviesUsers from './components/MoviesUsers'

export default function App() {
  return (
    <div>
      <Header />
      <MoviesUsers />
      <Movies />
    </div>
  )
}