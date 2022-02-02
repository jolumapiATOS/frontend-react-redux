import { useState, useEffect } from "react"; 
import CardUser from "./CardUser";

const UsersPage = () => {
    const [ users, setUsers ] = useState(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then( res => { return res.json() } )
        .then( data => { 
            setUsers( data )
         }).catch( e => { console.log(e) })
    }, []);

    

    return ( 
        <section className="container-users p-3">
            { !users && <div class="spinner-border text-warning" role="status">
            <span class="sr-only"></span>
            </div> }
            { users && <CardUser users={ users } />}
        </section>
     );
}
 
export default UsersPage;