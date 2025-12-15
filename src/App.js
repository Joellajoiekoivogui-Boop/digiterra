import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import ParametresDuCompte from "./ParametresDuCompte";
import ProfilUtilisateur from "./ProfilUtilisateur";
import WelcomeDashboard from "./WelcomeDashboard";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<WelcomeDashboard />} />
        <Route path="profil" element={<ProfilUtilisateur />} />
        <Route path="parametres" element={<ParametresDuCompte />} />
      </Route>
    </Routes>
  );
}

export default App;
