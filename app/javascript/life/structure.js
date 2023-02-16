export class Structure {
  constructor(name, cells) {
    this.name = name;
    this.cells = cells;
  }

  place(grid, x, y) {
    console.log("Placing structure", this.name, "at", x, y);
    console.log("Cells:", this.cells);
    console.log("Grid:", grid);
    this.cells.forEach((cell) => {
      const clampedX = Math.min(Math.max(x + cell.gridX, 0), grid.length - 1);
      const clampedY = Math.min(
        Math.max(y + cell.gridY, 0),
        grid[0].length - 1
      );
      grid[clampedX][clampedY].alive = true;
    });
  }
}
