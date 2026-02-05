import { useState, useEffect } from 'react';

// TODO: Connect to backend
const cars = [];

function App() {
    const [selectedCar, setSelectedCar] = useState(null);

    if (selectedCar) {
        return (
            <div className="min-h-screen bg-white p-8 font-sans">
                <button
                    onClick={() => setSelectedCar(null)}
                    className="mb-6 text-black border border-black px-4 py-2 hover:bg-gray-200"
                >
                    &larr; Back to Catalog
                </button>

                <div className="border-2 border-black p-4 max-w-4xl mx-auto">
                    <div className="h-96 w-full border-b-2 border-black mb-4">
                        <img
                            src={selectedCar.image}
                            alt={selectedCar.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-3xl font-bold">{selectedCar.name}</h2>
                            <span className="border border-black px-3 py-1 text-sm font-bold uppercase">
                                {selectedCar.category}
                            </span>
                        </div>
                        <p className="mb-6 text-lg">
                            Experience the comfort and performance of the {selectedCar.name}.
                            Perfect for your next trip.
                        </p>
                        <div className="flex items-center justify-between border-t-2 border-black pt-6">
                            <div>
                                <p className="text-sm font-bold">Price per day</p>
                                <p className="text-3xl font-bold">${selectedCar.price}</p>
                            </div>
                            <button
                                onClick={() => alert("Booked!")}
                                className="bg-blue-600 text-white px-8 py-3 hover:bg-blue-800 font-bold border-2 border-black"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white font-sans">

            <div className="border-b-2 border-black p-4 mb-8">
                <div className="container mx-auto">
                    <h1 className="text-2xl font-bold text-black">Catalog</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cars.map(car => (
                        <div
                            key={car.id}
                            className="border-2 border-black cursor-pointer hover:bg-gray-100"
                            onClick={() => setSelectedCar(car)}
                        >
                            <div className="h-48 border-b-2 border-black">
                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-1">{car.name}</h3>
                                <p className="text-gray-600 text-sm mb-4 font-bold">{car.category}</p>
                                <div className="flex justify-between items-center text-black font-bold">
                                    <span>${car.price}/day</span>
                                    <span className="text-sm underline">View Details &rarr;</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
