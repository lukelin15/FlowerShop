<script>
  import { link } from "svelte-routing";

  export let product;
  let title, price, id, image;

  $: if (product) {
    ({ title, price, id, image } = product);
    console.log(image);
  }
</script>

<article class="product">
  <div class="image-container">
    <img src={image} alt={title} /> <!-- Use image variable here -->
    <a href={`/products/${id}`} class="btn btn-primary" use:link>details</a>
  </div>
  <div class="product-footer">
    <p class="product-title">{title}</p>
    <p class="product-price">${price}</p>
  </div>
</article>