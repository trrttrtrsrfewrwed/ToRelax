
const initialState =  [{
    id: 1,
    name: "Пошутить",
    category: "outdoors",
    description: "Смешно пошутить",
    time: "12:22",
    rating: 4,
    minimized: true
  }];
  
  const activitiesListReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'MAXIMIZE':
        return state.map(elem=>{
          if (elem.id === action.id) {
            elem.minimized = false;
          } else {
            elem.minimized = true;
          }
          return elem;
        })
      case 'MINIMIZE':
        return state.map(elem=>{
          if (elem.id === action.id) {
            elem.minimized = true;
          } 
          return elem;
        })
      case 'REMOVE':
        return state.filter(elem => (elem.id !== action.id))  
      case 'SET':
        let flg = false;
        let tmp = state.map(elem=>{
          if (elem.id === action.id) {
            flg = true;
            return {
              id: action.id,
              name: action.data.name,
              category: action.data.category,
              description: action.data.description,
              time: action.data.duration,
              rating: action.data.rating,
              minimized: true
            }
          } 
          return elem;
        }) 
        if (!flg) {
          return [
            ...state,
            {
              id: action.id,
              name: action.data.name,
              category: action.data.category,
              description: action.data.description,
              time: action.data.duration,
              rating: action.data.rating,
              minimized: true
            }
          ]
        } else {
          return tmp;
        }
      default:
        return state;
    }
  };
  
  export default activitiesListReducer