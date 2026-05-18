import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer style={{ background: "#001931", padding: "35px 80px 30px 80px", width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "30px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <img src="/logo.png" alt="logo" style={{ width: "40px", height: "40px" }} />
                    <span style={{ color: "white", fontWeight: "700", fontSize: "16px" }}>HERO.IO</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <p style={{ color: "white", fontWeight: "500", fontSize: "20px", margin: 0 }}>Social Links</p>
                    <div style={{ display: "flex", gap: "16px" }}>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "50%", background: "#ffffff20", color: "white" }}>
                            <FaXTwitter size={16} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "50%", background: "#ffffff20", color: "white" }}>
                            <FaLinkedinIn size={16} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "50%", background: "#ffffff20", color: "white" }}>
                            <FaFacebookF size={16} />
                        </a>
                    </div>
                </div>
            </div>
            <hr style={{ border: "none", borderTop: "1px solid #ffffff30", margin: "0 0 30px 0" }} />
            <p style={{ color: "#fafafa", fontSize: "16px", textAlign: "center", margin: 0 }}>Copyright © 2025 - All right reserved</p>
        </footer>
    );
};

export default Footer;