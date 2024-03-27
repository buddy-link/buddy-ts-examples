import { useBuddyState } from "buddy.link";
import _ from "lodash";
import { useEffect, useRef, useState } from "react";

const Search = () => {
  const [, setOrganizationName] = useBuddyState("ORGANIZATION_NAME");

  const [value, setValue] = useState("");

  const debouncedSearch = useRef(
    _.debounce(async (name) => {
      console.log("here");
      setOrganizationName(name);
    }, 300)
  ).current;

  useEffect(() => {
    debouncedSearch(value);
  }, [debouncedSearch, value]);

  return (
    <div className="w-full bg-[#282828] p-4 rounded-md flex flex-col gap-4">
      <h2 className="font-bold">Search for organization</h2>
      <input
        placeholder="Org name (i.e. laddercaster, staratlas, elementerra)"
        className="bg-transparent border border-[#8b8b8b] rounded-lg p-2 outline-none w-full"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
