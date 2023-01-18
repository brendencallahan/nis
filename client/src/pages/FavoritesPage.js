import getFavoriteItems from '../utils/getFavoriteItems';
import { useState } from 'react'

export default function FavoritesPage() {

  const [ results ] = useState(getFavoriteItems())


  return (
    results === null ? <p>No favorites saved</p> : <p>Some favorites found</p>
  )
}