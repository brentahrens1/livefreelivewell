import React, { useRef, useEffect } from "react";

const SemiPrivate2 = () => {
    const paypal = useRef()

    useEffect(() => {
        window.paypal.Buttons({
            createSubscription: function(data, actions) {
                return actions.subscription.create({
                    'plan_id': 'P-5S106194HA3224917MB6G3KQ'
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

export default SemiPrivate2