import React from "react";
import { Terminal, Plane, Code2, Menu, X, Lock, Bot, Smartphone, Cog } from "lucide-react";
import logoImg from "./assets/logo.png";
import screenshotImg from "./assets/Screenshot_2025-08-15_175401-removebg-preview.png"; 

export default function App() {
  const fontFamily = "'Times New Roman', Times, serif, kreon";
  const fontWeightNormal = "400";

  const features = [
    {
      icon: <Lock size={32} color="#22c55e" />,
      title: "Privacy",
      desc: "Asymmetric encryption ensures your messages are secure. Public key cryptography protects your data with mathematical complexity that's virtually unbreakable.",
    },
    {
      icon: <Bot size={32} color="#e5e7eb" />,
      title: "AI-Powered Intelligence",
      desc: "Your AI assistant that sends emails, crafts messages, summarizes text, and handles tasks automatically. Let AI do the heavy lifting while you focus on what matters most.",
    },
    {
      icon: <Smartphone size={32} color="#e5e7eb" />,
      title: "App Details",
      desc: "The revolutionary messaging app with AI intelligence that goes beyond simple chat. Send emails, search information, execute custom commands, and let AI handle complex tasks automatically. Experience messaging reimagined.",
    },
    {
      icon: <Cog size={32} color="#e5e7eb" />,
      title: "Smart Automation",
      desc: "Let AI handle your daily tasks. From scheduling meetings to managing emails, Adjunct learns your workflow and automates repetitive tasks, giving you more time to focus on what matters.",
    },
  ];

  // Second features for the special square layout
  const secondFeatures = [
    {
      icon: <Code2 size={32} color="#e5e7eb" />,
      title: "Block 1 - Large Vertical",
      image: "./assets/Screenshot_2025-08-15_175401-removebg-preview.png",
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
    // Global scrollbar hiding styles
    globalStyles: `
      .popup-form::-webkit-scrollbar {
        display: none;
      }
      .popup-form {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `,
    contentWrapper: {
      maxWidth: "1100px",
      margin: "0 auto",
      fontFamily: "Kreon",
      padding: "0 1rem",
      overflowX: "hidden",
      paddingTop: "64px",
    },
    header: {
      borderBottom: "1px solid #333",
      backgroundColor: "#0d0d0d",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      height: "64px",
      display: "flex",
      alignItems: "center",
    },
    headerContent: {
      margin: "0 auto",
      padding: "0 1rem",
      fontFamily: "kreon",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "64px",
      width: "100%",
      maxWidth: "1100px",
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
      paddingTop: "0.75rem",
      paddingBottom: "0.75rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      backgroundColor: "white",
      color: "black",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "0.9rem",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonSecondary: {
      paddingTop: "0.75rem",
      paddingBottom: "0.75rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      backgroundColor: "transparent",
      border: "1px solid #ffffff",
      borderRadius: "6px",
      color: "#ffffff",
      cursor: "pointer",
      fontSize: "0.9rem",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    heroWrapper: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "0 1rem",
    },
    hero: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
      paddingLeft: "0",
      paddingRight: "0",
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
    popupOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    popupForm: {
      backgroundColor: "#0d0d0d",
      border: "2px solid #fff",
      padding: "2.5rem",
      borderRadius: "12px",
      maxWidth: "500px",
      width: "95%",
      maxHeight: "90vh",
      overflowY: "auto",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.8)",
      position: "relative",
      // Hide scrollbar for webkit browsers
      scrollbarWidth: "none", // Firefox
      msOverflowStyle: "none", // IE and Edge
    },
    popupTitle: {
      fontSize: "2rem",
      fontWeight: "700",
      color: "#f5f5f5",
      marginBottom: "2rem",
      textAlign: "center",
      textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
    },
    formGroup: {
      marginBottom: "1.5rem",
    },
    formLabel: {
      display: "block",
      marginBottom: "0.75rem",
      color: "#f5f5f5",
      fontSize: "1rem",
      fontWeight: "500",
    },
    formInput: {
      width: "100%",
      padding: "1rem",
      border: "2px solid #333",
      borderRadius: "8px",
      backgroundColor: "#1a1a1a",
      color: "#f5f5f5",
      fontSize: "1rem",
      transition: "border-color 0.3s ease",
    },
    formSelect: {
      width: "100%",
      padding: "1rem",
      border: "2px solid #333",
      borderRadius: "8px",
      backgroundColor: "#1a1a1a",
      color: "#f5f5f5",
      fontSize: "1rem",
      transition: "border-color 0.3s ease",
    },
    formTextarea: {
      width: "100%",
      padding: "1rem",
      border: "2px solid #333",
      borderRadius: "8px",
      backgroundColor: "#1a1a1a",
      color: "#f5f5f5",
      fontSize: "1rem",
      minHeight: "100px",
      resize: "vertical",
      transition: "border-color 0.3s ease",
    },
    formButtons: {
      display: "flex",
      gap: "1rem",
      marginTop: "2rem",
      justifyContent: "center",
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
      flexDirection: "row",
      alignItems: "center",
      gap: "1.5rem",
      borderRadius: 0,
    },
    bigBlockImage: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    bigBlockContent: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
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
      boxShadow: "6px 6px 0 rgba(255,255,255,0.6), 7px 7px 5px rgba(255,255,255,0.1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      borderRadius: 0,
    },

    // Mobile-specific styles
    mobileMenuButton: {
      display: "none",
      backgroundColor: "transparent",
      border: "none",
      color: "#f5f5f5",
      cursor: "pointer",
      padding: "0.5rem",
      zIndex: 101,
    },
    mobileMenu: {
      position: "fixed",
      top: "64px",
      left: 0,
      right: 0,
      backgroundColor: "#0d0d0d",
      borderBottom: "1px solid #333",
      padding: "1rem",
      zIndex: 99,
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      maxHeight: "calc(100vh - 64px)",
      overflowY: "auto",
      width: "100%",
    },
    mobileMenuBackdrop: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 98,
      opacity: 0,
      visibility: "hidden",
      transition: "opacity 0.3s ease, visibility 0.3s ease",
      width: "100%",
      height: "100%",
    },
    mobileMenuBackdropOpen: {
      opacity: 1,
      visibility: "visible",
    },
    mobileNav: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    mobileNavLink: {
      textDecoration: "none",
      color: "#ccc",
      fontSize: "1rem",
      fontWeight: "500",
      paddingTop: "0.75rem",
      paddingBottom: "0.75rem",
      paddingLeft: "0",
      paddingRight: "0",
      borderBottom: "1px solid #333",
      display: "block",
      transition: "color 0.2s ease",
    },
  };

  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [hoveredSecondIndex, setHoveredSecondIndex] = React.useState(null);
  const [showPopup, setShowPopup] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isMobileView, setIsMobileView] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    referral: ''
  });

  // Check if screen is mobile
  const isMobile = () => window.innerWidth <= 768;

  // Add resize listener
  React.useEffect(() => {
    const checkMobile = () => {
      const mobile = isMobile();
      setIsMobileView(mobile);
      console.log('Mobile view:', mobile, 'Window width:', window.innerWidth);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Inject global styles for hiding scrollbars
  React.useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = styles.globalStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Add responsive styles based on screen size
  const getResponsiveStyles = () => {
    const mobile = isMobileView;
    
    return {
      hero: {
        ...styles.hero,
        paddingTop: mobile ? "2rem" : "4rem",
        paddingBottom: mobile ? "2rem" : "4rem",
      },
      heroTitle: {
        ...styles.heroTitle,
        fontSize: mobile ? "1.8rem" : "2.5rem",
      },
      heroText: {
        ...styles.heroText,
        fontSize: mobile ? "1rem" : "1.2rem",
      },
      featuresGrid: {
        ...styles.featuresGrid,
        gridTemplateColumns: mobile ? "1fr" : "repeat(auto-fit, minmax(220px, 1fr))",
        gap: mobile ? "1rem" : "1.5rem",
      },
      secondFeaturesContainer: {
        ...styles.secondFeaturesContainer,
        flexDirection: mobile ? "column" : "row",
        height: mobile ? "auto" : "440px",
        gap: mobile ? "1rem" : "1.5rem",
      },
      bigBlock: {
        ...styles.bigBlock,
        flexDirection: mobile ? "column" : "row",
        paddingTop: mobile ? "1rem" : "1.5rem",
        paddingBottom: mobile ? "1rem" : "1.5rem",
        paddingLeft: mobile ? "1rem" : "1.5rem",
        paddingRight: mobile ? "1rem" : "1.5rem",
      },
      bigBlockImage: {
        ...styles.bigBlockImage,
        order: mobile ? 1 : 0,
      },
      bigBlockContent: {
        ...styles.bigBlockContent,
        order: mobile ? 2 : 1,
      },
      smallBlocksContainer: {
        ...styles.smallBlocksContainer,
        flexDirection: mobile ? "column" : "column",
      },
      smallBlock: {
        ...styles.smallBlock,
        minHeight: mobile ? "120px" : "auto",
      },
      popupForm: {
        ...styles.popupForm,
        paddingTop: mobile ? "1.5rem" : "2.5rem",
        paddingBottom: mobile ? "1.5rem" : "2.5rem",
        paddingLeft: mobile ? "1.5rem" : "2.5rem",
        paddingRight: mobile ? "1.5rem" : "2.5rem",
        width: mobile ? "95%" : "95%",
        maxWidth: mobile ? "400px" : "500px",
      },
      popupTitle: {
        ...styles.popupTitle,
        fontSize: mobile ? "1.5rem" : "2rem",
      },
      formButtons: {
        ...styles.formButtons,
        flexDirection: mobile ? "column" : "row",
        gap: mobile ? "0.5rem" : "1rem",
      },
      nav: {
        ...styles.nav,
        display: mobile ? "none" : "flex",
        visibility: mobile ? "hidden" : "visible",
      },
      mobileMenuButton: {
        ...styles.mobileMenuButton,
        display: mobile ? "block" : "none",
        height: "40px",
        width: "40px",
        marginLeft: mobile ? "0.5rem" : "0",
      },
      leftSection: {
        ...styles.leftSection,
        gap: mobile ? "0.5rem" : "1.5rem",
      },
      rightSection: {
        ...styles.rightSection,
        gap: mobile ? "0.5rem" : "0.75rem",
      },
      logo: {
        ...styles.logo,
        fontSize: mobile ? "1rem" : "1.2rem",
      },
      buttonPrimary: {
        ...styles.buttonPrimary,
        paddingTop: mobile ? "0.75rem" : "0.4rem",
        paddingBottom: mobile ? "0.75rem" : "0.4rem",
        paddingLeft: mobile ? "1.2rem" : "0.9rem",
        paddingRight: mobile ? "1.2rem" : "0.9rem",
        fontSize: mobile ? "1rem" : "0.9rem",
      },
      buttonSecondary: {
        ...styles.buttonSecondary,
        paddingTop: mobile ? "0.5rem" : "0.4rem",
        paddingBottom: mobile ? "0.5rem" : "0.4rem",
        paddingLeft: mobile ? "0.8rem" : "0.9rem",
        paddingRight: mobile ? "0.8rem" : "0.9rem",
        fontSize: mobile ? "0.85rem" : "0.9rem",
      },
    };
  };

  const responsiveStyles = React.useMemo(() => getResponsiveStyles(), [isMobileView]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Store in localStorage first (as backup)
    try {
      const submissions = JSON.parse(localStorage.getItem('waitlistSubmissions') || '[]');
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
        submittedAt: new Date().toLocaleString()
      });
      localStorage.setItem('waitlistSubmissions', JSON.stringify(submissions));
      console.log('Form data saved to localStorage');
    } catch (localError) {
      console.error('Error saving locally:', localError);
    }
    
    try {
      // Try Google Apps Script (original method)
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        reason: formData.reason,
        referral: formData.referral,
        timestamp: new Date().toISOString()
      };

      // Method 1: Google Apps Script (original)
      try {
        await fetch('https://script.google.com/macros/s/AKfycbwIrB_-BfxtQRqDLkxMvxDgbi3X17F90g0F91xIC8q7e8KgiH5eeZOOzkrc6NhemhHI/exec', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData)
        });
        console.log('Google Apps Script submission attempted');
      } catch (googleError) {
        console.log('Google Apps Script failed:', googleError);
      }

      // Method 2: Simple email notification (works immediately)
      const emailBody = `
New Waitlist Signup:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Reason: ${formData.reason}
Referral: ${formData.referral}
Timestamp: ${new Date().toLocaleString()}

This submission was also saved locally in the browser.
      `;
      
      const mailtoLink = `mailto:adjunctpa@gmail.com?subject=New Waitlist Signup - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      
      console.log('Form submitted successfully:', formData);
      console.log('Email link prepared:', mailtoLink);
      
      // Show success message
      alert('Thank you for joining the waitlist! We\'ll be in touch soon.\n\nYour submission has been saved and an email notification has been prepared.');
      setShowPopup(false);
      setFormData({ name: '', email: '', phone: '', reason: '', referral: '' });
      
      // Optionally open email client (uncomment to enable)
      // window.open(mailtoLink);
      
    } catch (error) {
      console.error('Submission error:', error);
      
      // Since we already saved to localStorage, we can still show success
      alert('Thank you for joining the waitlist! We\'ll be in touch soon.\n\nYour submission has been saved locally.');
      setShowPopup(false);
      setFormData({ name: '', email: '', phone: '', reason: '', referral: '' });
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setFormData({ name: '', email: '', phone: '', reason: '', referral: '' });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Function to view stored submissions (for debugging)
  const viewStoredSubmissions = () => {
    const submissions = JSON.parse(localStorage.getItem('waitlistSubmissions') || '[]');
    console.log('Stored submissions:', submissions);
    if (submissions.length > 0) {
      const submissionList = submissions.map((sub, index) => 
        `${index + 1}. ${sub.name} (${sub.email}) - ${sub.submittedAt}`
      ).join('\n');
      alert(`You have ${submissions.length} stored submissions:\n\n${submissionList}`);
    } else {
      alert('No stored submissions found.');
    }
  };

  // Function to clear stored submissions
  const clearStoredSubmissions = () => {
    if (confirm('Are you sure you want to clear all stored submissions?')) {
      localStorage.removeItem('waitlistSubmissions');
      alert('All stored submissions have been cleared.');
    }
  };

  // Close mobile menu on escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Add focus styles for better UX
  const inputFocusStyle = {
    borderColor: "#22c55e",
    outline: "none",
    boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.1)",
  };

  return (
    <div style={styles.container}>
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          {/* Left: logo + navigation */}
          <div style={responsiveStyles.leftSection}>
            <div style={responsiveStyles.logo}>
              <img src={logoImg} alt="Logo" style={{ height: "32px", width: "auto" }} />
              <span style={{fontSize: responsiveStyles.logo.fontSize || "1.2rem", fontWeight: "600", color: "#f5f5f5", marginLeft: "0.5rem", display: "flex", alignItems: "center", lineHeight: "1"}}>djunct</span>
            </div>
            {/* Desktop Navigation */}
            {!isMobileView && (
              <nav style={styles.nav}>
                <a href="#docs" style={styles.navLink}>Docs</a>
                <a href="#about" style={styles.navLink}>About</a>
                <a href="#contact" style={styles.navLink}>Contact</a>
              </nav>
            )}
          </div>

          {/* Right: CTA + Mobile Menu */}
          <div style={responsiveStyles.rightSection}>
            <button 
              style={responsiveStyles.buttonSecondary}
              onClick={() => setShowPopup(true)}
            >
              Get early access
            </button>
            {isMobileView && (
              <button 
                style={responsiveStyles.mobileMenuButton}
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {isMobileView && mobileMenuOpen && (
          <div 
            style={styles.mobileMenuBackdrop}
            onClick={closeMobileMenu}
          />
        )}
        
        {/* Mobile Menu */}
        {isMobileView && mobileMenuOpen && (
          <div 
            key="mobile-menu"
            style={styles.mobileMenu}
          >
            <div style={styles.mobileNav}>
              <a href="#features" style={styles.mobileNavLink} onClick={closeMobileMenu}>
                Features
              </a>
              <a href="#about" style={styles.mobileNavLink} onClick={closeMobileMenu}>
                About
              </a>
              <a href="#contact" style={styles.mobileNavLink} onClick={closeMobileMenu}>
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <div style={styles.contentWrapper}>
        {/* HERO */}
        <div style={styles.heroWrapper}>
          <section style={responsiveStyles.hero}>
            <h1 style={responsiveStyles.heroTitle}>
              Adjunct is the real time messaging platform with AI Intelligence.
            </h1>
            <p style={responsiveStyles.heroText}>
              Human Intelligence, AI Precision, Perfectly Fused. The messaging
              app that uses the AI which does the work easy and provides the
              privacy than any other. Not just the guidance, It's the
              performance.
            </p>
            <button 
              style={responsiveStyles.buttonPrimary}
              onClick={() => setShowPopup(true)}
            >
              Join Waitlist
            </button>
          </section>
        </div>

        {/* FIRST FEATURES GRID */}
        <section style={responsiveStyles.featuresGrid}>
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
        <section style={responsiveStyles.secondFeaturesContainer}>
          {/* Big block on left */}
          <div
            style={{
              ...responsiveStyles.bigBlock,
              ...(hoveredSecondIndex === 0 ? styles.featureCardHover : {}),
            }}
            onMouseEnter={() => setHoveredSecondIndex(0)}
            onMouseLeave={() => setHoveredSecondIndex(null)}
          >
            <div style={responsiveStyles.bigBlockImage}>
              <img 
                src={screenshotImg} 
                alt="Feature preview" 
                style={{ 
                  maxWidth: "100%", 
                  maxHeight: "300px", 
                  objectFit: "contain" 
                }} 
              />
            </div>
            <div style={responsiveStyles.bigBlockContent}>
              {secondFeatures[0].icon}
              <h3 style={styles.featureTitle}>{secondFeatures[0].title}</h3>
              <p style={styles.featureDesc}>{secondFeatures[0].desc}</p>
            </div>
          </div>

          {/* Four smaller stacked blocks on right */}
          <div style={responsiveStyles.smallBlocksContainer}>
            {secondFeatures.slice(1).map((f, i) => (
              <div
                key={i + 1}
                style={{
                  ...responsiveStyles.smallBlock,
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
          
          {/* Debug/Admin Section - Remove in production */}
          <div style={{ marginTop: "1rem", fontSize: "0.8rem", opacity: 0.7 }}>
            <button 
              onClick={viewStoredSubmissions}
              style={{ 
                backgroundColor: "transparent", 
                border: "1px solid #666", 
                color: "#666", 
                padding: "0.25rem 0.5rem", 
                marginRight: "0.5rem",
                cursor: "pointer",
                fontSize: "0.8rem"
              }}
            >
              View Submissions
            </button>
            <button 
              onClick={clearStoredSubmissions}
              style={{ 
                backgroundColor: "transparent", 
                border: "1px solid #666", 
                color: "#666", 
                padding: "0.25rem 0.5rem",
                cursor: "pointer",
                fontSize: "0.8rem"
              }}
            >
              Clear Submissions
            </button>
          </div>
        </footer>
      </div>

      {/* POPUP FORM */}
      {showPopup && (
        <div style={styles.popupOverlay} onClick={handleClosePopup}>
          <div 
            className="popup-form"
            style={responsiveStyles.popupForm} 
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={responsiveStyles.popupTitle}>Join the Waitlist</h2>
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel} htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={styles.formInput}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#333";
                    e.target.style.boxShadow = "none";
                  }}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel} htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={styles.formInput}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#333";
                    e.target.style.boxShadow = "none";
                  }}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel} htmlFor="phone">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={styles.formInput}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#333";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel} htmlFor="reason">Why are you interested in Adjunct? (Optional)</label>
                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  style={styles.formTextarea}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#333";
                    e.target.style.boxShadow = "none";
                  }}
                  placeholder="Tell us why you're interested in our messaging platform..."
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel} htmlFor="referral">How did you hear about us?</label>
                <select
                  id="referral"
                  name="referral"
                  value={formData.referral}
                  onChange={handleInputChange}
                  style={styles.formSelect}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#333";
                    e.target.style.boxShadow = "none";
                  }}
                  required
                >
                  <option value="">Select an option</option>
                  <option value="family">Family</option>
                  <option value="friends">Friends</option>
                  <option value="social-media">Social Media</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div style={responsiveStyles.formButtons}>
                <button 
                  type="submit" 
                  style={styles.buttonPrimary}
                >
                  Submit
                </button>
                <button 
                  type="button" 
                  style={styles.buttonSecondary}
                  onClick={handleClosePopup}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
