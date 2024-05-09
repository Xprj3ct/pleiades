import React from 'react';

// Define a functional component named Container that accepts props of type ContainerProps
const Container = ({ children }) => {
    // The component returns a div with specific classes and its children
    return (
        <div className="max-w-[1440px] w-screen xl:px-20 md:px-8 sm:px-7 px-7 mx-auto font-roboto">
            {children}
        </div>
    );
};

export default Container; // Export the Container component as the default export
