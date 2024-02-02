// Draggable.tsx
import React from 'react';
import { useDrag } from 'react-dnd';

const ItemType = {
  DRAGGABLE_ITEM: 'draggableItem',
};

const Draggable = ({ id, children }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: ItemType.DRAGGABLE_ITEM,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });


  return (
    <div ref={dragRef} >
      {children}
    </div>
  );
};

export default Draggable;
