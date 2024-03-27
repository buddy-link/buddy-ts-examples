interface Props {
  data: { key: string; value: string }[];
}
const OrganizationTable = ({ data }: Props) => (
  <table className="w-full">
    <tbody>
      {data.map((item, index) => {
        return (
          <tr key={item.key}>
            <td
              className={`py-2 px-4 rounded-l-md ${
                index % 2 ? "bg-primary-dark" : ""
              }`}
            >
              {item.key}:
            </td>
            <td
              className={`py-2 px-4 rounded-r-md ${
                index % 2 ? "bg-primary-dark" : ""
              }`}
            >
              {item.value}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default OrganizationTable;
