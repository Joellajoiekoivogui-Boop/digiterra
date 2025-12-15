import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Sidebar */}
      <aside style={{ width: "200px", background: "#f5f5f5", padding: "20px" }}>
        <h3>Admin Panel</h3>
        <nav>
          <ul>
            <li><Link to="">Accueil</Link></li>
            <li><Link to="profil">Profil</Link></li>
            <li><Link to="parametres">Paramètres</Link></li>
            <p>Bonjour </p>
          </ul>
        </nav>
      </aside>

      {/* Zone dynamique */}
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}
