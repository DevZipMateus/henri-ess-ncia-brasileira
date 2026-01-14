import { useEffect, useState } from "react";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";

const getHeaderHeight = () => 96;

const Vitrine = () => {
  const [headerHeight] = useState(getHeaderHeight());
  const [iframeHeight, setIframeHeight] = useState(
    window.innerHeight - getHeaderHeight()
  );

  useEffect(() => {
    const handleResize = () => {
      setIframeHeight(window.innerHeight - getHeaderHeight());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scrolling on page
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.height = "100%";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.height = "";
    };
  }, []);

  return (
    <PageTransition>
      <div className="fixed inset-0 w-full h-full overflow-hidden" style={{ backgroundColor: '#fcd1c6' }}>
        <Header />

        {/* Iframe - Remaining space */}
        <main 
          className="w-full overflow-hidden"
          style={{ 
            marginTop: `${headerHeight}px`,
            height: `${iframeHeight}px`
          }}
        >
          <iframe
            src="https://perfumariahenri.egestor.com.br/vitrine/"
            title="Demonstração de Vitrine"
            className="w-full h-full"
            style={{ border: "none" }}
            scrolling="no"
          />
        </main>
      </div>
    </PageTransition>
  );
};

export default Vitrine;
