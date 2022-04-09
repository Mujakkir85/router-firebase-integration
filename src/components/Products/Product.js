import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)

const Product = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>{user ? user.displayName : 'No One'}</h2>
        </div>
    );
};

export default Product;