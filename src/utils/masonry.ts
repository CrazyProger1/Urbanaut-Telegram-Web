//
//
// export const masonry = (
//   widths: number[],
//   maxWidth: number,
//   gap: number = 0,
// ): number[] => {
//   console.log("INPUT WIDTHS:", widths);
//   const sortedWidths = widths.toSorted((w1, w2) => w2 - w1);
//   console.log("SORTED INPUT:", sortedWidths);
//   let orderedWidths: number[] = [];
//
//   let ignoreIndices: number[] = [];
//
//   for (let i = 0; i < sortedWidths.length; i++) {
//     let currentRowWidth = 0;
//     if (ignoreIndices.includes(i)) continue;
//     ignoreIndices.push(i);
//
//     const currentWidth = sortedWidths[i];
//
//     if (currentWidth > maxWidth) continue;
//
//     orderedWidths.push(currentWidth);
//     currentRowWidth += currentWidth;
//
//     let prevWidth: number | null = null;
//     for (let j = sortedWidths.length - 1; j >= 0; j--) {
//       if (ignoreIndices.includes(j)) continue;
//
//       const tailWidth = sortedWidths[j];
//
//       if (currentRowWidth + tailWidth + gap >= maxWidth) {
//         if (prevWidth) {
//           ignoreIndices.push(j + 1);
//           orderedWidths.push(prevWidth);
//           currentRowWidth += prevWidth;
//           break;
//         }
//       }
//
//       prevWidth = tailWidth;
//     }
//   }
//
//   console.log("RESULT:", orderedWidths);
//   return orderedWidths.map((item) => widths.indexOf(item));
// };

const findNext = (
  widths: number[],
  ignoreIndices: Set<number>,
  maxWidth: number,
): { index: number; width: number } | null => {
  for (let i = 0; i < widths.length; i++)
    if (!ignoreIndices.has(i) && widths[i] < maxWidth)
      return { index: i, width: widths[i] };
};

export const masonry = (
  widths: number[],
  maxWidth: number,
  gap: number = 0,
): number[] => {
  const length = widths.length;
  const sortedWidths = widths.toSorted((w1, w2) => w2 - w1);

  let resultWidths: number[] = [];
  const ignoreIndices = new Set<number>();
  let row = [];
  let rowWidth = 0;

  while (ignoreIndices.size != length) {
    const next = findNext(sortedWidths, ignoreIndices, maxWidth - rowWidth);

    if (!next) {
      resultWidths.push(...row);
      row = [];
      rowWidth = 0;
    } else {
      const { index, width } = next;
      row.push(width);
      ignoreIndices.add(index);
      rowWidth += width + gap;
    }
  }
  resultWidths.push(...row);

  return resultWidths.map((width) => widths.indexOf(width));
};
