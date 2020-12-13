//#region  COURSES
const GET_COURSES = `
    query{
        allCourses{
            data {
            name
            _id
            governingAgency
            provider
            hours
            saved
            date
            }
        }
    }
`;

const GET_COURSE_BY_ID = ``;
const GET_UPCOMING_COURSES = ``;

//#endregion

//#region USER_COURSES
const GET_USER_COURSES = ``;
const GET_USER_COURSE_BY_ID = ``;
const UPDATE_USER_COURSE = ``;
const DELETE_USER_COURSE = ``;
const CREATE_USER_COURSE = ``;
//#endregion 

//#region CREDITS
const GET_CREDITS = ``;
const GET_CREDIT_BY_ID = ``;
const UPDATE_CREDIT = ``;
const DELETE_CREDIT = ``;
const CREATE_CREDIT = ``;
//#endregion 

//#region AUTHENTICATION
const GET_USER_BY_ID =``;
const UPDATE_USER = ``;
const LOGIN = ``;
const REGISTER = ``;
const LOGOUT = ``;
//#endregion


module.exports = {
    GET_COURSES,
    GET_COURSE_BY_ID,
    GET_UPCOMING_COURSES,
    GET_USER_COURSES,
    GET_USER_COURSE_BY_ID,
    UPDATE_USER_COURSE,
    DELETE_USER_COURSE,
    CREATE_USER_COURSE,
    GET_CREDITS,
    GET_CREDIT_BY_ID,
    UPDATE_CREDIT,
    DELETE_CREDIT,
    CREATE_CREDIT,
    GET_USER_BY_ID,
    UPDATE_USER,
    LOGIN,
    REGISTER,
    LOGOUT,
    
}