import {useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AddUser.module.css';


const AddUser = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if(userName.trim().length === 0 || userAge.trim().length === 0) {
            return;
        }
        if(+userAge < 1) {
            return;
        }
        props.onAddUser(userName, userAge);
        setUserName('');
        setUserAge('');
    };

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);
        console.log(event.target.value);
    };

    const userAgeChangeHandler = (event) => {
        setUserAge(event.target.value);
        console.log(event.target.value);
    };

    return (
        <Card className = {classes.input}>
        <form onSubmit = {addUserHandler}>
            <label htmlFor = "username">Username</label>
            <input id = "username" type = "text" value = {userName} onChange = {userNameChangeHandler}/>

            <label htmlFor = "age">Age (Years)</label>
            <input id = "age" type = "number" value = {userAge} onChange = {userAgeChangeHandler}/>
            <Button type = "submit">Add User</Button>
        </form></Card>);
};

export default AddUser;