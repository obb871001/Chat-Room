import React from "react";
import { useSelector } from "react-redux";
import { Input } from "semantic-ui-react";

const SearchBar = ({ chatList, setChatList, setSearchValue }) => {
  const baseMemberList = useSelector((state) => state?.memberChatList);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchValue(searchValue);
    if (searchValue.length > 2) {
      const newChatList = chatList.filter((list) => {
        return list.memId?.toLowerCase().includes(searchValue);
      });
      console.log(newChatList);
      setChatList(newChatList);
    } else {
      setChatList(baseMemberList);
    }
  };

  return (
    <section className="flex justify-between px-[20px] mb-[15px]">
      <Input
        onChange={handleSearch}
        className="w-full"
        placeholder="請輸入三個字以上"
        icon="search"
      />
    </section>
  );
};

export default SearchBar;
