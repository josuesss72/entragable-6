
export default function useGetProductById () {

  async function getProductById (setProductById, id) {
    await fetch(`https://e-commerce-api.academlo.tech/api/v1/products/${id}`)
      .then(res => res.json())
      .then(response => {
        setProductById(response.data.product)
        scroll({top:0, left:0, behavior: 'smooth'})
      })
      .catch(err => console.log(err))
  }

  return { getProductById }
}
