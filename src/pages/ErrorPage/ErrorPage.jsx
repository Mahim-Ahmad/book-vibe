import { useState } from "react";

export default function ErrorPage() {
  const [h1, setH1] = useState(false);
  const [h2, setH2] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
      `}</style>

      <div style={{
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        background: "#f9f9f9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}>
        <div style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "64px 56px",
          maxWidth: "480px",
          width: "100%",
          border: "1px solid #ebebeb",
          boxShadow: "0 2px 24px rgba(0,0,0,0.06)",
          textAlign: "center",
        }}>

          {/* Code */}
          <p style={{
            fontSize: "88px",
            fontWeight: 600,
            color: "#111",
            lineHeight: 1,
            letterSpacing: "-4px",
            marginBottom: "4px",
          }}>404</p>

          <div style={{
            width: "32px",
            height: "3px",
            background: "#111",
            borderRadius: "2px",
            margin: "20px auto",
          }} />

          {/* Title */}
          <h1 style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#111",
            marginBottom: "12px",
            letterSpacing: "-0.3px",
          }}>Page not found</h1>

          {/* Description */}
          <p style={{
            fontSize: "14px",
            color: "#888",
            lineHeight: 1.7,
            marginBottom: "36px",
            fontWeight: 400,
          }}>
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <button
              onMouseEnter={() => setH1(true)}
              onMouseLeave={() => setH1(false)}
              onClick={() => window.location.href = "/"}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                padding: "10px 24px",
                borderRadius: "8px",
                border: "none",
                background: h1 ? "#222" : "#111",
                color: "#fff",
                cursor: "pointer",
                transition: "background 0.15s",
                letterSpacing: "0.01em",
              }}>
              Go Home
            </button>

            <button
              onMouseEnter={() => setH2(true)}
              onMouseLeave={() => setH2(false)}
              onClick={() => window.history.back()}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                padding: "10px 24px",
                borderRadius: "8px",
                border: "1px solid #e5e5e5",
                background: h2 ? "#f5f5f5" : "#fff",
                color: "#444",
                cursor: "pointer",
                transition: "background 0.15s",
                letterSpacing: "0.01em",
              }}>
              Go Back
            </button>
          </div>

        </div>
      </div>
    </>
  );
}