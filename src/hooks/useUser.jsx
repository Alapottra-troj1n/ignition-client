import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import auth from '../firebase.init';

const useUser = (user) => {

    const [fetchedUser, setFetchedUser] = useState(null)
    const [fetchedLoading, setFetchedLoading] = useState(true);

    useEffect(() => {

        const getUser = async() =>{
            const settings = {
              
                    method:'GET',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                    
            }

            if(user?.email){

                const response = await fetch(`http://localhost:5000/getuser?email=${user.email}`,settings);
                if(response.status === 401 || response.status === 403){
                    signOut(auth)
                }
                const data = await response.json();
                setFetchedLoading(false);
                setFetchedUser(data);
                
            }
                

        }
        getUser();

    },[user])

    return [fetchedUser, fetchedLoading];

};

export default useUser;