import Footers from "./Footers";
import ContactWhatsapp from "./Contenido/ContactWhatsapp";

const Layout = ({ children }) => {
  return (
    <>
     
      <main>{children}</main>
      <ContactWhatsapp />
      <Footers />
    </>
  );
};

export default Layout;
