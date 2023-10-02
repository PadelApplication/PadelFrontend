import React, {useState} from "react";

function CreateEvent() {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        time: "",
        place: "",
        court: "",
        people: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform actions like sending the data to a server here
        console.log(formData);
    };

    return (
        <div className="max-w-max min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Create Event
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
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
                                    value={formData.title}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    value={formData.date}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    value={formData.time}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                <input
                                    type="text"
                                    name="place"
                                    id="place"
                                    onChange={handleChange}
                                    value={formData.place}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
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
                                <input
                                    type="text"
                                    name="court"
                                    id="court"
                                    onChange={handleChange}
                                    value={formData.court}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
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
                                    value={formData.people}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Create Event
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateEvent;
