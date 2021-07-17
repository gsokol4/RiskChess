import './App.css'
import Tile from './components/Tile.js'

function App () {
  let board =[new Array(2), new Array(2)]
  let TestTile = new Tile(
    'water',
    0,
    1,
    'Gabriel',
    board[0][0],
    {
      topLeft: null,
      topMiddle: null,
      topRight: null,
      middleLeft: null,
      middleRight: board[1][0],
      bottomLeft: null,
      bottomMiddle: board[0][1],
      bottomRight: board[1][1]
    })
  console.log(TestTile)
  return (
    <div className='App'>
      <div className='water'></div>
    </div>
  )
}

export default App
