import * as Building from "../../style/buildings/Building.styled";
import { useEffect, useState } from "react";
import { AptTypes } from "../../types/Tabletype";
import { dummyData } from "../../component/buildings/dummyData";
import Table from "../../component/buildings/Table";
import { useNavigate } from "react-router-dom";
import Layout from "../../component/Layout";
import Paging from "../../component/Paging";

function Buildings() {
  const [buildings, setBuildings] = useState<AptTypes[]>(dummyData);
  const [currentPost, setCurrentPost] = useState<AptTypes[]>(buildings); // 게시판 목록에 보여줄 게시글
  const [page, setPage] = useState<number>(1); // 현재 페이지 번호

  const postPerPage = 5; // 페이지 당 게시글 개수
  const indexOfLastPost = page * postPerPage; // 현재 게시글 index
  const indexOfFirstPost = indexOfLastPost - postPerPage; // 마지막 게시글 index

  const navigate = useNavigate();
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  // 현재 페이지 데이터 리스트
  useEffect(() => {
    setCurrentPost(buildings.slice(indexOfFirstPost, indexOfLastPost));
  }, [buildings, page]);

  /* // 후에 제대로된 데이터를 받아 state로 관리
  useEffect(() => {
    (async () => {
      const result = await instance.get(`/Buildings/Buildings`);
      console.log(result.data);
      setBuildings(result.data);
    })();
  }, []); */

  /* // 모달 띄울때 사용하는 함수 및 리코일 
  const setModalList = useSetRecoilState(modalsState);

  const addAptHandler = () => {
    setModalList({
      isOpen: true,
      modalType: "addApt",
      props: {},
    });
  }; */

  return (
    <Layout>
      <Building.Board>
        <Building.Search>
          <Building.SearchContainer>
            <Building.SearchInputBox>
              <Building.SearchInput />
            </Building.SearchInputBox>
            <Building.SearchButton>
              <Building.SearchIcon size="20" />검 색
            </Building.SearchButton>
          </Building.SearchContainer>
          <Building.Utils>
            <Building.UtilsButton onClick={() => navigate("/Buildings/Enroll")}>
              <Building.PlusIcon /> 매물 등록
            </Building.UtilsButton>
            <Building.UtilsButton>삭제</Building.UtilsButton>
          </Building.Utils>
        </Building.Search>
        <Building.ItemList>
          <Building.Container>
            <Building.SectionTitle>
              전체 매물 :<Building.Accent>{buildings.length}</Building.Accent>개
            </Building.SectionTitle>
            <Table data={currentPost} />
          </Building.Container>
          <Paging
            page={page}
            count={buildings.length}
            setPage={(pageNumber: number) => handlePageChange(pageNumber)}
            postPerPage={postPerPage}
          />
        </Building.ItemList>
      </Building.Board>
    </Layout>
  );
}

export default Buildings;
