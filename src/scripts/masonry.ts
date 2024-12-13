import { masonry } from "@/utils/masonry";

const inputWidth = [
  56.10000228881836, 50.125, 49.8125, 40.78750228881836, 39.26250076293945,
];

const MAX_WIDTH = 100;
console.log(`Max width: ${MAX_WIDTH}`);
console.log(`Input widths:`, inputWidth);
console.log(`Output widths:`, masonry(inputWidth, MAX_WIDTH));
