import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const Loading = () => {
  return (
    <div>
      <Skeleton height={50} count={4} />
    </div>
  );
};

export default Loading;
