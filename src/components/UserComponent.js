import React from 'react';
import UserService from '../services/UserService';

import { useEffect, useState } from "react";

const UserComponent = () => {

    const [userList, setuserlist] = useState([]); // array list of emp objects
    useEffect(() => {

        init();

    }, []);


    const init = () => {
        UserService.getUsers().then((res) => {
            console.log(res.data); // us to check
            setuserlist(res.data);
        }).catch((error) => {
            console.log(error);
        });

    }

    return (

        <div className='container'>
            <h1 className='text-center mt-4'>User Information</h1>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Sr.no</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>

                    {

                        userList.map((e, num) => (

                            <tr>
                                <th scope='row'>{num + 1}</th>
                                <td>{e.firstname}</td>
                                <td>{e.lastname}</td>
                                <td>{e.email}</td>
                            </tr>
                        ))}

                    <tr>
                        <th >1</th>
                        <td>Johnny</td>
                        <td>Matthews</td>
                        <td>JohnnyMatt@yahoo.com</td>
                    </tr>

                    <tr>
                        <th >2</th>
                        <td>Ravi</td>
                        <td>Naik</td>
                        <td>ravinaik@gmail.com</td>
                    </tr>
                    <tr>
                        <th >2</th>
                        <td>tinifer</td>
                        <td>pinto</td>
                        <td>tinifer@gmail.com</td>
                    </tr>
                    <tr>
                        <th >2</th>
                        <td>sandra</td>
                        <td>fernandes</td>
                        <td>sanfernandes@gmail.com</td>
                    </tr>
                </tbody>
            </table>

        </div>


    )

}

export default UserComponent;