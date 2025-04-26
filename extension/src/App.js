import React, { useEffect, useState } from 'react';
import './App.css';
import Generator from './components/Generator';
import Profile from './components/Profile';
import Ideas from './components/Ideas';
import { ROUTES } from './utils/routes';
import { loadData } from './utils/localStorage';

function App() {
  const [page, setPage] = useState(ROUTES.GENERATOR);
  const [openAIKey, setOpenAIKey] = useState('');
  const [info, setInfo] = useState('');

  useEffect(() => {
    const fetchLocalData = async () => {
      const fetchedInfo  = await loadData('info');
      const fetchedKey   = await loadData('openAIKey');
      if (fetchedInfo)  setInfo(fetchedInfo);
      if (fetchedKey)   setOpenAIKey(fetchedKey);
    };
    fetchLocalData();
  }, []);

  switch (page) {
    case ROUTES.GENERATOR:
      return (
        <Generator
          setPage={setPage}
          openAIKey={openAIKey}
        />
      );
    case ROUTES.PROFILE:
      return (
        <Profile
          setPage={setPage}
          info={info}
          setInfo={setInfo}
          openAIKey={openAIKey}
          setOpenAIKey={setOpenAIKey}
        />
      );
    case ROUTES.IDEAS:
      return <Ideas setPage={setPage} />;
    default:
      return (
        <Generator
          setPage={setPage}
          openAIKey={openAIKey}
        />
      );
  }
}

export default App;
