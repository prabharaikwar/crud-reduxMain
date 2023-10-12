import { FETCH_DATA, EDIT_USER, REMOVE_USER, ADD_USER } from '../Constants'

const initialState = {
    allUsers: []
}

// actions calls itself automatically

// there can be so many reducer here but we can connect only one so we eill merge all reducer in one using rootReducer file

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA:
            // console.log('Updating allUsers with fetched data:', action.allUsers)          
            return {
                ...state,
                allUsers: action.allUsers
            };
        case EDIT_USER:
            const updatedUsers = state.allUsers.map((user) => {
                if (user.id === action.updatedUser.id) {
                    return {
                        ...user
                    }
                }
                return {
                    ...state,
                    allUsers: updatedUsers
                }
            })
            break;
        case ADD_USER:
            return {
                ...state,
                allUsers: [...state.allUsers, action.newUser]
            }

        case REMOVE_USER:
            const deletedUsers = state.allUsers.filter((user) => user.id !== action.userId);

            return {
                ...state,
                allUsers: deletedUsers
            }

        default:
            return state;

    }
}




// actions call this reducer automatically
