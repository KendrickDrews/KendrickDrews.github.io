
// Define the map data as a two-dimensional array
const mapData = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
//   If some of the tiles in the map were higher than others, you would need to add a third dimension to your map data to represent the height of each tile.
//   You could use a three-dimensional array where each element in the array represents a single tile,
//   with the first two indices representing the x and y coordinates of the tile and the third index representing the height.

//   For example, here's how you could modify the map data array from my previous answer to include height information:
//   In this example, each element in the map data array is an array with two values: 
//   The first value represents the tile type (e.g. grass, water, mountain),
//   The second value represents the height of the tile.
  const mapData3D = [
    [
      [0, 0],
      [0, 0],
      [0, 1],
      [0, 1],
      [0, 2],
      [0, 2],
      [0, 3],
      [0, 3],
      [0, 3],
      [0, 3]
    ],
    [
      [0, 0],
      [0, 0],
      [1, 1],
      [1, 1],
      [1, 2],
      [1, 2],
      [1, 3],
      [1, 3],
      [1, 3],
      [1, 3]
    ],
    // ...
  ];

