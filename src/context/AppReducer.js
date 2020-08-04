export default (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN_BALANCE':
      return {
        ...state,
        tokenBalance: action.payload,
      };

    case 'SET_TOTAL_SUPPLY':
      return {
        ...state,
        totalSupply: action.payload,
      };

    case 'SET_WEB3':
      return {
        ...state,
        web3: action.payload,
      };

    case 'SET_CONTRACT':
      return {
        ...state,
        contract: action.payload,
      };
    default:
      return state;
  }
};
