import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  locomotive: [{
    id: 0,
    position: 0,
    color: '',
    empty: true,
    active: false,
  }],
  count: 100
};

export const blockSlice = createSlice({
  name: 'blocks',
  initialState,
  reducers: {
    SetLocomotive: (state, action) => {
        state.locomotive = action.payload;
    },
    SetCount: (state, action) => {
      state.count = action.payload;
  },
  },
});

// Action creators are generated for each case reducer function
export const { SetLocomotive, SetCount } = blockSlice.actions;

// Selectors
export const selectLocomotive = (state: any) => state.blocks.locomotive;
export const selectCount = (state: any) => state.blocks.count;

export default blockSlice.reducer;
