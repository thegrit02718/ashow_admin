import { useState } from "react";
import Layout from "../../component/Layout";
import BasicBuilidngInfo from "../../component/buildings/enroll/basicInfo";
import AptPyeongInfo from "../../component/buildings/enroll/pyeong";

function AptEnrollment() {
  const [paging, setPaging] = useState(1);
  return (
    <Layout>
      {paging === 1 && <BasicBuilidngInfo setPaging={setPaging} />}
      {paging === 2 && <AptPyeongInfo setPaging={setPaging} />}
    </Layout>
  );
}

export default AptEnrollment;
