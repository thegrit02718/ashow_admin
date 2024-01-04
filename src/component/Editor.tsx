import React, {
  useRef,
  useMemo,
  useState,
  useEffect,
  SetStateAction,
} from "react";
import Layout from "../component/Layout";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

function Editor() {
  const [values, setValues] = useState<string | undefined>();
  const quillRef = useRef<ReactQuill | null>();

  // 에디터 내 textarea 오타체크 false로 조정
  useEffect(() => {
    quillRef.current?.editor?.root.setAttribute("spellcheck", "false");
  }, []);

  // 이미지 처리를 하는 핸들러

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, false] }],
          ["bold", "underline"],
        ],
      },
    };
  }, []);

  return (
    <ReactQuill
      ref={quillRef as React.LegacyRef<ReactQuill>}
      theme="snow"
      placeholder="게시글을 입력해주세요"
      value={values}
      onChange={setValues}
      modules={modules}
    />
  );
}

export default Editor;
