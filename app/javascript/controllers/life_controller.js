import { Controller } from "@hotwired/stimulus";
import Cell from "../life/cell";
import { structures } from "../life/structures";
import { placementType } from "../life/settings";

// Connects to data-controller="life"
export default class extends Controller {
  static targets = ["canvas"];

  connect() {
    this.canvas = this.canvasTarget;
    this.context = this.canvas.getContext("2d");
    this.width = 72;
    this.height = 48;
    this.canvas.width = this.width * Cell.width;
    this.canvas.height = this.height * Cell.height;

    this.placementType = placementType.Cell;
    this.start_button = document.getElementById("start_button");

    this.running = false;

    this.mouseHandlers();
    this.grid = [];
    this.initGrid();
    this.draw();
  }
  draw() {
    this.animateGrid();
  }
  animateGrid = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.running) {
      this.checkNeighbors();
      this.nextGeneration();
    }
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        this.grid[x][y].draw(this.context);
      }
    }

    setTimeout(this.animateGrid, 100);
  };
  checkNeighbors() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        this.grid[x][y].checkNeighbors(this.grid);
      }
    }
  }
  nextGeneration() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        this.grid[x][y].nextGeneration();
      }
    }
  }

  mouseHandlers() {
    this.mousePressed = false;
    this.canvas.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
    this.canvas.addEventListener("mousedown", this.mouseDown.bind(this));
    this.canvas.addEventListener("mouseup", this.mouseUp.bind(this));
    this.canvas.addEventListener("mousemove", this.mouseMove.bind(this));
  }
  disconnectMouseHandlers() {
    this.mousePressed = false;
    this.canvas.removeEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
    this.canvas.removeEventListener("mousedown", this.mouseDown.bind(this));
    this.canvas.removeEventListener("mouseup", this.mouseUp.bind(this));
    this.canvas.removeEventListener("mousemove", this.mouseMove.bind(this));
  }
  initGrid() {
    for (let x = 0; x < this.width; x++) {
      this.grid[x] = [];
      for (let y = 0; y < this.height; y++) {
        this.grid[x][y] = new Cell(x, y);
      }
    }
  }

  mouseDown(event) {
    this.mousePressed = true;
    this.clickLogic(event);
  }
  mouseUp(event) {
    this.mousePressed = false;
    this.clickLogic(event);
  }
  mouseMove(event) {
    if (this.mousePressed) {
      this.clickLogic(event);
    }
  }
  clickLogic(event) {
    const x = Math.floor(event.offsetX / Cell.width);
    const y = Math.floor(event.offsetY / Cell.height);
    this.toggleCellByButton(x, y, event.buttons);
  }
  toggleCellByButton(x, y, buttons) {
    if (buttons === 1) {
      this.toggleByPlacmentType(x, y);
    } else if (buttons === 2) {
      this.toggleCell(x, y, false);
    }
  }

  toggleByPlacmentType(x, y) {
    if (this.placementType === placementType.Cell) {
      this.toggleCell(x, y, true);
    } else {
      this.placeStructure(x, y);
    }
  }

  toggleCell(x, y, alive) {
    this.grid[x][y].alive = alive;
  }
  start(event) {
    this.running = !this.running;
    this.toggleStartButtonText();
  }
  clear(event) {
    this.running = false;
    this.initGrid();
    this.toggleStartButtonText();
  }
  random(event) {
    this.running = false;
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        this.grid[x][y].alive = Math.random() > 0.5;
      }
    }
    this.toggleStartButtonText();
  }
  toggleStartButtonText() {
    if (this.running) {
      start_button.innerText = "Stop";
    }
    if (!this.running) {
      start_button.innerText = "Start";
    }
  }

  setPlacementType(event) {
    this.placementType = event.target.value;
  }

  placeStructure(x, y) {
    if (this.placementType === placementType.Glider) {
      structures.glider.place(this.grid, x, y);
    }
    if (this.placementType === placementType.GliderGun) {
      structures.gliderGun.place(this.grid, x, y);
    }
    if (this.placementType === placementType.Ship) {
      structures.ship.place(this.grid, x, y);
    }
    if (this.placementType === placementType.Spaceship) {
      structures.spaceship.place(this.grid, x, y);
    }
    if (this.placementType === placementType.Pulsar) {
      structures.pulsar.place(this.grid, x, y);
    }
    if (this.placementType === placementType.rPentomino) {
      structures.rPentomino.place(this.grid, x, y);
    }
    if (this.placementType === placementType.Replicator) {
      structures.replicator.place(this.grid, x, y);
    }
  }
}
