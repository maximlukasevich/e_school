/* eslint-disable no-unreachable */
import axios from "axios";
import {setUser} from "./reducer";

export const login = (email, password) => {
    try {
        return async (dispatch) => {
            const res = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password
            })
            alert(res.data.message)
            dispatch(setUser(res.data.user))
            localStorage.setItem('token', res.data.token)
        }
    } catch (err) {
        alert('Невірний логін та\\або пароль')
    }
}

export const registration = (firstName, lastName, middleName, email, password, role) => {
    try {
        return async (dispatch) => {
            try {
                const res = await axios.post('http://localhost:5000/api/auth/registration', {
                    firstName,
                    lastName,
                    middleName,
                    email,
                    password,
                    role
                })
                alert(res.data.message)
                dispatch(setUser(res.data.user))
                localStorage.setItem('token', res.data.token)
            } catch (e) {
                console.log(e)
            }
        }
    } catch (err) {
        console.log(err)
    }
}

export const update = (
    firstName, lastName, middleName,
    phone, gender, city,
    street, apartments, zipCode,
    userId ) => {
    try {
        return async (dispatch) => {
            const res = await axios.put(`http://localhost:5000/api/users/${userId}`, {
                firstName,
                lastName,
                middleName,
                phone,
                gender,
                city,
                street,
                apartments,
                zipCode,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch(auth())
            alert(res.data.message)
        }
    } catch (err) {
        console.log(err)
    }
}

export const setStudentClass = (classId, userId) => {
    try {
        return async (dispatch) => {
            const res = await axios.put(`http://localhost:5000/api/users/${userId}/class`, {
                classId
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            alert(res.data.message)
            dispatch(auth())
            console.log(res)
        }
    } catch (err) {
        console.log(err)
    }
}

export const auth = () => {
    try {
        return async (dispatch) => {
            const res = await axios.get('http://localhost:5000/api/auth/auth', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch(setUser(res.data.user))
            localStorage.setItem('token', res.data.token)
        }
    } catch (err) {
        console.log(err)
        localStorage.removeItem('token')
    }
}





