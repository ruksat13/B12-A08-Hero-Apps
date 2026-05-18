import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav style={{ background: "white", borderBottom: "1px solid #e9e9e9", padding: "16px 80px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "78px", position: "sticky", top: 0, zIndex: 100 }}>

            <NavLink to="/" style={{ display: "flex", alignItems: "center", gap: "4px", textDecoration: "none" }}>
                <img src="/logo.png" alt="logo" style={{ width: "40px", height: "40px" }} />
                <span style={{ fontWeight: "700", fontSize: "16px", background: "linear-gradient(150deg, #632EE3 5.68%, #9F62F2 88.38%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>HERO.IO</span>
            </NavLink>

            <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
                <NavLink to="/" end style={({ isActive }) => ({ fontSize: "16px", fontWeight: isActive ? "600" : "500", textDecoration: isActive ? "underline" : "none", background: isActive ? "linear-gradient(143deg, #632EE3 5.68%, #9F62F2 88.38%)" : "none", WebkitBackgroundClip: isActive ? "text" : "unset", WebkitTextFillColor: isActive ? "transparent" : "rgba(0,0,0,0.9)" })}>Home</NavLink>
                <NavLink to="/apps" style={({ isActive }) => ({ fontSize: "16px", fontWeight: isActive ? "600" : "500", textDecoration: isActive ? "underline" : "none", background: isActive ? "linear-gradient(143deg, #632EE3 5.68%, #9F62F2 88.38%)" : "none", WebkitBackgroundClip: isActive ? "text" : "unset", WebkitTextFillColor: isActive ? "transparent" : "rgba(0,0,0,0.9)" })}>Apps</NavLink>
                <NavLink to="/installation" style={({ isActive }) => ({ fontSize: "16px", fontWeight: isActive ? "600" : "500", textDecoration: isActive ? "underline" : "none", background: isActive ? "linear-gradient(143deg, #632EE3 5.68%, #9F62F2 88.38%)" : "none", WebkitBackgroundClip: isActive ? "text" : "unset", WebkitTextFillColor: isActive ? "transparent" : "rgba(0,0,0,0.9)" })}>Installation</NavLink>
            </div>

            <a href="https://github.com/ruksat13" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: "10px", background: "linear-gradient(157deg, #632EE3 5.68%, #9F62F2 88.38%)", color: "white", padding: "12px 16px", borderRadius: "4px", fontSize: "16px", fontWeight: "600", height: "43px", width: "145px", justifyContent: "center", textDecoration: "none" }}>
                <FaGithub size={20} />
                Contribute
            </a>

        </nav>
    );
};

export default Navbar;