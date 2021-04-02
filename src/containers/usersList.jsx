import React from "react";
import { createSelector } from "reselect";
import styled from "styled-components";
import { makeSelectUsers } from "./HomePage/selectors";

const UsersContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`;
const UserImage = styled.div`
width: 7em;
heigth: 7em;
img {
    width: 100%;
    heigth: 100%;
}
`;
const UserName = styled.h3`
font-size: 20px;
color: #000;
margin: 0;
`;



const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

export function usersList(props) {
  const { users } = useSelector(stateSelector);
}
