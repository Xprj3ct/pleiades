import React from 'react';

const ContactForm = () => {
    return (
        <form className="max-w-lg mx-auto p-4 bg-white rounded-lg space-y-4">
            {/* First and Last Name */}
            <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1">
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-1">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        required
                    />
                </div>
                <div className="flex-1 mt-4 md:mt-0">
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-1">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        required
                    />
                </div>
            </div>

            {/* Email and Phone Number */}
            <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        required
                    />
                </div>
                <div className="flex-1 mt-4 md:mt-0">
                    <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-1">
                        Phone Number
                    </label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 bg-gray-200 border border-r-0 border-gray-300 rounded-l-lg">
                            +234
                        </span>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            className="flex-1 px-3 py-2 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                            pattern="0[789][01]\d{8}"
                            placeholder="e.g. 08012345678"
                        />
                    </div>
                </div>
            </div>

            {/* Message Text Area */}
            <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    rows="5"
                    required
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
                Submit
            </button>
        </form>
    );
};

export default ContactForm;
