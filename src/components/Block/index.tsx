import { useDispatch, useSelector } from 'react-redux';
import { SetLocomotive, selectLocomotive } from '../../slices/block';
import './style.scss';

function Block({id, position, color, empty, active}:{
    id: number;  
    position: number; 
    color: string;
    empty: boolean;
    active: boolean;
  }) {

  const dispatch = useDispatch();
  const locomotive = useSelector(selectLocomotive);

  const showBlocks = () => {
    let newLoco = [...locomotive].map((block) => {
        if(block.id === id) {
            return { ...block, active: true}
        } else {
            return { ...block, active: false}
        };
    });
    dispatch(SetLocomotive(newLoco));
  };

  const deleteBlocks = () => {
    let newLoco = [...locomotive].map((block) => {
        if(block.id === id) {
            return { ...block, id: 0, empty: true };
        }
        return block;
    });
    dispatch(SetLocomotive(newLoco));
  };

  return (
    <div 
        key={position} 
        className='block' 
        style={{backgroundColor: empty ? '#282C34' : color, transform: active ? 'scale(1.3)' : 'scale(1)'}}
        onClick={showBlocks}
        onDoubleClick={deleteBlocks}
    >{empty && '-'}</div>
  );
};

export default Block;
