import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react"; 

const Expand = ({ x }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border p-2 rounded">
      <div className="flex justify-between item-center">
        <span className="text-lg">{x.title}</span>
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>

      {expanded && (
        <div id="employee-list" className="mt-2">
          <ul className="employee text-sm flex flex-col gap-2">
            <li>Description: {x.description}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Expand;
