import { MEMBER_ITEMS_PER_PAGE } from "../lib/constants";
import Loader from "./Loader";

export type MemberTableRow = {
  profile: string;
  member: string;
  treasuryCount: number;
  publicKey: string;
};

interface Props {
  data: MemberTableRow[];
  isLoading: boolean;
  page: number;
  onNavigate: (type: "prev" | "next") => void;
}

const MembersTable = ({ data, isLoading, page, onNavigate }: Props) => {
  if (isLoading) {
    return (
      <div className="p-4">
        <Loader />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      <table className="w-full">
        <thead>
          <tr>
            <th align="center">#</th>
            <th>Profile</th>
            <th>Member</th>
            <th>Treasury count</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.publicKey}>
              <td align="center">
                #{page * MEMBER_ITEMS_PER_PAGE + index + 1}
              </td>
              <td
                align="center"
                className={`py-2 px-4 rounded-l-md ${
                  index % 2 ? "bg-primary-dark" : ""
                }`}
              >
                {item.profile}
              </td>
              <td
                align="center"
                className={`py-2 px-4  ${index % 2 ? "bg-primary-dark" : ""}`}
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
      <div className="flex gap-2 justify-end">
        <button
          className="hover:text-primary disabled:opacity-50 disabled:hover:text-white"
          onClick={() => onNavigate("prev")}
          disabled={page === 0}
        >
          Prev
        </button>
        <span>/</span>
        <button
          className="hover:text-primary"
          onClick={() => onNavigate("next")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MembersTable;
