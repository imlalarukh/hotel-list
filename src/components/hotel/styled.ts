import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export const ImageContainer = styled.div`
  width: 20%;
  position: relative;
  text-align: center;
  color: white;
`;

export const PreviewImage = styled.img``;

export const TextOverImage = styled.div`
  position: absolute;
  top: 6px;
  left: 5px;
  padding: 5px;
  font-size: 11px;
  font-weight: bold;
  background-color: white;
  color: red;
`;

export const DetailContainer = styled.div`
  border-top: 1px solid #d1d1d1;
  width: 60%;
  margin-left:20px;
`;


export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

export const Title = styled.div`
  width: 70%;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const Rating = styled.div`
  width: 30%;
`;

export const Address = styled.div`
  font-size: 12px;
  color: #919191;
`;

export const RoomName = styled.div`
  color: red;
  font-size: 12px;
  cursor: pointer;
  text-decoration: underline;
  padding-top:20px;
`;

export const CancelationText = styled.div`
  color: green;
  font-size: 12px;
  padding-top: 15px;
`;

export const PriceContainer = styled.div`
  width: 20%;
  border-top: 1px solid #d1d1d1;
  padding-top:40px;
`;

export const PerNight = styled.div`
  font-size: 11px;
  display: flex;
  justify-content: end;
`;

export const Price = styled.div`
  display: flex;
  justify-content: end;
`;

export const Currency = styled.div`
`;

export const Amount = styled.div`
  font-size: 24px;
`;

export const Savings = styled.div`
  color: red;
  display: flex;
  justify-content: end;
`;
