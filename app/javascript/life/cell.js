export default class Cell {
  static width = 10;
  static height = 10;
  static aliveColor = "rgba(0, 255, 255, 1)";
  static unaliveColor = "rgba(102, 153, 204, 1)";

  constructor(gridX, gridY, alive = false) {
    this.gridX = gridX;
    this.gridY = gridY;
    this.alive = alive;
  }

  draw(context) {
    this.context = context;
    if (this.alive) {
      this.context.fillStyle = Cell.aliveColor;
    } else {
      this.context.fillStyle = Cell.unaliveColor;
    }

    this.context.fillRect(
      this.gridX * Cell.width,
      this.gridY * Cell.height,
      Cell.width,
      Cell.height
    );
  }

  checkNeighbors(grid) {
    const neighbors = this.getNeighbors(grid);
    const aliveNeighbors = neighbors.filter((cell) => cell.alive).length;

    if (this.alive) {
      if (aliveNeighbors === 2 || aliveNeighbors === 3) {
        this.nextGenAlive = true;
      } else {
        this.nextGenAlive = false;
      }
    } else {
      if (aliveNeighbors === 3) {
        this.nextGenAlive = true;
      }
    }
  }

  getNeighbors(grid) {
    const neighbors = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (x === 0 && y === 0) {
          continue;
        }
        const neighborX = this.gridX + x;
        const neighborY = this.gridY + y;
        if (
          neighborX >= 0 &&
          neighborX < grid.length &&
          neighborY >= 0 &&
          neighborY < grid[0].length
        ) {
          neighbors.push(grid[neighborX][neighborY]);
        }
      }
    }
    return neighbors;
  }
  nextGeneration() {
    this.alive = this.nextGenAlive;
  }
}
