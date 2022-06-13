const colorSaturation = (cor: string) => {
  let hex: string = cor;
  let red: number = parseInt(hex.substring(1, 3), 16);
  // console.log('r:' + hex.substring(1, 3));
  let greem: number = parseInt(hex.substring(3, 5), 16);
  // console.log("g:" + hex.substring(3, 5));
  let blue: number = parseInt(hex.substring(5, 7), 16);
  // console.log("b:" + hex.substring(5, 7));
  let res: number = Math.round((red * 299 + greem * 587 + blue * 114) / 1000);
  let results: string = res > 128 ? "#0000009F" : "#FFFFFF9F";
  return results;
};
export default colorSaturation;
