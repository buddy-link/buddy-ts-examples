export type MemberTableRow = {
  profile: string;
  member: string;
  treasuryCount: number;
};
interface Props {
  data: MemberTableRow[];
}
const MembersTable = ({ data }: Props) => (
  <table className="w-full">
    <thead>
      <tr>
        <th>#</th>
        <th>Profile</th>
        <th>Member</th>
        <th>Treasury count</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={item.profile}>
          <td>#{index + 1}</td>
          <td
            align="center"
            className={`py-2 px-4 rounded-l-md ${
              index % 2 ? "bg-primary-dark" : ""
            }`}
          >
            {item.profile}:
          </td>
          <td
            align="center"
            className={`py-2 px-4 rounded-r-md ${
              index % 2 ? "bg-primary-dark" : ""
            }`}
          >
            {item.member}
          </td>
          <td
            align="center"
            className={`py-2 px-4 rounded-r-md ${
              index % 2 ? "bg-primary-dark" : ""
            }`}
          >
            {item.treasuryCount}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default MembersTable;
