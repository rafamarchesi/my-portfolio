import React, { useState, useEffect } from 'react';
import Loader from './components/Loader'; 
import MainContent from './pages/Home/Home'; 

const App = () => {  
  const [loading, setLoading] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideLoader(true); 
      setTimeout(() => {
        setLoading(false); 
      }, 500); 
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader hide={hideLoader} />}
      {!loading && <MainContent />}
    </>
  );
};

export default App;
