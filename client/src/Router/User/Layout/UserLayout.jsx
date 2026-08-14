
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import SmoothScroll from '../../../components/common/SmoothScroll';

const pageVariants = {
   initial: { opacity: 0, scale: 0.97 },
   animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
   exit: { opacity: 0, scale: 1.02, transition: { duration: 0.3, ease: 'easeIn' } },
};

const UserLayout = () => {
   const darkMode = useSelector((state) => state.mainSlice.darkMode);
   const location = useLocation();

   useEffect(() => {
      document.documentElement.classList.toggle('dark', darkMode);
      document.body.style = `font-family: 'Poppins', sans-serif; transition: background-color 0.5s, color 0.5s;`;
   }, [darkMode]);

   return (
      <SmoothScroll>
         <div>
               <header>
                  <Navbar />
               </header>

               <main className='mt-16 sm:mt-20'>
                  <AnimatePresence mode='wait'>
                     <motion.div
                        key={location.pathname}
                        variants={pageVariants}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                     >
                        <Outlet />
                     </motion.div>
                  </AnimatePresence>
               </main>
               <footer>
                  <Footer />
               </footer>
         </div>
      </SmoothScroll>
   );
}

export default UserLayout;
