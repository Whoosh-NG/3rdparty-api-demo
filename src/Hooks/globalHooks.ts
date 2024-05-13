import { Dispatch, SetStateAction, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleShow } from '../Redux/Features/globalSlice';
import numeral from 'numeral';

export const useGlobalHooks = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ error: false, errMessage: '' });

  const dispatch = useDispatch();

  const handleShow = (id: string | number) => {
    dispatch(toggleShow(id));
  };

  const btnTaps = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 300);
  };

  const getColor = (rating: number, index: number) => {
    if (rating >= index + 1) {
      // Color for rated stars
      return 'rated';
    }
    // Color for unrated stars
    return 'noRating';
  };

  // const formatDate = (dateString: Date) => {
  //   const date = new Date(dateString);
  //   const day = date.getDate();
  //   const month = date.getMonth() + 1; // Months are 0-based, so add 1
  //   const year = date.getFullYear();

  //   const datePart = `${day}/${month}/${year}`;

  //   return datePart;
  // };

  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    };

    const formattedDate = date.toLocaleString('en-US', options);

    return formattedDate;
  };

  const formatTime = (TimeString: Date) => {
    const Time = new Date(TimeString);
    const hours = Time.getHours();
    const minutes = Time.getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    const formattedHours = hours % 12 || 12;

    const timePart = `${formattedHours}:${minutes} ${amOrPm}`;

    return timePart;
  };

  // Search function
  const handleSearch = (
    data: any[],
    searchQuery: string,
    setData: Dispatch<SetStateAction<any[]>>,
    key: string,
  ) => {
    if (data && data.length > 0) {
      const filtered =
        searchQuery !== ''
          ? data.filter((item) =>
              item[key].toLowerCase().includes(searchQuery.toLowerCase()),
            )
          : data;
      setData(filtered);
    }
  };

  const handleCandidateSearch = (
    data: any[],
    searchQuery: string,
    setData: Dispatch<SetStateAction<any[]>>,
    key: string,
  ) => {
    if (data && data.length > 0) {
      const filtered =
        searchQuery !== ''
          ? data.filter((item) =>
              item.employee[key]
                .toLowerCase()
                .includes(searchQuery.toLowerCase()),
            )
          : data;
      setData(filtered);
    }
  };

  const formatNumInThousands = (value: number) => {
    // Format using numeral.js
    return numeral(value).format('0.0a');
  };
  return {
    formatNumInThousands,
    handleShow,
    show,
    setShow,
    btnTaps,
    getColor,
    loading,
    setLoading,
    errors,
    setErrors,
    formatDate,
    formatTime,
    open,
    setOpen,
    handleSearch,
    handleCandidateSearch,
  };
};
