import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { usePortfolio } from "../context/PortfolioContext";
import { Loader } from "../components/Loader";
import { ExpandableScreenDemo } from "../components/ExpandScreen";
import { LanguageStack } from "../components/LanguageStack";

const Index = () => {
  const { loading } = usePortfolio();
  return (
    <div className="min-h-screen bg-background">
      {!loading ? (
        <>
          <Navigation />
          <main>
            {/* <Test /> */}
            <Hero />
            {/* <ExpandableScreenDemo/> */}
            <LanguageStack/>
            <About />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Index;
