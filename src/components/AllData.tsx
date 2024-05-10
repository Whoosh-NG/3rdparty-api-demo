import pic1 from '@/assets/productImg.png';
import pic2 from '@/assets/productImg2.jpeg';
import pic3 from '@/assets/productImg3.jpeg';
import pic4 from '@/assets/productImg4.jpeg';
import pic5 from '@/assets/productImg5.jpeg';
import pic6 from '@/assets/productImg6.jpeg';

export const ProductListTabsData = {
  TabTitle: [
    {
      id: 'tab1',
      title: 'Hot Drinks',
    },

    {
      id: 'tab2',
      title: 'Cold Drinks',
    },
    {
      id: 'tab3',
      title: 'Local Made Dishes',
    },
    {
      id: 'tab4',
      title: 'International Dishes',
    },

    {
      id: 'tab5',
      title: 'Bake Foods',
    },
    {
      id: 'tab6',
      title: 'Frozen Foods',
    },
    {
      id: 'tab7',
      title: 'Snacks',
    },
  ],

  // TabContents: (data: any) => {
  //   return [
  //     { id: 'tab1', comp: <HotDrinks data={data} /> },
  //     { id: 'tab2', comp: <ColdDrinks data={data} /> },
  //     { id: 'tab3', comp: <LocalMadeDishes data={data} /> },
  //     { id: 'tab4', comp: <InternationalDishes data={data} /> },
  //     { id: 'tab5', comp: <BakedFood data={data} /> },
  //     { id: 'tab6', comp: <FrozenFoods data={data} /> },
  //     { id: 'tab7', comp: <Snacks data={data} /> },
  //   ];
  // },
};

export const productData = [
  {
    id: 1,
    title: 'Bata',
    price: 32,
    description:
      'Suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ',
    deliveryTime: '30-40',
    status: ' 🍣 Preorder',
    productImage: pic3,
  },
  {
    id: 2,
    title: 'Human Hair',
    price: 22,
    description:
      'Suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ',
    deliveryTime: '30-40',
    productImage: pic4,
    status: ' 🍣 Preorder',
  },
  {
    id: 3,
    title: 'Iphone20 Pro Max',
    price: 42,
    description:
      'Suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ',
    deliveryTime: '30-40',
    productImage: pic5,
    status: ' 🍣 Preorder',
  },
  {
    id: 4,
    title: 'Couch',
    price: 32,
    description:
      'Suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ',
    deliveryTime: '30-40',
    productImage: pic6,
    status: ' 🍣 Preorder',
  },
  {
    id: 5,
    title: 'Rice and Chicken',
    price: 12,
    description:
      'Suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ',
    deliveryTime: '30-40',
    productImage: pic2,
    status: ' 🍣 Preorder',
  },
  {
    id: 6,
    title: 'Royal Sushi House',
    price: 37,
    description:
      'Suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ',
    deliveryTime: '30-40',
    productImage: pic1,
    status: ' 🍣 Preorder',
  },
];
