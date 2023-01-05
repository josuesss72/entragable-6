
export default function useSimilarItems () {
  function filterSimilarProducts (products, productById) {
    return products.filter((x) => x.category.name === productById.category) 
  }
  return { filterSimilarProducts }
}
