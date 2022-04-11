export interface IHotelDataResponse {
    results: IHotelData[];
}

export interface IHotelData {
id: string;
property: IPropertyDetails;
offer: IOffer;
}

export interface IPropertyDetails {
propertyId: string;
title: string;
address: string[];
previewImage: IPreviewImage;
rating: IRating;
}

export interface IPreviewImage {
url: string;
caption: string;
imageType: string;
}

export interface IRating {
ratingValue: number;
ratingType: string;
}

export interface IOffer {
promotion: IPromotion;
name: string;
displayPrice: IAmount;
savings?: IAmount | null;
cancellationOption: ICancellationOption;
}

export interface IPromotion {
title: string;
type: string;
}

export interface IAmount {
amount: number;
currency: string;
}

export interface ICancellationOption {
cancellationType: string;
}
