export interface Admin {
  _id: string;
  name: string;
  imagePath: string;
title:string;
 lastName: string;
  email:string;
  mobileNumber:string;

//^([0-9]{9}[x|X|v|V]|[0-9]{12})$

  password: string;
}
