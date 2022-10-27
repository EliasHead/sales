export function pixelToRem(...values: number[]) {
  return values
    .reduce((acc, current) => (acc += current / 20 + `rem `), "")
    .trim();
}