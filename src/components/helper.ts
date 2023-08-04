class CreateBlock {
  id: number;
  position: number;
  color: string;
  empty: boolean;
  active: boolean;

  constructor(id: number, position: number, color: string, empty: boolean, active: boolean){
    this.id = id;
    this.position = position;
    this.color = color;
    this.empty = empty;
    this.active = active;
  }
};

export const writeBlockInArr = (id: number, arr: [], color: string, count: number): any[] => {
    let newLoco: any[] = [...arr];  
    for ( let i = 0; i < count; i++ ) {
      for ( let block = 0; block < 100; block++ ) {
        if (!newLoco[block]) {
          const addEmptyBlock = new CreateBlock(0, block, '', true, false);
          newLoco.push(addEmptyBlock);
        };
        if (newLoco[block].empty === true) {
          newLoco[block] = new CreateBlock(id, block, color, false, false);
          break;
        };
      };
    };
    return newLoco;
};

export const sortBlockInArr = (arr: []): any[]=> {
  const unique: number[] = []
  arr.forEach((block: any) => {
    if (!unique.find((el) => el === block.id)) {
      const id:number = block.id;
      unique.push(id);
    };
  });
  const uniqueId: number[] = unique.filter((el) => el !== 0);
  let newLoco: any[] = [];   
  for (let i = 0; i <= uniqueId.length; i++) {
    const sortBlocks: number[] = arr.filter((el: any) => uniqueId[i] === el.id);
    newLoco.push(...sortBlocks);
  };

  return newLoco;
};
