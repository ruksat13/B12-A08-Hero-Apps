import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apps from "../data/apps";

const Apps = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const filtered = apps.filter((app) =>
        app.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ padding: "80px", display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ width: "100%" }}>
                <h2 style={{ fontSize: "48px", fontWeight: "700", color: "#001931", marginBottom: "16px" }}>Our All Applications</h2>
                <p style={{ fontSize: "20px", color: "#627382", lineHeight: "32px" }}>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ fontSize: "24px", fontWeight: "600", color: "#001931" }}>({filtered.length}) Apps Found</p>
                <input
                    type="text"
                    placeholder="search Apps"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ width: "400px", padding: "12px 16px", border: "1px solid #d2d2d2", borderRadius: "4px", fontSize: "16px", color: "#627382", outline: "none" }}
                />
            </div>

            {filtered.length === 0 ? (
                <div style={{ textAlign: "center", padding: "80px", fontSize: "24px", color: "#627382" }}>No App Found</div>
            ) : (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
                    {filtered.map((app) => (
                        <div
                            key={app.id}
                            onClick={() => navigate(`/apps/${app.id}`)}
                            style={{ background: "white", borderRadius: "4px", padding: "16px", cursor: "pointer", display: "flex", flexDirection: "column", gap: "16px" }}
                        >
                            <img src={app.image} alt={app.title} style={{ width: "100%", aspectRatio: "1/1", borderRadius: "8px", objectFit: "cover" }} />
                            <p style={{ fontSize: "20px", fontWeight: "500", color: "#001931", textTransform: "capitalize" }}>{app.title}</p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span style={{ background: "#f1f5e8", color: "#00d390", padding: "6px 10px", borderRadius: "4px", fontSize: "16px", fontWeight: "500" }}>↓ {(app.downloads / 1000000).toFixed(0)}M</span>
                                <span style={{ background: "#fff0e1", color: "#ff8811", padding: "6px 10px", borderRadius: "4px", fontSize: "16px", fontWeight: "500" }}>★ {app.ratingAvg}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Apps;

