export interface IStoreSetupForm {
  first_name: string;
  last_name: string;
  phone_number: string;
  pickup_address: string;

  // pickup_details: {
  //   first_name: string;
  //   last_name: string;
  //   phone_number: string;
  //   pickup_address: string;
  // };

  // dropoff_details: {
  //   first_name: string;
  //   last_name: string;
  //   phone_number: string;
  //   dropoff_address: string;
  // };
}

export interface IBankDetailsStepform {
  id: string;
  name?: string;
  label?: string;
  type?: string;
  defaultValue: string;
  placeholder: string;
  require: boolean;
}

export interface IStoreProductCats {
  first_name: string;
  last_name: string;
  phone_number: string;
  dropoff_address: string;
}
export interface IDeliverySetup {
  name: string;
  value: string;
  quantity: string;
  carrier_type: string;
  description: string;
  weight: string;
}
export interface IBankDetails {
  fullName: string;
  bankName: string;
  paypalEmail?: string;
  accountNumber: number | string;
  transitNumber: number | string;
}

export interface IServerResponse {
  data: { message: string };
}

export interface IServerError {
  data: { message: string };
}
