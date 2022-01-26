import { atom } from 'recoil';

export const lastNameState = atom({
    key: "lastName",
    default: ""
});

export const firstNameState = atom({
    key: "firstName",
    default: ""
});

export const genderState = atom({
    key: "gender",
    default: ""
});

export const userIDState = atom({
    key: "userID",
    default: ""
});

export const passwordState = atom({
    key: "password",
    default: ""
});

export const againPasswordState = atom({
    key: "againPassword",
    default: ""
});