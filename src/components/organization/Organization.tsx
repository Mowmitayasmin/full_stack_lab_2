import orgData from "../../data/organizationdata.json";
import Expand from "./Expand";
const Organization = () => {
  return (
    <div className="border rounded flex-grow p-4 min-w-60">
      {orgData.roles.map((x, i) => (
        <ul>
          <li>
            <Expand x={x} />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Organization;
