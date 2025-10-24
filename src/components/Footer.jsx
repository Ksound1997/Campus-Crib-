import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10 px-8 text-center md:text-left">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">CampusCrib</h3>
                    <p className="text-gray-600">
                        Making student life simpler, safer and connected.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Quick Links</h4>
                    <ul className="text-gray-600 space-y-2">
                        <li>Home</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Get in touch</h4>
                    <p className="text-gray-600">+234 813 987 9871</p>
                    <p className="text-gray-600">Campuscrib@gmail.com</p>
                </div>
            </div>

            <div className="mt-10 text-gray-500 text-sm">
                © 2025 CampusCrib. All rights reserved.
            </div>
        </footer>
    );



}

export default Footer