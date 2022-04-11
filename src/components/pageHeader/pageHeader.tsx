import * as React from "react";
import * as Styled from "./styled";
import QantasLogo from "../../assets/images/qantas-logo.png";

interface PageHeaderProps {
  children: any;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (
  props: PageHeaderProps
) => {
  return (
    <Styled.Wrapper>
      <Styled.LogoContainer>
        <Styled.QantasLogo src={QantasLogo}></Styled.QantasLogo>
      </Styled.LogoContainer>
      <Styled.PageHeader>{props.children}</Styled.PageHeader>
      <Styled.Divider></Styled.Divider>
    </Styled.Wrapper>
  );
};

export default PageHeader;
