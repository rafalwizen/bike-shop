import React from 'react'

const About: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">About Our Bike Shop</h1>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Our History</h2>
                    <p className="mb-4">
                        Founded in 2005 in the picturesque town of Tarnowskie Góry, Poland, our bike shop started as a small family business with a passion for cycling. Over the years, we've grown from a modest repair shop to a full-service bicycle retailer, known for our quality products and exceptional customer service.
                    </p>
                    <p className="mb-4">
                        Our journey has been marked by a commitment to promoting cycling culture in our local community and beyond. We've organized numerous cycling events, supported local athletes, and continuously expanded our range of bikes and accessories to meet the evolving needs of our customers.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">Where We're From</h2>
                    <p className="mb-4">
                        We're proud to call Tarnowskie Góry our home. Located in southern Poland, our town is known for its rich mining history and beautiful landscapes. The surrounding areas offer a variety of terrains perfect for cycling enthusiasts, from urban paths to challenging mountain trails.
                    </p>
                    <p>
                        Our location: ul. Krakowska 153, 42-600 Tarnowskie Góry, Poland
                    </p>
                </div>
                <div>
                    <img
                        src="/images/headquarters.jpg"
                        alt="Our Bike Shop Headquarters"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 mt-2 text-center">Our Bike Shop Headquarters in Tarnowskie Góry</p>
                </div>
            </div>
        </div>
    )
}

export default About