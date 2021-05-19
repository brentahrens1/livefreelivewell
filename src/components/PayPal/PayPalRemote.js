import React, { useRef, useEffect } from "react";

const PayPalRemote = () => {
    const paypal = useRef()

    useEffect(() => {
        window.paypal.Buttons({
            createSubscription: function(data, actions) {
                return actions.subscription.create({
                    'plan_id': 'P-5CR93535VB434591YMB6HH5Q'
                });
            },
            onApprove: function(data, actions) {
                alert('You have successfully created subscription ' + data.subscriptionID);
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    }, [])

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}

export default PayPalRemote