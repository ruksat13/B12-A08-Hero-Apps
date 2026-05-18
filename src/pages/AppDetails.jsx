import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import toast from "react-hot-toast";
import apps from "../data/apps";

const AppDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const app = apps.find((a) => a.id === parseInt(id));
    const [installed, setInstalled] = useState(() => {
        const saved = localStorage.getItem("installedApps");
        if (saved) {
            const parsed = JSON.parse(saved);
            return parsed.some((a) => a.id === parseInt(id));
        }
        return false;
    });

    if (!app) {
        return (
            <div style={{ textAlign: "center", padding: "80px", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
                <img src="/App-Error.png" alt="not found" style={{ width: "300px" }} />
                <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#001931" }}>App Not Found</h2>
                <p style={{ fontSize: "20px", color: "#627382" }}>The app you are looking for does not exist.</p>
                <button onClick={() => navigate("/apps")} style={{ background: "linear-gradient(155deg, #632EE3 5.68%, #9F62F2 88.38%)", color: "white", border: "none", borderRadius: "4px", padding: "12px 24px", fontSize: "16px", fontWeight: "600", cursor: "pointer" }}>Back to Apps</button>
            </div>
        );
    }

    const handleInstall = () => {
        const saved = localStorage.getItem("installedApps");
        const parsed = saved ? JSON.parse(saved) : [];
        parsed.push(app);
        localStorage.setItem("installedApps", JSON.stringify(parsed));
        setInstalled(true);
        toast.success(`${app.title} installed successfully!`);
    };

    return (
        <div className="apps-section" style={{ padding: "80px", display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ display: "flex", gap: "40px", alignItems: "flex-start", flexWrap: "wrap" }}>
                <img src={app.image} alt={app.title} style={{ width: "350px", maxWidth: "100%", borderRadius: "8px", objectFit: "cover", boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }} />

                <div style={{ flex: 1, minWidth: "280px", display: "flex", flexDirection: "column", gap: "30px" }}>
                    <div>
                        <h1 style={{ fontSize: "32px", fontWeight: "700", color: "#001931", marginBottom: "8px" }}>{app.title}</h1>
                        <p style={{ fontSize: "20px", color: "#627382" }}>
                            Developed by{" "}
                            <span style={{ background: "linear-gradient(177deg, #632EE3 5.68%, #9F62F2 88.38%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "600" }}>{app.companyName}</span>
                        </p>
                    </div>

                    <hr style={{ border: "none", borderTop: "1px solid #e9e9e9" }} />

                    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "150px" }}>
                            <img src="/icon-downloads.png" alt="downloads" style={{ width: "40px", height: "40px" }} />
                            <p style={{ fontSize: "16px", color: "#001931", opacity: 0.8 }}>Downloads</p>
                            <p style={{ fontSize: "40px", fontWeight: "800", color: "#001931" }}>{(app.downloads / 1000000).toFixed(0)}M</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "150px" }}>
                            <img src="/icon-ratings.png" alt="ratings" style={{ width: "40px", height: "40px" }} />
                            <p style={{ fontSize: "16px", color: "#001931", opacity: 0.8 }}>Average Ratings</p>
                            <p style={{ fontSize: "40px", fontWeight: "800", color: "#001931" }}>{app.ratingAvg}</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "150px" }}>
                            <img src="/icon-review.png" alt="reviews" style={{ width: "40px", height: "40px" }} />
                            <p style={{ fontSize: "16px", color: "#001931", opacity: 0.8 }}>Total Reviews</p>
                            <p style={{ fontSize: "40px", fontWeight: "800", color: "#001931" }}>{(app.reviews / 1000).toFixed(0)}K</p>
                        </div>
                    </div>

                    <button
                        onClick={handleInstall}
                        disabled={installed}
                        style={{ background: installed ? "#ccc" : "#00d390", color: "white", border: "none", borderRadius: "4px", padding: "14px 20px", fontSize: "20px", fontWeight: "600", cursor: installed ? "not-allowed" : "pointer", width: "fit-content" }}
                    >
                        {installed ? "Installed" : `Install Now (${app.size} MB)`}
                    </button>
                </div>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid #e9e9e9" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#001931" }}>Ratings</h2>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={[...app.ratings].reverse()} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                        <XAxis type="number" domain={[0, 12000]} ticks={[0, 3000, 6000, 9000, 12000]} tick={{ fill: "#627382", fontSize: 14 }} />
                        <YAxis type="category" dataKey="name" tick={{ fill: "#627382", fontSize: 14 }} width={50} />
                        <Tooltip />
                        <Bar dataKey="count" fill="#ff8811" radius={[0, 4, 4, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid #e9e9e9" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#001931" }}>Description</h2>
                <p style={{ fontSize: "20px", color: "#627382", lineHeight: "32px" }}>{app.description}</p>
            </div>
        </div>
    );
};

export default AppDetails;