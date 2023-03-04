const crudURL = "https://crudcrud.com/api/04cc330114c54efc902defded2a43430";
const form = document.getElementById("detail_form");
const u_list = document.getElementById("list_of_product");
const span = document.getElementById("total");

window.addEventListener("DOMContentLoaded", async () => {
  const data = await axios.get(`${crudURL}/details`);
  const list = data.data;
  let total = 0;
  let li = "<h3>List of Products</h3>";
  list.forEach((eachPro) => {
    total += parseInt(eachPro.ammount);
    li += `<li>${eachPro.ammount} ${eachPro.product}</li>`;
    //     console.log(eachPro);
  });
  span.innerHTML = total;
  u_list.innerHTML = li;
  console.log(list);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.ammount.value);
  const ammount = e.target.ammount.value;
  const product = e.target.product.value;
  const obj = { ammount: ammount, product: product };
  axios.post(`${crudURL}/details`, obj);
});
