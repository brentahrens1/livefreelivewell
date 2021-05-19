import React, { useState } from 'react'
import '../../sass/_programs.scss'
import picOne from '../../assets/images/programs/training-min.png'
import ProgramCalculator from '../ProgramCalculator/ProgramCalculator'
import PayPalSmallGroup1 from '../PayPal/TrainingTiers/PayPalSmallGroup1'
import PayPalSmallGroup2 from '../PayPal/TrainingTiers/PayPalSmallGroup2'
import PayPalSmallGroup3 from '../PayPal/TrainingTiers/PayPalSmallGroup3'
import SemiPrivate1 from '../PayPal/TrainingTiers/SemiPrivate1'
import SemiPrivate2 from '../PayPal/TrainingTiers/SemiPrivate2'
import SemiPrivate3 from '../PayPal/TrainingTiers/SemiPrivate3'

const Training = () => {
    const [ selectedGroup, setSelectedGroup ] = useState('')
    const [ openModal, setOpenModal ] = useState(false)

    console.log(selectedGroup)

    const payPalTier = [
        {
            tier: <SemiPrivate1 />,
            class: 'semi-private-1',
            title: 'Semi-Private Training (1x/week)'
        },
        {
            tier: <SemiPrivate2 />,
            class: 'semi-private-2',
            title: 'Semi-Private Training (2x/week)'
        },
        {
            tier: <SemiPrivate3 />,
            class: 'semi-private-3',
            title: 'Semi-Private Training (3x/week)'
        },
        {
            tier: <PayPalSmallGroup1 />,
            class: 'small-group-1',
            title: 'Small Group Training (1x/week)'
        },
        {
            tier: <PayPalSmallGroup2 />,
            class: 'small-group-2',
            title: 'Small Group Training (2x/week)'
        },
        {
            tier: <PayPalSmallGroup3 />,
            class: 'small-group-3',
            title: 'Small Group Training (3x/week)'
        },
    ]

    function groupSelector(e) {
        setSelectedGroup(e.target.className)
        setOpenModal(true)
    }

    function clearGroupSelector() {
        setSelectedGroup('')
        setOpenModal(false)
    }

    return (
        <div className="program">
            <div className="program__gallery">
                <div className="program__gallery-image one">
                    <img src={picOne} alt="LIVEFREELIVEWELl | Personal Training" />
                </div>
                {/* <div className="program__gallery-image two">
                    <img src={picTwo} />
                </div>
                <div className="program__gallery-image three">
                    <img src={picThree} />
                </div> */}
            </div>
            <div className="program__info">
                <h1>Personal Training</h1>
                <ul>
                    <li>One-on-one Coaching</li>
                    <li>Personalized Program</li>
                    <li>Live Feedback</li>
                </ul>
                <h1>Semi-Private Training</h1>
                <ul>
                    <li>Up To 2 Participants</li>
                    <li>Attentive Program Design</li>
                </ul>
                <h1>Small Group Training</h1>
                <ul>
                    <li>Up To 6 Participants</li>
                    <li>Follow a Structured Progressive Program</li>
                    <li>Personalized Feedback</li>
                    <li>Train & Challenge With a Team</li>
                </ul>
                <h2>Select a plan</h2>
                {
                    payPalTier.map((tier, id) => {
                        return (
                            <div key={id} onClick={groupSelector} className="tier-titles">
                                <h3 className={tier.class}>{tier.title}</h3>
                            </div>
                        )
                    })
                }
                {
                    payPalTier.map((tier, id) => {
                        return tier.class === selectedGroup ?
                        <div key={id} className={`${openModal ? "payment-popup" : ""}`}>
                            <div className="payment-popup__inner">
                                <div className="tier-cta">
                                    <h3>{tier.title}</h3>
                                    {tier.tier}
                                </div>
                                <div className="close-paypal-modal" onClick={clearGroupSelector}>
                                    <div className="close-paypal-modal__bar" />
                                    <div className="close-paypal-modal__bar" />
                                </div>
                            </div>
                        </div>
                        :
                        null
                    })
                }
                <ProgramCalculator />
            </div>
        </div>
    )
}

export default Training