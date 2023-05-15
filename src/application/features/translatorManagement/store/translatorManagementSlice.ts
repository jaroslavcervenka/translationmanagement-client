import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Translator } from '@/common/domain';

export interface TranslatorState {
  translators: Translator[];
}

const initialState: TranslatorState = {
  translators: [],
};

const translatorSlice = createSlice({
  name: 'translatorManagement',
  initialState,
  reducers: {
    setTranslators: (state, action: PayloadAction<Translator[]>) => {
      state.translators = action.payload;
    },
  },
});

export const { setTranslators } = translatorSlice.actions;

export default translatorSlice.reducer;
