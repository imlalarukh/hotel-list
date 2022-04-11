import styled from "styled-components";


export const HomeContainer = styled.div`
  min-width:900px;
  max-width: 1024px;
  margin: auto;
  padding-top: 20px;
  justify-content: space-between;
  
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

export const InnerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const TotalCount = styled.div`
  width:68%;
  font-size:14px;
`;

export const SortingLabel = styled.div`
  width: 7%;
  font-size:14px;
  font-weight: bold;
`;

export const Sorting = styled.div`
  width: 24%;
  font-size:14px;
`;

export const Dropdown = styled.select`
  background-color: transparent;
  outline: none;
  border: none;
  width: 100%;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Ctitle%3Edown-arrow%3C%2Ftitle%3E%3Cg%20fill%3D%22%23000000%22%3E%3Cpath%20d%3D%22M10.293%2C3.293%2C6%2C7.586%2C1.707%2C3.293A1%2C1%2C0%2C0%2C0%2C.293%2C4.707l5%2C5a1%2C1%2C0%2C0%2C0%2C1.414%2C0l5-5a1%2C1%2C0%2C1%2C0-1.414-1.414Z%22%20fill%3D%22%23000000%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E');
  background-size: 10px;
  background-position: right 10px top 50%;
  background-repeat: no-repeat;

  border-radius: 4px;
  border: 1px solid #d1d1d1;
  padding-left: 10px;
  font-weight: 500;
  font-size: 16px;

`;