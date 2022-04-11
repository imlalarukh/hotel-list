import * as React from "react";
import * as Styled from "./styled";
interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = (props: HomeProps) => {
  return (
    <>
      <Styled.HomeContainer>hotels</Styled.HomeContainer>
    </>
  );
};

export default Home;
