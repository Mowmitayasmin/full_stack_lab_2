import orgData from "../../data/organizationdata.json";
const Organization = () => {
  return (
    <div className="border rounded flex-grow p-4 min-w-60">
      {orgData.roles.map((x, i) => (
        <ul>
          <li>{x.title}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Organization;
