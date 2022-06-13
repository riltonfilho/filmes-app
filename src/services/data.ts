 const dataBR = (prop: string) => {
  let dataStr: string = prop;
  let yard: string = dataStr.substring(0, 4);
  let month: string = dataStr.substring(5, 7);
  let day: string = dataStr.substring(8, 10);
  let res: string = day + "/" + month + "/" + yard;
  let results: string = res;
  return results;
};
export default dataBR;