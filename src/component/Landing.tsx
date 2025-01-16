import { useState } from 'react';
import Logo from '../assets/logo.svg'; 
import IllustrationImg from '../assets/image-mockups.png';
import OnlineIcon from '../assets/icon-online.svg';
import BudgetingIcon from '../assets/icon-budgeting.svg';
import OnboardingIcon from '../assets/icon-onboarding.svg';
import ApiIcon from '../assets/icon-api.svg';
import CurrencyImg from '../assets/image-currency.jpg';
import RestaurantImg from '../assets/image-restaurant.jpg';
import PlaneImg from '../assets/image-plane.jpg';
import ConfettiImg from '../assets/image-confetti.jpg';
import FacebookIcon from '../assets/icon-facebook.svg';
import YoutubeIcon from '../assets/icon-youtube.svg';
import TwitterIcon from '../assets/icon-twitter.svg';
import PinterestIcon from '../assets/icon-pinterest.svg';
import InstagramIcon from '../assets/icon-instagram.svg';
const Landing = () => {
    // Toggle mobile menu
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setMenuOpen(false);
        }
      }


      return (
        <div>
          <header>
            <nav className="relative container mx-auto p-6">
              <div className="flex items-center justify-between">
                {/* logo */}
                <div className="pt-2">
                  <img src={Logo} alt="The Logo" />
                </div>
                {/* nav links */}
                <div className="hidden space-x-6 md:flex">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-darkGrayishBlue hover:underline hover:decoration-limeGreen hover:underline-offset-8 hover:decoration-4"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-darkGrayishBlue hover:underline hover:decoration-limeGreen hover:underline-offset-8 hover:decoration-4"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-darkGrayishBlue hover:underline hover:decoration-limeGreen hover:underline-offset-8 hover:decoration-4"
                  >
                    Contact
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-darkGrayishBlue hover:underline hover:decoration-limeGreen hover:underline-offset-8 hover:decoration-4"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-darkGrayishBlue hover:underline hover:decoration-limeGreen hover:underline-offset-8 hover:decoration-4"
                  >
                    Careers
                  </a>
                </div>
                {/* button */}
                <a
                  href="#"
                  className="hidden rounded-full baseline text-white bg-gradient-to-r from-[#31d35c] to-[#2bb7da] p-3 px-6 pt-2 md:block hover:from-[#2bb7da] hover:to-[#31d35c]"
                >
                  Request Invite
                </a>
                {/* Hamburger Menu */}
                <button
                  id="menu-btn"
                  className={`block hamburger md:hidden focus:outline-none ${
                    menuOpen ? "open" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  <span className="hamburger-top"></span>
                  <span className="hamburger-middle"></span>
                  <span className="hamburger-bottom"></span>
                </button>
              </div>
              {/* Mobile Menu */}
              <div
                className={`md:hidden ${
                  menuOpen ? "flex" : "hidden"
                } absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
              >
                <a
                  href="#"
                  className="hover:text-limeGreen"
                  onClick={() => scrollToSection("home")}
                >
                  Home
                </a>
                <a
                  href="#"
                  className="hover:text-limeGreen"
                  onClick={() => scrollToSection("about")}
                >
                  About
                </a>
                <a
                  href="#"
                  className="hover:text-limeGreen"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="hover:text-limeGreen"
                  onClick={() => scrollToSection("blog")}
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="hover:text-limeGreen"
                  onClick={() => scrollToSection("careers")}
                >
                  Careers
                </a>
              </div>
            </nav>
          </header>
          <main className="pt-8">
            {/* Hero section */}
            <section id="hero">
              <section className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
                {/* Left item */}
                <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                  <h1 className="max-w-md text-4xl  text-center md:text-5xl md:text-left">
                    Next generation digital banking
                  </h1>
                  <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                    Take your financial life online. Your Easybank account will
                    be a one-stop-shop for spending, saving, budgeting,
                    investing, and much more.
                  </p>
                  <div className="flex justify-center md:justify-start">
                    {/* button */}
                    <a
                      href="#"
                      className="rounded-full baseline text-white bg-gradient-to-r from-[#31d35c] to-[#2bb7da] p-3 px-6 pt-2 md:block hover:from-[#2bb7da] hover:to-[#31d35c]"
                    >
                      Request Invite
                    </a>
                  </div>
                </div>
                {/* Image */}
                <div className="md:w-1/2">
                  <img src={IllustrationImg} alt="Mockup Image" />
                </div>
              </section>
            </section>
            {/* Features section */}
            <section id="features">
              {/* Flex Container */}
              <section className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0">
                {/* Why Easybank */}
                <div className="flex flex-col space-y-12 md:w-full">
                  <h2 className="max-w-md text-4xl text-center md:text-left">
                    Why choose Easybank?
                  </h2>
                  <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                    We leverage Open Banking to turn your bank account into your
                    financial hub. Control your finances like never before.
                  </p>
                </div>
                {/* Features Icons */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6 md:w-full">
                  {/* First Icon */}
                  <div className="flex flex-col space-y-3 md:space-y-6">
                    {/* Icon */}
                    <div className="flex justify-center md:justify-start mt-6">
                      <img
                        src={OnlineIcon}
                        className="h-14"
                        alt="The Online Icon"
                      />
                    </div>
                    {/* Heading */}
                    <h3 className="text-xl text-center md:text-left">
                      Online Banking
                    </h3>
                    {/* Paragraph */}
                    <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                      Our modern web and mobile applications allow you to keep
                      track of your finances wherever you are in the world.
                    </p>
                  </div>
                  {/* Second Icon */}
                  <div className="flex flex-col space-y-3 md:space-y-6">
                    {/* Icon */}
                    <div className="flex justify-center md:justify-start mt-6">
                      <img
                        src={BudgetingIcon}
                        className="h-14"
                        alt="The Budgeting Icon"
                      />
                    </div>
                    {/* Heading */}
                    <h3 className="text-xl text-center md:text-left">
                      Simple Budgeting
                    </h3>
                    {/* Paragraph */}
                    <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                      See exactly where your money goes each month. Receive
                      notifications when you’re close to hitting your limits.
                    </p>
                  </div>
                  {/* Third Icon */}
                  <div className="flex flex-col space-y-3 md:space-y-6">
                    {/* Icon */}
                    <div className="flex justify-center md:justify-start mt-6">
                      <img
                        src={OnboardingIcon}
                        className="h-14"
                        alt="The Onboarding Icon"
                      />
                    </div>
                    {/* Heading */}
                    <h3 className="text-xl text-center md:text-left">
                      Fast Onboarding
                    </h3>
                    {/* Paragraph */}
                    <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                      We don’t do branches. Open your account in minutes online
                      and start taking control of your finances right away.
                    </p>
                  </div>
                  {/* Fourth Icon */}
                  <div className="flex flex-col space-y-3 md:space-y-6">
                    {/* Icon */}
                    <div className="flex justify-center md:justify-start mt-6">
                      <img src={ApiIcon} className="h-14" alt="The API Icon" />
                    </div>
                    {/* Heading */}
                    <h3 className="text-xl text-center md:text-left">
                      Open API
                    </h3>
                    {/* Paragraph */}
                    <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                      Manage your savings, investments, pension, and much more
                      from one account. Tracking your money has never been
                      easier.
                    </p>
                  </div>
                </div>
              </section>
            </section>
            {/* Testimonials */}
            <section id="testimonials">
              {/* Container for heading and article blocks */}
              <section className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0">
                {/* Heading */}
                <div className="flex flex-col mb-8 space-y-12 md:w-full">
                  <h2 className="max-w-md text-4xl text-center md:text-left">
                    Latest Articles
                  </h2>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6 md:w-full">
                  {/* First Article */}
                  <div className="">
                    {/* Image */}
                    <img
                      className=""
                      src={CurrencyImg}
                      alt="Currency"
                    />
                    {/* Content */}
                    <div className="bg-white">
                      <h5 className="text-sm text-darkGrayishBlue">
                        By Claire Robinson
                      </h5>
                      <h3 className="text-xl font-semibold">
                        Receive money in any currency with no fees
                      </h3>
                      <p className="text-darkGrayishBlue">
                        The world is getting smaller and we're becoming more
                        mobile. So why should you be forced to only receive
                        money in a single currency?
                      </p>
                    </div>
                  </div>

                  {/* Second Article */}
                  <div className="">
                    {/* Image */}
                    <img
                      className=""
                      src={RestaurantImg}
                      alt="Restaurant"
                    />
                    {/* Content */}
                    <div className="bg-white">
                      <h5 className="text-sm text-darkGrayishBlue">
                        By Wilson Hutton
                      </h5>
                      <h3 className="text-xl font-semibold">
                        Treat yourself without worrying about money
                      </h3>
                      <p className="text-darkGrayishBlue">
                        Our simple budgeting feature allows you to separate your
                        spending and set realistic limits each month.
                      </p>
                    </div>
                  </div>

                  {/* Third Article */}
                  <div className="">
                    {/* Image */}
                    <img
                      className=""
                      src={PlaneImg}
                      alt="Plane"
                    />
                    {/* Content */}
                    <div className="bg-white">
                      <h5 className="text-sm text-darkGrayishBlue">
                        By Wilson Hutton
                      </h5>
                      <h3 className="text-xl font-semibold">
                        Take your Easybank card wherever you go
                      </h3>
                      <p className="text-darkGrayishBlue">
                        We want you to enjoy your travels. This is why we don't
                        charge any fees on purchases while you're abroad.
                      </p>
                    </div>
                  </div>

                  {/* Fourth Article */}
                  <div className="">
                    {/* Image */}
                    <img
                      className=""
                      src={ConfettiImg}
                      alt="Confetti"
                    />
                    {/* Content */}
                    <div className="bg-white">
                      <h5 className="text-sm text-darkGrayishBlue">
                        By Claire Robinson
                      </h5>
                      <h3 className="text-xl font-semibold">
                        Our invite-only Beta accounts are now live!
                      </h3>
                      <p className="text-darkGrayishBlue">
                        After a lot of hard work by the whole team, we're
                        excited to launch our closed beta. It's easy to request
                        an invite through the site.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </main>

          {/* Footer */}
          <footer className='bg-darkBlue'>
            {/* Flex container */}
            <div className="container flex flex-col justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
              {/* Logo and social links */}
              <div className="flex flex-col items-center justify-between space-y-12 md:flex-row md:space-y-0 md:items-center">
                {/* Logo */}
                <div>
                  <img src={Logo}  alt="Footer Logo" />
                </div>
                {/* Social Links */}
                <div className="flex justify-center space-x-8">
                  {/* Link 1 */}
                  <a href="#">
                    <img src={FacebookIcon} alt="Facebook Icon" />
                  </a>
                  {/* Link 2 */}
                  <a href="#">
                    <img src={YoutubeIcon} alt="Youtube Icon" />
                  </a>
                  {/* Link 3 */}
                  <a href="#">
                    <img src={TwitterIcon} alt="Twitter Icon" />
                  </a>
                  {/* Link 4 */}
                  <a href="#">
                    <img src={PinterestIcon} alt="Pinterest Icon" />
                  </a>
                  {/* Link 5 */}
                  <a href="#">
                    <img src={InstagramIcon} alt="Instagram Icon" />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      );
}
export default Landing;