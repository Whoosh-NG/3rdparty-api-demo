// import { useSweetAlert } from '@/Hooks/useSweetAlert';

import DynamicProductList from '@/components/DashboardComps/ProductListingComps/DynamicProductList';
import dayjs from 'dayjs';

// const { showAlert } = useSweetAlert();

export const formatTimeToAMPM = (timeString: Date) => {
  const time = dayjs(timeString, 'HH:mm:ss');
  const formattedTime = time.format('h:mma');
  return formattedTime;
};

export const handleCopyToClipboard = (
  id: string | number,
  val: string,
  // message?: string,
) => {
  if (id) {
    navigator.clipboard.writeText(val);
    // message ? showAlert(message) : '';
  }
};

export const generateRandomIntId = () => {
  return Math.floor(Math.random() * 1000);
};

// Render product list comps dynamically
export const TabContentsComps = (titleList: any) => {
  const comps = [];
  for (let i = 0; i < titleList?.length; i++) {
    comps.push({
      id: `tab${titleList[i].subCategoryId}`,
      comp: <DynamicProductList catId={titleList[i].subCategoryId} />,
    });
  }

  return comps;
};

// // If i want to render differenct comps for each tab, use this method, then keep adding comps for each tabs
// export const ProductCategoreiesTabs = (
//   tabTitles: IGetSellerCat[],
//   data: any,
// ) => {
//   const tabContents = tabTitles.map((item) => {
//     return {
//       id: `tab${item.id}`,
//       comp: renderComponentBasedOnTitle(data, item.name),
//     };
//   });
//   return tabContents;
// };

// const renderComponentBasedOnTitle = (
//   data: any,
//   titles?: string,
// ): JSX.Element | null => {
//   switch (titles) {
//     case 'Hot Drinks':
//       return <HotDrinks data={data} />;
//     case 'Cold Drinks':
//       return <ColdDrinks data={data} />;
//     case 'Local Made Dishes':
//       return <LocalMadeDishes data={data} />;
//     case 'International Dishes':
//       return <InternationalDishes data={data} />;
//     case 'Bake Foods':
//       return <BakedFood data={data} />;
//     case 'Frozen Foods':
//       return <FrozenFoods data={data} />;
//     case 'Snacks':

//     default:
//       return null;
//   }
// };

// /*====FOR UPLOAD WITH SET OBJECTS IN AN ARAY====*/

// const [imageData, setImageData] = useState([
//   {
//     name: 'upload1',
//     url: '',
//   },
//   {
//     name: 'upload2',
//     url: '',
//   },
//   {
//     name: 'upload3',
//     url: '',
//   },
// ]);

// const [uploading, setUploading] = useState<{ [key: string]: boolean }>({});

// const handleUploadFiles = async (
//   e: FormEvent<HTMLInputElement>,
//   id: string,
// ) => {
//   const target = e.target as HTMLInputElement;

//   setUploading((prev) => ({ [id]: !prev[id] }));

//   if (target.files && target.files.length > 0) {
//     const imageFIle = target.files[0];

//     try {
//       const rsp = await uploadFilesToServer(imageFIle);
//       console.log(rsp);

//       if (rsp?.data) {
//         setImageData((prev) =>
//           prev.map((img) =>
//             img.name === id ? { ...img, url: rsp?.data?.file.url } : img,
//           ),
//         );

//         showAlert(rsp?.data?.message);
//       }

//       setUploading((prev) => ({ [id]: !prev[id] }));
//     } catch (error) {
//       console.log(error);
//       setUploading((prev) => ({ [id]: !prev[id] }));
//     }
//   }
// };
