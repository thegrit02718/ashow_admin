import React, { ChangeEvent } from "react";
import { useContext } from "react";
import { TabsContext } from "../../../molecule/Tabs";
import * as Tab from "../../../../style/component/tab/Tabs.styled";
import { Action } from "../../../../types/Reducer";
import BasicInput from "../../../BasicInput";
import {
  ALLOW_FILE_EXTENSION,
  checkFileValidity,
} from "../../../../util/fileUtils";

interface ImagePanelProps {
  dispatch: React.Dispatch<Action>;
  state: any;
  category: string;
}

function EnrollImagePanel({ dispatch, state, category }: ImagePanelProps) {
  const context = useContext(TabsContext);

  if (context) {
    const deleteImageBox = (index: number) => {
      dispatch({
        type: "DELETE_IMAGE",
        payload: { category, index },
      });
      dispatch({
        type: "DELETE_IMAGE_SIZE",
        payload: { category, index },
      });
    };

    const addImageBox = () => {
      const inputElement = document.createElement("input");
      inputElement.type = "file";
      inputElement.accept = ALLOW_FILE_EXTENSION; // 확장자 제한 추가

      // inputElement를 클릭해서 파일 선택 다이얼로그를 엶.
      inputElement.click();

      // inputElement의 변화를 감지하여 이미지를 처리.
      inputElement.addEventListener("change", async (e) => {
        const target = e.target as HTMLInputElement;
        const file = target.files?.[0];

        if (file) {
          // 파일 확장자 유효성 검사
          checkFileValidity(category, file);
          const reader = new FileReader();

          reader.onloadend = () => {
            dispatch({
              type: "ADD_IMAGE",
              payload: {
                category,
                source: reader.result as string,
              },
            });
            dispatch({
              type: "UPDATE_IMAGE_SIZE",
              payload: {
                category,
                size: file.size,
              },
            });
          };
          reader.readAsDataURL(file);
        }
      });
    };

    const onChangeImage = async (
      e: ChangeEvent<HTMLInputElement>,
      index: number
    ) => {
      const file = e.target.files?.[0];

      if (file) {
        // 파일 확장자 유효성 검사
        checkFileValidity(category, file);
        const reader = new FileReader();

        reader.onloadend = () => {
          dispatch({
            type: "UPDATE_IMAGE",
            payload: {
              category,
              image: reader.result as string,
              index,
            },
          });
          dispatch({
            type: "UPDATE_IMAGE_SIZE",
            payload: {
              category,
              size: file.size,
              index,
            },
          });
        };
        reader.readAsDataURL(file);
      }
    };
    // 나중에 EnrollImagePanel의 내부 함수를 lib> provider> 함수로 한번 빼보도록 하자 함수안에 함수로. 커스텀 훅과 같은 로직으로.
    const imageArray = state.image[category as keyof typeof state.image];

    return (
      <Tab.PanelInner>
        <Tab.ImageListBox>
          <Tab.FlexbBox>
            <Tab.IconBox onClick={addImageBox}>
              <Tab.PlusIcon />
              <Tab.UploadText>파일 업로드</Tab.UploadText>
            </Tab.IconBox>
            <Tab.ImageItemBox>
              {imageArray.map((box: string, index: number) => {
                return (
                  <Tab.ImageBox key={index}>
                    <Tab.DeleteIcon onClick={() => deleteImageBox(index)} />
                    <Tab.Label htmlFor={`uploadImage-${index}`}>
                      <Tab.LabelInner>
                        {box.length === 0 && <Tab.ImageUploadIcon />}
                        {box.length > 0 && (
                          <Tab.Image
                            src={box}
                            loading="lazy"
                            decoding="async"
                          />
                        )}
                      </Tab.LabelInner>
                    </Tab.Label>

                    <BasicInput
                      type="file"
                      id={`uploadImage-${index}`}
                      hidden
                      event={(e) => onChangeImage(e, index)}
                    />
                  </Tab.ImageBox>
                );
              })}
            </Tab.ImageItemBox>
          </Tab.FlexbBox>
          <Tab.CommentBox>
            <Tab.CommentList>
              <Tab.CommentItem>·</Tab.CommentItem>
              <Tab.CommentItem>
                10MB이하의 파일을 등록할 수 있습니다.
              </Tab.CommentItem>
            </Tab.CommentList>
            <Tab.CommentList>
              <Tab.CommentItem>·</Tab.CommentItem>
              <Tab.CommentItem>
                등록가능한 이미지 파일 확장자: jpg, jpeg, png
              </Tab.CommentItem>
            </Tab.CommentList>
          </Tab.CommentBox>
        </Tab.ImageListBox>
      </Tab.PanelInner>
    );
  }
  return null;
}

export default EnrollImagePanel;
