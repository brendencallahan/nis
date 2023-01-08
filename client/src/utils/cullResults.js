// takes in results and feeds them back, 50 at a time
export default function cullResults(results, page) {
  let culledResults = [];

  const startIndex = 25 * (page - 1);
  const endIndex = 25 * page;

  if (results.length >=endIndex) {
    culledResults = results.slice(startIndex, endIndex);
  }

  return culledResults;
}
