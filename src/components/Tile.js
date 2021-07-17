export default class Tile {
  constructor (
    terrain,
    defenseBonus,
    armies,
    controledBy,
    currentNode,
    adjecentNodes) {
    this.terrain = terrain
    switch (this.terrain) {
      case 'mountains':
        this.defenseBonus = 0.25
        break
      case 'forest':
        this.defenseBonus = 0.15
        break
      case 'hills':
        this.defenseBonus = 0.10
        break
      case 'plains':
        this.defenseBonus = 0
        break
      case 'water':
        this.defenseBonus = 0
        break
      case 'desert':
        this.defenseBonus = -0.05
        break
      case undefined:
        throw new Error('terrain type is undefined')
      default:
        this.defenseBonus = defenseBonus
    }
    this.armies = armies
    this.controledBy = controledBy
    this.currentNode = currentNode
    this.adjecentNodes = adjecentNodes
  }
}
