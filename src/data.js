/*export const DATA = [
  {
    image:
      "https://m.media-amazon.com/images/I/61+JkDdKicL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Accox Shirt",

    description: `Men's Half Sleeves Formal Regular Fit Cotton Linen`,
    price: `INR 499`,
  },

  {
    image:
      "https://m.media-amazon.com/images/I/51YsD1K7-QL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Generic Shirt",

    description: `A D Fashion Men's Synthetic Cotton Digital Printe Shirtd`,
    price: `INR 799`,
  },

  {
    image:
      "https://m.media-amazon.com/images/I/51c4e2ZsxeL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Generic Shirt",

    description: `Marmic Men's Printed Stretchable Casual Half Sleeve`,
    price: `INR 599`,
  },

  {
    image:
      "https://m.media-amazon.com/images/I/61+JkDdKicL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Accox Shirt",

    description: `Men's Half Sleeves Formal Regular Fit Cotton Linen`,
    price: `INR 499`,
  },
];
export default DATA;*/
import axios from "axios";

async function productsData() {
  const DATA = await axios.get(
    "https://fakestoreapiserver.reactbd.com/products"
  );
  return DATA;
}
export default productsData;
