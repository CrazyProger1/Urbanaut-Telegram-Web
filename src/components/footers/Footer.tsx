import FooterNavbar from "../navbars/FooterNavbar.tsx";

const Footer = () => {
  return (
    <div className=" fixed
             inset-x-0
             bottom-0 ml-4 mr-4">
      <footer className="bg-card rounded-t-2xl">
        <div className="w-full">
          <FooterNavbar />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
