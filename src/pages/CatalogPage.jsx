import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../redux/operations';
import { CampersList } from '../components/CampersList/CampersList';
import { Filter } from '../components/Filter/Filter';
import { LoadMore } from '../components/LoadMore/LoadMore';

export default function CatalogPage() {
  const [currentLimit, setCurrentLimit] = useState(4);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers(currentLimit));
  }, [dispatch, currentLimit]);
  const handleLoadMore = () => {
    setCurrentLimit(prevLimit => prevLimit + 4);
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '26px',
        // width: '982px',
        padding: '40px',
      }}
    >
      <Filter/>
      <div style={{
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center',
      }}>
      <CampersList />
      {currentLimit <= 12 && (
        <LoadMore handleLoadMore={handleLoadMore}/>
      )}
      </div>
    </div>
  );
}
