import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TranslationJob } from '@/common/domain';

export interface TranslationJobState {
  jobs: TranslationJob[];
}

const initialState: TranslationJobState = {
  jobs: [],
};

const translationJobSlice = createSlice({
  name: 'translation-job',
  initialState,
  reducers: {
    setJobs: (state, action: PayloadAction<TranslationJob[]>) => {
      state.jobs = action.payload;
    },
  },
});

export const { setJobs } = translationJobSlice.actions;

export default translationJobSlice.reducer;
