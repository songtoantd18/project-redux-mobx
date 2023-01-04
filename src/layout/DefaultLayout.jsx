import Sidebar from "../components/Sidebar";
import Header from "./../components/Header";

function DefaultLayout({ children }) {
  return (
    <div className="layout">
      <Header />

      <Sidebar />

      <div className="containerBody">{children}</div>
    </div>
  );
}

export default DefaultLayout;
