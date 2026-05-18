import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apps from "../data/apps";
import Loader from "../components/Loader";

const Apps = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [loading, setLoading] = useState(false);
    const [displayed, setDisplayed] = useState(apps);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            const filtered = apps
                .filter((app) => app.title.toLowerCase().includes(search.toLowerCase()))
                .sort((a, b) => {
                    if (sort === "high-low") return b.downloads - a.downloads;
                    if (sort === "low-high") return a.downloads - b.downloads;
                    return 0;
                });
            setDisplayed(filtered);
            setLoading(false);
        }, 400);
        return () => clearTimeout(timer);
    }, [search, sort]);

    return (
        <div className="apps-section" style={{ padding: "80px", display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ width: "100%", textAlign: "center" }}>
                <h2 style={{ fontSize: "48px", fontWeight: "700", color: "#001931", marginBottom: "16px" }}>Our All Applications</h2>
                <p style={{ fontSize: "20px", color: "#627382", lineHeight: "32px" }}>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                <p style={{ fontSize: "24px", fontWeight: "600", color: "#001931" }}>({displayed.length}) Apps Found</p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        style={{ padding: "12px 16px", border: "1px solid #d2d2d2", borderRadius: "4px", fontSize: "16px", color: "#627382", outline: "none", cursor: "pointer", background: "white" }}
                    >
                        <option value="">Sort by Downloads</option>
                        <option value="high-low">High to Low</option>
                        <option value="low-high">Low to High</option>
                    </select>
                    <input
                        type="text"
                        placeholder="search Apps"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{ width: "400px", maxWidth: "100%", padding: "12px 16px", border: "1px solid #d2d2d2", borderRadius: "4px", fontSize: "16px", color: "#627382", outline: "none" }}
                    />
                </div>
            </div>

            {loading ? (
                <Loader />
            ) : displayed.length === 0 ? (
                <div style={{ textAlign: "center", padding: "80px", fontSize: "24px", color: "#627382" }}>No App Found</div>
            ) : (
                <div className="grid-4" style={{ display: "grid", gap: "16px" }}>
                    {displayed.map((app) => (
                        <div key={app.id} onClick={() => navigate(`/apps/${app.id}`)} style={{ background: "white", borderRadius: "4px", padding: "16px", cursor: "pointer", display: "flex", flexDirection: "column", gap: "16px" }}>
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