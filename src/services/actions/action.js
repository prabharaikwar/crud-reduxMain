
import { FETCH_DATA, EDIT_USER, REMOVE_USER, ADD_USER } from '../Constants'
import axios from 'axios'

export const getUserData = () => {
    return (dispatch) => {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                const allUsers = res.data;
                // console.log(allUsers,'from actions')
                dispatch({
                    type: FETCH_DATA,
                    allUsers: allUsers
                });
            })
            .catch((err) => console.log(err, ' error occured while fetching api'))
    }

}


export const editUser = (updatedUser) => {
    return {
        type: EDIT_USER,
        updatedUser: updatedUser
    }
}

export const addUser = (newUser) => {
    return {
        type: ADD_USER,
        newUser: newUser
    }
}

export const deleteUser = (userId) => {
    return {
        type: REMOVE_USER,
        userId: userId
    }
}

