import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1', label: 'Shop' },
    { value: '8+', label: 'Years' },
    { value: '1000+', label: ' Happy Customers' },
];

export const products = [
    {
        
        name: "Periodic Services",
        price: " ₹ 99 ",
    },
    {
       
        name: "Two-wheeler Inspections",
        price: "Connect for details",
    },
    {
        
        name: "Tyres and Wheel care",
        price: "Connect for details",
    },
    {
        imgURL: shoe7,
        name: "Detailic Services",
        price: "Connect for details",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "No hidden Charges",
        subtext: "Enjoy seamless  with our complimentary  service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Prashant Kumar',
        rating: 4.7,
        feedback: "The attention to detail and the quality of the service exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: "not to seee ",
        customerName: 'Aadil muniri',
        rating: 5.0,
        feedback: "The  not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    // {
    //     title: "Products",
    //     links: [
    //         { name: "Air Force 1", link: "/" },
    //         { name: "Air Max 1", link: "/" },
    //         { name: "Air Jordan 1", link: "/" },
    //         { name: "Air Force 2", link: "/" },
    //         { name: "Nike Waffle Racer", link: "/" },
    //         { name: "Nike Cortez", link: "/" },
    //     ],
    // },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "Saifi auto  Workshop", link: "" },
            { name: "Chachrai mode infront of janta inter college", link: "" },
            { name: "Jahangirabad BulandShahr ", link: "" },
            { name: "Zip 202394", link: "" },
            { name: ",, ", link: "" },
            { name: "saifiauto@outlook.com", link: "mailto:harishsaifi2001@gmail.com" },
            { name: "call now 9536050891", link: "tel:+919536050891" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo",link:"https://www.facebook.com/harishsaifi01" },
    { src: twitter, alt: "twitter logo",link:"" },
    { src: instagram, alt: "instagram logo" ,link:"https://www.instagram.com/harissaifi__/"},
];
