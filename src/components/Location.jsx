import React, { useState } from "react";
// import india_gate from "../assets/images/india_gate.jpg";
import mapIcon from "../assets/icons/map.png";
import starIcon from "../assets/icons/star.png";
import attachIcon from "../assets/icons/attach.png";
import binIcon from "../assets/icons/bin.png";
import editIcon from "../assets/icons/edit.png";
import listIcon from "../assets/icons/list.png";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core';

import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';

import { CSS } from '@dnd-kit/utilities';
import { locations } from '../constants/constant'

function SortableItem({ id, index }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: '12px',
    border: '1px solid #ccc',
    marginBottom: '8px',
    backgroundColor: 'white',
    borderRadius: '6px',
    cursor: 'grab',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className="w-full h-32 flex gap-4 items-center">

        <section className="flex h-full w-fit items-center justify-center ">

          <img className="w-5" src={listIcon} alt="" />
        </section>
        <section className="locationImgSection w-36 rounded-xl ">
          <img className="rounded-lg object-cover object-center" src={id.image} alt="" />
        </section>
        <section className="locationInfoSection  gap-2 flex flex-col w-full p-2 ">
          <section className="w-full flex justify-between">
            <h1 className="text-lg font-bold">{id.name}</h1>
            {/* Increase the width and adjust the gap */}
            <div className="flex justify-end gap-4 w-24">
              <img className="w-5 h-5" src={mapIcon} alt="" />
              <img className="w-5 h-5" src={attachIcon} alt="" />
              <img className="w-5 h-5" src={binIcon} alt="" />
            </div>
          </section>
          <section className="flex gap-2 items-center text-sm text-slate-700">
            <h4 className="px-1 opacity-70">{id.rating.value}</h4>
            <img className="w-4 h-4" src={starIcon} alt="" />
            <h4 className="text-sm text-slate-700" >{`(${id.rating.count})`}</h4>
          </section>
          <section className="p-2 bg-slate-200 rounded-sm text-sm font-medium text-zinc-800 flex justify-between ">
            <p>{id.description}</p>
            <img className="w-4 h-4 ml-1" src={editIcon} alt="" />
          </section>
        </section>
      </div>
    </div>
  );
}


const Location = ({ location }) => {
  const [destination, setDestinations] = useState(locations);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = destination.indexOf(active.id);
      const newIndex = destination.indexOf(over.id);

      setDestinations((destination) => arrayMove(destination, oldIndex, newIndex));
    }
  };

  return (


    <div >
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={locations} strategy={verticalListSortingStrategy}>
          {destination.map((task, index) => (
            <SortableItem key={index} id={task} index={task.id} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Location;
