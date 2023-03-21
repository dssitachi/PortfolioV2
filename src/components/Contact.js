import { motion } from "framer-motion";


function Contact() {

    function generateMailtoLink() {
        const emailAddress = 'dipeshshivrame@gmail.com';
        const subject = '';
        const body = '';
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        return mailtoLink;
    }

    function sendEmail() {
        window.location.href = generateMailtoLink()
    }

    return (
        <section className="mt-64 pb-64 mx-auto px-8 md:px-20 lg:px-24 max-w-5xl">
            <div className="flex flex-col justify-center items-center text-center">
                <h2 className="text-6xl w-full mb-6 text-center text-gray-300 font-bold">Let's connect</h2>
                <p className="text-gray-500 my-1">I'm always available to answer your queries and exchange greetings!</p>
                <p className="text-gray-500 my-1">Please feel free to reach out to me anytime, and </p>
                <p className="text-gray-500 my-1">I'll do my utmost to respond as promptly as possible.</p>
                <motion.button whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }} onClick={sendEmail}
                    className="text-my-text border-2 border-my-text px-6 py-3 mt-4" > Say Hello
                </motion.button>
            </div>
        </section>
    )
}

export default Contact;