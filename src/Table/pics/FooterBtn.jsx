import React from "react";

function FooterBtn() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const secondSlice = currentPage * postPerPage;
  const firstSlice = secondSlice - postPerPage;
  const formattedData = DashBoardData.slice(firstSlice, secondSlice);
  // const formattedData2 = DashBoardData.slice(firstSlice, secondSlice);
  const dataLength = DashBoardData.length;
  const datag = dataLength / postPerPage;
  return <div></div>;
}

export default FooterBtn;
