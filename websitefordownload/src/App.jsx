import React from "react";
import { Terminal, Plane, Layers, Brush, Code2 } from "lucide-react";

export default function App() {
  const fontFamily = "'Times New Roman', Times, serif, kreon";
  const fontWeightNormal = "400";

  const features = [
    {
      icon: <Terminal size={32} color="#22c55e" />,
      title: "5M+ monthly downloads",
      desc: "Apache 2.0\n21k Github stars",
    },
    {
      icon: <Plane size={32} color="#e5e7eb" />,
      title: "Low latency search",
      desc: "Fast queries over billions of multi-tenant indexes.",
    },
    {
      icon: <Layers size={32} color="#e5e7eb" />,
      title: "Up to 10x cheaper",
      desc: "Built on object storage with automatic data tiering.",
    },
    {
      icon: <Brush size={32} color="#e5e7eb" />,
      title: "No engineering ops",
      desc: "Scales with your data and traffic. SOC 2 Type I.",
    },
  ];

  // Second features for the special square layout
  const secondFeatures = [
    {
      icon: <Code2 size={32} color="#e5e7eb" />,
      title: "Block 1 - Large Vertical",
      image:"C:\Users\Dell\OneDrive\Desktop\New folder\app2\website for download\websitefordownload\src\assets\Screenshot_2025-08-15_175401-removebg-preview.png",
      desc: "Tall rectangular block representing something big.",
    },
    {
      icon: <Terminal size={32} color="#e5e7eb" />,
      title: "Block 2",
      desc: "Square block",
    },
    {
      icon: <Plane size={32} color="#e5e7eb" />,
      title: "Block 3",
      desc: "Square block",
    },
    
  ];

  const styles = {
    container: {
      fontFamily,
      fontWeight: fontWeightNormal,
      color: "#f5f5f5",
      backgroundColor: "#0d0d0d",
      margin: 0,
      padding: 0,
      minHeight: "100vh",
    },
    contentWrapper: {
      maxWidth: "1100px",
      margin: "0 auto",
      fontFamily: "Kreon",
      padding: "0 1rem",
    },
    header: {
      borderBottom: "1px solid #333",
      backgroundColor: "#0d0d0d",
    },
    headerContent: {
      margin: "0 auto",
      padding: "0 1rem",
      fontFamily: "kreon",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "64px",
    },
    leftSection: {
      display: "flex",
      alignItems: "center",
      gap: "1.5rem",
    },
    logo: {
      display: "flex",
      alignItems: "center",
    },
    nav: {
      display: "flex",
      gap: "1.25rem",
    },
    navLink: {
      textDecoration: "none",
      color: "#ccc",
      fontSize: "0.95rem",
      fontWeight: "500",
    },
    rightSection: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
    },
    text: {
      fontSize: "0.9rem",
      color: "#ccc",
    },
    buttonPrimary: {
      padding: "0.4rem 0.9rem",
      backgroundColor: "white",
      color: "black",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "0.9rem",
    },
    buttonSecondary: {
      padding: "0.4rem 0.9rem",
      backgroundColor: "transparent",
      border: "1px solid #ffffff",
      borderRadius: "6px",
      color: "#ffffff",
      cursor: "pointer",
      fontSize: "0.9rem",
    },
    heroWrapper: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "0 1rem",
    },
    hero: {
      padding: "4rem 0",
      textAlign: "left",
    },
    heroTitle: {
      fontSize: "2.5rem",
      marginBottom: "1rem",
      color: "#f5f5f5",
    },
    heroText: {
      fontSize: "1.2rem",
      marginBottom: "2rem",
      color: "#ccc",
    },
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "1.5rem",
      padding: "2rem 0",
    },
    featureCard: {
      backgroundColor: "#0d0d0d",
      padding: "1.5rem",
      border: "1px solid #ffffff",
      boxShadow: "0 1px 3px rgba(255,255,255,0.05)",
      transition: "all 0.3s ease-in-out",
      transform: "scale(1)",
      borderRadius: 0,
    },
    featureCardHover: {
      transform: "scale(1.03)",
      boxShadow:
        "6px 6px 0 rgba(255,255,255,0.6), 7px 7px 5px rgba(255,255,255,0.1)",
    },
    featureTitle: {
      marginTop: "1rem",
      fontWeight: "600",
      fontSize: "1.125rem",
      color: "#fff",
    },
    featureDesc: {
      marginTop: "0.5rem",
      color: "#ccc",
      whiteSpace: "pre-line",
    },
    footer: {
      padding: "2rem 0",
      borderTop: "1px solid #333",
      fontSize: "0.9rem",
      textAlign: "center",
      color: "#888",
    },
    footerLinks: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "1rem",
      margin: "1rem 0",
    },

    // New styles for the second features section container
    secondFeaturesContainer: {
      display: "flex",
      gap: "1.5rem",
      padding: "2rem 0",
      // Fixed height to make big block and smaller blocks same height
      height: "440px",
    },
    bigBlock: {
      flex: 2,
      backgroundColor: "#0d0d0d",
      border: "1px solid #fff",
      padding: "1.5rem",
      boxShadow:
        "6px 6px 0 rgba(255,255,255,0.6), 7px 7px 5px rgba(255,255,255,0.1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      borderRadius: 0,
    },
    smallBlocksContainer: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
    },
    smallBlock: {
      flex: 1,
      backgroundColor: "#0d0d0d",
      border: "1px solid #fff",
      padding: "1rem",
      boxShadow:
        "6px 6px 0 rgba(255,255,255,0.6), 7px 7px 5px rgba(255,255,255,0.1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      borderRadius: 0,
    },
  };

  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [hoveredSecondIndex, setHoveredSecondIndex] = React.useState(null);

  return (
    <div style={styles.container}>
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          {/* Left: logo + badge + nav */}
          <div style={styles.leftSection}>
            <div style={styles.logo}>
              <img src="logo.png" alt="Logo" style={{ height: "28px" }} />
            </div>
            <div>
              <img
                src="https://img.shields.io/github/stars/chroma-core/chroma?style=social"
                alt="GitHub Stars"
              />
            </div>
            <nav style={styles.nav}>
              {["Docs", "GitHub", "Blogs", "Updates"].map((link) => (
                <a key={link} href="#" style={styles.navLink}>
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: CTA */}
          <div style={styles.rightSection}>
            
            <button style={styles.buttonSecondary}>Get early access</button>
          
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div style={styles.contentWrapper}>
        {/* HERO (centered tighter) */}
        <div style={styles.heroWrapper}>
          <section style={styles.hero}>
            <h1 style={styles.heroTitle}>
              Adjunct is the real time messaging platform with AI Intelligence.
            </h1>
            <p style={styles.heroText}>
              Human Intelligence, AI Precision, Perfectly Fused. The messaging
              app that uses the AI which does the work easy and provides the
              privacy than any other. Not just the guidance, It's the
              performance.
            </p>
            <button style={styles.buttonPrimary}>Join Waitlist</button>
          </section>
        </div>

        {/* FIRST FEATURES GRID */}
        <section style={styles.featuresGrid}>
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                ...styles.featureCard,
                ...(hoveredIndex === i ? styles.featureCardHover : {}),
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {f.icon}
              <h3 style={styles.featureTitle}>{f.title}</h3>
              <p style={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </section>
<div style={{ textAlign: "center", marginBottom: "2rem" }}>
  <h1 >whats new?</h1>
  <p>Adjunct is the new messanging app ,which has the AI intelligence and perform the action unlike the other.
    It performs the tasks like the messaging,searching, custom commands like send emails and other things.
  </p>
</div>

        {/* SECOND FEATURES SQUARE-LIKE LAYOUT */}
        <section style={styles.secondFeaturesContainer}>
          {/* Big block on left */}
          <div
            style={{
              ...styles.bigBlock,
              ...(hoveredSecondIndex === 0 ? styles.featureCardHover : {}),
            }}
            onMouseEnter={() => setHoveredSecondIndex(0)}
            onMouseLeave={() => setHoveredSecondIndex(null)}
          >
            {secondFeatures[0].icon}
            <h3 style={styles.featureTitle}>{secondFeatures[0].title}</h3>
            <p style={styles.featureDesc}>{secondFeatures[0].desc}</p>
          </div>

          {/* Four smaller stacked blocks on right */}
          <div style={styles.smallBlocksContainer}>
            {secondFeatures.slice(1).map((f, i) => (
              <div
                key={i + 1}
                style={{
                  ...styles.smallBlock,
                  ...(hoveredSecondIndex === i + 1
                    ? styles.featureCardHover
                    : {}),
                }}
                onMouseEnter={() => setHoveredSecondIndex(i + 1)}
                onMouseLeave={() => setHoveredSecondIndex(null)}
              >
                {f.icon}
                <h3 style={styles.featureTitle}>{f.title}</h3>
                <p style={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer style={styles.footer}>
          <div style={styles.footerLinks}>
          
            
            <a href="#" style={{ color: "#aaa" }}>
              Privacy
            </a>
            <a href="#" style={{ color: "#aaa" }}>
              Terms
            </a>
          </div>
          <p>email us at adjunctpa@gmail.com </p>
        </footer>
      </div>
    </div>
  );
}
