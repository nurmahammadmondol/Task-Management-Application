import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

const Column = ({ col }) => {
  return (
    <Droppable droppableId={col.id}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="bg-gray-200 p-4 rounded-md h-full"
        >
          <h3 className="text-lg font-bold mb-4">{col.id}</h3>
          <ul>
            {col.list.map((item, index) => (
              <li
                key={index}
                className="bg-white p-2 rounded-md mb-2 shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Column;
