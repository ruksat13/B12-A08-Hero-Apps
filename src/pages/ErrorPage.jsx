import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: "center", padding: "80px", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", minHeight: "60vh", justifyContent: "center" }}>
            <img src="/error-404.png" alt="404" style={{ width: "300px", maxWidth: "100%" }} />
            <h2 style={{ fontSize: "48px", fontWeight: "700", color: "#001931" }}>Page Not Found</h2>
            <p style={{ fontSize: "20px", color: "#627382", maxWidth: "500px" }}>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
            <button onClick={() => navigate("/")} style={{ background: "linear-gradient(155deg, #632EE3 5.68%, #9F62F2 88.38%)", color: "white", border: "none", borderRadius: "4px", padding: "12px 24px", fontSize: "16px", fontWeight: "600", cursor: "pointer" }}>Back to Home</button>
        </div>
    );
};

export default ErrorPage;