export default function ContactForm() {
    return (
        <form className="flex flex-col gap-3 mt-10 max-w-3xl mx-auto text-sm">
            <div className="flex gap-3 ">
                <div className="w-full md:w-1/2">
                    <label htmlFor="firstName" className="block text-white">First Name</label>
                    <input type="text" required id="firstName" name="firstName" className="border border-gray-300 rounded-md py-2 px-3 mt-3 w-full focus:outline-none focus:border-blue-500"/>
                </div>

                <div className="w-full md:w-1/2">
                    <label htmlFor="lastName" className="block text-white">Last Name</label>
                    <input type="text" required id="lastName" name="lastName" className="border border-gray-300 rounded-md py-2 px-3 mt-3 w-full focus:outline-none focus:border-blue-500"/>
                </div> 
            </div>

            <label htmlFor="email" className="block text-white">Email</label>
            <input type="email" required id="email" name="email" className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"/>
            
            <label htmlFor="message" className="block text-white">Message</label>
            <textarea required id="message" name="message" className="border border-gray-300 rounded-md py-2 px-3 w-full h-32 focus:outline-none focus:border-blue-500"></textarea>

            <div className="inline-flex items-center justify-center mt-3">
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300">Submit</button>
            </div>
        </form>
    )
}
