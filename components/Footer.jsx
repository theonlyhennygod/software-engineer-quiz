import React from "react";

const Footer = () => {
    return (
        <footer className="w-full py-4 bg-gray-200 dark:bg-gray-800 text-center">
            <p className="text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Software Engineer Quiz App. Made w/ ❤️ by
                <a href="https://argenisdelarosa.com/about" className="text-blue-500 hover:underline"> Argenis</a>
            </p>
        </footer>
    );
}

export default Footer;
