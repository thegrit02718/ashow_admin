import React, { ChangeEvent } from "react";
import { useContext } from "react";
import { TabsContext } from "../../molecule/Tabs";
import * as Tab from "../../../style/component/tab/Tabs.styled";
import BasicInput from "../../BasicInput";
import useImageCompress from "../../../hooks/useImageCompress";
import { useDropzone } from "react-dropzone";
import {
  handleAddImage,
  handleDeleteImage,
  handleUpdateImage,
} from "../../../util/checkImage";

interface ImagePanelProps {
  category: string;
}

function ImagePanel({ category }: ImagePanelProps) {
  const context = useContext(TabsContext);
  const { getRootProps, getInputProps, isDragActive } = useDropzone();
  if (context) {
    const { state, setState } = context;
    const imageArray = state.image[category as keyof typeof state.image] || [];

    return (
      <Tab.PanelInner>
        <Tab.ImageListBox>
          <Tab.FlexbBox>
            <Tab.IconBox
              onClick={() => handleAddImage(category, state, setState)}
            >
              <Tab.PlusIcon />
              <Tab.UploadText>파일 업로드</Tab.UploadText>
            </Tab.IconBox>
            <Tab.ImageItemBox>
              {imageArray.map((box: string, index: number) => {
                return (
                  <Tab.ImageBox key={index}>
                    <Tab.DeleteIcon
                      onClick={() =>
                        handleDeleteImage(index, category, state, setState)
                      }
                    />
                    <Tab.Label htmlFor={`uploadImage-${category}`}>
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
                      id={`uploadImage-${category}`}
                      hidden
                      event={(e) =>
                        handleUpdateImage(e, index, category, state, setState)
                      }
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

export default ImagePanel;
