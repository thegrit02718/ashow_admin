export interface AptTypes {
  addressCity: string;
  addressCounty: string;
  addressRest: string;
  buildingCoverRatio: string;
  buildingsNum: string;
  image: string;
  updatedDate: string;
  companyHomePage: string;
  constructorCompany: string;
  developerCompany: string;
  discountPer: number;
  doorStructure: string;
  floorAreaRatio: string;
  heating: string;
  houseHoldSum: number;
  id: number;
  inDate: string;
  lowHighFloor: string;
  name: string;
  parkingAll: number;
  parkingForm: string;
  parkingHouseHold: number;
  priceDefault: number;
  priceHigh: number;
  priceLow: number;
  promotionPhone: string;
  promotionSite: string;
  pyengTypes: string;
  sitePhone: string;
  aptKey: number;
}

export interface IData extends AptTypes {
  no: number;
  userId: string;
  uploadDate: string;
  userName: string;
}
