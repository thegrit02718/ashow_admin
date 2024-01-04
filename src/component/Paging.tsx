import React from "react";
import * as Building from "../style/buildings/Building.styled";
import Pagination from "react-js-pagination";
import "../style/buildings/paging.css";
interface PagingProps {
  page: number;
  count: number;
  setPage: (page: number) => void;
  postPerPage: number;
}

function Paging(props: PagingProps) {
  const { page, count, setPage, postPerPage } = props;

  return (
    <div>
      <Pagination
        activePage={page}
        itemsCountPerPage={postPerPage}
        totalItemsCount={count}
        pageRangeDisplayed={5}
        firstPageText={<Building.ArrowFirstPage />}
        lastPageText={<Building.ArrowLastPage />}
        prevPageText={<Building.ArrowPrev />}
        nextPageText={<Building.ArrowNext />}
        onChange={setPage}
      />
    </div>
  );
}

export default Paging;
