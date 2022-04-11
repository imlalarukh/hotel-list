import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width:900px;
  max-width: 1024px;
  margin: auto;

  display: flex;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const QantasLogo = styled.img`
  width: 20%;
`;

export const PageHeader = styled.div`
  display: flex;
  width: 80%;
  padding-top: 10px;
  font-size: 18px;
  justify-content: space-between;
  flex-direction: column;
`;

export const Divider = styled.div`
  height: 4px;
  margin-top: 5px;
  border-radius: 2px;
`;