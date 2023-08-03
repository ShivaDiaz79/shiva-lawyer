// components/Layout.js
import Navbar from './Navbar';
import Footers from './Footers';
import ContactWhatsapp from './Contenido/ContactWhatsapp';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footers />
      <ContactWhatsapp />
    </div>
  );
};

export default Layout;
