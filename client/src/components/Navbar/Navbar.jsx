import { Link } from "react-router-dom";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../Redux/Reducers/Reducer";
import "./Navbar.css";
import { education, experience, project, skill } from "../../services/information";



function Navbar() {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.mainSlice.darkMode);
    const smallMobileNav = useMediaQuery('(max-width: 724px)');
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [filteredResults, setFilteredResults] = useState([]);
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 20);

            if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const toggleDarkMode = () => dispatch(toggleTheme());
    const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

    const handleSearch = (e) => {
        console.log("e.target.value", e.target.value);
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        if (term.trim() === '') {
            setFilteredResults([]); 
            return;
        }

        const projectMatches = project.filter(project =>
            project.name.toLowerCase().includes(term) ||
            project.description?.toLowerCase().includes(term)
        );

        const experienceMatches = experience.flatMap(exp =>
            exp.project?.filter(p =>
            p.name.toLowerCase().includes(term) ||
            p.description?.toLowerCase().includes(term)
            ) || []
        );

        const educationMatches = education.filter(edu =>
            edu?.schoolName.toLowerCase().includes(term) ||
            edu?.degree?.toLowerCase().includes(term) ||
            edu?.major?.toLowerCase().includes(term)
        );

        const skillMatches = skill.filter(skill =>
            skill?.items?.filter(item => item.name.toLowerCase().includes(term))
        );

        setFilteredResults([
            ...projectMatches.map(p => ({ ...p, type: 'projects' })),
            ...experienceMatches.map(p => ({ ...p, type: 'experience' })),
            ...educationMatches.map(e => ({ ...e, type: 'education' })),
            ...skillMatches.map(s => ({ ...s, type: 'skills' }))
        ]);
    };



    return (
        <main>
            <motion.nav
                animate={{ y: hidden ? '-100%' : '0%' }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 w-full ${darkMode ? 'bg-gray-900' : 'bg-white'} ${darkMode ? 'text-white' : 'text-gray-900'} z-50 px-2 sm:px-4 flex flex-wrap justify-between items-center gap-2 transition-all duration-300 ${scrolled ? 'py-1.5 sm:py-2 shadow-2xl backdrop-blur-md bg-opacity-90' : 'py-2 sm:py-3 shadow-lg'}`}>
                {/* Left - Logo & Menu Toggle */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="lg:hidden">
                        <button onClick={toggleMobileMenu} className={`${darkMode ? 'text-white' : 'text-gray-900'} text-2xl focus:outline-none p-1`}>
                            {showMobileMenu ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>

                    {!smallMobileNav && (
                        <Link to="/" className={`text-xl sm:text-2xl font-semibold ${darkMode ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'} transition`}>
                            PORTFOLIO
                        </Link>
                    )}
                </div>

                {/* Center - Search Bar (Hidden on small mobile) */}
                {!smallMobileNav && (
                    <div className="relative flex-1 max-w-md mx-2 sm:mx-4">
                        <div className="flex items-center">
                            <input
                                type="search"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={handleSearch}
                                className={`w-full rounded-md px-2 sm:px-3 py-1.5 sm:py-2 ${darkMode ? 'bg-gray-800 border-gray-600 text-gray-300' : 'bg-gray-100 border-gray-300 text-gray-900'} border text-sm focus:ring-2 focus:ring-blue-500 outline-none`}
                            />
                        </div>
                        {searchTerm && filteredResults.length > 0 && (
                            <div className={`absolute top-full mt-1 left-0 right-0 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded shadow-lg z-50 max-h-64 overflow-y-auto`}>
                                {filteredResults.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={`/${item.type}`}
                                        onClick={() => setSearchTerm('')}
                                        className={`block px-4 py-2 ${darkMode ? 'hover:bg-gray-700 border-gray-700' : 'hover:bg-gray-100 border-gray-200'} border-b text-sm`}
                                    >
                                        <strong>{item.name}</strong>
                                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.description?.slice(0, 60)}...</p>
                                        <span className="text-xs italic text-blue-500">({item.type})</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Right - Theme Toggle & Desktop Menu */}
                <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                    <button 
                        onClick={toggleDarkMode} 
                        className={`p-1.5 sm:p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors`}
                        aria-label="Toggle theme"
                    >
                        {darkMode ? <DarkModeIcon className="text-yellow-400 text-xl sm:text-2xl" /> : <LightModeIcon className="text-yellow-600 text-xl sm:text-2xl" />}
                    </button>

                    <ul className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm">
                        {["Experience", "Education", "Projects", "Contact", "Information"].map((item) => (
                            <li key={item}>
                                <Link 
                                    to={`/${item}`} 
                                    className={`relative group ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition`}
                                >
                                    {item}
                                    <span className={`absolute left-0 bottom-0 h-0.5 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} w-0 group-hover:w-full transition-all duration-500 ease-out`}></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.nav>

            {/* Mobile Nav Dropdown */}
            {showMobileMenu && (
                <div className={`lg:hidden fixed top-14 sm:top-16 left-0 w-full ${darkMode ? 'bg-gray-800' : 'bg-white'} ${darkMode ? 'text-white' : 'text-gray-900'} shadow-md flex flex-col items-center py-4 z-40`}>
                    {/* Mobile Search Bar */}
                    {smallMobileNav && (
                        <div className="relative w-full px-4 mb-4">
                            <input
                                type="search"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={handleSearch}
                                className={`w-full rounded-md px-3 py-2 ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-100 border-gray-300 text-gray-900'} border text-sm focus:ring-2 focus:ring-blue-500 outline-none`}
                            />
                            {searchTerm && filteredResults.length > 0 && (
                                <div className={`absolute top-full mt-1 left-4 right-4 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'} rounded shadow-lg z-50 max-h-64 overflow-y-auto`}>
                                    {filteredResults.map((item, index) => (
                                        <Link
                                            key={index}
                                            to={`/${item.type}`}
                                            onClick={() => {
                                                setSearchTerm('');
                                                setShowMobileMenu(false);
                                            }}
                                            className={`block px-4 py-2 ${darkMode ? 'hover:bg-gray-600 border-gray-600' : 'hover:bg-gray-100 border-gray-200'} border-b text-sm`}
                                        >
                                            <strong>{item.name}</strong>
                                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.description?.slice(0, 60)}...</p>
                                            <span className="text-xs italic text-blue-500">({item.type})</span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                    {["Experience", "Education", "Projects", "Contact", "Information"].map((item) => (
                        <Link
                            key={item}
                            to={`/${item}`}
                            onClick={() => setShowMobileMenu(false)}
                            className={`py-2 px-4 w-full text-center ${darkMode ? 'hover:bg-gray-700 border-gray-700' : 'hover:bg-gray-100 border-gray-200'} transition border-b`}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </main>
    );
}

export default Navbar;
