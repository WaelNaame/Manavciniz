export default (state = { orders: [] }, action) => {
    switch (action.type) {
      case 'CREATE_ORDER':
        return { ...state,
          orders: [...state.orders , action.payload]
        };
      default:
        return state;
    }
  };
  