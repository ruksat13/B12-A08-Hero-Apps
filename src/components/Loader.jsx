const Loader = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "60vh",
            gap: "32px"
        }}>

            {/* Big animated HERO.IO text */}
            <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                {"HERO.IO".split("").map((char, i) => (
                    <span key={i} style={{
                        fontSize: "64px",
                        fontWeight: "900",
                        background: "linear-gradient(135deg, #632EE3, #9F62F2)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        animation: `wave 1.2s ease-in-out ${i * 0.1}s infinite`,
                        display: "inline-block"
                    }}>{char}</span>
                ))}
            </div>

            {/* Subtitle */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                <p style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#627382",
                    letterSpacing: "4px",
                    animation: "fade 1.5s ease-in-out infinite"
                }}>Loading your experience...</p>

                {/* Progress bar */}
                <div style={{
                    width: "200px",
                    height: "3px",
                    background: "#e9e9e9",
                    borderRadius: "10px",
                    overflow: "hidden"
                }}>
                    <div style={{
                        height: "100%",
                        background: "linear-gradient(90deg, #632EE3, #9F62F2)",
                        borderRadius: "10px",
                        animation: "progress 1.2s ease-in-out infinite"
                    }} />
                </div>
            </div>

            <style>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes fade {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes progress {
          0% { width: 0%; margin-left: 0%; }
          50% { width: 80%; margin-left: 10%; }
          100% { width: 0%; margin-left: 100%; }
        }
      `}</style>
        </div>
    );
};

export default Loader;