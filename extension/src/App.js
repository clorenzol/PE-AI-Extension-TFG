import React from 'react';
import { useEffect } from 'react';
import './App.css';
import Generator from './components/Generator';
import Profile from './components/Profile';
import { ROUTES } from './utils/routes';
import { loadData } from './utils/localStorage';

function App() {
  const [page, setPage] = React.useState();
  const [openAIKey, setOpenAIKey] = React.useState("test key");
  const [info, setInfo] = React.useState("info test");

  // Load data from local storage on component mount
  useEffect(() => {
    const fetchLocalData = async () => {
      const fetchedInfo = await loadData("info");
      const fetchedAIKey = await loadData("openAIKey");

      setInfo(fetchedInfo);
      setOpenAIKey(fetchedAIKey);
    };

    fetchLocalData();
  }, []);

  
    switch (page) {
      case ROUTES.GENERATOR:
        return <Generator setPage={setPage} info={info} openAIKey={openAIKey} />;
      case ROUTES.PROFILE:
        return <Profile
          setPage={setPage}
          info={info}
          setInfo={setInfo}
          openAIKey={openAIKey}
          setOpenAIKey={setOpenAIKey}
        />;
      default:
        return <Generator setPage={setPage} info={info} openAIKey={openAIKey} />;
  }
  
}

export default App;
