import React, {useState} from "react";

function NewEvent() {
    const [padelSession, setPadelSession] = useState({
        title: "",
        date: "",
        time: "",
        place: "",
        court: "",
        people: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPadelSession({
            ...padelSession,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform actions like sending the data to a server here
        console.log(padelSession);
    };

    return (
        <div className="p-8 max-w-max min-h-screen flex flex-col">
            <h1 className="text-5xl text-cyan-300 pb-12 font-semibold static">
                Create Padel Event
            </h1>

            <div className="bg-white py-8 px-4 shadow rounded sm:px-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Title
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="title"
                                id="title"
                                onChange={handleChange}
                                value={padelSession.title}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-black sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="date"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Date
                        </label>
                        <div className="mt-1">
                            <input
                                type="date"
                                name="date"
                                id="date"
                                onChange={handleChange}
                                value={padelSession.date}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-black sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="time"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Time
                        </label>
                        <div className="mt-1">
                            <input
                                type="time"
                                name="time"
                                id="time"
                                onChange={handleChange}
                                value={padelSession.time}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-black sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="place"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Place
                        </label>
                        <div className="mt-1">
                            <select
                                name="place"
                                id="place"
                                onChange={handleChange}
                                value={padelSession.place}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-black sm:text-sm border-gray-300 rounded-md"
                            >
                                <option value="">Select a Place</option>
                                <option value="padelBerghem">Padelcentrum Berghem</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="court"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Court
                        </label>
                        <div className="mt-1">
                            <select
                                name="court"
                                id="court"
                                onChange={handleChange}
                                value={padelSession.court}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-black sm:text-sm border-gray-300 rounded-md"
                            >
                                <option value="">Select a Court</option>
                                <option value="Court1">Court 1</option>
                                <option value="Court2">Court 2</option>
                                <option value="Court3">Court 3</option>
                                <option value="Court4">Court 4</option>
                                <option value="Court5">Court 5</option>
                                <option value="Court6">Court 6</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="people"
                            className="block text-sm font-medium text-gray-700"
                        >
                            People
                        </label>
                        <div className="mt-1">
                            <input
                                type="number"
                                name="people"
                                id="people"
                                onChange={handleChange}
                                value={padelSession.people}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full  text-black sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                        >
                            Create Event
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewEvent;
