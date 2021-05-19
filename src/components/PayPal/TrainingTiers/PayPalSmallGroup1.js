import React, { useRef, useEffect } from "react";

const PayPalSmallGroup1 = () => {
    const paypal = useRef()

    useEffect(() => {
        window.paypal.Buttons({
            createSubscription: function(data, actions) {
                return actions.subscription.create({
                    'plan_id': 'P-65414428KY1379243MB6HBQY'
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

export default PayPalSmallGroup1