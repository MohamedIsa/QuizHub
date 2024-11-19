import {Link} from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 py-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8 sm:mb-0">
              <h4 className="text-lg text-white capitalize mb-5 font-medium relative before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:bg-pink-500 before:h-0.5 before:w-12">
                company
              </h4>
              <ul className="list-none">
                <li className="mb-2">
                  <Link to="/about" className="text-base text-gray-400 hover:text-white transition-all duration-300 ease-in-out hover:pl-2">

                      About Us

                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/OurServices" className="text-base text-gray-400 hover:text-white transition-all duration-300 ease-in-out hover:pl-2">

                      our services

                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/privacyPolicy" className="text-base text-gray-400 hover:text-white transition-all duration-300 ease-in-out hover:pl-2">

                      privacy policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/AffiliateProgram" className="text-base text-gray-400 hover:text-white transition-all duration-300 ease-in-out hover:pl-2">
                    
                      Affiliate Program
                    
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8 sm:mb-0">
              <h4 className="text-lg text-white capitalize mb-5 font-medium relative before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:bg-pink-500 before:h-0.5 before:w-12">
                get help
              </h4>
              <ul className="list-none">
                <li className="mb-2">
                  <Link to="/FAQ" className="text-base text-gray-400 hover:text-white transition-all duration-300 ease-in-out hover:pl-2">
   
                      FAQ

                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact" className="text-base text-gray-400 hover:text-white transition-all duration-300 ease-in-out hover:pl-2">

                      Contact

                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8 sm:mb-0">
              <h4 className="text-lg text-white capitalize mb-5 font-medium relative before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:bg-pink-500 before:h-0.5 before:w-12">
                Serves
              </h4>
              <ul className="list-none">
                <li className="mb-2">
                  <Link to="/GPAStudent" className="text-base text-gray-400 hover:text-white transition-all duration-300 ease-in-out hover:pl-2">
                    
                      GPA calculate
                    
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8 sm:mb-0">
              <h4 className="text-lg text-white capitalize mb-5 font-medium relative before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:bg-pink-500 before:h-0.5 before:w-12">
                follow us
              </h4>
              <div className="flex space-x-4">
                <a href="https://x.com/Bh_9_?t=WAuWIBDZJHL16wc1JgzRJQ&s=09/" className="h-10 w-10 bg-white bg-opacity-20 text-white rounded-full flex items-center justify-center transition-all duration-500 ease-in-out hover:bg-white hover:text-gray-800">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.instagram.com/__f.001?igsh=em5kc3Bvc2kya2Vk/" className="h-10 w-10 bg-white bg-opacity-20 text-white rounded-full flex items-center justify-center transition-all duration-500 ease-in-out hover:bg-white hover:text-gray-800">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/fadel-mohammad-b70662151/" className="h-10 w-10 bg-white bg-opacity-20 text-white rounded-full flex items-center justify-center transition-all duration-500 ease-in-out hover:bg-white hover:text-gray-800">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-white capitalize mt-8">
            Copyright 2024. UniClub. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;