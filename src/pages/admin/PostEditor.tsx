import Layout from "../../component/Layout";
import * as Admin from "../../style/admin/PostList.styled";
import Editor from "../../component/Editor";
import PageTitle from "../../component/molecule/PageTitle";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function PostEditor() {
  const dataIndicator = ["게시물관리", "게시판리스트", "뉴스등록"];
  const navigate = useNavigate();
  // 저장 버튼 클릭 시 서버에 이미지 업로드 및 URL 가져오기
  const handleSubmit = async () => {
    const date = new Date();
    try {
      /* await createPost({
        title,
        content,
        date,

      }).then((res) => console.log(res)); */
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Admin.Board>
        <Admin.PostContainer>
          <PageTitle>
            <PageTitle.Title>뉴스 등록</PageTitle.Title>
            <PageTitle.SubTitle data={dataIndicator} />
          </PageTitle>
          <Admin.InputBox>
            <Admin.InputField placeholder="뉴스 제목을 입력해주세요" />
            <Admin.InputField placeholder="이미지 링크를 입력해주세요" />
          </Admin.InputBox>
          <Editor />
          <Admin.ButtonContainer>
            <Admin.BackButton onClick={() => navigate("/post")}>
              뒤로
            </Admin.BackButton>
            <Admin.SaveButton onClick={handleSubmit}>저장</Admin.SaveButton>
          </Admin.ButtonContainer>
        </Admin.PostContainer>
      </Admin.Board>
    </Layout>
  );
}

export default PostEditor;
