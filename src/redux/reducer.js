const initState = {
  admin: {
    current_page: 1,
    total: 0,
    from: 0,
    to: 0,
    per_page: 15,
    skeleton: true,
    search: '',
    current_search: '',
    filter_category: '',
    filter_brand: '',
    filter_sort: '',
    filter_status: '',
    current_description: '',
    navigation_add: false,
    totalCart: 0,
    data: [],
    userId: ''
  }
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'setUserId': {
      return {
        ...state,
        admin: {
          ...state.admin,
          userId: action.payload
        }
      };
    }
    case 'setTotalCart': {
      return {
        ...state,
        admin: {
          ...state.admin,
          totalCart: action.payload
        }
      };
    }
    case 'setAddNavigation': {
      return {
        ...state,
        admin: {
          ...state.admin,
          navigation_add: action.payload
        }
      };
    }
    case 'setCurrentDescription': {
      return {
        ...state,
        admin: {
          ...state.admin,
          current_description: action.payload
        }
      };
    }
    case 'setFilterBrand': {
      return {
        ...state,
        admin: {
          ...state.admin,
          filter_brand: action.payload
        }
      };
    }
    case 'setFilterCategory': {
      return {
        ...state,
        admin: {
          ...state.admin,
          filter_category: action.payload
        }
      };
    }
    case 'setFilterSort': {
      return {
        ...state,
        admin: {
          ...state.admin,
          filter_sort: action.payload
        }
      };
    }
    case 'setFilterStatus': {
      return {
        ...state,
        admin: {
          ...state.admin,
          filter_status: action.payload
        }
      };
    }
    case 'setSearch': {
      return {
        ...state,
        admin: {
          ...state.admin,
          search: action.payload
        }
      };
    }
    case 'setCurrentSearch': {
      return {
        ...state,
        admin: {
          ...state.admin,
          current_search: action.payload
        }
      };
    }
    case 'setSkeleton': {
      return {
        ...state,
        admin: {
          ...state.admin,
          skeleton: action.payload
        }
      };
    }
    case 'setData':
      return {
        ...state,
        admin: {
          ...state.admin,
          data: [...action.payload]
        }
      };
    case 'changePage':
      return {
        ...state,
        admin: {
          ...state.admin,
          current_page: action.payload
        }
      };
    case 'setTotalPage':
      return {
        ...state,
        admin: {
          ...state.admin,
          total: action.payload
        }
      };
    case 'setFrom':
      return {
        ...state,
        admin: {
          ...state.admin,
          from: action.payload
        }
      };
    case 'setTo':
      return {
        ...state,
        admin: {
          ...state.admin,
          to: action.payload
        }
      };
    case 'setPerPage':
      return {
        ...state,
        admin: {
          ...state.admin,
          per_page: action.payload
        }
      };
    default:
      return state;
  }
};

export default rootReducer;
