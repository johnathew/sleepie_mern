// import { RequestHandler } from "express";
// import Charm from "../models/charm";
// import User from "../models/user";
// import Stripe from "stripe";
// import env from "../util/validateEnv";

// export const getCheckoutSession: RequestHandler = async (req, res) => {
//     try {
//         //get current user
//         const user = await User.findById(req.params.userId);
//         //get the charm
//         const charm = await Charm.findById(req.params.charmId);
//         //create checkout session
//         const stripe = new Stripe(env.STRIPE_SECRET_KEY);

//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ['card'],
//             mode: 'payment',
//             success_url: `${env.CLIENT_URL}/success`,
//             cancel_url: `${req.protocol}://${req.get('host')}/cancel`,
//             customer_email: user?.email,
//             client_reference_id: req.params.charmId,
//     } catch (error) {

//     }
