

  import Navbar from './components/Navbar';
  import Hero from './components/Hero';
  import About from './components/About';
  import Contact from './components/Contact';
  import Project from './components/Project';
  import Skills from './components/Skills';
  import Education from './components/Education';
  import Experience from './components/Experience';
  import Footer from './components/Footer';

  const App: React.FC = () => {


    return (
      
      <div className='bg-white dark:bg-gray-900 text-black dark:text-white relative h-full overflow-y-auto antialiased'>
      <div className='fixed inset-0 bg-fixed bg-cover bg-center bg-img'></div>
      <div className='relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto'>
        <Navbar />

        <Hero/>
        <About />
        <Project />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>

    )
  }

  export default App
