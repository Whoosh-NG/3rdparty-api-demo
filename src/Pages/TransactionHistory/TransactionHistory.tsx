import { useAppSelector } from '@/Redux/reduxHooks';
import { selectGlobal } from '@/Redux/Features/globalSlice';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import TransactionHistoryCard from '@/components/DashboardComps/TransactionHistoryComp/TransactionHistoryCard';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import Search from '@/components/Search';
import SeeMoreTransactionHistory from '@/components/DashboardComps/TransactionHistoryComp/SeeMoreTransactionHistory';

const optionData = [
  'Sort by Status: All',
  'Sort by Status: Pending',
  'Sort by Status: Unsuccessful',
  'Sort by Date:  Recent - Oldest',
  'Sort by Date:  Oldest  -  Recent',
  'Sort by Type: Withdrawals',
  'Sort by Type: Ads Payment',
];

const transHistoryData = [
  {
    id: '3421',
    orderDate: 'July 29th 2023',
    transactionType: 'Withdrawal',
    description: '-------',
    amount: 250,
    status: 'Pending',
  },
  {
    id: '3321',
    orderDate: 'July 29th 2023',
    transactionType: 'Withdrawal',
    description: '--------',
    amount: 250,
    status: 'Successful',
  },
  {
    id: '3621',
    orderDate: 'July 29th 2023',
    transactionType: 'Withdrawal',
    description: 'Insufficient Balance',
    amount: 250,
    status: 'Unsuccessful',
  },
  {
    id: '3921',
    orderDate: 'July 29th 2023',
    transactionType: 'Withdrawal',
    description: '---------',
    amount: 250,
    status: 'Successful',
  },
  {
    id: '3621',
    orderDate: 'July 29th 2023',
    transactionType: 'Withdrawal',
    description: '---------',
    amount: 250,
    status: 'Unsuccessful',
  },
  {
    id: '3931',
    orderDate: 'July 29th 2023',
    transactionType: 'Withdrawal',
    description: '---------',
    amount: 250,
    status: 'Successful',
  },
  {
    id: '3941',
    orderDate: 'July 29th 2023',
    transactionType: 'Withdrawal',
    description: '---------',
    amount: 250,
    status: 'Successful',
  },
  {
    id: '3951',
    orderDate: 'July 29th 2023',
    transactionType: 'Withdrawal',
    description: '---------',
    amount: 250,
    status: 'Successful',
  },
  {
    id: '3961',
    orderDate: 'July 29th 2023',
    transactionType: 'Withdrawal',
    description: '---------',
    amount: 250,
    status: 'Unsuccessful',
  },
  {
    id: '3971',
    orderDate: 'July 29th 2023',
    transactionType: 'Withdrawal',
    description: '---------',
    amount: 250,
    status: 'Successful',
  },
  {
    id: '3991',
    orderDate: 'July 29th 2023',
    transactionType: 'Withdrawal',
    description: '---------',
    amount: 250,
    status: 'Pending',
  },
];

const TransactionHistory = () => {
  const { handleShow } = useGlobalHooks();
  const show = useAppSelector(selectGlobal);

  return (
    <main className='container pb-10'>
      <div className=' pb-2 mb-3 flex flex-col '>
        <div className=' pb-2 mb-3 flex  '>
          <Link
            to='/wallet'
            className='border-[var(--secColor)] border-b pb-2 mb-3 flex items-center gap-2'
          >
            {' '}
            <FaChevronLeft /> Back to Wallet
          </Link>
        </div>
        <h3 className='font-semibold'> Transactions History</h3>
      </div>

      <header className='flex justify-between gap-3 items-center'>
        <div className='w-8/12'>
          <Search placeholder='Search amount' />
        </div>
        <select className='w-3/12 bg-[#FFA24F1A] py-[10px] px-[20px] rounded border-[1px] border-[var(--secColor)]'>
          {optionData.map((item) => (
            <option key={item} value={item}>
              {' '}
              {item}{' '}
            </option>
          ))}
        </select>
      </header>

      <section className='bg-[var(--white)] rounded-lg'>
        <header className='flex items-center py-5 px-5 my-4  gap-2'>
          <p className='w-2/12 font-bold text-[var(--Grey1)]'> Date</p>
          <p className='w-2/12 font-bold text-[var(--Grey1)] text-center'>
            {' '}
            Transaction Type
          </p>

          <p className='w-2/12 font-bold text-[var(--Grey1)] text-center'>
            {' '}
            Amount
          </p>
          <p className='w-4/12 font-bold text-[var(--Grey1)] text-center'>
            {' '}
            Description
          </p>
          <p className='w-2/12 font-bold text-[var(--Grey1)] text-center'>
            {' '}
            Status
          </p>
        </header>
        <ul>
          {transHistoryData.map(
            ({
              id,
              transactionType,
              orderDate,
              amount,
              description,
              status,
            }) => (
              <div key={id} className='cursor-pointer'>
                <TransactionHistoryCard
                  id={id}
                  amount={amount}
                  description={description}
                  status={status}
                  orderDate={orderDate}
                  transactionType={transactionType}
                />
                {show[id] && (
                  <SeeMoreTransactionHistory
                    id={id}
                    close={() => handleShow(id)}
                  />
                )}
              </div>
            ),
          )}
        </ul>
      </section>
    </main>
  );
};

export default TransactionHistory;
