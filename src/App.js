import styles from './css/home.module.css'
import MainCard from './components/maincard';
import { ContentBox } from './components/contentbox';
import { Header } from './components/header'
import { DateTime } from './components/datetime';
import { Search } from './components/search';
import { MetricsBox } from './components/metricsox';
import { UnitSearch } from './components/unitsearch';

function App() {

  return (
    <div className={styles.wrapper}>
      <MainCard />
      <ContentBox>
        <Header>
          <DateTime />
          <Search placeHolder="Search a city..." value='cityInput'/>
        </Header>
        <MetricsBox />
        <UnitSearch unitSystem={'metric'} />
      </ContentBox>
    </div>
  );
}

export default App;
