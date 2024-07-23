import { createSlice} from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({name,phone}) {
        return {
          payload: {
            name,
            phone
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
