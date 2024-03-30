import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { BsSearchHeart } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";

export default function Header() {
  const Path = useLocation().pathname;
  return (
    <Navbar className=" border-b-2">
      <Link
        to="/"
        className=" flex self-center whitespace-nowrap text-sm sm:text-xl font-semibold"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white">
          EaseMediCare
        </span>
        <TiPlus />
      </Link>

      <div className="flex gap-2 md: order-2">
        <Button className="w-12 h-10 hidden sm:inline " color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="greenToBlue">Sign In</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={Path == "/"} as="div">
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={Path == "/services"} as="div">
          <Link to="/services">Services</Link>
        </Navbar.Link>
        <Navbar.Link active={Path == "/FindDoc"} as="div">
          <Link to="/FindDoc">Find a doctor</Link>
        </Navbar.Link>
        <Navbar.Link active={Path == "/about"} as="div">
          <Link to="/about">About</Link>
        </Navbar.Link>
      </Navbar.Collapse>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={BsSearchHeart}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <BsSearchHeart />
      </Button>
    </Navbar>
  );
}
