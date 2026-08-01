import {FaPlaneDeparture,
    FaHotel,
    FaMapMarkedAlt,
    FaCarSide,
    FaShieldAlt,
    FaHeadset,
} from "react-icons/fa"

const services=[
    {
        id:1,
        icon: <FaPlaneDeparture/>,
        title: "Flight Booking",
        description:'Book affordable flights to your favourite destinations with the best deals.'
    },
     {
        id:2,
        icon: <FaHotel/>,
        title: "Hotel Booking",
        description:'Find comfortable hotels with premium facilities at affordable prices.'
    },
     {
        id:3,
        icon: <FaMapMarkedAlt/>,
        title: "Tour Guide",
        description:'Explore amazing places with experienced local guides and travel experts.'
    },
     {
        id:4,
        icon: <FaCarSide/>,
        title: "Transportation",
        description:'Enjoy safe and comfortable transportation throughout your journey.'
    },
      {
        id:5,
        icon: <FaShieldAlt/>,
        title: "Travel Insurance",
        description:'Travel with confidence through secure and reliable insurance coverage.'
    },

      {
        id:6,
        icon: <FaHeadset/>,
        title: "24/7 Support",
        description:'Our dedicated support team is available anytime to help you during your trip .'
    },


]
export default services;