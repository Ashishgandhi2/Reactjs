const initialState = {
  users: [
    { name: "Ajay", email: "ajay@hotmail.com", phone: 7876753944, dob: "1991-06-18" },
    {
      name: "Ashish",
      email: "ashish@hotmail.com",
      phone: 9821419635,
      dob: "2001-01-12",
    },
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "DELETE_USER":
      const newUserList = state.users.filter(
        (user) => user.email !== action.payload
      );
      return {
        ...state,
        users: newUserList,
      };
    case "UPDATE_USER":
      const userIndex = state.users.findIndex(
        (user) => (user.email === action.payload.email)
      );
      state.users[userIndex]=action.payload
      return state
    default:
      return state;
  }
};
export default userReducer;
