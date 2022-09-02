import { useEffect, useState } from 'react'
import NavigationDot from './components/NavigationDot';
import NextPrev from './components/NextPrev';
import Slides from './components/Slides';
import Header from './components/Header'
import { AppContext } from './context';
import styles from './styles/Home.module.css'

function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [apiData, setApiData] = useState([]);

  useEffect(() => { 
    getImgData();
  },[])

  useEffect(() => {
    let interval = setInterval(() => {
      setSlideIndex(previousValue => compareIndexNum(previousValue + 1));
    }, 1000); 

    return () => {
      clearInterval(interval);
    }
  }, [apiData])

  const getImgData = () => {
    fetch(
      "https://api.scryfall.com/cards/search?q=c%3Awhite+cmc%3D1")
      .then((res) => res.json())
      .then((json) => {
        const firstTenOnly = json.data.slice(0, 5);
        setApiData(firstTenOnly);
      })
  }

  const compareIndexNum = (num) => {
    if (num === apiData.length) {
      return 0;
    } else if (num < 0) {
      return apiData.length - 1;
    } else {
      return num;
    }
  }

  const plusSlides = (n) => {
    const num = slideIndex + n;
    setSlideIndex(compareIndexNum(num))
  }

  const currentSlide = (n) => {
    setSlideIndex(n);
  }

  return (
    <div className={styles.container}>
      <Header />
      <AppContext.Provider value={{ apiData, slideIndex, currentSlide, plusSlides }}>
        <Slides/>
        <NavigationDot />
        <NextPrev />
      </AppContext.Provider>
    </div>
  )
}

export default App;
