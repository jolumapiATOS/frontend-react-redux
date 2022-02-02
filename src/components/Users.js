import { useState, useEffect } from "react"; 
import CardUser from "./CardUser";
import { useSelector, useDispatch } from 'react-redux';
import { add } from "../features/signUpSlice";

const UsersPage = () => {
    const users = useSelector( state => state.userState.value )
    const dispatch = useDispatch();
    console.log(users);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then( res => { return res.json() } )
        .then( data => { 
            dispatch( add( data ) );
         }).catch( e => { console.log(e) })
    }, []);

    

    return ( 
        <section className="container-users p-3">
            { !users && <div className="spinner-border text-warning" role="status">
            <span className="sr-only"></span>
            </div> }
            { users && <CardUser users={ users } />}
        </section>
     );
}
 
export default UsersPage;