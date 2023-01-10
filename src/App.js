import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <NavigationBar />
      <div style={{ marginTop: 65 }}>
        <div className="container">
          <div className="m-10">
            <h4 className="text-center">
             <i style={{ fontSize: 24 }}>Mini-Contact-Apps</i>
            </h4>
            <div className="alert alert-primary" role="alert">
              <h4 className="alert-heading mt-10">Penambahan Kontak</h4>
              <p>Fitur ini berfungsi untuk menyimpan kontak teman kamu</p>
              <div className="mb-10 text-right">
                <Link to="/add-contact" className="btn alt-dm">
                  Cobain Sekarang
                </Link>
              </div>
            </div>
            <div className="alert alert-primary mt-10" role="alert">
              <h4 className="alert-heading mt-10">Pengelolaan Kontak</h4>
              <p>Fitur ini berfungsi untuk mengelola daftar kontak kamu</p>
              <div className="mb-10 text-right">
                <Link to="/list-contact" className="btn alt-dm">
                  Lihat Lebih Detil
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
