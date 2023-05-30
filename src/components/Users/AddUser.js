import {useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if(+userAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age( > 0).'
            });
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

    const errorHandler = () => {
        setError(null);
    };

    return (
      
        <Card className = {classes.input}>
        {error && <ErrorModal title = {error.title} message = {error.message} onConfirm = {errorHandler}/>}
        <form onSubmit = {addUserHandler}>
            <label htmlFor = "username">Username</label>
            <input id = "username" type = "text" value = {userName} onChange = {userNameChangeHandler}/>

            <label htmlFor = "age">Age (Years)</label>
            <input id = "age" type = "number" value = {userAge} onChange = {userAgeChangeHandler}/>
            <Button type = "submit">Add User</Button>
        </form></Card>);
};

export default AddUser;