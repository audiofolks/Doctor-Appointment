import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsInstagram,
  BsDiscord,
  BsYoutube,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { TiPlus } from "react-icons/ti";

export default function FooterCom() {
  return (
    <Footer container className="border border-b-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className=" flex self-center whitespace-nowrap text-lg sm:text-xl font-semibold  dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white">
                EaseMediCare
              </span>
              <TiPlus />
            </Link>
            <div className="py-4 text-gray-500 ">
              EaseMediCare: Your trusted provider for personalized healthcare,
              offering convenience and excellence in every appointment.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Quick Links" />
              <Footer.LinkGroup col>
                <Footer.Link href="/" target="_blank" rel="noopener noreferrer">
                  Home
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  rel="noopener noreferrer"
                >
                  About
                </Footer.Link>
                <Footer.Link
                  href="/services"
                  rel="noopener noreferrer"
                >
                  Services
                </Footer.Link>
                <Footer.Link
                  href="#"
                  rel="noopener noreferrer"
                >
                  Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="I want to" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/find-doc"
                  rel="noopener noreferrer"
                >
                  Find a Doctor
                </Footer.Link>
                <Footer.Link
                  href="#"
                  rel="noopener noreferrer"
                >
                  Request an Appointment
                </Footer.Link>
                <Footer.Link
                  href="#"
                  rel="noopener noreferrer"
                >
                  Find a Location
                </Footer.Link>
                <Footer.Link
                  href="#"
                  rel="noopener noreferrer"
                >
                  Get a Option
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Support" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Donate</Footer.Link>
                <Footer.Link href="#">Terms &amp; Condition</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="developed by TechnoTitans all rights reseved"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsLinkedin} />
            <Footer.Icon href="#" icon={BsDiscord} />
            <Footer.Icon href="#" icon={BsYoutube} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
