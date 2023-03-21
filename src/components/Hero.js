import { motion } from "framer-motion";

function Home() {


    return (

        <section className="w-full h-screen">

            <motion.div className="max-w-5xl mx-auto px-8 flex flex-col justify-center h-full"
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>

                <p className="text-[#7DF9FF] whitespace-pre py-4">Hi,  my  name  is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Dipesh Ss. </h1>
                <h3 className="my-4 text-3xl sm:text-4xl font-normal text-gray-300">I craft interactive and intuitive web experiences by bridging the gap between
                    design and development.
                </h3>

                <div>
                    <motion.button whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}
                        className="text-my-text border-2 border-my-text px-6 py-3 my-2 font-bold" >My Work
                    </motion.button>
                </div>
            </motion.div>

        </section>
    )
}

export default Home;