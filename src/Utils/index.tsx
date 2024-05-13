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

export const formatNumInThousands = (val: number) => {
  if (typeof val !== 'number' || isNaN(val)) {
    return 'Invalid Number';
  }

  return val >= 1000 ? val.toLocaleString() : val;
};
