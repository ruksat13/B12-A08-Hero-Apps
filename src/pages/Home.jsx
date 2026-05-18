import { SiGoogleplay, SiAppstore } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import apps from "../data/apps";

const Home = () => {
    const navigate = useNavigate();
    const topApps = apps.slice(0, 8);

    return (
        <div>
            <div className="banner-section" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 80px 0 80px", background: "#f5f5f5", textAlign: "center", gap: "40px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
                    <h1 style={{ fontSize: "72px", fontWeight: "700", color: "#001931", lineHeight: "84px", textAlign: "center" }}>
                        <div>We Build</div>
                        <div>
                            <span style={{ background: "linear-gradient(158deg, #632EE3 5.68%, #9F62F2 88.38%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "900" }}>Productive</span>
                            {" "}Apps
                        </div>
                    </h1>
                    <p style={{ fontSize: "20px", color: "#627382", lineHeight: "32px", maxWidth: "700px" }}>
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                </div>

                <div className="store-buttons" style={{ display: "flex", gap: "16px" }}>
                    <a href="https://play.google.com" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 24px", border: "1px solid #d2d2d2", borderRadius: "4px", color: "#001931", fontWeight: "600", fontSize: "20px", background: "white", width: "200px", justifyContent: "center", textDecoration: "none" }}>
                        <SiGoogleplay size={32} color="#01875f" />
                        Google Play
                    </a>
                    <a href="https://apps.apple.com" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 24px", border: "1px solid #d2d2d2", borderRadius: "4px", color: "#001931", fontWeight: "600", fontSize: "20px", background: "white", width: "200px", justifyContent: "center", textDecoration: "none" }}>
                        <SiAppstore size={32} color="#0D96F6" />
                        App Store
                    </a>
                </div>

                <img src="/hero.png" alt="hero" style={{ width: "100%", maxWidth: "442px" }} />
            </div>

            <div className="stats-section" style={{ background: "linear-gradient(160deg, #632EE3 5.68%, #9F62F2 88.38%)", padding: "80px", display: "flex", flexDirection: "column", alignItems: "center", gap: "40px" }}>
                <h2 style={{ color: "white", fontSize: "48px", fontWeight: "700", textAlign: "center" }}>Trusted by Millions, Built for You</h2>
                <div style={{ display: "flex", gap: "24px", justifyContent: "center", width: "100%", flexWrap: "wrap" }}>
                    {[{ label: "Total Downloads", value: "29.6M", sub: "21% more than last month" }, { label: "Total Reviews", value: "906K", sub: "46% more than last month" }, { label: "Active Apps", value: "132+", sub: "31 more will Launch" }].map((stat) => (
                        <div key={stat.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", minWidth: "200px", textAlign: "center", color: "white" }}>
                            <p style={{ fontSize: "16px", opacity: 0.8 }}>{stat.label}</p>
                            <p className="stats-value" style={{ fontSize: "64px", fontWeight: "800", lineHeight: "72px" }}>{stat.value}</p>
                            <p style={{ fontSize: "16px", opacity: 0.8 }}>{stat.sub}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="apps-section" style={{ padding: "80px", display: "flex", flexDirection: "column", gap: "40px", alignItems: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <h2 style={{ fontSize: "48px", fontWeight: "700", color: "#001931", marginBottom: "16px" }}>Trending Apps</h2>
                    <p style={{ fontSize: "20px", color: "#627382", lineHeight: "32px" }}>Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className="grid-4" style={{ display: "grid", gap: "16px", width: "100%" }}>
                    {topApps.map((app) => (
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

                <button onClick={() => navigate("/apps")} style={{ background: "linear-gradient(155deg, #632EE3 5.68%, #9F62F2 88.38%)", color: "white", border: "none", borderRadius: "4px", padding: "12px 16px", fontSize: "16px", fontWeight: "600", cursor: "pointer", width: "145px", height: "48px" }}>Show All</button>
            </div>
        </div>
    );
};

export default Home;