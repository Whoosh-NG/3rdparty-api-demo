import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../Stores/store';
import {
  IBankDetails,
  IDeliverySetup,
  IStoreProductCats,
  IStoreSetupForm,
} from '@/Interfaces/OnboardingInterfaces';

const onboardingSlice = createSlice({
  name: 'formData',
  initialState: {
    stepperForms: {
      pickupDetails: {} as IStoreSetupForm,
      dropoffDetails: {} as IStoreProductCats,
      orderDetails: {} as IDeliverySetup,
      bankDetails: {} as IBankDetails,
      // list of boolean keys
      productCatIsAdded: {} as { [key: string]: boolean },
    },
    fileName: '',
    onboarded: false,
    sessionExpiration: '',
  },

  reducers: {
    updatePickup: (state, action) => {
      state.stepperForms.pickupDetails = action.payload;
    },

    saveFileName: (state, action) => {
      state.fileName = action.payload;
    },

    updateDropOff: (state, action) => {
      state.stepperForms.dropoffDetails = action.payload;
    },

    updateIsAdded: (state, action) => {
      state.stepperForms.productCatIsAdded = action.payload;
    },

    updateOrderDetails: (state, action) => {
      state.stepperForms.orderDetails = action.payload;
    },

    updateBankDetails: (state, action) => {
      state.stepperForms.bankDetails = action.payload;
    },

    isUserOnboarded: (state, action) => {
      state.onboarded = action.payload;
    },

    updateSessionDuration: (state, action) => {
      state.sessionExpiration = action.payload;
    },
  },
});

export const {
  updatePickup,
  updateOrderDetails,
  updateDropOff,
  saveFileName,
  isUserOnboarded,
  updateSessionDuration,
  updateIsAdded,
  updateBankDetails,
} = onboardingSlice.actions;

export const SelectStepperForms = (state: RootState) =>
  state.onboardingSlice.stepperForms;
export const SelectFileName = (state: RootState) =>
  state.onboardingSlice.fileName;
export const SelectOnboardedUser = (state: RootState) =>
  state.onboardingSlice.onboarded;

export const SelectSessionTimer = (state: RootState) =>
  state.onboardingSlice.sessionExpiration;

export default onboardingSlice.reducer;
