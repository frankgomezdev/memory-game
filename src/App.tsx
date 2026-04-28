import MemoryGame from "./components/MemoryGame"


function App() {
  
  const pokemonImages = [
    'https://pkmncards.com/wp-content/uploads/en_US-SL-078-mewtwo_gx.jpg',
    'https://pkmncards.com/wp-content/uploads/en_US-SWSH7-215-umbreon_vmax.png',
    'https://pkmncards.com/wp-content/uploads/svbsp_en_131_std.png',
    'https://pkmncards.com/wp-content/uploads/sv2_en_203.png',
    'https://pkmncards.com/wp-content/uploads/svbsp_en_085_std.png',
    'https://pkmncards.com/wp-content/uploads/en_US-SWSH11-186-giratina_v.png'
  ]
  return (
    <MemoryGame images={pokemonImages}/>
  )
}

export default App
