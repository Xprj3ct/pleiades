import React from 'react';

const Card = ({ svg, title, text, buttonText }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-start justify-center gap-4 h-72 w-full md:w-1/4 mx-2 mb-4 hover:shadow-xl transition-shadow duration-300">
            {/* SVG icon at the top */}
            <div className="w-12 h-12 mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                {svg}
            </div>
            
         <div>
               {/* Header */}
               <h2 className="text-lg font-semibold mb-2">{title}</h2>
            
            {/* Descriptive text */}
            <p className="text-gray-600 mb-4">{text}</p>
         </div>
            
            {/* Button */}
            <a href="#" className="bg-white text-blue-700 py-2 px-4 rounded-lg hover:bg-blue-700 hover:text-white border border-blue-700 transition-colors duration-300">
                {buttonText}
            </a>
        </div>
    );
};

const ContactCard = () => {
    return (
        <div className="flex md:flex-nowrap flex-wrap justify-center items-center p-8">
            {/* Card 1 */}
            <Card
                svg={(
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                  
                )}
                title="Chat to Admin"
                text="Send us a message"
                buttonText="Chat Admin"
            />
            
            {/* Card 2 */}
            <Card
                svg={(
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>                  
                )}
                title="Chat Support"
                text="We're here to help"
                buttonText="Chat Support"
            />
            
            {/* Card 3 */}
            <Card
                svg={(
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  
                )}
                title="Visit Us"
                text="Visit our office HQ"
                buttonText="Get direction"
            />
            
            {/* Card 4 */}
            <Card
                svg={(
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  
                )}
                title="Call Us"
                text="Mon-Fri from 8am - 5pm."
                buttonText="Call Our Team"
            />
        </div>
    );
};

export default ContactCard;
