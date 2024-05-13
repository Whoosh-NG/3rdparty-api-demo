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
    name: 'Bata',
    value: '32',
    description:
      'Suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ',
    deliveryTime: '30-40',
    weight: '5.6',
    quantity: '2',
    status: ' 🍣 Preorder',
    productImage: pic3,
  },
  {
    id: 2,
    name: 'Human Hair',
    value: '22',
    description:
      'Suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ',
    deliveryTime: '30-40',
    productImage: pic4,
    weight: '3.6',
    quantity: '1',
    status: ' 🍣 Preorder',
  },
  {
    id: 3,
    name: 'Iphone20 Pro Max',
    value: '42',
    description:
      'Suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ',
    deliveryTime: '30-40',
    productImage: pic5,
    weight: '4.6',
    quantity: '3',
    status: ' 🍣 Preorder',
  },
  {
    id: 4,
    name: 'Couch',
    value: '32',
    description:
      'Suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ',
    deliveryTime: '30-40',
    productImage: pic6,
    weight: '6.2',
    quantity: '2',
    status: ' 🍣 Preorder',
  },
  {
    id: 5,
    name: 'Rice and Chicken',
    value: '12',
    description:
      'Suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ',
    deliveryTime: '30-40',
    productImage: pic2,
    weight: '1.9',
    quantity: '4',
    status: ' 🍣 Preorder',
  },
  {
    id: 6,
    name: 'Royal Sushi House',
    value: '37',
    description:
      'Suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ',
    deliveryTime: '30-40',
    productImage: pic1,
    weight: '3.6',
    quantity: '2',
    status: ' 🍣 Preorder',
  },
];
