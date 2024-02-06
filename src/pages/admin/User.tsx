import { useState, useEffect } from "react";
import * as Admin from "../../style/admin/User.styled";
import Layout from "../../component/Layout";
import { TableCell } from "../../component/atom/table/TableCell";
import { TableRow } from "../../component/atom/table/TableRow";
import { Table } from "../../component/molecule/Table";
import { Select } from "../../component/molecule/Select";
import Paging from "../../component/Paging";
import { useRecoilState, useRecoilValue } from "recoil";
import { sortingState } from "../../recoil/stateTableFilter";
import { sortData } from "../../util/sortTableData";
import { selectState } from "../../recoil/stateProduct";

interface IData {
  no: number;
  userId: string;
  userName: string;
  totalListings: number;
  enrollDate: string;
  company: string;
}

function User() {
  const dataTitle = [
    { title: "No", hasSort: true, columnName: "no" },
    { title: "아이디", hasSort: true, columnName: "userId" },
    { title: "이름", hasSort: true, columnName: "userName" },
    { title: "가입날짜", hasSort: true, columnName: "enrollDate" },
    { title: "회사", hasSort: false },
    { title: "매물 개수", hasSort: true, columnName: "totalListings" },
    { title: "", hasSort: false },
  ];
  const data = [
    {
      no: 1,
      userId: "test@naver.com",
      userName: "테스터1",
      totalListings: 2,
      enrollDate: "2023.12.21",
      company: "거림",
    },
    {
      no: 2,
      userId: "test2@naver.com",
      userName: "테스터2",
      totalListings: 3,
      enrollDate: "2023.11.21",
      company: "거림",
    },
    {
      no: 3,
      userId: "test3@naver.com",
      userName: "테스터3",
      totalListings: 4,
      enrollDate: "2023.12.21",
      company: "거림",
    },
    {
      no: 4,
      userId: "test4@naver.com",
      userName: "테스터4",
      totalListings: 1,
      enrollDate: "2023.12.21",
      company: "거림",
    },
    {
      no: 5,
      userId: "test5@naver.com",
      userName: "테스터5",
      totalListings: 1,
      enrollDate: "2023.12.21",
      company: "거림",
    },
    {
      no: 6,
      userId: "test5@naver.com",
      userName: "테스터5",
      totalListings: 1,
      enrollDate: "2023.12.21",
      company: "거림",
    },
    {
      no: 7,
      userId: "test5@naver.com",
      userName: "테스터5",
      totalListings: 1,
      enrollDate: "2023.12.21",
      company: "거림",
    },
    {
      no: 8,
      userId: "test5@naver.com",
      userName: "테스터5",
      totalListings: 1,
      enrollDate: "2023.12.21",
      company: "거림",
    },
    {
      no: 9,
      userId: "test5@naver.com",
      userName: "테스터5",
      totalListings: 1,
      enrollDate: "2023.12.21",
      company: "거림",
    },
    {
      no: 10,
      userId: "test5@naver.com",
      userName: "테스터5",
      totalListings: 1,
      enrollDate: "2023.12.21",
      company: "거림",
    },
    {
      no: 11,
      userId: "test5@naver.com",
      userName: "테스터5",
      totalListings: 1,
      enrollDate: "2023.12.21",
      company: "거림",
    },
    {
      no: 12,
      userId: "test5@naver.com",
      userName: "테스터5",
      totalListings: 1,
      enrollDate: "2023.12.21",
      company: "거림",
    },
    {
      no: 13,
      userId: "test5@naver.com",
      userName: "테스터5",
      totalListings: 1,
      enrollDate: "2023.12.21",
      company: "거림",
    },
    {
      no: 14,
      userId: "test5@naver.com",
      userName: "테스터5",
      totalListings: 1,
      enrollDate: "2023.12.21",
      company: "거림",
    },
    {
      no: 15,
      userId: "test5@naver.com",
      userName: "테스터5",
      totalListings: 1,
      enrollDate: "2023.12.21",
      company: "거림",
    },
    {
      no: 16,
      userId: "test5@naver.com",
      userName: "테스터5",
      totalListings: 1,
      enrollDate: "2023.12.21",
      company: "거림",
    },
    {
      no: 17,
      userId: "test5@naver.com",
      userName: "테스터5",
      totalListings: 1,
      enrollDate: "2023.12.21",
      company: "거림",
    },
    {
      no: 18,
      userId: "test5@naver.com",
      userName: "테스터5",
      totalListings: 1,
      enrollDate: "2023.12.21",
      company: "거림",
    },
  ];
  const [user, setUser] = useState(data);
  const [page, setPage] = useState<number>(1);
  const [currentPost, setCurrentPost] = useState<IData[]>(user); // 게시판 목록에 보여줄 게시글
  const { columnName, order } = useRecoilValue(sortingState);
  const [selectedItem, setSelectedItem] = useRecoilState(selectState);
  const postPerPage = 11; // 페이지 당 게시글 개수
  const indexOfLastPost = page * postPerPage; // 현재 게시글 index
  const indexOfFirstPost = indexOfLastPost - postPerPage; // 마지막 게시글 index
  const handlePageChange = (page: number) => {
    setPage(page);
  };
  useEffect(() => {
    setCurrentPost(user.slice(indexOfFirstPost, indexOfLastPost));
  }, [user, page]);

  useEffect(() => {
    if (columnName && order) {
      const sortedData = sortData(user, columnName, order);

      setUser(sortedData);
    }
  }, [columnName, order]);

  const renderRow = (item: IData, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell>{item.no}</TableCell>
        <TableCell>{item.userId}</TableCell>
        <TableCell>{item.userName}</TableCell>
        <TableCell>{item.enrollDate}</TableCell>
        <TableCell>{item.company}</TableCell>
        <TableCell width={80}>{item.totalListings}</TableCell>
        <TableCell width={120}>
          <Admin.ConfirmBtn>매물확인</Admin.ConfirmBtn>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Layout>
      <Admin.Container>
        <Admin.Section>
          <div>
            <Admin.SearchBox>
              <Admin.SelectBox style={{ width: 480 }}>
                <Select
                  defaultValue="아이디"
                  state={selectedItem}
                  setState={setSelectedItem}
                  type="default"
                >
                  <Select.Container>
                    <Select.Trigger />
                    <Select.List>
                      <Select.Option value="아이디" />
                      <Select.Option value="이름" />
                      <Select.Option value="회사" />
                    </Select.List>
                  </Select.Container>
                </Select>
              </Admin.SelectBox>
              <Admin.InputContainer>
                <Admin.InputField
                  type="text"
                  placeholder="검색 내용을 입력해주세요"
                />
                <Admin.SearchBtn type="button">검색</Admin.SearchBtn>
              </Admin.InputContainer>
            </Admin.SearchBox>
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
          </div>
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

export default User;
