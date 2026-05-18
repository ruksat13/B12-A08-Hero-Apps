import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const MyInstallation = () => {
    const navigate = useNavigate();
    const [installedApps, setInstalledApps] = useState(() => {
        const saved = localStorage.getItem("installedApps");
        return saved ? JSON.parse(saved) : [];
    });

    const handleUninstall = (id) => {
        const updated = installedApps.filter((app) => app.id !== id);
        setInstalledApps(updated);
        localStorage.setItem("installedApps", JSON.stringify(updated));
        toast.success("App uninstalled successfully!");
    };

    return (
        <div className="apps-section" style={{ padding: "80px", display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ textAlign: "center" }}>
                <h2 style={{ fontSize: "48px", fontWeight: "700", color: "#001931", marginBottom: "16px" }}>My Installations</h2>
                <p style={{ fontSize: "20px", color: "#627382", lineHeight: "32px" }}>All your installed apps in one place</p>
            </div>

            {installedApps.length === 0 ? (
                <div style={{ textAlign: "center", padding: "80px", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
                    <img src="/App-Error.png" alt="no apps" style={{ width: "200px" }} />
                    <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#001931" }}>No Apps Installed</h3>
                    <p style={{ fontSize: "16px", color: "#627382" }}>You have not installed any apps yet.</p>
                    <button onClick={() => navigate("/apps")} style={{ background: "linear-gradient(155deg, #632EE3 5.68%, #9F62F2 88.38%)", color: "white", border: "none", borderRadius: "4px", padding: "12px 24px", fontSize: "16px", fontWeight: "600", cursor: "pointer" }}>Browse Apps</button>
                </div>
            ) : (
                <div className="grid-4" style={{ display: "grid", gap: "16px" }}>
                    {installedApps.map((app) => (
                        <div key={app.id} style={{ background: "white", borderRadius: "4px", padding: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
                            <img src={app.image} alt={app.title} style={{ width: "100%", aspectRatio: "1/1", borderRadius: "8px", objectFit: "cover" }} />
                            <p style={{ fontSize: "20px", fontWeight: "500", color: "#001931", textTransform: "capitalize" }}>{app.title}</p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span style={{ background: "#f1f5e8", color: "#00d390", padding: "6px 10px", borderRadius: "4px", fontSize: "16px", fontWeight: "500" }}>↓ {(app.downloads / 1000000).toFixed(0)}M</span>
                                <span style={{ background: "#fff0e1", color: "#ff8811", padding: "6px 10px", borderRadius: "4px", fontSize: "16px", fontWeight: "500" }}>★ {app.ratingAvg}</span>
                            </div>
                            <button onClick={() => handleUninstall(app.id)} style={{ background: "#ff4444", color: "white", border: "none", borderRadius: "4px", padding: "10px", fontSize: "16px", fontWeight: "600", cursor: "pointer", width: "100%" }}>Uninstall</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyInstallation;