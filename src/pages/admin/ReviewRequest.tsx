import React, { useState, useEffect } from "react";
import Layout from "../../component/Layout";
import * as Admin from "../../style/admin/User.styled";
import { TableCell } from "../../component/atom/table/TableCell";
import { TableRow } from "../../component/atom/table/TableRow";
import { Table } from "../../component/molecule/Table";
import { data } from "../../component/admin/data";
import Paging from "../../component/Paging";
import { useRecoilValue } from "recoil";
import { sortingState } from "../../recoil/stateTableFilter";
import { IData } from "../../types/Tabletype";
import { sortData } from "../../util/sortTableData";

function ReviewRequest() {
  const [user, setUser] = useState(data);
  const [page, setPage] = useState<number>(1);
  const [currentPost, setCurrentPost] = useState<IData[]>(user); // 게시판 목록에 보여줄 게시글
  const postPerPage = 11; // 페이지 당 게시글 개수
  const indexOfLastPost = page * postPerPage; // 현재 게시글 index
  const indexOfFirstPost = indexOfLastPost - postPerPage; // 마지막 게시글 index
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    setCurrentPost(user.slice(indexOfFirstPost, indexOfLastPost));
  }, [user, page]);

  const { columnName, order } = useRecoilValue(sortingState);
  useEffect(() => {
    if (columnName && order) {
      const sortedData = sortData(user, columnName, order);
      setUser(sortedData);
    }
  }, [columnName, order]);

  const dataTitle = [
    { title: "No", hasSort: true, columnName: "no" },
    { title: "아이디", hasSort: true, columnName: "userId" },
    { title: "이름", hasSort: true, columnName: "userName" },
    { title: "요청날짜", hasSort: true, columnName: "uploadDate" },
    { title: "주소", hasSort: false },
    { title: "시행사", hasSort: false },
    { title: "", hasSort: false },
  ];
  const renderRow = (item: IData, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell>{item.no}</TableCell>
        <TableCell>{item.userId}</TableCell>
        <TableCell>{item.userName}</TableCell>
        <TableCell>{item.uploadDate}</TableCell>
        <TableCell>
          {item.addressCity +
            " " +
            item.addressCounty +
            " " +
            item.addressRest +
            " " +
            item.promotionSite}
        </TableCell>
        <TableCell>{item.developerCompany}</TableCell>
        <TableCell>
          <Admin.ConfirmBtn>매물확인</Admin.ConfirmBtn>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Layout>
      <Admin.Container>
        <Admin.Section>
          <Admin.ResultContainer>
            <Admin.ResultCount>
              총 :<Admin.Accent>{data.length}</Admin.Accent>건
            </Admin.ResultCount>
            <Table
              data={currentPost}
              columns={dataTitle}
              renderRow={renderRow}
            />
          </Admin.ResultContainer>

          <Paging
            page={page}
            count={user.length}
            setPage={(pageNumber: number) => handlePageChange(pageNumber)}
            postPerPage={postPerPage}
          />
        </Admin.Section>
      </Admin.Container>
    </Layout>
  );
}

export default ReviewRequest;
