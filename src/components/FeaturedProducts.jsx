import SectionTitle from "./SectionTtitle";
import ProductsGrid from "./ProductsGrid";

let FeaturedProducts = ()=>{
    return (
        <div className=" pt-24">
            <SectionTitle text = 'Featured Products'></SectionTitle>
            <ProductsGrid></ProductsGrid>
        </div>
    );
}
export default FeaturedProducts;