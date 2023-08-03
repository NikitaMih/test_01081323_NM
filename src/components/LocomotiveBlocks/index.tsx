import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocomotive, selectCount, SetCount } from '../../slices/block';
import Block from '../Block';
import './style.scss';

function LocomotiveBlocks() {

  const dispatch = useDispatch();
  const locomotive = useSelector(selectLocomotive);
  const count = useSelector(selectCount);

  useEffect(() => {
    const count = 100 - locomotive.filter((blok: any) => blok.empty === false).length;
    dispatch(SetCount(count));
  }, [locomotive]);
  
  return (
    <div className='locomotive-section'>
      <div className='count'>Free blocks: {count}</div>
      <div className='locomotive'>
          {locomotive.map((block: any) => {
              return <Block key={block.position} {...block}/>
          })}
      </div>
    </div>
  );
};

export default LocomotiveBlocks;
