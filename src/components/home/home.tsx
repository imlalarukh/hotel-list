import * as React from "react";
import * as Styled from "./styled";
import Hotel from "../hotel/hotel";
import PageHeader from "../pageHeader/pageHeader";
import apiResponse from "../../services/HotelData.json";
import { IHotelData } from "../../services/interface/hotelDataInterface";
import { useEffect, useState } from "react";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = (props: HomeProps) => {
  const [hotelsData, setHotelsData] = useState<IHotelData[]>(
    apiResponse.results
  );
  const [sort, setSort] = useState("");

  const sortData = (type: string) => {
    var sorted: IHotelData[] = hotelsData.sort((x, y) => {
      if (
        type == "priceDescending"
          ? x.offer.displayPrice.amount > y.offer.displayPrice.amount
          : x.offer.displayPrice.amount < y.offer.displayPrice.amount
      ) {
        return 1;
      }
      if (
        type == "priceDescending"
          ? y.offer.displayPrice.amount > x.offer.displayPrice.amount
          : y.offer.displayPrice.amount < x.offer.displayPrice.amount
      ) {
        return -1;
      }
      return 0;
    });
    setHotelsData(sorted);
  };

  useEffect(() => {
    if (sort === "") {
      return;
    }

    sortData(sort);
  }, [sort]);

  return (
    <>
      <Styled.HomeContainer>
        <PageHeader>
          <Styled.InnerHeader id="innerHeader">
            <Styled.TotalCount className="hotel-count">
              <b>{hotelsData.length}</b>&nbsp;<i>hotels in </i>
              <b>Sydney</b>
            </Styled.TotalCount>
            <Styled.SortingLabel>Sort by</Styled.SortingLabel>
            <Styled.Sorting>
              <Styled.Dropdown
                onChange={(e) => setSort(e.target.value)}
                defaultValue="priceAscending"
              >
                <option value="priceDescending">Price high-low</option>
                <option value="priceAscending">Price low-high</option>
              </Styled.Dropdown>
            </Styled.Sorting>
          </Styled.InnerHeader>
        </PageHeader>

        {hotelsData &&
          hotelsData.map((hotelData, index) => {
            return <Hotel hotelData={hotelData} key={hotelData.id}></Hotel>;
          })}
      </Styled.HomeContainer>
    </>
  );
};

export default Home;
