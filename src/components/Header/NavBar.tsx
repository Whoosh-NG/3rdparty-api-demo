import './Navbar.scss';
// import { MdOutlineEmail, MdOutlineNotificationsNone } from 'react-icons/md';
import { useGlobalHooks } from '../../Hooks/globalHooks';

import BrandLogo from '../BrandLogo';
import { NotifIcon } from '@/SVGs/CustomSVGs';
import { FaChevronDown } from 'react-icons/fa';

const NavBar = ({ toggleNavbar }: { toggleNavbar: () => void }) => {
  // const toggle = useSelector(selectGlobal);
  const { handleShow } = useGlobalHooks();
  // const { authUser } = useSelector(selectUserData);
  // const notifs = useSelector(selectNotifs);
  // const dispatch = useDispatch();

  return (
    <main className='navbar flex items-center justify-center'>
      <header className='container  w-full flex heading justify-between'>
        <div className=' w-5/12 md:w-3/12 flex items-center'>
          <BrandLogo />
        </div>
        <div className='w-4/12 flex items-center justify-between'>
          <button
            type='button'
            onClick={() => handleShow('notif')}
            id='notif'
            className='notifs'
          >
            <NotifIcon />
            <small> </small>
            {/* {notifs.length > 0 && <small> {notifs.length} </small>} */}
          </button>

          <div className='hidden md:flex'>
            <h4 className='flex items-center font-bold gap-2 cursor-pointer'>
              Vendor Profile <FaChevronDown />{' '}
            </h4>
          </div>

          <div className='cursor-pointer' onClick={toggleNavbar}>
            <svg
              width='50'
              height='50'
              viewBox='0 0 50 50'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_1145_14898)'>
                <rect width='50' height='50' rx='16' fill='#EDEEF2' />
                <path
                  d='M16.75 26H39.25'
                  stroke='#83859C'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M16.75 18.5H39.25'
                  stroke='#83859C'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M16.75 33.5H39.25'
                  stroke='#83859C'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_1145_14898'>
                  <rect width='50' height='50' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </header>

      {/* {toggle['notif'] && (
        <Modal id='notif' className='notifPopUp m-3'>
          <Notifications popUp />
        </Modal>
      )} */}
    </main>
  );
};

export default NavBar;
