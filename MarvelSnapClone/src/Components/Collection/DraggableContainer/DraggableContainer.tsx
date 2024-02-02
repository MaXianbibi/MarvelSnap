// DragDropContainer.tsx
import React, { ReactNode } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Draggable from './Draggable'; // Assurez-vous que le chemin d'importation est correct

type DragDropContainerProps = {
  children: ReactNode;
};

const DragDropContainer: React.FC<DragDropContainerProps> = ({ children }) => {
	return (
	  <DndProvider backend={HTML5Backend}>
		<Draggable id="unique-id">
		  {children}
		</Draggable>
	  </DndProvider>
	);
  };
  

export default DragDropContainer;
