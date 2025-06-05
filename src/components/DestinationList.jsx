import React from "react";
import Location from "./Location";
import  {locations} from '../constants/constant'



const DestinationList = () => {
    console.log("Locations:", locations);
    

  return (
    <div className="w-full p-6 flex flex-col gap-6">
      <section className="title flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Itinerary</h1>
        <h4 className="text-sm opacity-60">Day</h4>
      </section>
      <section className="locationList flex flex-col gap-3 w-full">
        {
            locations.map((location,index)=>(
                <Location key={index} location={location} index={index} />
            ))
        }
      </section>
    </div>
  );
};

export default DestinationList;
