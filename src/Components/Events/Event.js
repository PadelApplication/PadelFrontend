function Event({ event, onJoin, onLeave }) {
    return (
        <div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 basis-1/4 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white pb-8">
                    {event.title}
                </h1>
                <p className="mb-3 font-bold text-xl text-gray-700 dark:text-gray-400">
                    Date: {event.date}
                </p>
                <p className="mb-3 font-bold text-xl text-gray-700 dark:text-gray-400">
                    Time: {event.time}
                </p>
                <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">
                    Place: {event.place}
                </p>
                <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">
                    Court: {event.court}
                </p>
                <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">
                    People {event.people}/4
                </p>
                <button
                    onClick={() => onJoin(event.id)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Join
                    <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </button>
                {// Hidden for now becuse we dont need the leave yet
                }
                <button
                    onClick={() => onLeave(event.id)}
                    className="hidden inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
                >
                    Leave
                    <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Event;
