import { useContext, createContext, useState } from "react";
const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [gender, setGender] = useState("");
  const [specie, setSpecie] = useState("");
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");
  const values = {
    search,
    setSearch,
    gender,
    setGender,
    specie,
    setSpecie,
    location,
    setLocation,
  };
  return (
    <FilterContext.Provider value={values}>{children}</FilterContext.Provider>
  );
};
export const useFilter = () => useContext(FilterContext);
