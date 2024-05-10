import { setSearchQuery } from '@/Redux/Features/globalSlice';
import { ChangeEvent, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useDispatch } from 'react-redux';

function Search({ placeholder }: { placeholder: string }) {
  const dispatch = useDispatch();

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    dispatch(setSearchQuery(query));
  };

  useEffect(() => {
    dispatch(setSearchQuery(''));
  }, [dispatch]);

  return (
    <div className='search flex items-center w-full '>
      <BiSearch className='searchIcon' />
      <input
        type='text'
        placeholder={placeholder}
        className='form-control !bg-[transparent]'
        onChange={handleSearchInputChange}
      />
    </div>
  );
}

export default Search;
