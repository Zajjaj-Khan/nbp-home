import { useState,useEffect,useRef } from 'react'
import TopHeader from './components/TopHeader'
import './index.scss'
import BackgroundTheme from './components/BackgroundTheme'
import MainContainer from './components/MainContainer'

export default function App() {
  const [showSection, setShowSection] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const sectionRef = useRef(null);
  const relativeBtnRef = useRef(null); // Ref for the button

  useEffect(() => {
    console.log("Intersection Observer supported?", "IntersectionObserver" in window);

  },[]);

  useEffect(() => {
    if (!relativeBtnRef.current) {
      console.error("Element '.relativeBtn' not found.");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.rootBounds.height > 760){
            // Update state on intersection change
            console.log("INTERSECTION OBSERVER IS NOTICED", entry);
            console.log(entry)
        
            setIsIntersecting(entry.isIntersecting);
            
          }
    
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    observer.observe(relativeBtnRef.current);
    return () => observer.disconnect(); // Cleanup observer


  }, []);

  useEffect(() => {
    if (isIntersecting) {
      console.log("Element is in view!");

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });


        setTimeout(() => {
          setShowSection(false);
        }, 600);
      }, 500);
    } else {
      console.log("Element is out of view!");
    }
  }, [isIntersecting]);

  const handleButtonClick = () => {
    setShowSection((prev) => {
      const newState = !prev;
      if (newState) {
        setTimeout(() => {
          sectionRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      return newState;
    });
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    console.log("Selected Product in Parent:", product);
  };
  return (
    <BackgroundTheme showSection={showSection} ref={sectionRef} selectedProduct = {selectedProduct}>
      <TopHeader />
      <MainContainer handleButtonClick={handleButtonClick} relativeBtnRef={relativeBtnRef} onProductSelect={handleProductSelect} />
    </BackgroundTheme>
  );
}
