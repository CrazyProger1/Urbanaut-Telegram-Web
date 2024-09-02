import FooterNavbar from "../navbars/FooterNavbar.tsx";

const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 ml-4 mr-4 bg-foreground rounded-t-2xl">
      <FooterNavbar />
    </footer>
  );
};

export default Footer;
