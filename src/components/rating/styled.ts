import styled from "styled-components";

type OnOffProps = {
  rated: boolean;
};

export const RatingContainer = styled.div`
  display: flex;
`;

export const RatingIcon = styled.div<OnOffProps>`
  display: flex;
  color: ${props => (props.rated  ? 'gold' : '#ccc')};
  font-size:18px;
`;


export const RatingIconHalf = styled.div`
  display: flex;
  color: #ccc;
  font-size:18px;
  position: relative;
  overflow: hidden;
  white-space: pre; /* to preserve the spaces from collapsing */

  &:before {
  display: block;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  content: attr(data-content); /* dynamic content for the pseudo element */
  overflow: hidden;
  color: gold;
}
`;

