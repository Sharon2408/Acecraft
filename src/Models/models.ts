export interface Models {
name:string;
routerLink:string;
}

export interface Navitems{
    navitem:string;
    routerLink:string;
    icon:string;
}

export interface footer{
    name:string;
}

export interface icons {
    icon:string;
    link:string;
}

export interface enterpriseimages {
    classname:string;
    text1:string;
    text2:string;
    text1class:string;
    text2class:string
}
export interface Products {
    title: string;
    productCode: string;
    brand: string;
    soldBy: string;
    price: number;
    originalPrice: number;
    offerPercent: number;
    gender: string;
    size: number[];
    description: string[];
    imgSrc: string;
  }
  