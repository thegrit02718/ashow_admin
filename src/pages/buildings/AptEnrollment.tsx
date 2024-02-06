import { useState, useReducer, useContext } from "react";
import Layout from "../../component/Layout";
import BasicBuilidngInfo from "../../component/buildings/enroll/basicInfo";
import AptPyeongInfo from "../../component/buildings/enroll/pyeong";
import * as Enroll from "../../style/buildings/AptEnrollment.styled";
import StickyBoard from "../../component/buildings/enroll/basicInfo/StickyBoard";

function AptEnrollment() {
  const [paging, setPaging] = useState(1);

  return (
    <Layout>
      <Enroll.FlexRow>
        {paging === 1 && <BasicBuilidngInfo setPaging={setPaging} />}
        {paging === 2 && <AptPyeongInfo setPaging={setPaging} />}
        <StickyBoard paging={paging} />
      </Enroll.FlexRow>
    </Layout>
  );
}

export default AptEnrollment;
