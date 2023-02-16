import { Structure } from "./structure.js";
import Cell from "./cell.js";

export const glider = new Structure("Glider", [
  new Cell(0, 0),
  new Cell(1, 1),
  new Cell(2, 1),
  new Cell(0, 2),
  new Cell(1, 2),
]);
export const gliderGun = new Structure("Glider Gun", [
  new Cell(0, 4),
  new Cell(0, 5),
  new Cell(1, 4),
  new Cell(1, 5),
  new Cell(10, 4),
  new Cell(10, 5),
  new Cell(10, 6),
  new Cell(11, 3),
  new Cell(11, 7),
  new Cell(12, 2),
  new Cell(12, 8),
  new Cell(13, 2),
  new Cell(13, 8),
  new Cell(14, 5),
  new Cell(15, 3),
  new Cell(15, 7),
  new Cell(16, 4),
  new Cell(16, 5),
  new Cell(16, 6),
  new Cell(17, 5),
  new Cell(20, 2),
  new Cell(20, 3),
  new Cell(20, 4),
  new Cell(21, 2),
  new Cell(21, 3),
  new Cell(21, 4),
  new Cell(22, 1),
  new Cell(22, 5),
  new Cell(24, 0),
  new Cell(24, 1),
  new Cell(24, 5),
  new Cell(24, 6),
  new Cell(34, 2),
  new Cell(34, 3),
  new Cell(35, 2),
  new Cell(35, 3),
]);

export const ship = new Structure("Ship", [
  new Cell(0, 0),
  new Cell(0, 1),
  new Cell(1, 0),
  new Cell(1, 2),
  new Cell(2, 1),
]);

export const spaceship = new Structure("Spaceship", [
  new Cell(0, 0),
  new Cell(0, 1),
  new Cell(0, 2),
  new Cell(1, 0),
  new Cell(1, 2),
  new Cell(2, 0),
  new Cell(2, 1),
]);

export const pulsar = new Structure("Pulsar", [
  // Top Left Arm
  new Cell(2, 0),
  new Cell(3, 0),
  new Cell(4, 0),

  // Top Right Arm
  new Cell(8, 0),
  new Cell(9, 0),
  new Cell(10, 0),

  // Bottom Left Arm
  new Cell(2, 12),
  new Cell(3, 12),
  new Cell(4, 12),

  // Bottom Right Arm
  new Cell(8, 12),
  new Cell(9, 12),
  new Cell(10, 12),

  // Left Top Arm
  new Cell(0, 2),
  new Cell(0, 3),
  new Cell(0, 4),

  // Left Bottom Arm
  new Cell(0, 8),
  new Cell(0, 9),
  new Cell(0, 10),

  // Right Top Arm
  new Cell(12, 2),
  new Cell(12, 3),
  new Cell(12, 4),

  // Right Bottom Arm
  new Cell(12, 8),
  new Cell(12, 9),
  new Cell(12, 10),

  // Center Top Left
  new Cell(5, 2),
  new Cell(5, 3),
  new Cell(5, 4),

  // Center Top Right
  new Cell(7, 2),
  new Cell(7, 3),
  new Cell(7, 4),

  // Center Bottom Left
  new Cell(5, 8),
  new Cell(5, 9),
  new Cell(5, 10),

  // Center Bottom Right
  new Cell(7, 8),
  new Cell(7, 9),
  new Cell(7, 10),

  // Center Left Top
  new Cell(2, 5),
  new Cell(3, 5),
  new Cell(4, 5),

  // Center Left Bottom
  new Cell(2, 7),
  new Cell(3, 7),
  new Cell(4, 7),

  // Center Right Top
  new Cell(8, 5),
  new Cell(9, 5),
  new Cell(10, 5),

  // Center Right Bottom
  new Cell(8, 7),
  new Cell(9, 7),
  new Cell(10, 7),
]);
export const rPentomino = new Structure("R-Pentomino", [
  new Cell(0, 1),
  new Cell(1, 0),
  new Cell(1, 1),
  new Cell(1, 2),
  new Cell(2, 0),
]);

export const replicator = new Structure("Replicator", [
  new Cell(0, 0),
  new Cell(0, 1),
  new Cell(0, 2),
  new Cell(1, 0),
  new Cell(1, 3),
  new Cell(2, 0),
  new Cell(2, 3),
  new Cell(3, 1),
  new Cell(3, 2),
  new Cell(3, 3),
]);

export const structures = {
  glider,
  gliderGun,
  ship,
  spaceship,
  pulsar,
  rPentomino,
  replicator,
};
