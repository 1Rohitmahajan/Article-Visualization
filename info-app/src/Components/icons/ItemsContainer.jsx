import Item from "../icons/Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="flex flex-row gap-x-80	 sm:px-20 px-2 py-16">
      <Item Links={PRODUCTS} title="" />
      <h1 className="items-center	">
       <article> As an MCA second-year student, Rohit Mahajan, I am eager to embark on a practical project that integrates my programming skills and aligns with our project objectives. I am writing to propose the development of an "Article Visualization Project," aimed at transforming textual content into visually engaging representations.
         </article>
      </h1>

    </div>
  );
};

export default ItemsContainer;