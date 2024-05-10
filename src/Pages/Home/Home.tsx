import { productData } from '@/components/AllData';
import ProductCard from '@/components/ProductListingComps/ProductCard';

const Home = () => {
  return (
    <main className='container py-10'>
      <h1 className='text-center pb-4'>WhooshNg 3rd Party API Demo</h1>
      <hr />

      <ul className='flex flex-wrap gap-5 mt-10 justify-between'>
        {productData.map(({ id, title, price, description, productImage }) => (
          <li key={id} className='w-full md:w-[47%] lg:w-[30%]'>
            <ProductCard
              id={id}
              title={title}
              productImage={productImage}
              price={price}
              description={description}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
