import styled from "@emotion/styled";

export const MonthlyAddWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

// 한달목표 리스트
export const AddTitleDiv = styled.div``;
export const AddTitle = styled.h2`
  text-align: center;
  color: #475569;
  font-weight: 700;
  font-size: 20px;
  padding: 10px;
  margin: 10px 0;
  padding: 10px;
`;

export const AddTable = styled.table`
  width: 100%;
  /* text-align: center; */
  color: #1e293b;
`;

export const AddTableThead = styled.div`
  font-size: 14px;
  color: #475569;
  background: #e2e8f0;
  padding: 0 3px;
`;

export const AddTableTr = styled.div`
  /* width: 100%; */
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
`;

export const AddListTr = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 0 10px;
`;

export const AddTableThDate = styled.span`
  padding: 12px 3px;
  width: 20%;
  text-align: center;
  letter-spacing: -0.8px;
`;
export const AddTableThTitle = styled.span`
  padding: 12px 3px;
  width: 30%;
  text-align: center;
`;
export const AddTableThNumber = styled.span`
  padding: 12px 3px;
  width: 15%;
  text-align: center;
`;
export const AddTableThBtn = styled.span`
  padding: 12px 3px;
  width: 10%;
`;

export const AddTableThContent = styled.span`
  padding: 5px 3px;
  text-align: center;
  width: 150px;
`;

export const AddTableButton = styled.button`
  padding: 5px 3px;
  width: 7%;
  height: 35px;
  margin: 4px;
  margin-right: 5px;
`;

// 한달목표 입력 form
export const AddFormWrap = styled.div`
  width: 100%;
  padding: 10px;
  margin-top: 20px;

  & > Form {
    display: flex;
    justify-content: space-around;
    & > Button {
      background: red;
    }
  }
`;

export const FormLabel = styled.p`
  color: #1e293b;
  letter-spacing: -1px;
  text-align: center;
  margin-bottom: 5px;
`;
export const SaveBtn = styled.div`
  margin-top: 26px;
`;