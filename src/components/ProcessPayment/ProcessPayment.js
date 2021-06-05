import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitForm from './SplitForm';


const stripePromise = loadStripe('pk_test_51IyhzHJQ7WbpFlHh8GbNdkC9Y6mkuXI4FuhDxgGTBRZt0eu5A7HfIcWsGyTfrfmGLbwkgSi1RJj4nl0m5zeObxU400WDijcwwL');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;