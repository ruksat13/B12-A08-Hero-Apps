import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Installation = () => {
    const navigate = useNavigate();
    const [installedApps, setInstalledApps] = useState(() => {
        const saved = localStorage.getItem("installedApps");
        return saved ? JSON.parse(saved) : [];
    });
    const [sort, setSort] = useState("");

    const handleUninstall = (id) => {
        const updated = installedApps.filter((app) => app.id !== id);
        setInstalledApps(updated);
        localStorage.setItem("installedApps", JSON.stringify(updated));
        toast.success("App uninstalled successfully!");
    };

    const sorted = [...installedApps].sort((a, b) => {
        if (sort === "high-low") return b.size - a.size;
        if (sort === "low-high") return a.size - b.size;
        return 0;
    });

    return (
        <div className="apps-section" style={{ padding: "80px", display: "flex", flexDirection: "column", gap: "40px" }}>

            {/* Title */}
            <div style={{ textAlign: "center" }}>
                <h2 style={{ fontSize: "48px", fontWeight: "700", color: "#001931", marginBottom: "16px" }}>Your Installed Apps</h2>
                <p style={{ fontSize: "20px", color: "#627382", lineHeight: "32px" }}>Explore All Trending Apps on the Market developed by us</p>
            </div>

            {installedApps.length === 0 ? (
                <div style={{ textAlign: "center", padding: "80px", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
                    <img src="/App-Error.png" alt="no apps" style={{ width: "200px" }} />
                    <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#001931" }}>No Apps Installed</h3>
                    <p style={{ fontSize: "16px", color: "#627382" }}>You have not installed any apps yet.</p>
                    <button onClick={() => navigate("/apps")} style={{ background: "linear-gradient(155deg, #632EE3 5.68%, #9F62F2 88.38%)", color: "white", border: "none", borderRadius: "4px", padding: "12px 24px", fontSize: "16px", fontWeight: "600", cursor: "pointer" }}>Browse Apps</button>
                </div>
            ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

                    {/* Count + Sort */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                        <p style={{ fontSize: "24px", fontWeight: "600", color: "#001931" }}>{sorted.length} Apps Found</p>
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            style={{ padding: "12px 16px", border: "1px solid #d2d2d2", borderRadius: "4px", fontSize: "16px", color: "#627382", outline: "none", cursor: "pointer", background: "white" }}
                        >
                            <option value="">Sort By Size</option>
                            <option value="high-low">High to Low</option>
                            <option value="low-high">Low to High</option>
                        </select>
                    </div>

                    {/* App List */}
                    {sorted.map((app) => (
                        <div key={app.id} style={{ background: "white", borderRadius: "4px", padding: "16px", display: "flex", gap: "16px", alignItems: "center" }}>
                            <img src={app.image} alt={app.title} style={{ width: "80px", height: "80px", borderRadius: "8px", objectFit: "cover", flexShrink: 0 }} />
                            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                                <p style={{ fontSize: "20px", fontWeight: "500", color: "#001931", textTransform: "capitalize" }}>{app.title}</p>
                                <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                                    <span style={{ color: "#00d390", fontSize: "16px", fontWeight: "500" }}>↓ {(app.downloads / 1000000).toFixed(0)}M</span>
                                    <span style={{ color: "#ff8811", fontSize: "16px", fontWeight: "500" }}>★ {app.ratingAvg}</span>
                                    <span style={{ color: "#627382", fontSize: "16px" }}>{app.size} MB</span>
                                </div>
                            </div>
                            <button
                                onClick={() => handleUninstall(app.id)}
                                style={{ background: "#00d390", color: "white", border: "none", borderRadius: "4px", padding: "12px 16px", fontSize: "16px", fontWeight: "600", cursor: "pointer", flexShrink: 0 }}
                            >
                                Uninstall
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Installation;