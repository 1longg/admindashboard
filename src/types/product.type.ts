export type IInformation = {
  screenSize: string;
  zoom: string;
  screenResolution: string;
  screenTech: string;
  cpuModel: string;
  cpuFrequency: string;
  batteryType: string;
  weight: string;
};

export type IProduct = {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  picture: string;
  discount: number;
  information: IInformation;
};