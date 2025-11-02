export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
};

export type Access = {
  __typename?: 'Access';
  addresses?: Maybe<AddressesAccess>;
  canAccessAdmin: Scalars['Boolean']['output'];
  carts?: Maybe<CartsAccess>;
  categories?: Maybe<CategoriesAccess>;
  footer?: Maybe<FooterAccess>;
  form_submissions?: Maybe<Form_SubmissionsAccess>;
  forms?: Maybe<FormsAccess>;
  header?: Maybe<HeaderAccess>;
  information_banner?: Maybe<Information_BannerAccess>;
  media?: Maybe<MediaAccess>;
  orders?: Maybe<OrdersAccess>;
  pages?: Maybe<PagesAccess>;
  payload_locked_documents?: Maybe<Payload_Locked_DocumentsAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  products?: Maybe<ProductsAccess>;
  svg_media?: Maybe<Svg_MediaAccess>;
  transactions?: Maybe<TransactionsAccess>;
  users?: Maybe<UsersAccess>;
  variantOptions?: Maybe<VariantOptionsAccess>;
  variantTypes?: Maybe<VariantTypesAccess>;
  variants?: Maybe<VariantsAccess>;
};

export type Address = {
  __typename?: 'Address';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country: Address_Country;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customer?: Maybe<User>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AddressCustomerArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export enum AddressUpdate_Country_MutationInput {
  At = 'AT',
  Au = 'AU',
  Be = 'BE',
  Bg = 'BG',
  Br = 'BR',
  Ca = 'CA',
  Ch = 'CH',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dk = 'DK',
  Ee = 'EE',
  Es = 'ES',
  Fi = 'FI',
  Fr = 'FR',
  Gb = 'GB',
  Gr = 'GR',
  Hk = 'HK',
  Hu = 'HU',
  Ie = 'IE',
  In = 'IN',
  It = 'IT',
  Jp = 'JP',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Mt = 'MT',
  Mx = 'MX',
  My = 'MY',
  Nl = 'NL',
  No = 'NO',
  Nz = 'NZ',
  Pl = 'PL',
  Pt = 'PT',
  Ro = 'RO',
  Se = 'SE',
  Sg = 'SG',
  Si = 'SI',
  Sk = 'SK',
  Us = 'US'
}

export type Address_AddressLine1_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Address_AddressLine2_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Address_City_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Address_Company_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum Address_Country {
  At = 'AT',
  Au = 'AU',
  Be = 'BE',
  Bg = 'BG',
  Br = 'BR',
  Ca = 'CA',
  Ch = 'CH',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dk = 'DK',
  Ee = 'EE',
  Es = 'ES',
  Fi = 'FI',
  Fr = 'FR',
  Gb = 'GB',
  Gr = 'GR',
  Hk = 'HK',
  Hu = 'HU',
  Ie = 'IE',
  In = 'IN',
  It = 'IT',
  Jp = 'JP',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Mt = 'MT',
  Mx = 'MX',
  My = 'MY',
  Nl = 'NL',
  No = 'NO',
  Nz = 'NZ',
  Pl = 'PL',
  Pt = 'PT',
  Ro = 'RO',
  Se = 'SE',
  Sg = 'SG',
  Si = 'SI',
  Sk = 'SK',
  Us = 'US'
}

export enum Address_Country_Input {
  At = 'AT',
  Au = 'AU',
  Be = 'BE',
  Bg = 'BG',
  Br = 'BR',
  Ca = 'CA',
  Ch = 'CH',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dk = 'DK',
  Ee = 'EE',
  Es = 'ES',
  Fi = 'FI',
  Fr = 'FR',
  Gb = 'GB',
  Gr = 'GR',
  Hk = 'HK',
  Hu = 'HU',
  Ie = 'IE',
  In = 'IN',
  It = 'IT',
  Jp = 'JP',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Mt = 'MT',
  Mx = 'MX',
  My = 'MY',
  Nl = 'NL',
  No = 'NO',
  Nz = 'NZ',
  Pl = 'PL',
  Pt = 'PT',
  Ro = 'RO',
  Se = 'SE',
  Sg = 'SG',
  Si = 'SI',
  Sk = 'SK',
  Us = 'US'
}

export enum Address_Country_MutationInput {
  At = 'AT',
  Au = 'AU',
  Be = 'BE',
  Bg = 'BG',
  Br = 'BR',
  Ca = 'CA',
  Ch = 'CH',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dk = 'DK',
  Ee = 'EE',
  Es = 'ES',
  Fi = 'FI',
  Fr = 'FR',
  Gb = 'GB',
  Gr = 'GR',
  Hk = 'HK',
  Hu = 'HU',
  Ie = 'IE',
  In = 'IN',
  It = 'IT',
  Jp = 'JP',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Mt = 'MT',
  Mx = 'MX',
  My = 'MY',
  Nl = 'NL',
  No = 'NO',
  Nz = 'NZ',
  Pl = 'PL',
  Pt = 'PT',
  Ro = 'RO',
  Se = 'SE',
  Sg = 'SG',
  Si = 'SI',
  Sk = 'SK',
  Us = 'US'
}

export type Address_Country_Operator = {
  all?: InputMaybe<Array<InputMaybe<Address_Country_Input>>>;
  equals?: InputMaybe<Address_Country_Input>;
  in?: InputMaybe<Array<InputMaybe<Address_Country_Input>>>;
  not_equals?: InputMaybe<Address_Country_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Address_Country_Input>>>;
};

export type Address_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Address_Customer_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Address_FirstName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Address_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Address_LastName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Address_Phone_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Address_PostalCode_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Address_State_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Address_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Address_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Address_Where = {
  AND?: InputMaybe<Array<InputMaybe<Address_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Address_Where_Or>>>;
  addressLine1?: InputMaybe<Address_AddressLine1_Operator>;
  addressLine2?: InputMaybe<Address_AddressLine2_Operator>;
  city?: InputMaybe<Address_City_Operator>;
  company?: InputMaybe<Address_Company_Operator>;
  country?: InputMaybe<Address_Country_Operator>;
  createdAt?: InputMaybe<Address_CreatedAt_Operator>;
  customer?: InputMaybe<Address_Customer_Operator>;
  firstName?: InputMaybe<Address_FirstName_Operator>;
  id?: InputMaybe<Address_Id_Operator>;
  lastName?: InputMaybe<Address_LastName_Operator>;
  phone?: InputMaybe<Address_Phone_Operator>;
  postalCode?: InputMaybe<Address_PostalCode_Operator>;
  state?: InputMaybe<Address_State_Operator>;
  title?: InputMaybe<Address_Title_Operator>;
  updatedAt?: InputMaybe<Address_UpdatedAt_Operator>;
};

export type Address_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Address_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Address_Where_Or>>>;
  addressLine1?: InputMaybe<Address_AddressLine1_Operator>;
  addressLine2?: InputMaybe<Address_AddressLine2_Operator>;
  city?: InputMaybe<Address_City_Operator>;
  company?: InputMaybe<Address_Company_Operator>;
  country?: InputMaybe<Address_Country_Operator>;
  createdAt?: InputMaybe<Address_CreatedAt_Operator>;
  customer?: InputMaybe<Address_Customer_Operator>;
  firstName?: InputMaybe<Address_FirstName_Operator>;
  id?: InputMaybe<Address_Id_Operator>;
  lastName?: InputMaybe<Address_LastName_Operator>;
  phone?: InputMaybe<Address_Phone_Operator>;
  postalCode?: InputMaybe<Address_PostalCode_Operator>;
  state?: InputMaybe<Address_State_Operator>;
  title?: InputMaybe<Address_Title_Operator>;
  updatedAt?: InputMaybe<Address_UpdatedAt_Operator>;
};

export type Address_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Address_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Address_Where_Or>>>;
  addressLine1?: InputMaybe<Address_AddressLine1_Operator>;
  addressLine2?: InputMaybe<Address_AddressLine2_Operator>;
  city?: InputMaybe<Address_City_Operator>;
  company?: InputMaybe<Address_Company_Operator>;
  country?: InputMaybe<Address_Country_Operator>;
  createdAt?: InputMaybe<Address_CreatedAt_Operator>;
  customer?: InputMaybe<Address_Customer_Operator>;
  firstName?: InputMaybe<Address_FirstName_Operator>;
  id?: InputMaybe<Address_Id_Operator>;
  lastName?: InputMaybe<Address_LastName_Operator>;
  phone?: InputMaybe<Address_Phone_Operator>;
  postalCode?: InputMaybe<Address_PostalCode_Operator>;
  state?: InputMaybe<Address_State_Operator>;
  title?: InputMaybe<Address_Title_Operator>;
  updatedAt?: InputMaybe<Address_UpdatedAt_Operator>;
};

export type Addresses = {
  __typename?: 'Addresses';
  docs: Array<Address>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type AddressesCreateAccess = {
  __typename?: 'AddressesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AddressesCreateDocAccess = {
  __typename?: 'AddressesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AddressesDeleteAccess = {
  __typename?: 'AddressesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AddressesDeleteDocAccess = {
  __typename?: 'AddressesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AddressesDocAccessFields = {
  __typename?: 'AddressesDocAccessFields';
  addressLine1?: Maybe<AddressesDocAccessFields_AddressLine1>;
  addressLine2?: Maybe<AddressesDocAccessFields_AddressLine2>;
  city?: Maybe<AddressesDocAccessFields_City>;
  company?: Maybe<AddressesDocAccessFields_Company>;
  country?: Maybe<AddressesDocAccessFields_Country>;
  createdAt?: Maybe<AddressesDocAccessFields_CreatedAt>;
  customer?: Maybe<AddressesDocAccessFields_Customer>;
  firstName?: Maybe<AddressesDocAccessFields_FirstName>;
  lastName?: Maybe<AddressesDocAccessFields_LastName>;
  phone?: Maybe<AddressesDocAccessFields_Phone>;
  postalCode?: Maybe<AddressesDocAccessFields_PostalCode>;
  state?: Maybe<AddressesDocAccessFields_State>;
  title?: Maybe<AddressesDocAccessFields_Title>;
  updatedAt?: Maybe<AddressesDocAccessFields_UpdatedAt>;
};

export type AddressesDocAccessFields_AddressLine1 = {
  __typename?: 'AddressesDocAccessFields_addressLine1';
  create?: Maybe<AddressesDocAccessFields_AddressLine1_Create>;
  delete?: Maybe<AddressesDocAccessFields_AddressLine1_Delete>;
  read?: Maybe<AddressesDocAccessFields_AddressLine1_Read>;
  update?: Maybe<AddressesDocAccessFields_AddressLine1_Update>;
};

export type AddressesDocAccessFields_AddressLine1_Create = {
  __typename?: 'AddressesDocAccessFields_addressLine1_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_AddressLine1_Delete = {
  __typename?: 'AddressesDocAccessFields_addressLine1_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_AddressLine1_Read = {
  __typename?: 'AddressesDocAccessFields_addressLine1_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_AddressLine1_Update = {
  __typename?: 'AddressesDocAccessFields_addressLine1_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_AddressLine2 = {
  __typename?: 'AddressesDocAccessFields_addressLine2';
  create?: Maybe<AddressesDocAccessFields_AddressLine2_Create>;
  delete?: Maybe<AddressesDocAccessFields_AddressLine2_Delete>;
  read?: Maybe<AddressesDocAccessFields_AddressLine2_Read>;
  update?: Maybe<AddressesDocAccessFields_AddressLine2_Update>;
};

export type AddressesDocAccessFields_AddressLine2_Create = {
  __typename?: 'AddressesDocAccessFields_addressLine2_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_AddressLine2_Delete = {
  __typename?: 'AddressesDocAccessFields_addressLine2_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_AddressLine2_Read = {
  __typename?: 'AddressesDocAccessFields_addressLine2_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_AddressLine2_Update = {
  __typename?: 'AddressesDocAccessFields_addressLine2_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_City = {
  __typename?: 'AddressesDocAccessFields_city';
  create?: Maybe<AddressesDocAccessFields_City_Create>;
  delete?: Maybe<AddressesDocAccessFields_City_Delete>;
  read?: Maybe<AddressesDocAccessFields_City_Read>;
  update?: Maybe<AddressesDocAccessFields_City_Update>;
};

export type AddressesDocAccessFields_City_Create = {
  __typename?: 'AddressesDocAccessFields_city_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_City_Delete = {
  __typename?: 'AddressesDocAccessFields_city_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_City_Read = {
  __typename?: 'AddressesDocAccessFields_city_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_City_Update = {
  __typename?: 'AddressesDocAccessFields_city_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Company = {
  __typename?: 'AddressesDocAccessFields_company';
  create?: Maybe<AddressesDocAccessFields_Company_Create>;
  delete?: Maybe<AddressesDocAccessFields_Company_Delete>;
  read?: Maybe<AddressesDocAccessFields_Company_Read>;
  update?: Maybe<AddressesDocAccessFields_Company_Update>;
};

export type AddressesDocAccessFields_Company_Create = {
  __typename?: 'AddressesDocAccessFields_company_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Company_Delete = {
  __typename?: 'AddressesDocAccessFields_company_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Company_Read = {
  __typename?: 'AddressesDocAccessFields_company_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Company_Update = {
  __typename?: 'AddressesDocAccessFields_company_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Country = {
  __typename?: 'AddressesDocAccessFields_country';
  create?: Maybe<AddressesDocAccessFields_Country_Create>;
  delete?: Maybe<AddressesDocAccessFields_Country_Delete>;
  read?: Maybe<AddressesDocAccessFields_Country_Read>;
  update?: Maybe<AddressesDocAccessFields_Country_Update>;
};

export type AddressesDocAccessFields_Country_Create = {
  __typename?: 'AddressesDocAccessFields_country_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Country_Delete = {
  __typename?: 'AddressesDocAccessFields_country_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Country_Read = {
  __typename?: 'AddressesDocAccessFields_country_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Country_Update = {
  __typename?: 'AddressesDocAccessFields_country_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_CreatedAt = {
  __typename?: 'AddressesDocAccessFields_createdAt';
  create?: Maybe<AddressesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<AddressesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<AddressesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<AddressesDocAccessFields_CreatedAt_Update>;
};

export type AddressesDocAccessFields_CreatedAt_Create = {
  __typename?: 'AddressesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'AddressesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_CreatedAt_Read = {
  __typename?: 'AddressesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_CreatedAt_Update = {
  __typename?: 'AddressesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Customer = {
  __typename?: 'AddressesDocAccessFields_customer';
  create?: Maybe<AddressesDocAccessFields_Customer_Create>;
  delete?: Maybe<AddressesDocAccessFields_Customer_Delete>;
  read?: Maybe<AddressesDocAccessFields_Customer_Read>;
  update?: Maybe<AddressesDocAccessFields_Customer_Update>;
};

export type AddressesDocAccessFields_Customer_Create = {
  __typename?: 'AddressesDocAccessFields_customer_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Customer_Delete = {
  __typename?: 'AddressesDocAccessFields_customer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Customer_Read = {
  __typename?: 'AddressesDocAccessFields_customer_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Customer_Update = {
  __typename?: 'AddressesDocAccessFields_customer_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_FirstName = {
  __typename?: 'AddressesDocAccessFields_firstName';
  create?: Maybe<AddressesDocAccessFields_FirstName_Create>;
  delete?: Maybe<AddressesDocAccessFields_FirstName_Delete>;
  read?: Maybe<AddressesDocAccessFields_FirstName_Read>;
  update?: Maybe<AddressesDocAccessFields_FirstName_Update>;
};

export type AddressesDocAccessFields_FirstName_Create = {
  __typename?: 'AddressesDocAccessFields_firstName_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_FirstName_Delete = {
  __typename?: 'AddressesDocAccessFields_firstName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_FirstName_Read = {
  __typename?: 'AddressesDocAccessFields_firstName_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_FirstName_Update = {
  __typename?: 'AddressesDocAccessFields_firstName_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_LastName = {
  __typename?: 'AddressesDocAccessFields_lastName';
  create?: Maybe<AddressesDocAccessFields_LastName_Create>;
  delete?: Maybe<AddressesDocAccessFields_LastName_Delete>;
  read?: Maybe<AddressesDocAccessFields_LastName_Read>;
  update?: Maybe<AddressesDocAccessFields_LastName_Update>;
};

export type AddressesDocAccessFields_LastName_Create = {
  __typename?: 'AddressesDocAccessFields_lastName_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_LastName_Delete = {
  __typename?: 'AddressesDocAccessFields_lastName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_LastName_Read = {
  __typename?: 'AddressesDocAccessFields_lastName_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_LastName_Update = {
  __typename?: 'AddressesDocAccessFields_lastName_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Phone = {
  __typename?: 'AddressesDocAccessFields_phone';
  create?: Maybe<AddressesDocAccessFields_Phone_Create>;
  delete?: Maybe<AddressesDocAccessFields_Phone_Delete>;
  read?: Maybe<AddressesDocAccessFields_Phone_Read>;
  update?: Maybe<AddressesDocAccessFields_Phone_Update>;
};

export type AddressesDocAccessFields_Phone_Create = {
  __typename?: 'AddressesDocAccessFields_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Phone_Delete = {
  __typename?: 'AddressesDocAccessFields_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Phone_Read = {
  __typename?: 'AddressesDocAccessFields_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Phone_Update = {
  __typename?: 'AddressesDocAccessFields_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_PostalCode = {
  __typename?: 'AddressesDocAccessFields_postalCode';
  create?: Maybe<AddressesDocAccessFields_PostalCode_Create>;
  delete?: Maybe<AddressesDocAccessFields_PostalCode_Delete>;
  read?: Maybe<AddressesDocAccessFields_PostalCode_Read>;
  update?: Maybe<AddressesDocAccessFields_PostalCode_Update>;
};

export type AddressesDocAccessFields_PostalCode_Create = {
  __typename?: 'AddressesDocAccessFields_postalCode_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_PostalCode_Delete = {
  __typename?: 'AddressesDocAccessFields_postalCode_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_PostalCode_Read = {
  __typename?: 'AddressesDocAccessFields_postalCode_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_PostalCode_Update = {
  __typename?: 'AddressesDocAccessFields_postalCode_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_State = {
  __typename?: 'AddressesDocAccessFields_state';
  create?: Maybe<AddressesDocAccessFields_State_Create>;
  delete?: Maybe<AddressesDocAccessFields_State_Delete>;
  read?: Maybe<AddressesDocAccessFields_State_Read>;
  update?: Maybe<AddressesDocAccessFields_State_Update>;
};

export type AddressesDocAccessFields_State_Create = {
  __typename?: 'AddressesDocAccessFields_state_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_State_Delete = {
  __typename?: 'AddressesDocAccessFields_state_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_State_Read = {
  __typename?: 'AddressesDocAccessFields_state_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_State_Update = {
  __typename?: 'AddressesDocAccessFields_state_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Title = {
  __typename?: 'AddressesDocAccessFields_title';
  create?: Maybe<AddressesDocAccessFields_Title_Create>;
  delete?: Maybe<AddressesDocAccessFields_Title_Delete>;
  read?: Maybe<AddressesDocAccessFields_Title_Read>;
  update?: Maybe<AddressesDocAccessFields_Title_Update>;
};

export type AddressesDocAccessFields_Title_Create = {
  __typename?: 'AddressesDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Title_Delete = {
  __typename?: 'AddressesDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Title_Read = {
  __typename?: 'AddressesDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Title_Update = {
  __typename?: 'AddressesDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_UpdatedAt = {
  __typename?: 'AddressesDocAccessFields_updatedAt';
  create?: Maybe<AddressesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<AddressesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<AddressesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<AddressesDocAccessFields_UpdatedAt_Update>;
};

export type AddressesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'AddressesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'AddressesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'AddressesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'AddressesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields = {
  __typename?: 'AddressesFields';
  addressLine1?: Maybe<AddressesFields_AddressLine1>;
  addressLine2?: Maybe<AddressesFields_AddressLine2>;
  city?: Maybe<AddressesFields_City>;
  company?: Maybe<AddressesFields_Company>;
  country?: Maybe<AddressesFields_Country>;
  createdAt?: Maybe<AddressesFields_CreatedAt>;
  customer?: Maybe<AddressesFields_Customer>;
  firstName?: Maybe<AddressesFields_FirstName>;
  lastName?: Maybe<AddressesFields_LastName>;
  phone?: Maybe<AddressesFields_Phone>;
  postalCode?: Maybe<AddressesFields_PostalCode>;
  state?: Maybe<AddressesFields_State>;
  title?: Maybe<AddressesFields_Title>;
  updatedAt?: Maybe<AddressesFields_UpdatedAt>;
};

export type AddressesFields_AddressLine1 = {
  __typename?: 'AddressesFields_addressLine1';
  create?: Maybe<AddressesFields_AddressLine1_Create>;
  delete?: Maybe<AddressesFields_AddressLine1_Delete>;
  read?: Maybe<AddressesFields_AddressLine1_Read>;
  update?: Maybe<AddressesFields_AddressLine1_Update>;
};

export type AddressesFields_AddressLine1_Create = {
  __typename?: 'AddressesFields_addressLine1_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_AddressLine1_Delete = {
  __typename?: 'AddressesFields_addressLine1_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_AddressLine1_Read = {
  __typename?: 'AddressesFields_addressLine1_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_AddressLine1_Update = {
  __typename?: 'AddressesFields_addressLine1_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_AddressLine2 = {
  __typename?: 'AddressesFields_addressLine2';
  create?: Maybe<AddressesFields_AddressLine2_Create>;
  delete?: Maybe<AddressesFields_AddressLine2_Delete>;
  read?: Maybe<AddressesFields_AddressLine2_Read>;
  update?: Maybe<AddressesFields_AddressLine2_Update>;
};

export type AddressesFields_AddressLine2_Create = {
  __typename?: 'AddressesFields_addressLine2_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_AddressLine2_Delete = {
  __typename?: 'AddressesFields_addressLine2_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_AddressLine2_Read = {
  __typename?: 'AddressesFields_addressLine2_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_AddressLine2_Update = {
  __typename?: 'AddressesFields_addressLine2_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_City = {
  __typename?: 'AddressesFields_city';
  create?: Maybe<AddressesFields_City_Create>;
  delete?: Maybe<AddressesFields_City_Delete>;
  read?: Maybe<AddressesFields_City_Read>;
  update?: Maybe<AddressesFields_City_Update>;
};

export type AddressesFields_City_Create = {
  __typename?: 'AddressesFields_city_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_City_Delete = {
  __typename?: 'AddressesFields_city_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_City_Read = {
  __typename?: 'AddressesFields_city_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_City_Update = {
  __typename?: 'AddressesFields_city_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Company = {
  __typename?: 'AddressesFields_company';
  create?: Maybe<AddressesFields_Company_Create>;
  delete?: Maybe<AddressesFields_Company_Delete>;
  read?: Maybe<AddressesFields_Company_Read>;
  update?: Maybe<AddressesFields_Company_Update>;
};

export type AddressesFields_Company_Create = {
  __typename?: 'AddressesFields_company_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Company_Delete = {
  __typename?: 'AddressesFields_company_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Company_Read = {
  __typename?: 'AddressesFields_company_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Company_Update = {
  __typename?: 'AddressesFields_company_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Country = {
  __typename?: 'AddressesFields_country';
  create?: Maybe<AddressesFields_Country_Create>;
  delete?: Maybe<AddressesFields_Country_Delete>;
  read?: Maybe<AddressesFields_Country_Read>;
  update?: Maybe<AddressesFields_Country_Update>;
};

export type AddressesFields_Country_Create = {
  __typename?: 'AddressesFields_country_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Country_Delete = {
  __typename?: 'AddressesFields_country_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Country_Read = {
  __typename?: 'AddressesFields_country_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Country_Update = {
  __typename?: 'AddressesFields_country_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_CreatedAt = {
  __typename?: 'AddressesFields_createdAt';
  create?: Maybe<AddressesFields_CreatedAt_Create>;
  delete?: Maybe<AddressesFields_CreatedAt_Delete>;
  read?: Maybe<AddressesFields_CreatedAt_Read>;
  update?: Maybe<AddressesFields_CreatedAt_Update>;
};

export type AddressesFields_CreatedAt_Create = {
  __typename?: 'AddressesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_CreatedAt_Delete = {
  __typename?: 'AddressesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_CreatedAt_Read = {
  __typename?: 'AddressesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_CreatedAt_Update = {
  __typename?: 'AddressesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Customer = {
  __typename?: 'AddressesFields_customer';
  create?: Maybe<AddressesFields_Customer_Create>;
  delete?: Maybe<AddressesFields_Customer_Delete>;
  read?: Maybe<AddressesFields_Customer_Read>;
  update?: Maybe<AddressesFields_Customer_Update>;
};

export type AddressesFields_Customer_Create = {
  __typename?: 'AddressesFields_customer_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Customer_Delete = {
  __typename?: 'AddressesFields_customer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Customer_Read = {
  __typename?: 'AddressesFields_customer_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Customer_Update = {
  __typename?: 'AddressesFields_customer_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_FirstName = {
  __typename?: 'AddressesFields_firstName';
  create?: Maybe<AddressesFields_FirstName_Create>;
  delete?: Maybe<AddressesFields_FirstName_Delete>;
  read?: Maybe<AddressesFields_FirstName_Read>;
  update?: Maybe<AddressesFields_FirstName_Update>;
};

export type AddressesFields_FirstName_Create = {
  __typename?: 'AddressesFields_firstName_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_FirstName_Delete = {
  __typename?: 'AddressesFields_firstName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_FirstName_Read = {
  __typename?: 'AddressesFields_firstName_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_FirstName_Update = {
  __typename?: 'AddressesFields_firstName_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_LastName = {
  __typename?: 'AddressesFields_lastName';
  create?: Maybe<AddressesFields_LastName_Create>;
  delete?: Maybe<AddressesFields_LastName_Delete>;
  read?: Maybe<AddressesFields_LastName_Read>;
  update?: Maybe<AddressesFields_LastName_Update>;
};

export type AddressesFields_LastName_Create = {
  __typename?: 'AddressesFields_lastName_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_LastName_Delete = {
  __typename?: 'AddressesFields_lastName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_LastName_Read = {
  __typename?: 'AddressesFields_lastName_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_LastName_Update = {
  __typename?: 'AddressesFields_lastName_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Phone = {
  __typename?: 'AddressesFields_phone';
  create?: Maybe<AddressesFields_Phone_Create>;
  delete?: Maybe<AddressesFields_Phone_Delete>;
  read?: Maybe<AddressesFields_Phone_Read>;
  update?: Maybe<AddressesFields_Phone_Update>;
};

export type AddressesFields_Phone_Create = {
  __typename?: 'AddressesFields_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Phone_Delete = {
  __typename?: 'AddressesFields_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Phone_Read = {
  __typename?: 'AddressesFields_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Phone_Update = {
  __typename?: 'AddressesFields_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_PostalCode = {
  __typename?: 'AddressesFields_postalCode';
  create?: Maybe<AddressesFields_PostalCode_Create>;
  delete?: Maybe<AddressesFields_PostalCode_Delete>;
  read?: Maybe<AddressesFields_PostalCode_Read>;
  update?: Maybe<AddressesFields_PostalCode_Update>;
};

export type AddressesFields_PostalCode_Create = {
  __typename?: 'AddressesFields_postalCode_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_PostalCode_Delete = {
  __typename?: 'AddressesFields_postalCode_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_PostalCode_Read = {
  __typename?: 'AddressesFields_postalCode_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_PostalCode_Update = {
  __typename?: 'AddressesFields_postalCode_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_State = {
  __typename?: 'AddressesFields_state';
  create?: Maybe<AddressesFields_State_Create>;
  delete?: Maybe<AddressesFields_State_Delete>;
  read?: Maybe<AddressesFields_State_Read>;
  update?: Maybe<AddressesFields_State_Update>;
};

export type AddressesFields_State_Create = {
  __typename?: 'AddressesFields_state_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_State_Delete = {
  __typename?: 'AddressesFields_state_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_State_Read = {
  __typename?: 'AddressesFields_state_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_State_Update = {
  __typename?: 'AddressesFields_state_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Title = {
  __typename?: 'AddressesFields_title';
  create?: Maybe<AddressesFields_Title_Create>;
  delete?: Maybe<AddressesFields_Title_Delete>;
  read?: Maybe<AddressesFields_Title_Read>;
  update?: Maybe<AddressesFields_Title_Update>;
};

export type AddressesFields_Title_Create = {
  __typename?: 'AddressesFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Title_Delete = {
  __typename?: 'AddressesFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Title_Read = {
  __typename?: 'AddressesFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Title_Update = {
  __typename?: 'AddressesFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_UpdatedAt = {
  __typename?: 'AddressesFields_updatedAt';
  create?: Maybe<AddressesFields_UpdatedAt_Create>;
  delete?: Maybe<AddressesFields_UpdatedAt_Delete>;
  read?: Maybe<AddressesFields_UpdatedAt_Read>;
  update?: Maybe<AddressesFields_UpdatedAt_Update>;
};

export type AddressesFields_UpdatedAt_Create = {
  __typename?: 'AddressesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_UpdatedAt_Delete = {
  __typename?: 'AddressesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_UpdatedAt_Read = {
  __typename?: 'AddressesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_UpdatedAt_Update = {
  __typename?: 'AddressesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type AddressesReadAccess = {
  __typename?: 'AddressesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AddressesReadDocAccess = {
  __typename?: 'AddressesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AddressesUpdateAccess = {
  __typename?: 'AddressesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AddressesUpdateDocAccess = {
  __typename?: 'AddressesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArchiveBlock = {
  __typename?: 'ArchiveBlock';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  categories?: Maybe<Array<Category>>;
  id?: Maybe<Scalars['String']['output']>;
  introContent?: Maybe<Scalars['JSON']['output']>;
  limit?: Maybe<Scalars['Float']['output']>;
  populateBy?: Maybe<ArchiveBlock_PopulateBy>;
  relationTo?: Maybe<ArchiveBlock_RelationTo>;
  selectedDocs?: Maybe<Array<ArchiveBlock_SelectedDocs_Relationship>>;
};


export type ArchiveBlockCategoriesArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type ArchiveBlockIntroContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


export type ArchiveBlockSelectedDocsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type ArchiveBlock_SelectedDocs = Product;

export enum ArchiveBlock_SelectedDocs_RelationTo {
  Products = 'products'
}

export type ArchiveBlock_SelectedDocs_Relationship = {
  __typename?: 'ArchiveBlock_SelectedDocs_Relationship';
  relationTo?: Maybe<ArchiveBlock_SelectedDocs_RelationTo>;
  value?: Maybe<ArchiveBlock_SelectedDocs>;
};

export enum ArchiveBlock_PopulateBy {
  Collection = 'collection',
  Selection = 'selection'
}

export enum ArchiveBlock_RelationTo {
  Products = 'products'
}

export type BannerBlock = {
  __typename?: 'BannerBlock';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  style?: Maybe<BannerBlock_Style>;
};


export type BannerBlockContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export enum BannerBlock_Style {
  Error = 'error',
  Info = 'info',
  Success = 'success',
  Warning = 'warning'
}

export type CallToActionBlock = {
  __typename?: 'CallToActionBlock';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  links?: Maybe<Array<CallToActionBlock_Links>>;
  richText?: Maybe<Scalars['JSON']['output']>;
};


export type CallToActionBlockRichTextArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type CallToActionBlock_Links = {
  __typename?: 'CallToActionBlock_Links';
  id?: Maybe<Scalars['String']['output']>;
  link?: Maybe<CallToActionBlock_Links_Link>;
};

export type CallToActionBlock_Links_Link = {
  __typename?: 'CallToActionBlock_Links_Link';
  appearance?: Maybe<CallToActionBlock_Links_Link_Appearance>;
  label?: Maybe<Scalars['String']['output']>;
  newTab?: Maybe<Scalars['Boolean']['output']>;
  reference?: Maybe<CallToActionBlock_Links_Link_Reference_Relationship>;
  type?: Maybe<CallToActionBlock_Links_Link_Type>;
  url?: Maybe<Scalars['String']['output']>;
};


export type CallToActionBlock_Links_LinkReferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type CallToActionBlock_Links_Link_Reference = Page;

export enum CallToActionBlock_Links_Link_Reference_RelationTo {
  Pages = 'pages'
}

export type CallToActionBlock_Links_Link_Reference_Relationship = {
  __typename?: 'CallToActionBlock_Links_Link_Reference_Relationship';
  relationTo?: Maybe<CallToActionBlock_Links_Link_Reference_RelationTo>;
  value?: Maybe<CallToActionBlock_Links_Link_Reference>;
};

export enum CallToActionBlock_Links_Link_Appearance {
  Default = 'default',
  Outline = 'outline'
}

export enum CallToActionBlock_Links_Link_Type {
  Custom = 'custom',
  Reference = 'reference'
}

export type CarouselBlock = {
  __typename?: 'CarouselBlock';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  categories?: Maybe<Array<Category>>;
  id?: Maybe<Scalars['String']['output']>;
  limit?: Maybe<Scalars['Float']['output']>;
  populateBy?: Maybe<CarouselBlock_PopulateBy>;
  populatedDocs?: Maybe<Array<CarouselBlock_PopulatedDocs_Relationship>>;
  populatedDocsTotal?: Maybe<Scalars['Float']['output']>;
  relationTo?: Maybe<CarouselBlock_RelationTo>;
  selectedDocs?: Maybe<Array<CarouselBlock_SelectedDocs_Relationship>>;
};


export type CarouselBlockCategoriesArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type CarouselBlockPopulatedDocsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type CarouselBlockSelectedDocsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type CarouselBlock_PopulatedDocs = Product;

export enum CarouselBlock_PopulatedDocs_RelationTo {
  Products = 'products'
}

export type CarouselBlock_PopulatedDocs_Relationship = {
  __typename?: 'CarouselBlock_PopulatedDocs_Relationship';
  relationTo?: Maybe<CarouselBlock_PopulatedDocs_RelationTo>;
  value?: Maybe<CarouselBlock_PopulatedDocs>;
};

export type CarouselBlock_SelectedDocs = Product;

export enum CarouselBlock_SelectedDocs_RelationTo {
  Products = 'products'
}

export type CarouselBlock_SelectedDocs_Relationship = {
  __typename?: 'CarouselBlock_SelectedDocs_Relationship';
  relationTo?: Maybe<CarouselBlock_SelectedDocs_RelationTo>;
  value?: Maybe<CarouselBlock_SelectedDocs>;
};

export enum CarouselBlock_PopulateBy {
  Collection = 'collection',
  Selection = 'selection'
}

export enum CarouselBlock_RelationTo {
  Products = 'products'
}

export type Cart = {
  __typename?: 'Cart';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currency?: Maybe<Cart_Currency>;
  customer?: Maybe<User>;
  id: Scalars['Int']['output'];
  items?: Maybe<Array<Cart_Items>>;
  purchasedAt?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Cart_Status>;
  subtotal?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CartCustomerArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export enum CartUpdate_Currency_MutationInput {
  Usd = 'USD'
}

export enum CartUpdate_Status_MutationInput {
  Abandoned = 'abandoned',
  Active = 'active',
  Purchased = 'purchased'
}

export type Cart_Items = {
  __typename?: 'Cart_Items';
  id?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars['Float']['output']>;
  variant?: Maybe<Variant>;
};


export type Cart_ItemsProductArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type Cart_ItemsVariantArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type Cart_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Cart_Currency {
  Usd = 'USD'
}

export enum Cart_Currency_Input {
  Usd = 'USD'
}

export enum Cart_Currency_MutationInput {
  Usd = 'USD'
}

export type Cart_Currency_Operator = {
  all?: InputMaybe<Array<InputMaybe<Cart_Currency_Input>>>;
  equals?: InputMaybe<Cart_Currency_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Cart_Currency_Input>>>;
  not_equals?: InputMaybe<Cart_Currency_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Cart_Currency_Input>>>;
};

export type Cart_Customer_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Cart_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Cart_Items__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Cart_Items__Product_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Cart_Items__Quantity_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Cart_Items__Variant_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Cart_PurchasedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Cart_Status {
  Abandoned = 'abandoned',
  Active = 'active',
  Purchased = 'purchased'
}

export enum Cart_Status_Input {
  Abandoned = 'abandoned',
  Active = 'active',
  Purchased = 'purchased'
}

export enum Cart_Status_MutationInput {
  Abandoned = 'abandoned',
  Active = 'active',
  Purchased = 'purchased'
}

export type Cart_Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Cart_Status_Input>>>;
  equals?: InputMaybe<Cart_Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Cart_Status_Input>>>;
  not_equals?: InputMaybe<Cart_Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Cart_Status_Input>>>;
};

export type Cart_Subtotal_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Cart_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Cart_Where = {
  AND?: InputMaybe<Array<InputMaybe<Cart_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Cart_Where_Or>>>;
  createdAt?: InputMaybe<Cart_CreatedAt_Operator>;
  currency?: InputMaybe<Cart_Currency_Operator>;
  customer?: InputMaybe<Cart_Customer_Operator>;
  id?: InputMaybe<Cart_Id_Operator>;
  items__id?: InputMaybe<Cart_Items__Id_Operator>;
  items__product?: InputMaybe<Cart_Items__Product_Operator>;
  items__quantity?: InputMaybe<Cart_Items__Quantity_Operator>;
  items__variant?: InputMaybe<Cart_Items__Variant_Operator>;
  purchasedAt?: InputMaybe<Cart_PurchasedAt_Operator>;
  status?: InputMaybe<Cart_Status_Operator>;
  subtotal?: InputMaybe<Cart_Subtotal_Operator>;
  updatedAt?: InputMaybe<Cart_UpdatedAt_Operator>;
};

export type Cart_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Cart_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Cart_Where_Or>>>;
  createdAt?: InputMaybe<Cart_CreatedAt_Operator>;
  currency?: InputMaybe<Cart_Currency_Operator>;
  customer?: InputMaybe<Cart_Customer_Operator>;
  id?: InputMaybe<Cart_Id_Operator>;
  items__id?: InputMaybe<Cart_Items__Id_Operator>;
  items__product?: InputMaybe<Cart_Items__Product_Operator>;
  items__quantity?: InputMaybe<Cart_Items__Quantity_Operator>;
  items__variant?: InputMaybe<Cart_Items__Variant_Operator>;
  purchasedAt?: InputMaybe<Cart_PurchasedAt_Operator>;
  status?: InputMaybe<Cart_Status_Operator>;
  subtotal?: InputMaybe<Cart_Subtotal_Operator>;
  updatedAt?: InputMaybe<Cart_UpdatedAt_Operator>;
};

export type Cart_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Cart_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Cart_Where_Or>>>;
  createdAt?: InputMaybe<Cart_CreatedAt_Operator>;
  currency?: InputMaybe<Cart_Currency_Operator>;
  customer?: InputMaybe<Cart_Customer_Operator>;
  id?: InputMaybe<Cart_Id_Operator>;
  items__id?: InputMaybe<Cart_Items__Id_Operator>;
  items__product?: InputMaybe<Cart_Items__Product_Operator>;
  items__quantity?: InputMaybe<Cart_Items__Quantity_Operator>;
  items__variant?: InputMaybe<Cart_Items__Variant_Operator>;
  purchasedAt?: InputMaybe<Cart_PurchasedAt_Operator>;
  status?: InputMaybe<Cart_Status_Operator>;
  subtotal?: InputMaybe<Cart_Subtotal_Operator>;
  updatedAt?: InputMaybe<Cart_UpdatedAt_Operator>;
};

export type Carts = {
  __typename?: 'Carts';
  docs: Array<Cart>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type CartsCreateAccess = {
  __typename?: 'CartsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartsCreateDocAccess = {
  __typename?: 'CartsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartsDeleteAccess = {
  __typename?: 'CartsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartsDeleteDocAccess = {
  __typename?: 'CartsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartsDocAccessFields = {
  __typename?: 'CartsDocAccessFields';
  createdAt?: Maybe<CartsDocAccessFields_CreatedAt>;
  currency?: Maybe<CartsDocAccessFields_Currency>;
  customer?: Maybe<CartsDocAccessFields_Customer>;
  items?: Maybe<CartsDocAccessFields_Items>;
  purchasedAt?: Maybe<CartsDocAccessFields_PurchasedAt>;
  status?: Maybe<CartsDocAccessFields_Status>;
  subtotal?: Maybe<CartsDocAccessFields_Subtotal>;
  updatedAt?: Maybe<CartsDocAccessFields_UpdatedAt>;
};

export type CartsDocAccessFields_CreatedAt = {
  __typename?: 'CartsDocAccessFields_createdAt';
  create?: Maybe<CartsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<CartsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<CartsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<CartsDocAccessFields_CreatedAt_Update>;
};

export type CartsDocAccessFields_CreatedAt_Create = {
  __typename?: 'CartsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'CartsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_CreatedAt_Read = {
  __typename?: 'CartsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_CreatedAt_Update = {
  __typename?: 'CartsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Currency = {
  __typename?: 'CartsDocAccessFields_currency';
  create?: Maybe<CartsDocAccessFields_Currency_Create>;
  delete?: Maybe<CartsDocAccessFields_Currency_Delete>;
  read?: Maybe<CartsDocAccessFields_Currency_Read>;
  update?: Maybe<CartsDocAccessFields_Currency_Update>;
};

export type CartsDocAccessFields_Currency_Create = {
  __typename?: 'CartsDocAccessFields_currency_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Currency_Delete = {
  __typename?: 'CartsDocAccessFields_currency_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Currency_Read = {
  __typename?: 'CartsDocAccessFields_currency_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Currency_Update = {
  __typename?: 'CartsDocAccessFields_currency_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Customer = {
  __typename?: 'CartsDocAccessFields_customer';
  create?: Maybe<CartsDocAccessFields_Customer_Create>;
  delete?: Maybe<CartsDocAccessFields_Customer_Delete>;
  read?: Maybe<CartsDocAccessFields_Customer_Read>;
  update?: Maybe<CartsDocAccessFields_Customer_Update>;
};

export type CartsDocAccessFields_Customer_Create = {
  __typename?: 'CartsDocAccessFields_customer_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Customer_Delete = {
  __typename?: 'CartsDocAccessFields_customer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Customer_Read = {
  __typename?: 'CartsDocAccessFields_customer_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Customer_Update = {
  __typename?: 'CartsDocAccessFields_customer_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items = {
  __typename?: 'CartsDocAccessFields_items';
  create?: Maybe<CartsDocAccessFields_Items_Create>;
  delete?: Maybe<CartsDocAccessFields_Items_Delete>;
  fields?: Maybe<CartsDocAccessFields_Items_Fields>;
  read?: Maybe<CartsDocAccessFields_Items_Read>;
  update?: Maybe<CartsDocAccessFields_Items_Update>;
};

export type CartsDocAccessFields_Items_Create = {
  __typename?: 'CartsDocAccessFields_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Delete = {
  __typename?: 'CartsDocAccessFields_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Fields = {
  __typename?: 'CartsDocAccessFields_items_Fields';
  id?: Maybe<CartsDocAccessFields_Items_Id>;
  product?: Maybe<CartsDocAccessFields_Items_Product>;
  quantity?: Maybe<CartsDocAccessFields_Items_Quantity>;
  variant?: Maybe<CartsDocAccessFields_Items_Variant>;
};

export type CartsDocAccessFields_Items_Read = {
  __typename?: 'CartsDocAccessFields_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Update = {
  __typename?: 'CartsDocAccessFields_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Id = {
  __typename?: 'CartsDocAccessFields_items_id';
  create?: Maybe<CartsDocAccessFields_Items_Id_Create>;
  delete?: Maybe<CartsDocAccessFields_Items_Id_Delete>;
  read?: Maybe<CartsDocAccessFields_Items_Id_Read>;
  update?: Maybe<CartsDocAccessFields_Items_Id_Update>;
};

export type CartsDocAccessFields_Items_Id_Create = {
  __typename?: 'CartsDocAccessFields_items_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Id_Delete = {
  __typename?: 'CartsDocAccessFields_items_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Id_Read = {
  __typename?: 'CartsDocAccessFields_items_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Id_Update = {
  __typename?: 'CartsDocAccessFields_items_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Product = {
  __typename?: 'CartsDocAccessFields_items_product';
  create?: Maybe<CartsDocAccessFields_Items_Product_Create>;
  delete?: Maybe<CartsDocAccessFields_Items_Product_Delete>;
  read?: Maybe<CartsDocAccessFields_Items_Product_Read>;
  update?: Maybe<CartsDocAccessFields_Items_Product_Update>;
};

export type CartsDocAccessFields_Items_Product_Create = {
  __typename?: 'CartsDocAccessFields_items_product_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Product_Delete = {
  __typename?: 'CartsDocAccessFields_items_product_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Product_Read = {
  __typename?: 'CartsDocAccessFields_items_product_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Product_Update = {
  __typename?: 'CartsDocAccessFields_items_product_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Quantity = {
  __typename?: 'CartsDocAccessFields_items_quantity';
  create?: Maybe<CartsDocAccessFields_Items_Quantity_Create>;
  delete?: Maybe<CartsDocAccessFields_Items_Quantity_Delete>;
  read?: Maybe<CartsDocAccessFields_Items_Quantity_Read>;
  update?: Maybe<CartsDocAccessFields_Items_Quantity_Update>;
};

export type CartsDocAccessFields_Items_Quantity_Create = {
  __typename?: 'CartsDocAccessFields_items_quantity_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Quantity_Delete = {
  __typename?: 'CartsDocAccessFields_items_quantity_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Quantity_Read = {
  __typename?: 'CartsDocAccessFields_items_quantity_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Quantity_Update = {
  __typename?: 'CartsDocAccessFields_items_quantity_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Variant = {
  __typename?: 'CartsDocAccessFields_items_variant';
  create?: Maybe<CartsDocAccessFields_Items_Variant_Create>;
  delete?: Maybe<CartsDocAccessFields_Items_Variant_Delete>;
  read?: Maybe<CartsDocAccessFields_Items_Variant_Read>;
  update?: Maybe<CartsDocAccessFields_Items_Variant_Update>;
};

export type CartsDocAccessFields_Items_Variant_Create = {
  __typename?: 'CartsDocAccessFields_items_variant_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Variant_Delete = {
  __typename?: 'CartsDocAccessFields_items_variant_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Variant_Read = {
  __typename?: 'CartsDocAccessFields_items_variant_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Variant_Update = {
  __typename?: 'CartsDocAccessFields_items_variant_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_PurchasedAt = {
  __typename?: 'CartsDocAccessFields_purchasedAt';
  create?: Maybe<CartsDocAccessFields_PurchasedAt_Create>;
  delete?: Maybe<CartsDocAccessFields_PurchasedAt_Delete>;
  read?: Maybe<CartsDocAccessFields_PurchasedAt_Read>;
  update?: Maybe<CartsDocAccessFields_PurchasedAt_Update>;
};

export type CartsDocAccessFields_PurchasedAt_Create = {
  __typename?: 'CartsDocAccessFields_purchasedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_PurchasedAt_Delete = {
  __typename?: 'CartsDocAccessFields_purchasedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_PurchasedAt_Read = {
  __typename?: 'CartsDocAccessFields_purchasedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_PurchasedAt_Update = {
  __typename?: 'CartsDocAccessFields_purchasedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Status = {
  __typename?: 'CartsDocAccessFields_status';
  create?: Maybe<CartsDocAccessFields_Status_Create>;
  delete?: Maybe<CartsDocAccessFields_Status_Delete>;
  read?: Maybe<CartsDocAccessFields_Status_Read>;
  update?: Maybe<CartsDocAccessFields_Status_Update>;
};

export type CartsDocAccessFields_Status_Create = {
  __typename?: 'CartsDocAccessFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Status_Delete = {
  __typename?: 'CartsDocAccessFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Status_Read = {
  __typename?: 'CartsDocAccessFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Status_Update = {
  __typename?: 'CartsDocAccessFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Subtotal = {
  __typename?: 'CartsDocAccessFields_subtotal';
  create?: Maybe<CartsDocAccessFields_Subtotal_Create>;
  delete?: Maybe<CartsDocAccessFields_Subtotal_Delete>;
  read?: Maybe<CartsDocAccessFields_Subtotal_Read>;
  update?: Maybe<CartsDocAccessFields_Subtotal_Update>;
};

export type CartsDocAccessFields_Subtotal_Create = {
  __typename?: 'CartsDocAccessFields_subtotal_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Subtotal_Delete = {
  __typename?: 'CartsDocAccessFields_subtotal_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Subtotal_Read = {
  __typename?: 'CartsDocAccessFields_subtotal_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Subtotal_Update = {
  __typename?: 'CartsDocAccessFields_subtotal_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_UpdatedAt = {
  __typename?: 'CartsDocAccessFields_updatedAt';
  create?: Maybe<CartsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<CartsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<CartsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<CartsDocAccessFields_UpdatedAt_Update>;
};

export type CartsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'CartsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'CartsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'CartsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'CartsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields = {
  __typename?: 'CartsFields';
  createdAt?: Maybe<CartsFields_CreatedAt>;
  currency?: Maybe<CartsFields_Currency>;
  customer?: Maybe<CartsFields_Customer>;
  items?: Maybe<CartsFields_Items>;
  purchasedAt?: Maybe<CartsFields_PurchasedAt>;
  status?: Maybe<CartsFields_Status>;
  subtotal?: Maybe<CartsFields_Subtotal>;
  updatedAt?: Maybe<CartsFields_UpdatedAt>;
};

export type CartsFields_CreatedAt = {
  __typename?: 'CartsFields_createdAt';
  create?: Maybe<CartsFields_CreatedAt_Create>;
  delete?: Maybe<CartsFields_CreatedAt_Delete>;
  read?: Maybe<CartsFields_CreatedAt_Read>;
  update?: Maybe<CartsFields_CreatedAt_Update>;
};

export type CartsFields_CreatedAt_Create = {
  __typename?: 'CartsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_CreatedAt_Delete = {
  __typename?: 'CartsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_CreatedAt_Read = {
  __typename?: 'CartsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_CreatedAt_Update = {
  __typename?: 'CartsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Currency = {
  __typename?: 'CartsFields_currency';
  create?: Maybe<CartsFields_Currency_Create>;
  delete?: Maybe<CartsFields_Currency_Delete>;
  read?: Maybe<CartsFields_Currency_Read>;
  update?: Maybe<CartsFields_Currency_Update>;
};

export type CartsFields_Currency_Create = {
  __typename?: 'CartsFields_currency_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Currency_Delete = {
  __typename?: 'CartsFields_currency_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Currency_Read = {
  __typename?: 'CartsFields_currency_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Currency_Update = {
  __typename?: 'CartsFields_currency_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Customer = {
  __typename?: 'CartsFields_customer';
  create?: Maybe<CartsFields_Customer_Create>;
  delete?: Maybe<CartsFields_Customer_Delete>;
  read?: Maybe<CartsFields_Customer_Read>;
  update?: Maybe<CartsFields_Customer_Update>;
};

export type CartsFields_Customer_Create = {
  __typename?: 'CartsFields_customer_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Customer_Delete = {
  __typename?: 'CartsFields_customer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Customer_Read = {
  __typename?: 'CartsFields_customer_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Customer_Update = {
  __typename?: 'CartsFields_customer_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items = {
  __typename?: 'CartsFields_items';
  create?: Maybe<CartsFields_Items_Create>;
  delete?: Maybe<CartsFields_Items_Delete>;
  fields?: Maybe<CartsFields_Items_Fields>;
  read?: Maybe<CartsFields_Items_Read>;
  update?: Maybe<CartsFields_Items_Update>;
};

export type CartsFields_Items_Create = {
  __typename?: 'CartsFields_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Delete = {
  __typename?: 'CartsFields_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Fields = {
  __typename?: 'CartsFields_items_Fields';
  id?: Maybe<CartsFields_Items_Id>;
  product?: Maybe<CartsFields_Items_Product>;
  quantity?: Maybe<CartsFields_Items_Quantity>;
  variant?: Maybe<CartsFields_Items_Variant>;
};

export type CartsFields_Items_Read = {
  __typename?: 'CartsFields_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Update = {
  __typename?: 'CartsFields_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Id = {
  __typename?: 'CartsFields_items_id';
  create?: Maybe<CartsFields_Items_Id_Create>;
  delete?: Maybe<CartsFields_Items_Id_Delete>;
  read?: Maybe<CartsFields_Items_Id_Read>;
  update?: Maybe<CartsFields_Items_Id_Update>;
};

export type CartsFields_Items_Id_Create = {
  __typename?: 'CartsFields_items_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Id_Delete = {
  __typename?: 'CartsFields_items_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Id_Read = {
  __typename?: 'CartsFields_items_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Id_Update = {
  __typename?: 'CartsFields_items_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Product = {
  __typename?: 'CartsFields_items_product';
  create?: Maybe<CartsFields_Items_Product_Create>;
  delete?: Maybe<CartsFields_Items_Product_Delete>;
  read?: Maybe<CartsFields_Items_Product_Read>;
  update?: Maybe<CartsFields_Items_Product_Update>;
};

export type CartsFields_Items_Product_Create = {
  __typename?: 'CartsFields_items_product_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Product_Delete = {
  __typename?: 'CartsFields_items_product_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Product_Read = {
  __typename?: 'CartsFields_items_product_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Product_Update = {
  __typename?: 'CartsFields_items_product_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Quantity = {
  __typename?: 'CartsFields_items_quantity';
  create?: Maybe<CartsFields_Items_Quantity_Create>;
  delete?: Maybe<CartsFields_Items_Quantity_Delete>;
  read?: Maybe<CartsFields_Items_Quantity_Read>;
  update?: Maybe<CartsFields_Items_Quantity_Update>;
};

export type CartsFields_Items_Quantity_Create = {
  __typename?: 'CartsFields_items_quantity_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Quantity_Delete = {
  __typename?: 'CartsFields_items_quantity_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Quantity_Read = {
  __typename?: 'CartsFields_items_quantity_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Quantity_Update = {
  __typename?: 'CartsFields_items_quantity_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Variant = {
  __typename?: 'CartsFields_items_variant';
  create?: Maybe<CartsFields_Items_Variant_Create>;
  delete?: Maybe<CartsFields_Items_Variant_Delete>;
  read?: Maybe<CartsFields_Items_Variant_Read>;
  update?: Maybe<CartsFields_Items_Variant_Update>;
};

export type CartsFields_Items_Variant_Create = {
  __typename?: 'CartsFields_items_variant_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Variant_Delete = {
  __typename?: 'CartsFields_items_variant_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Variant_Read = {
  __typename?: 'CartsFields_items_variant_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Variant_Update = {
  __typename?: 'CartsFields_items_variant_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_PurchasedAt = {
  __typename?: 'CartsFields_purchasedAt';
  create?: Maybe<CartsFields_PurchasedAt_Create>;
  delete?: Maybe<CartsFields_PurchasedAt_Delete>;
  read?: Maybe<CartsFields_PurchasedAt_Read>;
  update?: Maybe<CartsFields_PurchasedAt_Update>;
};

export type CartsFields_PurchasedAt_Create = {
  __typename?: 'CartsFields_purchasedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_PurchasedAt_Delete = {
  __typename?: 'CartsFields_purchasedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_PurchasedAt_Read = {
  __typename?: 'CartsFields_purchasedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_PurchasedAt_Update = {
  __typename?: 'CartsFields_purchasedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Status = {
  __typename?: 'CartsFields_status';
  create?: Maybe<CartsFields_Status_Create>;
  delete?: Maybe<CartsFields_Status_Delete>;
  read?: Maybe<CartsFields_Status_Read>;
  update?: Maybe<CartsFields_Status_Update>;
};

export type CartsFields_Status_Create = {
  __typename?: 'CartsFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Status_Delete = {
  __typename?: 'CartsFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Status_Read = {
  __typename?: 'CartsFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Status_Update = {
  __typename?: 'CartsFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Subtotal = {
  __typename?: 'CartsFields_subtotal';
  create?: Maybe<CartsFields_Subtotal_Create>;
  delete?: Maybe<CartsFields_Subtotal_Delete>;
  read?: Maybe<CartsFields_Subtotal_Read>;
  update?: Maybe<CartsFields_Subtotal_Update>;
};

export type CartsFields_Subtotal_Create = {
  __typename?: 'CartsFields_subtotal_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Subtotal_Delete = {
  __typename?: 'CartsFields_subtotal_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Subtotal_Read = {
  __typename?: 'CartsFields_subtotal_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Subtotal_Update = {
  __typename?: 'CartsFields_subtotal_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_UpdatedAt = {
  __typename?: 'CartsFields_updatedAt';
  create?: Maybe<CartsFields_UpdatedAt_Create>;
  delete?: Maybe<CartsFields_UpdatedAt_Delete>;
  read?: Maybe<CartsFields_UpdatedAt_Read>;
  update?: Maybe<CartsFields_UpdatedAt_Update>;
};

export type CartsFields_UpdatedAt_Create = {
  __typename?: 'CartsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_UpdatedAt_Delete = {
  __typename?: 'CartsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_UpdatedAt_Read = {
  __typename?: 'CartsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_UpdatedAt_Update = {
  __typename?: 'CartsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsReadAccess = {
  __typename?: 'CartsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartsReadDocAccess = {
  __typename?: 'CartsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartsUpdateAccess = {
  __typename?: 'CartsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartsUpdateDocAccess = {
  __typename?: 'CartsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Categories = {
  __typename?: 'Categories';
  docs: Array<Category>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type CategoriesCreateAccess = {
  __typename?: 'CategoriesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesCreateDocAccess = {
  __typename?: 'CategoriesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesDeleteAccess = {
  __typename?: 'CategoriesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesDeleteDocAccess = {
  __typename?: 'CategoriesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesDocAccessFields = {
  __typename?: 'CategoriesDocAccessFields';
  createdAt?: Maybe<CategoriesDocAccessFields_CreatedAt>;
  generateSlug?: Maybe<CategoriesDocAccessFields_GenerateSlug>;
  slug?: Maybe<CategoriesDocAccessFields_Slug>;
  title?: Maybe<CategoriesDocAccessFields_Title>;
  updatedAt?: Maybe<CategoriesDocAccessFields_UpdatedAt>;
};

export type CategoriesDocAccessFields_CreatedAt = {
  __typename?: 'CategoriesDocAccessFields_createdAt';
  create?: Maybe<CategoriesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<CategoriesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<CategoriesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<CategoriesDocAccessFields_CreatedAt_Update>;
};

export type CategoriesDocAccessFields_CreatedAt_Create = {
  __typename?: 'CategoriesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'CategoriesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_CreatedAt_Read = {
  __typename?: 'CategoriesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_CreatedAt_Update = {
  __typename?: 'CategoriesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_GenerateSlug = {
  __typename?: 'CategoriesDocAccessFields_generateSlug';
  create?: Maybe<CategoriesDocAccessFields_GenerateSlug_Create>;
  delete?: Maybe<CategoriesDocAccessFields_GenerateSlug_Delete>;
  read?: Maybe<CategoriesDocAccessFields_GenerateSlug_Read>;
  update?: Maybe<CategoriesDocAccessFields_GenerateSlug_Update>;
};

export type CategoriesDocAccessFields_GenerateSlug_Create = {
  __typename?: 'CategoriesDocAccessFields_generateSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_GenerateSlug_Delete = {
  __typename?: 'CategoriesDocAccessFields_generateSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_GenerateSlug_Read = {
  __typename?: 'CategoriesDocAccessFields_generateSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_GenerateSlug_Update = {
  __typename?: 'CategoriesDocAccessFields_generateSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Slug = {
  __typename?: 'CategoriesDocAccessFields_slug';
  create?: Maybe<CategoriesDocAccessFields_Slug_Create>;
  delete?: Maybe<CategoriesDocAccessFields_Slug_Delete>;
  read?: Maybe<CategoriesDocAccessFields_Slug_Read>;
  update?: Maybe<CategoriesDocAccessFields_Slug_Update>;
};

export type CategoriesDocAccessFields_Slug_Create = {
  __typename?: 'CategoriesDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Slug_Delete = {
  __typename?: 'CategoriesDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Slug_Read = {
  __typename?: 'CategoriesDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Slug_Update = {
  __typename?: 'CategoriesDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Title = {
  __typename?: 'CategoriesDocAccessFields_title';
  create?: Maybe<CategoriesDocAccessFields_Title_Create>;
  delete?: Maybe<CategoriesDocAccessFields_Title_Delete>;
  read?: Maybe<CategoriesDocAccessFields_Title_Read>;
  update?: Maybe<CategoriesDocAccessFields_Title_Update>;
};

export type CategoriesDocAccessFields_Title_Create = {
  __typename?: 'CategoriesDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Title_Delete = {
  __typename?: 'CategoriesDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Title_Read = {
  __typename?: 'CategoriesDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Title_Update = {
  __typename?: 'CategoriesDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_UpdatedAt = {
  __typename?: 'CategoriesDocAccessFields_updatedAt';
  create?: Maybe<CategoriesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<CategoriesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<CategoriesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<CategoriesDocAccessFields_UpdatedAt_Update>;
};

export type CategoriesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'CategoriesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'CategoriesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'CategoriesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'CategoriesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields = {
  __typename?: 'CategoriesFields';
  createdAt?: Maybe<CategoriesFields_CreatedAt>;
  generateSlug?: Maybe<CategoriesFields_GenerateSlug>;
  slug?: Maybe<CategoriesFields_Slug>;
  title?: Maybe<CategoriesFields_Title>;
  updatedAt?: Maybe<CategoriesFields_UpdatedAt>;
};

export type CategoriesFields_CreatedAt = {
  __typename?: 'CategoriesFields_createdAt';
  create?: Maybe<CategoriesFields_CreatedAt_Create>;
  delete?: Maybe<CategoriesFields_CreatedAt_Delete>;
  read?: Maybe<CategoriesFields_CreatedAt_Read>;
  update?: Maybe<CategoriesFields_CreatedAt_Update>;
};

export type CategoriesFields_CreatedAt_Create = {
  __typename?: 'CategoriesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_CreatedAt_Delete = {
  __typename?: 'CategoriesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_CreatedAt_Read = {
  __typename?: 'CategoriesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_CreatedAt_Update = {
  __typename?: 'CategoriesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_GenerateSlug = {
  __typename?: 'CategoriesFields_generateSlug';
  create?: Maybe<CategoriesFields_GenerateSlug_Create>;
  delete?: Maybe<CategoriesFields_GenerateSlug_Delete>;
  read?: Maybe<CategoriesFields_GenerateSlug_Read>;
  update?: Maybe<CategoriesFields_GenerateSlug_Update>;
};

export type CategoriesFields_GenerateSlug_Create = {
  __typename?: 'CategoriesFields_generateSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_GenerateSlug_Delete = {
  __typename?: 'CategoriesFields_generateSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_GenerateSlug_Read = {
  __typename?: 'CategoriesFields_generateSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_GenerateSlug_Update = {
  __typename?: 'CategoriesFields_generateSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Slug = {
  __typename?: 'CategoriesFields_slug';
  create?: Maybe<CategoriesFields_Slug_Create>;
  delete?: Maybe<CategoriesFields_Slug_Delete>;
  read?: Maybe<CategoriesFields_Slug_Read>;
  update?: Maybe<CategoriesFields_Slug_Update>;
};

export type CategoriesFields_Slug_Create = {
  __typename?: 'CategoriesFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Slug_Delete = {
  __typename?: 'CategoriesFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Slug_Read = {
  __typename?: 'CategoriesFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Slug_Update = {
  __typename?: 'CategoriesFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Title = {
  __typename?: 'CategoriesFields_title';
  create?: Maybe<CategoriesFields_Title_Create>;
  delete?: Maybe<CategoriesFields_Title_Delete>;
  read?: Maybe<CategoriesFields_Title_Read>;
  update?: Maybe<CategoriesFields_Title_Update>;
};

export type CategoriesFields_Title_Create = {
  __typename?: 'CategoriesFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Title_Delete = {
  __typename?: 'CategoriesFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Title_Read = {
  __typename?: 'CategoriesFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Title_Update = {
  __typename?: 'CategoriesFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_UpdatedAt = {
  __typename?: 'CategoriesFields_updatedAt';
  create?: Maybe<CategoriesFields_UpdatedAt_Create>;
  delete?: Maybe<CategoriesFields_UpdatedAt_Delete>;
  read?: Maybe<CategoriesFields_UpdatedAt_Read>;
  update?: Maybe<CategoriesFields_UpdatedAt_Update>;
};

export type CategoriesFields_UpdatedAt_Create = {
  __typename?: 'CategoriesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_UpdatedAt_Delete = {
  __typename?: 'CategoriesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_UpdatedAt_Read = {
  __typename?: 'CategoriesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_UpdatedAt_Update = {
  __typename?: 'CategoriesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesReadAccess = {
  __typename?: 'CategoriesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesReadDocAccess = {
  __typename?: 'CategoriesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesUpdateAccess = {
  __typename?: 'CategoriesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesUpdateDocAccess = {
  __typename?: 'CategoriesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  generateSlug?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Category_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Category_GenerateSlug_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Category_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Category_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Category_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Category_Where = {
  AND?: InputMaybe<Array<InputMaybe<Category_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Category_Where_Or>>>;
  createdAt?: InputMaybe<Category_CreatedAt_Operator>;
  generateSlug?: InputMaybe<Category_GenerateSlug_Operator>;
  id?: InputMaybe<Category_Id_Operator>;
  slug?: InputMaybe<Category_Slug_Operator>;
  title?: InputMaybe<Category_Title_Operator>;
  updatedAt?: InputMaybe<Category_UpdatedAt_Operator>;
};

export type Category_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Category_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Category_Where_Or>>>;
  createdAt?: InputMaybe<Category_CreatedAt_Operator>;
  generateSlug?: InputMaybe<Category_GenerateSlug_Operator>;
  id?: InputMaybe<Category_Id_Operator>;
  slug?: InputMaybe<Category_Slug_Operator>;
  title?: InputMaybe<Category_Title_Operator>;
  updatedAt?: InputMaybe<Category_UpdatedAt_Operator>;
};

export type Category_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Category_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Category_Where_Or>>>;
  createdAt?: InputMaybe<Category_CreatedAt_Operator>;
  generateSlug?: InputMaybe<Category_GenerateSlug_Operator>;
  id?: InputMaybe<Category_Id_Operator>;
  slug?: InputMaybe<Category_Slug_Operator>;
  title?: InputMaybe<Category_Title_Operator>;
  updatedAt?: InputMaybe<Category_UpdatedAt_Operator>;
};

export type Checkbox = {
  __typename?: 'Checkbox';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  defaultValue?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ContentBlock = {
  __typename?: 'ContentBlock';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  columns?: Maybe<Array<ContentBlock_Columns>>;
  id?: Maybe<Scalars['String']['output']>;
};

export type ContentBlock_Columns = {
  __typename?: 'ContentBlock_Columns';
  enableLink?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  link?: Maybe<ContentBlock_Columns_Link>;
  richText?: Maybe<Scalars['JSON']['output']>;
  size?: Maybe<ContentBlock_Columns_Size>;
};


export type ContentBlock_ColumnsRichTextArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type ContentBlock_Columns_Link = {
  __typename?: 'ContentBlock_Columns_Link';
  appearance?: Maybe<ContentBlock_Columns_Link_Appearance>;
  label?: Maybe<Scalars['String']['output']>;
  newTab?: Maybe<Scalars['Boolean']['output']>;
  reference?: Maybe<ContentBlock_Columns_Link_Reference_Relationship>;
  type?: Maybe<ContentBlock_Columns_Link_Type>;
  url?: Maybe<Scalars['String']['output']>;
};


export type ContentBlock_Columns_LinkReferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type ContentBlock_Columns_Link_Reference = Page;

export enum ContentBlock_Columns_Link_Reference_RelationTo {
  Pages = 'pages'
}

export type ContentBlock_Columns_Link_Reference_Relationship = {
  __typename?: 'ContentBlock_Columns_Link_Reference_Relationship';
  relationTo?: Maybe<ContentBlock_Columns_Link_Reference_RelationTo>;
  value?: Maybe<ContentBlock_Columns_Link_Reference>;
};

export enum ContentBlock_Columns_Link_Appearance {
  Default = 'default',
  Outline = 'outline'
}

export enum ContentBlock_Columns_Link_Type {
  Custom = 'custom',
  Reference = 'reference'
}

export enum ContentBlock_Columns_Size {
  Full = 'full',
  Half = 'half',
  OneThird = 'oneThird',
  TwoThirds = 'twoThirds'
}

export type Country = {
  __typename?: 'Country';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Email = {
  __typename?: 'Email';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export enum FallbackLocaleInputType {
  De = 'de',
  En = 'en',
  None = 'none'
}

export type Footer = {
  __typename?: 'Footer';
  contactLink?: Maybe<Footer_ContactLink>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  navItems?: Maybe<Array<Footer_NavItems>>;
  phone?: Maybe<Scalars['String']['output']>;
  slogan?: Maybe<Scalars['String']['output']>;
  socialLink?: Maybe<Footer_SocialLink>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FooterDocAccessFields = {
  __typename?: 'FooterDocAccessFields';
  contactLink?: Maybe<FooterDocAccessFields_ContactLink>;
  createdAt?: Maybe<FooterDocAccessFields_CreatedAt>;
  navItems?: Maybe<FooterDocAccessFields_NavItems>;
  phone?: Maybe<FooterDocAccessFields_Phone>;
  slogan?: Maybe<FooterDocAccessFields_Slogan>;
  socialLink?: Maybe<FooterDocAccessFields_SocialLink>;
  updatedAt?: Maybe<FooterDocAccessFields_UpdatedAt>;
};

export type FooterDocAccessFields_ContactLink = {
  __typename?: 'FooterDocAccessFields_contactLink';
  create?: Maybe<FooterDocAccessFields_ContactLink_Create>;
  delete?: Maybe<FooterDocAccessFields_ContactLink_Delete>;
  fields?: Maybe<FooterDocAccessFields_ContactLink_Fields>;
  read?: Maybe<FooterDocAccessFields_ContactLink_Read>;
  update?: Maybe<FooterDocAccessFields_ContactLink_Update>;
};

export type FooterDocAccessFields_ContactLink_Create = {
  __typename?: 'FooterDocAccessFields_contactLink_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Delete = {
  __typename?: 'FooterDocAccessFields_contactLink_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Fields = {
  __typename?: 'FooterDocAccessFields_contactLink_Fields';
  link?: Maybe<FooterDocAccessFields_ContactLink_Link>;
};

export type FooterDocAccessFields_ContactLink_Read = {
  __typename?: 'FooterDocAccessFields_contactLink_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Update = {
  __typename?: 'FooterDocAccessFields_contactLink_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link = {
  __typename?: 'FooterDocAccessFields_contactLink_link';
  create?: Maybe<FooterDocAccessFields_ContactLink_Link_Create>;
  delete?: Maybe<FooterDocAccessFields_ContactLink_Link_Delete>;
  fields?: Maybe<FooterDocAccessFields_ContactLink_Link_Fields>;
  read?: Maybe<FooterDocAccessFields_ContactLink_Link_Read>;
  update?: Maybe<FooterDocAccessFields_ContactLink_Link_Update>;
};

export type FooterDocAccessFields_ContactLink_Link_Create = {
  __typename?: 'FooterDocAccessFields_contactLink_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Delete = {
  __typename?: 'FooterDocAccessFields_contactLink_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Fields = {
  __typename?: 'FooterDocAccessFields_contactLink_link_Fields';
  label?: Maybe<FooterDocAccessFields_ContactLink_Link_Label>;
  newTab?: Maybe<FooterDocAccessFields_ContactLink_Link_NewTab>;
  reference?: Maybe<FooterDocAccessFields_ContactLink_Link_Reference>;
  type?: Maybe<FooterDocAccessFields_ContactLink_Link_Type>;
  url?: Maybe<FooterDocAccessFields_ContactLink_Link_Url>;
};

export type FooterDocAccessFields_ContactLink_Link_Read = {
  __typename?: 'FooterDocAccessFields_contactLink_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Update = {
  __typename?: 'FooterDocAccessFields_contactLink_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Label = {
  __typename?: 'FooterDocAccessFields_contactLink_link_label';
  create?: Maybe<FooterDocAccessFields_ContactLink_Link_Label_Create>;
  delete?: Maybe<FooterDocAccessFields_ContactLink_Link_Label_Delete>;
  read?: Maybe<FooterDocAccessFields_ContactLink_Link_Label_Read>;
  update?: Maybe<FooterDocAccessFields_ContactLink_Link_Label_Update>;
};

export type FooterDocAccessFields_ContactLink_Link_Label_Create = {
  __typename?: 'FooterDocAccessFields_contactLink_link_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Label_Delete = {
  __typename?: 'FooterDocAccessFields_contactLink_link_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Label_Read = {
  __typename?: 'FooterDocAccessFields_contactLink_link_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Label_Update = {
  __typename?: 'FooterDocAccessFields_contactLink_link_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_NewTab = {
  __typename?: 'FooterDocAccessFields_contactLink_link_newTab';
  create?: Maybe<FooterDocAccessFields_ContactLink_Link_NewTab_Create>;
  delete?: Maybe<FooterDocAccessFields_ContactLink_Link_NewTab_Delete>;
  read?: Maybe<FooterDocAccessFields_ContactLink_Link_NewTab_Read>;
  update?: Maybe<FooterDocAccessFields_ContactLink_Link_NewTab_Update>;
};

export type FooterDocAccessFields_ContactLink_Link_NewTab_Create = {
  __typename?: 'FooterDocAccessFields_contactLink_link_newTab_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_NewTab_Delete = {
  __typename?: 'FooterDocAccessFields_contactLink_link_newTab_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_NewTab_Read = {
  __typename?: 'FooterDocAccessFields_contactLink_link_newTab_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_NewTab_Update = {
  __typename?: 'FooterDocAccessFields_contactLink_link_newTab_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Reference = {
  __typename?: 'FooterDocAccessFields_contactLink_link_reference';
  create?: Maybe<FooterDocAccessFields_ContactLink_Link_Reference_Create>;
  delete?: Maybe<FooterDocAccessFields_ContactLink_Link_Reference_Delete>;
  read?: Maybe<FooterDocAccessFields_ContactLink_Link_Reference_Read>;
  update?: Maybe<FooterDocAccessFields_ContactLink_Link_Reference_Update>;
};

export type FooterDocAccessFields_ContactLink_Link_Reference_Create = {
  __typename?: 'FooterDocAccessFields_contactLink_link_reference_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Reference_Delete = {
  __typename?: 'FooterDocAccessFields_contactLink_link_reference_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Reference_Read = {
  __typename?: 'FooterDocAccessFields_contactLink_link_reference_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Reference_Update = {
  __typename?: 'FooterDocAccessFields_contactLink_link_reference_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Type = {
  __typename?: 'FooterDocAccessFields_contactLink_link_type';
  create?: Maybe<FooterDocAccessFields_ContactLink_Link_Type_Create>;
  delete?: Maybe<FooterDocAccessFields_ContactLink_Link_Type_Delete>;
  read?: Maybe<FooterDocAccessFields_ContactLink_Link_Type_Read>;
  update?: Maybe<FooterDocAccessFields_ContactLink_Link_Type_Update>;
};

export type FooterDocAccessFields_ContactLink_Link_Type_Create = {
  __typename?: 'FooterDocAccessFields_contactLink_link_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Type_Delete = {
  __typename?: 'FooterDocAccessFields_contactLink_link_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Type_Read = {
  __typename?: 'FooterDocAccessFields_contactLink_link_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Type_Update = {
  __typename?: 'FooterDocAccessFields_contactLink_link_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Url = {
  __typename?: 'FooterDocAccessFields_contactLink_link_url';
  create?: Maybe<FooterDocAccessFields_ContactLink_Link_Url_Create>;
  delete?: Maybe<FooterDocAccessFields_ContactLink_Link_Url_Delete>;
  read?: Maybe<FooterDocAccessFields_ContactLink_Link_Url_Read>;
  update?: Maybe<FooterDocAccessFields_ContactLink_Link_Url_Update>;
};

export type FooterDocAccessFields_ContactLink_Link_Url_Create = {
  __typename?: 'FooterDocAccessFields_contactLink_link_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Url_Delete = {
  __typename?: 'FooterDocAccessFields_contactLink_link_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Url_Read = {
  __typename?: 'FooterDocAccessFields_contactLink_link_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Url_Update = {
  __typename?: 'FooterDocAccessFields_contactLink_link_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CreatedAt = {
  __typename?: 'FooterDocAccessFields_createdAt';
  create?: Maybe<FooterDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<FooterDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<FooterDocAccessFields_CreatedAt_Read>;
  update?: Maybe<FooterDocAccessFields_CreatedAt_Update>;
};

export type FooterDocAccessFields_CreatedAt_Create = {
  __typename?: 'FooterDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CreatedAt_Delete = {
  __typename?: 'FooterDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CreatedAt_Read = {
  __typename?: 'FooterDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CreatedAt_Update = {
  __typename?: 'FooterDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems = {
  __typename?: 'FooterDocAccessFields_navItems';
  create?: Maybe<FooterDocAccessFields_NavItems_Create>;
  delete?: Maybe<FooterDocAccessFields_NavItems_Delete>;
  fields?: Maybe<FooterDocAccessFields_NavItems_Fields>;
  read?: Maybe<FooterDocAccessFields_NavItems_Read>;
  update?: Maybe<FooterDocAccessFields_NavItems_Update>;
};

export type FooterDocAccessFields_NavItems_Create = {
  __typename?: 'FooterDocAccessFields_navItems_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Delete = {
  __typename?: 'FooterDocAccessFields_navItems_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Fields = {
  __typename?: 'FooterDocAccessFields_navItems_Fields';
  id?: Maybe<FooterDocAccessFields_NavItems_Id>;
  link?: Maybe<FooterDocAccessFields_NavItems_Link>;
};

export type FooterDocAccessFields_NavItems_Read = {
  __typename?: 'FooterDocAccessFields_navItems_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Update = {
  __typename?: 'FooterDocAccessFields_navItems_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Id = {
  __typename?: 'FooterDocAccessFields_navItems_id';
  create?: Maybe<FooterDocAccessFields_NavItems_Id_Create>;
  delete?: Maybe<FooterDocAccessFields_NavItems_Id_Delete>;
  read?: Maybe<FooterDocAccessFields_NavItems_Id_Read>;
  update?: Maybe<FooterDocAccessFields_NavItems_Id_Update>;
};

export type FooterDocAccessFields_NavItems_Id_Create = {
  __typename?: 'FooterDocAccessFields_navItems_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Id_Delete = {
  __typename?: 'FooterDocAccessFields_navItems_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Id_Read = {
  __typename?: 'FooterDocAccessFields_navItems_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Id_Update = {
  __typename?: 'FooterDocAccessFields_navItems_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link = {
  __typename?: 'FooterDocAccessFields_navItems_link';
  create?: Maybe<FooterDocAccessFields_NavItems_Link_Create>;
  delete?: Maybe<FooterDocAccessFields_NavItems_Link_Delete>;
  fields?: Maybe<FooterDocAccessFields_NavItems_Link_Fields>;
  read?: Maybe<FooterDocAccessFields_NavItems_Link_Read>;
  update?: Maybe<FooterDocAccessFields_NavItems_Link_Update>;
};

export type FooterDocAccessFields_NavItems_Link_Create = {
  __typename?: 'FooterDocAccessFields_navItems_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Delete = {
  __typename?: 'FooterDocAccessFields_navItems_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Fields = {
  __typename?: 'FooterDocAccessFields_navItems_link_Fields';
  label?: Maybe<FooterDocAccessFields_NavItems_Link_Label>;
  newTab?: Maybe<FooterDocAccessFields_NavItems_Link_NewTab>;
  reference?: Maybe<FooterDocAccessFields_NavItems_Link_Reference>;
  type?: Maybe<FooterDocAccessFields_NavItems_Link_Type>;
  url?: Maybe<FooterDocAccessFields_NavItems_Link_Url>;
};

export type FooterDocAccessFields_NavItems_Link_Read = {
  __typename?: 'FooterDocAccessFields_navItems_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Update = {
  __typename?: 'FooterDocAccessFields_navItems_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Label = {
  __typename?: 'FooterDocAccessFields_navItems_link_label';
  create?: Maybe<FooterDocAccessFields_NavItems_Link_Label_Create>;
  delete?: Maybe<FooterDocAccessFields_NavItems_Link_Label_Delete>;
  read?: Maybe<FooterDocAccessFields_NavItems_Link_Label_Read>;
  update?: Maybe<FooterDocAccessFields_NavItems_Link_Label_Update>;
};

export type FooterDocAccessFields_NavItems_Link_Label_Create = {
  __typename?: 'FooterDocAccessFields_navItems_link_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Label_Delete = {
  __typename?: 'FooterDocAccessFields_navItems_link_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Label_Read = {
  __typename?: 'FooterDocAccessFields_navItems_link_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Label_Update = {
  __typename?: 'FooterDocAccessFields_navItems_link_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_NewTab = {
  __typename?: 'FooterDocAccessFields_navItems_link_newTab';
  create?: Maybe<FooterDocAccessFields_NavItems_Link_NewTab_Create>;
  delete?: Maybe<FooterDocAccessFields_NavItems_Link_NewTab_Delete>;
  read?: Maybe<FooterDocAccessFields_NavItems_Link_NewTab_Read>;
  update?: Maybe<FooterDocAccessFields_NavItems_Link_NewTab_Update>;
};

export type FooterDocAccessFields_NavItems_Link_NewTab_Create = {
  __typename?: 'FooterDocAccessFields_navItems_link_newTab_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_NewTab_Delete = {
  __typename?: 'FooterDocAccessFields_navItems_link_newTab_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_NewTab_Read = {
  __typename?: 'FooterDocAccessFields_navItems_link_newTab_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_NewTab_Update = {
  __typename?: 'FooterDocAccessFields_navItems_link_newTab_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Reference = {
  __typename?: 'FooterDocAccessFields_navItems_link_reference';
  create?: Maybe<FooterDocAccessFields_NavItems_Link_Reference_Create>;
  delete?: Maybe<FooterDocAccessFields_NavItems_Link_Reference_Delete>;
  read?: Maybe<FooterDocAccessFields_NavItems_Link_Reference_Read>;
  update?: Maybe<FooterDocAccessFields_NavItems_Link_Reference_Update>;
};

export type FooterDocAccessFields_NavItems_Link_Reference_Create = {
  __typename?: 'FooterDocAccessFields_navItems_link_reference_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Reference_Delete = {
  __typename?: 'FooterDocAccessFields_navItems_link_reference_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Reference_Read = {
  __typename?: 'FooterDocAccessFields_navItems_link_reference_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Reference_Update = {
  __typename?: 'FooterDocAccessFields_navItems_link_reference_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Type = {
  __typename?: 'FooterDocAccessFields_navItems_link_type';
  create?: Maybe<FooterDocAccessFields_NavItems_Link_Type_Create>;
  delete?: Maybe<FooterDocAccessFields_NavItems_Link_Type_Delete>;
  read?: Maybe<FooterDocAccessFields_NavItems_Link_Type_Read>;
  update?: Maybe<FooterDocAccessFields_NavItems_Link_Type_Update>;
};

export type FooterDocAccessFields_NavItems_Link_Type_Create = {
  __typename?: 'FooterDocAccessFields_navItems_link_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Type_Delete = {
  __typename?: 'FooterDocAccessFields_navItems_link_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Type_Read = {
  __typename?: 'FooterDocAccessFields_navItems_link_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Type_Update = {
  __typename?: 'FooterDocAccessFields_navItems_link_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Url = {
  __typename?: 'FooterDocAccessFields_navItems_link_url';
  create?: Maybe<FooterDocAccessFields_NavItems_Link_Url_Create>;
  delete?: Maybe<FooterDocAccessFields_NavItems_Link_Url_Delete>;
  read?: Maybe<FooterDocAccessFields_NavItems_Link_Url_Read>;
  update?: Maybe<FooterDocAccessFields_NavItems_Link_Url_Update>;
};

export type FooterDocAccessFields_NavItems_Link_Url_Create = {
  __typename?: 'FooterDocAccessFields_navItems_link_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Url_Delete = {
  __typename?: 'FooterDocAccessFields_navItems_link_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Url_Read = {
  __typename?: 'FooterDocAccessFields_navItems_link_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Url_Update = {
  __typename?: 'FooterDocAccessFields_navItems_link_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Phone = {
  __typename?: 'FooterDocAccessFields_phone';
  create?: Maybe<FooterDocAccessFields_Phone_Create>;
  delete?: Maybe<FooterDocAccessFields_Phone_Delete>;
  read?: Maybe<FooterDocAccessFields_Phone_Read>;
  update?: Maybe<FooterDocAccessFields_Phone_Update>;
};

export type FooterDocAccessFields_Phone_Create = {
  __typename?: 'FooterDocAccessFields_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Phone_Delete = {
  __typename?: 'FooterDocAccessFields_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Phone_Read = {
  __typename?: 'FooterDocAccessFields_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Phone_Update = {
  __typename?: 'FooterDocAccessFields_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Slogan = {
  __typename?: 'FooterDocAccessFields_slogan';
  create?: Maybe<FooterDocAccessFields_Slogan_Create>;
  delete?: Maybe<FooterDocAccessFields_Slogan_Delete>;
  read?: Maybe<FooterDocAccessFields_Slogan_Read>;
  update?: Maybe<FooterDocAccessFields_Slogan_Update>;
};

export type FooterDocAccessFields_Slogan_Create = {
  __typename?: 'FooterDocAccessFields_slogan_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Slogan_Delete = {
  __typename?: 'FooterDocAccessFields_slogan_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Slogan_Read = {
  __typename?: 'FooterDocAccessFields_slogan_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Slogan_Update = {
  __typename?: 'FooterDocAccessFields_slogan_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink = {
  __typename?: 'FooterDocAccessFields_socialLink';
  create?: Maybe<FooterDocAccessFields_SocialLink_Create>;
  delete?: Maybe<FooterDocAccessFields_SocialLink_Delete>;
  fields?: Maybe<FooterDocAccessFields_SocialLink_Fields>;
  read?: Maybe<FooterDocAccessFields_SocialLink_Read>;
  update?: Maybe<FooterDocAccessFields_SocialLink_Update>;
};

export type FooterDocAccessFields_SocialLink_Create = {
  __typename?: 'FooterDocAccessFields_socialLink_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Delete = {
  __typename?: 'FooterDocAccessFields_socialLink_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Fields = {
  __typename?: 'FooterDocAccessFields_socialLink_Fields';
  link?: Maybe<FooterDocAccessFields_SocialLink_Link>;
};

export type FooterDocAccessFields_SocialLink_Read = {
  __typename?: 'FooterDocAccessFields_socialLink_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Update = {
  __typename?: 'FooterDocAccessFields_socialLink_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link = {
  __typename?: 'FooterDocAccessFields_socialLink_link';
  create?: Maybe<FooterDocAccessFields_SocialLink_Link_Create>;
  delete?: Maybe<FooterDocAccessFields_SocialLink_Link_Delete>;
  fields?: Maybe<FooterDocAccessFields_SocialLink_Link_Fields>;
  read?: Maybe<FooterDocAccessFields_SocialLink_Link_Read>;
  update?: Maybe<FooterDocAccessFields_SocialLink_Link_Update>;
};

export type FooterDocAccessFields_SocialLink_Link_Create = {
  __typename?: 'FooterDocAccessFields_socialLink_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Delete = {
  __typename?: 'FooterDocAccessFields_socialLink_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Fields = {
  __typename?: 'FooterDocAccessFields_socialLink_link_Fields';
  label?: Maybe<FooterDocAccessFields_SocialLink_Link_Label>;
  newTab?: Maybe<FooterDocAccessFields_SocialLink_Link_NewTab>;
  reference?: Maybe<FooterDocAccessFields_SocialLink_Link_Reference>;
  type?: Maybe<FooterDocAccessFields_SocialLink_Link_Type>;
  url?: Maybe<FooterDocAccessFields_SocialLink_Link_Url>;
};

export type FooterDocAccessFields_SocialLink_Link_Read = {
  __typename?: 'FooterDocAccessFields_socialLink_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Update = {
  __typename?: 'FooterDocAccessFields_socialLink_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Label = {
  __typename?: 'FooterDocAccessFields_socialLink_link_label';
  create?: Maybe<FooterDocAccessFields_SocialLink_Link_Label_Create>;
  delete?: Maybe<FooterDocAccessFields_SocialLink_Link_Label_Delete>;
  read?: Maybe<FooterDocAccessFields_SocialLink_Link_Label_Read>;
  update?: Maybe<FooterDocAccessFields_SocialLink_Link_Label_Update>;
};

export type FooterDocAccessFields_SocialLink_Link_Label_Create = {
  __typename?: 'FooterDocAccessFields_socialLink_link_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Label_Delete = {
  __typename?: 'FooterDocAccessFields_socialLink_link_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Label_Read = {
  __typename?: 'FooterDocAccessFields_socialLink_link_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Label_Update = {
  __typename?: 'FooterDocAccessFields_socialLink_link_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_NewTab = {
  __typename?: 'FooterDocAccessFields_socialLink_link_newTab';
  create?: Maybe<FooterDocAccessFields_SocialLink_Link_NewTab_Create>;
  delete?: Maybe<FooterDocAccessFields_SocialLink_Link_NewTab_Delete>;
  read?: Maybe<FooterDocAccessFields_SocialLink_Link_NewTab_Read>;
  update?: Maybe<FooterDocAccessFields_SocialLink_Link_NewTab_Update>;
};

export type FooterDocAccessFields_SocialLink_Link_NewTab_Create = {
  __typename?: 'FooterDocAccessFields_socialLink_link_newTab_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_NewTab_Delete = {
  __typename?: 'FooterDocAccessFields_socialLink_link_newTab_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_NewTab_Read = {
  __typename?: 'FooterDocAccessFields_socialLink_link_newTab_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_NewTab_Update = {
  __typename?: 'FooterDocAccessFields_socialLink_link_newTab_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Reference = {
  __typename?: 'FooterDocAccessFields_socialLink_link_reference';
  create?: Maybe<FooterDocAccessFields_SocialLink_Link_Reference_Create>;
  delete?: Maybe<FooterDocAccessFields_SocialLink_Link_Reference_Delete>;
  read?: Maybe<FooterDocAccessFields_SocialLink_Link_Reference_Read>;
  update?: Maybe<FooterDocAccessFields_SocialLink_Link_Reference_Update>;
};

export type FooterDocAccessFields_SocialLink_Link_Reference_Create = {
  __typename?: 'FooterDocAccessFields_socialLink_link_reference_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Reference_Delete = {
  __typename?: 'FooterDocAccessFields_socialLink_link_reference_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Reference_Read = {
  __typename?: 'FooterDocAccessFields_socialLink_link_reference_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Reference_Update = {
  __typename?: 'FooterDocAccessFields_socialLink_link_reference_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Type = {
  __typename?: 'FooterDocAccessFields_socialLink_link_type';
  create?: Maybe<FooterDocAccessFields_SocialLink_Link_Type_Create>;
  delete?: Maybe<FooterDocAccessFields_SocialLink_Link_Type_Delete>;
  read?: Maybe<FooterDocAccessFields_SocialLink_Link_Type_Read>;
  update?: Maybe<FooterDocAccessFields_SocialLink_Link_Type_Update>;
};

export type FooterDocAccessFields_SocialLink_Link_Type_Create = {
  __typename?: 'FooterDocAccessFields_socialLink_link_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Type_Delete = {
  __typename?: 'FooterDocAccessFields_socialLink_link_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Type_Read = {
  __typename?: 'FooterDocAccessFields_socialLink_link_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Type_Update = {
  __typename?: 'FooterDocAccessFields_socialLink_link_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Url = {
  __typename?: 'FooterDocAccessFields_socialLink_link_url';
  create?: Maybe<FooterDocAccessFields_SocialLink_Link_Url_Create>;
  delete?: Maybe<FooterDocAccessFields_SocialLink_Link_Url_Delete>;
  read?: Maybe<FooterDocAccessFields_SocialLink_Link_Url_Read>;
  update?: Maybe<FooterDocAccessFields_SocialLink_Link_Url_Update>;
};

export type FooterDocAccessFields_SocialLink_Link_Url_Create = {
  __typename?: 'FooterDocAccessFields_socialLink_link_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Url_Delete = {
  __typename?: 'FooterDocAccessFields_socialLink_link_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Url_Read = {
  __typename?: 'FooterDocAccessFields_socialLink_link_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Url_Update = {
  __typename?: 'FooterDocAccessFields_socialLink_link_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_UpdatedAt = {
  __typename?: 'FooterDocAccessFields_updatedAt';
  create?: Maybe<FooterDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<FooterDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<FooterDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<FooterDocAccessFields_UpdatedAt_Update>;
};

export type FooterDocAccessFields_UpdatedAt_Create = {
  __typename?: 'FooterDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'FooterDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_UpdatedAt_Read = {
  __typename?: 'FooterDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_UpdatedAt_Update = {
  __typename?: 'FooterDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields = {
  __typename?: 'FooterFields';
  contactLink?: Maybe<FooterFields_ContactLink>;
  createdAt?: Maybe<FooterFields_CreatedAt>;
  navItems?: Maybe<FooterFields_NavItems>;
  phone?: Maybe<FooterFields_Phone>;
  slogan?: Maybe<FooterFields_Slogan>;
  socialLink?: Maybe<FooterFields_SocialLink>;
  updatedAt?: Maybe<FooterFields_UpdatedAt>;
};

export type FooterFields_ContactLink = {
  __typename?: 'FooterFields_contactLink';
  create?: Maybe<FooterFields_ContactLink_Create>;
  delete?: Maybe<FooterFields_ContactLink_Delete>;
  fields?: Maybe<FooterFields_ContactLink_Fields>;
  read?: Maybe<FooterFields_ContactLink_Read>;
  update?: Maybe<FooterFields_ContactLink_Update>;
};

export type FooterFields_ContactLink_Create = {
  __typename?: 'FooterFields_contactLink_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Delete = {
  __typename?: 'FooterFields_contactLink_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Fields = {
  __typename?: 'FooterFields_contactLink_Fields';
  link?: Maybe<FooterFields_ContactLink_Link>;
};

export type FooterFields_ContactLink_Read = {
  __typename?: 'FooterFields_contactLink_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Update = {
  __typename?: 'FooterFields_contactLink_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link = {
  __typename?: 'FooterFields_contactLink_link';
  create?: Maybe<FooterFields_ContactLink_Link_Create>;
  delete?: Maybe<FooterFields_ContactLink_Link_Delete>;
  fields?: Maybe<FooterFields_ContactLink_Link_Fields>;
  read?: Maybe<FooterFields_ContactLink_Link_Read>;
  update?: Maybe<FooterFields_ContactLink_Link_Update>;
};

export type FooterFields_ContactLink_Link_Create = {
  __typename?: 'FooterFields_contactLink_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Delete = {
  __typename?: 'FooterFields_contactLink_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Fields = {
  __typename?: 'FooterFields_contactLink_link_Fields';
  label?: Maybe<FooterFields_ContactLink_Link_Label>;
  newTab?: Maybe<FooterFields_ContactLink_Link_NewTab>;
  reference?: Maybe<FooterFields_ContactLink_Link_Reference>;
  type?: Maybe<FooterFields_ContactLink_Link_Type>;
  url?: Maybe<FooterFields_ContactLink_Link_Url>;
};

export type FooterFields_ContactLink_Link_Read = {
  __typename?: 'FooterFields_contactLink_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Update = {
  __typename?: 'FooterFields_contactLink_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Label = {
  __typename?: 'FooterFields_contactLink_link_label';
  create?: Maybe<FooterFields_ContactLink_Link_Label_Create>;
  delete?: Maybe<FooterFields_ContactLink_Link_Label_Delete>;
  read?: Maybe<FooterFields_ContactLink_Link_Label_Read>;
  update?: Maybe<FooterFields_ContactLink_Link_Label_Update>;
};

export type FooterFields_ContactLink_Link_Label_Create = {
  __typename?: 'FooterFields_contactLink_link_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Label_Delete = {
  __typename?: 'FooterFields_contactLink_link_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Label_Read = {
  __typename?: 'FooterFields_contactLink_link_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Label_Update = {
  __typename?: 'FooterFields_contactLink_link_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_NewTab = {
  __typename?: 'FooterFields_contactLink_link_newTab';
  create?: Maybe<FooterFields_ContactLink_Link_NewTab_Create>;
  delete?: Maybe<FooterFields_ContactLink_Link_NewTab_Delete>;
  read?: Maybe<FooterFields_ContactLink_Link_NewTab_Read>;
  update?: Maybe<FooterFields_ContactLink_Link_NewTab_Update>;
};

export type FooterFields_ContactLink_Link_NewTab_Create = {
  __typename?: 'FooterFields_contactLink_link_newTab_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_NewTab_Delete = {
  __typename?: 'FooterFields_contactLink_link_newTab_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_NewTab_Read = {
  __typename?: 'FooterFields_contactLink_link_newTab_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_NewTab_Update = {
  __typename?: 'FooterFields_contactLink_link_newTab_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Reference = {
  __typename?: 'FooterFields_contactLink_link_reference';
  create?: Maybe<FooterFields_ContactLink_Link_Reference_Create>;
  delete?: Maybe<FooterFields_ContactLink_Link_Reference_Delete>;
  read?: Maybe<FooterFields_ContactLink_Link_Reference_Read>;
  update?: Maybe<FooterFields_ContactLink_Link_Reference_Update>;
};

export type FooterFields_ContactLink_Link_Reference_Create = {
  __typename?: 'FooterFields_contactLink_link_reference_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Reference_Delete = {
  __typename?: 'FooterFields_contactLink_link_reference_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Reference_Read = {
  __typename?: 'FooterFields_contactLink_link_reference_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Reference_Update = {
  __typename?: 'FooterFields_contactLink_link_reference_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Type = {
  __typename?: 'FooterFields_contactLink_link_type';
  create?: Maybe<FooterFields_ContactLink_Link_Type_Create>;
  delete?: Maybe<FooterFields_ContactLink_Link_Type_Delete>;
  read?: Maybe<FooterFields_ContactLink_Link_Type_Read>;
  update?: Maybe<FooterFields_ContactLink_Link_Type_Update>;
};

export type FooterFields_ContactLink_Link_Type_Create = {
  __typename?: 'FooterFields_contactLink_link_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Type_Delete = {
  __typename?: 'FooterFields_contactLink_link_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Type_Read = {
  __typename?: 'FooterFields_contactLink_link_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Type_Update = {
  __typename?: 'FooterFields_contactLink_link_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Url = {
  __typename?: 'FooterFields_contactLink_link_url';
  create?: Maybe<FooterFields_ContactLink_Link_Url_Create>;
  delete?: Maybe<FooterFields_ContactLink_Link_Url_Delete>;
  read?: Maybe<FooterFields_ContactLink_Link_Url_Read>;
  update?: Maybe<FooterFields_ContactLink_Link_Url_Update>;
};

export type FooterFields_ContactLink_Link_Url_Create = {
  __typename?: 'FooterFields_contactLink_link_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Url_Delete = {
  __typename?: 'FooterFields_contactLink_link_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Url_Read = {
  __typename?: 'FooterFields_contactLink_link_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Url_Update = {
  __typename?: 'FooterFields_contactLink_link_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_CreatedAt = {
  __typename?: 'FooterFields_createdAt';
  create?: Maybe<FooterFields_CreatedAt_Create>;
  delete?: Maybe<FooterFields_CreatedAt_Delete>;
  read?: Maybe<FooterFields_CreatedAt_Read>;
  update?: Maybe<FooterFields_CreatedAt_Update>;
};

export type FooterFields_CreatedAt_Create = {
  __typename?: 'FooterFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_CreatedAt_Delete = {
  __typename?: 'FooterFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_CreatedAt_Read = {
  __typename?: 'FooterFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_CreatedAt_Update = {
  __typename?: 'FooterFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems = {
  __typename?: 'FooterFields_navItems';
  create?: Maybe<FooterFields_NavItems_Create>;
  delete?: Maybe<FooterFields_NavItems_Delete>;
  fields?: Maybe<FooterFields_NavItems_Fields>;
  read?: Maybe<FooterFields_NavItems_Read>;
  update?: Maybe<FooterFields_NavItems_Update>;
};

export type FooterFields_NavItems_Create = {
  __typename?: 'FooterFields_navItems_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Delete = {
  __typename?: 'FooterFields_navItems_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Fields = {
  __typename?: 'FooterFields_navItems_Fields';
  id?: Maybe<FooterFields_NavItems_Id>;
  link?: Maybe<FooterFields_NavItems_Link>;
};

export type FooterFields_NavItems_Read = {
  __typename?: 'FooterFields_navItems_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Update = {
  __typename?: 'FooterFields_navItems_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Id = {
  __typename?: 'FooterFields_navItems_id';
  create?: Maybe<FooterFields_NavItems_Id_Create>;
  delete?: Maybe<FooterFields_NavItems_Id_Delete>;
  read?: Maybe<FooterFields_NavItems_Id_Read>;
  update?: Maybe<FooterFields_NavItems_Id_Update>;
};

export type FooterFields_NavItems_Id_Create = {
  __typename?: 'FooterFields_navItems_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Id_Delete = {
  __typename?: 'FooterFields_navItems_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Id_Read = {
  __typename?: 'FooterFields_navItems_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Id_Update = {
  __typename?: 'FooterFields_navItems_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link = {
  __typename?: 'FooterFields_navItems_link';
  create?: Maybe<FooterFields_NavItems_Link_Create>;
  delete?: Maybe<FooterFields_NavItems_Link_Delete>;
  fields?: Maybe<FooterFields_NavItems_Link_Fields>;
  read?: Maybe<FooterFields_NavItems_Link_Read>;
  update?: Maybe<FooterFields_NavItems_Link_Update>;
};

export type FooterFields_NavItems_Link_Create = {
  __typename?: 'FooterFields_navItems_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Delete = {
  __typename?: 'FooterFields_navItems_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Fields = {
  __typename?: 'FooterFields_navItems_link_Fields';
  label?: Maybe<FooterFields_NavItems_Link_Label>;
  newTab?: Maybe<FooterFields_NavItems_Link_NewTab>;
  reference?: Maybe<FooterFields_NavItems_Link_Reference>;
  type?: Maybe<FooterFields_NavItems_Link_Type>;
  url?: Maybe<FooterFields_NavItems_Link_Url>;
};

export type FooterFields_NavItems_Link_Read = {
  __typename?: 'FooterFields_navItems_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Update = {
  __typename?: 'FooterFields_navItems_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Label = {
  __typename?: 'FooterFields_navItems_link_label';
  create?: Maybe<FooterFields_NavItems_Link_Label_Create>;
  delete?: Maybe<FooterFields_NavItems_Link_Label_Delete>;
  read?: Maybe<FooterFields_NavItems_Link_Label_Read>;
  update?: Maybe<FooterFields_NavItems_Link_Label_Update>;
};

export type FooterFields_NavItems_Link_Label_Create = {
  __typename?: 'FooterFields_navItems_link_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Label_Delete = {
  __typename?: 'FooterFields_navItems_link_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Label_Read = {
  __typename?: 'FooterFields_navItems_link_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Label_Update = {
  __typename?: 'FooterFields_navItems_link_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_NewTab = {
  __typename?: 'FooterFields_navItems_link_newTab';
  create?: Maybe<FooterFields_NavItems_Link_NewTab_Create>;
  delete?: Maybe<FooterFields_NavItems_Link_NewTab_Delete>;
  read?: Maybe<FooterFields_NavItems_Link_NewTab_Read>;
  update?: Maybe<FooterFields_NavItems_Link_NewTab_Update>;
};

export type FooterFields_NavItems_Link_NewTab_Create = {
  __typename?: 'FooterFields_navItems_link_newTab_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_NewTab_Delete = {
  __typename?: 'FooterFields_navItems_link_newTab_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_NewTab_Read = {
  __typename?: 'FooterFields_navItems_link_newTab_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_NewTab_Update = {
  __typename?: 'FooterFields_navItems_link_newTab_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Reference = {
  __typename?: 'FooterFields_navItems_link_reference';
  create?: Maybe<FooterFields_NavItems_Link_Reference_Create>;
  delete?: Maybe<FooterFields_NavItems_Link_Reference_Delete>;
  read?: Maybe<FooterFields_NavItems_Link_Reference_Read>;
  update?: Maybe<FooterFields_NavItems_Link_Reference_Update>;
};

export type FooterFields_NavItems_Link_Reference_Create = {
  __typename?: 'FooterFields_navItems_link_reference_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Reference_Delete = {
  __typename?: 'FooterFields_navItems_link_reference_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Reference_Read = {
  __typename?: 'FooterFields_navItems_link_reference_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Reference_Update = {
  __typename?: 'FooterFields_navItems_link_reference_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Type = {
  __typename?: 'FooterFields_navItems_link_type';
  create?: Maybe<FooterFields_NavItems_Link_Type_Create>;
  delete?: Maybe<FooterFields_NavItems_Link_Type_Delete>;
  read?: Maybe<FooterFields_NavItems_Link_Type_Read>;
  update?: Maybe<FooterFields_NavItems_Link_Type_Update>;
};

export type FooterFields_NavItems_Link_Type_Create = {
  __typename?: 'FooterFields_navItems_link_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Type_Delete = {
  __typename?: 'FooterFields_navItems_link_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Type_Read = {
  __typename?: 'FooterFields_navItems_link_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Type_Update = {
  __typename?: 'FooterFields_navItems_link_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Url = {
  __typename?: 'FooterFields_navItems_link_url';
  create?: Maybe<FooterFields_NavItems_Link_Url_Create>;
  delete?: Maybe<FooterFields_NavItems_Link_Url_Delete>;
  read?: Maybe<FooterFields_NavItems_Link_Url_Read>;
  update?: Maybe<FooterFields_NavItems_Link_Url_Update>;
};

export type FooterFields_NavItems_Link_Url_Create = {
  __typename?: 'FooterFields_navItems_link_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Url_Delete = {
  __typename?: 'FooterFields_navItems_link_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Url_Read = {
  __typename?: 'FooterFields_navItems_link_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Url_Update = {
  __typename?: 'FooterFields_navItems_link_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Phone = {
  __typename?: 'FooterFields_phone';
  create?: Maybe<FooterFields_Phone_Create>;
  delete?: Maybe<FooterFields_Phone_Delete>;
  read?: Maybe<FooterFields_Phone_Read>;
  update?: Maybe<FooterFields_Phone_Update>;
};

export type FooterFields_Phone_Create = {
  __typename?: 'FooterFields_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Phone_Delete = {
  __typename?: 'FooterFields_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Phone_Read = {
  __typename?: 'FooterFields_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Phone_Update = {
  __typename?: 'FooterFields_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Slogan = {
  __typename?: 'FooterFields_slogan';
  create?: Maybe<FooterFields_Slogan_Create>;
  delete?: Maybe<FooterFields_Slogan_Delete>;
  read?: Maybe<FooterFields_Slogan_Read>;
  update?: Maybe<FooterFields_Slogan_Update>;
};

export type FooterFields_Slogan_Create = {
  __typename?: 'FooterFields_slogan_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Slogan_Delete = {
  __typename?: 'FooterFields_slogan_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Slogan_Read = {
  __typename?: 'FooterFields_slogan_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Slogan_Update = {
  __typename?: 'FooterFields_slogan_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink = {
  __typename?: 'FooterFields_socialLink';
  create?: Maybe<FooterFields_SocialLink_Create>;
  delete?: Maybe<FooterFields_SocialLink_Delete>;
  fields?: Maybe<FooterFields_SocialLink_Fields>;
  read?: Maybe<FooterFields_SocialLink_Read>;
  update?: Maybe<FooterFields_SocialLink_Update>;
};

export type FooterFields_SocialLink_Create = {
  __typename?: 'FooterFields_socialLink_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Delete = {
  __typename?: 'FooterFields_socialLink_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Fields = {
  __typename?: 'FooterFields_socialLink_Fields';
  link?: Maybe<FooterFields_SocialLink_Link>;
};

export type FooterFields_SocialLink_Read = {
  __typename?: 'FooterFields_socialLink_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Update = {
  __typename?: 'FooterFields_socialLink_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link = {
  __typename?: 'FooterFields_socialLink_link';
  create?: Maybe<FooterFields_SocialLink_Link_Create>;
  delete?: Maybe<FooterFields_SocialLink_Link_Delete>;
  fields?: Maybe<FooterFields_SocialLink_Link_Fields>;
  read?: Maybe<FooterFields_SocialLink_Link_Read>;
  update?: Maybe<FooterFields_SocialLink_Link_Update>;
};

export type FooterFields_SocialLink_Link_Create = {
  __typename?: 'FooterFields_socialLink_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Delete = {
  __typename?: 'FooterFields_socialLink_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Fields = {
  __typename?: 'FooterFields_socialLink_link_Fields';
  label?: Maybe<FooterFields_SocialLink_Link_Label>;
  newTab?: Maybe<FooterFields_SocialLink_Link_NewTab>;
  reference?: Maybe<FooterFields_SocialLink_Link_Reference>;
  type?: Maybe<FooterFields_SocialLink_Link_Type>;
  url?: Maybe<FooterFields_SocialLink_Link_Url>;
};

export type FooterFields_SocialLink_Link_Read = {
  __typename?: 'FooterFields_socialLink_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Update = {
  __typename?: 'FooterFields_socialLink_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Label = {
  __typename?: 'FooterFields_socialLink_link_label';
  create?: Maybe<FooterFields_SocialLink_Link_Label_Create>;
  delete?: Maybe<FooterFields_SocialLink_Link_Label_Delete>;
  read?: Maybe<FooterFields_SocialLink_Link_Label_Read>;
  update?: Maybe<FooterFields_SocialLink_Link_Label_Update>;
};

export type FooterFields_SocialLink_Link_Label_Create = {
  __typename?: 'FooterFields_socialLink_link_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Label_Delete = {
  __typename?: 'FooterFields_socialLink_link_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Label_Read = {
  __typename?: 'FooterFields_socialLink_link_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Label_Update = {
  __typename?: 'FooterFields_socialLink_link_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_NewTab = {
  __typename?: 'FooterFields_socialLink_link_newTab';
  create?: Maybe<FooterFields_SocialLink_Link_NewTab_Create>;
  delete?: Maybe<FooterFields_SocialLink_Link_NewTab_Delete>;
  read?: Maybe<FooterFields_SocialLink_Link_NewTab_Read>;
  update?: Maybe<FooterFields_SocialLink_Link_NewTab_Update>;
};

export type FooterFields_SocialLink_Link_NewTab_Create = {
  __typename?: 'FooterFields_socialLink_link_newTab_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_NewTab_Delete = {
  __typename?: 'FooterFields_socialLink_link_newTab_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_NewTab_Read = {
  __typename?: 'FooterFields_socialLink_link_newTab_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_NewTab_Update = {
  __typename?: 'FooterFields_socialLink_link_newTab_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Reference = {
  __typename?: 'FooterFields_socialLink_link_reference';
  create?: Maybe<FooterFields_SocialLink_Link_Reference_Create>;
  delete?: Maybe<FooterFields_SocialLink_Link_Reference_Delete>;
  read?: Maybe<FooterFields_SocialLink_Link_Reference_Read>;
  update?: Maybe<FooterFields_SocialLink_Link_Reference_Update>;
};

export type FooterFields_SocialLink_Link_Reference_Create = {
  __typename?: 'FooterFields_socialLink_link_reference_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Reference_Delete = {
  __typename?: 'FooterFields_socialLink_link_reference_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Reference_Read = {
  __typename?: 'FooterFields_socialLink_link_reference_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Reference_Update = {
  __typename?: 'FooterFields_socialLink_link_reference_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Type = {
  __typename?: 'FooterFields_socialLink_link_type';
  create?: Maybe<FooterFields_SocialLink_Link_Type_Create>;
  delete?: Maybe<FooterFields_SocialLink_Link_Type_Delete>;
  read?: Maybe<FooterFields_SocialLink_Link_Type_Read>;
  update?: Maybe<FooterFields_SocialLink_Link_Type_Update>;
};

export type FooterFields_SocialLink_Link_Type_Create = {
  __typename?: 'FooterFields_socialLink_link_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Type_Delete = {
  __typename?: 'FooterFields_socialLink_link_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Type_Read = {
  __typename?: 'FooterFields_socialLink_link_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Type_Update = {
  __typename?: 'FooterFields_socialLink_link_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Url = {
  __typename?: 'FooterFields_socialLink_link_url';
  create?: Maybe<FooterFields_SocialLink_Link_Url_Create>;
  delete?: Maybe<FooterFields_SocialLink_Link_Url_Delete>;
  read?: Maybe<FooterFields_SocialLink_Link_Url_Read>;
  update?: Maybe<FooterFields_SocialLink_Link_Url_Update>;
};

export type FooterFields_SocialLink_Link_Url_Create = {
  __typename?: 'FooterFields_socialLink_link_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Url_Delete = {
  __typename?: 'FooterFields_socialLink_link_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Url_Read = {
  __typename?: 'FooterFields_socialLink_link_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Url_Update = {
  __typename?: 'FooterFields_socialLink_link_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_UpdatedAt = {
  __typename?: 'FooterFields_updatedAt';
  create?: Maybe<FooterFields_UpdatedAt_Create>;
  delete?: Maybe<FooterFields_UpdatedAt_Delete>;
  read?: Maybe<FooterFields_UpdatedAt_Read>;
  update?: Maybe<FooterFields_UpdatedAt_Update>;
};

export type FooterFields_UpdatedAt_Create = {
  __typename?: 'FooterFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_UpdatedAt_Delete = {
  __typename?: 'FooterFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_UpdatedAt_Read = {
  __typename?: 'FooterFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_UpdatedAt_Update = {
  __typename?: 'FooterFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterReadAccess = {
  __typename?: 'FooterReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FooterReadDocAccess = {
  __typename?: 'FooterReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FooterUpdateAccess = {
  __typename?: 'FooterUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FooterUpdateDocAccess = {
  __typename?: 'FooterUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Footer_ContactLink = {
  __typename?: 'Footer_ContactLink';
  link?: Maybe<Footer_ContactLink_Link>;
};

export type Footer_ContactLink_Link = {
  __typename?: 'Footer_ContactLink_Link';
  label?: Maybe<Scalars['String']['output']>;
  newTab?: Maybe<Scalars['Boolean']['output']>;
  reference?: Maybe<Footer_ContactLink_Link_Reference_Relationship>;
  type?: Maybe<Footer_ContactLink_Link_Type>;
  url?: Maybe<Scalars['String']['output']>;
};


export type Footer_ContactLink_LinkReferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type Footer_ContactLink_Link_Reference = Page;

export type Footer_ContactLink_Link_ReferenceRelationshipInput = {
  relationTo?: InputMaybe<Footer_ContactLink_Link_ReferenceRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum Footer_ContactLink_Link_ReferenceRelationshipInputRelationTo {
  Pages = 'pages'
}

export enum Footer_ContactLink_Link_Reference_RelationTo {
  Pages = 'pages'
}

export type Footer_ContactLink_Link_Reference_Relationship = {
  __typename?: 'Footer_ContactLink_Link_Reference_Relationship';
  relationTo?: Maybe<Footer_ContactLink_Link_Reference_RelationTo>;
  value?: Maybe<Footer_ContactLink_Link_Reference>;
};

export enum Footer_ContactLink_Link_Type {
  Custom = 'custom',
  Reference = 'reference'
}

export type Footer_NavItems = {
  __typename?: 'Footer_NavItems';
  id?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Footer_NavItems_Link>;
};

export type Footer_NavItems_Link = {
  __typename?: 'Footer_NavItems_Link';
  label?: Maybe<Scalars['String']['output']>;
  newTab?: Maybe<Scalars['Boolean']['output']>;
  reference?: Maybe<Footer_NavItems_Link_Reference_Relationship>;
  type?: Maybe<Footer_NavItems_Link_Type>;
  url?: Maybe<Scalars['String']['output']>;
};


export type Footer_NavItems_LinkReferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type Footer_NavItems_Link_Reference = Page;

export type Footer_NavItems_Link_ReferenceRelationshipInput = {
  relationTo?: InputMaybe<Footer_NavItems_Link_ReferenceRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum Footer_NavItems_Link_ReferenceRelationshipInputRelationTo {
  Pages = 'pages'
}

export enum Footer_NavItems_Link_Reference_RelationTo {
  Pages = 'pages'
}

export type Footer_NavItems_Link_Reference_Relationship = {
  __typename?: 'Footer_NavItems_Link_Reference_Relationship';
  relationTo?: Maybe<Footer_NavItems_Link_Reference_RelationTo>;
  value?: Maybe<Footer_NavItems_Link_Reference>;
};

export enum Footer_NavItems_Link_Type {
  Custom = 'custom',
  Reference = 'reference'
}

export type Footer_SocialLink = {
  __typename?: 'Footer_SocialLink';
  link?: Maybe<Footer_SocialLink_Link>;
};

export type Footer_SocialLink_Link = {
  __typename?: 'Footer_SocialLink_Link';
  label?: Maybe<Scalars['String']['output']>;
  newTab?: Maybe<Scalars['Boolean']['output']>;
  reference?: Maybe<Footer_SocialLink_Link_Reference_Relationship>;
  type?: Maybe<Footer_SocialLink_Link_Type>;
  url?: Maybe<Scalars['String']['output']>;
};


export type Footer_SocialLink_LinkReferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type Footer_SocialLink_Link_Reference = Page;

export type Footer_SocialLink_Link_ReferenceRelationshipInput = {
  relationTo?: InputMaybe<Footer_SocialLink_Link_ReferenceRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum Footer_SocialLink_Link_ReferenceRelationshipInputRelationTo {
  Pages = 'pages'
}

export enum Footer_SocialLink_Link_Reference_RelationTo {
  Pages = 'pages'
}

export type Footer_SocialLink_Link_Reference_Relationship = {
  __typename?: 'Footer_SocialLink_Link_Reference_Relationship';
  relationTo?: Maybe<Footer_SocialLink_Link_Reference_RelationTo>;
  value?: Maybe<Footer_SocialLink_Link_Reference>;
};

export enum Footer_SocialLink_Link_Type {
  Custom = 'custom',
  Reference = 'reference'
}

export type Form = {
  __typename?: 'Form';
  confirmationMessage?: Maybe<Scalars['JSON']['output']>;
  confirmationType?: Maybe<Form_ConfirmationType>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  emails?: Maybe<Array<Form_Emails>>;
  fields?: Maybe<Array<Form_Fields>>;
  id: Scalars['Int']['output'];
  redirect?: Maybe<Form_Redirect>;
  submitButtonLabel?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type FormConfirmationMessageArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type FormBlock = {
  __typename?: 'FormBlock';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  enableIntro?: Maybe<Scalars['Boolean']['output']>;
  form?: Maybe<Form>;
  id?: Maybe<Scalars['String']['output']>;
  introContent?: Maybe<Scalars['JSON']['output']>;
};


export type FormBlockFormArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type FormBlockIntroContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type FormSubmission = {
  __typename?: 'FormSubmission';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  form: Form;
  id: Scalars['Int']['output'];
  submissionData?: Maybe<Array<FormSubmission_SubmissionData>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type FormSubmissionFormArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type FormSubmission_SubmissionData = {
  __typename?: 'FormSubmission_SubmissionData';
  field?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type FormSubmission_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FormSubmission_Form_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type FormSubmission_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type FormSubmission_SubmissionData__Field_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FormSubmission_SubmissionData__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FormSubmission_SubmissionData__Value_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type FormSubmission_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FormSubmission_Where = {
  AND?: InputMaybe<Array<InputMaybe<FormSubmission_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<FormSubmission_Where_Or>>>;
  createdAt?: InputMaybe<FormSubmission_CreatedAt_Operator>;
  form?: InputMaybe<FormSubmission_Form_Operator>;
  id?: InputMaybe<FormSubmission_Id_Operator>;
  submissionData__field?: InputMaybe<FormSubmission_SubmissionData__Field_Operator>;
  submissionData__id?: InputMaybe<FormSubmission_SubmissionData__Id_Operator>;
  submissionData__value?: InputMaybe<FormSubmission_SubmissionData__Value_Operator>;
  updatedAt?: InputMaybe<FormSubmission_UpdatedAt_Operator>;
};

export type FormSubmission_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<FormSubmission_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<FormSubmission_Where_Or>>>;
  createdAt?: InputMaybe<FormSubmission_CreatedAt_Operator>;
  form?: InputMaybe<FormSubmission_Form_Operator>;
  id?: InputMaybe<FormSubmission_Id_Operator>;
  submissionData__field?: InputMaybe<FormSubmission_SubmissionData__Field_Operator>;
  submissionData__id?: InputMaybe<FormSubmission_SubmissionData__Id_Operator>;
  submissionData__value?: InputMaybe<FormSubmission_SubmissionData__Value_Operator>;
  updatedAt?: InputMaybe<FormSubmission_UpdatedAt_Operator>;
};

export type FormSubmission_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<FormSubmission_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<FormSubmission_Where_Or>>>;
  createdAt?: InputMaybe<FormSubmission_CreatedAt_Operator>;
  form?: InputMaybe<FormSubmission_Form_Operator>;
  id?: InputMaybe<FormSubmission_Id_Operator>;
  submissionData__field?: InputMaybe<FormSubmission_SubmissionData__Field_Operator>;
  submissionData__id?: InputMaybe<FormSubmission_SubmissionData__Id_Operator>;
  submissionData__value?: InputMaybe<FormSubmission_SubmissionData__Value_Operator>;
  updatedAt?: InputMaybe<FormSubmission_UpdatedAt_Operator>;
};

export type FormSubmissions = {
  __typename?: 'FormSubmissions';
  docs: Array<FormSubmission>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type FormSubmissionsCreateAccess = {
  __typename?: 'FormSubmissionsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormSubmissionsCreateDocAccess = {
  __typename?: 'FormSubmissionsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormSubmissionsDeleteAccess = {
  __typename?: 'FormSubmissionsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormSubmissionsDeleteDocAccess = {
  __typename?: 'FormSubmissionsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormSubmissionsDocAccessFields = {
  __typename?: 'FormSubmissionsDocAccessFields';
  createdAt?: Maybe<FormSubmissionsDocAccessFields_CreatedAt>;
  form?: Maybe<FormSubmissionsDocAccessFields_Form>;
  submissionData?: Maybe<FormSubmissionsDocAccessFields_SubmissionData>;
  updatedAt?: Maybe<FormSubmissionsDocAccessFields_UpdatedAt>;
};

export type FormSubmissionsDocAccessFields_CreatedAt = {
  __typename?: 'FormSubmissionsDocAccessFields_createdAt';
  create?: Maybe<FormSubmissionsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<FormSubmissionsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<FormSubmissionsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<FormSubmissionsDocAccessFields_CreatedAt_Update>;
};

export type FormSubmissionsDocAccessFields_CreatedAt_Create = {
  __typename?: 'FormSubmissionsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'FormSubmissionsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_CreatedAt_Read = {
  __typename?: 'FormSubmissionsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_CreatedAt_Update = {
  __typename?: 'FormSubmissionsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_Form = {
  __typename?: 'FormSubmissionsDocAccessFields_form';
  create?: Maybe<FormSubmissionsDocAccessFields_Form_Create>;
  delete?: Maybe<FormSubmissionsDocAccessFields_Form_Delete>;
  read?: Maybe<FormSubmissionsDocAccessFields_Form_Read>;
  update?: Maybe<FormSubmissionsDocAccessFields_Form_Update>;
};

export type FormSubmissionsDocAccessFields_Form_Create = {
  __typename?: 'FormSubmissionsDocAccessFields_form_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_Form_Delete = {
  __typename?: 'FormSubmissionsDocAccessFields_form_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_Form_Read = {
  __typename?: 'FormSubmissionsDocAccessFields_form_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_Form_Update = {
  __typename?: 'FormSubmissionsDocAccessFields_form_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData';
  create?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Create>;
  delete?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Delete>;
  fields?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Fields>;
  read?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Read>;
  update?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Update>;
};

export type FormSubmissionsDocAccessFields_SubmissionData_Create = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Delete = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Fields = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_Fields';
  field?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Field>;
  id?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Id>;
  value?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Value>;
};

export type FormSubmissionsDocAccessFields_SubmissionData_Read = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Update = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Field = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_field';
  create?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Field_Create>;
  delete?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Field_Delete>;
  read?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Field_Read>;
  update?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Field_Update>;
};

export type FormSubmissionsDocAccessFields_SubmissionData_Field_Create = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_field_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Field_Delete = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_field_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Field_Read = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_field_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Field_Update = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_field_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Id = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_id';
  create?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Id_Create>;
  delete?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Id_Delete>;
  read?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Id_Read>;
  update?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Id_Update>;
};

export type FormSubmissionsDocAccessFields_SubmissionData_Id_Create = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Id_Delete = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Id_Read = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Id_Update = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Value = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_value';
  create?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Value_Create>;
  delete?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Value_Delete>;
  read?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Value_Read>;
  update?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Value_Update>;
};

export type FormSubmissionsDocAccessFields_SubmissionData_Value_Create = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Value_Delete = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Value_Read = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Value_Update = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_UpdatedAt = {
  __typename?: 'FormSubmissionsDocAccessFields_updatedAt';
  create?: Maybe<FormSubmissionsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<FormSubmissionsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<FormSubmissionsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<FormSubmissionsDocAccessFields_UpdatedAt_Update>;
};

export type FormSubmissionsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'FormSubmissionsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'FormSubmissionsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'FormSubmissionsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'FormSubmissionsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields = {
  __typename?: 'FormSubmissionsFields';
  createdAt?: Maybe<FormSubmissionsFields_CreatedAt>;
  form?: Maybe<FormSubmissionsFields_Form>;
  submissionData?: Maybe<FormSubmissionsFields_SubmissionData>;
  updatedAt?: Maybe<FormSubmissionsFields_UpdatedAt>;
};

export type FormSubmissionsFields_CreatedAt = {
  __typename?: 'FormSubmissionsFields_createdAt';
  create?: Maybe<FormSubmissionsFields_CreatedAt_Create>;
  delete?: Maybe<FormSubmissionsFields_CreatedAt_Delete>;
  read?: Maybe<FormSubmissionsFields_CreatedAt_Read>;
  update?: Maybe<FormSubmissionsFields_CreatedAt_Update>;
};

export type FormSubmissionsFields_CreatedAt_Create = {
  __typename?: 'FormSubmissionsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_CreatedAt_Delete = {
  __typename?: 'FormSubmissionsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_CreatedAt_Read = {
  __typename?: 'FormSubmissionsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_CreatedAt_Update = {
  __typename?: 'FormSubmissionsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_Form = {
  __typename?: 'FormSubmissionsFields_form';
  create?: Maybe<FormSubmissionsFields_Form_Create>;
  delete?: Maybe<FormSubmissionsFields_Form_Delete>;
  read?: Maybe<FormSubmissionsFields_Form_Read>;
  update?: Maybe<FormSubmissionsFields_Form_Update>;
};

export type FormSubmissionsFields_Form_Create = {
  __typename?: 'FormSubmissionsFields_form_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_Form_Delete = {
  __typename?: 'FormSubmissionsFields_form_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_Form_Read = {
  __typename?: 'FormSubmissionsFields_form_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_Form_Update = {
  __typename?: 'FormSubmissionsFields_form_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData = {
  __typename?: 'FormSubmissionsFields_submissionData';
  create?: Maybe<FormSubmissionsFields_SubmissionData_Create>;
  delete?: Maybe<FormSubmissionsFields_SubmissionData_Delete>;
  fields?: Maybe<FormSubmissionsFields_SubmissionData_Fields>;
  read?: Maybe<FormSubmissionsFields_SubmissionData_Read>;
  update?: Maybe<FormSubmissionsFields_SubmissionData_Update>;
};

export type FormSubmissionsFields_SubmissionData_Create = {
  __typename?: 'FormSubmissionsFields_submissionData_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Delete = {
  __typename?: 'FormSubmissionsFields_submissionData_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Fields = {
  __typename?: 'FormSubmissionsFields_submissionData_Fields';
  field?: Maybe<FormSubmissionsFields_SubmissionData_Field>;
  id?: Maybe<FormSubmissionsFields_SubmissionData_Id>;
  value?: Maybe<FormSubmissionsFields_SubmissionData_Value>;
};

export type FormSubmissionsFields_SubmissionData_Read = {
  __typename?: 'FormSubmissionsFields_submissionData_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Update = {
  __typename?: 'FormSubmissionsFields_submissionData_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Field = {
  __typename?: 'FormSubmissionsFields_submissionData_field';
  create?: Maybe<FormSubmissionsFields_SubmissionData_Field_Create>;
  delete?: Maybe<FormSubmissionsFields_SubmissionData_Field_Delete>;
  read?: Maybe<FormSubmissionsFields_SubmissionData_Field_Read>;
  update?: Maybe<FormSubmissionsFields_SubmissionData_Field_Update>;
};

export type FormSubmissionsFields_SubmissionData_Field_Create = {
  __typename?: 'FormSubmissionsFields_submissionData_field_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Field_Delete = {
  __typename?: 'FormSubmissionsFields_submissionData_field_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Field_Read = {
  __typename?: 'FormSubmissionsFields_submissionData_field_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Field_Update = {
  __typename?: 'FormSubmissionsFields_submissionData_field_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Id = {
  __typename?: 'FormSubmissionsFields_submissionData_id';
  create?: Maybe<FormSubmissionsFields_SubmissionData_Id_Create>;
  delete?: Maybe<FormSubmissionsFields_SubmissionData_Id_Delete>;
  read?: Maybe<FormSubmissionsFields_SubmissionData_Id_Read>;
  update?: Maybe<FormSubmissionsFields_SubmissionData_Id_Update>;
};

export type FormSubmissionsFields_SubmissionData_Id_Create = {
  __typename?: 'FormSubmissionsFields_submissionData_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Id_Delete = {
  __typename?: 'FormSubmissionsFields_submissionData_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Id_Read = {
  __typename?: 'FormSubmissionsFields_submissionData_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Id_Update = {
  __typename?: 'FormSubmissionsFields_submissionData_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Value = {
  __typename?: 'FormSubmissionsFields_submissionData_value';
  create?: Maybe<FormSubmissionsFields_SubmissionData_Value_Create>;
  delete?: Maybe<FormSubmissionsFields_SubmissionData_Value_Delete>;
  read?: Maybe<FormSubmissionsFields_SubmissionData_Value_Read>;
  update?: Maybe<FormSubmissionsFields_SubmissionData_Value_Update>;
};

export type FormSubmissionsFields_SubmissionData_Value_Create = {
  __typename?: 'FormSubmissionsFields_submissionData_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Value_Delete = {
  __typename?: 'FormSubmissionsFields_submissionData_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Value_Read = {
  __typename?: 'FormSubmissionsFields_submissionData_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Value_Update = {
  __typename?: 'FormSubmissionsFields_submissionData_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_UpdatedAt = {
  __typename?: 'FormSubmissionsFields_updatedAt';
  create?: Maybe<FormSubmissionsFields_UpdatedAt_Create>;
  delete?: Maybe<FormSubmissionsFields_UpdatedAt_Delete>;
  read?: Maybe<FormSubmissionsFields_UpdatedAt_Read>;
  update?: Maybe<FormSubmissionsFields_UpdatedAt_Update>;
};

export type FormSubmissionsFields_UpdatedAt_Create = {
  __typename?: 'FormSubmissionsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_UpdatedAt_Delete = {
  __typename?: 'FormSubmissionsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_UpdatedAt_Read = {
  __typename?: 'FormSubmissionsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_UpdatedAt_Update = {
  __typename?: 'FormSubmissionsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsReadAccess = {
  __typename?: 'FormSubmissionsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormSubmissionsReadDocAccess = {
  __typename?: 'FormSubmissionsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormSubmissionsUpdateAccess = {
  __typename?: 'FormSubmissionsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormSubmissionsUpdateDocAccess = {
  __typename?: 'FormSubmissionsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Form_Emails = {
  __typename?: 'Form_Emails';
  bcc?: Maybe<Scalars['String']['output']>;
  cc?: Maybe<Scalars['String']['output']>;
  emailFrom?: Maybe<Scalars['String']['output']>;
  emailTo?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['JSON']['output']>;
  replyTo?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
};


export type Form_EmailsMessageArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Form_Fields = Checkbox | Country | Email | Message | Number | Select | State | Text | Textarea;

export type Form_Redirect = {
  __typename?: 'Form_Redirect';
  url?: Maybe<Scalars['String']['output']>;
};

export type Form_ConfirmationMessage_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export enum Form_ConfirmationType {
  Message = 'message',
  Redirect = 'redirect'
}

export enum Form_ConfirmationType_Input {
  Message = 'message',
  Redirect = 'redirect'
}

export type Form_ConfirmationType_Operator = {
  contains?: InputMaybe<Form_ConfirmationType_Input>;
  equals?: InputMaybe<Form_ConfirmationType_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Form_ConfirmationType_Input>;
  not_equals?: InputMaybe<Form_ConfirmationType_Input>;
};

export type Form_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Form_Emails__Bcc_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_Emails__Cc_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_Emails__EmailFrom_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_Emails__EmailTo_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_Emails__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_Emails__Message_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Form_Emails__ReplyTo_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_Emails__Subject_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Form_Redirect__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_SubmitButtonLabel_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Form_Where = {
  AND?: InputMaybe<Array<InputMaybe<Form_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Form_Where_Or>>>;
  confirmationMessage?: InputMaybe<Form_ConfirmationMessage_Operator>;
  confirmationType?: InputMaybe<Form_ConfirmationType_Operator>;
  createdAt?: InputMaybe<Form_CreatedAt_Operator>;
  emails__bcc?: InputMaybe<Form_Emails__Bcc_Operator>;
  emails__cc?: InputMaybe<Form_Emails__Cc_Operator>;
  emails__emailFrom?: InputMaybe<Form_Emails__EmailFrom_Operator>;
  emails__emailTo?: InputMaybe<Form_Emails__EmailTo_Operator>;
  emails__id?: InputMaybe<Form_Emails__Id_Operator>;
  emails__message?: InputMaybe<Form_Emails__Message_Operator>;
  emails__replyTo?: InputMaybe<Form_Emails__ReplyTo_Operator>;
  emails__subject?: InputMaybe<Form_Emails__Subject_Operator>;
  id?: InputMaybe<Form_Id_Operator>;
  redirect__url?: InputMaybe<Form_Redirect__Url_Operator>;
  submitButtonLabel?: InputMaybe<Form_SubmitButtonLabel_Operator>;
  title?: InputMaybe<Form_Title_Operator>;
  updatedAt?: InputMaybe<Form_UpdatedAt_Operator>;
};

export type Form_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Form_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Form_Where_Or>>>;
  confirmationMessage?: InputMaybe<Form_ConfirmationMessage_Operator>;
  confirmationType?: InputMaybe<Form_ConfirmationType_Operator>;
  createdAt?: InputMaybe<Form_CreatedAt_Operator>;
  emails__bcc?: InputMaybe<Form_Emails__Bcc_Operator>;
  emails__cc?: InputMaybe<Form_Emails__Cc_Operator>;
  emails__emailFrom?: InputMaybe<Form_Emails__EmailFrom_Operator>;
  emails__emailTo?: InputMaybe<Form_Emails__EmailTo_Operator>;
  emails__id?: InputMaybe<Form_Emails__Id_Operator>;
  emails__message?: InputMaybe<Form_Emails__Message_Operator>;
  emails__replyTo?: InputMaybe<Form_Emails__ReplyTo_Operator>;
  emails__subject?: InputMaybe<Form_Emails__Subject_Operator>;
  id?: InputMaybe<Form_Id_Operator>;
  redirect__url?: InputMaybe<Form_Redirect__Url_Operator>;
  submitButtonLabel?: InputMaybe<Form_SubmitButtonLabel_Operator>;
  title?: InputMaybe<Form_Title_Operator>;
  updatedAt?: InputMaybe<Form_UpdatedAt_Operator>;
};

export type Form_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Form_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Form_Where_Or>>>;
  confirmationMessage?: InputMaybe<Form_ConfirmationMessage_Operator>;
  confirmationType?: InputMaybe<Form_ConfirmationType_Operator>;
  createdAt?: InputMaybe<Form_CreatedAt_Operator>;
  emails__bcc?: InputMaybe<Form_Emails__Bcc_Operator>;
  emails__cc?: InputMaybe<Form_Emails__Cc_Operator>;
  emails__emailFrom?: InputMaybe<Form_Emails__EmailFrom_Operator>;
  emails__emailTo?: InputMaybe<Form_Emails__EmailTo_Operator>;
  emails__id?: InputMaybe<Form_Emails__Id_Operator>;
  emails__message?: InputMaybe<Form_Emails__Message_Operator>;
  emails__replyTo?: InputMaybe<Form_Emails__ReplyTo_Operator>;
  emails__subject?: InputMaybe<Form_Emails__Subject_Operator>;
  id?: InputMaybe<Form_Id_Operator>;
  redirect__url?: InputMaybe<Form_Redirect__Url_Operator>;
  submitButtonLabel?: InputMaybe<Form_SubmitButtonLabel_Operator>;
  title?: InputMaybe<Form_Title_Operator>;
  updatedAt?: InputMaybe<Form_UpdatedAt_Operator>;
};

export type Forms = {
  __typename?: 'Forms';
  docs: Array<Form>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type FormsCreateAccess = {
  __typename?: 'FormsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormsCreateDocAccess = {
  __typename?: 'FormsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormsDeleteAccess = {
  __typename?: 'FormsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormsDeleteDocAccess = {
  __typename?: 'FormsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormsDocAccessFields = {
  __typename?: 'FormsDocAccessFields';
  confirmationMessage?: Maybe<FormsDocAccessFields_ConfirmationMessage>;
  confirmationType?: Maybe<FormsDocAccessFields_ConfirmationType>;
  createdAt?: Maybe<FormsDocAccessFields_CreatedAt>;
  emails?: Maybe<FormsDocAccessFields_Emails>;
  fields?: Maybe<FormsDocAccessFields_Fields>;
  redirect?: Maybe<FormsDocAccessFields_Redirect>;
  submitButtonLabel?: Maybe<FormsDocAccessFields_SubmitButtonLabel>;
  title?: Maybe<FormsDocAccessFields_Title>;
  updatedAt?: Maybe<FormsDocAccessFields_UpdatedAt>;
};

export type FormsDocAccessFields_ConfirmationMessage = {
  __typename?: 'FormsDocAccessFields_confirmationMessage';
  create?: Maybe<FormsDocAccessFields_ConfirmationMessage_Create>;
  delete?: Maybe<FormsDocAccessFields_ConfirmationMessage_Delete>;
  read?: Maybe<FormsDocAccessFields_ConfirmationMessage_Read>;
  update?: Maybe<FormsDocAccessFields_ConfirmationMessage_Update>;
};

export type FormsDocAccessFields_ConfirmationMessage_Create = {
  __typename?: 'FormsDocAccessFields_confirmationMessage_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_ConfirmationMessage_Delete = {
  __typename?: 'FormsDocAccessFields_confirmationMessage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_ConfirmationMessage_Read = {
  __typename?: 'FormsDocAccessFields_confirmationMessage_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_ConfirmationMessage_Update = {
  __typename?: 'FormsDocAccessFields_confirmationMessage_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_ConfirmationType = {
  __typename?: 'FormsDocAccessFields_confirmationType';
  create?: Maybe<FormsDocAccessFields_ConfirmationType_Create>;
  delete?: Maybe<FormsDocAccessFields_ConfirmationType_Delete>;
  read?: Maybe<FormsDocAccessFields_ConfirmationType_Read>;
  update?: Maybe<FormsDocAccessFields_ConfirmationType_Update>;
};

export type FormsDocAccessFields_ConfirmationType_Create = {
  __typename?: 'FormsDocAccessFields_confirmationType_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_ConfirmationType_Delete = {
  __typename?: 'FormsDocAccessFields_confirmationType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_ConfirmationType_Read = {
  __typename?: 'FormsDocAccessFields_confirmationType_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_ConfirmationType_Update = {
  __typename?: 'FormsDocAccessFields_confirmationType_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_CreatedAt = {
  __typename?: 'FormsDocAccessFields_createdAt';
  create?: Maybe<FormsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<FormsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<FormsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<FormsDocAccessFields_CreatedAt_Update>;
};

export type FormsDocAccessFields_CreatedAt_Create = {
  __typename?: 'FormsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'FormsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_CreatedAt_Read = {
  __typename?: 'FormsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_CreatedAt_Update = {
  __typename?: 'FormsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails = {
  __typename?: 'FormsDocAccessFields_emails';
  create?: Maybe<FormsDocAccessFields_Emails_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_Delete>;
  fields?: Maybe<FormsDocAccessFields_Emails_Fields>;
  read?: Maybe<FormsDocAccessFields_Emails_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_Update>;
};

export type FormsDocAccessFields_Emails_Create = {
  __typename?: 'FormsDocAccessFields_emails_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Delete = {
  __typename?: 'FormsDocAccessFields_emails_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Fields = {
  __typename?: 'FormsDocAccessFields_emails_Fields';
  bcc?: Maybe<FormsDocAccessFields_Emails_Bcc>;
  cc?: Maybe<FormsDocAccessFields_Emails_Cc>;
  emailFrom?: Maybe<FormsDocAccessFields_Emails_EmailFrom>;
  emailTo?: Maybe<FormsDocAccessFields_Emails_EmailTo>;
  id?: Maybe<FormsDocAccessFields_Emails_Id>;
  message?: Maybe<FormsDocAccessFields_Emails_Message>;
  replyTo?: Maybe<FormsDocAccessFields_Emails_ReplyTo>;
  subject?: Maybe<FormsDocAccessFields_Emails_Subject>;
};

export type FormsDocAccessFields_Emails_Read = {
  __typename?: 'FormsDocAccessFields_emails_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Update = {
  __typename?: 'FormsDocAccessFields_emails_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Bcc = {
  __typename?: 'FormsDocAccessFields_emails_bcc';
  create?: Maybe<FormsDocAccessFields_Emails_Bcc_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_Bcc_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_Bcc_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_Bcc_Update>;
};

export type FormsDocAccessFields_Emails_Bcc_Create = {
  __typename?: 'FormsDocAccessFields_emails_bcc_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Bcc_Delete = {
  __typename?: 'FormsDocAccessFields_emails_bcc_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Bcc_Read = {
  __typename?: 'FormsDocAccessFields_emails_bcc_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Bcc_Update = {
  __typename?: 'FormsDocAccessFields_emails_bcc_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Cc = {
  __typename?: 'FormsDocAccessFields_emails_cc';
  create?: Maybe<FormsDocAccessFields_Emails_Cc_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_Cc_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_Cc_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_Cc_Update>;
};

export type FormsDocAccessFields_Emails_Cc_Create = {
  __typename?: 'FormsDocAccessFields_emails_cc_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Cc_Delete = {
  __typename?: 'FormsDocAccessFields_emails_cc_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Cc_Read = {
  __typename?: 'FormsDocAccessFields_emails_cc_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Cc_Update = {
  __typename?: 'FormsDocAccessFields_emails_cc_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailFrom = {
  __typename?: 'FormsDocAccessFields_emails_emailFrom';
  create?: Maybe<FormsDocAccessFields_Emails_EmailFrom_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_EmailFrom_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_EmailFrom_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_EmailFrom_Update>;
};

export type FormsDocAccessFields_Emails_EmailFrom_Create = {
  __typename?: 'FormsDocAccessFields_emails_emailFrom_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailFrom_Delete = {
  __typename?: 'FormsDocAccessFields_emails_emailFrom_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailFrom_Read = {
  __typename?: 'FormsDocAccessFields_emails_emailFrom_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailFrom_Update = {
  __typename?: 'FormsDocAccessFields_emails_emailFrom_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailTo = {
  __typename?: 'FormsDocAccessFields_emails_emailTo';
  create?: Maybe<FormsDocAccessFields_Emails_EmailTo_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_EmailTo_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_EmailTo_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_EmailTo_Update>;
};

export type FormsDocAccessFields_Emails_EmailTo_Create = {
  __typename?: 'FormsDocAccessFields_emails_emailTo_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailTo_Delete = {
  __typename?: 'FormsDocAccessFields_emails_emailTo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailTo_Read = {
  __typename?: 'FormsDocAccessFields_emails_emailTo_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailTo_Update = {
  __typename?: 'FormsDocAccessFields_emails_emailTo_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Id = {
  __typename?: 'FormsDocAccessFields_emails_id';
  create?: Maybe<FormsDocAccessFields_Emails_Id_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_Id_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_Id_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_Id_Update>;
};

export type FormsDocAccessFields_Emails_Id_Create = {
  __typename?: 'FormsDocAccessFields_emails_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Id_Delete = {
  __typename?: 'FormsDocAccessFields_emails_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Id_Read = {
  __typename?: 'FormsDocAccessFields_emails_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Id_Update = {
  __typename?: 'FormsDocAccessFields_emails_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Message = {
  __typename?: 'FormsDocAccessFields_emails_message';
  create?: Maybe<FormsDocAccessFields_Emails_Message_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_Message_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_Message_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_Message_Update>;
};

export type FormsDocAccessFields_Emails_Message_Create = {
  __typename?: 'FormsDocAccessFields_emails_message_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Message_Delete = {
  __typename?: 'FormsDocAccessFields_emails_message_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Message_Read = {
  __typename?: 'FormsDocAccessFields_emails_message_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Message_Update = {
  __typename?: 'FormsDocAccessFields_emails_message_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_ReplyTo = {
  __typename?: 'FormsDocAccessFields_emails_replyTo';
  create?: Maybe<FormsDocAccessFields_Emails_ReplyTo_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_ReplyTo_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_ReplyTo_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_ReplyTo_Update>;
};

export type FormsDocAccessFields_Emails_ReplyTo_Create = {
  __typename?: 'FormsDocAccessFields_emails_replyTo_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_ReplyTo_Delete = {
  __typename?: 'FormsDocAccessFields_emails_replyTo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_ReplyTo_Read = {
  __typename?: 'FormsDocAccessFields_emails_replyTo_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_ReplyTo_Update = {
  __typename?: 'FormsDocAccessFields_emails_replyTo_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Subject = {
  __typename?: 'FormsDocAccessFields_emails_subject';
  create?: Maybe<FormsDocAccessFields_Emails_Subject_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_Subject_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_Subject_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_Subject_Update>;
};

export type FormsDocAccessFields_Emails_Subject_Create = {
  __typename?: 'FormsDocAccessFields_emails_subject_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Subject_Delete = {
  __typename?: 'FormsDocAccessFields_emails_subject_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Subject_Read = {
  __typename?: 'FormsDocAccessFields_emails_subject_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Subject_Update = {
  __typename?: 'FormsDocAccessFields_emails_subject_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Fields = {
  __typename?: 'FormsDocAccessFields_fields';
  create?: Maybe<FormsDocAccessFields_Fields_Create>;
  delete?: Maybe<FormsDocAccessFields_Fields_Delete>;
  read?: Maybe<FormsDocAccessFields_Fields_Read>;
  update?: Maybe<FormsDocAccessFields_Fields_Update>;
};

export type FormsDocAccessFields_Fields_Create = {
  __typename?: 'FormsDocAccessFields_fields_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Fields_Delete = {
  __typename?: 'FormsDocAccessFields_fields_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Fields_Read = {
  __typename?: 'FormsDocAccessFields_fields_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Fields_Update = {
  __typename?: 'FormsDocAccessFields_fields_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect = {
  __typename?: 'FormsDocAccessFields_redirect';
  create?: Maybe<FormsDocAccessFields_Redirect_Create>;
  delete?: Maybe<FormsDocAccessFields_Redirect_Delete>;
  fields?: Maybe<FormsDocAccessFields_Redirect_Fields>;
  read?: Maybe<FormsDocAccessFields_Redirect_Read>;
  update?: Maybe<FormsDocAccessFields_Redirect_Update>;
};

export type FormsDocAccessFields_Redirect_Create = {
  __typename?: 'FormsDocAccessFields_redirect_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect_Delete = {
  __typename?: 'FormsDocAccessFields_redirect_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect_Fields = {
  __typename?: 'FormsDocAccessFields_redirect_Fields';
  url?: Maybe<FormsDocAccessFields_Redirect_Url>;
};

export type FormsDocAccessFields_Redirect_Read = {
  __typename?: 'FormsDocAccessFields_redirect_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect_Update = {
  __typename?: 'FormsDocAccessFields_redirect_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect_Url = {
  __typename?: 'FormsDocAccessFields_redirect_url';
  create?: Maybe<FormsDocAccessFields_Redirect_Url_Create>;
  delete?: Maybe<FormsDocAccessFields_Redirect_Url_Delete>;
  read?: Maybe<FormsDocAccessFields_Redirect_Url_Read>;
  update?: Maybe<FormsDocAccessFields_Redirect_Url_Update>;
};

export type FormsDocAccessFields_Redirect_Url_Create = {
  __typename?: 'FormsDocAccessFields_redirect_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect_Url_Delete = {
  __typename?: 'FormsDocAccessFields_redirect_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect_Url_Read = {
  __typename?: 'FormsDocAccessFields_redirect_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect_Url_Update = {
  __typename?: 'FormsDocAccessFields_redirect_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_SubmitButtonLabel = {
  __typename?: 'FormsDocAccessFields_submitButtonLabel';
  create?: Maybe<FormsDocAccessFields_SubmitButtonLabel_Create>;
  delete?: Maybe<FormsDocAccessFields_SubmitButtonLabel_Delete>;
  read?: Maybe<FormsDocAccessFields_SubmitButtonLabel_Read>;
  update?: Maybe<FormsDocAccessFields_SubmitButtonLabel_Update>;
};

export type FormsDocAccessFields_SubmitButtonLabel_Create = {
  __typename?: 'FormsDocAccessFields_submitButtonLabel_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_SubmitButtonLabel_Delete = {
  __typename?: 'FormsDocAccessFields_submitButtonLabel_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_SubmitButtonLabel_Read = {
  __typename?: 'FormsDocAccessFields_submitButtonLabel_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_SubmitButtonLabel_Update = {
  __typename?: 'FormsDocAccessFields_submitButtonLabel_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Title = {
  __typename?: 'FormsDocAccessFields_title';
  create?: Maybe<FormsDocAccessFields_Title_Create>;
  delete?: Maybe<FormsDocAccessFields_Title_Delete>;
  read?: Maybe<FormsDocAccessFields_Title_Read>;
  update?: Maybe<FormsDocAccessFields_Title_Update>;
};

export type FormsDocAccessFields_Title_Create = {
  __typename?: 'FormsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Title_Delete = {
  __typename?: 'FormsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Title_Read = {
  __typename?: 'FormsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Title_Update = {
  __typename?: 'FormsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_UpdatedAt = {
  __typename?: 'FormsDocAccessFields_updatedAt';
  create?: Maybe<FormsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<FormsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<FormsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<FormsDocAccessFields_UpdatedAt_Update>;
};

export type FormsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'FormsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'FormsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'FormsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'FormsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields = {
  __typename?: 'FormsFields';
  confirmationMessage?: Maybe<FormsFields_ConfirmationMessage>;
  confirmationType?: Maybe<FormsFields_ConfirmationType>;
  createdAt?: Maybe<FormsFields_CreatedAt>;
  emails?: Maybe<FormsFields_Emails>;
  fields?: Maybe<FormsFields_Fields>;
  redirect?: Maybe<FormsFields_Redirect>;
  submitButtonLabel?: Maybe<FormsFields_SubmitButtonLabel>;
  title?: Maybe<FormsFields_Title>;
  updatedAt?: Maybe<FormsFields_UpdatedAt>;
};

export type FormsFields_ConfirmationMessage = {
  __typename?: 'FormsFields_confirmationMessage';
  create?: Maybe<FormsFields_ConfirmationMessage_Create>;
  delete?: Maybe<FormsFields_ConfirmationMessage_Delete>;
  read?: Maybe<FormsFields_ConfirmationMessage_Read>;
  update?: Maybe<FormsFields_ConfirmationMessage_Update>;
};

export type FormsFields_ConfirmationMessage_Create = {
  __typename?: 'FormsFields_confirmationMessage_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_ConfirmationMessage_Delete = {
  __typename?: 'FormsFields_confirmationMessage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_ConfirmationMessage_Read = {
  __typename?: 'FormsFields_confirmationMessage_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_ConfirmationMessage_Update = {
  __typename?: 'FormsFields_confirmationMessage_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_ConfirmationType = {
  __typename?: 'FormsFields_confirmationType';
  create?: Maybe<FormsFields_ConfirmationType_Create>;
  delete?: Maybe<FormsFields_ConfirmationType_Delete>;
  read?: Maybe<FormsFields_ConfirmationType_Read>;
  update?: Maybe<FormsFields_ConfirmationType_Update>;
};

export type FormsFields_ConfirmationType_Create = {
  __typename?: 'FormsFields_confirmationType_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_ConfirmationType_Delete = {
  __typename?: 'FormsFields_confirmationType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_ConfirmationType_Read = {
  __typename?: 'FormsFields_confirmationType_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_ConfirmationType_Update = {
  __typename?: 'FormsFields_confirmationType_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_CreatedAt = {
  __typename?: 'FormsFields_createdAt';
  create?: Maybe<FormsFields_CreatedAt_Create>;
  delete?: Maybe<FormsFields_CreatedAt_Delete>;
  read?: Maybe<FormsFields_CreatedAt_Read>;
  update?: Maybe<FormsFields_CreatedAt_Update>;
};

export type FormsFields_CreatedAt_Create = {
  __typename?: 'FormsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_CreatedAt_Delete = {
  __typename?: 'FormsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_CreatedAt_Read = {
  __typename?: 'FormsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_CreatedAt_Update = {
  __typename?: 'FormsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails = {
  __typename?: 'FormsFields_emails';
  create?: Maybe<FormsFields_Emails_Create>;
  delete?: Maybe<FormsFields_Emails_Delete>;
  fields?: Maybe<FormsFields_Emails_Fields>;
  read?: Maybe<FormsFields_Emails_Read>;
  update?: Maybe<FormsFields_Emails_Update>;
};

export type FormsFields_Emails_Create = {
  __typename?: 'FormsFields_emails_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Delete = {
  __typename?: 'FormsFields_emails_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Fields = {
  __typename?: 'FormsFields_emails_Fields';
  bcc?: Maybe<FormsFields_Emails_Bcc>;
  cc?: Maybe<FormsFields_Emails_Cc>;
  emailFrom?: Maybe<FormsFields_Emails_EmailFrom>;
  emailTo?: Maybe<FormsFields_Emails_EmailTo>;
  id?: Maybe<FormsFields_Emails_Id>;
  message?: Maybe<FormsFields_Emails_Message>;
  replyTo?: Maybe<FormsFields_Emails_ReplyTo>;
  subject?: Maybe<FormsFields_Emails_Subject>;
};

export type FormsFields_Emails_Read = {
  __typename?: 'FormsFields_emails_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Update = {
  __typename?: 'FormsFields_emails_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Bcc = {
  __typename?: 'FormsFields_emails_bcc';
  create?: Maybe<FormsFields_Emails_Bcc_Create>;
  delete?: Maybe<FormsFields_Emails_Bcc_Delete>;
  read?: Maybe<FormsFields_Emails_Bcc_Read>;
  update?: Maybe<FormsFields_Emails_Bcc_Update>;
};

export type FormsFields_Emails_Bcc_Create = {
  __typename?: 'FormsFields_emails_bcc_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Bcc_Delete = {
  __typename?: 'FormsFields_emails_bcc_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Bcc_Read = {
  __typename?: 'FormsFields_emails_bcc_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Bcc_Update = {
  __typename?: 'FormsFields_emails_bcc_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Cc = {
  __typename?: 'FormsFields_emails_cc';
  create?: Maybe<FormsFields_Emails_Cc_Create>;
  delete?: Maybe<FormsFields_Emails_Cc_Delete>;
  read?: Maybe<FormsFields_Emails_Cc_Read>;
  update?: Maybe<FormsFields_Emails_Cc_Update>;
};

export type FormsFields_Emails_Cc_Create = {
  __typename?: 'FormsFields_emails_cc_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Cc_Delete = {
  __typename?: 'FormsFields_emails_cc_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Cc_Read = {
  __typename?: 'FormsFields_emails_cc_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Cc_Update = {
  __typename?: 'FormsFields_emails_cc_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailFrom = {
  __typename?: 'FormsFields_emails_emailFrom';
  create?: Maybe<FormsFields_Emails_EmailFrom_Create>;
  delete?: Maybe<FormsFields_Emails_EmailFrom_Delete>;
  read?: Maybe<FormsFields_Emails_EmailFrom_Read>;
  update?: Maybe<FormsFields_Emails_EmailFrom_Update>;
};

export type FormsFields_Emails_EmailFrom_Create = {
  __typename?: 'FormsFields_emails_emailFrom_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailFrom_Delete = {
  __typename?: 'FormsFields_emails_emailFrom_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailFrom_Read = {
  __typename?: 'FormsFields_emails_emailFrom_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailFrom_Update = {
  __typename?: 'FormsFields_emails_emailFrom_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailTo = {
  __typename?: 'FormsFields_emails_emailTo';
  create?: Maybe<FormsFields_Emails_EmailTo_Create>;
  delete?: Maybe<FormsFields_Emails_EmailTo_Delete>;
  read?: Maybe<FormsFields_Emails_EmailTo_Read>;
  update?: Maybe<FormsFields_Emails_EmailTo_Update>;
};

export type FormsFields_Emails_EmailTo_Create = {
  __typename?: 'FormsFields_emails_emailTo_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailTo_Delete = {
  __typename?: 'FormsFields_emails_emailTo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailTo_Read = {
  __typename?: 'FormsFields_emails_emailTo_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailTo_Update = {
  __typename?: 'FormsFields_emails_emailTo_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Id = {
  __typename?: 'FormsFields_emails_id';
  create?: Maybe<FormsFields_Emails_Id_Create>;
  delete?: Maybe<FormsFields_Emails_Id_Delete>;
  read?: Maybe<FormsFields_Emails_Id_Read>;
  update?: Maybe<FormsFields_Emails_Id_Update>;
};

export type FormsFields_Emails_Id_Create = {
  __typename?: 'FormsFields_emails_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Id_Delete = {
  __typename?: 'FormsFields_emails_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Id_Read = {
  __typename?: 'FormsFields_emails_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Id_Update = {
  __typename?: 'FormsFields_emails_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Message = {
  __typename?: 'FormsFields_emails_message';
  create?: Maybe<FormsFields_Emails_Message_Create>;
  delete?: Maybe<FormsFields_Emails_Message_Delete>;
  read?: Maybe<FormsFields_Emails_Message_Read>;
  update?: Maybe<FormsFields_Emails_Message_Update>;
};

export type FormsFields_Emails_Message_Create = {
  __typename?: 'FormsFields_emails_message_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Message_Delete = {
  __typename?: 'FormsFields_emails_message_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Message_Read = {
  __typename?: 'FormsFields_emails_message_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Message_Update = {
  __typename?: 'FormsFields_emails_message_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_ReplyTo = {
  __typename?: 'FormsFields_emails_replyTo';
  create?: Maybe<FormsFields_Emails_ReplyTo_Create>;
  delete?: Maybe<FormsFields_Emails_ReplyTo_Delete>;
  read?: Maybe<FormsFields_Emails_ReplyTo_Read>;
  update?: Maybe<FormsFields_Emails_ReplyTo_Update>;
};

export type FormsFields_Emails_ReplyTo_Create = {
  __typename?: 'FormsFields_emails_replyTo_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_ReplyTo_Delete = {
  __typename?: 'FormsFields_emails_replyTo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_ReplyTo_Read = {
  __typename?: 'FormsFields_emails_replyTo_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_ReplyTo_Update = {
  __typename?: 'FormsFields_emails_replyTo_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Subject = {
  __typename?: 'FormsFields_emails_subject';
  create?: Maybe<FormsFields_Emails_Subject_Create>;
  delete?: Maybe<FormsFields_Emails_Subject_Delete>;
  read?: Maybe<FormsFields_Emails_Subject_Read>;
  update?: Maybe<FormsFields_Emails_Subject_Update>;
};

export type FormsFields_Emails_Subject_Create = {
  __typename?: 'FormsFields_emails_subject_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Subject_Delete = {
  __typename?: 'FormsFields_emails_subject_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Subject_Read = {
  __typename?: 'FormsFields_emails_subject_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Subject_Update = {
  __typename?: 'FormsFields_emails_subject_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Fields = {
  __typename?: 'FormsFields_fields';
  create?: Maybe<FormsFields_Fields_Create>;
  delete?: Maybe<FormsFields_Fields_Delete>;
  read?: Maybe<FormsFields_Fields_Read>;
  update?: Maybe<FormsFields_Fields_Update>;
};

export type FormsFields_Fields_Create = {
  __typename?: 'FormsFields_fields_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Fields_Delete = {
  __typename?: 'FormsFields_fields_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Fields_Read = {
  __typename?: 'FormsFields_fields_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Fields_Update = {
  __typename?: 'FormsFields_fields_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect = {
  __typename?: 'FormsFields_redirect';
  create?: Maybe<FormsFields_Redirect_Create>;
  delete?: Maybe<FormsFields_Redirect_Delete>;
  fields?: Maybe<FormsFields_Redirect_Fields>;
  read?: Maybe<FormsFields_Redirect_Read>;
  update?: Maybe<FormsFields_Redirect_Update>;
};

export type FormsFields_Redirect_Create = {
  __typename?: 'FormsFields_redirect_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect_Delete = {
  __typename?: 'FormsFields_redirect_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect_Fields = {
  __typename?: 'FormsFields_redirect_Fields';
  url?: Maybe<FormsFields_Redirect_Url>;
};

export type FormsFields_Redirect_Read = {
  __typename?: 'FormsFields_redirect_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect_Update = {
  __typename?: 'FormsFields_redirect_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect_Url = {
  __typename?: 'FormsFields_redirect_url';
  create?: Maybe<FormsFields_Redirect_Url_Create>;
  delete?: Maybe<FormsFields_Redirect_Url_Delete>;
  read?: Maybe<FormsFields_Redirect_Url_Read>;
  update?: Maybe<FormsFields_Redirect_Url_Update>;
};

export type FormsFields_Redirect_Url_Create = {
  __typename?: 'FormsFields_redirect_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect_Url_Delete = {
  __typename?: 'FormsFields_redirect_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect_Url_Read = {
  __typename?: 'FormsFields_redirect_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect_Url_Update = {
  __typename?: 'FormsFields_redirect_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_SubmitButtonLabel = {
  __typename?: 'FormsFields_submitButtonLabel';
  create?: Maybe<FormsFields_SubmitButtonLabel_Create>;
  delete?: Maybe<FormsFields_SubmitButtonLabel_Delete>;
  read?: Maybe<FormsFields_SubmitButtonLabel_Read>;
  update?: Maybe<FormsFields_SubmitButtonLabel_Update>;
};

export type FormsFields_SubmitButtonLabel_Create = {
  __typename?: 'FormsFields_submitButtonLabel_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_SubmitButtonLabel_Delete = {
  __typename?: 'FormsFields_submitButtonLabel_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_SubmitButtonLabel_Read = {
  __typename?: 'FormsFields_submitButtonLabel_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_SubmitButtonLabel_Update = {
  __typename?: 'FormsFields_submitButtonLabel_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Title = {
  __typename?: 'FormsFields_title';
  create?: Maybe<FormsFields_Title_Create>;
  delete?: Maybe<FormsFields_Title_Delete>;
  read?: Maybe<FormsFields_Title_Read>;
  update?: Maybe<FormsFields_Title_Update>;
};

export type FormsFields_Title_Create = {
  __typename?: 'FormsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Title_Delete = {
  __typename?: 'FormsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Title_Read = {
  __typename?: 'FormsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Title_Update = {
  __typename?: 'FormsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_UpdatedAt = {
  __typename?: 'FormsFields_updatedAt';
  create?: Maybe<FormsFields_UpdatedAt_Create>;
  delete?: Maybe<FormsFields_UpdatedAt_Delete>;
  read?: Maybe<FormsFields_UpdatedAt_Read>;
  update?: Maybe<FormsFields_UpdatedAt_Update>;
};

export type FormsFields_UpdatedAt_Create = {
  __typename?: 'FormsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_UpdatedAt_Delete = {
  __typename?: 'FormsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_UpdatedAt_Read = {
  __typename?: 'FormsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_UpdatedAt_Update = {
  __typename?: 'FormsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsReadAccess = {
  __typename?: 'FormsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormsReadDocAccess = {
  __typename?: 'FormsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormsUpdateAccess = {
  __typename?: 'FormsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormsUpdateDocAccess = {
  __typename?: 'FormsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Header = {
  __typename?: 'Header';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  icon?: Maybe<SvgMedia>;
  navButtons?: Maybe<Array<Header_NavButtons>>;
  navItems?: Maybe<Array<Header_NavItems>>;
  slogan?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type HeaderIconArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type HeaderDocAccessFields = {
  __typename?: 'HeaderDocAccessFields';
  createdAt?: Maybe<HeaderDocAccessFields_CreatedAt>;
  icon?: Maybe<HeaderDocAccessFields_Icon>;
  navButtons?: Maybe<HeaderDocAccessFields_NavButtons>;
  navItems?: Maybe<HeaderDocAccessFields_NavItems>;
  slogan?: Maybe<HeaderDocAccessFields_Slogan>;
  updatedAt?: Maybe<HeaderDocAccessFields_UpdatedAt>;
};

export type HeaderDocAccessFields_CreatedAt = {
  __typename?: 'HeaderDocAccessFields_createdAt';
  create?: Maybe<HeaderDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<HeaderDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<HeaderDocAccessFields_CreatedAt_Read>;
  update?: Maybe<HeaderDocAccessFields_CreatedAt_Update>;
};

export type HeaderDocAccessFields_CreatedAt_Create = {
  __typename?: 'HeaderDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_CreatedAt_Delete = {
  __typename?: 'HeaderDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_CreatedAt_Read = {
  __typename?: 'HeaderDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_CreatedAt_Update = {
  __typename?: 'HeaderDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_Icon = {
  __typename?: 'HeaderDocAccessFields_icon';
  create?: Maybe<HeaderDocAccessFields_Icon_Create>;
  delete?: Maybe<HeaderDocAccessFields_Icon_Delete>;
  read?: Maybe<HeaderDocAccessFields_Icon_Read>;
  update?: Maybe<HeaderDocAccessFields_Icon_Update>;
};

export type HeaderDocAccessFields_Icon_Create = {
  __typename?: 'HeaderDocAccessFields_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_Icon_Delete = {
  __typename?: 'HeaderDocAccessFields_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_Icon_Read = {
  __typename?: 'HeaderDocAccessFields_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_Icon_Update = {
  __typename?: 'HeaderDocAccessFields_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons = {
  __typename?: 'HeaderDocAccessFields_navButtons';
  create?: Maybe<HeaderDocAccessFields_NavButtons_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavButtons_Delete>;
  fields?: Maybe<HeaderDocAccessFields_NavButtons_Fields>;
  read?: Maybe<HeaderDocAccessFields_NavButtons_Read>;
  update?: Maybe<HeaderDocAccessFields_NavButtons_Update>;
};

export type HeaderDocAccessFields_NavButtons_Create = {
  __typename?: 'HeaderDocAccessFields_navButtons_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Delete = {
  __typename?: 'HeaderDocAccessFields_navButtons_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Fields = {
  __typename?: 'HeaderDocAccessFields_navButtons_Fields';
  id?: Maybe<HeaderDocAccessFields_NavButtons_Id>;
  link?: Maybe<HeaderDocAccessFields_NavButtons_Link>;
};

export type HeaderDocAccessFields_NavButtons_Read = {
  __typename?: 'HeaderDocAccessFields_navButtons_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Update = {
  __typename?: 'HeaderDocAccessFields_navButtons_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Id = {
  __typename?: 'HeaderDocAccessFields_navButtons_id';
  create?: Maybe<HeaderDocAccessFields_NavButtons_Id_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavButtons_Id_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavButtons_Id_Read>;
  update?: Maybe<HeaderDocAccessFields_NavButtons_Id_Update>;
};

export type HeaderDocAccessFields_NavButtons_Id_Create = {
  __typename?: 'HeaderDocAccessFields_navButtons_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Id_Delete = {
  __typename?: 'HeaderDocAccessFields_navButtons_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Id_Read = {
  __typename?: 'HeaderDocAccessFields_navButtons_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Id_Update = {
  __typename?: 'HeaderDocAccessFields_navButtons_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link = {
  __typename?: 'HeaderDocAccessFields_navButtons_link';
  create?: Maybe<HeaderDocAccessFields_NavButtons_Link_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavButtons_Link_Delete>;
  fields?: Maybe<HeaderDocAccessFields_NavButtons_Link_Fields>;
  read?: Maybe<HeaderDocAccessFields_NavButtons_Link_Read>;
  update?: Maybe<HeaderDocAccessFields_NavButtons_Link_Update>;
};

export type HeaderDocAccessFields_NavButtons_Link_Create = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Delete = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Fields = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_Fields';
  label?: Maybe<HeaderDocAccessFields_NavButtons_Link_Label>;
  newTab?: Maybe<HeaderDocAccessFields_NavButtons_Link_NewTab>;
  reference?: Maybe<HeaderDocAccessFields_NavButtons_Link_Reference>;
  type?: Maybe<HeaderDocAccessFields_NavButtons_Link_Type>;
  url?: Maybe<HeaderDocAccessFields_NavButtons_Link_Url>;
};

export type HeaderDocAccessFields_NavButtons_Link_Read = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Update = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Label = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_label';
  create?: Maybe<HeaderDocAccessFields_NavButtons_Link_Label_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavButtons_Link_Label_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavButtons_Link_Label_Read>;
  update?: Maybe<HeaderDocAccessFields_NavButtons_Link_Label_Update>;
};

export type HeaderDocAccessFields_NavButtons_Link_Label_Create = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Label_Delete = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Label_Read = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Label_Update = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_NewTab = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_newTab';
  create?: Maybe<HeaderDocAccessFields_NavButtons_Link_NewTab_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavButtons_Link_NewTab_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavButtons_Link_NewTab_Read>;
  update?: Maybe<HeaderDocAccessFields_NavButtons_Link_NewTab_Update>;
};

export type HeaderDocAccessFields_NavButtons_Link_NewTab_Create = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_newTab_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_NewTab_Delete = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_newTab_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_NewTab_Read = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_newTab_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_NewTab_Update = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_newTab_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Reference = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_reference';
  create?: Maybe<HeaderDocAccessFields_NavButtons_Link_Reference_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavButtons_Link_Reference_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavButtons_Link_Reference_Read>;
  update?: Maybe<HeaderDocAccessFields_NavButtons_Link_Reference_Update>;
};

export type HeaderDocAccessFields_NavButtons_Link_Reference_Create = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_reference_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Reference_Delete = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_reference_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Reference_Read = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_reference_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Reference_Update = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_reference_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Type = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_type';
  create?: Maybe<HeaderDocAccessFields_NavButtons_Link_Type_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavButtons_Link_Type_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavButtons_Link_Type_Read>;
  update?: Maybe<HeaderDocAccessFields_NavButtons_Link_Type_Update>;
};

export type HeaderDocAccessFields_NavButtons_Link_Type_Create = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Type_Delete = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Type_Read = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Type_Update = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Url = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_url';
  create?: Maybe<HeaderDocAccessFields_NavButtons_Link_Url_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavButtons_Link_Url_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavButtons_Link_Url_Read>;
  update?: Maybe<HeaderDocAccessFields_NavButtons_Link_Url_Update>;
};

export type HeaderDocAccessFields_NavButtons_Link_Url_Create = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Url_Delete = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Url_Read = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Url_Update = {
  __typename?: 'HeaderDocAccessFields_navButtons_link_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems = {
  __typename?: 'HeaderDocAccessFields_navItems';
  create?: Maybe<HeaderDocAccessFields_NavItems_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavItems_Delete>;
  fields?: Maybe<HeaderDocAccessFields_NavItems_Fields>;
  read?: Maybe<HeaderDocAccessFields_NavItems_Read>;
  update?: Maybe<HeaderDocAccessFields_NavItems_Update>;
};

export type HeaderDocAccessFields_NavItems_Create = {
  __typename?: 'HeaderDocAccessFields_navItems_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Delete = {
  __typename?: 'HeaderDocAccessFields_navItems_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Fields = {
  __typename?: 'HeaderDocAccessFields_navItems_Fields';
  id?: Maybe<HeaderDocAccessFields_NavItems_Id>;
  link?: Maybe<HeaderDocAccessFields_NavItems_Link>;
};

export type HeaderDocAccessFields_NavItems_Read = {
  __typename?: 'HeaderDocAccessFields_navItems_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Update = {
  __typename?: 'HeaderDocAccessFields_navItems_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Id = {
  __typename?: 'HeaderDocAccessFields_navItems_id';
  create?: Maybe<HeaderDocAccessFields_NavItems_Id_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavItems_Id_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavItems_Id_Read>;
  update?: Maybe<HeaderDocAccessFields_NavItems_Id_Update>;
};

export type HeaderDocAccessFields_NavItems_Id_Create = {
  __typename?: 'HeaderDocAccessFields_navItems_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Id_Delete = {
  __typename?: 'HeaderDocAccessFields_navItems_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Id_Read = {
  __typename?: 'HeaderDocAccessFields_navItems_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Id_Update = {
  __typename?: 'HeaderDocAccessFields_navItems_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link = {
  __typename?: 'HeaderDocAccessFields_navItems_link';
  create?: Maybe<HeaderDocAccessFields_NavItems_Link_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavItems_Link_Delete>;
  fields?: Maybe<HeaderDocAccessFields_NavItems_Link_Fields>;
  read?: Maybe<HeaderDocAccessFields_NavItems_Link_Read>;
  update?: Maybe<HeaderDocAccessFields_NavItems_Link_Update>;
};

export type HeaderDocAccessFields_NavItems_Link_Create = {
  __typename?: 'HeaderDocAccessFields_navItems_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Delete = {
  __typename?: 'HeaderDocAccessFields_navItems_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Fields = {
  __typename?: 'HeaderDocAccessFields_navItems_link_Fields';
  label?: Maybe<HeaderDocAccessFields_NavItems_Link_Label>;
  newTab?: Maybe<HeaderDocAccessFields_NavItems_Link_NewTab>;
  reference?: Maybe<HeaderDocAccessFields_NavItems_Link_Reference>;
  type?: Maybe<HeaderDocAccessFields_NavItems_Link_Type>;
  url?: Maybe<HeaderDocAccessFields_NavItems_Link_Url>;
};

export type HeaderDocAccessFields_NavItems_Link_Read = {
  __typename?: 'HeaderDocAccessFields_navItems_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Update = {
  __typename?: 'HeaderDocAccessFields_navItems_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Label = {
  __typename?: 'HeaderDocAccessFields_navItems_link_label';
  create?: Maybe<HeaderDocAccessFields_NavItems_Link_Label_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavItems_Link_Label_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavItems_Link_Label_Read>;
  update?: Maybe<HeaderDocAccessFields_NavItems_Link_Label_Update>;
};

export type HeaderDocAccessFields_NavItems_Link_Label_Create = {
  __typename?: 'HeaderDocAccessFields_navItems_link_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Label_Delete = {
  __typename?: 'HeaderDocAccessFields_navItems_link_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Label_Read = {
  __typename?: 'HeaderDocAccessFields_navItems_link_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Label_Update = {
  __typename?: 'HeaderDocAccessFields_navItems_link_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_NewTab = {
  __typename?: 'HeaderDocAccessFields_navItems_link_newTab';
  create?: Maybe<HeaderDocAccessFields_NavItems_Link_NewTab_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavItems_Link_NewTab_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavItems_Link_NewTab_Read>;
  update?: Maybe<HeaderDocAccessFields_NavItems_Link_NewTab_Update>;
};

export type HeaderDocAccessFields_NavItems_Link_NewTab_Create = {
  __typename?: 'HeaderDocAccessFields_navItems_link_newTab_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_NewTab_Delete = {
  __typename?: 'HeaderDocAccessFields_navItems_link_newTab_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_NewTab_Read = {
  __typename?: 'HeaderDocAccessFields_navItems_link_newTab_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_NewTab_Update = {
  __typename?: 'HeaderDocAccessFields_navItems_link_newTab_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Reference = {
  __typename?: 'HeaderDocAccessFields_navItems_link_reference';
  create?: Maybe<HeaderDocAccessFields_NavItems_Link_Reference_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavItems_Link_Reference_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavItems_Link_Reference_Read>;
  update?: Maybe<HeaderDocAccessFields_NavItems_Link_Reference_Update>;
};

export type HeaderDocAccessFields_NavItems_Link_Reference_Create = {
  __typename?: 'HeaderDocAccessFields_navItems_link_reference_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Reference_Delete = {
  __typename?: 'HeaderDocAccessFields_navItems_link_reference_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Reference_Read = {
  __typename?: 'HeaderDocAccessFields_navItems_link_reference_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Reference_Update = {
  __typename?: 'HeaderDocAccessFields_navItems_link_reference_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Type = {
  __typename?: 'HeaderDocAccessFields_navItems_link_type';
  create?: Maybe<HeaderDocAccessFields_NavItems_Link_Type_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavItems_Link_Type_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavItems_Link_Type_Read>;
  update?: Maybe<HeaderDocAccessFields_NavItems_Link_Type_Update>;
};

export type HeaderDocAccessFields_NavItems_Link_Type_Create = {
  __typename?: 'HeaderDocAccessFields_navItems_link_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Type_Delete = {
  __typename?: 'HeaderDocAccessFields_navItems_link_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Type_Read = {
  __typename?: 'HeaderDocAccessFields_navItems_link_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Type_Update = {
  __typename?: 'HeaderDocAccessFields_navItems_link_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Url = {
  __typename?: 'HeaderDocAccessFields_navItems_link_url';
  create?: Maybe<HeaderDocAccessFields_NavItems_Link_Url_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavItems_Link_Url_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavItems_Link_Url_Read>;
  update?: Maybe<HeaderDocAccessFields_NavItems_Link_Url_Update>;
};

export type HeaderDocAccessFields_NavItems_Link_Url_Create = {
  __typename?: 'HeaderDocAccessFields_navItems_link_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Url_Delete = {
  __typename?: 'HeaderDocAccessFields_navItems_link_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Url_Read = {
  __typename?: 'HeaderDocAccessFields_navItems_link_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Url_Update = {
  __typename?: 'HeaderDocAccessFields_navItems_link_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_Slogan = {
  __typename?: 'HeaderDocAccessFields_slogan';
  create?: Maybe<HeaderDocAccessFields_Slogan_Create>;
  delete?: Maybe<HeaderDocAccessFields_Slogan_Delete>;
  read?: Maybe<HeaderDocAccessFields_Slogan_Read>;
  update?: Maybe<HeaderDocAccessFields_Slogan_Update>;
};

export type HeaderDocAccessFields_Slogan_Create = {
  __typename?: 'HeaderDocAccessFields_slogan_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_Slogan_Delete = {
  __typename?: 'HeaderDocAccessFields_slogan_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_Slogan_Read = {
  __typename?: 'HeaderDocAccessFields_slogan_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_Slogan_Update = {
  __typename?: 'HeaderDocAccessFields_slogan_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_UpdatedAt = {
  __typename?: 'HeaderDocAccessFields_updatedAt';
  create?: Maybe<HeaderDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<HeaderDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<HeaderDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<HeaderDocAccessFields_UpdatedAt_Update>;
};

export type HeaderDocAccessFields_UpdatedAt_Create = {
  __typename?: 'HeaderDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'HeaderDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_UpdatedAt_Read = {
  __typename?: 'HeaderDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_UpdatedAt_Update = {
  __typename?: 'HeaderDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields = {
  __typename?: 'HeaderFields';
  createdAt?: Maybe<HeaderFields_CreatedAt>;
  icon?: Maybe<HeaderFields_Icon>;
  navButtons?: Maybe<HeaderFields_NavButtons>;
  navItems?: Maybe<HeaderFields_NavItems>;
  slogan?: Maybe<HeaderFields_Slogan>;
  updatedAt?: Maybe<HeaderFields_UpdatedAt>;
};

export type HeaderFields_CreatedAt = {
  __typename?: 'HeaderFields_createdAt';
  create?: Maybe<HeaderFields_CreatedAt_Create>;
  delete?: Maybe<HeaderFields_CreatedAt_Delete>;
  read?: Maybe<HeaderFields_CreatedAt_Read>;
  update?: Maybe<HeaderFields_CreatedAt_Update>;
};

export type HeaderFields_CreatedAt_Create = {
  __typename?: 'HeaderFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_CreatedAt_Delete = {
  __typename?: 'HeaderFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_CreatedAt_Read = {
  __typename?: 'HeaderFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_CreatedAt_Update = {
  __typename?: 'HeaderFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_Icon = {
  __typename?: 'HeaderFields_icon';
  create?: Maybe<HeaderFields_Icon_Create>;
  delete?: Maybe<HeaderFields_Icon_Delete>;
  read?: Maybe<HeaderFields_Icon_Read>;
  update?: Maybe<HeaderFields_Icon_Update>;
};

export type HeaderFields_Icon_Create = {
  __typename?: 'HeaderFields_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_Icon_Delete = {
  __typename?: 'HeaderFields_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_Icon_Read = {
  __typename?: 'HeaderFields_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_Icon_Update = {
  __typename?: 'HeaderFields_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons = {
  __typename?: 'HeaderFields_navButtons';
  create?: Maybe<HeaderFields_NavButtons_Create>;
  delete?: Maybe<HeaderFields_NavButtons_Delete>;
  fields?: Maybe<HeaderFields_NavButtons_Fields>;
  read?: Maybe<HeaderFields_NavButtons_Read>;
  update?: Maybe<HeaderFields_NavButtons_Update>;
};

export type HeaderFields_NavButtons_Create = {
  __typename?: 'HeaderFields_navButtons_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Delete = {
  __typename?: 'HeaderFields_navButtons_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Fields = {
  __typename?: 'HeaderFields_navButtons_Fields';
  id?: Maybe<HeaderFields_NavButtons_Id>;
  link?: Maybe<HeaderFields_NavButtons_Link>;
};

export type HeaderFields_NavButtons_Read = {
  __typename?: 'HeaderFields_navButtons_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Update = {
  __typename?: 'HeaderFields_navButtons_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Id = {
  __typename?: 'HeaderFields_navButtons_id';
  create?: Maybe<HeaderFields_NavButtons_Id_Create>;
  delete?: Maybe<HeaderFields_NavButtons_Id_Delete>;
  read?: Maybe<HeaderFields_NavButtons_Id_Read>;
  update?: Maybe<HeaderFields_NavButtons_Id_Update>;
};

export type HeaderFields_NavButtons_Id_Create = {
  __typename?: 'HeaderFields_navButtons_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Id_Delete = {
  __typename?: 'HeaderFields_navButtons_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Id_Read = {
  __typename?: 'HeaderFields_navButtons_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Id_Update = {
  __typename?: 'HeaderFields_navButtons_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link = {
  __typename?: 'HeaderFields_navButtons_link';
  create?: Maybe<HeaderFields_NavButtons_Link_Create>;
  delete?: Maybe<HeaderFields_NavButtons_Link_Delete>;
  fields?: Maybe<HeaderFields_NavButtons_Link_Fields>;
  read?: Maybe<HeaderFields_NavButtons_Link_Read>;
  update?: Maybe<HeaderFields_NavButtons_Link_Update>;
};

export type HeaderFields_NavButtons_Link_Create = {
  __typename?: 'HeaderFields_navButtons_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Delete = {
  __typename?: 'HeaderFields_navButtons_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Fields = {
  __typename?: 'HeaderFields_navButtons_link_Fields';
  label?: Maybe<HeaderFields_NavButtons_Link_Label>;
  newTab?: Maybe<HeaderFields_NavButtons_Link_NewTab>;
  reference?: Maybe<HeaderFields_NavButtons_Link_Reference>;
  type?: Maybe<HeaderFields_NavButtons_Link_Type>;
  url?: Maybe<HeaderFields_NavButtons_Link_Url>;
};

export type HeaderFields_NavButtons_Link_Read = {
  __typename?: 'HeaderFields_navButtons_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Update = {
  __typename?: 'HeaderFields_navButtons_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Label = {
  __typename?: 'HeaderFields_navButtons_link_label';
  create?: Maybe<HeaderFields_NavButtons_Link_Label_Create>;
  delete?: Maybe<HeaderFields_NavButtons_Link_Label_Delete>;
  read?: Maybe<HeaderFields_NavButtons_Link_Label_Read>;
  update?: Maybe<HeaderFields_NavButtons_Link_Label_Update>;
};

export type HeaderFields_NavButtons_Link_Label_Create = {
  __typename?: 'HeaderFields_navButtons_link_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Label_Delete = {
  __typename?: 'HeaderFields_navButtons_link_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Label_Read = {
  __typename?: 'HeaderFields_navButtons_link_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Label_Update = {
  __typename?: 'HeaderFields_navButtons_link_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_NewTab = {
  __typename?: 'HeaderFields_navButtons_link_newTab';
  create?: Maybe<HeaderFields_NavButtons_Link_NewTab_Create>;
  delete?: Maybe<HeaderFields_NavButtons_Link_NewTab_Delete>;
  read?: Maybe<HeaderFields_NavButtons_Link_NewTab_Read>;
  update?: Maybe<HeaderFields_NavButtons_Link_NewTab_Update>;
};

export type HeaderFields_NavButtons_Link_NewTab_Create = {
  __typename?: 'HeaderFields_navButtons_link_newTab_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_NewTab_Delete = {
  __typename?: 'HeaderFields_navButtons_link_newTab_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_NewTab_Read = {
  __typename?: 'HeaderFields_navButtons_link_newTab_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_NewTab_Update = {
  __typename?: 'HeaderFields_navButtons_link_newTab_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Reference = {
  __typename?: 'HeaderFields_navButtons_link_reference';
  create?: Maybe<HeaderFields_NavButtons_Link_Reference_Create>;
  delete?: Maybe<HeaderFields_NavButtons_Link_Reference_Delete>;
  read?: Maybe<HeaderFields_NavButtons_Link_Reference_Read>;
  update?: Maybe<HeaderFields_NavButtons_Link_Reference_Update>;
};

export type HeaderFields_NavButtons_Link_Reference_Create = {
  __typename?: 'HeaderFields_navButtons_link_reference_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Reference_Delete = {
  __typename?: 'HeaderFields_navButtons_link_reference_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Reference_Read = {
  __typename?: 'HeaderFields_navButtons_link_reference_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Reference_Update = {
  __typename?: 'HeaderFields_navButtons_link_reference_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Type = {
  __typename?: 'HeaderFields_navButtons_link_type';
  create?: Maybe<HeaderFields_NavButtons_Link_Type_Create>;
  delete?: Maybe<HeaderFields_NavButtons_Link_Type_Delete>;
  read?: Maybe<HeaderFields_NavButtons_Link_Type_Read>;
  update?: Maybe<HeaderFields_NavButtons_Link_Type_Update>;
};

export type HeaderFields_NavButtons_Link_Type_Create = {
  __typename?: 'HeaderFields_navButtons_link_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Type_Delete = {
  __typename?: 'HeaderFields_navButtons_link_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Type_Read = {
  __typename?: 'HeaderFields_navButtons_link_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Type_Update = {
  __typename?: 'HeaderFields_navButtons_link_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Url = {
  __typename?: 'HeaderFields_navButtons_link_url';
  create?: Maybe<HeaderFields_NavButtons_Link_Url_Create>;
  delete?: Maybe<HeaderFields_NavButtons_Link_Url_Delete>;
  read?: Maybe<HeaderFields_NavButtons_Link_Url_Read>;
  update?: Maybe<HeaderFields_NavButtons_Link_Url_Update>;
};

export type HeaderFields_NavButtons_Link_Url_Create = {
  __typename?: 'HeaderFields_navButtons_link_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Url_Delete = {
  __typename?: 'HeaderFields_navButtons_link_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Url_Read = {
  __typename?: 'HeaderFields_navButtons_link_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Url_Update = {
  __typename?: 'HeaderFields_navButtons_link_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems = {
  __typename?: 'HeaderFields_navItems';
  create?: Maybe<HeaderFields_NavItems_Create>;
  delete?: Maybe<HeaderFields_NavItems_Delete>;
  fields?: Maybe<HeaderFields_NavItems_Fields>;
  read?: Maybe<HeaderFields_NavItems_Read>;
  update?: Maybe<HeaderFields_NavItems_Update>;
};

export type HeaderFields_NavItems_Create = {
  __typename?: 'HeaderFields_navItems_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Delete = {
  __typename?: 'HeaderFields_navItems_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Fields = {
  __typename?: 'HeaderFields_navItems_Fields';
  id?: Maybe<HeaderFields_NavItems_Id>;
  link?: Maybe<HeaderFields_NavItems_Link>;
};

export type HeaderFields_NavItems_Read = {
  __typename?: 'HeaderFields_navItems_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Update = {
  __typename?: 'HeaderFields_navItems_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Id = {
  __typename?: 'HeaderFields_navItems_id';
  create?: Maybe<HeaderFields_NavItems_Id_Create>;
  delete?: Maybe<HeaderFields_NavItems_Id_Delete>;
  read?: Maybe<HeaderFields_NavItems_Id_Read>;
  update?: Maybe<HeaderFields_NavItems_Id_Update>;
};

export type HeaderFields_NavItems_Id_Create = {
  __typename?: 'HeaderFields_navItems_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Id_Delete = {
  __typename?: 'HeaderFields_navItems_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Id_Read = {
  __typename?: 'HeaderFields_navItems_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Id_Update = {
  __typename?: 'HeaderFields_navItems_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link = {
  __typename?: 'HeaderFields_navItems_link';
  create?: Maybe<HeaderFields_NavItems_Link_Create>;
  delete?: Maybe<HeaderFields_NavItems_Link_Delete>;
  fields?: Maybe<HeaderFields_NavItems_Link_Fields>;
  read?: Maybe<HeaderFields_NavItems_Link_Read>;
  update?: Maybe<HeaderFields_NavItems_Link_Update>;
};

export type HeaderFields_NavItems_Link_Create = {
  __typename?: 'HeaderFields_navItems_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Delete = {
  __typename?: 'HeaderFields_navItems_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Fields = {
  __typename?: 'HeaderFields_navItems_link_Fields';
  label?: Maybe<HeaderFields_NavItems_Link_Label>;
  newTab?: Maybe<HeaderFields_NavItems_Link_NewTab>;
  reference?: Maybe<HeaderFields_NavItems_Link_Reference>;
  type?: Maybe<HeaderFields_NavItems_Link_Type>;
  url?: Maybe<HeaderFields_NavItems_Link_Url>;
};

export type HeaderFields_NavItems_Link_Read = {
  __typename?: 'HeaderFields_navItems_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Update = {
  __typename?: 'HeaderFields_navItems_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Label = {
  __typename?: 'HeaderFields_navItems_link_label';
  create?: Maybe<HeaderFields_NavItems_Link_Label_Create>;
  delete?: Maybe<HeaderFields_NavItems_Link_Label_Delete>;
  read?: Maybe<HeaderFields_NavItems_Link_Label_Read>;
  update?: Maybe<HeaderFields_NavItems_Link_Label_Update>;
};

export type HeaderFields_NavItems_Link_Label_Create = {
  __typename?: 'HeaderFields_navItems_link_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Label_Delete = {
  __typename?: 'HeaderFields_navItems_link_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Label_Read = {
  __typename?: 'HeaderFields_navItems_link_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Label_Update = {
  __typename?: 'HeaderFields_navItems_link_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_NewTab = {
  __typename?: 'HeaderFields_navItems_link_newTab';
  create?: Maybe<HeaderFields_NavItems_Link_NewTab_Create>;
  delete?: Maybe<HeaderFields_NavItems_Link_NewTab_Delete>;
  read?: Maybe<HeaderFields_NavItems_Link_NewTab_Read>;
  update?: Maybe<HeaderFields_NavItems_Link_NewTab_Update>;
};

export type HeaderFields_NavItems_Link_NewTab_Create = {
  __typename?: 'HeaderFields_navItems_link_newTab_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_NewTab_Delete = {
  __typename?: 'HeaderFields_navItems_link_newTab_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_NewTab_Read = {
  __typename?: 'HeaderFields_navItems_link_newTab_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_NewTab_Update = {
  __typename?: 'HeaderFields_navItems_link_newTab_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Reference = {
  __typename?: 'HeaderFields_navItems_link_reference';
  create?: Maybe<HeaderFields_NavItems_Link_Reference_Create>;
  delete?: Maybe<HeaderFields_NavItems_Link_Reference_Delete>;
  read?: Maybe<HeaderFields_NavItems_Link_Reference_Read>;
  update?: Maybe<HeaderFields_NavItems_Link_Reference_Update>;
};

export type HeaderFields_NavItems_Link_Reference_Create = {
  __typename?: 'HeaderFields_navItems_link_reference_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Reference_Delete = {
  __typename?: 'HeaderFields_navItems_link_reference_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Reference_Read = {
  __typename?: 'HeaderFields_navItems_link_reference_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Reference_Update = {
  __typename?: 'HeaderFields_navItems_link_reference_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Type = {
  __typename?: 'HeaderFields_navItems_link_type';
  create?: Maybe<HeaderFields_NavItems_Link_Type_Create>;
  delete?: Maybe<HeaderFields_NavItems_Link_Type_Delete>;
  read?: Maybe<HeaderFields_NavItems_Link_Type_Read>;
  update?: Maybe<HeaderFields_NavItems_Link_Type_Update>;
};

export type HeaderFields_NavItems_Link_Type_Create = {
  __typename?: 'HeaderFields_navItems_link_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Type_Delete = {
  __typename?: 'HeaderFields_navItems_link_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Type_Read = {
  __typename?: 'HeaderFields_navItems_link_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Type_Update = {
  __typename?: 'HeaderFields_navItems_link_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Url = {
  __typename?: 'HeaderFields_navItems_link_url';
  create?: Maybe<HeaderFields_NavItems_Link_Url_Create>;
  delete?: Maybe<HeaderFields_NavItems_Link_Url_Delete>;
  read?: Maybe<HeaderFields_NavItems_Link_Url_Read>;
  update?: Maybe<HeaderFields_NavItems_Link_Url_Update>;
};

export type HeaderFields_NavItems_Link_Url_Create = {
  __typename?: 'HeaderFields_navItems_link_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Url_Delete = {
  __typename?: 'HeaderFields_navItems_link_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Url_Read = {
  __typename?: 'HeaderFields_navItems_link_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Url_Update = {
  __typename?: 'HeaderFields_navItems_link_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_Slogan = {
  __typename?: 'HeaderFields_slogan';
  create?: Maybe<HeaderFields_Slogan_Create>;
  delete?: Maybe<HeaderFields_Slogan_Delete>;
  read?: Maybe<HeaderFields_Slogan_Read>;
  update?: Maybe<HeaderFields_Slogan_Update>;
};

export type HeaderFields_Slogan_Create = {
  __typename?: 'HeaderFields_slogan_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_Slogan_Delete = {
  __typename?: 'HeaderFields_slogan_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_Slogan_Read = {
  __typename?: 'HeaderFields_slogan_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_Slogan_Update = {
  __typename?: 'HeaderFields_slogan_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_UpdatedAt = {
  __typename?: 'HeaderFields_updatedAt';
  create?: Maybe<HeaderFields_UpdatedAt_Create>;
  delete?: Maybe<HeaderFields_UpdatedAt_Delete>;
  read?: Maybe<HeaderFields_UpdatedAt_Read>;
  update?: Maybe<HeaderFields_UpdatedAt_Update>;
};

export type HeaderFields_UpdatedAt_Create = {
  __typename?: 'HeaderFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_UpdatedAt_Delete = {
  __typename?: 'HeaderFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_UpdatedAt_Read = {
  __typename?: 'HeaderFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_UpdatedAt_Update = {
  __typename?: 'HeaderFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderReadAccess = {
  __typename?: 'HeaderReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeaderReadDocAccess = {
  __typename?: 'HeaderReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeaderUpdateAccess = {
  __typename?: 'HeaderUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeaderUpdateDocAccess = {
  __typename?: 'HeaderUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Header_NavButtons = {
  __typename?: 'Header_NavButtons';
  id?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Header_NavButtons_Link>;
};

export type Header_NavButtons_Link = {
  __typename?: 'Header_NavButtons_Link';
  label?: Maybe<Scalars['String']['output']>;
  newTab?: Maybe<Scalars['Boolean']['output']>;
  reference?: Maybe<Header_NavButtons_Link_Reference_Relationship>;
  type?: Maybe<Header_NavButtons_Link_Type>;
  url?: Maybe<Scalars['String']['output']>;
};


export type Header_NavButtons_LinkReferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type Header_NavButtons_Link_Reference = Page;

export type Header_NavButtons_Link_ReferenceRelationshipInput = {
  relationTo?: InputMaybe<Header_NavButtons_Link_ReferenceRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum Header_NavButtons_Link_ReferenceRelationshipInputRelationTo {
  Pages = 'pages'
}

export enum Header_NavButtons_Link_Reference_RelationTo {
  Pages = 'pages'
}

export type Header_NavButtons_Link_Reference_Relationship = {
  __typename?: 'Header_NavButtons_Link_Reference_Relationship';
  relationTo?: Maybe<Header_NavButtons_Link_Reference_RelationTo>;
  value?: Maybe<Header_NavButtons_Link_Reference>;
};

export enum Header_NavButtons_Link_Type {
  Custom = 'custom',
  Reference = 'reference'
}

export type Header_NavItems = {
  __typename?: 'Header_NavItems';
  id?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Header_NavItems_Link>;
};

export type Header_NavItems_Link = {
  __typename?: 'Header_NavItems_Link';
  label?: Maybe<Scalars['String']['output']>;
  newTab?: Maybe<Scalars['Boolean']['output']>;
  reference?: Maybe<Header_NavItems_Link_Reference_Relationship>;
  type?: Maybe<Header_NavItems_Link_Type>;
  url?: Maybe<Scalars['String']['output']>;
};


export type Header_NavItems_LinkReferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type Header_NavItems_Link_Reference = Page;

export type Header_NavItems_Link_ReferenceRelationshipInput = {
  relationTo?: InputMaybe<Header_NavItems_Link_ReferenceRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum Header_NavItems_Link_ReferenceRelationshipInputRelationTo {
  Pages = 'pages'
}

export enum Header_NavItems_Link_Reference_RelationTo {
  Pages = 'pages'
}

export type Header_NavItems_Link_Reference_Relationship = {
  __typename?: 'Header_NavItems_Link_Reference_Relationship';
  relationTo?: Maybe<Header_NavItems_Link_Reference_RelationTo>;
  value?: Maybe<Header_NavItems_Link_Reference>;
};

export enum Header_NavItems_Link_Type {
  Custom = 'custom',
  Reference = 'reference'
}

export type InformationBanner = {
  __typename?: 'InformationBanner';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  items?: Maybe<Array<InformationBanner_Items>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type InformationBannerDocAccessFields = {
  __typename?: 'InformationBannerDocAccessFields';
  createdAt?: Maybe<InformationBannerDocAccessFields_CreatedAt>;
  items?: Maybe<InformationBannerDocAccessFields_Items>;
  updatedAt?: Maybe<InformationBannerDocAccessFields_UpdatedAt>;
};

export type InformationBannerDocAccessFields_CreatedAt = {
  __typename?: 'InformationBannerDocAccessFields_createdAt';
  create?: Maybe<InformationBannerDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<InformationBannerDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<InformationBannerDocAccessFields_CreatedAt_Read>;
  update?: Maybe<InformationBannerDocAccessFields_CreatedAt_Update>;
};

export type InformationBannerDocAccessFields_CreatedAt_Create = {
  __typename?: 'InformationBannerDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_CreatedAt_Delete = {
  __typename?: 'InformationBannerDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_CreatedAt_Read = {
  __typename?: 'InformationBannerDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_CreatedAt_Update = {
  __typename?: 'InformationBannerDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items = {
  __typename?: 'InformationBannerDocAccessFields_items';
  create?: Maybe<InformationBannerDocAccessFields_Items_Create>;
  delete?: Maybe<InformationBannerDocAccessFields_Items_Delete>;
  fields?: Maybe<InformationBannerDocAccessFields_Items_Fields>;
  read?: Maybe<InformationBannerDocAccessFields_Items_Read>;
  update?: Maybe<InformationBannerDocAccessFields_Items_Update>;
};

export type InformationBannerDocAccessFields_Items_Create = {
  __typename?: 'InformationBannerDocAccessFields_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Delete = {
  __typename?: 'InformationBannerDocAccessFields_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Fields = {
  __typename?: 'InformationBannerDocAccessFields_items_Fields';
  icon?: Maybe<InformationBannerDocAccessFields_Items_Icon>;
  id?: Maybe<InformationBannerDocAccessFields_Items_Id>;
  text?: Maybe<InformationBannerDocAccessFields_Items_Text>;
};

export type InformationBannerDocAccessFields_Items_Read = {
  __typename?: 'InformationBannerDocAccessFields_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Update = {
  __typename?: 'InformationBannerDocAccessFields_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Icon = {
  __typename?: 'InformationBannerDocAccessFields_items_icon';
  create?: Maybe<InformationBannerDocAccessFields_Items_Icon_Create>;
  delete?: Maybe<InformationBannerDocAccessFields_Items_Icon_Delete>;
  read?: Maybe<InformationBannerDocAccessFields_Items_Icon_Read>;
  update?: Maybe<InformationBannerDocAccessFields_Items_Icon_Update>;
};

export type InformationBannerDocAccessFields_Items_Icon_Create = {
  __typename?: 'InformationBannerDocAccessFields_items_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Icon_Delete = {
  __typename?: 'InformationBannerDocAccessFields_items_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Icon_Read = {
  __typename?: 'InformationBannerDocAccessFields_items_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Icon_Update = {
  __typename?: 'InformationBannerDocAccessFields_items_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Id = {
  __typename?: 'InformationBannerDocAccessFields_items_id';
  create?: Maybe<InformationBannerDocAccessFields_Items_Id_Create>;
  delete?: Maybe<InformationBannerDocAccessFields_Items_Id_Delete>;
  read?: Maybe<InformationBannerDocAccessFields_Items_Id_Read>;
  update?: Maybe<InformationBannerDocAccessFields_Items_Id_Update>;
};

export type InformationBannerDocAccessFields_Items_Id_Create = {
  __typename?: 'InformationBannerDocAccessFields_items_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Id_Delete = {
  __typename?: 'InformationBannerDocAccessFields_items_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Id_Read = {
  __typename?: 'InformationBannerDocAccessFields_items_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Id_Update = {
  __typename?: 'InformationBannerDocAccessFields_items_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Text = {
  __typename?: 'InformationBannerDocAccessFields_items_text';
  create?: Maybe<InformationBannerDocAccessFields_Items_Text_Create>;
  delete?: Maybe<InformationBannerDocAccessFields_Items_Text_Delete>;
  read?: Maybe<InformationBannerDocAccessFields_Items_Text_Read>;
  update?: Maybe<InformationBannerDocAccessFields_Items_Text_Update>;
};

export type InformationBannerDocAccessFields_Items_Text_Create = {
  __typename?: 'InformationBannerDocAccessFields_items_text_Create';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Text_Delete = {
  __typename?: 'InformationBannerDocAccessFields_items_text_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Text_Read = {
  __typename?: 'InformationBannerDocAccessFields_items_text_Read';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Text_Update = {
  __typename?: 'InformationBannerDocAccessFields_items_text_Update';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_UpdatedAt = {
  __typename?: 'InformationBannerDocAccessFields_updatedAt';
  create?: Maybe<InformationBannerDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<InformationBannerDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<InformationBannerDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<InformationBannerDocAccessFields_UpdatedAt_Update>;
};

export type InformationBannerDocAccessFields_UpdatedAt_Create = {
  __typename?: 'InformationBannerDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'InformationBannerDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_UpdatedAt_Read = {
  __typename?: 'InformationBannerDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_UpdatedAt_Update = {
  __typename?: 'InformationBannerDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields = {
  __typename?: 'InformationBannerFields';
  createdAt?: Maybe<InformationBannerFields_CreatedAt>;
  items?: Maybe<InformationBannerFields_Items>;
  updatedAt?: Maybe<InformationBannerFields_UpdatedAt>;
};

export type InformationBannerFields_CreatedAt = {
  __typename?: 'InformationBannerFields_createdAt';
  create?: Maybe<InformationBannerFields_CreatedAt_Create>;
  delete?: Maybe<InformationBannerFields_CreatedAt_Delete>;
  read?: Maybe<InformationBannerFields_CreatedAt_Read>;
  update?: Maybe<InformationBannerFields_CreatedAt_Update>;
};

export type InformationBannerFields_CreatedAt_Create = {
  __typename?: 'InformationBannerFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_CreatedAt_Delete = {
  __typename?: 'InformationBannerFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_CreatedAt_Read = {
  __typename?: 'InformationBannerFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_CreatedAt_Update = {
  __typename?: 'InformationBannerFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items = {
  __typename?: 'InformationBannerFields_items';
  create?: Maybe<InformationBannerFields_Items_Create>;
  delete?: Maybe<InformationBannerFields_Items_Delete>;
  fields?: Maybe<InformationBannerFields_Items_Fields>;
  read?: Maybe<InformationBannerFields_Items_Read>;
  update?: Maybe<InformationBannerFields_Items_Update>;
};

export type InformationBannerFields_Items_Create = {
  __typename?: 'InformationBannerFields_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Delete = {
  __typename?: 'InformationBannerFields_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Fields = {
  __typename?: 'InformationBannerFields_items_Fields';
  icon?: Maybe<InformationBannerFields_Items_Icon>;
  id?: Maybe<InformationBannerFields_Items_Id>;
  text?: Maybe<InformationBannerFields_Items_Text>;
};

export type InformationBannerFields_Items_Read = {
  __typename?: 'InformationBannerFields_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Update = {
  __typename?: 'InformationBannerFields_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Icon = {
  __typename?: 'InformationBannerFields_items_icon';
  create?: Maybe<InformationBannerFields_Items_Icon_Create>;
  delete?: Maybe<InformationBannerFields_Items_Icon_Delete>;
  read?: Maybe<InformationBannerFields_Items_Icon_Read>;
  update?: Maybe<InformationBannerFields_Items_Icon_Update>;
};

export type InformationBannerFields_Items_Icon_Create = {
  __typename?: 'InformationBannerFields_items_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Icon_Delete = {
  __typename?: 'InformationBannerFields_items_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Icon_Read = {
  __typename?: 'InformationBannerFields_items_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Icon_Update = {
  __typename?: 'InformationBannerFields_items_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Id = {
  __typename?: 'InformationBannerFields_items_id';
  create?: Maybe<InformationBannerFields_Items_Id_Create>;
  delete?: Maybe<InformationBannerFields_Items_Id_Delete>;
  read?: Maybe<InformationBannerFields_Items_Id_Read>;
  update?: Maybe<InformationBannerFields_Items_Id_Update>;
};

export type InformationBannerFields_Items_Id_Create = {
  __typename?: 'InformationBannerFields_items_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Id_Delete = {
  __typename?: 'InformationBannerFields_items_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Id_Read = {
  __typename?: 'InformationBannerFields_items_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Id_Update = {
  __typename?: 'InformationBannerFields_items_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Text = {
  __typename?: 'InformationBannerFields_items_text';
  create?: Maybe<InformationBannerFields_Items_Text_Create>;
  delete?: Maybe<InformationBannerFields_Items_Text_Delete>;
  read?: Maybe<InformationBannerFields_Items_Text_Read>;
  update?: Maybe<InformationBannerFields_Items_Text_Update>;
};

export type InformationBannerFields_Items_Text_Create = {
  __typename?: 'InformationBannerFields_items_text_Create';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Text_Delete = {
  __typename?: 'InformationBannerFields_items_text_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Text_Read = {
  __typename?: 'InformationBannerFields_items_text_Read';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Text_Update = {
  __typename?: 'InformationBannerFields_items_text_Update';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_UpdatedAt = {
  __typename?: 'InformationBannerFields_updatedAt';
  create?: Maybe<InformationBannerFields_UpdatedAt_Create>;
  delete?: Maybe<InformationBannerFields_UpdatedAt_Delete>;
  read?: Maybe<InformationBannerFields_UpdatedAt_Read>;
  update?: Maybe<InformationBannerFields_UpdatedAt_Update>;
};

export type InformationBannerFields_UpdatedAt_Create = {
  __typename?: 'InformationBannerFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_UpdatedAt_Delete = {
  __typename?: 'InformationBannerFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_UpdatedAt_Read = {
  __typename?: 'InformationBannerFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_UpdatedAt_Update = {
  __typename?: 'InformationBannerFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerReadAccess = {
  __typename?: 'InformationBannerReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type InformationBannerReadDocAccess = {
  __typename?: 'InformationBannerReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type InformationBannerUpdateAccess = {
  __typename?: 'InformationBannerUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type InformationBannerUpdateDocAccess = {
  __typename?: 'InformationBannerUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type InformationBanner_Items = {
  __typename?: 'InformationBanner_Items';
  icon?: Maybe<SvgMedia>;
  id?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};


export type InformationBanner_ItemsIconArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export enum LocaleInputType {
  De = 'de',
  En = 'en'
}

export type Media = {
  __typename?: 'Media';
  alt: Scalars['String']['output'];
  caption?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  focalX?: Maybe<Scalars['Float']['output']>;
  focalY?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  mimeType?: Maybe<Scalars['String']['output']>;
  thumbnailURL?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};


export type MediaCaptionArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type MediaBlock = {
  __typename?: 'MediaBlock';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Media>;
};


export type MediaBlockMediaArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  alt?: Maybe<MediaDocAccessFields_Alt>;
  caption?: Maybe<MediaDocAccessFields_Caption>;
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  focalX?: Maybe<MediaDocAccessFields_FocalX>;
  focalY?: Maybe<MediaDocAccessFields_FocalY>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  thumbnailURL?: Maybe<MediaDocAccessFields_ThumbnailUrl>;
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
  url?: Maybe<MediaDocAccessFields_Url>;
  width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Alt = {
  __typename?: 'MediaDocAccessFields_alt';
  create?: Maybe<MediaDocAccessFields_Alt_Create>;
  delete?: Maybe<MediaDocAccessFields_Alt_Delete>;
  read?: Maybe<MediaDocAccessFields_Alt_Read>;
  update?: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
  __typename?: 'MediaDocAccessFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Caption = {
  __typename?: 'MediaDocAccessFields_caption';
  create?: Maybe<MediaDocAccessFields_Caption_Create>;
  delete?: Maybe<MediaDocAccessFields_Caption_Delete>;
  read?: Maybe<MediaDocAccessFields_Caption_Read>;
  update?: Maybe<MediaDocAccessFields_Caption_Update>;
};

export type MediaDocAccessFields_Caption_Create = {
  __typename?: 'MediaDocAccessFields_caption_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Caption_Delete = {
  __typename?: 'MediaDocAccessFields_caption_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Caption_Read = {
  __typename?: 'MediaDocAccessFields_caption_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Caption_Update = {
  __typename?: 'MediaDocAccessFields_caption_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX = {
  __typename?: 'MediaDocAccessFields_focalX';
  create?: Maybe<MediaDocAccessFields_FocalX_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalX_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalX_Read>;
  update?: Maybe<MediaDocAccessFields_FocalX_Update>;
};

export type MediaDocAccessFields_FocalX_Create = {
  __typename?: 'MediaDocAccessFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Delete = {
  __typename?: 'MediaDocAccessFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Read = {
  __typename?: 'MediaDocAccessFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Update = {
  __typename?: 'MediaDocAccessFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY = {
  __typename?: 'MediaDocAccessFields_focalY';
  create?: Maybe<MediaDocAccessFields_FocalY_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalY_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalY_Read>;
  update?: Maybe<MediaDocAccessFields_FocalY_Update>;
};

export type MediaDocAccessFields_FocalY_Create = {
  __typename?: 'MediaDocAccessFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Delete = {
  __typename?: 'MediaDocAccessFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Read = {
  __typename?: 'MediaDocAccessFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Update = {
  __typename?: 'MediaDocAccessFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl = {
  __typename?: 'MediaDocAccessFields_thumbnailURL';
  create?: Maybe<MediaDocAccessFields_ThumbnailUrl_Create>;
  delete?: Maybe<MediaDocAccessFields_ThumbnailUrl_Delete>;
  read?: Maybe<MediaDocAccessFields_ThumbnailUrl_Read>;
  update?: Maybe<MediaDocAccessFields_ThumbnailUrl_Update>;
};

export type MediaDocAccessFields_ThumbnailUrl_Create = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Read = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Update = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  alt?: Maybe<MediaFields_Alt>;
  caption?: Maybe<MediaFields_Caption>;
  createdAt?: Maybe<MediaFields_CreatedAt>;
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  focalX?: Maybe<MediaFields_FocalX>;
  focalY?: Maybe<MediaFields_FocalY>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  thumbnailURL?: Maybe<MediaFields_ThumbnailUrl>;
  updatedAt?: Maybe<MediaFields_UpdatedAt>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
};

export type MediaFields_Alt = {
  __typename?: 'MediaFields_alt';
  create?: Maybe<MediaFields_Alt_Create>;
  delete?: Maybe<MediaFields_Alt_Delete>;
  read?: Maybe<MediaFields_Alt_Read>;
  update?: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
  __typename?: 'MediaFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Delete = {
  __typename?: 'MediaFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Read = {
  __typename?: 'MediaFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Update = {
  __typename?: 'MediaFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Caption = {
  __typename?: 'MediaFields_caption';
  create?: Maybe<MediaFields_Caption_Create>;
  delete?: Maybe<MediaFields_Caption_Delete>;
  read?: Maybe<MediaFields_Caption_Read>;
  update?: Maybe<MediaFields_Caption_Update>;
};

export type MediaFields_Caption_Create = {
  __typename?: 'MediaFields_caption_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Caption_Delete = {
  __typename?: 'MediaFields_caption_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Caption_Read = {
  __typename?: 'MediaFields_caption_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Caption_Update = {
  __typename?: 'MediaFields_caption_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt = {
  __typename?: 'MediaFields_createdAt';
  create?: Maybe<MediaFields_CreatedAt_Create>;
  delete?: Maybe<MediaFields_CreatedAt_Delete>;
  read?: Maybe<MediaFields_CreatedAt_Read>;
  update?: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX = {
  __typename?: 'MediaFields_focalX';
  create?: Maybe<MediaFields_FocalX_Create>;
  delete?: Maybe<MediaFields_FocalX_Delete>;
  read?: Maybe<MediaFields_FocalX_Read>;
  update?: Maybe<MediaFields_FocalX_Update>;
};

export type MediaFields_FocalX_Create = {
  __typename?: 'MediaFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Delete = {
  __typename?: 'MediaFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Read = {
  __typename?: 'MediaFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Update = {
  __typename?: 'MediaFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY = {
  __typename?: 'MediaFields_focalY';
  create?: Maybe<MediaFields_FocalY_Create>;
  delete?: Maybe<MediaFields_FocalY_Delete>;
  read?: Maybe<MediaFields_FocalY_Read>;
  update?: Maybe<MediaFields_FocalY_Update>;
};

export type MediaFields_FocalY_Create = {
  __typename?: 'MediaFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Delete = {
  __typename?: 'MediaFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Read = {
  __typename?: 'MediaFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Update = {
  __typename?: 'MediaFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl = {
  __typename?: 'MediaFields_thumbnailURL';
  create?: Maybe<MediaFields_ThumbnailUrl_Create>;
  delete?: Maybe<MediaFields_ThumbnailUrl_Delete>;
  read?: Maybe<MediaFields_ThumbnailUrl_Read>;
  update?: Maybe<MediaFields_ThumbnailUrl_Update>;
};

export type MediaFields_ThumbnailUrl_Create = {
  __typename?: 'MediaFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Read = {
  __typename?: 'MediaFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Update = {
  __typename?: 'MediaFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create?: Maybe<MediaFields_UpdatedAt_Create>;
  delete?: Maybe<MediaFields_UpdatedAt_Delete>;
  read?: Maybe<MediaFields_UpdatedAt_Read>;
  update?: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Caption_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalX_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalY_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_ThumbnailUrl_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  caption?: InputMaybe<Media_Caption_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  caption?: InputMaybe<Media_Caption_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  caption?: InputMaybe<Media_Caption_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Message = {
  __typename?: 'Message';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['JSON']['output']>;
};


export type MessageMessageArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAddress?: Maybe<Address>;
  createCart?: Maybe<Cart>;
  createCategory?: Maybe<Category>;
  createForm?: Maybe<Form>;
  createFormSubmission?: Maybe<FormSubmission>;
  createMedia?: Maybe<Media>;
  createOrder?: Maybe<Order>;
  createPage?: Maybe<Page>;
  createPayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createProduct?: Maybe<Product>;
  createSvgMedia?: Maybe<SvgMedia>;
  createTransaction?: Maybe<Transaction>;
  createUser?: Maybe<User>;
  createVariant?: Maybe<Variant>;
  createVariantOption?: Maybe<VariantOption>;
  createVariantType?: Maybe<VariantType>;
  deleteAddress?: Maybe<Address>;
  deleteCart?: Maybe<Cart>;
  deleteCategory?: Maybe<Category>;
  deleteForm?: Maybe<Form>;
  deleteFormSubmission?: Maybe<FormSubmission>;
  deleteMedia?: Maybe<Media>;
  deleteOrder?: Maybe<Order>;
  deletePage?: Maybe<Page>;
  deletePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deleteProduct?: Maybe<Product>;
  deleteSvgMedia?: Maybe<SvgMedia>;
  deleteTransaction?: Maybe<Transaction>;
  deleteUser?: Maybe<User>;
  deleteVariant?: Maybe<Variant>;
  deleteVariantOption?: Maybe<VariantOption>;
  deleteVariantType?: Maybe<VariantType>;
  duplicateAddress?: Maybe<Address>;
  duplicateCart?: Maybe<Cart>;
  duplicateCategory?: Maybe<Category>;
  duplicateForm?: Maybe<Form>;
  duplicateFormSubmission?: Maybe<FormSubmission>;
  duplicateMedia?: Maybe<Media>;
  duplicateOrder?: Maybe<Order>;
  duplicatePage?: Maybe<Page>;
  duplicatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  duplicatePayloadPreference?: Maybe<PayloadPreference>;
  duplicateProduct?: Maybe<Product>;
  duplicateSvgMedia?: Maybe<SvgMedia>;
  duplicateTransaction?: Maybe<Transaction>;
  duplicateVariant?: Maybe<Variant>;
  duplicateVariantOption?: Maybe<VariantOption>;
  duplicateVariantType?: Maybe<VariantType>;
  forgotPasswordUser: Scalars['Boolean']['output'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars['String']['output']>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  restoreVersionPage?: Maybe<Page>;
  restoreVersionProduct?: Maybe<Product>;
  restoreVersionVariant?: Maybe<Variant>;
  unlockUser: Scalars['Boolean']['output'];
  updateAddress?: Maybe<Address>;
  updateCart?: Maybe<Cart>;
  updateCategory?: Maybe<Category>;
  updateFooter?: Maybe<Footer>;
  updateForm?: Maybe<Form>;
  updateFormSubmission?: Maybe<FormSubmission>;
  updateHeader?: Maybe<Header>;
  updateInformationBanner?: Maybe<InformationBanner>;
  updateMedia?: Maybe<Media>;
  updateOrder?: Maybe<Order>;
  updatePage?: Maybe<Page>;
  updatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updateProduct?: Maybe<Product>;
  updateSvgMedia?: Maybe<SvgMedia>;
  updateTransaction?: Maybe<Transaction>;
  updateUser?: Maybe<User>;
  updateVariant?: Maybe<Variant>;
  updateVariantOption?: Maybe<VariantOption>;
  updateVariantType?: Maybe<VariantType>;
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateAddressArgs = {
  data: MutationAddressInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateCartArgs = {
  data: MutationCartInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateCategoryArgs = {
  data: MutationCategoryInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateFormArgs = {
  data: MutationFormInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateFormSubmissionArgs = {
  data: MutationFormSubmissionInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateOrderArgs = {
  data: MutationOrderInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreatePageArgs = {
  data: MutationPageInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateProductArgs = {
  data: MutationProductInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateSvgMediaArgs = {
  data: MutationSvgMediaInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateTransactionArgs = {
  data: MutationTransactionInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateVariantArgs = {
  data: MutationVariantInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateVariantOptionArgs = {
  data: MutationVariantOptionInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateVariantTypeArgs = {
  data: MutationVariantTypeInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationDeleteAddressArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteCartArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteFormArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteFormSubmissionArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteMediaArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteOrderArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePageArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePayloadLockedDocumentArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteSvgMediaArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteTransactionArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteVariantArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteVariantOptionArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteVariantTypeArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDuplicateAddressArgs = {
  data: MutationAddressInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateCartArgs = {
  data: MutationCartInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateCategoryArgs = {
  data: MutationCategoryInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateFormArgs = {
  data: MutationFormInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateFormSubmissionArgs = {
  data: MutationFormSubmissionInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateMediaArgs = {
  data: MutationMediaInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateOrderArgs = {
  data: MutationOrderInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicatePageArgs = {
  data: MutationPageInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateProductArgs = {
  data: MutationProductInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateSvgMediaArgs = {
  data: MutationSvgMediaInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateTransactionArgs = {
  data: MutationTransactionInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateVariantArgs = {
  data: MutationVariantInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateVariantOptionArgs = {
  data: MutationVariantOptionInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateVariantTypeArgs = {
  data: MutationVariantTypeInput;
  id: Scalars['Int']['input'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  expiration?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationLoginUserArgs = {
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLogoutUserArgs = {
  allSessions?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRestoreVersionPageArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationRestoreVersionProductArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationRestoreVersionVariantArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateAddressArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationAddressUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateCartArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationCartUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateCategoryArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationCategoryUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateFooterArgs = {
  data: MutationFooterInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateFormArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationFormUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateFormSubmissionArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationFormSubmissionUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateHeaderArgs = {
  data: MutationHeaderInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateInformationBannerArgs = {
  data: MutationInformationBannerInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateOrderArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationOrderUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePageArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPageUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePayloadLockedDocumentArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadLockedDocumentUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadPreferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateProductArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationProductUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateSvgMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationSvgMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateTransactionArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationTransactionUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateVariantArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationVariantUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateVariantOptionArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationVariantOptionUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateVariantTypeArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationVariantTypeUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type Number = {
  __typename?: 'Number';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  defaultValue?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Order = {
  __typename?: 'Order';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currency?: Maybe<Order_Currency>;
  customer?: Maybe<User>;
  customerEmail?: Maybe<Scalars['EmailAddress']['output']>;
  id: Scalars['Int']['output'];
  items?: Maybe<Array<Order_Items>>;
  shippingAddress?: Maybe<Order_ShippingAddress>;
  status?: Maybe<Order_Status>;
  transactions?: Maybe<Array<Transaction>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type OrderCustomerArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type OrderTransactionsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export enum OrderUpdate_Currency_MutationInput {
  Usd = 'USD'
}

export enum OrderUpdate_Status_MutationInput {
  Cancelled = 'cancelled',
  Completed = 'completed',
  Processing = 'processing',
  Refunded = 'refunded'
}

export type Order_Items = {
  __typename?: 'Order_Items';
  id?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars['Float']['output']>;
  variant?: Maybe<Variant>;
};


export type Order_ItemsProductArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type Order_ItemsVariantArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type Order_ShippingAddress = {
  __typename?: 'Order_ShippingAddress';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Order_Amount_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Order_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Order_Currency {
  Usd = 'USD'
}

export enum Order_Currency_Input {
  Usd = 'USD'
}

export enum Order_Currency_MutationInput {
  Usd = 'USD'
}

export type Order_Currency_Operator = {
  all?: InputMaybe<Array<InputMaybe<Order_Currency_Input>>>;
  equals?: InputMaybe<Order_Currency_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Order_Currency_Input>>>;
  not_equals?: InputMaybe<Order_Currency_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Order_Currency_Input>>>;
};

export type Order_CustomerEmail_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type Order_Customer_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Order_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Order_Items__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Order_Items__Product_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Order_Items__Quantity_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Order_Items__Variant_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Order_ShippingAddress__AddressLine1_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Order_ShippingAddress__AddressLine2_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Order_ShippingAddress__City_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Order_ShippingAddress__Company_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Order_ShippingAddress__Country_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Order_ShippingAddress__FirstName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Order_ShippingAddress__LastName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Order_ShippingAddress__Phone_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Order_ShippingAddress__PostalCode_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Order_ShippingAddress__State_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Order_ShippingAddress__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum Order_Status {
  Cancelled = 'cancelled',
  Completed = 'completed',
  Processing = 'processing',
  Refunded = 'refunded'
}

export enum Order_Status_Input {
  Cancelled = 'cancelled',
  Completed = 'completed',
  Processing = 'processing',
  Refunded = 'refunded'
}

export enum Order_Status_MutationInput {
  Cancelled = 'cancelled',
  Completed = 'completed',
  Processing = 'processing',
  Refunded = 'refunded'
}

export type Order_Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Order_Status_Input>>>;
  equals?: InputMaybe<Order_Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Order_Status_Input>>>;
  not_equals?: InputMaybe<Order_Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Order_Status_Input>>>;
};

export type Order_Transactions_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Order_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Order_Where = {
  AND?: InputMaybe<Array<InputMaybe<Order_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Order_Where_Or>>>;
  amount?: InputMaybe<Order_Amount_Operator>;
  createdAt?: InputMaybe<Order_CreatedAt_Operator>;
  currency?: InputMaybe<Order_Currency_Operator>;
  customer?: InputMaybe<Order_Customer_Operator>;
  customerEmail?: InputMaybe<Order_CustomerEmail_Operator>;
  id?: InputMaybe<Order_Id_Operator>;
  items__id?: InputMaybe<Order_Items__Id_Operator>;
  items__product?: InputMaybe<Order_Items__Product_Operator>;
  items__quantity?: InputMaybe<Order_Items__Quantity_Operator>;
  items__variant?: InputMaybe<Order_Items__Variant_Operator>;
  shippingAddress__addressLine1?: InputMaybe<Order_ShippingAddress__AddressLine1_Operator>;
  shippingAddress__addressLine2?: InputMaybe<Order_ShippingAddress__AddressLine2_Operator>;
  shippingAddress__city?: InputMaybe<Order_ShippingAddress__City_Operator>;
  shippingAddress__company?: InputMaybe<Order_ShippingAddress__Company_Operator>;
  shippingAddress__country?: InputMaybe<Order_ShippingAddress__Country_Operator>;
  shippingAddress__firstName?: InputMaybe<Order_ShippingAddress__FirstName_Operator>;
  shippingAddress__lastName?: InputMaybe<Order_ShippingAddress__LastName_Operator>;
  shippingAddress__phone?: InputMaybe<Order_ShippingAddress__Phone_Operator>;
  shippingAddress__postalCode?: InputMaybe<Order_ShippingAddress__PostalCode_Operator>;
  shippingAddress__state?: InputMaybe<Order_ShippingAddress__State_Operator>;
  shippingAddress__title?: InputMaybe<Order_ShippingAddress__Title_Operator>;
  status?: InputMaybe<Order_Status_Operator>;
  transactions?: InputMaybe<Order_Transactions_Operator>;
  updatedAt?: InputMaybe<Order_UpdatedAt_Operator>;
};

export type Order_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Order_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Order_Where_Or>>>;
  amount?: InputMaybe<Order_Amount_Operator>;
  createdAt?: InputMaybe<Order_CreatedAt_Operator>;
  currency?: InputMaybe<Order_Currency_Operator>;
  customer?: InputMaybe<Order_Customer_Operator>;
  customerEmail?: InputMaybe<Order_CustomerEmail_Operator>;
  id?: InputMaybe<Order_Id_Operator>;
  items__id?: InputMaybe<Order_Items__Id_Operator>;
  items__product?: InputMaybe<Order_Items__Product_Operator>;
  items__quantity?: InputMaybe<Order_Items__Quantity_Operator>;
  items__variant?: InputMaybe<Order_Items__Variant_Operator>;
  shippingAddress__addressLine1?: InputMaybe<Order_ShippingAddress__AddressLine1_Operator>;
  shippingAddress__addressLine2?: InputMaybe<Order_ShippingAddress__AddressLine2_Operator>;
  shippingAddress__city?: InputMaybe<Order_ShippingAddress__City_Operator>;
  shippingAddress__company?: InputMaybe<Order_ShippingAddress__Company_Operator>;
  shippingAddress__country?: InputMaybe<Order_ShippingAddress__Country_Operator>;
  shippingAddress__firstName?: InputMaybe<Order_ShippingAddress__FirstName_Operator>;
  shippingAddress__lastName?: InputMaybe<Order_ShippingAddress__LastName_Operator>;
  shippingAddress__phone?: InputMaybe<Order_ShippingAddress__Phone_Operator>;
  shippingAddress__postalCode?: InputMaybe<Order_ShippingAddress__PostalCode_Operator>;
  shippingAddress__state?: InputMaybe<Order_ShippingAddress__State_Operator>;
  shippingAddress__title?: InputMaybe<Order_ShippingAddress__Title_Operator>;
  status?: InputMaybe<Order_Status_Operator>;
  transactions?: InputMaybe<Order_Transactions_Operator>;
  updatedAt?: InputMaybe<Order_UpdatedAt_Operator>;
};

export type Order_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Order_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Order_Where_Or>>>;
  amount?: InputMaybe<Order_Amount_Operator>;
  createdAt?: InputMaybe<Order_CreatedAt_Operator>;
  currency?: InputMaybe<Order_Currency_Operator>;
  customer?: InputMaybe<Order_Customer_Operator>;
  customerEmail?: InputMaybe<Order_CustomerEmail_Operator>;
  id?: InputMaybe<Order_Id_Operator>;
  items__id?: InputMaybe<Order_Items__Id_Operator>;
  items__product?: InputMaybe<Order_Items__Product_Operator>;
  items__quantity?: InputMaybe<Order_Items__Quantity_Operator>;
  items__variant?: InputMaybe<Order_Items__Variant_Operator>;
  shippingAddress__addressLine1?: InputMaybe<Order_ShippingAddress__AddressLine1_Operator>;
  shippingAddress__addressLine2?: InputMaybe<Order_ShippingAddress__AddressLine2_Operator>;
  shippingAddress__city?: InputMaybe<Order_ShippingAddress__City_Operator>;
  shippingAddress__company?: InputMaybe<Order_ShippingAddress__Company_Operator>;
  shippingAddress__country?: InputMaybe<Order_ShippingAddress__Country_Operator>;
  shippingAddress__firstName?: InputMaybe<Order_ShippingAddress__FirstName_Operator>;
  shippingAddress__lastName?: InputMaybe<Order_ShippingAddress__LastName_Operator>;
  shippingAddress__phone?: InputMaybe<Order_ShippingAddress__Phone_Operator>;
  shippingAddress__postalCode?: InputMaybe<Order_ShippingAddress__PostalCode_Operator>;
  shippingAddress__state?: InputMaybe<Order_ShippingAddress__State_Operator>;
  shippingAddress__title?: InputMaybe<Order_ShippingAddress__Title_Operator>;
  status?: InputMaybe<Order_Status_Operator>;
  transactions?: InputMaybe<Order_Transactions_Operator>;
  updatedAt?: InputMaybe<Order_UpdatedAt_Operator>;
};

export type Orders = {
  __typename?: 'Orders';
  docs: Array<Order>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type OrdersCreateAccess = {
  __typename?: 'OrdersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersCreateDocAccess = {
  __typename?: 'OrdersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersDeleteAccess = {
  __typename?: 'OrdersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersDeleteDocAccess = {
  __typename?: 'OrdersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersDocAccessFields = {
  __typename?: 'OrdersDocAccessFields';
  amount?: Maybe<OrdersDocAccessFields_Amount>;
  createdAt?: Maybe<OrdersDocAccessFields_CreatedAt>;
  currency?: Maybe<OrdersDocAccessFields_Currency>;
  customer?: Maybe<OrdersDocAccessFields_Customer>;
  customerEmail?: Maybe<OrdersDocAccessFields_CustomerEmail>;
  items?: Maybe<OrdersDocAccessFields_Items>;
  shippingAddress?: Maybe<OrdersDocAccessFields_ShippingAddress>;
  status?: Maybe<OrdersDocAccessFields_Status>;
  transactions?: Maybe<OrdersDocAccessFields_Transactions>;
  updatedAt?: Maybe<OrdersDocAccessFields_UpdatedAt>;
};

export type OrdersDocAccessFields_Amount = {
  __typename?: 'OrdersDocAccessFields_amount';
  create?: Maybe<OrdersDocAccessFields_Amount_Create>;
  delete?: Maybe<OrdersDocAccessFields_Amount_Delete>;
  read?: Maybe<OrdersDocAccessFields_Amount_Read>;
  update?: Maybe<OrdersDocAccessFields_Amount_Update>;
};

export type OrdersDocAccessFields_Amount_Create = {
  __typename?: 'OrdersDocAccessFields_amount_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Amount_Delete = {
  __typename?: 'OrdersDocAccessFields_amount_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Amount_Read = {
  __typename?: 'OrdersDocAccessFields_amount_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Amount_Update = {
  __typename?: 'OrdersDocAccessFields_amount_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CreatedAt = {
  __typename?: 'OrdersDocAccessFields_createdAt';
  create?: Maybe<OrdersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<OrdersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<OrdersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<OrdersDocAccessFields_CreatedAt_Update>;
};

export type OrdersDocAccessFields_CreatedAt_Create = {
  __typename?: 'OrdersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'OrdersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CreatedAt_Read = {
  __typename?: 'OrdersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CreatedAt_Update = {
  __typename?: 'OrdersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Currency = {
  __typename?: 'OrdersDocAccessFields_currency';
  create?: Maybe<OrdersDocAccessFields_Currency_Create>;
  delete?: Maybe<OrdersDocAccessFields_Currency_Delete>;
  read?: Maybe<OrdersDocAccessFields_Currency_Read>;
  update?: Maybe<OrdersDocAccessFields_Currency_Update>;
};

export type OrdersDocAccessFields_Currency_Create = {
  __typename?: 'OrdersDocAccessFields_currency_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Currency_Delete = {
  __typename?: 'OrdersDocAccessFields_currency_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Currency_Read = {
  __typename?: 'OrdersDocAccessFields_currency_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Currency_Update = {
  __typename?: 'OrdersDocAccessFields_currency_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Customer = {
  __typename?: 'OrdersDocAccessFields_customer';
  create?: Maybe<OrdersDocAccessFields_Customer_Create>;
  delete?: Maybe<OrdersDocAccessFields_Customer_Delete>;
  read?: Maybe<OrdersDocAccessFields_Customer_Read>;
  update?: Maybe<OrdersDocAccessFields_Customer_Update>;
};

export type OrdersDocAccessFields_CustomerEmail = {
  __typename?: 'OrdersDocAccessFields_customerEmail';
  create?: Maybe<OrdersDocAccessFields_CustomerEmail_Create>;
  delete?: Maybe<OrdersDocAccessFields_CustomerEmail_Delete>;
  read?: Maybe<OrdersDocAccessFields_CustomerEmail_Read>;
  update?: Maybe<OrdersDocAccessFields_CustomerEmail_Update>;
};

export type OrdersDocAccessFields_CustomerEmail_Create = {
  __typename?: 'OrdersDocAccessFields_customerEmail_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CustomerEmail_Delete = {
  __typename?: 'OrdersDocAccessFields_customerEmail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CustomerEmail_Read = {
  __typename?: 'OrdersDocAccessFields_customerEmail_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CustomerEmail_Update = {
  __typename?: 'OrdersDocAccessFields_customerEmail_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Customer_Create = {
  __typename?: 'OrdersDocAccessFields_customer_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Customer_Delete = {
  __typename?: 'OrdersDocAccessFields_customer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Customer_Read = {
  __typename?: 'OrdersDocAccessFields_customer_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Customer_Update = {
  __typename?: 'OrdersDocAccessFields_customer_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items = {
  __typename?: 'OrdersDocAccessFields_items';
  create?: Maybe<OrdersDocAccessFields_Items_Create>;
  delete?: Maybe<OrdersDocAccessFields_Items_Delete>;
  fields?: Maybe<OrdersDocAccessFields_Items_Fields>;
  read?: Maybe<OrdersDocAccessFields_Items_Read>;
  update?: Maybe<OrdersDocAccessFields_Items_Update>;
};

export type OrdersDocAccessFields_Items_Create = {
  __typename?: 'OrdersDocAccessFields_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Delete = {
  __typename?: 'OrdersDocAccessFields_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Fields = {
  __typename?: 'OrdersDocAccessFields_items_Fields';
  id?: Maybe<OrdersDocAccessFields_Items_Id>;
  product?: Maybe<OrdersDocAccessFields_Items_Product>;
  quantity?: Maybe<OrdersDocAccessFields_Items_Quantity>;
  variant?: Maybe<OrdersDocAccessFields_Items_Variant>;
};

export type OrdersDocAccessFields_Items_Read = {
  __typename?: 'OrdersDocAccessFields_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Update = {
  __typename?: 'OrdersDocAccessFields_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Id = {
  __typename?: 'OrdersDocAccessFields_items_id';
  create?: Maybe<OrdersDocAccessFields_Items_Id_Create>;
  delete?: Maybe<OrdersDocAccessFields_Items_Id_Delete>;
  read?: Maybe<OrdersDocAccessFields_Items_Id_Read>;
  update?: Maybe<OrdersDocAccessFields_Items_Id_Update>;
};

export type OrdersDocAccessFields_Items_Id_Create = {
  __typename?: 'OrdersDocAccessFields_items_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Id_Delete = {
  __typename?: 'OrdersDocAccessFields_items_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Id_Read = {
  __typename?: 'OrdersDocAccessFields_items_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Id_Update = {
  __typename?: 'OrdersDocAccessFields_items_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Product = {
  __typename?: 'OrdersDocAccessFields_items_product';
  create?: Maybe<OrdersDocAccessFields_Items_Product_Create>;
  delete?: Maybe<OrdersDocAccessFields_Items_Product_Delete>;
  read?: Maybe<OrdersDocAccessFields_Items_Product_Read>;
  update?: Maybe<OrdersDocAccessFields_Items_Product_Update>;
};

export type OrdersDocAccessFields_Items_Product_Create = {
  __typename?: 'OrdersDocAccessFields_items_product_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Product_Delete = {
  __typename?: 'OrdersDocAccessFields_items_product_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Product_Read = {
  __typename?: 'OrdersDocAccessFields_items_product_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Product_Update = {
  __typename?: 'OrdersDocAccessFields_items_product_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Quantity = {
  __typename?: 'OrdersDocAccessFields_items_quantity';
  create?: Maybe<OrdersDocAccessFields_Items_Quantity_Create>;
  delete?: Maybe<OrdersDocAccessFields_Items_Quantity_Delete>;
  read?: Maybe<OrdersDocAccessFields_Items_Quantity_Read>;
  update?: Maybe<OrdersDocAccessFields_Items_Quantity_Update>;
};

export type OrdersDocAccessFields_Items_Quantity_Create = {
  __typename?: 'OrdersDocAccessFields_items_quantity_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Quantity_Delete = {
  __typename?: 'OrdersDocAccessFields_items_quantity_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Quantity_Read = {
  __typename?: 'OrdersDocAccessFields_items_quantity_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Quantity_Update = {
  __typename?: 'OrdersDocAccessFields_items_quantity_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Variant = {
  __typename?: 'OrdersDocAccessFields_items_variant';
  create?: Maybe<OrdersDocAccessFields_Items_Variant_Create>;
  delete?: Maybe<OrdersDocAccessFields_Items_Variant_Delete>;
  read?: Maybe<OrdersDocAccessFields_Items_Variant_Read>;
  update?: Maybe<OrdersDocAccessFields_Items_Variant_Update>;
};

export type OrdersDocAccessFields_Items_Variant_Create = {
  __typename?: 'OrdersDocAccessFields_items_variant_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Variant_Delete = {
  __typename?: 'OrdersDocAccessFields_items_variant_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Variant_Read = {
  __typename?: 'OrdersDocAccessFields_items_variant_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Variant_Update = {
  __typename?: 'OrdersDocAccessFields_items_variant_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress = {
  __typename?: 'OrdersDocAccessFields_shippingAddress';
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_Delete>;
  fields?: Maybe<OrdersDocAccessFields_ShippingAddress_Fields>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_Create = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Delete = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Fields = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_Fields';
  addressLine1?: Maybe<OrdersDocAccessFields_ShippingAddress_AddressLine1>;
  addressLine2?: Maybe<OrdersDocAccessFields_ShippingAddress_AddressLine2>;
  city?: Maybe<OrdersDocAccessFields_ShippingAddress_City>;
  company?: Maybe<OrdersDocAccessFields_ShippingAddress_Company>;
  country?: Maybe<OrdersDocAccessFields_ShippingAddress_Country>;
  firstName?: Maybe<OrdersDocAccessFields_ShippingAddress_FirstName>;
  lastName?: Maybe<OrdersDocAccessFields_ShippingAddress_LastName>;
  phone?: Maybe<OrdersDocAccessFields_ShippingAddress_Phone>;
  postalCode?: Maybe<OrdersDocAccessFields_ShippingAddress_PostalCode>;
  state?: Maybe<OrdersDocAccessFields_ShippingAddress_State>;
  title?: Maybe<OrdersDocAccessFields_ShippingAddress_Title>;
};

export type OrdersDocAccessFields_ShippingAddress_Read = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Update = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_AddressLine1 = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_addressLine1';
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_AddressLine1_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_AddressLine1_Delete>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_AddressLine1_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_AddressLine1_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_AddressLine1_Create = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_addressLine1_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_AddressLine1_Delete = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_addressLine1_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_AddressLine1_Read = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_addressLine1_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_AddressLine1_Update = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_addressLine1_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_AddressLine2 = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_addressLine2';
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_AddressLine2_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_AddressLine2_Delete>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_AddressLine2_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_AddressLine2_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_AddressLine2_Create = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_addressLine2_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_AddressLine2_Delete = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_addressLine2_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_AddressLine2_Read = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_addressLine2_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_AddressLine2_Update = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_addressLine2_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_City = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_city';
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_City_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_City_Delete>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_City_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_City_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_City_Create = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_city_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_City_Delete = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_city_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_City_Read = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_city_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_City_Update = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_city_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Company = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_company';
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_Company_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_Company_Delete>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_Company_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_Company_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_Company_Create = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_company_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Company_Delete = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_company_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Company_Read = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_company_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Company_Update = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_company_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Country = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_country';
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_Country_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_Country_Delete>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_Country_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_Country_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_Country_Create = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_country_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Country_Delete = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_country_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Country_Read = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_country_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Country_Update = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_country_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_FirstName = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_firstName';
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_FirstName_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_FirstName_Delete>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_FirstName_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_FirstName_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_FirstName_Create = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_firstName_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_FirstName_Delete = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_firstName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_FirstName_Read = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_firstName_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_FirstName_Update = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_firstName_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_LastName = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_lastName';
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_LastName_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_LastName_Delete>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_LastName_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_LastName_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_LastName_Create = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_lastName_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_LastName_Delete = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_lastName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_LastName_Read = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_lastName_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_LastName_Update = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_lastName_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Phone = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_phone';
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_Phone_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_Phone_Delete>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_Phone_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_Phone_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_Phone_Create = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Phone_Delete = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Phone_Read = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Phone_Update = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_PostalCode = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_postalCode';
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_PostalCode_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_PostalCode_Delete>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_PostalCode_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_PostalCode_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_PostalCode_Create = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_postalCode_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_PostalCode_Delete = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_postalCode_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_PostalCode_Read = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_postalCode_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_PostalCode_Update = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_postalCode_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_State = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_state';
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_State_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_State_Delete>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_State_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_State_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_State_Create = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_state_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_State_Delete = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_state_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_State_Read = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_state_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_State_Update = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_state_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Title = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_title';
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_Title_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_Title_Delete>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_Title_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_Title_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_Title_Create = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Title_Delete = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Title_Read = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Title_Update = {
  __typename?: 'OrdersDocAccessFields_shippingAddress_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Status = {
  __typename?: 'OrdersDocAccessFields_status';
  create?: Maybe<OrdersDocAccessFields_Status_Create>;
  delete?: Maybe<OrdersDocAccessFields_Status_Delete>;
  read?: Maybe<OrdersDocAccessFields_Status_Read>;
  update?: Maybe<OrdersDocAccessFields_Status_Update>;
};

export type OrdersDocAccessFields_Status_Create = {
  __typename?: 'OrdersDocAccessFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Status_Delete = {
  __typename?: 'OrdersDocAccessFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Status_Read = {
  __typename?: 'OrdersDocAccessFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Status_Update = {
  __typename?: 'OrdersDocAccessFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Transactions = {
  __typename?: 'OrdersDocAccessFields_transactions';
  create?: Maybe<OrdersDocAccessFields_Transactions_Create>;
  delete?: Maybe<OrdersDocAccessFields_Transactions_Delete>;
  read?: Maybe<OrdersDocAccessFields_Transactions_Read>;
  update?: Maybe<OrdersDocAccessFields_Transactions_Update>;
};

export type OrdersDocAccessFields_Transactions_Create = {
  __typename?: 'OrdersDocAccessFields_transactions_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Transactions_Delete = {
  __typename?: 'OrdersDocAccessFields_transactions_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Transactions_Read = {
  __typename?: 'OrdersDocAccessFields_transactions_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Transactions_Update = {
  __typename?: 'OrdersDocAccessFields_transactions_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_UpdatedAt = {
  __typename?: 'OrdersDocAccessFields_updatedAt';
  create?: Maybe<OrdersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<OrdersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<OrdersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<OrdersDocAccessFields_UpdatedAt_Update>;
};

export type OrdersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'OrdersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'OrdersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'OrdersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'OrdersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields = {
  __typename?: 'OrdersFields';
  amount?: Maybe<OrdersFields_Amount>;
  createdAt?: Maybe<OrdersFields_CreatedAt>;
  currency?: Maybe<OrdersFields_Currency>;
  customer?: Maybe<OrdersFields_Customer>;
  customerEmail?: Maybe<OrdersFields_CustomerEmail>;
  items?: Maybe<OrdersFields_Items>;
  shippingAddress?: Maybe<OrdersFields_ShippingAddress>;
  status?: Maybe<OrdersFields_Status>;
  transactions?: Maybe<OrdersFields_Transactions>;
  updatedAt?: Maybe<OrdersFields_UpdatedAt>;
};

export type OrdersFields_Amount = {
  __typename?: 'OrdersFields_amount';
  create?: Maybe<OrdersFields_Amount_Create>;
  delete?: Maybe<OrdersFields_Amount_Delete>;
  read?: Maybe<OrdersFields_Amount_Read>;
  update?: Maybe<OrdersFields_Amount_Update>;
};

export type OrdersFields_Amount_Create = {
  __typename?: 'OrdersFields_amount_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Amount_Delete = {
  __typename?: 'OrdersFields_amount_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Amount_Read = {
  __typename?: 'OrdersFields_amount_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Amount_Update = {
  __typename?: 'OrdersFields_amount_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CreatedAt = {
  __typename?: 'OrdersFields_createdAt';
  create?: Maybe<OrdersFields_CreatedAt_Create>;
  delete?: Maybe<OrdersFields_CreatedAt_Delete>;
  read?: Maybe<OrdersFields_CreatedAt_Read>;
  update?: Maybe<OrdersFields_CreatedAt_Update>;
};

export type OrdersFields_CreatedAt_Create = {
  __typename?: 'OrdersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CreatedAt_Delete = {
  __typename?: 'OrdersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CreatedAt_Read = {
  __typename?: 'OrdersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CreatedAt_Update = {
  __typename?: 'OrdersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Currency = {
  __typename?: 'OrdersFields_currency';
  create?: Maybe<OrdersFields_Currency_Create>;
  delete?: Maybe<OrdersFields_Currency_Delete>;
  read?: Maybe<OrdersFields_Currency_Read>;
  update?: Maybe<OrdersFields_Currency_Update>;
};

export type OrdersFields_Currency_Create = {
  __typename?: 'OrdersFields_currency_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Currency_Delete = {
  __typename?: 'OrdersFields_currency_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Currency_Read = {
  __typename?: 'OrdersFields_currency_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Currency_Update = {
  __typename?: 'OrdersFields_currency_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Customer = {
  __typename?: 'OrdersFields_customer';
  create?: Maybe<OrdersFields_Customer_Create>;
  delete?: Maybe<OrdersFields_Customer_Delete>;
  read?: Maybe<OrdersFields_Customer_Read>;
  update?: Maybe<OrdersFields_Customer_Update>;
};

export type OrdersFields_CustomerEmail = {
  __typename?: 'OrdersFields_customerEmail';
  create?: Maybe<OrdersFields_CustomerEmail_Create>;
  delete?: Maybe<OrdersFields_CustomerEmail_Delete>;
  read?: Maybe<OrdersFields_CustomerEmail_Read>;
  update?: Maybe<OrdersFields_CustomerEmail_Update>;
};

export type OrdersFields_CustomerEmail_Create = {
  __typename?: 'OrdersFields_customerEmail_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CustomerEmail_Delete = {
  __typename?: 'OrdersFields_customerEmail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CustomerEmail_Read = {
  __typename?: 'OrdersFields_customerEmail_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CustomerEmail_Update = {
  __typename?: 'OrdersFields_customerEmail_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Customer_Create = {
  __typename?: 'OrdersFields_customer_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Customer_Delete = {
  __typename?: 'OrdersFields_customer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Customer_Read = {
  __typename?: 'OrdersFields_customer_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Customer_Update = {
  __typename?: 'OrdersFields_customer_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items = {
  __typename?: 'OrdersFields_items';
  create?: Maybe<OrdersFields_Items_Create>;
  delete?: Maybe<OrdersFields_Items_Delete>;
  fields?: Maybe<OrdersFields_Items_Fields>;
  read?: Maybe<OrdersFields_Items_Read>;
  update?: Maybe<OrdersFields_Items_Update>;
};

export type OrdersFields_Items_Create = {
  __typename?: 'OrdersFields_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Delete = {
  __typename?: 'OrdersFields_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Fields = {
  __typename?: 'OrdersFields_items_Fields';
  id?: Maybe<OrdersFields_Items_Id>;
  product?: Maybe<OrdersFields_Items_Product>;
  quantity?: Maybe<OrdersFields_Items_Quantity>;
  variant?: Maybe<OrdersFields_Items_Variant>;
};

export type OrdersFields_Items_Read = {
  __typename?: 'OrdersFields_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Update = {
  __typename?: 'OrdersFields_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Id = {
  __typename?: 'OrdersFields_items_id';
  create?: Maybe<OrdersFields_Items_Id_Create>;
  delete?: Maybe<OrdersFields_Items_Id_Delete>;
  read?: Maybe<OrdersFields_Items_Id_Read>;
  update?: Maybe<OrdersFields_Items_Id_Update>;
};

export type OrdersFields_Items_Id_Create = {
  __typename?: 'OrdersFields_items_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Id_Delete = {
  __typename?: 'OrdersFields_items_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Id_Read = {
  __typename?: 'OrdersFields_items_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Id_Update = {
  __typename?: 'OrdersFields_items_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Product = {
  __typename?: 'OrdersFields_items_product';
  create?: Maybe<OrdersFields_Items_Product_Create>;
  delete?: Maybe<OrdersFields_Items_Product_Delete>;
  read?: Maybe<OrdersFields_Items_Product_Read>;
  update?: Maybe<OrdersFields_Items_Product_Update>;
};

export type OrdersFields_Items_Product_Create = {
  __typename?: 'OrdersFields_items_product_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Product_Delete = {
  __typename?: 'OrdersFields_items_product_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Product_Read = {
  __typename?: 'OrdersFields_items_product_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Product_Update = {
  __typename?: 'OrdersFields_items_product_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Quantity = {
  __typename?: 'OrdersFields_items_quantity';
  create?: Maybe<OrdersFields_Items_Quantity_Create>;
  delete?: Maybe<OrdersFields_Items_Quantity_Delete>;
  read?: Maybe<OrdersFields_Items_Quantity_Read>;
  update?: Maybe<OrdersFields_Items_Quantity_Update>;
};

export type OrdersFields_Items_Quantity_Create = {
  __typename?: 'OrdersFields_items_quantity_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Quantity_Delete = {
  __typename?: 'OrdersFields_items_quantity_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Quantity_Read = {
  __typename?: 'OrdersFields_items_quantity_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Quantity_Update = {
  __typename?: 'OrdersFields_items_quantity_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Variant = {
  __typename?: 'OrdersFields_items_variant';
  create?: Maybe<OrdersFields_Items_Variant_Create>;
  delete?: Maybe<OrdersFields_Items_Variant_Delete>;
  read?: Maybe<OrdersFields_Items_Variant_Read>;
  update?: Maybe<OrdersFields_Items_Variant_Update>;
};

export type OrdersFields_Items_Variant_Create = {
  __typename?: 'OrdersFields_items_variant_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Variant_Delete = {
  __typename?: 'OrdersFields_items_variant_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Variant_Read = {
  __typename?: 'OrdersFields_items_variant_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Variant_Update = {
  __typename?: 'OrdersFields_items_variant_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress = {
  __typename?: 'OrdersFields_shippingAddress';
  create?: Maybe<OrdersFields_ShippingAddress_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_Delete>;
  fields?: Maybe<OrdersFields_ShippingAddress_Fields>;
  read?: Maybe<OrdersFields_ShippingAddress_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_Update>;
};

export type OrdersFields_ShippingAddress_Create = {
  __typename?: 'OrdersFields_shippingAddress_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Delete = {
  __typename?: 'OrdersFields_shippingAddress_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Fields = {
  __typename?: 'OrdersFields_shippingAddress_Fields';
  addressLine1?: Maybe<OrdersFields_ShippingAddress_AddressLine1>;
  addressLine2?: Maybe<OrdersFields_ShippingAddress_AddressLine2>;
  city?: Maybe<OrdersFields_ShippingAddress_City>;
  company?: Maybe<OrdersFields_ShippingAddress_Company>;
  country?: Maybe<OrdersFields_ShippingAddress_Country>;
  firstName?: Maybe<OrdersFields_ShippingAddress_FirstName>;
  lastName?: Maybe<OrdersFields_ShippingAddress_LastName>;
  phone?: Maybe<OrdersFields_ShippingAddress_Phone>;
  postalCode?: Maybe<OrdersFields_ShippingAddress_PostalCode>;
  state?: Maybe<OrdersFields_ShippingAddress_State>;
  title?: Maybe<OrdersFields_ShippingAddress_Title>;
};

export type OrdersFields_ShippingAddress_Read = {
  __typename?: 'OrdersFields_shippingAddress_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Update = {
  __typename?: 'OrdersFields_shippingAddress_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_AddressLine1 = {
  __typename?: 'OrdersFields_shippingAddress_addressLine1';
  create?: Maybe<OrdersFields_ShippingAddress_AddressLine1_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_AddressLine1_Delete>;
  read?: Maybe<OrdersFields_ShippingAddress_AddressLine1_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_AddressLine1_Update>;
};

export type OrdersFields_ShippingAddress_AddressLine1_Create = {
  __typename?: 'OrdersFields_shippingAddress_addressLine1_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_AddressLine1_Delete = {
  __typename?: 'OrdersFields_shippingAddress_addressLine1_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_AddressLine1_Read = {
  __typename?: 'OrdersFields_shippingAddress_addressLine1_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_AddressLine1_Update = {
  __typename?: 'OrdersFields_shippingAddress_addressLine1_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_AddressLine2 = {
  __typename?: 'OrdersFields_shippingAddress_addressLine2';
  create?: Maybe<OrdersFields_ShippingAddress_AddressLine2_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_AddressLine2_Delete>;
  read?: Maybe<OrdersFields_ShippingAddress_AddressLine2_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_AddressLine2_Update>;
};

export type OrdersFields_ShippingAddress_AddressLine2_Create = {
  __typename?: 'OrdersFields_shippingAddress_addressLine2_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_AddressLine2_Delete = {
  __typename?: 'OrdersFields_shippingAddress_addressLine2_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_AddressLine2_Read = {
  __typename?: 'OrdersFields_shippingAddress_addressLine2_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_AddressLine2_Update = {
  __typename?: 'OrdersFields_shippingAddress_addressLine2_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_City = {
  __typename?: 'OrdersFields_shippingAddress_city';
  create?: Maybe<OrdersFields_ShippingAddress_City_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_City_Delete>;
  read?: Maybe<OrdersFields_ShippingAddress_City_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_City_Update>;
};

export type OrdersFields_ShippingAddress_City_Create = {
  __typename?: 'OrdersFields_shippingAddress_city_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_City_Delete = {
  __typename?: 'OrdersFields_shippingAddress_city_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_City_Read = {
  __typename?: 'OrdersFields_shippingAddress_city_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_City_Update = {
  __typename?: 'OrdersFields_shippingAddress_city_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Company = {
  __typename?: 'OrdersFields_shippingAddress_company';
  create?: Maybe<OrdersFields_ShippingAddress_Company_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_Company_Delete>;
  read?: Maybe<OrdersFields_ShippingAddress_Company_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_Company_Update>;
};

export type OrdersFields_ShippingAddress_Company_Create = {
  __typename?: 'OrdersFields_shippingAddress_company_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Company_Delete = {
  __typename?: 'OrdersFields_shippingAddress_company_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Company_Read = {
  __typename?: 'OrdersFields_shippingAddress_company_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Company_Update = {
  __typename?: 'OrdersFields_shippingAddress_company_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Country = {
  __typename?: 'OrdersFields_shippingAddress_country';
  create?: Maybe<OrdersFields_ShippingAddress_Country_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_Country_Delete>;
  read?: Maybe<OrdersFields_ShippingAddress_Country_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_Country_Update>;
};

export type OrdersFields_ShippingAddress_Country_Create = {
  __typename?: 'OrdersFields_shippingAddress_country_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Country_Delete = {
  __typename?: 'OrdersFields_shippingAddress_country_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Country_Read = {
  __typename?: 'OrdersFields_shippingAddress_country_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Country_Update = {
  __typename?: 'OrdersFields_shippingAddress_country_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_FirstName = {
  __typename?: 'OrdersFields_shippingAddress_firstName';
  create?: Maybe<OrdersFields_ShippingAddress_FirstName_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_FirstName_Delete>;
  read?: Maybe<OrdersFields_ShippingAddress_FirstName_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_FirstName_Update>;
};

export type OrdersFields_ShippingAddress_FirstName_Create = {
  __typename?: 'OrdersFields_shippingAddress_firstName_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_FirstName_Delete = {
  __typename?: 'OrdersFields_shippingAddress_firstName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_FirstName_Read = {
  __typename?: 'OrdersFields_shippingAddress_firstName_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_FirstName_Update = {
  __typename?: 'OrdersFields_shippingAddress_firstName_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_LastName = {
  __typename?: 'OrdersFields_shippingAddress_lastName';
  create?: Maybe<OrdersFields_ShippingAddress_LastName_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_LastName_Delete>;
  read?: Maybe<OrdersFields_ShippingAddress_LastName_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_LastName_Update>;
};

export type OrdersFields_ShippingAddress_LastName_Create = {
  __typename?: 'OrdersFields_shippingAddress_lastName_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_LastName_Delete = {
  __typename?: 'OrdersFields_shippingAddress_lastName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_LastName_Read = {
  __typename?: 'OrdersFields_shippingAddress_lastName_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_LastName_Update = {
  __typename?: 'OrdersFields_shippingAddress_lastName_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Phone = {
  __typename?: 'OrdersFields_shippingAddress_phone';
  create?: Maybe<OrdersFields_ShippingAddress_Phone_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_Phone_Delete>;
  read?: Maybe<OrdersFields_ShippingAddress_Phone_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_Phone_Update>;
};

export type OrdersFields_ShippingAddress_Phone_Create = {
  __typename?: 'OrdersFields_shippingAddress_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Phone_Delete = {
  __typename?: 'OrdersFields_shippingAddress_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Phone_Read = {
  __typename?: 'OrdersFields_shippingAddress_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Phone_Update = {
  __typename?: 'OrdersFields_shippingAddress_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_PostalCode = {
  __typename?: 'OrdersFields_shippingAddress_postalCode';
  create?: Maybe<OrdersFields_ShippingAddress_PostalCode_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_PostalCode_Delete>;
  read?: Maybe<OrdersFields_ShippingAddress_PostalCode_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_PostalCode_Update>;
};

export type OrdersFields_ShippingAddress_PostalCode_Create = {
  __typename?: 'OrdersFields_shippingAddress_postalCode_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_PostalCode_Delete = {
  __typename?: 'OrdersFields_shippingAddress_postalCode_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_PostalCode_Read = {
  __typename?: 'OrdersFields_shippingAddress_postalCode_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_PostalCode_Update = {
  __typename?: 'OrdersFields_shippingAddress_postalCode_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_State = {
  __typename?: 'OrdersFields_shippingAddress_state';
  create?: Maybe<OrdersFields_ShippingAddress_State_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_State_Delete>;
  read?: Maybe<OrdersFields_ShippingAddress_State_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_State_Update>;
};

export type OrdersFields_ShippingAddress_State_Create = {
  __typename?: 'OrdersFields_shippingAddress_state_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_State_Delete = {
  __typename?: 'OrdersFields_shippingAddress_state_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_State_Read = {
  __typename?: 'OrdersFields_shippingAddress_state_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_State_Update = {
  __typename?: 'OrdersFields_shippingAddress_state_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Title = {
  __typename?: 'OrdersFields_shippingAddress_title';
  create?: Maybe<OrdersFields_ShippingAddress_Title_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_Title_Delete>;
  read?: Maybe<OrdersFields_ShippingAddress_Title_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_Title_Update>;
};

export type OrdersFields_ShippingAddress_Title_Create = {
  __typename?: 'OrdersFields_shippingAddress_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Title_Delete = {
  __typename?: 'OrdersFields_shippingAddress_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Title_Read = {
  __typename?: 'OrdersFields_shippingAddress_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Title_Update = {
  __typename?: 'OrdersFields_shippingAddress_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Status = {
  __typename?: 'OrdersFields_status';
  create?: Maybe<OrdersFields_Status_Create>;
  delete?: Maybe<OrdersFields_Status_Delete>;
  read?: Maybe<OrdersFields_Status_Read>;
  update?: Maybe<OrdersFields_Status_Update>;
};

export type OrdersFields_Status_Create = {
  __typename?: 'OrdersFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Status_Delete = {
  __typename?: 'OrdersFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Status_Read = {
  __typename?: 'OrdersFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Status_Update = {
  __typename?: 'OrdersFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Transactions = {
  __typename?: 'OrdersFields_transactions';
  create?: Maybe<OrdersFields_Transactions_Create>;
  delete?: Maybe<OrdersFields_Transactions_Delete>;
  read?: Maybe<OrdersFields_Transactions_Read>;
  update?: Maybe<OrdersFields_Transactions_Update>;
};

export type OrdersFields_Transactions_Create = {
  __typename?: 'OrdersFields_transactions_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Transactions_Delete = {
  __typename?: 'OrdersFields_transactions_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Transactions_Read = {
  __typename?: 'OrdersFields_transactions_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Transactions_Update = {
  __typename?: 'OrdersFields_transactions_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_UpdatedAt = {
  __typename?: 'OrdersFields_updatedAt';
  create?: Maybe<OrdersFields_UpdatedAt_Create>;
  delete?: Maybe<OrdersFields_UpdatedAt_Delete>;
  read?: Maybe<OrdersFields_UpdatedAt_Read>;
  update?: Maybe<OrdersFields_UpdatedAt_Update>;
};

export type OrdersFields_UpdatedAt_Create = {
  __typename?: 'OrdersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_UpdatedAt_Delete = {
  __typename?: 'OrdersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_UpdatedAt_Read = {
  __typename?: 'OrdersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_UpdatedAt_Update = {
  __typename?: 'OrdersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersReadAccess = {
  __typename?: 'OrdersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersReadDocAccess = {
  __typename?: 'OrdersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersUpdateAccess = {
  __typename?: 'OrdersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersUpdateDocAccess = {
  __typename?: 'OrdersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Page = {
  __typename?: 'Page';
  _status?: Maybe<Page__Status>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  generateSlug?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Int']['output'];
  layout?: Maybe<Array<Page_Layout>>;
  meta?: Maybe<Page_Meta>;
  publishedOn?: Maybe<Scalars['DateTime']['output']>;
  richText?: Maybe<Scalars['JSON']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PageRichTextArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type PageVersion = {
  __typename?: 'PageVersion';
  autosave?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  latest?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Page>;
  publishedLocale?: Maybe<PageVersion_PublishedLocale>;
  snapshot?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<PageVersion_Version>;
};


export type PageVersionParentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type PageVersion_Version = {
  __typename?: 'PageVersion_Version';
  _status?: Maybe<PageVersion_Version__Status>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  generateSlug?: Maybe<Scalars['Boolean']['output']>;
  layout?: Maybe<Array<PageVersion_Version_Layout>>;
  meta?: Maybe<PageVersion_Version_Meta>;
  publishedOn?: Maybe<Scalars['DateTime']['output']>;
  richText?: Maybe<Scalars['JSON']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PageVersion_VersionRichTextArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type PageVersion_Version_Layout = ArchiveBlock | BannerBlock | CallToActionBlock | CarouselBlock | ContentBlock | FormBlock | MediaBlock | ThreeItemGridBlock;

export type PageVersion_Version_Meta = {
  __typename?: 'PageVersion_Version_Meta';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
};


export type PageVersion_Version_MetaImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export enum PageVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum PageVersion_PublishedLocale {
  De = 'de',
  En = 'en'
}

export type Page_Layout = ArchiveBlock | BannerBlock | CallToActionBlock | CarouselBlock | ContentBlock | FormBlock | MediaBlock | ThreeItemGridBlock;

export type Page_Meta = {
  __typename?: 'Page_Meta';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Page_MetaImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export enum Page__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum Page__Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export enum Page__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type Page__Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Page__Status_Input>>>;
  equals?: InputMaybe<Page__Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Page__Status_Input>>>;
  not_equals?: InputMaybe<Page__Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Page__Status_Input>>>;
};

export type Page_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_GenerateSlug_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Page_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Page_Meta__Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Page_Meta__Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Page_Meta__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_PublishedOn_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_RichText_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Page_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Where = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  _status?: InputMaybe<Page__Status_Operator>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  generateSlug?: InputMaybe<Page_GenerateSlug_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  meta__description?: InputMaybe<Page_Meta__Description_Operator>;
  meta__image?: InputMaybe<Page_Meta__Image_Operator>;
  meta__title?: InputMaybe<Page_Meta__Title_Operator>;
  publishedOn?: InputMaybe<Page_PublishedOn_Operator>;
  richText?: InputMaybe<Page_RichText_Operator>;
  slug?: InputMaybe<Page_Slug_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  _status?: InputMaybe<Page__Status_Operator>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  generateSlug?: InputMaybe<Page_GenerateSlug_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  meta__description?: InputMaybe<Page_Meta__Description_Operator>;
  meta__image?: InputMaybe<Page_Meta__Image_Operator>;
  meta__title?: InputMaybe<Page_Meta__Title_Operator>;
  publishedOn?: InputMaybe<Page_PublishedOn_Operator>;
  richText?: InputMaybe<Page_RichText_Operator>;
  slug?: InputMaybe<Page_Slug_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  _status?: InputMaybe<Page__Status_Operator>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  generateSlug?: InputMaybe<Page_GenerateSlug_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  meta__description?: InputMaybe<Page_Meta__Description_Operator>;
  meta__image?: InputMaybe<Page_Meta__Image_Operator>;
  meta__title?: InputMaybe<Page_Meta__Title_Operator>;
  publishedOn?: InputMaybe<Page_PublishedOn_Operator>;
  richText?: InputMaybe<Page_RichText_Operator>;
  slug?: InputMaybe<Page_Slug_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Pages = {
  __typename?: 'Pages';
  docs: Array<Page>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PagesCreateAccess = {
  __typename?: 'PagesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesCreateDocAccess = {
  __typename?: 'PagesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDeleteAccess = {
  __typename?: 'PagesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDeleteDocAccess = {
  __typename?: 'PagesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDocAccessFields = {
  __typename?: 'PagesDocAccessFields';
  _status?: Maybe<PagesDocAccessFields__Status>;
  createdAt?: Maybe<PagesDocAccessFields_CreatedAt>;
  generateSlug?: Maybe<PagesDocAccessFields_GenerateSlug>;
  layout?: Maybe<PagesDocAccessFields_Layout>;
  meta?: Maybe<PagesDocAccessFields_Meta>;
  publishedOn?: Maybe<PagesDocAccessFields_PublishedOn>;
  richText?: Maybe<PagesDocAccessFields_RichText>;
  slug?: Maybe<PagesDocAccessFields_Slug>;
  title?: Maybe<PagesDocAccessFields_Title>;
  updatedAt?: Maybe<PagesDocAccessFields_UpdatedAt>;
};

export type PagesDocAccessFields__Status = {
  __typename?: 'PagesDocAccessFields__status';
  create?: Maybe<PagesDocAccessFields__Status_Create>;
  delete?: Maybe<PagesDocAccessFields__Status_Delete>;
  read?: Maybe<PagesDocAccessFields__Status_Read>;
  update?: Maybe<PagesDocAccessFields__Status_Update>;
};

export type PagesDocAccessFields__Status_Create = {
  __typename?: 'PagesDocAccessFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields__Status_Delete = {
  __typename?: 'PagesDocAccessFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields__Status_Read = {
  __typename?: 'PagesDocAccessFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields__Status_Update = {
  __typename?: 'PagesDocAccessFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt = {
  __typename?: 'PagesDocAccessFields_createdAt';
  create?: Maybe<PagesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PagesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PagesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PagesDocAccessFields_CreatedAt_Update>;
};

export type PagesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PagesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PagesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PagesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PagesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_GenerateSlug = {
  __typename?: 'PagesDocAccessFields_generateSlug';
  create?: Maybe<PagesDocAccessFields_GenerateSlug_Create>;
  delete?: Maybe<PagesDocAccessFields_GenerateSlug_Delete>;
  read?: Maybe<PagesDocAccessFields_GenerateSlug_Read>;
  update?: Maybe<PagesDocAccessFields_GenerateSlug_Update>;
};

export type PagesDocAccessFields_GenerateSlug_Create = {
  __typename?: 'PagesDocAccessFields_generateSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_GenerateSlug_Delete = {
  __typename?: 'PagesDocAccessFields_generateSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_GenerateSlug_Read = {
  __typename?: 'PagesDocAccessFields_generateSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_GenerateSlug_Update = {
  __typename?: 'PagesDocAccessFields_generateSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Layout = {
  __typename?: 'PagesDocAccessFields_layout';
  create?: Maybe<PagesDocAccessFields_Layout_Create>;
  delete?: Maybe<PagesDocAccessFields_Layout_Delete>;
  read?: Maybe<PagesDocAccessFields_Layout_Read>;
  update?: Maybe<PagesDocAccessFields_Layout_Update>;
};

export type PagesDocAccessFields_Layout_Create = {
  __typename?: 'PagesDocAccessFields_layout_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Layout_Delete = {
  __typename?: 'PagesDocAccessFields_layout_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Layout_Read = {
  __typename?: 'PagesDocAccessFields_layout_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Layout_Update = {
  __typename?: 'PagesDocAccessFields_layout_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta = {
  __typename?: 'PagesDocAccessFields_meta';
  description?: Maybe<PagesDocAccessFields_Meta_Description>;
  image?: Maybe<PagesDocAccessFields_Meta_Image>;
  title?: Maybe<PagesDocAccessFields_Meta_Title>;
};

export type PagesDocAccessFields_Meta_Description = {
  __typename?: 'PagesDocAccessFields_meta_description';
  create?: Maybe<PagesDocAccessFields_Meta_Description_Create>;
  delete?: Maybe<PagesDocAccessFields_Meta_Description_Delete>;
  read?: Maybe<PagesDocAccessFields_Meta_Description_Read>;
  update?: Maybe<PagesDocAccessFields_Meta_Description_Update>;
};

export type PagesDocAccessFields_Meta_Description_Create = {
  __typename?: 'PagesDocAccessFields_meta_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Description_Delete = {
  __typename?: 'PagesDocAccessFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Description_Read = {
  __typename?: 'PagesDocAccessFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Description_Update = {
  __typename?: 'PagesDocAccessFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Image = {
  __typename?: 'PagesDocAccessFields_meta_image';
  create?: Maybe<PagesDocAccessFields_Meta_Image_Create>;
  delete?: Maybe<PagesDocAccessFields_Meta_Image_Delete>;
  read?: Maybe<PagesDocAccessFields_Meta_Image_Read>;
  update?: Maybe<PagesDocAccessFields_Meta_Image_Update>;
};

export type PagesDocAccessFields_Meta_Image_Create = {
  __typename?: 'PagesDocAccessFields_meta_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Image_Delete = {
  __typename?: 'PagesDocAccessFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Image_Read = {
  __typename?: 'PagesDocAccessFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Image_Update = {
  __typename?: 'PagesDocAccessFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Title = {
  __typename?: 'PagesDocAccessFields_meta_title';
  create?: Maybe<PagesDocAccessFields_Meta_Title_Create>;
  delete?: Maybe<PagesDocAccessFields_Meta_Title_Delete>;
  read?: Maybe<PagesDocAccessFields_Meta_Title_Read>;
  update?: Maybe<PagesDocAccessFields_Meta_Title_Update>;
};

export type PagesDocAccessFields_Meta_Title_Create = {
  __typename?: 'PagesDocAccessFields_meta_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Title_Delete = {
  __typename?: 'PagesDocAccessFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Title_Read = {
  __typename?: 'PagesDocAccessFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Title_Update = {
  __typename?: 'PagesDocAccessFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PublishedOn = {
  __typename?: 'PagesDocAccessFields_publishedOn';
  create?: Maybe<PagesDocAccessFields_PublishedOn_Create>;
  delete?: Maybe<PagesDocAccessFields_PublishedOn_Delete>;
  read?: Maybe<PagesDocAccessFields_PublishedOn_Read>;
  update?: Maybe<PagesDocAccessFields_PublishedOn_Update>;
};

export type PagesDocAccessFields_PublishedOn_Create = {
  __typename?: 'PagesDocAccessFields_publishedOn_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PublishedOn_Delete = {
  __typename?: 'PagesDocAccessFields_publishedOn_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PublishedOn_Read = {
  __typename?: 'PagesDocAccessFields_publishedOn_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PublishedOn_Update = {
  __typename?: 'PagesDocAccessFields_publishedOn_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_RichText = {
  __typename?: 'PagesDocAccessFields_richText';
  create?: Maybe<PagesDocAccessFields_RichText_Create>;
  delete?: Maybe<PagesDocAccessFields_RichText_Delete>;
  read?: Maybe<PagesDocAccessFields_RichText_Read>;
  update?: Maybe<PagesDocAccessFields_RichText_Update>;
};

export type PagesDocAccessFields_RichText_Create = {
  __typename?: 'PagesDocAccessFields_richText_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_RichText_Delete = {
  __typename?: 'PagesDocAccessFields_richText_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_RichText_Read = {
  __typename?: 'PagesDocAccessFields_richText_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_RichText_Update = {
  __typename?: 'PagesDocAccessFields_richText_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug = {
  __typename?: 'PagesDocAccessFields_slug';
  create?: Maybe<PagesDocAccessFields_Slug_Create>;
  delete?: Maybe<PagesDocAccessFields_Slug_Delete>;
  read?: Maybe<PagesDocAccessFields_Slug_Read>;
  update?: Maybe<PagesDocAccessFields_Slug_Update>;
};

export type PagesDocAccessFields_Slug_Create = {
  __typename?: 'PagesDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Delete = {
  __typename?: 'PagesDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Read = {
  __typename?: 'PagesDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Update = {
  __typename?: 'PagesDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title = {
  __typename?: 'PagesDocAccessFields_title';
  create?: Maybe<PagesDocAccessFields_Title_Create>;
  delete?: Maybe<PagesDocAccessFields_Title_Delete>;
  read?: Maybe<PagesDocAccessFields_Title_Read>;
  update?: Maybe<PagesDocAccessFields_Title_Update>;
};

export type PagesDocAccessFields_Title_Create = {
  __typename?: 'PagesDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Delete = {
  __typename?: 'PagesDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Read = {
  __typename?: 'PagesDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Update = {
  __typename?: 'PagesDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt = {
  __typename?: 'PagesDocAccessFields_updatedAt';
  create?: Maybe<PagesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PagesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PagesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PagesDocAccessFields_UpdatedAt_Update>;
};

export type PagesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PagesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PagesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PagesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PagesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields = {
  __typename?: 'PagesFields';
  _status?: Maybe<PagesFields__Status>;
  createdAt?: Maybe<PagesFields_CreatedAt>;
  generateSlug?: Maybe<PagesFields_GenerateSlug>;
  layout?: Maybe<PagesFields_Layout>;
  meta?: Maybe<PagesFields_Meta>;
  publishedOn?: Maybe<PagesFields_PublishedOn>;
  richText?: Maybe<PagesFields_RichText>;
  slug?: Maybe<PagesFields_Slug>;
  title?: Maybe<PagesFields_Title>;
  updatedAt?: Maybe<PagesFields_UpdatedAt>;
};

export type PagesFields__Status = {
  __typename?: 'PagesFields__status';
  create?: Maybe<PagesFields__Status_Create>;
  delete?: Maybe<PagesFields__Status_Delete>;
  read?: Maybe<PagesFields__Status_Read>;
  update?: Maybe<PagesFields__Status_Update>;
};

export type PagesFields__Status_Create = {
  __typename?: 'PagesFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields__Status_Delete = {
  __typename?: 'PagesFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields__Status_Read = {
  __typename?: 'PagesFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields__Status_Update = {
  __typename?: 'PagesFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt = {
  __typename?: 'PagesFields_createdAt';
  create?: Maybe<PagesFields_CreatedAt_Create>;
  delete?: Maybe<PagesFields_CreatedAt_Delete>;
  read?: Maybe<PagesFields_CreatedAt_Read>;
  update?: Maybe<PagesFields_CreatedAt_Update>;
};

export type PagesFields_CreatedAt_Create = {
  __typename?: 'PagesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Delete = {
  __typename?: 'PagesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Read = {
  __typename?: 'PagesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Update = {
  __typename?: 'PagesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_GenerateSlug = {
  __typename?: 'PagesFields_generateSlug';
  create?: Maybe<PagesFields_GenerateSlug_Create>;
  delete?: Maybe<PagesFields_GenerateSlug_Delete>;
  read?: Maybe<PagesFields_GenerateSlug_Read>;
  update?: Maybe<PagesFields_GenerateSlug_Update>;
};

export type PagesFields_GenerateSlug_Create = {
  __typename?: 'PagesFields_generateSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_GenerateSlug_Delete = {
  __typename?: 'PagesFields_generateSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_GenerateSlug_Read = {
  __typename?: 'PagesFields_generateSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_GenerateSlug_Update = {
  __typename?: 'PagesFields_generateSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Layout = {
  __typename?: 'PagesFields_layout';
  create?: Maybe<PagesFields_Layout_Create>;
  delete?: Maybe<PagesFields_Layout_Delete>;
  read?: Maybe<PagesFields_Layout_Read>;
  update?: Maybe<PagesFields_Layout_Update>;
};

export type PagesFields_Layout_Create = {
  __typename?: 'PagesFields_layout_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Layout_Delete = {
  __typename?: 'PagesFields_layout_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Layout_Read = {
  __typename?: 'PagesFields_layout_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Layout_Update = {
  __typename?: 'PagesFields_layout_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta = {
  __typename?: 'PagesFields_meta';
  description?: Maybe<PagesFields_Meta_Description>;
  image?: Maybe<PagesFields_Meta_Image>;
  title?: Maybe<PagesFields_Meta_Title>;
};

export type PagesFields_Meta_Description = {
  __typename?: 'PagesFields_meta_description';
  create?: Maybe<PagesFields_Meta_Description_Create>;
  delete?: Maybe<PagesFields_Meta_Description_Delete>;
  read?: Maybe<PagesFields_Meta_Description_Read>;
  update?: Maybe<PagesFields_Meta_Description_Update>;
};

export type PagesFields_Meta_Description_Create = {
  __typename?: 'PagesFields_meta_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Description_Delete = {
  __typename?: 'PagesFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Description_Read = {
  __typename?: 'PagesFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Description_Update = {
  __typename?: 'PagesFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Image = {
  __typename?: 'PagesFields_meta_image';
  create?: Maybe<PagesFields_Meta_Image_Create>;
  delete?: Maybe<PagesFields_Meta_Image_Delete>;
  read?: Maybe<PagesFields_Meta_Image_Read>;
  update?: Maybe<PagesFields_Meta_Image_Update>;
};

export type PagesFields_Meta_Image_Create = {
  __typename?: 'PagesFields_meta_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Image_Delete = {
  __typename?: 'PagesFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Image_Read = {
  __typename?: 'PagesFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Image_Update = {
  __typename?: 'PagesFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Title = {
  __typename?: 'PagesFields_meta_title';
  create?: Maybe<PagesFields_Meta_Title_Create>;
  delete?: Maybe<PagesFields_Meta_Title_Delete>;
  read?: Maybe<PagesFields_Meta_Title_Read>;
  update?: Maybe<PagesFields_Meta_Title_Update>;
};

export type PagesFields_Meta_Title_Create = {
  __typename?: 'PagesFields_meta_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Title_Delete = {
  __typename?: 'PagesFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Title_Read = {
  __typename?: 'PagesFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Title_Update = {
  __typename?: 'PagesFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_PublishedOn = {
  __typename?: 'PagesFields_publishedOn';
  create?: Maybe<PagesFields_PublishedOn_Create>;
  delete?: Maybe<PagesFields_PublishedOn_Delete>;
  read?: Maybe<PagesFields_PublishedOn_Read>;
  update?: Maybe<PagesFields_PublishedOn_Update>;
};

export type PagesFields_PublishedOn_Create = {
  __typename?: 'PagesFields_publishedOn_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_PublishedOn_Delete = {
  __typename?: 'PagesFields_publishedOn_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_PublishedOn_Read = {
  __typename?: 'PagesFields_publishedOn_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_PublishedOn_Update = {
  __typename?: 'PagesFields_publishedOn_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_RichText = {
  __typename?: 'PagesFields_richText';
  create?: Maybe<PagesFields_RichText_Create>;
  delete?: Maybe<PagesFields_RichText_Delete>;
  read?: Maybe<PagesFields_RichText_Read>;
  update?: Maybe<PagesFields_RichText_Update>;
};

export type PagesFields_RichText_Create = {
  __typename?: 'PagesFields_richText_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_RichText_Delete = {
  __typename?: 'PagesFields_richText_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_RichText_Read = {
  __typename?: 'PagesFields_richText_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_RichText_Update = {
  __typename?: 'PagesFields_richText_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug = {
  __typename?: 'PagesFields_slug';
  create?: Maybe<PagesFields_Slug_Create>;
  delete?: Maybe<PagesFields_Slug_Delete>;
  read?: Maybe<PagesFields_Slug_Read>;
  update?: Maybe<PagesFields_Slug_Update>;
};

export type PagesFields_Slug_Create = {
  __typename?: 'PagesFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Delete = {
  __typename?: 'PagesFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Read = {
  __typename?: 'PagesFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Update = {
  __typename?: 'PagesFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title = {
  __typename?: 'PagesFields_title';
  create?: Maybe<PagesFields_Title_Create>;
  delete?: Maybe<PagesFields_Title_Delete>;
  read?: Maybe<PagesFields_Title_Read>;
  update?: Maybe<PagesFields_Title_Update>;
};

export type PagesFields_Title_Create = {
  __typename?: 'PagesFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Delete = {
  __typename?: 'PagesFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Read = {
  __typename?: 'PagesFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Update = {
  __typename?: 'PagesFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt = {
  __typename?: 'PagesFields_updatedAt';
  create?: Maybe<PagesFields_UpdatedAt_Create>;
  delete?: Maybe<PagesFields_UpdatedAt_Delete>;
  read?: Maybe<PagesFields_UpdatedAt_Read>;
  update?: Maybe<PagesFields_UpdatedAt_Update>;
};

export type PagesFields_UpdatedAt_Create = {
  __typename?: 'PagesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Delete = {
  __typename?: 'PagesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Read = {
  __typename?: 'PagesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Update = {
  __typename?: 'PagesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesReadAccess = {
  __typename?: 'PagesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesReadDocAccess = {
  __typename?: 'PagesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesReadVersionsAccess = {
  __typename?: 'PagesReadVersionsAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesReadVersionsDocAccess = {
  __typename?: 'PagesReadVersionsDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesUpdateAccess = {
  __typename?: 'PagesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesUpdateDocAccess = {
  __typename?: 'PagesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocument = {
  __typename?: 'PayloadLockedDocument';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  document?: Maybe<PayloadLockedDocument_Document_Relationship>;
  globalSlug?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: PayloadLockedDocument_User_Relationship;
};


export type PayloadLockedDocumentDocumentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type PayloadLockedDocumentUserArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type PayloadLockedDocumentUpdate_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo {
  Addresses = 'addresses',
  Carts = 'carts',
  Categories = 'categories',
  FormSubmissions = 'form_submissions',
  Forms = 'forms',
  Media = 'media',
  Orders = 'orders',
  Pages = 'pages',
  Products = 'products',
  SvgMedia = 'svg_media',
  Transactions = 'transactions',
  Users = 'users',
  VariantOptions = 'variantOptions',
  VariantTypes = 'variantTypes',
  Variants = 'variants'
}

export type PayloadLockedDocumentUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_Document = Address | Cart | Category | Form | FormSubmission | Media | Order | Page | Product | SvgMedia | Transaction | User | Variant | VariantOption | VariantType;

export type PayloadLockedDocument_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_DocumentRelationshipInputRelationTo {
  Addresses = 'addresses',
  Carts = 'carts',
  Categories = 'categories',
  FormSubmissions = 'form_submissions',
  Forms = 'forms',
  Media = 'media',
  Orders = 'orders',
  Pages = 'pages',
  Products = 'products',
  SvgMedia = 'svg_media',
  Transactions = 'transactions',
  Users = 'users',
  VariantOptions = 'variantOptions',
  VariantTypes = 'variantTypes',
  Variants = 'variants'
}

export enum PayloadLockedDocument_Document_RelationTo {
  Addresses = 'addresses',
  Carts = 'carts',
  Categories = 'categories',
  FormSubmissions = 'form_submissions',
  Forms = 'forms',
  Media = 'media',
  Orders = 'orders',
  Pages = 'pages',
  Products = 'products',
  SvgMedia = 'svg_media',
  Transactions = 'transactions',
  Users = 'users',
  VariantOptions = 'variantOptions',
  VariantTypes = 'variantTypes',
  Variants = 'variants'
}

export type PayloadLockedDocument_Document_Relationship = {
  __typename?: 'PayloadLockedDocument_Document_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_Document_RelationTo>;
  value?: Maybe<PayloadLockedDocument_Document>;
};

export type PayloadLockedDocument_User = User;

export type PayloadLockedDocument_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadLockedDocument_User_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_User_Relationship = {
  __typename?: 'PayloadLockedDocument_User_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_User_RelationTo>;
  value?: Maybe<PayloadLockedDocument_User>;
};

export type PayloadLockedDocument_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_Document_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_Document_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_Document_Relation_RelationTo {
  Addresses = 'addresses',
  Carts = 'carts',
  Categories = 'categories',
  FormSubmissions = 'form_submissions',
  Forms = 'forms',
  Media = 'media',
  Orders = 'orders',
  Pages = 'pages',
  Products = 'products',
  SvgMedia = 'svg_media',
  Transactions = 'transactions',
  Users = 'users',
  VariantOptions = 'variantOptions',
  VariantTypes = 'variantTypes',
  Variants = 'variants'
}

export type PayloadLockedDocument_GlobalSlug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadLockedDocument_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type PayloadLockedDocument_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_User_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocuments = {
  __typename?: 'PayloadLockedDocuments';
  docs: Array<PayloadLockedDocument>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadLockedDocumentsCreateAccess = {
  __typename?: 'PayloadLockedDocumentsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsCreateDocAccess = {
  __typename?: 'PayloadLockedDocumentsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteDocAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDocAccessFields = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields';
  createdAt?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt>;
  document?: Maybe<PayloadLockedDocumentsDocAccessFields_Document>;
  globalSlug?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadLockedDocumentsDocAccessFields_User>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields = {
  __typename?: 'PayloadLockedDocumentsFields';
  createdAt?: Maybe<PayloadLockedDocumentsFields_CreatedAt>;
  document?: Maybe<PayloadLockedDocumentsFields_Document>;
  globalSlug?: Maybe<PayloadLockedDocumentsFields_GlobalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsFields_UpdatedAt>;
  user?: Maybe<PayloadLockedDocumentsFields_User>;
};

export type PayloadLockedDocumentsFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document = {
  __typename?: 'PayloadLockedDocumentsFields_document';
  create?: Maybe<PayloadLockedDocumentsFields_Document_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_Document_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_Document_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_Document_Update>;
};

export type PayloadLockedDocumentsFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User = {
  __typename?: 'PayloadLockedDocumentsFields_user';
  create?: Maybe<PayloadLockedDocumentsFields_User_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_User_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_User_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_User_Update>;
};

export type PayloadLockedDocumentsFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsReadAccess = {
  __typename?: 'PayloadLockedDocumentsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsReadDocAccess = {
  __typename?: 'PayloadLockedDocumentsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateDocAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  key?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: PayloadPreference_User_Relationship;
  value?: Maybe<Scalars['JSON']['output']>;
};


export type PayloadPreferenceUserArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadPreference_User_RelationTo {
  Users = 'users'
}

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  value?: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type PayloadPreference_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_User_Relation = {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadPreference_Value_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs: Array<PayloadPreference>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_User>;
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesFields_User>;
  value?: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key = {
  __typename?: 'PayloadPreferencesFields_key';
  create?: Maybe<PayloadPreferencesFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesFields_Key_Read>;
  update?: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User = {
  __typename?: 'PayloadPreferencesFields_user';
  create?: Maybe<PayloadPreferencesFields_User_Create>;
  delete?: Maybe<PayloadPreferencesFields_User_Delete>;
  read?: Maybe<PayloadPreferencesFields_User_Read>;
  update?: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value = {
  __typename?: 'PayloadPreferencesFields_value';
  create?: Maybe<PayloadPreferencesFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesFields_Value_Read>;
  update?: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Product = {
  __typename?: 'Product';
  _status?: Maybe<Product__Status>;
  categories?: Maybe<Array<Category>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['JSON']['output']>;
  enableVariants?: Maybe<Scalars['Boolean']['output']>;
  gallery?: Maybe<Array<Product_Gallery>>;
  generateSlug?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Int']['output'];
  inventory?: Maybe<Scalars['Float']['output']>;
  layout?: Maybe<Array<Product_Layout>>;
  meta?: Maybe<Product_Meta>;
  priceInUSD?: Maybe<Scalars['Float']['output']>;
  priceInUSDEnabled?: Maybe<Scalars['Boolean']['output']>;
  relatedProducts?: Maybe<Array<Product>>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  variantTypes?: Maybe<Array<VariantType>>;
  variants?: Maybe<Product_Variants>;
};


export type ProductCategoriesArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type ProductDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductRelatedProductsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type ProductVariantTypesArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type ProductVariantsArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Variant_Where>;
};

export enum ProductUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type ProductVersion = {
  __typename?: 'ProductVersion';
  autosave?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  latest?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Product>;
  publishedLocale?: Maybe<ProductVersion_PublishedLocale>;
  snapshot?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<ProductVersion_Version>;
};


export type ProductVersionParentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type ProductVersion_Version = {
  __typename?: 'ProductVersion_Version';
  _status?: Maybe<ProductVersion_Version__Status>;
  categories?: Maybe<Array<Category>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['JSON']['output']>;
  enableVariants?: Maybe<Scalars['Boolean']['output']>;
  gallery?: Maybe<Array<ProductVersion_Version_Gallery>>;
  generateSlug?: Maybe<Scalars['Boolean']['output']>;
  inventory?: Maybe<Scalars['Float']['output']>;
  layout?: Maybe<Array<ProductVersion_Version_Layout>>;
  meta?: Maybe<ProductVersion_Version_Meta>;
  priceInUSD?: Maybe<Scalars['Float']['output']>;
  priceInUSDEnabled?: Maybe<Scalars['Boolean']['output']>;
  relatedProducts?: Maybe<Array<Product>>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  variantTypes?: Maybe<Array<VariantType>>;
  variants?: Maybe<ProductVersion_Version_Variants>;
};


export type ProductVersion_VersionCategoriesArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type ProductVersion_VersionDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductVersion_VersionRelatedProductsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type ProductVersion_VersionVariantTypesArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type ProductVersion_VersionVariantsArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Variant_Where>;
};

export type ProductVersion_Version_Gallery = {
  __typename?: 'ProductVersion_Version_Gallery';
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  variantOption?: Maybe<VariantOption>;
};


export type ProductVersion_Version_GalleryImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type ProductVersion_Version_GalleryVariantOptionArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type ProductVersion_Version_Layout = CallToActionBlock | ContentBlock | MediaBlock;

export type ProductVersion_Version_Meta = {
  __typename?: 'ProductVersion_Version_Meta';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ProductVersion_Version_MetaImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type ProductVersion_Version_Variants = {
  __typename?: 'ProductVersion_Version_Variants';
  docs: Array<Variant>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export enum ProductVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum ProductVersion_PublishedLocale {
  De = 'de',
  En = 'en'
}

export type Product_Gallery = {
  __typename?: 'Product_Gallery';
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  variantOption?: Maybe<VariantOption>;
};


export type Product_GalleryImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type Product_GalleryVariantOptionArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type Product_Layout = CallToActionBlock | ContentBlock | MediaBlock;

export type Product_Meta = {
  __typename?: 'Product_Meta';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Product_MetaImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type Product_Variants = {
  __typename?: 'Product_Variants';
  docs: Array<Variant>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export enum Product__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum Product__Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export enum Product__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type Product__Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Product__Status_Input>>>;
  equals?: InputMaybe<Product__Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Product__Status_Input>>>;
  not_equals?: InputMaybe<Product__Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Product__Status_Input>>>;
};

export type Product_Categories_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Product_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Product_DeletedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Product_Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Product_EnableVariants_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_Gallery__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Gallery__Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Product_Gallery__VariantOption_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Product_GenerateSlug_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Product_Inventory_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Product_Meta__Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Product_Meta__Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Product_Meta__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_PriceInUsdEnabled_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_PriceInUsd_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Product_RelatedProducts_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Product_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Product_VariantTypes_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Product_Where = {
  AND?: InputMaybe<Array<InputMaybe<Product_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Product_Where_Or>>>;
  _status?: InputMaybe<Product__Status_Operator>;
  categories?: InputMaybe<Product_Categories_Operator>;
  createdAt?: InputMaybe<Product_CreatedAt_Operator>;
  deletedAt?: InputMaybe<Product_DeletedAt_Operator>;
  description?: InputMaybe<Product_Description_Operator>;
  enableVariants?: InputMaybe<Product_EnableVariants_Operator>;
  gallery__id?: InputMaybe<Product_Gallery__Id_Operator>;
  gallery__image?: InputMaybe<Product_Gallery__Image_Operator>;
  gallery__variantOption?: InputMaybe<Product_Gallery__VariantOption_Operator>;
  generateSlug?: InputMaybe<Product_GenerateSlug_Operator>;
  id?: InputMaybe<Product_Id_Operator>;
  inventory?: InputMaybe<Product_Inventory_Operator>;
  meta__description?: InputMaybe<Product_Meta__Description_Operator>;
  meta__image?: InputMaybe<Product_Meta__Image_Operator>;
  meta__title?: InputMaybe<Product_Meta__Title_Operator>;
  priceInUSD?: InputMaybe<Product_PriceInUsd_Operator>;
  priceInUSDEnabled?: InputMaybe<Product_PriceInUsdEnabled_Operator>;
  relatedProducts?: InputMaybe<Product_RelatedProducts_Operator>;
  slug?: InputMaybe<Product_Slug_Operator>;
  title?: InputMaybe<Product_Title_Operator>;
  updatedAt?: InputMaybe<Product_UpdatedAt_Operator>;
  variantTypes?: InputMaybe<Product_VariantTypes_Operator>;
};

export type Product_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Product_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Product_Where_Or>>>;
  _status?: InputMaybe<Product__Status_Operator>;
  categories?: InputMaybe<Product_Categories_Operator>;
  createdAt?: InputMaybe<Product_CreatedAt_Operator>;
  deletedAt?: InputMaybe<Product_DeletedAt_Operator>;
  description?: InputMaybe<Product_Description_Operator>;
  enableVariants?: InputMaybe<Product_EnableVariants_Operator>;
  gallery__id?: InputMaybe<Product_Gallery__Id_Operator>;
  gallery__image?: InputMaybe<Product_Gallery__Image_Operator>;
  gallery__variantOption?: InputMaybe<Product_Gallery__VariantOption_Operator>;
  generateSlug?: InputMaybe<Product_GenerateSlug_Operator>;
  id?: InputMaybe<Product_Id_Operator>;
  inventory?: InputMaybe<Product_Inventory_Operator>;
  meta__description?: InputMaybe<Product_Meta__Description_Operator>;
  meta__image?: InputMaybe<Product_Meta__Image_Operator>;
  meta__title?: InputMaybe<Product_Meta__Title_Operator>;
  priceInUSD?: InputMaybe<Product_PriceInUsd_Operator>;
  priceInUSDEnabled?: InputMaybe<Product_PriceInUsdEnabled_Operator>;
  relatedProducts?: InputMaybe<Product_RelatedProducts_Operator>;
  slug?: InputMaybe<Product_Slug_Operator>;
  title?: InputMaybe<Product_Title_Operator>;
  updatedAt?: InputMaybe<Product_UpdatedAt_Operator>;
  variantTypes?: InputMaybe<Product_VariantTypes_Operator>;
};

export type Product_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Product_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Product_Where_Or>>>;
  _status?: InputMaybe<Product__Status_Operator>;
  categories?: InputMaybe<Product_Categories_Operator>;
  createdAt?: InputMaybe<Product_CreatedAt_Operator>;
  deletedAt?: InputMaybe<Product_DeletedAt_Operator>;
  description?: InputMaybe<Product_Description_Operator>;
  enableVariants?: InputMaybe<Product_EnableVariants_Operator>;
  gallery__id?: InputMaybe<Product_Gallery__Id_Operator>;
  gallery__image?: InputMaybe<Product_Gallery__Image_Operator>;
  gallery__variantOption?: InputMaybe<Product_Gallery__VariantOption_Operator>;
  generateSlug?: InputMaybe<Product_GenerateSlug_Operator>;
  id?: InputMaybe<Product_Id_Operator>;
  inventory?: InputMaybe<Product_Inventory_Operator>;
  meta__description?: InputMaybe<Product_Meta__Description_Operator>;
  meta__image?: InputMaybe<Product_Meta__Image_Operator>;
  meta__title?: InputMaybe<Product_Meta__Title_Operator>;
  priceInUSD?: InputMaybe<Product_PriceInUsd_Operator>;
  priceInUSDEnabled?: InputMaybe<Product_PriceInUsdEnabled_Operator>;
  relatedProducts?: InputMaybe<Product_RelatedProducts_Operator>;
  slug?: InputMaybe<Product_Slug_Operator>;
  title?: InputMaybe<Product_Title_Operator>;
  updatedAt?: InputMaybe<Product_UpdatedAt_Operator>;
  variantTypes?: InputMaybe<Product_VariantTypes_Operator>;
};

export type Products = {
  __typename?: 'Products';
  docs: Array<Product>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type ProductsCreateAccess = {
  __typename?: 'ProductsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsCreateDocAccess = {
  __typename?: 'ProductsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsDeleteAccess = {
  __typename?: 'ProductsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsDeleteDocAccess = {
  __typename?: 'ProductsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsDocAccessFields = {
  __typename?: 'ProductsDocAccessFields';
  _status?: Maybe<ProductsDocAccessFields__Status>;
  categories?: Maybe<ProductsDocAccessFields_Categories>;
  createdAt?: Maybe<ProductsDocAccessFields_CreatedAt>;
  deletedAt?: Maybe<ProductsDocAccessFields_DeletedAt>;
  description?: Maybe<ProductsDocAccessFields_Description>;
  enableVariants?: Maybe<ProductsDocAccessFields_EnableVariants>;
  gallery?: Maybe<ProductsDocAccessFields_Gallery>;
  generateSlug?: Maybe<ProductsDocAccessFields_GenerateSlug>;
  inventory?: Maybe<ProductsDocAccessFields_Inventory>;
  layout?: Maybe<ProductsDocAccessFields_Layout>;
  meta?: Maybe<ProductsDocAccessFields_Meta>;
  priceInUSD?: Maybe<ProductsDocAccessFields_PriceInUsd>;
  priceInUSDEnabled?: Maybe<ProductsDocAccessFields_PriceInUsdEnabled>;
  relatedProducts?: Maybe<ProductsDocAccessFields_RelatedProducts>;
  slug?: Maybe<ProductsDocAccessFields_Slug>;
  title?: Maybe<ProductsDocAccessFields_Title>;
  updatedAt?: Maybe<ProductsDocAccessFields_UpdatedAt>;
  variantTypes?: Maybe<ProductsDocAccessFields_VariantTypes>;
  variants?: Maybe<ProductsDocAccessFields_Variants>;
};

export type ProductsDocAccessFields__Status = {
  __typename?: 'ProductsDocAccessFields__status';
  create?: Maybe<ProductsDocAccessFields__Status_Create>;
  delete?: Maybe<ProductsDocAccessFields__Status_Delete>;
  read?: Maybe<ProductsDocAccessFields__Status_Read>;
  update?: Maybe<ProductsDocAccessFields__Status_Update>;
};

export type ProductsDocAccessFields__Status_Create = {
  __typename?: 'ProductsDocAccessFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields__Status_Delete = {
  __typename?: 'ProductsDocAccessFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields__Status_Read = {
  __typename?: 'ProductsDocAccessFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields__Status_Update = {
  __typename?: 'ProductsDocAccessFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Categories = {
  __typename?: 'ProductsDocAccessFields_categories';
  create?: Maybe<ProductsDocAccessFields_Categories_Create>;
  delete?: Maybe<ProductsDocAccessFields_Categories_Delete>;
  read?: Maybe<ProductsDocAccessFields_Categories_Read>;
  update?: Maybe<ProductsDocAccessFields_Categories_Update>;
};

export type ProductsDocAccessFields_Categories_Create = {
  __typename?: 'ProductsDocAccessFields_categories_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Categories_Delete = {
  __typename?: 'ProductsDocAccessFields_categories_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Categories_Read = {
  __typename?: 'ProductsDocAccessFields_categories_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Categories_Update = {
  __typename?: 'ProductsDocAccessFields_categories_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CreatedAt = {
  __typename?: 'ProductsDocAccessFields_createdAt';
  create?: Maybe<ProductsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ProductsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ProductsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ProductsDocAccessFields_CreatedAt_Update>;
};

export type ProductsDocAccessFields_CreatedAt_Create = {
  __typename?: 'ProductsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ProductsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CreatedAt_Read = {
  __typename?: 'ProductsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CreatedAt_Update = {
  __typename?: 'ProductsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_DeletedAt = {
  __typename?: 'ProductsDocAccessFields_deletedAt';
  create?: Maybe<ProductsDocAccessFields_DeletedAt_Create>;
  delete?: Maybe<ProductsDocAccessFields_DeletedAt_Delete>;
  read?: Maybe<ProductsDocAccessFields_DeletedAt_Read>;
  update?: Maybe<ProductsDocAccessFields_DeletedAt_Update>;
};

export type ProductsDocAccessFields_DeletedAt_Create = {
  __typename?: 'ProductsDocAccessFields_deletedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_DeletedAt_Delete = {
  __typename?: 'ProductsDocAccessFields_deletedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_DeletedAt_Read = {
  __typename?: 'ProductsDocAccessFields_deletedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_DeletedAt_Update = {
  __typename?: 'ProductsDocAccessFields_deletedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Description = {
  __typename?: 'ProductsDocAccessFields_description';
  create?: Maybe<ProductsDocAccessFields_Description_Create>;
  delete?: Maybe<ProductsDocAccessFields_Description_Delete>;
  read?: Maybe<ProductsDocAccessFields_Description_Read>;
  update?: Maybe<ProductsDocAccessFields_Description_Update>;
};

export type ProductsDocAccessFields_Description_Create = {
  __typename?: 'ProductsDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Description_Delete = {
  __typename?: 'ProductsDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Description_Read = {
  __typename?: 'ProductsDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Description_Update = {
  __typename?: 'ProductsDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_EnableVariants = {
  __typename?: 'ProductsDocAccessFields_enableVariants';
  create?: Maybe<ProductsDocAccessFields_EnableVariants_Create>;
  delete?: Maybe<ProductsDocAccessFields_EnableVariants_Delete>;
  read?: Maybe<ProductsDocAccessFields_EnableVariants_Read>;
  update?: Maybe<ProductsDocAccessFields_EnableVariants_Update>;
};

export type ProductsDocAccessFields_EnableVariants_Create = {
  __typename?: 'ProductsDocAccessFields_enableVariants_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_EnableVariants_Delete = {
  __typename?: 'ProductsDocAccessFields_enableVariants_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_EnableVariants_Read = {
  __typename?: 'ProductsDocAccessFields_enableVariants_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_EnableVariants_Update = {
  __typename?: 'ProductsDocAccessFields_enableVariants_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery = {
  __typename?: 'ProductsDocAccessFields_gallery';
  create?: Maybe<ProductsDocAccessFields_Gallery_Create>;
  delete?: Maybe<ProductsDocAccessFields_Gallery_Delete>;
  fields?: Maybe<ProductsDocAccessFields_Gallery_Fields>;
  read?: Maybe<ProductsDocAccessFields_Gallery_Read>;
  update?: Maybe<ProductsDocAccessFields_Gallery_Update>;
};

export type ProductsDocAccessFields_Gallery_Create = {
  __typename?: 'ProductsDocAccessFields_gallery_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery_Delete = {
  __typename?: 'ProductsDocAccessFields_gallery_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery_Fields = {
  __typename?: 'ProductsDocAccessFields_gallery_Fields';
  id?: Maybe<ProductsDocAccessFields_Gallery_Id>;
  image?: Maybe<ProductsDocAccessFields_Gallery_Image>;
  variantOption?: Maybe<ProductsDocAccessFields_Gallery_VariantOption>;
};

export type ProductsDocAccessFields_Gallery_Read = {
  __typename?: 'ProductsDocAccessFields_gallery_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery_Update = {
  __typename?: 'ProductsDocAccessFields_gallery_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery_Id = {
  __typename?: 'ProductsDocAccessFields_gallery_id';
  create?: Maybe<ProductsDocAccessFields_Gallery_Id_Create>;
  delete?: Maybe<ProductsDocAccessFields_Gallery_Id_Delete>;
  read?: Maybe<ProductsDocAccessFields_Gallery_Id_Read>;
  update?: Maybe<ProductsDocAccessFields_Gallery_Id_Update>;
};

export type ProductsDocAccessFields_Gallery_Id_Create = {
  __typename?: 'ProductsDocAccessFields_gallery_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery_Id_Delete = {
  __typename?: 'ProductsDocAccessFields_gallery_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery_Id_Read = {
  __typename?: 'ProductsDocAccessFields_gallery_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery_Id_Update = {
  __typename?: 'ProductsDocAccessFields_gallery_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery_Image = {
  __typename?: 'ProductsDocAccessFields_gallery_image';
  create?: Maybe<ProductsDocAccessFields_Gallery_Image_Create>;
  delete?: Maybe<ProductsDocAccessFields_Gallery_Image_Delete>;
  read?: Maybe<ProductsDocAccessFields_Gallery_Image_Read>;
  update?: Maybe<ProductsDocAccessFields_Gallery_Image_Update>;
};

export type ProductsDocAccessFields_Gallery_Image_Create = {
  __typename?: 'ProductsDocAccessFields_gallery_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery_Image_Delete = {
  __typename?: 'ProductsDocAccessFields_gallery_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery_Image_Read = {
  __typename?: 'ProductsDocAccessFields_gallery_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery_Image_Update = {
  __typename?: 'ProductsDocAccessFields_gallery_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery_VariantOption = {
  __typename?: 'ProductsDocAccessFields_gallery_variantOption';
  create?: Maybe<ProductsDocAccessFields_Gallery_VariantOption_Create>;
  delete?: Maybe<ProductsDocAccessFields_Gallery_VariantOption_Delete>;
  read?: Maybe<ProductsDocAccessFields_Gallery_VariantOption_Read>;
  update?: Maybe<ProductsDocAccessFields_Gallery_VariantOption_Update>;
};

export type ProductsDocAccessFields_Gallery_VariantOption_Create = {
  __typename?: 'ProductsDocAccessFields_gallery_variantOption_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery_VariantOption_Delete = {
  __typename?: 'ProductsDocAccessFields_gallery_variantOption_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery_VariantOption_Read = {
  __typename?: 'ProductsDocAccessFields_gallery_variantOption_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery_VariantOption_Update = {
  __typename?: 'ProductsDocAccessFields_gallery_variantOption_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_GenerateSlug = {
  __typename?: 'ProductsDocAccessFields_generateSlug';
  create?: Maybe<ProductsDocAccessFields_GenerateSlug_Create>;
  delete?: Maybe<ProductsDocAccessFields_GenerateSlug_Delete>;
  read?: Maybe<ProductsDocAccessFields_GenerateSlug_Read>;
  update?: Maybe<ProductsDocAccessFields_GenerateSlug_Update>;
};

export type ProductsDocAccessFields_GenerateSlug_Create = {
  __typename?: 'ProductsDocAccessFields_generateSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_GenerateSlug_Delete = {
  __typename?: 'ProductsDocAccessFields_generateSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_GenerateSlug_Read = {
  __typename?: 'ProductsDocAccessFields_generateSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_GenerateSlug_Update = {
  __typename?: 'ProductsDocAccessFields_generateSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Inventory = {
  __typename?: 'ProductsDocAccessFields_inventory';
  create?: Maybe<ProductsDocAccessFields_Inventory_Create>;
  delete?: Maybe<ProductsDocAccessFields_Inventory_Delete>;
  read?: Maybe<ProductsDocAccessFields_Inventory_Read>;
  update?: Maybe<ProductsDocAccessFields_Inventory_Update>;
};

export type ProductsDocAccessFields_Inventory_Create = {
  __typename?: 'ProductsDocAccessFields_inventory_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Inventory_Delete = {
  __typename?: 'ProductsDocAccessFields_inventory_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Inventory_Read = {
  __typename?: 'ProductsDocAccessFields_inventory_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Inventory_Update = {
  __typename?: 'ProductsDocAccessFields_inventory_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Layout = {
  __typename?: 'ProductsDocAccessFields_layout';
  create?: Maybe<ProductsDocAccessFields_Layout_Create>;
  delete?: Maybe<ProductsDocAccessFields_Layout_Delete>;
  read?: Maybe<ProductsDocAccessFields_Layout_Read>;
  update?: Maybe<ProductsDocAccessFields_Layout_Update>;
};

export type ProductsDocAccessFields_Layout_Create = {
  __typename?: 'ProductsDocAccessFields_layout_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Layout_Delete = {
  __typename?: 'ProductsDocAccessFields_layout_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Layout_Read = {
  __typename?: 'ProductsDocAccessFields_layout_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Layout_Update = {
  __typename?: 'ProductsDocAccessFields_layout_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta = {
  __typename?: 'ProductsDocAccessFields_meta';
  description?: Maybe<ProductsDocAccessFields_Meta_Description>;
  image?: Maybe<ProductsDocAccessFields_Meta_Image>;
  title?: Maybe<ProductsDocAccessFields_Meta_Title>;
};

export type ProductsDocAccessFields_Meta_Description = {
  __typename?: 'ProductsDocAccessFields_meta_description';
  create?: Maybe<ProductsDocAccessFields_Meta_Description_Create>;
  delete?: Maybe<ProductsDocAccessFields_Meta_Description_Delete>;
  read?: Maybe<ProductsDocAccessFields_Meta_Description_Read>;
  update?: Maybe<ProductsDocAccessFields_Meta_Description_Update>;
};

export type ProductsDocAccessFields_Meta_Description_Create = {
  __typename?: 'ProductsDocAccessFields_meta_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta_Description_Delete = {
  __typename?: 'ProductsDocAccessFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta_Description_Read = {
  __typename?: 'ProductsDocAccessFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta_Description_Update = {
  __typename?: 'ProductsDocAccessFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta_Image = {
  __typename?: 'ProductsDocAccessFields_meta_image';
  create?: Maybe<ProductsDocAccessFields_Meta_Image_Create>;
  delete?: Maybe<ProductsDocAccessFields_Meta_Image_Delete>;
  read?: Maybe<ProductsDocAccessFields_Meta_Image_Read>;
  update?: Maybe<ProductsDocAccessFields_Meta_Image_Update>;
};

export type ProductsDocAccessFields_Meta_Image_Create = {
  __typename?: 'ProductsDocAccessFields_meta_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta_Image_Delete = {
  __typename?: 'ProductsDocAccessFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta_Image_Read = {
  __typename?: 'ProductsDocAccessFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta_Image_Update = {
  __typename?: 'ProductsDocAccessFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta_Title = {
  __typename?: 'ProductsDocAccessFields_meta_title';
  create?: Maybe<ProductsDocAccessFields_Meta_Title_Create>;
  delete?: Maybe<ProductsDocAccessFields_Meta_Title_Delete>;
  read?: Maybe<ProductsDocAccessFields_Meta_Title_Read>;
  update?: Maybe<ProductsDocAccessFields_Meta_Title_Update>;
};

export type ProductsDocAccessFields_Meta_Title_Create = {
  __typename?: 'ProductsDocAccessFields_meta_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta_Title_Delete = {
  __typename?: 'ProductsDocAccessFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta_Title_Read = {
  __typename?: 'ProductsDocAccessFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta_Title_Update = {
  __typename?: 'ProductsDocAccessFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PriceInUsd = {
  __typename?: 'ProductsDocAccessFields_priceInUSD';
  create?: Maybe<ProductsDocAccessFields_PriceInUsd_Create>;
  delete?: Maybe<ProductsDocAccessFields_PriceInUsd_Delete>;
  read?: Maybe<ProductsDocAccessFields_PriceInUsd_Read>;
  update?: Maybe<ProductsDocAccessFields_PriceInUsd_Update>;
};

export type ProductsDocAccessFields_PriceInUsdEnabled = {
  __typename?: 'ProductsDocAccessFields_priceInUSDEnabled';
  create?: Maybe<ProductsDocAccessFields_PriceInUsdEnabled_Create>;
  delete?: Maybe<ProductsDocAccessFields_PriceInUsdEnabled_Delete>;
  read?: Maybe<ProductsDocAccessFields_PriceInUsdEnabled_Read>;
  update?: Maybe<ProductsDocAccessFields_PriceInUsdEnabled_Update>;
};

export type ProductsDocAccessFields_PriceInUsdEnabled_Create = {
  __typename?: 'ProductsDocAccessFields_priceInUSDEnabled_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PriceInUsdEnabled_Delete = {
  __typename?: 'ProductsDocAccessFields_priceInUSDEnabled_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PriceInUsdEnabled_Read = {
  __typename?: 'ProductsDocAccessFields_priceInUSDEnabled_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PriceInUsdEnabled_Update = {
  __typename?: 'ProductsDocAccessFields_priceInUSDEnabled_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PriceInUsd_Create = {
  __typename?: 'ProductsDocAccessFields_priceInUSD_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PriceInUsd_Delete = {
  __typename?: 'ProductsDocAccessFields_priceInUSD_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PriceInUsd_Read = {
  __typename?: 'ProductsDocAccessFields_priceInUSD_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PriceInUsd_Update = {
  __typename?: 'ProductsDocAccessFields_priceInUSD_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_RelatedProducts = {
  __typename?: 'ProductsDocAccessFields_relatedProducts';
  create?: Maybe<ProductsDocAccessFields_RelatedProducts_Create>;
  delete?: Maybe<ProductsDocAccessFields_RelatedProducts_Delete>;
  read?: Maybe<ProductsDocAccessFields_RelatedProducts_Read>;
  update?: Maybe<ProductsDocAccessFields_RelatedProducts_Update>;
};

export type ProductsDocAccessFields_RelatedProducts_Create = {
  __typename?: 'ProductsDocAccessFields_relatedProducts_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_RelatedProducts_Delete = {
  __typename?: 'ProductsDocAccessFields_relatedProducts_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_RelatedProducts_Read = {
  __typename?: 'ProductsDocAccessFields_relatedProducts_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_RelatedProducts_Update = {
  __typename?: 'ProductsDocAccessFields_relatedProducts_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Slug = {
  __typename?: 'ProductsDocAccessFields_slug';
  create?: Maybe<ProductsDocAccessFields_Slug_Create>;
  delete?: Maybe<ProductsDocAccessFields_Slug_Delete>;
  read?: Maybe<ProductsDocAccessFields_Slug_Read>;
  update?: Maybe<ProductsDocAccessFields_Slug_Update>;
};

export type ProductsDocAccessFields_Slug_Create = {
  __typename?: 'ProductsDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Slug_Delete = {
  __typename?: 'ProductsDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Slug_Read = {
  __typename?: 'ProductsDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Slug_Update = {
  __typename?: 'ProductsDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Title = {
  __typename?: 'ProductsDocAccessFields_title';
  create?: Maybe<ProductsDocAccessFields_Title_Create>;
  delete?: Maybe<ProductsDocAccessFields_Title_Delete>;
  read?: Maybe<ProductsDocAccessFields_Title_Read>;
  update?: Maybe<ProductsDocAccessFields_Title_Update>;
};

export type ProductsDocAccessFields_Title_Create = {
  __typename?: 'ProductsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Title_Delete = {
  __typename?: 'ProductsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Title_Read = {
  __typename?: 'ProductsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Title_Update = {
  __typename?: 'ProductsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_UpdatedAt = {
  __typename?: 'ProductsDocAccessFields_updatedAt';
  create?: Maybe<ProductsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ProductsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ProductsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ProductsDocAccessFields_UpdatedAt_Update>;
};

export type ProductsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ProductsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ProductsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ProductsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ProductsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_VariantTypes = {
  __typename?: 'ProductsDocAccessFields_variantTypes';
  create?: Maybe<ProductsDocAccessFields_VariantTypes_Create>;
  delete?: Maybe<ProductsDocAccessFields_VariantTypes_Delete>;
  read?: Maybe<ProductsDocAccessFields_VariantTypes_Read>;
  update?: Maybe<ProductsDocAccessFields_VariantTypes_Update>;
};

export type ProductsDocAccessFields_VariantTypes_Create = {
  __typename?: 'ProductsDocAccessFields_variantTypes_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_VariantTypes_Delete = {
  __typename?: 'ProductsDocAccessFields_variantTypes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_VariantTypes_Read = {
  __typename?: 'ProductsDocAccessFields_variantTypes_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_VariantTypes_Update = {
  __typename?: 'ProductsDocAccessFields_variantTypes_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Variants = {
  __typename?: 'ProductsDocAccessFields_variants';
  create?: Maybe<ProductsDocAccessFields_Variants_Create>;
  delete?: Maybe<ProductsDocAccessFields_Variants_Delete>;
  read?: Maybe<ProductsDocAccessFields_Variants_Read>;
  update?: Maybe<ProductsDocAccessFields_Variants_Update>;
};

export type ProductsDocAccessFields_Variants_Create = {
  __typename?: 'ProductsDocAccessFields_variants_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Variants_Delete = {
  __typename?: 'ProductsDocAccessFields_variants_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Variants_Read = {
  __typename?: 'ProductsDocAccessFields_variants_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Variants_Update = {
  __typename?: 'ProductsDocAccessFields_variants_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields = {
  __typename?: 'ProductsFields';
  _status?: Maybe<ProductsFields__Status>;
  categories?: Maybe<ProductsFields_Categories>;
  createdAt?: Maybe<ProductsFields_CreatedAt>;
  deletedAt?: Maybe<ProductsFields_DeletedAt>;
  description?: Maybe<ProductsFields_Description>;
  enableVariants?: Maybe<ProductsFields_EnableVariants>;
  gallery?: Maybe<ProductsFields_Gallery>;
  generateSlug?: Maybe<ProductsFields_GenerateSlug>;
  inventory?: Maybe<ProductsFields_Inventory>;
  layout?: Maybe<ProductsFields_Layout>;
  meta?: Maybe<ProductsFields_Meta>;
  priceInUSD?: Maybe<ProductsFields_PriceInUsd>;
  priceInUSDEnabled?: Maybe<ProductsFields_PriceInUsdEnabled>;
  relatedProducts?: Maybe<ProductsFields_RelatedProducts>;
  slug?: Maybe<ProductsFields_Slug>;
  title?: Maybe<ProductsFields_Title>;
  updatedAt?: Maybe<ProductsFields_UpdatedAt>;
  variantTypes?: Maybe<ProductsFields_VariantTypes>;
  variants?: Maybe<ProductsFields_Variants>;
};

export type ProductsFields__Status = {
  __typename?: 'ProductsFields__status';
  create?: Maybe<ProductsFields__Status_Create>;
  delete?: Maybe<ProductsFields__Status_Delete>;
  read?: Maybe<ProductsFields__Status_Read>;
  update?: Maybe<ProductsFields__Status_Update>;
};

export type ProductsFields__Status_Create = {
  __typename?: 'ProductsFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields__Status_Delete = {
  __typename?: 'ProductsFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields__Status_Read = {
  __typename?: 'ProductsFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields__Status_Update = {
  __typename?: 'ProductsFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Categories = {
  __typename?: 'ProductsFields_categories';
  create?: Maybe<ProductsFields_Categories_Create>;
  delete?: Maybe<ProductsFields_Categories_Delete>;
  read?: Maybe<ProductsFields_Categories_Read>;
  update?: Maybe<ProductsFields_Categories_Update>;
};

export type ProductsFields_Categories_Create = {
  __typename?: 'ProductsFields_categories_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Categories_Delete = {
  __typename?: 'ProductsFields_categories_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Categories_Read = {
  __typename?: 'ProductsFields_categories_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Categories_Update = {
  __typename?: 'ProductsFields_categories_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CreatedAt = {
  __typename?: 'ProductsFields_createdAt';
  create?: Maybe<ProductsFields_CreatedAt_Create>;
  delete?: Maybe<ProductsFields_CreatedAt_Delete>;
  read?: Maybe<ProductsFields_CreatedAt_Read>;
  update?: Maybe<ProductsFields_CreatedAt_Update>;
};

export type ProductsFields_CreatedAt_Create = {
  __typename?: 'ProductsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CreatedAt_Delete = {
  __typename?: 'ProductsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CreatedAt_Read = {
  __typename?: 'ProductsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CreatedAt_Update = {
  __typename?: 'ProductsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_DeletedAt = {
  __typename?: 'ProductsFields_deletedAt';
  create?: Maybe<ProductsFields_DeletedAt_Create>;
  delete?: Maybe<ProductsFields_DeletedAt_Delete>;
  read?: Maybe<ProductsFields_DeletedAt_Read>;
  update?: Maybe<ProductsFields_DeletedAt_Update>;
};

export type ProductsFields_DeletedAt_Create = {
  __typename?: 'ProductsFields_deletedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_DeletedAt_Delete = {
  __typename?: 'ProductsFields_deletedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_DeletedAt_Read = {
  __typename?: 'ProductsFields_deletedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_DeletedAt_Update = {
  __typename?: 'ProductsFields_deletedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Description = {
  __typename?: 'ProductsFields_description';
  create?: Maybe<ProductsFields_Description_Create>;
  delete?: Maybe<ProductsFields_Description_Delete>;
  read?: Maybe<ProductsFields_Description_Read>;
  update?: Maybe<ProductsFields_Description_Update>;
};

export type ProductsFields_Description_Create = {
  __typename?: 'ProductsFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Description_Delete = {
  __typename?: 'ProductsFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Description_Read = {
  __typename?: 'ProductsFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Description_Update = {
  __typename?: 'ProductsFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_EnableVariants = {
  __typename?: 'ProductsFields_enableVariants';
  create?: Maybe<ProductsFields_EnableVariants_Create>;
  delete?: Maybe<ProductsFields_EnableVariants_Delete>;
  read?: Maybe<ProductsFields_EnableVariants_Read>;
  update?: Maybe<ProductsFields_EnableVariants_Update>;
};

export type ProductsFields_EnableVariants_Create = {
  __typename?: 'ProductsFields_enableVariants_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_EnableVariants_Delete = {
  __typename?: 'ProductsFields_enableVariants_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_EnableVariants_Read = {
  __typename?: 'ProductsFields_enableVariants_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_EnableVariants_Update = {
  __typename?: 'ProductsFields_enableVariants_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery = {
  __typename?: 'ProductsFields_gallery';
  create?: Maybe<ProductsFields_Gallery_Create>;
  delete?: Maybe<ProductsFields_Gallery_Delete>;
  fields?: Maybe<ProductsFields_Gallery_Fields>;
  read?: Maybe<ProductsFields_Gallery_Read>;
  update?: Maybe<ProductsFields_Gallery_Update>;
};

export type ProductsFields_Gallery_Create = {
  __typename?: 'ProductsFields_gallery_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery_Delete = {
  __typename?: 'ProductsFields_gallery_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery_Fields = {
  __typename?: 'ProductsFields_gallery_Fields';
  id?: Maybe<ProductsFields_Gallery_Id>;
  image?: Maybe<ProductsFields_Gallery_Image>;
  variantOption?: Maybe<ProductsFields_Gallery_VariantOption>;
};

export type ProductsFields_Gallery_Read = {
  __typename?: 'ProductsFields_gallery_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery_Update = {
  __typename?: 'ProductsFields_gallery_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery_Id = {
  __typename?: 'ProductsFields_gallery_id';
  create?: Maybe<ProductsFields_Gallery_Id_Create>;
  delete?: Maybe<ProductsFields_Gallery_Id_Delete>;
  read?: Maybe<ProductsFields_Gallery_Id_Read>;
  update?: Maybe<ProductsFields_Gallery_Id_Update>;
};

export type ProductsFields_Gallery_Id_Create = {
  __typename?: 'ProductsFields_gallery_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery_Id_Delete = {
  __typename?: 'ProductsFields_gallery_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery_Id_Read = {
  __typename?: 'ProductsFields_gallery_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery_Id_Update = {
  __typename?: 'ProductsFields_gallery_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery_Image = {
  __typename?: 'ProductsFields_gallery_image';
  create?: Maybe<ProductsFields_Gallery_Image_Create>;
  delete?: Maybe<ProductsFields_Gallery_Image_Delete>;
  read?: Maybe<ProductsFields_Gallery_Image_Read>;
  update?: Maybe<ProductsFields_Gallery_Image_Update>;
};

export type ProductsFields_Gallery_Image_Create = {
  __typename?: 'ProductsFields_gallery_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery_Image_Delete = {
  __typename?: 'ProductsFields_gallery_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery_Image_Read = {
  __typename?: 'ProductsFields_gallery_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery_Image_Update = {
  __typename?: 'ProductsFields_gallery_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery_VariantOption = {
  __typename?: 'ProductsFields_gallery_variantOption';
  create?: Maybe<ProductsFields_Gallery_VariantOption_Create>;
  delete?: Maybe<ProductsFields_Gallery_VariantOption_Delete>;
  read?: Maybe<ProductsFields_Gallery_VariantOption_Read>;
  update?: Maybe<ProductsFields_Gallery_VariantOption_Update>;
};

export type ProductsFields_Gallery_VariantOption_Create = {
  __typename?: 'ProductsFields_gallery_variantOption_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery_VariantOption_Delete = {
  __typename?: 'ProductsFields_gallery_variantOption_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery_VariantOption_Read = {
  __typename?: 'ProductsFields_gallery_variantOption_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery_VariantOption_Update = {
  __typename?: 'ProductsFields_gallery_variantOption_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_GenerateSlug = {
  __typename?: 'ProductsFields_generateSlug';
  create?: Maybe<ProductsFields_GenerateSlug_Create>;
  delete?: Maybe<ProductsFields_GenerateSlug_Delete>;
  read?: Maybe<ProductsFields_GenerateSlug_Read>;
  update?: Maybe<ProductsFields_GenerateSlug_Update>;
};

export type ProductsFields_GenerateSlug_Create = {
  __typename?: 'ProductsFields_generateSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_GenerateSlug_Delete = {
  __typename?: 'ProductsFields_generateSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_GenerateSlug_Read = {
  __typename?: 'ProductsFields_generateSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_GenerateSlug_Update = {
  __typename?: 'ProductsFields_generateSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Inventory = {
  __typename?: 'ProductsFields_inventory';
  create?: Maybe<ProductsFields_Inventory_Create>;
  delete?: Maybe<ProductsFields_Inventory_Delete>;
  read?: Maybe<ProductsFields_Inventory_Read>;
  update?: Maybe<ProductsFields_Inventory_Update>;
};

export type ProductsFields_Inventory_Create = {
  __typename?: 'ProductsFields_inventory_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Inventory_Delete = {
  __typename?: 'ProductsFields_inventory_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Inventory_Read = {
  __typename?: 'ProductsFields_inventory_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Inventory_Update = {
  __typename?: 'ProductsFields_inventory_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Layout = {
  __typename?: 'ProductsFields_layout';
  create?: Maybe<ProductsFields_Layout_Create>;
  delete?: Maybe<ProductsFields_Layout_Delete>;
  read?: Maybe<ProductsFields_Layout_Read>;
  update?: Maybe<ProductsFields_Layout_Update>;
};

export type ProductsFields_Layout_Create = {
  __typename?: 'ProductsFields_layout_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Layout_Delete = {
  __typename?: 'ProductsFields_layout_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Layout_Read = {
  __typename?: 'ProductsFields_layout_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Layout_Update = {
  __typename?: 'ProductsFields_layout_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta = {
  __typename?: 'ProductsFields_meta';
  description?: Maybe<ProductsFields_Meta_Description>;
  image?: Maybe<ProductsFields_Meta_Image>;
  title?: Maybe<ProductsFields_Meta_Title>;
};

export type ProductsFields_Meta_Description = {
  __typename?: 'ProductsFields_meta_description';
  create?: Maybe<ProductsFields_Meta_Description_Create>;
  delete?: Maybe<ProductsFields_Meta_Description_Delete>;
  read?: Maybe<ProductsFields_Meta_Description_Read>;
  update?: Maybe<ProductsFields_Meta_Description_Update>;
};

export type ProductsFields_Meta_Description_Create = {
  __typename?: 'ProductsFields_meta_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta_Description_Delete = {
  __typename?: 'ProductsFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta_Description_Read = {
  __typename?: 'ProductsFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta_Description_Update = {
  __typename?: 'ProductsFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta_Image = {
  __typename?: 'ProductsFields_meta_image';
  create?: Maybe<ProductsFields_Meta_Image_Create>;
  delete?: Maybe<ProductsFields_Meta_Image_Delete>;
  read?: Maybe<ProductsFields_Meta_Image_Read>;
  update?: Maybe<ProductsFields_Meta_Image_Update>;
};

export type ProductsFields_Meta_Image_Create = {
  __typename?: 'ProductsFields_meta_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta_Image_Delete = {
  __typename?: 'ProductsFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta_Image_Read = {
  __typename?: 'ProductsFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta_Image_Update = {
  __typename?: 'ProductsFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta_Title = {
  __typename?: 'ProductsFields_meta_title';
  create?: Maybe<ProductsFields_Meta_Title_Create>;
  delete?: Maybe<ProductsFields_Meta_Title_Delete>;
  read?: Maybe<ProductsFields_Meta_Title_Read>;
  update?: Maybe<ProductsFields_Meta_Title_Update>;
};

export type ProductsFields_Meta_Title_Create = {
  __typename?: 'ProductsFields_meta_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta_Title_Delete = {
  __typename?: 'ProductsFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta_Title_Read = {
  __typename?: 'ProductsFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta_Title_Update = {
  __typename?: 'ProductsFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PriceInUsd = {
  __typename?: 'ProductsFields_priceInUSD';
  create?: Maybe<ProductsFields_PriceInUsd_Create>;
  delete?: Maybe<ProductsFields_PriceInUsd_Delete>;
  read?: Maybe<ProductsFields_PriceInUsd_Read>;
  update?: Maybe<ProductsFields_PriceInUsd_Update>;
};

export type ProductsFields_PriceInUsdEnabled = {
  __typename?: 'ProductsFields_priceInUSDEnabled';
  create?: Maybe<ProductsFields_PriceInUsdEnabled_Create>;
  delete?: Maybe<ProductsFields_PriceInUsdEnabled_Delete>;
  read?: Maybe<ProductsFields_PriceInUsdEnabled_Read>;
  update?: Maybe<ProductsFields_PriceInUsdEnabled_Update>;
};

export type ProductsFields_PriceInUsdEnabled_Create = {
  __typename?: 'ProductsFields_priceInUSDEnabled_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PriceInUsdEnabled_Delete = {
  __typename?: 'ProductsFields_priceInUSDEnabled_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PriceInUsdEnabled_Read = {
  __typename?: 'ProductsFields_priceInUSDEnabled_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PriceInUsdEnabled_Update = {
  __typename?: 'ProductsFields_priceInUSDEnabled_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PriceInUsd_Create = {
  __typename?: 'ProductsFields_priceInUSD_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PriceInUsd_Delete = {
  __typename?: 'ProductsFields_priceInUSD_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PriceInUsd_Read = {
  __typename?: 'ProductsFields_priceInUSD_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PriceInUsd_Update = {
  __typename?: 'ProductsFields_priceInUSD_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_RelatedProducts = {
  __typename?: 'ProductsFields_relatedProducts';
  create?: Maybe<ProductsFields_RelatedProducts_Create>;
  delete?: Maybe<ProductsFields_RelatedProducts_Delete>;
  read?: Maybe<ProductsFields_RelatedProducts_Read>;
  update?: Maybe<ProductsFields_RelatedProducts_Update>;
};

export type ProductsFields_RelatedProducts_Create = {
  __typename?: 'ProductsFields_relatedProducts_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_RelatedProducts_Delete = {
  __typename?: 'ProductsFields_relatedProducts_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_RelatedProducts_Read = {
  __typename?: 'ProductsFields_relatedProducts_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_RelatedProducts_Update = {
  __typename?: 'ProductsFields_relatedProducts_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Slug = {
  __typename?: 'ProductsFields_slug';
  create?: Maybe<ProductsFields_Slug_Create>;
  delete?: Maybe<ProductsFields_Slug_Delete>;
  read?: Maybe<ProductsFields_Slug_Read>;
  update?: Maybe<ProductsFields_Slug_Update>;
};

export type ProductsFields_Slug_Create = {
  __typename?: 'ProductsFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Slug_Delete = {
  __typename?: 'ProductsFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Slug_Read = {
  __typename?: 'ProductsFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Slug_Update = {
  __typename?: 'ProductsFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Title = {
  __typename?: 'ProductsFields_title';
  create?: Maybe<ProductsFields_Title_Create>;
  delete?: Maybe<ProductsFields_Title_Delete>;
  read?: Maybe<ProductsFields_Title_Read>;
  update?: Maybe<ProductsFields_Title_Update>;
};

export type ProductsFields_Title_Create = {
  __typename?: 'ProductsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Title_Delete = {
  __typename?: 'ProductsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Title_Read = {
  __typename?: 'ProductsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Title_Update = {
  __typename?: 'ProductsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_UpdatedAt = {
  __typename?: 'ProductsFields_updatedAt';
  create?: Maybe<ProductsFields_UpdatedAt_Create>;
  delete?: Maybe<ProductsFields_UpdatedAt_Delete>;
  read?: Maybe<ProductsFields_UpdatedAt_Read>;
  update?: Maybe<ProductsFields_UpdatedAt_Update>;
};

export type ProductsFields_UpdatedAt_Create = {
  __typename?: 'ProductsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_UpdatedAt_Delete = {
  __typename?: 'ProductsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_UpdatedAt_Read = {
  __typename?: 'ProductsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_UpdatedAt_Update = {
  __typename?: 'ProductsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_VariantTypes = {
  __typename?: 'ProductsFields_variantTypes';
  create?: Maybe<ProductsFields_VariantTypes_Create>;
  delete?: Maybe<ProductsFields_VariantTypes_Delete>;
  read?: Maybe<ProductsFields_VariantTypes_Read>;
  update?: Maybe<ProductsFields_VariantTypes_Update>;
};

export type ProductsFields_VariantTypes_Create = {
  __typename?: 'ProductsFields_variantTypes_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_VariantTypes_Delete = {
  __typename?: 'ProductsFields_variantTypes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_VariantTypes_Read = {
  __typename?: 'ProductsFields_variantTypes_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_VariantTypes_Update = {
  __typename?: 'ProductsFields_variantTypes_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Variants = {
  __typename?: 'ProductsFields_variants';
  create?: Maybe<ProductsFields_Variants_Create>;
  delete?: Maybe<ProductsFields_Variants_Delete>;
  read?: Maybe<ProductsFields_Variants_Read>;
  update?: Maybe<ProductsFields_Variants_Update>;
};

export type ProductsFields_Variants_Create = {
  __typename?: 'ProductsFields_variants_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Variants_Delete = {
  __typename?: 'ProductsFields_variants_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Variants_Read = {
  __typename?: 'ProductsFields_variants_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Variants_Update = {
  __typename?: 'ProductsFields_variants_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsReadAccess = {
  __typename?: 'ProductsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsReadDocAccess = {
  __typename?: 'ProductsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsReadVersionsAccess = {
  __typename?: 'ProductsReadVersionsAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsReadVersionsDocAccess = {
  __typename?: 'ProductsReadVersionsDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsUpdateAccess = {
  __typename?: 'ProductsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsUpdateDocAccess = {
  __typename?: 'ProductsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  Address?: Maybe<Address>;
  Addresses?: Maybe<Addresses>;
  Cart?: Maybe<Cart>;
  Carts?: Maybe<Carts>;
  Categories?: Maybe<Categories>;
  Category?: Maybe<Category>;
  Footer?: Maybe<Footer>;
  Form?: Maybe<Form>;
  FormSubmission?: Maybe<FormSubmission>;
  FormSubmissions?: Maybe<FormSubmissions>;
  Forms?: Maybe<Forms>;
  Header?: Maybe<Header>;
  InformationBanner?: Maybe<InformationBanner>;
  Media?: Maybe<Media>;
  Order?: Maybe<Order>;
  Orders?: Maybe<Orders>;
  Page?: Maybe<Page>;
  Pages?: Maybe<Pages>;
  PayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  PayloadLockedDocuments?: Maybe<PayloadLockedDocuments>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  Product?: Maybe<Product>;
  Products?: Maybe<Products>;
  SvgMedia?: Maybe<SvgMedia>;
  SvgMedias?: Maybe<SvgMedias>;
  Transaction?: Maybe<Transaction>;
  Transactions?: Maybe<Transactions>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  Variant?: Maybe<Variant>;
  VariantOption?: Maybe<VariantOption>;
  VariantOptions?: Maybe<VariantOptions>;
  VariantType?: Maybe<VariantType>;
  VariantTypes?: Maybe<VariantTypes>;
  Variants?: Maybe<Variants>;
  allMedia?: Maybe<AllMedia>;
  countAddresses?: Maybe<CountAddresses>;
  countCarts?: Maybe<CountCarts>;
  countCategories?: Maybe<CountCategories>;
  countFormSubmissions?: Maybe<CountFormSubmissions>;
  countForms?: Maybe<CountForms>;
  countOrders?: Maybe<CountOrders>;
  countPages?: Maybe<CountPages>;
  countPayloadLockedDocuments?: Maybe<CountPayloadLockedDocuments>;
  countPayloadPreferences?: Maybe<CountPayloadPreferences>;
  countProducts?: Maybe<CountProducts>;
  countSvgMedias?: Maybe<CountSvgMedias>;
  countTransactions?: Maybe<CountTransactions>;
  countUsers?: Maybe<CountUsers>;
  countVariantOptions?: Maybe<CountVariantOptions>;
  countVariantTypes?: Maybe<CountVariantTypes>;
  countVariants?: Maybe<CountVariants>;
  countallMedia?: Maybe<CountallMedia>;
  docAccessAddress?: Maybe<AddressesDocAccess>;
  docAccessCart?: Maybe<CartsDocAccess>;
  docAccessCategory?: Maybe<CategoriesDocAccess>;
  docAccessFooter?: Maybe<FooterDocAccess>;
  docAccessForm?: Maybe<FormsDocAccess>;
  docAccessFormSubmission?: Maybe<Form_SubmissionsDocAccess>;
  docAccessHeader?: Maybe<HeaderDocAccess>;
  docAccessInformationBanner?: Maybe<Information_BannerDocAccess>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessOrder?: Maybe<OrdersDocAccess>;
  docAccessPage?: Maybe<PagesDocAccess>;
  docAccessPayloadLockedDocument?: Maybe<Payload_Locked_DocumentsDocAccess>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  docAccessProduct?: Maybe<ProductsDocAccess>;
  docAccessSvgMedia?: Maybe<Svg_MediaDocAccess>;
  docAccessTransaction?: Maybe<TransactionsDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  docAccessVariant?: Maybe<VariantsDocAccess>;
  docAccessVariantOption?: Maybe<VariantOptionsDocAccess>;
  docAccessVariantType?: Maybe<VariantTypesDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']['output']>;
  meUser?: Maybe<UsersMe>;
  versionPage?: Maybe<PageVersion>;
  versionProduct?: Maybe<ProductVersion>;
  versionVariant?: Maybe<VariantVersion>;
  versionsPages?: Maybe<VersionsPages>;
  versionsProducts?: Maybe<VersionsProducts>;
  versionsVariants?: Maybe<VersionsVariants>;
};


export type QueryAddressArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAddressesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Address_Where>;
};


export type QueryCartArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCartsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Cart_Where>;
};


export type QueryCategoriesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Category_Where>;
};


export type QueryCategoryArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFooterArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFormArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFormSubmissionArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFormSubmissionsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FormSubmission_Where>;
};


export type QueryFormsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Form_Where>;
};


export type QueryHeaderArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryInformationBannerArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryOrderArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryOrdersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Order_Where>;
};


export type QueryPageArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPagesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Page_Where>;
};


export type QueryPayloadLockedDocumentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryPayloadPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryProductArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProductsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Product_Where>;
};


export type QuerySvgMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySvgMediasArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SvgMedia_Where>;
};


export type QueryTransactionArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTransactionsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Transaction_Where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryVariantArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryVariantOptionArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryVariantOptionsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VariantOption_Where>;
};


export type QueryVariantTypeArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryVariantTypesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VariantType_Where>;
};


export type QueryVariantsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Variant_Where>;
};


export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryCountAddressesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Address_Where>;
};


export type QueryCountCartsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Cart_Where>;
};


export type QueryCountCategoriesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Category_Where>;
};


export type QueryCountFormSubmissionsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FormSubmission_Where>;
};


export type QueryCountFormsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Form_Where>;
};


export type QueryCountOrdersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Order_Where>;
};


export type QueryCountPagesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Page_Where>;
};


export type QueryCountPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryCountPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryCountProductsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Product_Where>;
};


export type QueryCountSvgMediasArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SvgMedia_Where>;
};


export type QueryCountTransactionsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Transaction_Where>;
};


export type QueryCountUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryCountVariantOptionsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VariantOption_Where>;
};


export type QueryCountVariantTypesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VariantType_Where>;
};


export type QueryCountVariantsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Variant_Where>;
};


export type QueryCountallMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryDocAccessAddressArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessCartArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessFormArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessFormSubmissionArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessOrderArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessPageArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessPayloadLockedDocumentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessProductArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessSvgMediaArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessTransactionArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessVariantArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessVariantOptionArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessVariantTypeArgs = {
  id: Scalars['Int']['input'];
};


export type QueryVersionPageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryVersionProductArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryVersionVariantArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryVersionsPagesArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VersionsPage_Where>;
};


export type QueryVersionsProductsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VersionsProduct_Where>;
};


export type QueryVersionsVariantsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VersionsVariant_Where>;
};

export type Select = {
  __typename?: 'Select';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  defaultValue?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  options?: Maybe<Array<Select_Options>>;
  placeholder?: Maybe<Scalars['String']['output']>;
  required?: Maybe<Scalars['Boolean']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Select_Options = {
  __typename?: 'Select_Options';
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type State = {
  __typename?: 'State';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type SvgMedia = {
  __typename?: 'SvgMedia';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  focalX?: Maybe<Scalars['Float']['output']>;
  focalY?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  mimeType?: Maybe<Scalars['String']['output']>;
  svgContent?: Maybe<Scalars['String']['output']>;
  thumbnailURL?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type SvgMediaCreateAccess = {
  __typename?: 'SvgMediaCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SvgMediaCreateDocAccess = {
  __typename?: 'SvgMediaCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SvgMediaDeleteAccess = {
  __typename?: 'SvgMediaDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SvgMediaDeleteDocAccess = {
  __typename?: 'SvgMediaDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SvgMediaDocAccessFields = {
  __typename?: 'SvgMediaDocAccessFields';
  createdAt?: Maybe<SvgMediaDocAccessFields_CreatedAt>;
  filename?: Maybe<SvgMediaDocAccessFields_Filename>;
  filesize?: Maybe<SvgMediaDocAccessFields_Filesize>;
  focalX?: Maybe<SvgMediaDocAccessFields_FocalX>;
  focalY?: Maybe<SvgMediaDocAccessFields_FocalY>;
  height?: Maybe<SvgMediaDocAccessFields_Height>;
  mimeType?: Maybe<SvgMediaDocAccessFields_MimeType>;
  svgContent?: Maybe<SvgMediaDocAccessFields_SvgContent>;
  thumbnailURL?: Maybe<SvgMediaDocAccessFields_ThumbnailUrl>;
  updatedAt?: Maybe<SvgMediaDocAccessFields_UpdatedAt>;
  url?: Maybe<SvgMediaDocAccessFields_Url>;
  width?: Maybe<SvgMediaDocAccessFields_Width>;
};

export type SvgMediaDocAccessFields_CreatedAt = {
  __typename?: 'SvgMediaDocAccessFields_createdAt';
  create?: Maybe<SvgMediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<SvgMediaDocAccessFields_CreatedAt_Update>;
};

export type SvgMediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'SvgMediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'SvgMediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'SvgMediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'SvgMediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Filename = {
  __typename?: 'SvgMediaDocAccessFields_filename';
  create?: Maybe<SvgMediaDocAccessFields_Filename_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_Filename_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_Filename_Read>;
  update?: Maybe<SvgMediaDocAccessFields_Filename_Update>;
};

export type SvgMediaDocAccessFields_Filename_Create = {
  __typename?: 'SvgMediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Filename_Delete = {
  __typename?: 'SvgMediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Filename_Read = {
  __typename?: 'SvgMediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Filename_Update = {
  __typename?: 'SvgMediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Filesize = {
  __typename?: 'SvgMediaDocAccessFields_filesize';
  create?: Maybe<SvgMediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_Filesize_Read>;
  update?: Maybe<SvgMediaDocAccessFields_Filesize_Update>;
};

export type SvgMediaDocAccessFields_Filesize_Create = {
  __typename?: 'SvgMediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Filesize_Delete = {
  __typename?: 'SvgMediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Filesize_Read = {
  __typename?: 'SvgMediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Filesize_Update = {
  __typename?: 'SvgMediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_FocalX = {
  __typename?: 'SvgMediaDocAccessFields_focalX';
  create?: Maybe<SvgMediaDocAccessFields_FocalX_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_FocalX_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_FocalX_Read>;
  update?: Maybe<SvgMediaDocAccessFields_FocalX_Update>;
};

export type SvgMediaDocAccessFields_FocalX_Create = {
  __typename?: 'SvgMediaDocAccessFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_FocalX_Delete = {
  __typename?: 'SvgMediaDocAccessFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_FocalX_Read = {
  __typename?: 'SvgMediaDocAccessFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_FocalX_Update = {
  __typename?: 'SvgMediaDocAccessFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_FocalY = {
  __typename?: 'SvgMediaDocAccessFields_focalY';
  create?: Maybe<SvgMediaDocAccessFields_FocalY_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_FocalY_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_FocalY_Read>;
  update?: Maybe<SvgMediaDocAccessFields_FocalY_Update>;
};

export type SvgMediaDocAccessFields_FocalY_Create = {
  __typename?: 'SvgMediaDocAccessFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_FocalY_Delete = {
  __typename?: 'SvgMediaDocAccessFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_FocalY_Read = {
  __typename?: 'SvgMediaDocAccessFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_FocalY_Update = {
  __typename?: 'SvgMediaDocAccessFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Height = {
  __typename?: 'SvgMediaDocAccessFields_height';
  create?: Maybe<SvgMediaDocAccessFields_Height_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_Height_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_Height_Read>;
  update?: Maybe<SvgMediaDocAccessFields_Height_Update>;
};

export type SvgMediaDocAccessFields_Height_Create = {
  __typename?: 'SvgMediaDocAccessFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Height_Delete = {
  __typename?: 'SvgMediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Height_Read = {
  __typename?: 'SvgMediaDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Height_Update = {
  __typename?: 'SvgMediaDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_MimeType = {
  __typename?: 'SvgMediaDocAccessFields_mimeType';
  create?: Maybe<SvgMediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_MimeType_Read>;
  update?: Maybe<SvgMediaDocAccessFields_MimeType_Update>;
};

export type SvgMediaDocAccessFields_MimeType_Create = {
  __typename?: 'SvgMediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_MimeType_Delete = {
  __typename?: 'SvgMediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_MimeType_Read = {
  __typename?: 'SvgMediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_MimeType_Update = {
  __typename?: 'SvgMediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_SvgContent = {
  __typename?: 'SvgMediaDocAccessFields_svgContent';
  create?: Maybe<SvgMediaDocAccessFields_SvgContent_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_SvgContent_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_SvgContent_Read>;
  update?: Maybe<SvgMediaDocAccessFields_SvgContent_Update>;
};

export type SvgMediaDocAccessFields_SvgContent_Create = {
  __typename?: 'SvgMediaDocAccessFields_svgContent_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_SvgContent_Delete = {
  __typename?: 'SvgMediaDocAccessFields_svgContent_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_SvgContent_Read = {
  __typename?: 'SvgMediaDocAccessFields_svgContent_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_SvgContent_Update = {
  __typename?: 'SvgMediaDocAccessFields_svgContent_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_ThumbnailUrl = {
  __typename?: 'SvgMediaDocAccessFields_thumbnailURL';
  create?: Maybe<SvgMediaDocAccessFields_ThumbnailUrl_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_ThumbnailUrl_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_ThumbnailUrl_Read>;
  update?: Maybe<SvgMediaDocAccessFields_ThumbnailUrl_Update>;
};

export type SvgMediaDocAccessFields_ThumbnailUrl_Create = {
  __typename?: 'SvgMediaDocAccessFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_ThumbnailUrl_Delete = {
  __typename?: 'SvgMediaDocAccessFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_ThumbnailUrl_Read = {
  __typename?: 'SvgMediaDocAccessFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_ThumbnailUrl_Update = {
  __typename?: 'SvgMediaDocAccessFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_UpdatedAt = {
  __typename?: 'SvgMediaDocAccessFields_updatedAt';
  create?: Maybe<SvgMediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<SvgMediaDocAccessFields_UpdatedAt_Update>;
};

export type SvgMediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'SvgMediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'SvgMediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'SvgMediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'SvgMediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Url = {
  __typename?: 'SvgMediaDocAccessFields_url';
  create?: Maybe<SvgMediaDocAccessFields_Url_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_Url_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_Url_Read>;
  update?: Maybe<SvgMediaDocAccessFields_Url_Update>;
};

export type SvgMediaDocAccessFields_Url_Create = {
  __typename?: 'SvgMediaDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Url_Delete = {
  __typename?: 'SvgMediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Url_Read = {
  __typename?: 'SvgMediaDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Url_Update = {
  __typename?: 'SvgMediaDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Width = {
  __typename?: 'SvgMediaDocAccessFields_width';
  create?: Maybe<SvgMediaDocAccessFields_Width_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_Width_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_Width_Read>;
  update?: Maybe<SvgMediaDocAccessFields_Width_Update>;
};

export type SvgMediaDocAccessFields_Width_Create = {
  __typename?: 'SvgMediaDocAccessFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Width_Delete = {
  __typename?: 'SvgMediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Width_Read = {
  __typename?: 'SvgMediaDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Width_Update = {
  __typename?: 'SvgMediaDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields = {
  __typename?: 'SvgMediaFields';
  createdAt?: Maybe<SvgMediaFields_CreatedAt>;
  filename?: Maybe<SvgMediaFields_Filename>;
  filesize?: Maybe<SvgMediaFields_Filesize>;
  focalX?: Maybe<SvgMediaFields_FocalX>;
  focalY?: Maybe<SvgMediaFields_FocalY>;
  height?: Maybe<SvgMediaFields_Height>;
  mimeType?: Maybe<SvgMediaFields_MimeType>;
  svgContent?: Maybe<SvgMediaFields_SvgContent>;
  thumbnailURL?: Maybe<SvgMediaFields_ThumbnailUrl>;
  updatedAt?: Maybe<SvgMediaFields_UpdatedAt>;
  url?: Maybe<SvgMediaFields_Url>;
  width?: Maybe<SvgMediaFields_Width>;
};

export type SvgMediaFields_CreatedAt = {
  __typename?: 'SvgMediaFields_createdAt';
  create?: Maybe<SvgMediaFields_CreatedAt_Create>;
  delete?: Maybe<SvgMediaFields_CreatedAt_Delete>;
  read?: Maybe<SvgMediaFields_CreatedAt_Read>;
  update?: Maybe<SvgMediaFields_CreatedAt_Update>;
};

export type SvgMediaFields_CreatedAt_Create = {
  __typename?: 'SvgMediaFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_CreatedAt_Delete = {
  __typename?: 'SvgMediaFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_CreatedAt_Read = {
  __typename?: 'SvgMediaFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_CreatedAt_Update = {
  __typename?: 'SvgMediaFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Filename = {
  __typename?: 'SvgMediaFields_filename';
  create?: Maybe<SvgMediaFields_Filename_Create>;
  delete?: Maybe<SvgMediaFields_Filename_Delete>;
  read?: Maybe<SvgMediaFields_Filename_Read>;
  update?: Maybe<SvgMediaFields_Filename_Update>;
};

export type SvgMediaFields_Filename_Create = {
  __typename?: 'SvgMediaFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Filename_Delete = {
  __typename?: 'SvgMediaFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Filename_Read = {
  __typename?: 'SvgMediaFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Filename_Update = {
  __typename?: 'SvgMediaFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Filesize = {
  __typename?: 'SvgMediaFields_filesize';
  create?: Maybe<SvgMediaFields_Filesize_Create>;
  delete?: Maybe<SvgMediaFields_Filesize_Delete>;
  read?: Maybe<SvgMediaFields_Filesize_Read>;
  update?: Maybe<SvgMediaFields_Filesize_Update>;
};

export type SvgMediaFields_Filesize_Create = {
  __typename?: 'SvgMediaFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Filesize_Delete = {
  __typename?: 'SvgMediaFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Filesize_Read = {
  __typename?: 'SvgMediaFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Filesize_Update = {
  __typename?: 'SvgMediaFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_FocalX = {
  __typename?: 'SvgMediaFields_focalX';
  create?: Maybe<SvgMediaFields_FocalX_Create>;
  delete?: Maybe<SvgMediaFields_FocalX_Delete>;
  read?: Maybe<SvgMediaFields_FocalX_Read>;
  update?: Maybe<SvgMediaFields_FocalX_Update>;
};

export type SvgMediaFields_FocalX_Create = {
  __typename?: 'SvgMediaFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_FocalX_Delete = {
  __typename?: 'SvgMediaFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_FocalX_Read = {
  __typename?: 'SvgMediaFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_FocalX_Update = {
  __typename?: 'SvgMediaFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_FocalY = {
  __typename?: 'SvgMediaFields_focalY';
  create?: Maybe<SvgMediaFields_FocalY_Create>;
  delete?: Maybe<SvgMediaFields_FocalY_Delete>;
  read?: Maybe<SvgMediaFields_FocalY_Read>;
  update?: Maybe<SvgMediaFields_FocalY_Update>;
};

export type SvgMediaFields_FocalY_Create = {
  __typename?: 'SvgMediaFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_FocalY_Delete = {
  __typename?: 'SvgMediaFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_FocalY_Read = {
  __typename?: 'SvgMediaFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_FocalY_Update = {
  __typename?: 'SvgMediaFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Height = {
  __typename?: 'SvgMediaFields_height';
  create?: Maybe<SvgMediaFields_Height_Create>;
  delete?: Maybe<SvgMediaFields_Height_Delete>;
  read?: Maybe<SvgMediaFields_Height_Read>;
  update?: Maybe<SvgMediaFields_Height_Update>;
};

export type SvgMediaFields_Height_Create = {
  __typename?: 'SvgMediaFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Height_Delete = {
  __typename?: 'SvgMediaFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Height_Read = {
  __typename?: 'SvgMediaFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Height_Update = {
  __typename?: 'SvgMediaFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_MimeType = {
  __typename?: 'SvgMediaFields_mimeType';
  create?: Maybe<SvgMediaFields_MimeType_Create>;
  delete?: Maybe<SvgMediaFields_MimeType_Delete>;
  read?: Maybe<SvgMediaFields_MimeType_Read>;
  update?: Maybe<SvgMediaFields_MimeType_Update>;
};

export type SvgMediaFields_MimeType_Create = {
  __typename?: 'SvgMediaFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_MimeType_Delete = {
  __typename?: 'SvgMediaFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_MimeType_Read = {
  __typename?: 'SvgMediaFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_MimeType_Update = {
  __typename?: 'SvgMediaFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_SvgContent = {
  __typename?: 'SvgMediaFields_svgContent';
  create?: Maybe<SvgMediaFields_SvgContent_Create>;
  delete?: Maybe<SvgMediaFields_SvgContent_Delete>;
  read?: Maybe<SvgMediaFields_SvgContent_Read>;
  update?: Maybe<SvgMediaFields_SvgContent_Update>;
};

export type SvgMediaFields_SvgContent_Create = {
  __typename?: 'SvgMediaFields_svgContent_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_SvgContent_Delete = {
  __typename?: 'SvgMediaFields_svgContent_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_SvgContent_Read = {
  __typename?: 'SvgMediaFields_svgContent_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_SvgContent_Update = {
  __typename?: 'SvgMediaFields_svgContent_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_ThumbnailUrl = {
  __typename?: 'SvgMediaFields_thumbnailURL';
  create?: Maybe<SvgMediaFields_ThumbnailUrl_Create>;
  delete?: Maybe<SvgMediaFields_ThumbnailUrl_Delete>;
  read?: Maybe<SvgMediaFields_ThumbnailUrl_Read>;
  update?: Maybe<SvgMediaFields_ThumbnailUrl_Update>;
};

export type SvgMediaFields_ThumbnailUrl_Create = {
  __typename?: 'SvgMediaFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_ThumbnailUrl_Delete = {
  __typename?: 'SvgMediaFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_ThumbnailUrl_Read = {
  __typename?: 'SvgMediaFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_ThumbnailUrl_Update = {
  __typename?: 'SvgMediaFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_UpdatedAt = {
  __typename?: 'SvgMediaFields_updatedAt';
  create?: Maybe<SvgMediaFields_UpdatedAt_Create>;
  delete?: Maybe<SvgMediaFields_UpdatedAt_Delete>;
  read?: Maybe<SvgMediaFields_UpdatedAt_Read>;
  update?: Maybe<SvgMediaFields_UpdatedAt_Update>;
};

export type SvgMediaFields_UpdatedAt_Create = {
  __typename?: 'SvgMediaFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_UpdatedAt_Delete = {
  __typename?: 'SvgMediaFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_UpdatedAt_Read = {
  __typename?: 'SvgMediaFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_UpdatedAt_Update = {
  __typename?: 'SvgMediaFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Url = {
  __typename?: 'SvgMediaFields_url';
  create?: Maybe<SvgMediaFields_Url_Create>;
  delete?: Maybe<SvgMediaFields_Url_Delete>;
  read?: Maybe<SvgMediaFields_Url_Read>;
  update?: Maybe<SvgMediaFields_Url_Update>;
};

export type SvgMediaFields_Url_Create = {
  __typename?: 'SvgMediaFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Url_Delete = {
  __typename?: 'SvgMediaFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Url_Read = {
  __typename?: 'SvgMediaFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Url_Update = {
  __typename?: 'SvgMediaFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Width = {
  __typename?: 'SvgMediaFields_width';
  create?: Maybe<SvgMediaFields_Width_Create>;
  delete?: Maybe<SvgMediaFields_Width_Delete>;
  read?: Maybe<SvgMediaFields_Width_Read>;
  update?: Maybe<SvgMediaFields_Width_Update>;
};

export type SvgMediaFields_Width_Create = {
  __typename?: 'SvgMediaFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Width_Delete = {
  __typename?: 'SvgMediaFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Width_Read = {
  __typename?: 'SvgMediaFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Width_Update = {
  __typename?: 'SvgMediaFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaReadAccess = {
  __typename?: 'SvgMediaReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SvgMediaReadDocAccess = {
  __typename?: 'SvgMediaReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SvgMediaUpdateAccess = {
  __typename?: 'SvgMediaUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SvgMediaUpdateDocAccess = {
  __typename?: 'SvgMediaUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SvgMedia_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SvgMedia_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SvgMedia_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type SvgMedia_FocalX_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type SvgMedia_FocalY_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type SvgMedia_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type SvgMedia_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type SvgMedia_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SvgMedia_SvgContent_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type SvgMedia_ThumbnailUrl_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SvgMedia_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SvgMedia_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SvgMedia_Where = {
  AND?: InputMaybe<Array<InputMaybe<SvgMedia_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<SvgMedia_Where_Or>>>;
  createdAt?: InputMaybe<SvgMedia_CreatedAt_Operator>;
  filename?: InputMaybe<SvgMedia_Filename_Operator>;
  filesize?: InputMaybe<SvgMedia_Filesize_Operator>;
  focalX?: InputMaybe<SvgMedia_FocalX_Operator>;
  focalY?: InputMaybe<SvgMedia_FocalY_Operator>;
  height?: InputMaybe<SvgMedia_Height_Operator>;
  id?: InputMaybe<SvgMedia_Id_Operator>;
  mimeType?: InputMaybe<SvgMedia_MimeType_Operator>;
  svgContent?: InputMaybe<SvgMedia_SvgContent_Operator>;
  thumbnailURL?: InputMaybe<SvgMedia_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<SvgMedia_UpdatedAt_Operator>;
  url?: InputMaybe<SvgMedia_Url_Operator>;
  width?: InputMaybe<SvgMedia_Width_Operator>;
};

export type SvgMedia_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<SvgMedia_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<SvgMedia_Where_Or>>>;
  createdAt?: InputMaybe<SvgMedia_CreatedAt_Operator>;
  filename?: InputMaybe<SvgMedia_Filename_Operator>;
  filesize?: InputMaybe<SvgMedia_Filesize_Operator>;
  focalX?: InputMaybe<SvgMedia_FocalX_Operator>;
  focalY?: InputMaybe<SvgMedia_FocalY_Operator>;
  height?: InputMaybe<SvgMedia_Height_Operator>;
  id?: InputMaybe<SvgMedia_Id_Operator>;
  mimeType?: InputMaybe<SvgMedia_MimeType_Operator>;
  svgContent?: InputMaybe<SvgMedia_SvgContent_Operator>;
  thumbnailURL?: InputMaybe<SvgMedia_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<SvgMedia_UpdatedAt_Operator>;
  url?: InputMaybe<SvgMedia_Url_Operator>;
  width?: InputMaybe<SvgMedia_Width_Operator>;
};

export type SvgMedia_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<SvgMedia_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<SvgMedia_Where_Or>>>;
  createdAt?: InputMaybe<SvgMedia_CreatedAt_Operator>;
  filename?: InputMaybe<SvgMedia_Filename_Operator>;
  filesize?: InputMaybe<SvgMedia_Filesize_Operator>;
  focalX?: InputMaybe<SvgMedia_FocalX_Operator>;
  focalY?: InputMaybe<SvgMedia_FocalY_Operator>;
  height?: InputMaybe<SvgMedia_Height_Operator>;
  id?: InputMaybe<SvgMedia_Id_Operator>;
  mimeType?: InputMaybe<SvgMedia_MimeType_Operator>;
  svgContent?: InputMaybe<SvgMedia_SvgContent_Operator>;
  thumbnailURL?: InputMaybe<SvgMedia_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<SvgMedia_UpdatedAt_Operator>;
  url?: InputMaybe<SvgMedia_Url_Operator>;
  width?: InputMaybe<SvgMedia_Width_Operator>;
};

export type SvgMedia_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type SvgMedias = {
  __typename?: 'SvgMedias';
  docs: Array<SvgMedia>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Text = {
  __typename?: 'Text';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  defaultValue?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Textarea = {
  __typename?: 'Textarea';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  defaultValue?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ThreeItemGridBlock = {
  __typename?: 'ThreeItemGridBlock';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  products?: Maybe<Array<Product>>;
};


export type ThreeItemGridBlockProductsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type Transaction = {
  __typename?: 'Transaction';
  amount?: Maybe<Scalars['Float']['output']>;
  billingAddress?: Maybe<Transaction_BillingAddress>;
  cart?: Maybe<Cart>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currency?: Maybe<Transaction_Currency>;
  customer?: Maybe<User>;
  customerEmail?: Maybe<Scalars['EmailAddress']['output']>;
  id: Scalars['Int']['output'];
  items?: Maybe<Array<Transaction_Items>>;
  order?: Maybe<Order>;
  paymentMethod?: Maybe<Transaction_PaymentMethod>;
  status: Transaction_Status;
  stripe?: Maybe<Transaction_Stripe>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TransactionCartArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type TransactionCustomerArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type TransactionOrderArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export enum TransactionUpdate_Currency_MutationInput {
  Usd = 'USD'
}

export enum TransactionUpdate_PaymentMethod_MutationInput {
  Stripe = 'stripe'
}

export enum TransactionUpdate_Status_MutationInput {
  Cancelled = 'cancelled',
  Expired = 'expired',
  Failed = 'failed',
  Pending = 'pending',
  Refunded = 'refunded',
  Succeeded = 'succeeded'
}

export type Transaction_BillingAddress = {
  __typename?: 'Transaction_BillingAddress';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Transaction_Items = {
  __typename?: 'Transaction_Items';
  id?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars['Float']['output']>;
  variant?: Maybe<Variant>;
};


export type Transaction_ItemsProductArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type Transaction_ItemsVariantArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type Transaction_Stripe = {
  __typename?: 'Transaction_Stripe';
  customerID?: Maybe<Scalars['String']['output']>;
  paymentIntentID?: Maybe<Scalars['String']['output']>;
};

export type Transaction_Amount_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Transaction_BillingAddress__AddressLine1_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Transaction_BillingAddress__AddressLine2_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Transaction_BillingAddress__City_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Transaction_BillingAddress__Company_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Transaction_BillingAddress__Country_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Transaction_BillingAddress__FirstName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Transaction_BillingAddress__LastName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Transaction_BillingAddress__Phone_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Transaction_BillingAddress__PostalCode_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Transaction_BillingAddress__State_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Transaction_BillingAddress__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Transaction_Cart_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Transaction_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Transaction_Currency {
  Usd = 'USD'
}

export enum Transaction_Currency_Input {
  Usd = 'USD'
}

export enum Transaction_Currency_MutationInput {
  Usd = 'USD'
}

export type Transaction_Currency_Operator = {
  all?: InputMaybe<Array<InputMaybe<Transaction_Currency_Input>>>;
  equals?: InputMaybe<Transaction_Currency_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Transaction_Currency_Input>>>;
  not_equals?: InputMaybe<Transaction_Currency_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Transaction_Currency_Input>>>;
};

export type Transaction_CustomerEmail_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type Transaction_Customer_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Transaction_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Transaction_Items__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Transaction_Items__Product_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Transaction_Items__Quantity_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Transaction_Items__Variant_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Transaction_Order_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export enum Transaction_PaymentMethod {
  Stripe = 'stripe'
}

export enum Transaction_PaymentMethod_Input {
  Stripe = 'stripe'
}

export enum Transaction_PaymentMethod_MutationInput {
  Stripe = 'stripe'
}

export type Transaction_PaymentMethod_Operator = {
  all?: InputMaybe<Array<InputMaybe<Transaction_PaymentMethod_Input>>>;
  equals?: InputMaybe<Transaction_PaymentMethod_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Transaction_PaymentMethod_Input>>>;
  not_equals?: InputMaybe<Transaction_PaymentMethod_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Transaction_PaymentMethod_Input>>>;
};

export enum Transaction_Status {
  Cancelled = 'cancelled',
  Expired = 'expired',
  Failed = 'failed',
  Pending = 'pending',
  Refunded = 'refunded',
  Succeeded = 'succeeded'
}

export enum Transaction_Status_Input {
  Cancelled = 'cancelled',
  Expired = 'expired',
  Failed = 'failed',
  Pending = 'pending',
  Refunded = 'refunded',
  Succeeded = 'succeeded'
}

export enum Transaction_Status_MutationInput {
  Cancelled = 'cancelled',
  Expired = 'expired',
  Failed = 'failed',
  Pending = 'pending',
  Refunded = 'refunded',
  Succeeded = 'succeeded'
}

export type Transaction_Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Transaction_Status_Input>>>;
  equals?: InputMaybe<Transaction_Status_Input>;
  in?: InputMaybe<Array<InputMaybe<Transaction_Status_Input>>>;
  not_equals?: InputMaybe<Transaction_Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Transaction_Status_Input>>>;
};

export type Transaction_Stripe__CustomerId_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Transaction_Stripe__PaymentIntentId_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Transaction_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Transaction_Where = {
  AND?: InputMaybe<Array<InputMaybe<Transaction_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Transaction_Where_Or>>>;
  amount?: InputMaybe<Transaction_Amount_Operator>;
  billingAddress__addressLine1?: InputMaybe<Transaction_BillingAddress__AddressLine1_Operator>;
  billingAddress__addressLine2?: InputMaybe<Transaction_BillingAddress__AddressLine2_Operator>;
  billingAddress__city?: InputMaybe<Transaction_BillingAddress__City_Operator>;
  billingAddress__company?: InputMaybe<Transaction_BillingAddress__Company_Operator>;
  billingAddress__country?: InputMaybe<Transaction_BillingAddress__Country_Operator>;
  billingAddress__firstName?: InputMaybe<Transaction_BillingAddress__FirstName_Operator>;
  billingAddress__lastName?: InputMaybe<Transaction_BillingAddress__LastName_Operator>;
  billingAddress__phone?: InputMaybe<Transaction_BillingAddress__Phone_Operator>;
  billingAddress__postalCode?: InputMaybe<Transaction_BillingAddress__PostalCode_Operator>;
  billingAddress__state?: InputMaybe<Transaction_BillingAddress__State_Operator>;
  billingAddress__title?: InputMaybe<Transaction_BillingAddress__Title_Operator>;
  cart?: InputMaybe<Transaction_Cart_Operator>;
  createdAt?: InputMaybe<Transaction_CreatedAt_Operator>;
  currency?: InputMaybe<Transaction_Currency_Operator>;
  customer?: InputMaybe<Transaction_Customer_Operator>;
  customerEmail?: InputMaybe<Transaction_CustomerEmail_Operator>;
  id?: InputMaybe<Transaction_Id_Operator>;
  items__id?: InputMaybe<Transaction_Items__Id_Operator>;
  items__product?: InputMaybe<Transaction_Items__Product_Operator>;
  items__quantity?: InputMaybe<Transaction_Items__Quantity_Operator>;
  items__variant?: InputMaybe<Transaction_Items__Variant_Operator>;
  order?: InputMaybe<Transaction_Order_Operator>;
  paymentMethod?: InputMaybe<Transaction_PaymentMethod_Operator>;
  status?: InputMaybe<Transaction_Status_Operator>;
  stripe__customerID?: InputMaybe<Transaction_Stripe__CustomerId_Operator>;
  stripe__paymentIntentID?: InputMaybe<Transaction_Stripe__PaymentIntentId_Operator>;
  updatedAt?: InputMaybe<Transaction_UpdatedAt_Operator>;
};

export type Transaction_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Transaction_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Transaction_Where_Or>>>;
  amount?: InputMaybe<Transaction_Amount_Operator>;
  billingAddress__addressLine1?: InputMaybe<Transaction_BillingAddress__AddressLine1_Operator>;
  billingAddress__addressLine2?: InputMaybe<Transaction_BillingAddress__AddressLine2_Operator>;
  billingAddress__city?: InputMaybe<Transaction_BillingAddress__City_Operator>;
  billingAddress__company?: InputMaybe<Transaction_BillingAddress__Company_Operator>;
  billingAddress__country?: InputMaybe<Transaction_BillingAddress__Country_Operator>;
  billingAddress__firstName?: InputMaybe<Transaction_BillingAddress__FirstName_Operator>;
  billingAddress__lastName?: InputMaybe<Transaction_BillingAddress__LastName_Operator>;
  billingAddress__phone?: InputMaybe<Transaction_BillingAddress__Phone_Operator>;
  billingAddress__postalCode?: InputMaybe<Transaction_BillingAddress__PostalCode_Operator>;
  billingAddress__state?: InputMaybe<Transaction_BillingAddress__State_Operator>;
  billingAddress__title?: InputMaybe<Transaction_BillingAddress__Title_Operator>;
  cart?: InputMaybe<Transaction_Cart_Operator>;
  createdAt?: InputMaybe<Transaction_CreatedAt_Operator>;
  currency?: InputMaybe<Transaction_Currency_Operator>;
  customer?: InputMaybe<Transaction_Customer_Operator>;
  customerEmail?: InputMaybe<Transaction_CustomerEmail_Operator>;
  id?: InputMaybe<Transaction_Id_Operator>;
  items__id?: InputMaybe<Transaction_Items__Id_Operator>;
  items__product?: InputMaybe<Transaction_Items__Product_Operator>;
  items__quantity?: InputMaybe<Transaction_Items__Quantity_Operator>;
  items__variant?: InputMaybe<Transaction_Items__Variant_Operator>;
  order?: InputMaybe<Transaction_Order_Operator>;
  paymentMethod?: InputMaybe<Transaction_PaymentMethod_Operator>;
  status?: InputMaybe<Transaction_Status_Operator>;
  stripe__customerID?: InputMaybe<Transaction_Stripe__CustomerId_Operator>;
  stripe__paymentIntentID?: InputMaybe<Transaction_Stripe__PaymentIntentId_Operator>;
  updatedAt?: InputMaybe<Transaction_UpdatedAt_Operator>;
};

export type Transaction_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Transaction_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Transaction_Where_Or>>>;
  amount?: InputMaybe<Transaction_Amount_Operator>;
  billingAddress__addressLine1?: InputMaybe<Transaction_BillingAddress__AddressLine1_Operator>;
  billingAddress__addressLine2?: InputMaybe<Transaction_BillingAddress__AddressLine2_Operator>;
  billingAddress__city?: InputMaybe<Transaction_BillingAddress__City_Operator>;
  billingAddress__company?: InputMaybe<Transaction_BillingAddress__Company_Operator>;
  billingAddress__country?: InputMaybe<Transaction_BillingAddress__Country_Operator>;
  billingAddress__firstName?: InputMaybe<Transaction_BillingAddress__FirstName_Operator>;
  billingAddress__lastName?: InputMaybe<Transaction_BillingAddress__LastName_Operator>;
  billingAddress__phone?: InputMaybe<Transaction_BillingAddress__Phone_Operator>;
  billingAddress__postalCode?: InputMaybe<Transaction_BillingAddress__PostalCode_Operator>;
  billingAddress__state?: InputMaybe<Transaction_BillingAddress__State_Operator>;
  billingAddress__title?: InputMaybe<Transaction_BillingAddress__Title_Operator>;
  cart?: InputMaybe<Transaction_Cart_Operator>;
  createdAt?: InputMaybe<Transaction_CreatedAt_Operator>;
  currency?: InputMaybe<Transaction_Currency_Operator>;
  customer?: InputMaybe<Transaction_Customer_Operator>;
  customerEmail?: InputMaybe<Transaction_CustomerEmail_Operator>;
  id?: InputMaybe<Transaction_Id_Operator>;
  items__id?: InputMaybe<Transaction_Items__Id_Operator>;
  items__product?: InputMaybe<Transaction_Items__Product_Operator>;
  items__quantity?: InputMaybe<Transaction_Items__Quantity_Operator>;
  items__variant?: InputMaybe<Transaction_Items__Variant_Operator>;
  order?: InputMaybe<Transaction_Order_Operator>;
  paymentMethod?: InputMaybe<Transaction_PaymentMethod_Operator>;
  status?: InputMaybe<Transaction_Status_Operator>;
  stripe__customerID?: InputMaybe<Transaction_Stripe__CustomerId_Operator>;
  stripe__paymentIntentID?: InputMaybe<Transaction_Stripe__PaymentIntentId_Operator>;
  updatedAt?: InputMaybe<Transaction_UpdatedAt_Operator>;
};

export type Transactions = {
  __typename?: 'Transactions';
  docs: Array<Transaction>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type TransactionsCreateAccess = {
  __typename?: 'TransactionsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TransactionsCreateDocAccess = {
  __typename?: 'TransactionsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TransactionsDeleteAccess = {
  __typename?: 'TransactionsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TransactionsDeleteDocAccess = {
  __typename?: 'TransactionsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TransactionsDocAccessFields = {
  __typename?: 'TransactionsDocAccessFields';
  amount?: Maybe<TransactionsDocAccessFields_Amount>;
  billingAddress?: Maybe<TransactionsDocAccessFields_BillingAddress>;
  cart?: Maybe<TransactionsDocAccessFields_Cart>;
  createdAt?: Maybe<TransactionsDocAccessFields_CreatedAt>;
  currency?: Maybe<TransactionsDocAccessFields_Currency>;
  customer?: Maybe<TransactionsDocAccessFields_Customer>;
  customerEmail?: Maybe<TransactionsDocAccessFields_CustomerEmail>;
  items?: Maybe<TransactionsDocAccessFields_Items>;
  order?: Maybe<TransactionsDocAccessFields_Order>;
  paymentMethod?: Maybe<TransactionsDocAccessFields_PaymentMethod>;
  status?: Maybe<TransactionsDocAccessFields_Status>;
  stripe?: Maybe<TransactionsDocAccessFields_Stripe>;
  updatedAt?: Maybe<TransactionsDocAccessFields_UpdatedAt>;
};

export type TransactionsDocAccessFields_Amount = {
  __typename?: 'TransactionsDocAccessFields_amount';
  create?: Maybe<TransactionsDocAccessFields_Amount_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Amount_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Amount_Read>;
  update?: Maybe<TransactionsDocAccessFields_Amount_Update>;
};

export type TransactionsDocAccessFields_Amount_Create = {
  __typename?: 'TransactionsDocAccessFields_amount_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Amount_Delete = {
  __typename?: 'TransactionsDocAccessFields_amount_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Amount_Read = {
  __typename?: 'TransactionsDocAccessFields_amount_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Amount_Update = {
  __typename?: 'TransactionsDocAccessFields_amount_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress = {
  __typename?: 'TransactionsDocAccessFields_billingAddress';
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_Delete>;
  fields?: Maybe<TransactionsDocAccessFields_BillingAddress_Fields>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_Create = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Delete = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Fields = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_Fields';
  addressLine1?: Maybe<TransactionsDocAccessFields_BillingAddress_AddressLine1>;
  addressLine2?: Maybe<TransactionsDocAccessFields_BillingAddress_AddressLine2>;
  city?: Maybe<TransactionsDocAccessFields_BillingAddress_City>;
  company?: Maybe<TransactionsDocAccessFields_BillingAddress_Company>;
  country?: Maybe<TransactionsDocAccessFields_BillingAddress_Country>;
  firstName?: Maybe<TransactionsDocAccessFields_BillingAddress_FirstName>;
  lastName?: Maybe<TransactionsDocAccessFields_BillingAddress_LastName>;
  phone?: Maybe<TransactionsDocAccessFields_BillingAddress_Phone>;
  postalCode?: Maybe<TransactionsDocAccessFields_BillingAddress_PostalCode>;
  state?: Maybe<TransactionsDocAccessFields_BillingAddress_State>;
  title?: Maybe<TransactionsDocAccessFields_BillingAddress_Title>;
};

export type TransactionsDocAccessFields_BillingAddress_Read = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Update = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_AddressLine1 = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_addressLine1';
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_AddressLine1_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_AddressLine1_Delete>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_AddressLine1_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_AddressLine1_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_AddressLine1_Create = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_addressLine1_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_AddressLine1_Delete = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_addressLine1_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_AddressLine1_Read = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_addressLine1_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_AddressLine1_Update = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_addressLine1_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_AddressLine2 = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_addressLine2';
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_AddressLine2_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_AddressLine2_Delete>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_AddressLine2_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_AddressLine2_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_AddressLine2_Create = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_addressLine2_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_AddressLine2_Delete = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_addressLine2_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_AddressLine2_Read = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_addressLine2_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_AddressLine2_Update = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_addressLine2_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_City = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_city';
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_City_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_City_Delete>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_City_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_City_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_City_Create = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_city_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_City_Delete = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_city_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_City_Read = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_city_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_City_Update = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_city_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Company = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_company';
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_Company_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_Company_Delete>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_Company_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_Company_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_Company_Create = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_company_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Company_Delete = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_company_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Company_Read = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_company_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Company_Update = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_company_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Country = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_country';
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_Country_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_Country_Delete>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_Country_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_Country_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_Country_Create = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_country_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Country_Delete = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_country_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Country_Read = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_country_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Country_Update = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_country_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_FirstName = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_firstName';
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_FirstName_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_FirstName_Delete>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_FirstName_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_FirstName_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_FirstName_Create = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_firstName_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_FirstName_Delete = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_firstName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_FirstName_Read = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_firstName_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_FirstName_Update = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_firstName_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_LastName = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_lastName';
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_LastName_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_LastName_Delete>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_LastName_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_LastName_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_LastName_Create = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_lastName_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_LastName_Delete = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_lastName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_LastName_Read = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_lastName_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_LastName_Update = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_lastName_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Phone = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_phone';
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_Phone_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_Phone_Delete>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_Phone_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_Phone_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_Phone_Create = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Phone_Delete = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Phone_Read = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Phone_Update = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_PostalCode = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_postalCode';
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_PostalCode_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_PostalCode_Delete>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_PostalCode_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_PostalCode_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_PostalCode_Create = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_postalCode_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_PostalCode_Delete = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_postalCode_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_PostalCode_Read = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_postalCode_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_PostalCode_Update = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_postalCode_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_State = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_state';
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_State_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_State_Delete>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_State_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_State_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_State_Create = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_state_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_State_Delete = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_state_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_State_Read = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_state_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_State_Update = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_state_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Title = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_title';
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_Title_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_Title_Delete>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_Title_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_Title_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_Title_Create = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Title_Delete = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Title_Read = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Title_Update = {
  __typename?: 'TransactionsDocAccessFields_billingAddress_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Cart = {
  __typename?: 'TransactionsDocAccessFields_cart';
  create?: Maybe<TransactionsDocAccessFields_Cart_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Cart_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Cart_Read>;
  update?: Maybe<TransactionsDocAccessFields_Cart_Update>;
};

export type TransactionsDocAccessFields_Cart_Create = {
  __typename?: 'TransactionsDocAccessFields_cart_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Cart_Delete = {
  __typename?: 'TransactionsDocAccessFields_cart_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Cart_Read = {
  __typename?: 'TransactionsDocAccessFields_cart_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Cart_Update = {
  __typename?: 'TransactionsDocAccessFields_cart_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_CreatedAt = {
  __typename?: 'TransactionsDocAccessFields_createdAt';
  create?: Maybe<TransactionsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<TransactionsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<TransactionsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<TransactionsDocAccessFields_CreatedAt_Update>;
};

export type TransactionsDocAccessFields_CreatedAt_Create = {
  __typename?: 'TransactionsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'TransactionsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_CreatedAt_Read = {
  __typename?: 'TransactionsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_CreatedAt_Update = {
  __typename?: 'TransactionsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Currency = {
  __typename?: 'TransactionsDocAccessFields_currency';
  create?: Maybe<TransactionsDocAccessFields_Currency_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Currency_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Currency_Read>;
  update?: Maybe<TransactionsDocAccessFields_Currency_Update>;
};

export type TransactionsDocAccessFields_Currency_Create = {
  __typename?: 'TransactionsDocAccessFields_currency_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Currency_Delete = {
  __typename?: 'TransactionsDocAccessFields_currency_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Currency_Read = {
  __typename?: 'TransactionsDocAccessFields_currency_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Currency_Update = {
  __typename?: 'TransactionsDocAccessFields_currency_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Customer = {
  __typename?: 'TransactionsDocAccessFields_customer';
  create?: Maybe<TransactionsDocAccessFields_Customer_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Customer_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Customer_Read>;
  update?: Maybe<TransactionsDocAccessFields_Customer_Update>;
};

export type TransactionsDocAccessFields_CustomerEmail = {
  __typename?: 'TransactionsDocAccessFields_customerEmail';
  create?: Maybe<TransactionsDocAccessFields_CustomerEmail_Create>;
  delete?: Maybe<TransactionsDocAccessFields_CustomerEmail_Delete>;
  read?: Maybe<TransactionsDocAccessFields_CustomerEmail_Read>;
  update?: Maybe<TransactionsDocAccessFields_CustomerEmail_Update>;
};

export type TransactionsDocAccessFields_CustomerEmail_Create = {
  __typename?: 'TransactionsDocAccessFields_customerEmail_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_CustomerEmail_Delete = {
  __typename?: 'TransactionsDocAccessFields_customerEmail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_CustomerEmail_Read = {
  __typename?: 'TransactionsDocAccessFields_customerEmail_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_CustomerEmail_Update = {
  __typename?: 'TransactionsDocAccessFields_customerEmail_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Customer_Create = {
  __typename?: 'TransactionsDocAccessFields_customer_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Customer_Delete = {
  __typename?: 'TransactionsDocAccessFields_customer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Customer_Read = {
  __typename?: 'TransactionsDocAccessFields_customer_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Customer_Update = {
  __typename?: 'TransactionsDocAccessFields_customer_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items = {
  __typename?: 'TransactionsDocAccessFields_items';
  create?: Maybe<TransactionsDocAccessFields_Items_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Items_Delete>;
  fields?: Maybe<TransactionsDocAccessFields_Items_Fields>;
  read?: Maybe<TransactionsDocAccessFields_Items_Read>;
  update?: Maybe<TransactionsDocAccessFields_Items_Update>;
};

export type TransactionsDocAccessFields_Items_Create = {
  __typename?: 'TransactionsDocAccessFields_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Delete = {
  __typename?: 'TransactionsDocAccessFields_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Fields = {
  __typename?: 'TransactionsDocAccessFields_items_Fields';
  id?: Maybe<TransactionsDocAccessFields_Items_Id>;
  product?: Maybe<TransactionsDocAccessFields_Items_Product>;
  quantity?: Maybe<TransactionsDocAccessFields_Items_Quantity>;
  variant?: Maybe<TransactionsDocAccessFields_Items_Variant>;
};

export type TransactionsDocAccessFields_Items_Read = {
  __typename?: 'TransactionsDocAccessFields_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Update = {
  __typename?: 'TransactionsDocAccessFields_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Id = {
  __typename?: 'TransactionsDocAccessFields_items_id';
  create?: Maybe<TransactionsDocAccessFields_Items_Id_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Items_Id_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Items_Id_Read>;
  update?: Maybe<TransactionsDocAccessFields_Items_Id_Update>;
};

export type TransactionsDocAccessFields_Items_Id_Create = {
  __typename?: 'TransactionsDocAccessFields_items_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Id_Delete = {
  __typename?: 'TransactionsDocAccessFields_items_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Id_Read = {
  __typename?: 'TransactionsDocAccessFields_items_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Id_Update = {
  __typename?: 'TransactionsDocAccessFields_items_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Product = {
  __typename?: 'TransactionsDocAccessFields_items_product';
  create?: Maybe<TransactionsDocAccessFields_Items_Product_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Items_Product_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Items_Product_Read>;
  update?: Maybe<TransactionsDocAccessFields_Items_Product_Update>;
};

export type TransactionsDocAccessFields_Items_Product_Create = {
  __typename?: 'TransactionsDocAccessFields_items_product_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Product_Delete = {
  __typename?: 'TransactionsDocAccessFields_items_product_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Product_Read = {
  __typename?: 'TransactionsDocAccessFields_items_product_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Product_Update = {
  __typename?: 'TransactionsDocAccessFields_items_product_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Quantity = {
  __typename?: 'TransactionsDocAccessFields_items_quantity';
  create?: Maybe<TransactionsDocAccessFields_Items_Quantity_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Items_Quantity_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Items_Quantity_Read>;
  update?: Maybe<TransactionsDocAccessFields_Items_Quantity_Update>;
};

export type TransactionsDocAccessFields_Items_Quantity_Create = {
  __typename?: 'TransactionsDocAccessFields_items_quantity_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Quantity_Delete = {
  __typename?: 'TransactionsDocAccessFields_items_quantity_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Quantity_Read = {
  __typename?: 'TransactionsDocAccessFields_items_quantity_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Quantity_Update = {
  __typename?: 'TransactionsDocAccessFields_items_quantity_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Variant = {
  __typename?: 'TransactionsDocAccessFields_items_variant';
  create?: Maybe<TransactionsDocAccessFields_Items_Variant_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Items_Variant_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Items_Variant_Read>;
  update?: Maybe<TransactionsDocAccessFields_Items_Variant_Update>;
};

export type TransactionsDocAccessFields_Items_Variant_Create = {
  __typename?: 'TransactionsDocAccessFields_items_variant_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Variant_Delete = {
  __typename?: 'TransactionsDocAccessFields_items_variant_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Variant_Read = {
  __typename?: 'TransactionsDocAccessFields_items_variant_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Variant_Update = {
  __typename?: 'TransactionsDocAccessFields_items_variant_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Order = {
  __typename?: 'TransactionsDocAccessFields_order';
  create?: Maybe<TransactionsDocAccessFields_Order_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Order_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Order_Read>;
  update?: Maybe<TransactionsDocAccessFields_Order_Update>;
};

export type TransactionsDocAccessFields_Order_Create = {
  __typename?: 'TransactionsDocAccessFields_order_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Order_Delete = {
  __typename?: 'TransactionsDocAccessFields_order_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Order_Read = {
  __typename?: 'TransactionsDocAccessFields_order_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Order_Update = {
  __typename?: 'TransactionsDocAccessFields_order_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_PaymentMethod = {
  __typename?: 'TransactionsDocAccessFields_paymentMethod';
  create?: Maybe<TransactionsDocAccessFields_PaymentMethod_Create>;
  delete?: Maybe<TransactionsDocAccessFields_PaymentMethod_Delete>;
  read?: Maybe<TransactionsDocAccessFields_PaymentMethod_Read>;
  update?: Maybe<TransactionsDocAccessFields_PaymentMethod_Update>;
};

export type TransactionsDocAccessFields_PaymentMethod_Create = {
  __typename?: 'TransactionsDocAccessFields_paymentMethod_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_PaymentMethod_Delete = {
  __typename?: 'TransactionsDocAccessFields_paymentMethod_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_PaymentMethod_Read = {
  __typename?: 'TransactionsDocAccessFields_paymentMethod_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_PaymentMethod_Update = {
  __typename?: 'TransactionsDocAccessFields_paymentMethod_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Status = {
  __typename?: 'TransactionsDocAccessFields_status';
  create?: Maybe<TransactionsDocAccessFields_Status_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Status_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Status_Read>;
  update?: Maybe<TransactionsDocAccessFields_Status_Update>;
};

export type TransactionsDocAccessFields_Status_Create = {
  __typename?: 'TransactionsDocAccessFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Status_Delete = {
  __typename?: 'TransactionsDocAccessFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Status_Read = {
  __typename?: 'TransactionsDocAccessFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Status_Update = {
  __typename?: 'TransactionsDocAccessFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe = {
  __typename?: 'TransactionsDocAccessFields_stripe';
  create?: Maybe<TransactionsDocAccessFields_Stripe_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Stripe_Delete>;
  fields?: Maybe<TransactionsDocAccessFields_Stripe_Fields>;
  read?: Maybe<TransactionsDocAccessFields_Stripe_Read>;
  update?: Maybe<TransactionsDocAccessFields_Stripe_Update>;
};

export type TransactionsDocAccessFields_Stripe_Create = {
  __typename?: 'TransactionsDocAccessFields_stripe_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe_Delete = {
  __typename?: 'TransactionsDocAccessFields_stripe_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe_Fields = {
  __typename?: 'TransactionsDocAccessFields_stripe_Fields';
  customerID?: Maybe<TransactionsDocAccessFields_Stripe_CustomerId>;
  paymentIntentID?: Maybe<TransactionsDocAccessFields_Stripe_PaymentIntentId>;
};

export type TransactionsDocAccessFields_Stripe_Read = {
  __typename?: 'TransactionsDocAccessFields_stripe_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe_Update = {
  __typename?: 'TransactionsDocAccessFields_stripe_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe_CustomerId = {
  __typename?: 'TransactionsDocAccessFields_stripe_customerID';
  create?: Maybe<TransactionsDocAccessFields_Stripe_CustomerId_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Stripe_CustomerId_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Stripe_CustomerId_Read>;
  update?: Maybe<TransactionsDocAccessFields_Stripe_CustomerId_Update>;
};

export type TransactionsDocAccessFields_Stripe_CustomerId_Create = {
  __typename?: 'TransactionsDocAccessFields_stripe_customerID_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe_CustomerId_Delete = {
  __typename?: 'TransactionsDocAccessFields_stripe_customerID_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe_CustomerId_Read = {
  __typename?: 'TransactionsDocAccessFields_stripe_customerID_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe_CustomerId_Update = {
  __typename?: 'TransactionsDocAccessFields_stripe_customerID_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe_PaymentIntentId = {
  __typename?: 'TransactionsDocAccessFields_stripe_paymentIntentID';
  create?: Maybe<TransactionsDocAccessFields_Stripe_PaymentIntentId_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Stripe_PaymentIntentId_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Stripe_PaymentIntentId_Read>;
  update?: Maybe<TransactionsDocAccessFields_Stripe_PaymentIntentId_Update>;
};

export type TransactionsDocAccessFields_Stripe_PaymentIntentId_Create = {
  __typename?: 'TransactionsDocAccessFields_stripe_paymentIntentID_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe_PaymentIntentId_Delete = {
  __typename?: 'TransactionsDocAccessFields_stripe_paymentIntentID_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe_PaymentIntentId_Read = {
  __typename?: 'TransactionsDocAccessFields_stripe_paymentIntentID_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe_PaymentIntentId_Update = {
  __typename?: 'TransactionsDocAccessFields_stripe_paymentIntentID_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_UpdatedAt = {
  __typename?: 'TransactionsDocAccessFields_updatedAt';
  create?: Maybe<TransactionsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<TransactionsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<TransactionsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<TransactionsDocAccessFields_UpdatedAt_Update>;
};

export type TransactionsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'TransactionsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'TransactionsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'TransactionsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'TransactionsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields = {
  __typename?: 'TransactionsFields';
  amount?: Maybe<TransactionsFields_Amount>;
  billingAddress?: Maybe<TransactionsFields_BillingAddress>;
  cart?: Maybe<TransactionsFields_Cart>;
  createdAt?: Maybe<TransactionsFields_CreatedAt>;
  currency?: Maybe<TransactionsFields_Currency>;
  customer?: Maybe<TransactionsFields_Customer>;
  customerEmail?: Maybe<TransactionsFields_CustomerEmail>;
  items?: Maybe<TransactionsFields_Items>;
  order?: Maybe<TransactionsFields_Order>;
  paymentMethod?: Maybe<TransactionsFields_PaymentMethod>;
  status?: Maybe<TransactionsFields_Status>;
  stripe?: Maybe<TransactionsFields_Stripe>;
  updatedAt?: Maybe<TransactionsFields_UpdatedAt>;
};

export type TransactionsFields_Amount = {
  __typename?: 'TransactionsFields_amount';
  create?: Maybe<TransactionsFields_Amount_Create>;
  delete?: Maybe<TransactionsFields_Amount_Delete>;
  read?: Maybe<TransactionsFields_Amount_Read>;
  update?: Maybe<TransactionsFields_Amount_Update>;
};

export type TransactionsFields_Amount_Create = {
  __typename?: 'TransactionsFields_amount_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Amount_Delete = {
  __typename?: 'TransactionsFields_amount_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Amount_Read = {
  __typename?: 'TransactionsFields_amount_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Amount_Update = {
  __typename?: 'TransactionsFields_amount_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress = {
  __typename?: 'TransactionsFields_billingAddress';
  create?: Maybe<TransactionsFields_BillingAddress_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_Delete>;
  fields?: Maybe<TransactionsFields_BillingAddress_Fields>;
  read?: Maybe<TransactionsFields_BillingAddress_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_Update>;
};

export type TransactionsFields_BillingAddress_Create = {
  __typename?: 'TransactionsFields_billingAddress_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Delete = {
  __typename?: 'TransactionsFields_billingAddress_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Fields = {
  __typename?: 'TransactionsFields_billingAddress_Fields';
  addressLine1?: Maybe<TransactionsFields_BillingAddress_AddressLine1>;
  addressLine2?: Maybe<TransactionsFields_BillingAddress_AddressLine2>;
  city?: Maybe<TransactionsFields_BillingAddress_City>;
  company?: Maybe<TransactionsFields_BillingAddress_Company>;
  country?: Maybe<TransactionsFields_BillingAddress_Country>;
  firstName?: Maybe<TransactionsFields_BillingAddress_FirstName>;
  lastName?: Maybe<TransactionsFields_BillingAddress_LastName>;
  phone?: Maybe<TransactionsFields_BillingAddress_Phone>;
  postalCode?: Maybe<TransactionsFields_BillingAddress_PostalCode>;
  state?: Maybe<TransactionsFields_BillingAddress_State>;
  title?: Maybe<TransactionsFields_BillingAddress_Title>;
};

export type TransactionsFields_BillingAddress_Read = {
  __typename?: 'TransactionsFields_billingAddress_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Update = {
  __typename?: 'TransactionsFields_billingAddress_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_AddressLine1 = {
  __typename?: 'TransactionsFields_billingAddress_addressLine1';
  create?: Maybe<TransactionsFields_BillingAddress_AddressLine1_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_AddressLine1_Delete>;
  read?: Maybe<TransactionsFields_BillingAddress_AddressLine1_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_AddressLine1_Update>;
};

export type TransactionsFields_BillingAddress_AddressLine1_Create = {
  __typename?: 'TransactionsFields_billingAddress_addressLine1_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_AddressLine1_Delete = {
  __typename?: 'TransactionsFields_billingAddress_addressLine1_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_AddressLine1_Read = {
  __typename?: 'TransactionsFields_billingAddress_addressLine1_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_AddressLine1_Update = {
  __typename?: 'TransactionsFields_billingAddress_addressLine1_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_AddressLine2 = {
  __typename?: 'TransactionsFields_billingAddress_addressLine2';
  create?: Maybe<TransactionsFields_BillingAddress_AddressLine2_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_AddressLine2_Delete>;
  read?: Maybe<TransactionsFields_BillingAddress_AddressLine2_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_AddressLine2_Update>;
};

export type TransactionsFields_BillingAddress_AddressLine2_Create = {
  __typename?: 'TransactionsFields_billingAddress_addressLine2_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_AddressLine2_Delete = {
  __typename?: 'TransactionsFields_billingAddress_addressLine2_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_AddressLine2_Read = {
  __typename?: 'TransactionsFields_billingAddress_addressLine2_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_AddressLine2_Update = {
  __typename?: 'TransactionsFields_billingAddress_addressLine2_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_City = {
  __typename?: 'TransactionsFields_billingAddress_city';
  create?: Maybe<TransactionsFields_BillingAddress_City_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_City_Delete>;
  read?: Maybe<TransactionsFields_BillingAddress_City_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_City_Update>;
};

export type TransactionsFields_BillingAddress_City_Create = {
  __typename?: 'TransactionsFields_billingAddress_city_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_City_Delete = {
  __typename?: 'TransactionsFields_billingAddress_city_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_City_Read = {
  __typename?: 'TransactionsFields_billingAddress_city_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_City_Update = {
  __typename?: 'TransactionsFields_billingAddress_city_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Company = {
  __typename?: 'TransactionsFields_billingAddress_company';
  create?: Maybe<TransactionsFields_BillingAddress_Company_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_Company_Delete>;
  read?: Maybe<TransactionsFields_BillingAddress_Company_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_Company_Update>;
};

export type TransactionsFields_BillingAddress_Company_Create = {
  __typename?: 'TransactionsFields_billingAddress_company_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Company_Delete = {
  __typename?: 'TransactionsFields_billingAddress_company_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Company_Read = {
  __typename?: 'TransactionsFields_billingAddress_company_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Company_Update = {
  __typename?: 'TransactionsFields_billingAddress_company_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Country = {
  __typename?: 'TransactionsFields_billingAddress_country';
  create?: Maybe<TransactionsFields_BillingAddress_Country_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_Country_Delete>;
  read?: Maybe<TransactionsFields_BillingAddress_Country_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_Country_Update>;
};

export type TransactionsFields_BillingAddress_Country_Create = {
  __typename?: 'TransactionsFields_billingAddress_country_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Country_Delete = {
  __typename?: 'TransactionsFields_billingAddress_country_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Country_Read = {
  __typename?: 'TransactionsFields_billingAddress_country_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Country_Update = {
  __typename?: 'TransactionsFields_billingAddress_country_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_FirstName = {
  __typename?: 'TransactionsFields_billingAddress_firstName';
  create?: Maybe<TransactionsFields_BillingAddress_FirstName_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_FirstName_Delete>;
  read?: Maybe<TransactionsFields_BillingAddress_FirstName_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_FirstName_Update>;
};

export type TransactionsFields_BillingAddress_FirstName_Create = {
  __typename?: 'TransactionsFields_billingAddress_firstName_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_FirstName_Delete = {
  __typename?: 'TransactionsFields_billingAddress_firstName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_FirstName_Read = {
  __typename?: 'TransactionsFields_billingAddress_firstName_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_FirstName_Update = {
  __typename?: 'TransactionsFields_billingAddress_firstName_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_LastName = {
  __typename?: 'TransactionsFields_billingAddress_lastName';
  create?: Maybe<TransactionsFields_BillingAddress_LastName_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_LastName_Delete>;
  read?: Maybe<TransactionsFields_BillingAddress_LastName_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_LastName_Update>;
};

export type TransactionsFields_BillingAddress_LastName_Create = {
  __typename?: 'TransactionsFields_billingAddress_lastName_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_LastName_Delete = {
  __typename?: 'TransactionsFields_billingAddress_lastName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_LastName_Read = {
  __typename?: 'TransactionsFields_billingAddress_lastName_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_LastName_Update = {
  __typename?: 'TransactionsFields_billingAddress_lastName_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Phone = {
  __typename?: 'TransactionsFields_billingAddress_phone';
  create?: Maybe<TransactionsFields_BillingAddress_Phone_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_Phone_Delete>;
  read?: Maybe<TransactionsFields_BillingAddress_Phone_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_Phone_Update>;
};

export type TransactionsFields_BillingAddress_Phone_Create = {
  __typename?: 'TransactionsFields_billingAddress_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Phone_Delete = {
  __typename?: 'TransactionsFields_billingAddress_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Phone_Read = {
  __typename?: 'TransactionsFields_billingAddress_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Phone_Update = {
  __typename?: 'TransactionsFields_billingAddress_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_PostalCode = {
  __typename?: 'TransactionsFields_billingAddress_postalCode';
  create?: Maybe<TransactionsFields_BillingAddress_PostalCode_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_PostalCode_Delete>;
  read?: Maybe<TransactionsFields_BillingAddress_PostalCode_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_PostalCode_Update>;
};

export type TransactionsFields_BillingAddress_PostalCode_Create = {
  __typename?: 'TransactionsFields_billingAddress_postalCode_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_PostalCode_Delete = {
  __typename?: 'TransactionsFields_billingAddress_postalCode_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_PostalCode_Read = {
  __typename?: 'TransactionsFields_billingAddress_postalCode_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_PostalCode_Update = {
  __typename?: 'TransactionsFields_billingAddress_postalCode_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_State = {
  __typename?: 'TransactionsFields_billingAddress_state';
  create?: Maybe<TransactionsFields_BillingAddress_State_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_State_Delete>;
  read?: Maybe<TransactionsFields_BillingAddress_State_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_State_Update>;
};

export type TransactionsFields_BillingAddress_State_Create = {
  __typename?: 'TransactionsFields_billingAddress_state_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_State_Delete = {
  __typename?: 'TransactionsFields_billingAddress_state_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_State_Read = {
  __typename?: 'TransactionsFields_billingAddress_state_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_State_Update = {
  __typename?: 'TransactionsFields_billingAddress_state_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Title = {
  __typename?: 'TransactionsFields_billingAddress_title';
  create?: Maybe<TransactionsFields_BillingAddress_Title_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_Title_Delete>;
  read?: Maybe<TransactionsFields_BillingAddress_Title_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_Title_Update>;
};

export type TransactionsFields_BillingAddress_Title_Create = {
  __typename?: 'TransactionsFields_billingAddress_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Title_Delete = {
  __typename?: 'TransactionsFields_billingAddress_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Title_Read = {
  __typename?: 'TransactionsFields_billingAddress_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Title_Update = {
  __typename?: 'TransactionsFields_billingAddress_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Cart = {
  __typename?: 'TransactionsFields_cart';
  create?: Maybe<TransactionsFields_Cart_Create>;
  delete?: Maybe<TransactionsFields_Cart_Delete>;
  read?: Maybe<TransactionsFields_Cart_Read>;
  update?: Maybe<TransactionsFields_Cart_Update>;
};

export type TransactionsFields_Cart_Create = {
  __typename?: 'TransactionsFields_cart_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Cart_Delete = {
  __typename?: 'TransactionsFields_cart_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Cart_Read = {
  __typename?: 'TransactionsFields_cart_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Cart_Update = {
  __typename?: 'TransactionsFields_cart_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_CreatedAt = {
  __typename?: 'TransactionsFields_createdAt';
  create?: Maybe<TransactionsFields_CreatedAt_Create>;
  delete?: Maybe<TransactionsFields_CreatedAt_Delete>;
  read?: Maybe<TransactionsFields_CreatedAt_Read>;
  update?: Maybe<TransactionsFields_CreatedAt_Update>;
};

export type TransactionsFields_CreatedAt_Create = {
  __typename?: 'TransactionsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_CreatedAt_Delete = {
  __typename?: 'TransactionsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_CreatedAt_Read = {
  __typename?: 'TransactionsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_CreatedAt_Update = {
  __typename?: 'TransactionsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Currency = {
  __typename?: 'TransactionsFields_currency';
  create?: Maybe<TransactionsFields_Currency_Create>;
  delete?: Maybe<TransactionsFields_Currency_Delete>;
  read?: Maybe<TransactionsFields_Currency_Read>;
  update?: Maybe<TransactionsFields_Currency_Update>;
};

export type TransactionsFields_Currency_Create = {
  __typename?: 'TransactionsFields_currency_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Currency_Delete = {
  __typename?: 'TransactionsFields_currency_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Currency_Read = {
  __typename?: 'TransactionsFields_currency_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Currency_Update = {
  __typename?: 'TransactionsFields_currency_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Customer = {
  __typename?: 'TransactionsFields_customer';
  create?: Maybe<TransactionsFields_Customer_Create>;
  delete?: Maybe<TransactionsFields_Customer_Delete>;
  read?: Maybe<TransactionsFields_Customer_Read>;
  update?: Maybe<TransactionsFields_Customer_Update>;
};

export type TransactionsFields_CustomerEmail = {
  __typename?: 'TransactionsFields_customerEmail';
  create?: Maybe<TransactionsFields_CustomerEmail_Create>;
  delete?: Maybe<TransactionsFields_CustomerEmail_Delete>;
  read?: Maybe<TransactionsFields_CustomerEmail_Read>;
  update?: Maybe<TransactionsFields_CustomerEmail_Update>;
};

export type TransactionsFields_CustomerEmail_Create = {
  __typename?: 'TransactionsFields_customerEmail_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_CustomerEmail_Delete = {
  __typename?: 'TransactionsFields_customerEmail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_CustomerEmail_Read = {
  __typename?: 'TransactionsFields_customerEmail_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_CustomerEmail_Update = {
  __typename?: 'TransactionsFields_customerEmail_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Customer_Create = {
  __typename?: 'TransactionsFields_customer_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Customer_Delete = {
  __typename?: 'TransactionsFields_customer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Customer_Read = {
  __typename?: 'TransactionsFields_customer_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Customer_Update = {
  __typename?: 'TransactionsFields_customer_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items = {
  __typename?: 'TransactionsFields_items';
  create?: Maybe<TransactionsFields_Items_Create>;
  delete?: Maybe<TransactionsFields_Items_Delete>;
  fields?: Maybe<TransactionsFields_Items_Fields>;
  read?: Maybe<TransactionsFields_Items_Read>;
  update?: Maybe<TransactionsFields_Items_Update>;
};

export type TransactionsFields_Items_Create = {
  __typename?: 'TransactionsFields_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Delete = {
  __typename?: 'TransactionsFields_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Fields = {
  __typename?: 'TransactionsFields_items_Fields';
  id?: Maybe<TransactionsFields_Items_Id>;
  product?: Maybe<TransactionsFields_Items_Product>;
  quantity?: Maybe<TransactionsFields_Items_Quantity>;
  variant?: Maybe<TransactionsFields_Items_Variant>;
};

export type TransactionsFields_Items_Read = {
  __typename?: 'TransactionsFields_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Update = {
  __typename?: 'TransactionsFields_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Id = {
  __typename?: 'TransactionsFields_items_id';
  create?: Maybe<TransactionsFields_Items_Id_Create>;
  delete?: Maybe<TransactionsFields_Items_Id_Delete>;
  read?: Maybe<TransactionsFields_Items_Id_Read>;
  update?: Maybe<TransactionsFields_Items_Id_Update>;
};

export type TransactionsFields_Items_Id_Create = {
  __typename?: 'TransactionsFields_items_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Id_Delete = {
  __typename?: 'TransactionsFields_items_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Id_Read = {
  __typename?: 'TransactionsFields_items_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Id_Update = {
  __typename?: 'TransactionsFields_items_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Product = {
  __typename?: 'TransactionsFields_items_product';
  create?: Maybe<TransactionsFields_Items_Product_Create>;
  delete?: Maybe<TransactionsFields_Items_Product_Delete>;
  read?: Maybe<TransactionsFields_Items_Product_Read>;
  update?: Maybe<TransactionsFields_Items_Product_Update>;
};

export type TransactionsFields_Items_Product_Create = {
  __typename?: 'TransactionsFields_items_product_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Product_Delete = {
  __typename?: 'TransactionsFields_items_product_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Product_Read = {
  __typename?: 'TransactionsFields_items_product_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Product_Update = {
  __typename?: 'TransactionsFields_items_product_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Quantity = {
  __typename?: 'TransactionsFields_items_quantity';
  create?: Maybe<TransactionsFields_Items_Quantity_Create>;
  delete?: Maybe<TransactionsFields_Items_Quantity_Delete>;
  read?: Maybe<TransactionsFields_Items_Quantity_Read>;
  update?: Maybe<TransactionsFields_Items_Quantity_Update>;
};

export type TransactionsFields_Items_Quantity_Create = {
  __typename?: 'TransactionsFields_items_quantity_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Quantity_Delete = {
  __typename?: 'TransactionsFields_items_quantity_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Quantity_Read = {
  __typename?: 'TransactionsFields_items_quantity_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Quantity_Update = {
  __typename?: 'TransactionsFields_items_quantity_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Variant = {
  __typename?: 'TransactionsFields_items_variant';
  create?: Maybe<TransactionsFields_Items_Variant_Create>;
  delete?: Maybe<TransactionsFields_Items_Variant_Delete>;
  read?: Maybe<TransactionsFields_Items_Variant_Read>;
  update?: Maybe<TransactionsFields_Items_Variant_Update>;
};

export type TransactionsFields_Items_Variant_Create = {
  __typename?: 'TransactionsFields_items_variant_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Variant_Delete = {
  __typename?: 'TransactionsFields_items_variant_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Variant_Read = {
  __typename?: 'TransactionsFields_items_variant_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Variant_Update = {
  __typename?: 'TransactionsFields_items_variant_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Order = {
  __typename?: 'TransactionsFields_order';
  create?: Maybe<TransactionsFields_Order_Create>;
  delete?: Maybe<TransactionsFields_Order_Delete>;
  read?: Maybe<TransactionsFields_Order_Read>;
  update?: Maybe<TransactionsFields_Order_Update>;
};

export type TransactionsFields_Order_Create = {
  __typename?: 'TransactionsFields_order_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Order_Delete = {
  __typename?: 'TransactionsFields_order_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Order_Read = {
  __typename?: 'TransactionsFields_order_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Order_Update = {
  __typename?: 'TransactionsFields_order_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_PaymentMethod = {
  __typename?: 'TransactionsFields_paymentMethod';
  create?: Maybe<TransactionsFields_PaymentMethod_Create>;
  delete?: Maybe<TransactionsFields_PaymentMethod_Delete>;
  read?: Maybe<TransactionsFields_PaymentMethod_Read>;
  update?: Maybe<TransactionsFields_PaymentMethod_Update>;
};

export type TransactionsFields_PaymentMethod_Create = {
  __typename?: 'TransactionsFields_paymentMethod_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_PaymentMethod_Delete = {
  __typename?: 'TransactionsFields_paymentMethod_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_PaymentMethod_Read = {
  __typename?: 'TransactionsFields_paymentMethod_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_PaymentMethod_Update = {
  __typename?: 'TransactionsFields_paymentMethod_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Status = {
  __typename?: 'TransactionsFields_status';
  create?: Maybe<TransactionsFields_Status_Create>;
  delete?: Maybe<TransactionsFields_Status_Delete>;
  read?: Maybe<TransactionsFields_Status_Read>;
  update?: Maybe<TransactionsFields_Status_Update>;
};

export type TransactionsFields_Status_Create = {
  __typename?: 'TransactionsFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Status_Delete = {
  __typename?: 'TransactionsFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Status_Read = {
  __typename?: 'TransactionsFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Status_Update = {
  __typename?: 'TransactionsFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe = {
  __typename?: 'TransactionsFields_stripe';
  create?: Maybe<TransactionsFields_Stripe_Create>;
  delete?: Maybe<TransactionsFields_Stripe_Delete>;
  fields?: Maybe<TransactionsFields_Stripe_Fields>;
  read?: Maybe<TransactionsFields_Stripe_Read>;
  update?: Maybe<TransactionsFields_Stripe_Update>;
};

export type TransactionsFields_Stripe_Create = {
  __typename?: 'TransactionsFields_stripe_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe_Delete = {
  __typename?: 'TransactionsFields_stripe_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe_Fields = {
  __typename?: 'TransactionsFields_stripe_Fields';
  customerID?: Maybe<TransactionsFields_Stripe_CustomerId>;
  paymentIntentID?: Maybe<TransactionsFields_Stripe_PaymentIntentId>;
};

export type TransactionsFields_Stripe_Read = {
  __typename?: 'TransactionsFields_stripe_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe_Update = {
  __typename?: 'TransactionsFields_stripe_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe_CustomerId = {
  __typename?: 'TransactionsFields_stripe_customerID';
  create?: Maybe<TransactionsFields_Stripe_CustomerId_Create>;
  delete?: Maybe<TransactionsFields_Stripe_CustomerId_Delete>;
  read?: Maybe<TransactionsFields_Stripe_CustomerId_Read>;
  update?: Maybe<TransactionsFields_Stripe_CustomerId_Update>;
};

export type TransactionsFields_Stripe_CustomerId_Create = {
  __typename?: 'TransactionsFields_stripe_customerID_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe_CustomerId_Delete = {
  __typename?: 'TransactionsFields_stripe_customerID_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe_CustomerId_Read = {
  __typename?: 'TransactionsFields_stripe_customerID_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe_CustomerId_Update = {
  __typename?: 'TransactionsFields_stripe_customerID_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe_PaymentIntentId = {
  __typename?: 'TransactionsFields_stripe_paymentIntentID';
  create?: Maybe<TransactionsFields_Stripe_PaymentIntentId_Create>;
  delete?: Maybe<TransactionsFields_Stripe_PaymentIntentId_Delete>;
  read?: Maybe<TransactionsFields_Stripe_PaymentIntentId_Read>;
  update?: Maybe<TransactionsFields_Stripe_PaymentIntentId_Update>;
};

export type TransactionsFields_Stripe_PaymentIntentId_Create = {
  __typename?: 'TransactionsFields_stripe_paymentIntentID_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe_PaymentIntentId_Delete = {
  __typename?: 'TransactionsFields_stripe_paymentIntentID_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe_PaymentIntentId_Read = {
  __typename?: 'TransactionsFields_stripe_paymentIntentID_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe_PaymentIntentId_Update = {
  __typename?: 'TransactionsFields_stripe_paymentIntentID_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_UpdatedAt = {
  __typename?: 'TransactionsFields_updatedAt';
  create?: Maybe<TransactionsFields_UpdatedAt_Create>;
  delete?: Maybe<TransactionsFields_UpdatedAt_Delete>;
  read?: Maybe<TransactionsFields_UpdatedAt_Read>;
  update?: Maybe<TransactionsFields_UpdatedAt_Update>;
};

export type TransactionsFields_UpdatedAt_Create = {
  __typename?: 'TransactionsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_UpdatedAt_Delete = {
  __typename?: 'TransactionsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_UpdatedAt_Read = {
  __typename?: 'TransactionsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_UpdatedAt_Update = {
  __typename?: 'TransactionsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TransactionsReadAccess = {
  __typename?: 'TransactionsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TransactionsReadDocAccess = {
  __typename?: 'TransactionsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TransactionsUpdateAccess = {
  __typename?: 'TransactionsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TransactionsUpdateDocAccess = {
  __typename?: 'TransactionsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type User = {
  __typename?: 'User';
  addresses?: Maybe<User_Addresses>;
  cart?: Maybe<User_Cart>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  hash?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  lockUntil?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orders?: Maybe<User_Orders>;
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<User_Roles>>;
  salt?: Maybe<Scalars['String']['output']>;
  sessions?: Maybe<Array<User_Sessions>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UserAddressesArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Address_Where>;
};


export type UserCartArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Cart_Where>;
};


export type UserOrdersArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Order_Where>;
};

export enum UserUpdate_Roles_MutationInput {
  Admin = 'admin',
  Customer = 'customer'
}

export type User_Addresses = {
  __typename?: 'User_Addresses';
  docs: Array<Address>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type User_Cart = {
  __typename?: 'User_Cart';
  docs: Array<Cart>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type User_Orders = {
  __typename?: 'User_Orders';
  docs: Array<Order>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type User_Sessions = {
  __typename?: 'User_Sessions';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type User_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum User_Roles {
  Admin = 'admin',
  Customer = 'customer'
}

export enum User_Roles_Input {
  Admin = 'admin',
  Customer = 'customer'
}

export enum User_Roles_MutationInput {
  Admin = 'admin',
  Customer = 'customer'
}

export type User_Roles_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
  equals?: InputMaybe<User_Roles_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
  not_equals?: InputMaybe<User_Roles_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
};

export type User_Sessions__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Sessions__ExpiresAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Sessions__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  name?: InputMaybe<User_Name_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  name?: InputMaybe<User_Name_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  name?: InputMaybe<User_Name_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs: Array<User>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  addresses?: Maybe<UsersDocAccessFields_Addresses>;
  cart?: Maybe<UsersDocAccessFields_Cart>;
  createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
  email?: Maybe<UsersDocAccessFields_Email>;
  name?: Maybe<UsersDocAccessFields_Name>;
  orders?: Maybe<UsersDocAccessFields_Orders>;
  roles?: Maybe<UsersDocAccessFields_Roles>;
  sessions?: Maybe<UsersDocAccessFields_Sessions>;
  updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields_Addresses = {
  __typename?: 'UsersDocAccessFields_addresses';
  create?: Maybe<UsersDocAccessFields_Addresses_Create>;
  delete?: Maybe<UsersDocAccessFields_Addresses_Delete>;
  read?: Maybe<UsersDocAccessFields_Addresses_Read>;
  update?: Maybe<UsersDocAccessFields_Addresses_Update>;
};

export type UsersDocAccessFields_Addresses_Create = {
  __typename?: 'UsersDocAccessFields_addresses_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Addresses_Delete = {
  __typename?: 'UsersDocAccessFields_addresses_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Addresses_Read = {
  __typename?: 'UsersDocAccessFields_addresses_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Addresses_Update = {
  __typename?: 'UsersDocAccessFields_addresses_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Cart = {
  __typename?: 'UsersDocAccessFields_cart';
  create?: Maybe<UsersDocAccessFields_Cart_Create>;
  delete?: Maybe<UsersDocAccessFields_Cart_Delete>;
  read?: Maybe<UsersDocAccessFields_Cart_Read>;
  update?: Maybe<UsersDocAccessFields_Cart_Update>;
};

export type UsersDocAccessFields_Cart_Create = {
  __typename?: 'UsersDocAccessFields_cart_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Cart_Delete = {
  __typename?: 'UsersDocAccessFields_cart_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Cart_Read = {
  __typename?: 'UsersDocAccessFields_cart_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Cart_Update = {
  __typename?: 'UsersDocAccessFields_cart_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Name = {
  __typename?: 'UsersDocAccessFields_name';
  create?: Maybe<UsersDocAccessFields_Name_Create>;
  delete?: Maybe<UsersDocAccessFields_Name_Delete>;
  read?: Maybe<UsersDocAccessFields_Name_Read>;
  update?: Maybe<UsersDocAccessFields_Name_Update>;
};

export type UsersDocAccessFields_Name_Create = {
  __typename?: 'UsersDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Name_Delete = {
  __typename?: 'UsersDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Name_Read = {
  __typename?: 'UsersDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Name_Update = {
  __typename?: 'UsersDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Orders = {
  __typename?: 'UsersDocAccessFields_orders';
  create?: Maybe<UsersDocAccessFields_Orders_Create>;
  delete?: Maybe<UsersDocAccessFields_Orders_Delete>;
  read?: Maybe<UsersDocAccessFields_Orders_Read>;
  update?: Maybe<UsersDocAccessFields_Orders_Update>;
};

export type UsersDocAccessFields_Orders_Create = {
  __typename?: 'UsersDocAccessFields_orders_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Orders_Delete = {
  __typename?: 'UsersDocAccessFields_orders_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Orders_Read = {
  __typename?: 'UsersDocAccessFields_orders_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Orders_Update = {
  __typename?: 'UsersDocAccessFields_orders_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles = {
  __typename?: 'UsersDocAccessFields_roles';
  create?: Maybe<UsersDocAccessFields_Roles_Create>;
  delete?: Maybe<UsersDocAccessFields_Roles_Delete>;
  read?: Maybe<UsersDocAccessFields_Roles_Read>;
  update?: Maybe<UsersDocAccessFields_Roles_Update>;
};

export type UsersDocAccessFields_Roles_Create = {
  __typename?: 'UsersDocAccessFields_roles_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles_Delete = {
  __typename?: 'UsersDocAccessFields_roles_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles_Read = {
  __typename?: 'UsersDocAccessFields_roles_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles_Update = {
  __typename?: 'UsersDocAccessFields_roles_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions = {
  __typename?: 'UsersDocAccessFields_sessions';
  create?: Maybe<UsersDocAccessFields_Sessions_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_Delete>;
  fields?: Maybe<UsersDocAccessFields_Sessions_Fields>;
  read?: Maybe<UsersDocAccessFields_Sessions_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_Update>;
};

export type UsersDocAccessFields_Sessions_Create = {
  __typename?: 'UsersDocAccessFields_sessions_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Fields = {
  __typename?: 'UsersDocAccessFields_sessions_Fields';
  createdAt?: Maybe<UsersDocAccessFields_Sessions_CreatedAt>;
  expiresAt?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt>;
  id?: Maybe<UsersDocAccessFields_Sessions_Id>;
};

export type UsersDocAccessFields_Sessions_Read = {
  __typename?: 'UsersDocAccessFields_sessions_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Update = {
  __typename?: 'UsersDocAccessFields_sessions_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt';
  create?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Update>;
};

export type UsersDocAccessFields_Sessions_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt';
  create?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Delete>;
  read?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Update>;
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Create = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Read = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Update = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id = {
  __typename?: 'UsersDocAccessFields_sessions_id';
  create?: Maybe<UsersDocAccessFields_Sessions_Id_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_Id_Delete>;
  read?: Maybe<UsersDocAccessFields_Sessions_Id_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_Id_Update>;
};

export type UsersDocAccessFields_Sessions_Id_Create = {
  __typename?: 'UsersDocAccessFields_sessions_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id_Read = {
  __typename?: 'UsersDocAccessFields_sessions_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id_Update = {
  __typename?: 'UsersDocAccessFields_sessions_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  addresses?: Maybe<UsersFields_Addresses>;
  cart?: Maybe<UsersFields_Cart>;
  createdAt?: Maybe<UsersFields_CreatedAt>;
  email?: Maybe<UsersFields_Email>;
  name?: Maybe<UsersFields_Name>;
  orders?: Maybe<UsersFields_Orders>;
  roles?: Maybe<UsersFields_Roles>;
  sessions?: Maybe<UsersFields_Sessions>;
  updatedAt?: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields_Addresses = {
  __typename?: 'UsersFields_addresses';
  create?: Maybe<UsersFields_Addresses_Create>;
  delete?: Maybe<UsersFields_Addresses_Delete>;
  read?: Maybe<UsersFields_Addresses_Read>;
  update?: Maybe<UsersFields_Addresses_Update>;
};

export type UsersFields_Addresses_Create = {
  __typename?: 'UsersFields_addresses_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Addresses_Delete = {
  __typename?: 'UsersFields_addresses_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Addresses_Read = {
  __typename?: 'UsersFields_addresses_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Addresses_Update = {
  __typename?: 'UsersFields_addresses_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Cart = {
  __typename?: 'UsersFields_cart';
  create?: Maybe<UsersFields_Cart_Create>;
  delete?: Maybe<UsersFields_Cart_Delete>;
  read?: Maybe<UsersFields_Cart_Read>;
  update?: Maybe<UsersFields_Cart_Update>;
};

export type UsersFields_Cart_Create = {
  __typename?: 'UsersFields_cart_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Cart_Delete = {
  __typename?: 'UsersFields_cart_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Cart_Read = {
  __typename?: 'UsersFields_cart_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Cart_Update = {
  __typename?: 'UsersFields_cart_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt = {
  __typename?: 'UsersFields_createdAt';
  create?: Maybe<UsersFields_CreatedAt_Create>;
  delete?: Maybe<UsersFields_CreatedAt_Delete>;
  read?: Maybe<UsersFields_CreatedAt_Read>;
  update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Name = {
  __typename?: 'UsersFields_name';
  create?: Maybe<UsersFields_Name_Create>;
  delete?: Maybe<UsersFields_Name_Delete>;
  read?: Maybe<UsersFields_Name_Read>;
  update?: Maybe<UsersFields_Name_Update>;
};

export type UsersFields_Name_Create = {
  __typename?: 'UsersFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Name_Delete = {
  __typename?: 'UsersFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Name_Read = {
  __typename?: 'UsersFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Name_Update = {
  __typename?: 'UsersFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Orders = {
  __typename?: 'UsersFields_orders';
  create?: Maybe<UsersFields_Orders_Create>;
  delete?: Maybe<UsersFields_Orders_Delete>;
  read?: Maybe<UsersFields_Orders_Read>;
  update?: Maybe<UsersFields_Orders_Update>;
};

export type UsersFields_Orders_Create = {
  __typename?: 'UsersFields_orders_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Orders_Delete = {
  __typename?: 'UsersFields_orders_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Orders_Read = {
  __typename?: 'UsersFields_orders_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Orders_Update = {
  __typename?: 'UsersFields_orders_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles = {
  __typename?: 'UsersFields_roles';
  create?: Maybe<UsersFields_Roles_Create>;
  delete?: Maybe<UsersFields_Roles_Delete>;
  read?: Maybe<UsersFields_Roles_Read>;
  update?: Maybe<UsersFields_Roles_Update>;
};

export type UsersFields_Roles_Create = {
  __typename?: 'UsersFields_roles_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles_Delete = {
  __typename?: 'UsersFields_roles_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles_Read = {
  __typename?: 'UsersFields_roles_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles_Update = {
  __typename?: 'UsersFields_roles_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions = {
  __typename?: 'UsersFields_sessions';
  create?: Maybe<UsersFields_Sessions_Create>;
  delete?: Maybe<UsersFields_Sessions_Delete>;
  fields?: Maybe<UsersFields_Sessions_Fields>;
  read?: Maybe<UsersFields_Sessions_Read>;
  update?: Maybe<UsersFields_Sessions_Update>;
};

export type UsersFields_Sessions_Create = {
  __typename?: 'UsersFields_sessions_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Delete = {
  __typename?: 'UsersFields_sessions_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Fields = {
  __typename?: 'UsersFields_sessions_Fields';
  createdAt?: Maybe<UsersFields_Sessions_CreatedAt>;
  expiresAt?: Maybe<UsersFields_Sessions_ExpiresAt>;
  id?: Maybe<UsersFields_Sessions_Id>;
};

export type UsersFields_Sessions_Read = {
  __typename?: 'UsersFields_sessions_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Update = {
  __typename?: 'UsersFields_sessions_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt = {
  __typename?: 'UsersFields_sessions_createdAt';
  create?: Maybe<UsersFields_Sessions_CreatedAt_Create>;
  delete?: Maybe<UsersFields_Sessions_CreatedAt_Delete>;
  read?: Maybe<UsersFields_Sessions_CreatedAt_Read>;
  update?: Maybe<UsersFields_Sessions_CreatedAt_Update>;
};

export type UsersFields_Sessions_CreatedAt_Create = {
  __typename?: 'UsersFields_sessions_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt_Delete = {
  __typename?: 'UsersFields_sessions_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt_Read = {
  __typename?: 'UsersFields_sessions_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt_Update = {
  __typename?: 'UsersFields_sessions_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt = {
  __typename?: 'UsersFields_sessions_expiresAt';
  create?: Maybe<UsersFields_Sessions_ExpiresAt_Create>;
  delete?: Maybe<UsersFields_Sessions_ExpiresAt_Delete>;
  read?: Maybe<UsersFields_Sessions_ExpiresAt_Read>;
  update?: Maybe<UsersFields_Sessions_ExpiresAt_Update>;
};

export type UsersFields_Sessions_ExpiresAt_Create = {
  __typename?: 'UsersFields_sessions_expiresAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt_Delete = {
  __typename?: 'UsersFields_sessions_expiresAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt_Read = {
  __typename?: 'UsersFields_sessions_expiresAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt_Update = {
  __typename?: 'UsersFields_sessions_expiresAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id = {
  __typename?: 'UsersFields_sessions_id';
  create?: Maybe<UsersFields_Sessions_Id_Create>;
  delete?: Maybe<UsersFields_Sessions_Id_Delete>;
  read?: Maybe<UsersFields_Sessions_Id_Read>;
  update?: Maybe<UsersFields_Sessions_Id_Update>;
};

export type UsersFields_Sessions_Id_Create = {
  __typename?: 'UsersFields_sessions_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id_Delete = {
  __typename?: 'UsersFields_sessions_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id_Read = {
  __typename?: 'UsersFields_sessions_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id_Update = {
  __typename?: 'UsersFields_sessions_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create?: Maybe<UsersFields_UpdatedAt_Create>;
  delete?: Maybe<UsersFields_UpdatedAt_Delete>;
  read?: Maybe<UsersFields_UpdatedAt_Read>;
  update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Variant = {
  __typename?: 'Variant';
  _status?: Maybe<Variant__Status>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  inventory?: Maybe<Scalars['Float']['output']>;
  options?: Maybe<Array<VariantOption>>;
  priceInUSD?: Maybe<Scalars['Float']['output']>;
  priceInUSDEnabled?: Maybe<Scalars['Boolean']['output']>;
  product?: Maybe<Product>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type VariantOptionsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type VariantProductArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type VariantOption = {
  __typename?: 'VariantOption';
  _variantOptions_options_order?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  label: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value: Scalars['String']['output'];
  variantType: VariantType;
};


export type VariantOptionVariantTypeArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type VariantOption__VariantOptions_Options_Order_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VariantOption_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VariantOption_DeletedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VariantOption_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type VariantOption_Label_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VariantOption_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VariantOption_Value_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VariantOption_VariantType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VariantOption_Where = {
  AND?: InputMaybe<Array<InputMaybe<VariantOption_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VariantOption_Where_Or>>>;
  _variantOptions_options_order?: InputMaybe<VariantOption__VariantOptions_Options_Order_Operator>;
  createdAt?: InputMaybe<VariantOption_CreatedAt_Operator>;
  deletedAt?: InputMaybe<VariantOption_DeletedAt_Operator>;
  id?: InputMaybe<VariantOption_Id_Operator>;
  label?: InputMaybe<VariantOption_Label_Operator>;
  updatedAt?: InputMaybe<VariantOption_UpdatedAt_Operator>;
  value?: InputMaybe<VariantOption_Value_Operator>;
  variantType?: InputMaybe<VariantOption_VariantType_Operator>;
};

export type VariantOption_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VariantOption_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VariantOption_Where_Or>>>;
  _variantOptions_options_order?: InputMaybe<VariantOption__VariantOptions_Options_Order_Operator>;
  createdAt?: InputMaybe<VariantOption_CreatedAt_Operator>;
  deletedAt?: InputMaybe<VariantOption_DeletedAt_Operator>;
  id?: InputMaybe<VariantOption_Id_Operator>;
  label?: InputMaybe<VariantOption_Label_Operator>;
  updatedAt?: InputMaybe<VariantOption_UpdatedAt_Operator>;
  value?: InputMaybe<VariantOption_Value_Operator>;
  variantType?: InputMaybe<VariantOption_VariantType_Operator>;
};

export type VariantOption_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VariantOption_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VariantOption_Where_Or>>>;
  _variantOptions_options_order?: InputMaybe<VariantOption__VariantOptions_Options_Order_Operator>;
  createdAt?: InputMaybe<VariantOption_CreatedAt_Operator>;
  deletedAt?: InputMaybe<VariantOption_DeletedAt_Operator>;
  id?: InputMaybe<VariantOption_Id_Operator>;
  label?: InputMaybe<VariantOption_Label_Operator>;
  updatedAt?: InputMaybe<VariantOption_UpdatedAt_Operator>;
  value?: InputMaybe<VariantOption_Value_Operator>;
  variantType?: InputMaybe<VariantOption_VariantType_Operator>;
};

export type VariantOptions = {
  __typename?: 'VariantOptions';
  docs: Array<VariantOption>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type VariantOptionsCreateAccess = {
  __typename?: 'VariantOptionsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantOptionsCreateDocAccess = {
  __typename?: 'VariantOptionsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantOptionsDeleteAccess = {
  __typename?: 'VariantOptionsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantOptionsDeleteDocAccess = {
  __typename?: 'VariantOptionsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantOptionsDocAccessFields = {
  __typename?: 'VariantOptionsDocAccessFields';
  _variantOptions_options_order?: Maybe<VariantOptionsDocAccessFields__VariantOptions_Options_Order>;
  createdAt?: Maybe<VariantOptionsDocAccessFields_CreatedAt>;
  deletedAt?: Maybe<VariantOptionsDocAccessFields_DeletedAt>;
  label?: Maybe<VariantOptionsDocAccessFields_Label>;
  updatedAt?: Maybe<VariantOptionsDocAccessFields_UpdatedAt>;
  value?: Maybe<VariantOptionsDocAccessFields_Value>;
  variantType?: Maybe<VariantOptionsDocAccessFields_VariantType>;
};

export type VariantOptionsDocAccessFields__VariantOptions_Options_Order = {
  __typename?: 'VariantOptionsDocAccessFields__variantOptions_options_order';
  create?: Maybe<VariantOptionsDocAccessFields__VariantOptions_Options_Order_Create>;
  delete?: Maybe<VariantOptionsDocAccessFields__VariantOptions_Options_Order_Delete>;
  read?: Maybe<VariantOptionsDocAccessFields__VariantOptions_Options_Order_Read>;
  update?: Maybe<VariantOptionsDocAccessFields__VariantOptions_Options_Order_Update>;
};

export type VariantOptionsDocAccessFields__VariantOptions_Options_Order_Create = {
  __typename?: 'VariantOptionsDocAccessFields__variantOptions_options_order_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields__VariantOptions_Options_Order_Delete = {
  __typename?: 'VariantOptionsDocAccessFields__variantOptions_options_order_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields__VariantOptions_Options_Order_Read = {
  __typename?: 'VariantOptionsDocAccessFields__variantOptions_options_order_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields__VariantOptions_Options_Order_Update = {
  __typename?: 'VariantOptionsDocAccessFields__variantOptions_options_order_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_CreatedAt = {
  __typename?: 'VariantOptionsDocAccessFields_createdAt';
  create?: Maybe<VariantOptionsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<VariantOptionsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<VariantOptionsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<VariantOptionsDocAccessFields_CreatedAt_Update>;
};

export type VariantOptionsDocAccessFields_CreatedAt_Create = {
  __typename?: 'VariantOptionsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'VariantOptionsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_CreatedAt_Read = {
  __typename?: 'VariantOptionsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_CreatedAt_Update = {
  __typename?: 'VariantOptionsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_DeletedAt = {
  __typename?: 'VariantOptionsDocAccessFields_deletedAt';
  create?: Maybe<VariantOptionsDocAccessFields_DeletedAt_Create>;
  delete?: Maybe<VariantOptionsDocAccessFields_DeletedAt_Delete>;
  read?: Maybe<VariantOptionsDocAccessFields_DeletedAt_Read>;
  update?: Maybe<VariantOptionsDocAccessFields_DeletedAt_Update>;
};

export type VariantOptionsDocAccessFields_DeletedAt_Create = {
  __typename?: 'VariantOptionsDocAccessFields_deletedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_DeletedAt_Delete = {
  __typename?: 'VariantOptionsDocAccessFields_deletedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_DeletedAt_Read = {
  __typename?: 'VariantOptionsDocAccessFields_deletedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_DeletedAt_Update = {
  __typename?: 'VariantOptionsDocAccessFields_deletedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_Label = {
  __typename?: 'VariantOptionsDocAccessFields_label';
  create?: Maybe<VariantOptionsDocAccessFields_Label_Create>;
  delete?: Maybe<VariantOptionsDocAccessFields_Label_Delete>;
  read?: Maybe<VariantOptionsDocAccessFields_Label_Read>;
  update?: Maybe<VariantOptionsDocAccessFields_Label_Update>;
};

export type VariantOptionsDocAccessFields_Label_Create = {
  __typename?: 'VariantOptionsDocAccessFields_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_Label_Delete = {
  __typename?: 'VariantOptionsDocAccessFields_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_Label_Read = {
  __typename?: 'VariantOptionsDocAccessFields_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_Label_Update = {
  __typename?: 'VariantOptionsDocAccessFields_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_UpdatedAt = {
  __typename?: 'VariantOptionsDocAccessFields_updatedAt';
  create?: Maybe<VariantOptionsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<VariantOptionsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<VariantOptionsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<VariantOptionsDocAccessFields_UpdatedAt_Update>;
};

export type VariantOptionsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'VariantOptionsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'VariantOptionsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'VariantOptionsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'VariantOptionsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_Value = {
  __typename?: 'VariantOptionsDocAccessFields_value';
  create?: Maybe<VariantOptionsDocAccessFields_Value_Create>;
  delete?: Maybe<VariantOptionsDocAccessFields_Value_Delete>;
  read?: Maybe<VariantOptionsDocAccessFields_Value_Read>;
  update?: Maybe<VariantOptionsDocAccessFields_Value_Update>;
};

export type VariantOptionsDocAccessFields_Value_Create = {
  __typename?: 'VariantOptionsDocAccessFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_Value_Delete = {
  __typename?: 'VariantOptionsDocAccessFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_Value_Read = {
  __typename?: 'VariantOptionsDocAccessFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_Value_Update = {
  __typename?: 'VariantOptionsDocAccessFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_VariantType = {
  __typename?: 'VariantOptionsDocAccessFields_variantType';
  create?: Maybe<VariantOptionsDocAccessFields_VariantType_Create>;
  delete?: Maybe<VariantOptionsDocAccessFields_VariantType_Delete>;
  read?: Maybe<VariantOptionsDocAccessFields_VariantType_Read>;
  update?: Maybe<VariantOptionsDocAccessFields_VariantType_Update>;
};

export type VariantOptionsDocAccessFields_VariantType_Create = {
  __typename?: 'VariantOptionsDocAccessFields_variantType_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_VariantType_Delete = {
  __typename?: 'VariantOptionsDocAccessFields_variantType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_VariantType_Read = {
  __typename?: 'VariantOptionsDocAccessFields_variantType_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_VariantType_Update = {
  __typename?: 'VariantOptionsDocAccessFields_variantType_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields = {
  __typename?: 'VariantOptionsFields';
  _variantOptions_options_order?: Maybe<VariantOptionsFields__VariantOptions_Options_Order>;
  createdAt?: Maybe<VariantOptionsFields_CreatedAt>;
  deletedAt?: Maybe<VariantOptionsFields_DeletedAt>;
  label?: Maybe<VariantOptionsFields_Label>;
  updatedAt?: Maybe<VariantOptionsFields_UpdatedAt>;
  value?: Maybe<VariantOptionsFields_Value>;
  variantType?: Maybe<VariantOptionsFields_VariantType>;
};

export type VariantOptionsFields__VariantOptions_Options_Order = {
  __typename?: 'VariantOptionsFields__variantOptions_options_order';
  create?: Maybe<VariantOptionsFields__VariantOptions_Options_Order_Create>;
  delete?: Maybe<VariantOptionsFields__VariantOptions_Options_Order_Delete>;
  read?: Maybe<VariantOptionsFields__VariantOptions_Options_Order_Read>;
  update?: Maybe<VariantOptionsFields__VariantOptions_Options_Order_Update>;
};

export type VariantOptionsFields__VariantOptions_Options_Order_Create = {
  __typename?: 'VariantOptionsFields__variantOptions_options_order_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields__VariantOptions_Options_Order_Delete = {
  __typename?: 'VariantOptionsFields__variantOptions_options_order_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields__VariantOptions_Options_Order_Read = {
  __typename?: 'VariantOptionsFields__variantOptions_options_order_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields__VariantOptions_Options_Order_Update = {
  __typename?: 'VariantOptionsFields__variantOptions_options_order_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_CreatedAt = {
  __typename?: 'VariantOptionsFields_createdAt';
  create?: Maybe<VariantOptionsFields_CreatedAt_Create>;
  delete?: Maybe<VariantOptionsFields_CreatedAt_Delete>;
  read?: Maybe<VariantOptionsFields_CreatedAt_Read>;
  update?: Maybe<VariantOptionsFields_CreatedAt_Update>;
};

export type VariantOptionsFields_CreatedAt_Create = {
  __typename?: 'VariantOptionsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_CreatedAt_Delete = {
  __typename?: 'VariantOptionsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_CreatedAt_Read = {
  __typename?: 'VariantOptionsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_CreatedAt_Update = {
  __typename?: 'VariantOptionsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_DeletedAt = {
  __typename?: 'VariantOptionsFields_deletedAt';
  create?: Maybe<VariantOptionsFields_DeletedAt_Create>;
  delete?: Maybe<VariantOptionsFields_DeletedAt_Delete>;
  read?: Maybe<VariantOptionsFields_DeletedAt_Read>;
  update?: Maybe<VariantOptionsFields_DeletedAt_Update>;
};

export type VariantOptionsFields_DeletedAt_Create = {
  __typename?: 'VariantOptionsFields_deletedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_DeletedAt_Delete = {
  __typename?: 'VariantOptionsFields_deletedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_DeletedAt_Read = {
  __typename?: 'VariantOptionsFields_deletedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_DeletedAt_Update = {
  __typename?: 'VariantOptionsFields_deletedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_Label = {
  __typename?: 'VariantOptionsFields_label';
  create?: Maybe<VariantOptionsFields_Label_Create>;
  delete?: Maybe<VariantOptionsFields_Label_Delete>;
  read?: Maybe<VariantOptionsFields_Label_Read>;
  update?: Maybe<VariantOptionsFields_Label_Update>;
};

export type VariantOptionsFields_Label_Create = {
  __typename?: 'VariantOptionsFields_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_Label_Delete = {
  __typename?: 'VariantOptionsFields_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_Label_Read = {
  __typename?: 'VariantOptionsFields_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_Label_Update = {
  __typename?: 'VariantOptionsFields_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_UpdatedAt = {
  __typename?: 'VariantOptionsFields_updatedAt';
  create?: Maybe<VariantOptionsFields_UpdatedAt_Create>;
  delete?: Maybe<VariantOptionsFields_UpdatedAt_Delete>;
  read?: Maybe<VariantOptionsFields_UpdatedAt_Read>;
  update?: Maybe<VariantOptionsFields_UpdatedAt_Update>;
};

export type VariantOptionsFields_UpdatedAt_Create = {
  __typename?: 'VariantOptionsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_UpdatedAt_Delete = {
  __typename?: 'VariantOptionsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_UpdatedAt_Read = {
  __typename?: 'VariantOptionsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_UpdatedAt_Update = {
  __typename?: 'VariantOptionsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_Value = {
  __typename?: 'VariantOptionsFields_value';
  create?: Maybe<VariantOptionsFields_Value_Create>;
  delete?: Maybe<VariantOptionsFields_Value_Delete>;
  read?: Maybe<VariantOptionsFields_Value_Read>;
  update?: Maybe<VariantOptionsFields_Value_Update>;
};

export type VariantOptionsFields_Value_Create = {
  __typename?: 'VariantOptionsFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_Value_Delete = {
  __typename?: 'VariantOptionsFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_Value_Read = {
  __typename?: 'VariantOptionsFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_Value_Update = {
  __typename?: 'VariantOptionsFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_VariantType = {
  __typename?: 'VariantOptionsFields_variantType';
  create?: Maybe<VariantOptionsFields_VariantType_Create>;
  delete?: Maybe<VariantOptionsFields_VariantType_Delete>;
  read?: Maybe<VariantOptionsFields_VariantType_Read>;
  update?: Maybe<VariantOptionsFields_VariantType_Update>;
};

export type VariantOptionsFields_VariantType_Create = {
  __typename?: 'VariantOptionsFields_variantType_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_VariantType_Delete = {
  __typename?: 'VariantOptionsFields_variantType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_VariantType_Read = {
  __typename?: 'VariantOptionsFields_variantType_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_VariantType_Update = {
  __typename?: 'VariantOptionsFields_variantType_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsReadAccess = {
  __typename?: 'VariantOptionsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantOptionsReadDocAccess = {
  __typename?: 'VariantOptionsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantOptionsUpdateAccess = {
  __typename?: 'VariantOptionsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantOptionsUpdateDocAccess = {
  __typename?: 'VariantOptionsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantType = {
  __typename?: 'VariantType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  label: Scalars['String']['output'];
  name: Scalars['String']['output'];
  options?: Maybe<VariantType_Options>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type VariantTypeOptionsArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<VariantOption_Where>;
};

export type VariantType_Options = {
  __typename?: 'VariantType_Options';
  docs: Array<VariantOption>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type VariantType_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VariantType_DeletedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VariantType_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type VariantType_Label_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VariantType_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VariantType_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VariantType_Where = {
  AND?: InputMaybe<Array<InputMaybe<VariantType_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VariantType_Where_Or>>>;
  createdAt?: InputMaybe<VariantType_CreatedAt_Operator>;
  deletedAt?: InputMaybe<VariantType_DeletedAt_Operator>;
  id?: InputMaybe<VariantType_Id_Operator>;
  label?: InputMaybe<VariantType_Label_Operator>;
  name?: InputMaybe<VariantType_Name_Operator>;
  updatedAt?: InputMaybe<VariantType_UpdatedAt_Operator>;
};

export type VariantType_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VariantType_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VariantType_Where_Or>>>;
  createdAt?: InputMaybe<VariantType_CreatedAt_Operator>;
  deletedAt?: InputMaybe<VariantType_DeletedAt_Operator>;
  id?: InputMaybe<VariantType_Id_Operator>;
  label?: InputMaybe<VariantType_Label_Operator>;
  name?: InputMaybe<VariantType_Name_Operator>;
  updatedAt?: InputMaybe<VariantType_UpdatedAt_Operator>;
};

export type VariantType_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VariantType_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VariantType_Where_Or>>>;
  createdAt?: InputMaybe<VariantType_CreatedAt_Operator>;
  deletedAt?: InputMaybe<VariantType_DeletedAt_Operator>;
  id?: InputMaybe<VariantType_Id_Operator>;
  label?: InputMaybe<VariantType_Label_Operator>;
  name?: InputMaybe<VariantType_Name_Operator>;
  updatedAt?: InputMaybe<VariantType_UpdatedAt_Operator>;
};

export type VariantTypes = {
  __typename?: 'VariantTypes';
  docs: Array<VariantType>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type VariantTypesCreateAccess = {
  __typename?: 'VariantTypesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantTypesCreateDocAccess = {
  __typename?: 'VariantTypesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantTypesDeleteAccess = {
  __typename?: 'VariantTypesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantTypesDeleteDocAccess = {
  __typename?: 'VariantTypesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantTypesDocAccessFields = {
  __typename?: 'VariantTypesDocAccessFields';
  createdAt?: Maybe<VariantTypesDocAccessFields_CreatedAt>;
  deletedAt?: Maybe<VariantTypesDocAccessFields_DeletedAt>;
  label?: Maybe<VariantTypesDocAccessFields_Label>;
  name?: Maybe<VariantTypesDocAccessFields_Name>;
  options?: Maybe<VariantTypesDocAccessFields_Options>;
  updatedAt?: Maybe<VariantTypesDocAccessFields_UpdatedAt>;
};

export type VariantTypesDocAccessFields_CreatedAt = {
  __typename?: 'VariantTypesDocAccessFields_createdAt';
  create?: Maybe<VariantTypesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<VariantTypesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<VariantTypesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<VariantTypesDocAccessFields_CreatedAt_Update>;
};

export type VariantTypesDocAccessFields_CreatedAt_Create = {
  __typename?: 'VariantTypesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'VariantTypesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_CreatedAt_Read = {
  __typename?: 'VariantTypesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_CreatedAt_Update = {
  __typename?: 'VariantTypesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_DeletedAt = {
  __typename?: 'VariantTypesDocAccessFields_deletedAt';
  create?: Maybe<VariantTypesDocAccessFields_DeletedAt_Create>;
  delete?: Maybe<VariantTypesDocAccessFields_DeletedAt_Delete>;
  read?: Maybe<VariantTypesDocAccessFields_DeletedAt_Read>;
  update?: Maybe<VariantTypesDocAccessFields_DeletedAt_Update>;
};

export type VariantTypesDocAccessFields_DeletedAt_Create = {
  __typename?: 'VariantTypesDocAccessFields_deletedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_DeletedAt_Delete = {
  __typename?: 'VariantTypesDocAccessFields_deletedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_DeletedAt_Read = {
  __typename?: 'VariantTypesDocAccessFields_deletedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_DeletedAt_Update = {
  __typename?: 'VariantTypesDocAccessFields_deletedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Label = {
  __typename?: 'VariantTypesDocAccessFields_label';
  create?: Maybe<VariantTypesDocAccessFields_Label_Create>;
  delete?: Maybe<VariantTypesDocAccessFields_Label_Delete>;
  read?: Maybe<VariantTypesDocAccessFields_Label_Read>;
  update?: Maybe<VariantTypesDocAccessFields_Label_Update>;
};

export type VariantTypesDocAccessFields_Label_Create = {
  __typename?: 'VariantTypesDocAccessFields_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Label_Delete = {
  __typename?: 'VariantTypesDocAccessFields_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Label_Read = {
  __typename?: 'VariantTypesDocAccessFields_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Label_Update = {
  __typename?: 'VariantTypesDocAccessFields_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Name = {
  __typename?: 'VariantTypesDocAccessFields_name';
  create?: Maybe<VariantTypesDocAccessFields_Name_Create>;
  delete?: Maybe<VariantTypesDocAccessFields_Name_Delete>;
  read?: Maybe<VariantTypesDocAccessFields_Name_Read>;
  update?: Maybe<VariantTypesDocAccessFields_Name_Update>;
};

export type VariantTypesDocAccessFields_Name_Create = {
  __typename?: 'VariantTypesDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Name_Delete = {
  __typename?: 'VariantTypesDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Name_Read = {
  __typename?: 'VariantTypesDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Name_Update = {
  __typename?: 'VariantTypesDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Options = {
  __typename?: 'VariantTypesDocAccessFields_options';
  create?: Maybe<VariantTypesDocAccessFields_Options_Create>;
  delete?: Maybe<VariantTypesDocAccessFields_Options_Delete>;
  read?: Maybe<VariantTypesDocAccessFields_Options_Read>;
  update?: Maybe<VariantTypesDocAccessFields_Options_Update>;
};

export type VariantTypesDocAccessFields_Options_Create = {
  __typename?: 'VariantTypesDocAccessFields_options_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Options_Delete = {
  __typename?: 'VariantTypesDocAccessFields_options_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Options_Read = {
  __typename?: 'VariantTypesDocAccessFields_options_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Options_Update = {
  __typename?: 'VariantTypesDocAccessFields_options_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_UpdatedAt = {
  __typename?: 'VariantTypesDocAccessFields_updatedAt';
  create?: Maybe<VariantTypesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<VariantTypesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<VariantTypesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<VariantTypesDocAccessFields_UpdatedAt_Update>;
};

export type VariantTypesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'VariantTypesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'VariantTypesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'VariantTypesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'VariantTypesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields = {
  __typename?: 'VariantTypesFields';
  createdAt?: Maybe<VariantTypesFields_CreatedAt>;
  deletedAt?: Maybe<VariantTypesFields_DeletedAt>;
  label?: Maybe<VariantTypesFields_Label>;
  name?: Maybe<VariantTypesFields_Name>;
  options?: Maybe<VariantTypesFields_Options>;
  updatedAt?: Maybe<VariantTypesFields_UpdatedAt>;
};

export type VariantTypesFields_CreatedAt = {
  __typename?: 'VariantTypesFields_createdAt';
  create?: Maybe<VariantTypesFields_CreatedAt_Create>;
  delete?: Maybe<VariantTypesFields_CreatedAt_Delete>;
  read?: Maybe<VariantTypesFields_CreatedAt_Read>;
  update?: Maybe<VariantTypesFields_CreatedAt_Update>;
};

export type VariantTypesFields_CreatedAt_Create = {
  __typename?: 'VariantTypesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_CreatedAt_Delete = {
  __typename?: 'VariantTypesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_CreatedAt_Read = {
  __typename?: 'VariantTypesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_CreatedAt_Update = {
  __typename?: 'VariantTypesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_DeletedAt = {
  __typename?: 'VariantTypesFields_deletedAt';
  create?: Maybe<VariantTypesFields_DeletedAt_Create>;
  delete?: Maybe<VariantTypesFields_DeletedAt_Delete>;
  read?: Maybe<VariantTypesFields_DeletedAt_Read>;
  update?: Maybe<VariantTypesFields_DeletedAt_Update>;
};

export type VariantTypesFields_DeletedAt_Create = {
  __typename?: 'VariantTypesFields_deletedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_DeletedAt_Delete = {
  __typename?: 'VariantTypesFields_deletedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_DeletedAt_Read = {
  __typename?: 'VariantTypesFields_deletedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_DeletedAt_Update = {
  __typename?: 'VariantTypesFields_deletedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Label = {
  __typename?: 'VariantTypesFields_label';
  create?: Maybe<VariantTypesFields_Label_Create>;
  delete?: Maybe<VariantTypesFields_Label_Delete>;
  read?: Maybe<VariantTypesFields_Label_Read>;
  update?: Maybe<VariantTypesFields_Label_Update>;
};

export type VariantTypesFields_Label_Create = {
  __typename?: 'VariantTypesFields_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Label_Delete = {
  __typename?: 'VariantTypesFields_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Label_Read = {
  __typename?: 'VariantTypesFields_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Label_Update = {
  __typename?: 'VariantTypesFields_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Name = {
  __typename?: 'VariantTypesFields_name';
  create?: Maybe<VariantTypesFields_Name_Create>;
  delete?: Maybe<VariantTypesFields_Name_Delete>;
  read?: Maybe<VariantTypesFields_Name_Read>;
  update?: Maybe<VariantTypesFields_Name_Update>;
};

export type VariantTypesFields_Name_Create = {
  __typename?: 'VariantTypesFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Name_Delete = {
  __typename?: 'VariantTypesFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Name_Read = {
  __typename?: 'VariantTypesFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Name_Update = {
  __typename?: 'VariantTypesFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Options = {
  __typename?: 'VariantTypesFields_options';
  create?: Maybe<VariantTypesFields_Options_Create>;
  delete?: Maybe<VariantTypesFields_Options_Delete>;
  read?: Maybe<VariantTypesFields_Options_Read>;
  update?: Maybe<VariantTypesFields_Options_Update>;
};

export type VariantTypesFields_Options_Create = {
  __typename?: 'VariantTypesFields_options_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Options_Delete = {
  __typename?: 'VariantTypesFields_options_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Options_Read = {
  __typename?: 'VariantTypesFields_options_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Options_Update = {
  __typename?: 'VariantTypesFields_options_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_UpdatedAt = {
  __typename?: 'VariantTypesFields_updatedAt';
  create?: Maybe<VariantTypesFields_UpdatedAt_Create>;
  delete?: Maybe<VariantTypesFields_UpdatedAt_Delete>;
  read?: Maybe<VariantTypesFields_UpdatedAt_Read>;
  update?: Maybe<VariantTypesFields_UpdatedAt_Update>;
};

export type VariantTypesFields_UpdatedAt_Create = {
  __typename?: 'VariantTypesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_UpdatedAt_Delete = {
  __typename?: 'VariantTypesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_UpdatedAt_Read = {
  __typename?: 'VariantTypesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_UpdatedAt_Update = {
  __typename?: 'VariantTypesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesReadAccess = {
  __typename?: 'VariantTypesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantTypesReadDocAccess = {
  __typename?: 'VariantTypesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantTypesUpdateAccess = {
  __typename?: 'VariantTypesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantTypesUpdateDocAccess = {
  __typename?: 'VariantTypesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export enum VariantUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type VariantVersion = {
  __typename?: 'VariantVersion';
  autosave?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  latest?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Variant>;
  publishedLocale?: Maybe<VariantVersion_PublishedLocale>;
  snapshot?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<VariantVersion_Version>;
};


export type VariantVersionParentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type VariantVersion_Version = {
  __typename?: 'VariantVersion_Version';
  _status?: Maybe<VariantVersion_Version__Status>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  inventory?: Maybe<Scalars['Float']['output']>;
  options?: Maybe<Array<VariantOption>>;
  priceInUSD?: Maybe<Scalars['Float']['output']>;
  priceInUSDEnabled?: Maybe<Scalars['Boolean']['output']>;
  product?: Maybe<Product>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type VariantVersion_VersionOptionsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type VariantVersion_VersionProductArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export enum VariantVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum VariantVersion_PublishedLocale {
  De = 'de',
  En = 'en'
}

export enum Variant__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum Variant__Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export enum Variant__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type Variant__Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Variant__Status_Input>>>;
  equals?: InputMaybe<Variant__Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Variant__Status_Input>>>;
  not_equals?: InputMaybe<Variant__Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Variant__Status_Input>>>;
};

export type Variant_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Variant_DeletedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Variant_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Variant_Inventory_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Variant_Options_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Variant_PriceInUsdEnabled_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Variant_PriceInUsd_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Variant_Product_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Variant_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Variant_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Variant_Where = {
  AND?: InputMaybe<Array<InputMaybe<Variant_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Variant_Where_Or>>>;
  _status?: InputMaybe<Variant__Status_Operator>;
  createdAt?: InputMaybe<Variant_CreatedAt_Operator>;
  deletedAt?: InputMaybe<Variant_DeletedAt_Operator>;
  id?: InputMaybe<Variant_Id_Operator>;
  inventory?: InputMaybe<Variant_Inventory_Operator>;
  options?: InputMaybe<Variant_Options_Operator>;
  priceInUSD?: InputMaybe<Variant_PriceInUsd_Operator>;
  priceInUSDEnabled?: InputMaybe<Variant_PriceInUsdEnabled_Operator>;
  product?: InputMaybe<Variant_Product_Operator>;
  title?: InputMaybe<Variant_Title_Operator>;
  updatedAt?: InputMaybe<Variant_UpdatedAt_Operator>;
};

export type Variant_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Variant_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Variant_Where_Or>>>;
  _status?: InputMaybe<Variant__Status_Operator>;
  createdAt?: InputMaybe<Variant_CreatedAt_Operator>;
  deletedAt?: InputMaybe<Variant_DeletedAt_Operator>;
  id?: InputMaybe<Variant_Id_Operator>;
  inventory?: InputMaybe<Variant_Inventory_Operator>;
  options?: InputMaybe<Variant_Options_Operator>;
  priceInUSD?: InputMaybe<Variant_PriceInUsd_Operator>;
  priceInUSDEnabled?: InputMaybe<Variant_PriceInUsdEnabled_Operator>;
  product?: InputMaybe<Variant_Product_Operator>;
  title?: InputMaybe<Variant_Title_Operator>;
  updatedAt?: InputMaybe<Variant_UpdatedAt_Operator>;
};

export type Variant_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Variant_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Variant_Where_Or>>>;
  _status?: InputMaybe<Variant__Status_Operator>;
  createdAt?: InputMaybe<Variant_CreatedAt_Operator>;
  deletedAt?: InputMaybe<Variant_DeletedAt_Operator>;
  id?: InputMaybe<Variant_Id_Operator>;
  inventory?: InputMaybe<Variant_Inventory_Operator>;
  options?: InputMaybe<Variant_Options_Operator>;
  priceInUSD?: InputMaybe<Variant_PriceInUsd_Operator>;
  priceInUSDEnabled?: InputMaybe<Variant_PriceInUsdEnabled_Operator>;
  product?: InputMaybe<Variant_Product_Operator>;
  title?: InputMaybe<Variant_Title_Operator>;
  updatedAt?: InputMaybe<Variant_UpdatedAt_Operator>;
};

export type Variants = {
  __typename?: 'Variants';
  docs: Array<Variant>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type VariantsCreateAccess = {
  __typename?: 'VariantsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantsCreateDocAccess = {
  __typename?: 'VariantsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantsDeleteAccess = {
  __typename?: 'VariantsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantsDeleteDocAccess = {
  __typename?: 'VariantsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantsDocAccessFields = {
  __typename?: 'VariantsDocAccessFields';
  _status?: Maybe<VariantsDocAccessFields__Status>;
  createdAt?: Maybe<VariantsDocAccessFields_CreatedAt>;
  deletedAt?: Maybe<VariantsDocAccessFields_DeletedAt>;
  inventory?: Maybe<VariantsDocAccessFields_Inventory>;
  options?: Maybe<VariantsDocAccessFields_Options>;
  priceInUSD?: Maybe<VariantsDocAccessFields_PriceInUsd>;
  priceInUSDEnabled?: Maybe<VariantsDocAccessFields_PriceInUsdEnabled>;
  product?: Maybe<VariantsDocAccessFields_Product>;
  title?: Maybe<VariantsDocAccessFields_Title>;
  updatedAt?: Maybe<VariantsDocAccessFields_UpdatedAt>;
};

export type VariantsDocAccessFields__Status = {
  __typename?: 'VariantsDocAccessFields__status';
  create?: Maybe<VariantsDocAccessFields__Status_Create>;
  delete?: Maybe<VariantsDocAccessFields__Status_Delete>;
  read?: Maybe<VariantsDocAccessFields__Status_Read>;
  update?: Maybe<VariantsDocAccessFields__Status_Update>;
};

export type VariantsDocAccessFields__Status_Create = {
  __typename?: 'VariantsDocAccessFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields__Status_Delete = {
  __typename?: 'VariantsDocAccessFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields__Status_Read = {
  __typename?: 'VariantsDocAccessFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields__Status_Update = {
  __typename?: 'VariantsDocAccessFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_CreatedAt = {
  __typename?: 'VariantsDocAccessFields_createdAt';
  create?: Maybe<VariantsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<VariantsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<VariantsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<VariantsDocAccessFields_CreatedAt_Update>;
};

export type VariantsDocAccessFields_CreatedAt_Create = {
  __typename?: 'VariantsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'VariantsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_CreatedAt_Read = {
  __typename?: 'VariantsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_CreatedAt_Update = {
  __typename?: 'VariantsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_DeletedAt = {
  __typename?: 'VariantsDocAccessFields_deletedAt';
  create?: Maybe<VariantsDocAccessFields_DeletedAt_Create>;
  delete?: Maybe<VariantsDocAccessFields_DeletedAt_Delete>;
  read?: Maybe<VariantsDocAccessFields_DeletedAt_Read>;
  update?: Maybe<VariantsDocAccessFields_DeletedAt_Update>;
};

export type VariantsDocAccessFields_DeletedAt_Create = {
  __typename?: 'VariantsDocAccessFields_deletedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_DeletedAt_Delete = {
  __typename?: 'VariantsDocAccessFields_deletedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_DeletedAt_Read = {
  __typename?: 'VariantsDocAccessFields_deletedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_DeletedAt_Update = {
  __typename?: 'VariantsDocAccessFields_deletedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Inventory = {
  __typename?: 'VariantsDocAccessFields_inventory';
  create?: Maybe<VariantsDocAccessFields_Inventory_Create>;
  delete?: Maybe<VariantsDocAccessFields_Inventory_Delete>;
  read?: Maybe<VariantsDocAccessFields_Inventory_Read>;
  update?: Maybe<VariantsDocAccessFields_Inventory_Update>;
};

export type VariantsDocAccessFields_Inventory_Create = {
  __typename?: 'VariantsDocAccessFields_inventory_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Inventory_Delete = {
  __typename?: 'VariantsDocAccessFields_inventory_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Inventory_Read = {
  __typename?: 'VariantsDocAccessFields_inventory_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Inventory_Update = {
  __typename?: 'VariantsDocAccessFields_inventory_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Options = {
  __typename?: 'VariantsDocAccessFields_options';
  create?: Maybe<VariantsDocAccessFields_Options_Create>;
  delete?: Maybe<VariantsDocAccessFields_Options_Delete>;
  read?: Maybe<VariantsDocAccessFields_Options_Read>;
  update?: Maybe<VariantsDocAccessFields_Options_Update>;
};

export type VariantsDocAccessFields_Options_Create = {
  __typename?: 'VariantsDocAccessFields_options_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Options_Delete = {
  __typename?: 'VariantsDocAccessFields_options_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Options_Read = {
  __typename?: 'VariantsDocAccessFields_options_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Options_Update = {
  __typename?: 'VariantsDocAccessFields_options_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_PriceInUsd = {
  __typename?: 'VariantsDocAccessFields_priceInUSD';
  create?: Maybe<VariantsDocAccessFields_PriceInUsd_Create>;
  delete?: Maybe<VariantsDocAccessFields_PriceInUsd_Delete>;
  read?: Maybe<VariantsDocAccessFields_PriceInUsd_Read>;
  update?: Maybe<VariantsDocAccessFields_PriceInUsd_Update>;
};

export type VariantsDocAccessFields_PriceInUsdEnabled = {
  __typename?: 'VariantsDocAccessFields_priceInUSDEnabled';
  create?: Maybe<VariantsDocAccessFields_PriceInUsdEnabled_Create>;
  delete?: Maybe<VariantsDocAccessFields_PriceInUsdEnabled_Delete>;
  read?: Maybe<VariantsDocAccessFields_PriceInUsdEnabled_Read>;
  update?: Maybe<VariantsDocAccessFields_PriceInUsdEnabled_Update>;
};

export type VariantsDocAccessFields_PriceInUsdEnabled_Create = {
  __typename?: 'VariantsDocAccessFields_priceInUSDEnabled_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_PriceInUsdEnabled_Delete = {
  __typename?: 'VariantsDocAccessFields_priceInUSDEnabled_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_PriceInUsdEnabled_Read = {
  __typename?: 'VariantsDocAccessFields_priceInUSDEnabled_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_PriceInUsdEnabled_Update = {
  __typename?: 'VariantsDocAccessFields_priceInUSDEnabled_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_PriceInUsd_Create = {
  __typename?: 'VariantsDocAccessFields_priceInUSD_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_PriceInUsd_Delete = {
  __typename?: 'VariantsDocAccessFields_priceInUSD_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_PriceInUsd_Read = {
  __typename?: 'VariantsDocAccessFields_priceInUSD_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_PriceInUsd_Update = {
  __typename?: 'VariantsDocAccessFields_priceInUSD_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Product = {
  __typename?: 'VariantsDocAccessFields_product';
  create?: Maybe<VariantsDocAccessFields_Product_Create>;
  delete?: Maybe<VariantsDocAccessFields_Product_Delete>;
  read?: Maybe<VariantsDocAccessFields_Product_Read>;
  update?: Maybe<VariantsDocAccessFields_Product_Update>;
};

export type VariantsDocAccessFields_Product_Create = {
  __typename?: 'VariantsDocAccessFields_product_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Product_Delete = {
  __typename?: 'VariantsDocAccessFields_product_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Product_Read = {
  __typename?: 'VariantsDocAccessFields_product_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Product_Update = {
  __typename?: 'VariantsDocAccessFields_product_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Title = {
  __typename?: 'VariantsDocAccessFields_title';
  create?: Maybe<VariantsDocAccessFields_Title_Create>;
  delete?: Maybe<VariantsDocAccessFields_Title_Delete>;
  read?: Maybe<VariantsDocAccessFields_Title_Read>;
  update?: Maybe<VariantsDocAccessFields_Title_Update>;
};

export type VariantsDocAccessFields_Title_Create = {
  __typename?: 'VariantsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Title_Delete = {
  __typename?: 'VariantsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Title_Read = {
  __typename?: 'VariantsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Title_Update = {
  __typename?: 'VariantsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_UpdatedAt = {
  __typename?: 'VariantsDocAccessFields_updatedAt';
  create?: Maybe<VariantsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<VariantsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<VariantsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<VariantsDocAccessFields_UpdatedAt_Update>;
};

export type VariantsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'VariantsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'VariantsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'VariantsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'VariantsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields = {
  __typename?: 'VariantsFields';
  _status?: Maybe<VariantsFields__Status>;
  createdAt?: Maybe<VariantsFields_CreatedAt>;
  deletedAt?: Maybe<VariantsFields_DeletedAt>;
  inventory?: Maybe<VariantsFields_Inventory>;
  options?: Maybe<VariantsFields_Options>;
  priceInUSD?: Maybe<VariantsFields_PriceInUsd>;
  priceInUSDEnabled?: Maybe<VariantsFields_PriceInUsdEnabled>;
  product?: Maybe<VariantsFields_Product>;
  title?: Maybe<VariantsFields_Title>;
  updatedAt?: Maybe<VariantsFields_UpdatedAt>;
};

export type VariantsFields__Status = {
  __typename?: 'VariantsFields__status';
  create?: Maybe<VariantsFields__Status_Create>;
  delete?: Maybe<VariantsFields__Status_Delete>;
  read?: Maybe<VariantsFields__Status_Read>;
  update?: Maybe<VariantsFields__Status_Update>;
};

export type VariantsFields__Status_Create = {
  __typename?: 'VariantsFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields__Status_Delete = {
  __typename?: 'VariantsFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields__Status_Read = {
  __typename?: 'VariantsFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields__Status_Update = {
  __typename?: 'VariantsFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_CreatedAt = {
  __typename?: 'VariantsFields_createdAt';
  create?: Maybe<VariantsFields_CreatedAt_Create>;
  delete?: Maybe<VariantsFields_CreatedAt_Delete>;
  read?: Maybe<VariantsFields_CreatedAt_Read>;
  update?: Maybe<VariantsFields_CreatedAt_Update>;
};

export type VariantsFields_CreatedAt_Create = {
  __typename?: 'VariantsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_CreatedAt_Delete = {
  __typename?: 'VariantsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_CreatedAt_Read = {
  __typename?: 'VariantsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_CreatedAt_Update = {
  __typename?: 'VariantsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_DeletedAt = {
  __typename?: 'VariantsFields_deletedAt';
  create?: Maybe<VariantsFields_DeletedAt_Create>;
  delete?: Maybe<VariantsFields_DeletedAt_Delete>;
  read?: Maybe<VariantsFields_DeletedAt_Read>;
  update?: Maybe<VariantsFields_DeletedAt_Update>;
};

export type VariantsFields_DeletedAt_Create = {
  __typename?: 'VariantsFields_deletedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_DeletedAt_Delete = {
  __typename?: 'VariantsFields_deletedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_DeletedAt_Read = {
  __typename?: 'VariantsFields_deletedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_DeletedAt_Update = {
  __typename?: 'VariantsFields_deletedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Inventory = {
  __typename?: 'VariantsFields_inventory';
  create?: Maybe<VariantsFields_Inventory_Create>;
  delete?: Maybe<VariantsFields_Inventory_Delete>;
  read?: Maybe<VariantsFields_Inventory_Read>;
  update?: Maybe<VariantsFields_Inventory_Update>;
};

export type VariantsFields_Inventory_Create = {
  __typename?: 'VariantsFields_inventory_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Inventory_Delete = {
  __typename?: 'VariantsFields_inventory_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Inventory_Read = {
  __typename?: 'VariantsFields_inventory_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Inventory_Update = {
  __typename?: 'VariantsFields_inventory_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Options = {
  __typename?: 'VariantsFields_options';
  create?: Maybe<VariantsFields_Options_Create>;
  delete?: Maybe<VariantsFields_Options_Delete>;
  read?: Maybe<VariantsFields_Options_Read>;
  update?: Maybe<VariantsFields_Options_Update>;
};

export type VariantsFields_Options_Create = {
  __typename?: 'VariantsFields_options_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Options_Delete = {
  __typename?: 'VariantsFields_options_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Options_Read = {
  __typename?: 'VariantsFields_options_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Options_Update = {
  __typename?: 'VariantsFields_options_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_PriceInUsd = {
  __typename?: 'VariantsFields_priceInUSD';
  create?: Maybe<VariantsFields_PriceInUsd_Create>;
  delete?: Maybe<VariantsFields_PriceInUsd_Delete>;
  read?: Maybe<VariantsFields_PriceInUsd_Read>;
  update?: Maybe<VariantsFields_PriceInUsd_Update>;
};

export type VariantsFields_PriceInUsdEnabled = {
  __typename?: 'VariantsFields_priceInUSDEnabled';
  create?: Maybe<VariantsFields_PriceInUsdEnabled_Create>;
  delete?: Maybe<VariantsFields_PriceInUsdEnabled_Delete>;
  read?: Maybe<VariantsFields_PriceInUsdEnabled_Read>;
  update?: Maybe<VariantsFields_PriceInUsdEnabled_Update>;
};

export type VariantsFields_PriceInUsdEnabled_Create = {
  __typename?: 'VariantsFields_priceInUSDEnabled_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_PriceInUsdEnabled_Delete = {
  __typename?: 'VariantsFields_priceInUSDEnabled_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_PriceInUsdEnabled_Read = {
  __typename?: 'VariantsFields_priceInUSDEnabled_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_PriceInUsdEnabled_Update = {
  __typename?: 'VariantsFields_priceInUSDEnabled_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_PriceInUsd_Create = {
  __typename?: 'VariantsFields_priceInUSD_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_PriceInUsd_Delete = {
  __typename?: 'VariantsFields_priceInUSD_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_PriceInUsd_Read = {
  __typename?: 'VariantsFields_priceInUSD_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_PriceInUsd_Update = {
  __typename?: 'VariantsFields_priceInUSD_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Product = {
  __typename?: 'VariantsFields_product';
  create?: Maybe<VariantsFields_Product_Create>;
  delete?: Maybe<VariantsFields_Product_Delete>;
  read?: Maybe<VariantsFields_Product_Read>;
  update?: Maybe<VariantsFields_Product_Update>;
};

export type VariantsFields_Product_Create = {
  __typename?: 'VariantsFields_product_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Product_Delete = {
  __typename?: 'VariantsFields_product_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Product_Read = {
  __typename?: 'VariantsFields_product_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Product_Update = {
  __typename?: 'VariantsFields_product_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Title = {
  __typename?: 'VariantsFields_title';
  create?: Maybe<VariantsFields_Title_Create>;
  delete?: Maybe<VariantsFields_Title_Delete>;
  read?: Maybe<VariantsFields_Title_Read>;
  update?: Maybe<VariantsFields_Title_Update>;
};

export type VariantsFields_Title_Create = {
  __typename?: 'VariantsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Title_Delete = {
  __typename?: 'VariantsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Title_Read = {
  __typename?: 'VariantsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Title_Update = {
  __typename?: 'VariantsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_UpdatedAt = {
  __typename?: 'VariantsFields_updatedAt';
  create?: Maybe<VariantsFields_UpdatedAt_Create>;
  delete?: Maybe<VariantsFields_UpdatedAt_Delete>;
  read?: Maybe<VariantsFields_UpdatedAt_Read>;
  update?: Maybe<VariantsFields_UpdatedAt_Update>;
};

export type VariantsFields_UpdatedAt_Create = {
  __typename?: 'VariantsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_UpdatedAt_Delete = {
  __typename?: 'VariantsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_UpdatedAt_Read = {
  __typename?: 'VariantsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_UpdatedAt_Update = {
  __typename?: 'VariantsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type VariantsReadAccess = {
  __typename?: 'VariantsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantsReadDocAccess = {
  __typename?: 'VariantsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantsReadVersionsAccess = {
  __typename?: 'VariantsReadVersionsAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantsReadVersionsDocAccess = {
  __typename?: 'VariantsReadVersionsDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantsUpdateAccess = {
  __typename?: 'VariantsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantsUpdateDocAccess = {
  __typename?: 'VariantsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AddressesAccess = {
  __typename?: 'addressesAccess';
  create?: Maybe<AddressesCreateAccess>;
  delete?: Maybe<AddressesDeleteAccess>;
  fields?: Maybe<AddressesFields>;
  read?: Maybe<AddressesReadAccess>;
  update?: Maybe<AddressesUpdateAccess>;
};

export type AddressesDocAccess = {
  __typename?: 'addressesDocAccess';
  create?: Maybe<AddressesCreateDocAccess>;
  delete?: Maybe<AddressesDeleteDocAccess>;
  fields?: Maybe<AddressesDocAccessFields>;
  read?: Maybe<AddressesReadDocAccess>;
  update?: Maybe<AddressesUpdateDocAccess>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs: Array<Media>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type CartsAccess = {
  __typename?: 'cartsAccess';
  create?: Maybe<CartsCreateAccess>;
  delete?: Maybe<CartsDeleteAccess>;
  fields?: Maybe<CartsFields>;
  read?: Maybe<CartsReadAccess>;
  update?: Maybe<CartsUpdateAccess>;
};

export type CartsDocAccess = {
  __typename?: 'cartsDocAccess';
  create?: Maybe<CartsCreateDocAccess>;
  delete?: Maybe<CartsDeleteDocAccess>;
  fields?: Maybe<CartsDocAccessFields>;
  read?: Maybe<CartsReadDocAccess>;
  update?: Maybe<CartsUpdateDocAccess>;
};

export type CategoriesAccess = {
  __typename?: 'categoriesAccess';
  create?: Maybe<CategoriesCreateAccess>;
  delete?: Maybe<CategoriesDeleteAccess>;
  fields?: Maybe<CategoriesFields>;
  read?: Maybe<CategoriesReadAccess>;
  update?: Maybe<CategoriesUpdateAccess>;
};

export type CategoriesDocAccess = {
  __typename?: 'categoriesDocAccess';
  create?: Maybe<CategoriesCreateDocAccess>;
  delete?: Maybe<CategoriesDeleteDocAccess>;
  fields?: Maybe<CategoriesDocAccessFields>;
  read?: Maybe<CategoriesReadDocAccess>;
  update?: Maybe<CategoriesUpdateDocAccess>;
};

export type CountAddresses = {
  __typename?: 'countAddresses';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountCarts = {
  __typename?: 'countCarts';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountCategories = {
  __typename?: 'countCategories';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountFormSubmissions = {
  __typename?: 'countFormSubmissions';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountForms = {
  __typename?: 'countForms';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountOrders = {
  __typename?: 'countOrders';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPages = {
  __typename?: 'countPages';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadLockedDocuments = {
  __typename?: 'countPayloadLockedDocuments';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadPreferences = {
  __typename?: 'countPayloadPreferences';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountProducts = {
  __typename?: 'countProducts';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountSvgMedias = {
  __typename?: 'countSvgMedias';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountTransactions = {
  __typename?: 'countTransactions';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountUsers = {
  __typename?: 'countUsers';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountVariantOptions = {
  __typename?: 'countVariantOptions';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountVariantTypes = {
  __typename?: 'countVariantTypes';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountVariants = {
  __typename?: 'countVariants';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountallMedia = {
  __typename?: 'countallMedia';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type FooterAccess = {
  __typename?: 'footerAccess';
  fields?: Maybe<FooterFields>;
  read?: Maybe<FooterReadAccess>;
  update?: Maybe<FooterUpdateAccess>;
};

export type FooterDocAccess = {
  __typename?: 'footerDocAccess';
  fields?: Maybe<FooterDocAccessFields>;
  read?: Maybe<FooterReadDocAccess>;
  update?: Maybe<FooterUpdateDocAccess>;
};

export type Form_SubmissionsAccess = {
  __typename?: 'form_submissionsAccess';
  create?: Maybe<FormSubmissionsCreateAccess>;
  delete?: Maybe<FormSubmissionsDeleteAccess>;
  fields?: Maybe<FormSubmissionsFields>;
  read?: Maybe<FormSubmissionsReadAccess>;
  update?: Maybe<FormSubmissionsUpdateAccess>;
};

export type Form_SubmissionsDocAccess = {
  __typename?: 'form_submissionsDocAccess';
  create?: Maybe<FormSubmissionsCreateDocAccess>;
  delete?: Maybe<FormSubmissionsDeleteDocAccess>;
  fields?: Maybe<FormSubmissionsDocAccessFields>;
  read?: Maybe<FormSubmissionsReadDocAccess>;
  update?: Maybe<FormSubmissionsUpdateDocAccess>;
};

export type FormsAccess = {
  __typename?: 'formsAccess';
  create?: Maybe<FormsCreateAccess>;
  delete?: Maybe<FormsDeleteAccess>;
  fields?: Maybe<FormsFields>;
  read?: Maybe<FormsReadAccess>;
  update?: Maybe<FormsUpdateAccess>;
};

export type FormsDocAccess = {
  __typename?: 'formsDocAccess';
  create?: Maybe<FormsCreateDocAccess>;
  delete?: Maybe<FormsDeleteDocAccess>;
  fields?: Maybe<FormsDocAccessFields>;
  read?: Maybe<FormsReadDocAccess>;
  update?: Maybe<FormsUpdateDocAccess>;
};

export type HeaderAccess = {
  __typename?: 'headerAccess';
  fields?: Maybe<HeaderFields>;
  read?: Maybe<HeaderReadAccess>;
  update?: Maybe<HeaderUpdateAccess>;
};

export type HeaderDocAccess = {
  __typename?: 'headerDocAccess';
  fields?: Maybe<HeaderDocAccessFields>;
  read?: Maybe<HeaderReadDocAccess>;
  update?: Maybe<HeaderUpdateDocAccess>;
};

export type Information_BannerAccess = {
  __typename?: 'information_bannerAccess';
  fields?: Maybe<InformationBannerFields>;
  read?: Maybe<InformationBannerReadAccess>;
  update?: Maybe<InformationBannerUpdateAccess>;
};

export type Information_BannerDocAccess = {
  __typename?: 'information_bannerDocAccess';
  fields?: Maybe<InformationBannerDocAccessFields>;
  read?: Maybe<InformationBannerReadDocAccess>;
  update?: Maybe<InformationBannerUpdateDocAccess>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

export type MutationAddressInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  country: Address_Country_MutationInput;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  customer?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationAddressUpdateInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<AddressUpdate_Country_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  customer?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCartInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Cart_Currency_MutationInput>;
  customer?: InputMaybe<Scalars['Int']['input']>;
  items?: InputMaybe<Array<InputMaybe<MutationCart_ItemsInput>>>;
  purchasedAt?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Cart_Status_MutationInput>;
  subtotal?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCartUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<CartUpdate_Currency_MutationInput>;
  customer?: InputMaybe<Scalars['Int']['input']>;
  items?: InputMaybe<Array<InputMaybe<MutationCartUpdate_ItemsInput>>>;
  purchasedAt?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<CartUpdate_Status_MutationInput>;
  subtotal?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCartUpdate_ItemsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['Int']['input']>;
  quantity: Scalars['Float']['input'];
  variant?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationCart_ItemsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['Int']['input']>;
  quantity: Scalars['Float']['input'];
  variant?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationCategoryInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  slug: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCategoryUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFooterInput = {
  contactLink?: InputMaybe<MutationFooter_ContactLinkInput>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  navItems?: InputMaybe<Array<InputMaybe<MutationFooter_NavItemsInput>>>;
  phone?: InputMaybe<Scalars['String']['input']>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  socialLink?: InputMaybe<MutationFooter_SocialLinkInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFooter_ContactLinkInput = {
  link?: InputMaybe<MutationFooter_ContactLink_LinkInput>;
};

export type MutationFooter_ContactLink_LinkInput = {
  label: Scalars['String']['input'];
  newTab?: InputMaybe<Scalars['Boolean']['input']>;
  reference?: InputMaybe<Footer_ContactLink_Link_ReferenceRelationshipInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFooter_NavItemsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<MutationFooter_NavItems_LinkInput>;
};

export type MutationFooter_NavItems_LinkInput = {
  label: Scalars['String']['input'];
  newTab?: InputMaybe<Scalars['Boolean']['input']>;
  reference?: InputMaybe<Footer_NavItems_Link_ReferenceRelationshipInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFooter_SocialLinkInput = {
  link?: InputMaybe<MutationFooter_SocialLink_LinkInput>;
};

export type MutationFooter_SocialLink_LinkInput = {
  label: Scalars['String']['input'];
  newTab?: InputMaybe<Scalars['Boolean']['input']>;
  reference?: InputMaybe<Footer_SocialLink_Link_ReferenceRelationshipInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFormInput = {
  confirmationMessage?: InputMaybe<Scalars['JSON']['input']>;
  confirmationType?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  emails?: InputMaybe<Array<InputMaybe<MutationForm_EmailsInput>>>;
  fields?: InputMaybe<Scalars['JSON']['input']>;
  redirect: MutationForm_RedirectInput;
  submitButtonLabel?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFormSubmissionInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  form?: InputMaybe<Scalars['Int']['input']>;
  submissionData?: InputMaybe<Array<InputMaybe<MutationFormSubmission_SubmissionDataInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFormSubmissionUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  form?: InputMaybe<Scalars['Int']['input']>;
  submissionData?: InputMaybe<Array<InputMaybe<MutationFormSubmissionUpdate_SubmissionDataInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFormSubmissionUpdate_SubmissionDataInput = {
  field: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type MutationFormSubmission_SubmissionDataInput = {
  field: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type MutationFormUpdateInput = {
  confirmationMessage?: InputMaybe<Scalars['JSON']['input']>;
  confirmationType?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  emails?: InputMaybe<Array<InputMaybe<MutationFormUpdate_EmailsInput>>>;
  fields?: InputMaybe<Scalars['JSON']['input']>;
  redirect: MutationFormUpdate_RedirectInput;
  submitButtonLabel?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFormUpdate_EmailsInput = {
  bcc?: InputMaybe<Scalars['String']['input']>;
  cc?: InputMaybe<Scalars['String']['input']>;
  emailFrom?: InputMaybe<Scalars['String']['input']>;
  emailTo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['JSON']['input']>;
  replyTo?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFormUpdate_RedirectInput = {
  url: Scalars['String']['input'];
};

export type MutationForm_EmailsInput = {
  bcc?: InputMaybe<Scalars['String']['input']>;
  cc?: InputMaybe<Scalars['String']['input']>;
  emailFrom?: InputMaybe<Scalars['String']['input']>;
  emailTo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['JSON']['input']>;
  replyTo?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type MutationForm_RedirectInput = {
  url: Scalars['String']['input'];
};

export type MutationHeaderInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['Int']['input']>;
  navButtons?: InputMaybe<Array<InputMaybe<MutationHeader_NavButtonsInput>>>;
  navItems?: InputMaybe<Array<InputMaybe<MutationHeader_NavItemsInput>>>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHeader_NavButtonsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<MutationHeader_NavButtons_LinkInput>;
};

export type MutationHeader_NavButtons_LinkInput = {
  label: Scalars['String']['input'];
  newTab?: InputMaybe<Scalars['Boolean']['input']>;
  reference?: InputMaybe<Header_NavButtons_Link_ReferenceRelationshipInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHeader_NavItemsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<MutationHeader_NavItems_LinkInput>;
};

export type MutationHeader_NavItems_LinkInput = {
  label: Scalars['String']['input'];
  newTab?: InputMaybe<Scalars['Boolean']['input']>;
  reference?: InputMaybe<Header_NavItems_Link_ReferenceRelationshipInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MutationInformationBannerInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<MutationInformationBanner_ItemsInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationInformationBanner_ItemsInput = {
  icon?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type MutationMediaInput = {
  alt: Scalars['String']['input'];
  caption?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationOrderInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Order_Currency_MutationInput>;
  customer?: InputMaybe<Scalars['Int']['input']>;
  customerEmail?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<MutationOrder_ItemsInput>>>;
  shippingAddress?: InputMaybe<MutationOrder_ShippingAddressInput>;
  status?: InputMaybe<Order_Status_MutationInput>;
  transactions?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationOrderUpdateInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<OrderUpdate_Currency_MutationInput>;
  customer?: InputMaybe<Scalars['Int']['input']>;
  customerEmail?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<MutationOrderUpdate_ItemsInput>>>;
  shippingAddress?: InputMaybe<MutationOrderUpdate_ShippingAddressInput>;
  status?: InputMaybe<OrderUpdate_Status_MutationInput>;
  transactions?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationOrderUpdate_ItemsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['Int']['input']>;
  quantity: Scalars['Float']['input'];
  variant?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationOrderUpdate_ShippingAddressInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationOrder_ItemsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['Int']['input']>;
  quantity: Scalars['Float']['input'];
  variant?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationOrder_ShippingAddressInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPageInput = {
  _status?: InputMaybe<Page__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  layout?: InputMaybe<Scalars['JSON']['input']>;
  meta?: InputMaybe<MutationPage_MetaInput>;
  publishedOn?: InputMaybe<Scalars['String']['input']>;
  richText?: InputMaybe<Scalars['JSON']['input']>;
  slug: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPageUpdateInput = {
  _status?: InputMaybe<PageUpdate__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  layout?: InputMaybe<Scalars['JSON']['input']>;
  meta?: InputMaybe<MutationPageUpdate_MetaInput>;
  publishedOn?: InputMaybe<Scalars['String']['input']>;
  richText?: InputMaybe<Scalars['JSON']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPageUpdate_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPage_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPayloadLockedDocumentInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadLockedDocument_UserRelationshipInput>;
};

export type MutationPayloadLockedDocumentUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInput>;
};

export type MutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationProductInput = {
  _status?: InputMaybe<Product__Status_MutationInput>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  enableVariants?: InputMaybe<Scalars['Boolean']['input']>;
  gallery?: InputMaybe<Array<InputMaybe<MutationProduct_GalleryInput>>>;
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  inventory?: InputMaybe<Scalars['Float']['input']>;
  layout?: InputMaybe<Scalars['JSON']['input']>;
  meta?: InputMaybe<MutationProduct_MetaInput>;
  priceInUSD?: InputMaybe<Scalars['Float']['input']>;
  priceInUSDEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  relatedProducts?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  slug: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  variantTypes?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type MutationProductUpdateInput = {
  _status?: InputMaybe<ProductUpdate__Status_MutationInput>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  enableVariants?: InputMaybe<Scalars['Boolean']['input']>;
  gallery?: InputMaybe<Array<InputMaybe<MutationProductUpdate_GalleryInput>>>;
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  inventory?: InputMaybe<Scalars['Float']['input']>;
  layout?: InputMaybe<Scalars['JSON']['input']>;
  meta?: InputMaybe<MutationProductUpdate_MetaInput>;
  priceInUSD?: InputMaybe<Scalars['Float']['input']>;
  priceInUSDEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  relatedProducts?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  variantTypes?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type MutationProductUpdate_GalleryInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Int']['input']>;
  variantOption?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationProductUpdate_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProduct_GalleryInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Int']['input']>;
  variantOption?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationProduct_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSvgMediaInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  svgContent?: InputMaybe<Scalars['String']['input']>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationSvgMediaUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  svgContent?: InputMaybe<Scalars['String']['input']>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationTransactionInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  billingAddress?: InputMaybe<MutationTransaction_BillingAddressInput>;
  cart?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Transaction_Currency_MutationInput>;
  customer?: InputMaybe<Scalars['Int']['input']>;
  customerEmail?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<MutationTransaction_ItemsInput>>>;
  order?: InputMaybe<Scalars['Int']['input']>;
  paymentMethod?: InputMaybe<Transaction_PaymentMethod_MutationInput>;
  status: Transaction_Status_MutationInput;
  stripe?: InputMaybe<MutationTransaction_StripeInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTransactionUpdateInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  billingAddress?: InputMaybe<MutationTransactionUpdate_BillingAddressInput>;
  cart?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<TransactionUpdate_Currency_MutationInput>;
  customer?: InputMaybe<Scalars['Int']['input']>;
  customerEmail?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<MutationTransactionUpdate_ItemsInput>>>;
  order?: InputMaybe<Scalars['Int']['input']>;
  paymentMethod?: InputMaybe<TransactionUpdate_PaymentMethod_MutationInput>;
  status?: InputMaybe<TransactionUpdate_Status_MutationInput>;
  stripe?: InputMaybe<MutationTransactionUpdate_StripeInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTransactionUpdate_BillingAddressInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTransactionUpdate_ItemsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['Int']['input']>;
  quantity: Scalars['Float']['input'];
  variant?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationTransactionUpdate_StripeInput = {
  customerID?: InputMaybe<Scalars['String']['input']>;
  paymentIntentID?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTransaction_BillingAddressInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTransaction_ItemsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['Int']['input']>;
  quantity: Scalars['Float']['input'];
  variant?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationTransaction_StripeInput = {
  customerID?: InputMaybe<Scalars['String']['input']>;
  paymentIntentID?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<InputMaybe<User_Roles_MutationInput>>>;
  salt?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<Array<InputMaybe<MutationUser_SessionsInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<InputMaybe<UserUpdate_Roles_MutationInput>>>;
  salt?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<Array<InputMaybe<MutationUserUpdate_SessionsInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdate_SessionsInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  expiresAt: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type MutationUser_SessionsInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  expiresAt: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type MutationVariantInput = {
  _status?: InputMaybe<Variant__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['String']['input']>;
  inventory?: InputMaybe<Scalars['Float']['input']>;
  options?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  priceInUSD?: InputMaybe<Scalars['Float']['input']>;
  priceInUSDEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  product?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationVariantOptionInput = {
  _variantOptions_options_order?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['String']['input'];
  variantType?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationVariantOptionUpdateInput = {
  _variantOptions_options_order?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  variantType?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationVariantTypeInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationVariantTypeUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationVariantUpdateInput = {
  _status?: InputMaybe<VariantUpdate__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['String']['input']>;
  inventory?: InputMaybe<Scalars['Float']['input']>;
  options?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  priceInUSD?: InputMaybe<Scalars['Float']['input']>;
  priceInUSDEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  product?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type OrdersAccess = {
  __typename?: 'ordersAccess';
  create?: Maybe<OrdersCreateAccess>;
  delete?: Maybe<OrdersDeleteAccess>;
  fields?: Maybe<OrdersFields>;
  read?: Maybe<OrdersReadAccess>;
  update?: Maybe<OrdersUpdateAccess>;
};

export type OrdersDocAccess = {
  __typename?: 'ordersDocAccess';
  create?: Maybe<OrdersCreateDocAccess>;
  delete?: Maybe<OrdersDeleteDocAccess>;
  fields?: Maybe<OrdersDocAccessFields>;
  read?: Maybe<OrdersReadDocAccess>;
  update?: Maybe<OrdersUpdateDocAccess>;
};

export type PagesAccess = {
  __typename?: 'pagesAccess';
  create?: Maybe<PagesCreateAccess>;
  delete?: Maybe<PagesDeleteAccess>;
  fields?: Maybe<PagesFields>;
  read?: Maybe<PagesReadAccess>;
  readVersions?: Maybe<PagesReadVersionsAccess>;
  update?: Maybe<PagesUpdateAccess>;
};

export type PagesDocAccess = {
  __typename?: 'pagesDocAccess';
  create?: Maybe<PagesCreateDocAccess>;
  delete?: Maybe<PagesDeleteDocAccess>;
  fields?: Maybe<PagesDocAccessFields>;
  read?: Maybe<PagesReadDocAccess>;
  readVersions?: Maybe<PagesReadVersionsDocAccess>;
  update?: Maybe<PagesUpdateDocAccess>;
};

export type Payload_Locked_DocumentsAccess = {
  __typename?: 'payload_locked_documentsAccess';
  create?: Maybe<PayloadLockedDocumentsCreateAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteAccess>;
  fields?: Maybe<PayloadLockedDocumentsFields>;
  read?: Maybe<PayloadLockedDocumentsReadAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateAccess>;
};

export type Payload_Locked_DocumentsDocAccess = {
  __typename?: 'payload_locked_documentsDocAccess';
  create?: Maybe<PayloadLockedDocumentsCreateDocAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteDocAccess>;
  fields?: Maybe<PayloadLockedDocumentsDocAccessFields>;
  read?: Maybe<PayloadLockedDocumentsReadDocAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateDocAccess>;
};

export type Payload_PreferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type ProductsAccess = {
  __typename?: 'productsAccess';
  create?: Maybe<ProductsCreateAccess>;
  delete?: Maybe<ProductsDeleteAccess>;
  fields?: Maybe<ProductsFields>;
  read?: Maybe<ProductsReadAccess>;
  readVersions?: Maybe<ProductsReadVersionsAccess>;
  update?: Maybe<ProductsUpdateAccess>;
};

export type ProductsDocAccess = {
  __typename?: 'productsDocAccess';
  create?: Maybe<ProductsCreateDocAccess>;
  delete?: Maybe<ProductsDeleteDocAccess>;
  fields?: Maybe<ProductsDocAccessFields>;
  read?: Maybe<ProductsReadDocAccess>;
  readVersions?: Maybe<ProductsReadVersionsDocAccess>;
  update?: Maybe<ProductsUpdateDocAccess>;
};

export type Svg_MediaAccess = {
  __typename?: 'svg_mediaAccess';
  create?: Maybe<SvgMediaCreateAccess>;
  delete?: Maybe<SvgMediaDeleteAccess>;
  fields?: Maybe<SvgMediaFields>;
  read?: Maybe<SvgMediaReadAccess>;
  update?: Maybe<SvgMediaUpdateAccess>;
};

export type Svg_MediaDocAccess = {
  __typename?: 'svg_mediaDocAccess';
  create?: Maybe<SvgMediaCreateDocAccess>;
  delete?: Maybe<SvgMediaDeleteDocAccess>;
  fields?: Maybe<SvgMediaDocAccessFields>;
  read?: Maybe<SvgMediaReadDocAccess>;
  update?: Maybe<SvgMediaUpdateDocAccess>;
};

export type TransactionsAccess = {
  __typename?: 'transactionsAccess';
  create?: Maybe<TransactionsCreateAccess>;
  delete?: Maybe<TransactionsDeleteAccess>;
  fields?: Maybe<TransactionsFields>;
  read?: Maybe<TransactionsReadAccess>;
  update?: Maybe<TransactionsUpdateAccess>;
};

export type TransactionsDocAccess = {
  __typename?: 'transactionsDocAccess';
  create?: Maybe<TransactionsCreateDocAccess>;
  delete?: Maybe<TransactionsDeleteDocAccess>;
  fields?: Maybe<TransactionsDocAccessFields>;
  read?: Maybe<TransactionsReadDocAccess>;
  update?: Maybe<TransactionsUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
};

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type VariantOptionsAccess = {
  __typename?: 'variantOptionsAccess';
  create?: Maybe<VariantOptionsCreateAccess>;
  delete?: Maybe<VariantOptionsDeleteAccess>;
  fields?: Maybe<VariantOptionsFields>;
  read?: Maybe<VariantOptionsReadAccess>;
  update?: Maybe<VariantOptionsUpdateAccess>;
};

export type VariantOptionsDocAccess = {
  __typename?: 'variantOptionsDocAccess';
  create?: Maybe<VariantOptionsCreateDocAccess>;
  delete?: Maybe<VariantOptionsDeleteDocAccess>;
  fields?: Maybe<VariantOptionsDocAccessFields>;
  read?: Maybe<VariantOptionsReadDocAccess>;
  update?: Maybe<VariantOptionsUpdateDocAccess>;
};

export type VariantTypesAccess = {
  __typename?: 'variantTypesAccess';
  create?: Maybe<VariantTypesCreateAccess>;
  delete?: Maybe<VariantTypesDeleteAccess>;
  fields?: Maybe<VariantTypesFields>;
  read?: Maybe<VariantTypesReadAccess>;
  update?: Maybe<VariantTypesUpdateAccess>;
};

export type VariantTypesDocAccess = {
  __typename?: 'variantTypesDocAccess';
  create?: Maybe<VariantTypesCreateDocAccess>;
  delete?: Maybe<VariantTypesDeleteDocAccess>;
  fields?: Maybe<VariantTypesDocAccessFields>;
  read?: Maybe<VariantTypesReadDocAccess>;
  update?: Maybe<VariantTypesUpdateDocAccess>;
};

export type VariantsAccess = {
  __typename?: 'variantsAccess';
  create?: Maybe<VariantsCreateAccess>;
  delete?: Maybe<VariantsDeleteAccess>;
  fields?: Maybe<VariantsFields>;
  read?: Maybe<VariantsReadAccess>;
  readVersions?: Maybe<VariantsReadVersionsAccess>;
  update?: Maybe<VariantsUpdateAccess>;
};

export type VariantsDocAccess = {
  __typename?: 'variantsDocAccess';
  create?: Maybe<VariantsCreateDocAccess>;
  delete?: Maybe<VariantsDeleteDocAccess>;
  fields?: Maybe<VariantsDocAccessFields>;
  read?: Maybe<VariantsReadDocAccess>;
  readVersions?: Maybe<VariantsReadVersionsDocAccess>;
  update?: Maybe<VariantsUpdateDocAccess>;
};

export type VersionsPage_Autosave_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsPage_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPage_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type VersionsPage_Latest_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsPage_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export enum VersionsPage_PublishedLocale_Input {
  De = 'de',
  En = 'en'
}

export type VersionsPage_PublishedLocale_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsPage_PublishedLocale_Input>>>;
  equals?: InputMaybe<VersionsPage_PublishedLocale_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<VersionsPage_PublishedLocale_Input>>>;
  not_equals?: InputMaybe<VersionsPage_PublishedLocale_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsPage_PublishedLocale_Input>>>;
};

export type VersionsPage_Snapshot_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsPage_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum VersionsPage_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export type VersionsPage_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsPage_Version___Status_Input>>>;
  equals?: InputMaybe<VersionsPage_Version___Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<VersionsPage_Version___Status_Input>>>;
  not_equals?: InputMaybe<VersionsPage_Version___Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsPage_Version___Status_Input>>>;
};

export type VersionsPage_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPage_Version__GenerateSlug_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsPage_Version__Meta__Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type VersionsPage_Version__Meta__Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsPage_Version__Meta__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Version__PublishedOn_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPage_Version__RichText_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type VersionsPage_Version__Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Version__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPage_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsPage_Where_Or>>>;
  autosave?: InputMaybe<VersionsPage_Autosave_Operator>;
  createdAt?: InputMaybe<VersionsPage_CreatedAt_Operator>;
  id?: InputMaybe<VersionsPage_Id_Operator>;
  latest?: InputMaybe<VersionsPage_Latest_Operator>;
  parent?: InputMaybe<VersionsPage_Parent_Operator>;
  publishedLocale?: InputMaybe<VersionsPage_PublishedLocale_Operator>;
  snapshot?: InputMaybe<VersionsPage_Snapshot_Operator>;
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>;
  version__generateSlug?: InputMaybe<VersionsPage_Version__GenerateSlug_Operator>;
  version__meta__description?: InputMaybe<VersionsPage_Version__Meta__Description_Operator>;
  version__meta__image?: InputMaybe<VersionsPage_Version__Meta__Image_Operator>;
  version__meta__title?: InputMaybe<VersionsPage_Version__Meta__Title_Operator>;
  version__publishedOn?: InputMaybe<VersionsPage_Version__PublishedOn_Operator>;
  version__richText?: InputMaybe<VersionsPage_Version__RichText_Operator>;
  version__slug?: InputMaybe<VersionsPage_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsPage_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPage_Version__UpdatedAt_Operator>;
};

export type VersionsPage_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsPage_Where_Or>>>;
  autosave?: InputMaybe<VersionsPage_Autosave_Operator>;
  createdAt?: InputMaybe<VersionsPage_CreatedAt_Operator>;
  id?: InputMaybe<VersionsPage_Id_Operator>;
  latest?: InputMaybe<VersionsPage_Latest_Operator>;
  parent?: InputMaybe<VersionsPage_Parent_Operator>;
  publishedLocale?: InputMaybe<VersionsPage_PublishedLocale_Operator>;
  snapshot?: InputMaybe<VersionsPage_Snapshot_Operator>;
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>;
  version__generateSlug?: InputMaybe<VersionsPage_Version__GenerateSlug_Operator>;
  version__meta__description?: InputMaybe<VersionsPage_Version__Meta__Description_Operator>;
  version__meta__image?: InputMaybe<VersionsPage_Version__Meta__Image_Operator>;
  version__meta__title?: InputMaybe<VersionsPage_Version__Meta__Title_Operator>;
  version__publishedOn?: InputMaybe<VersionsPage_Version__PublishedOn_Operator>;
  version__richText?: InputMaybe<VersionsPage_Version__RichText_Operator>;
  version__slug?: InputMaybe<VersionsPage_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsPage_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPage_Version__UpdatedAt_Operator>;
};

export type VersionsPage_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsPage_Where_Or>>>;
  autosave?: InputMaybe<VersionsPage_Autosave_Operator>;
  createdAt?: InputMaybe<VersionsPage_CreatedAt_Operator>;
  id?: InputMaybe<VersionsPage_Id_Operator>;
  latest?: InputMaybe<VersionsPage_Latest_Operator>;
  parent?: InputMaybe<VersionsPage_Parent_Operator>;
  publishedLocale?: InputMaybe<VersionsPage_PublishedLocale_Operator>;
  snapshot?: InputMaybe<VersionsPage_Snapshot_Operator>;
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>;
  version__generateSlug?: InputMaybe<VersionsPage_Version__GenerateSlug_Operator>;
  version__meta__description?: InputMaybe<VersionsPage_Version__Meta__Description_Operator>;
  version__meta__image?: InputMaybe<VersionsPage_Version__Meta__Image_Operator>;
  version__meta__title?: InputMaybe<VersionsPage_Version__Meta__Title_Operator>;
  version__publishedOn?: InputMaybe<VersionsPage_Version__PublishedOn_Operator>;
  version__richText?: InputMaybe<VersionsPage_Version__RichText_Operator>;
  version__slug?: InputMaybe<VersionsPage_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsPage_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPage_Version__UpdatedAt_Operator>;
};

export type VersionsPages = {
  __typename?: 'versionsPages';
  docs: Array<PageVersion>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type VersionsProduct_Autosave_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsProduct_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsProduct_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type VersionsProduct_Latest_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsProduct_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export enum VersionsProduct_PublishedLocale_Input {
  De = 'de',
  En = 'en'
}

export type VersionsProduct_PublishedLocale_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsProduct_PublishedLocale_Input>>>;
  equals?: InputMaybe<VersionsProduct_PublishedLocale_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<VersionsProduct_PublishedLocale_Input>>>;
  not_equals?: InputMaybe<VersionsProduct_PublishedLocale_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsProduct_PublishedLocale_Input>>>;
};

export type VersionsProduct_Snapshot_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsProduct_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum VersionsProduct_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export type VersionsProduct_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsProduct_Version___Status_Input>>>;
  equals?: InputMaybe<VersionsProduct_Version___Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<VersionsProduct_Version___Status_Input>>>;
  not_equals?: InputMaybe<VersionsProduct_Version___Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsProduct_Version___Status_Input>>>;
};

export type VersionsProduct_Version__Categories_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsProduct_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsProduct_Version__DeletedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsProduct_Version__Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type VersionsProduct_Version__EnableVariants_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsProduct_Version__Gallery__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsProduct_Version__Gallery__Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsProduct_Version__Gallery__VariantOption_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsProduct_Version__GenerateSlug_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsProduct_Version__Inventory_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type VersionsProduct_Version__Meta__Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type VersionsProduct_Version__Meta__Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsProduct_Version__Meta__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsProduct_Version__PriceInUsdEnabled_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsProduct_Version__PriceInUsd_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type VersionsProduct_Version__RelatedProducts_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsProduct_Version__Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsProduct_Version__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsProduct_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsProduct_Version__VariantTypes_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsProduct_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsProduct_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsProduct_Where_Or>>>;
  autosave?: InputMaybe<VersionsProduct_Autosave_Operator>;
  createdAt?: InputMaybe<VersionsProduct_CreatedAt_Operator>;
  id?: InputMaybe<VersionsProduct_Id_Operator>;
  latest?: InputMaybe<VersionsProduct_Latest_Operator>;
  parent?: InputMaybe<VersionsProduct_Parent_Operator>;
  publishedLocale?: InputMaybe<VersionsProduct_PublishedLocale_Operator>;
  snapshot?: InputMaybe<VersionsProduct_Snapshot_Operator>;
  updatedAt?: InputMaybe<VersionsProduct_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsProduct_Version___Status_Operator>;
  version__categories?: InputMaybe<VersionsProduct_Version__Categories_Operator>;
  version__createdAt?: InputMaybe<VersionsProduct_Version__CreatedAt_Operator>;
  version__deletedAt?: InputMaybe<VersionsProduct_Version__DeletedAt_Operator>;
  version__description?: InputMaybe<VersionsProduct_Version__Description_Operator>;
  version__enableVariants?: InputMaybe<VersionsProduct_Version__EnableVariants_Operator>;
  version__gallery__id?: InputMaybe<VersionsProduct_Version__Gallery__Id_Operator>;
  version__gallery__image?: InputMaybe<VersionsProduct_Version__Gallery__Image_Operator>;
  version__gallery__variantOption?: InputMaybe<VersionsProduct_Version__Gallery__VariantOption_Operator>;
  version__generateSlug?: InputMaybe<VersionsProduct_Version__GenerateSlug_Operator>;
  version__inventory?: InputMaybe<VersionsProduct_Version__Inventory_Operator>;
  version__meta__description?: InputMaybe<VersionsProduct_Version__Meta__Description_Operator>;
  version__meta__image?: InputMaybe<VersionsProduct_Version__Meta__Image_Operator>;
  version__meta__title?: InputMaybe<VersionsProduct_Version__Meta__Title_Operator>;
  version__priceInUSD?: InputMaybe<VersionsProduct_Version__PriceInUsd_Operator>;
  version__priceInUSDEnabled?: InputMaybe<VersionsProduct_Version__PriceInUsdEnabled_Operator>;
  version__relatedProducts?: InputMaybe<VersionsProduct_Version__RelatedProducts_Operator>;
  version__slug?: InputMaybe<VersionsProduct_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsProduct_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsProduct_Version__UpdatedAt_Operator>;
  version__variantTypes?: InputMaybe<VersionsProduct_Version__VariantTypes_Operator>;
};

export type VersionsProduct_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VersionsProduct_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsProduct_Where_Or>>>;
  autosave?: InputMaybe<VersionsProduct_Autosave_Operator>;
  createdAt?: InputMaybe<VersionsProduct_CreatedAt_Operator>;
  id?: InputMaybe<VersionsProduct_Id_Operator>;
  latest?: InputMaybe<VersionsProduct_Latest_Operator>;
  parent?: InputMaybe<VersionsProduct_Parent_Operator>;
  publishedLocale?: InputMaybe<VersionsProduct_PublishedLocale_Operator>;
  snapshot?: InputMaybe<VersionsProduct_Snapshot_Operator>;
  updatedAt?: InputMaybe<VersionsProduct_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsProduct_Version___Status_Operator>;
  version__categories?: InputMaybe<VersionsProduct_Version__Categories_Operator>;
  version__createdAt?: InputMaybe<VersionsProduct_Version__CreatedAt_Operator>;
  version__deletedAt?: InputMaybe<VersionsProduct_Version__DeletedAt_Operator>;
  version__description?: InputMaybe<VersionsProduct_Version__Description_Operator>;
  version__enableVariants?: InputMaybe<VersionsProduct_Version__EnableVariants_Operator>;
  version__gallery__id?: InputMaybe<VersionsProduct_Version__Gallery__Id_Operator>;
  version__gallery__image?: InputMaybe<VersionsProduct_Version__Gallery__Image_Operator>;
  version__gallery__variantOption?: InputMaybe<VersionsProduct_Version__Gallery__VariantOption_Operator>;
  version__generateSlug?: InputMaybe<VersionsProduct_Version__GenerateSlug_Operator>;
  version__inventory?: InputMaybe<VersionsProduct_Version__Inventory_Operator>;
  version__meta__description?: InputMaybe<VersionsProduct_Version__Meta__Description_Operator>;
  version__meta__image?: InputMaybe<VersionsProduct_Version__Meta__Image_Operator>;
  version__meta__title?: InputMaybe<VersionsProduct_Version__Meta__Title_Operator>;
  version__priceInUSD?: InputMaybe<VersionsProduct_Version__PriceInUsd_Operator>;
  version__priceInUSDEnabled?: InputMaybe<VersionsProduct_Version__PriceInUsdEnabled_Operator>;
  version__relatedProducts?: InputMaybe<VersionsProduct_Version__RelatedProducts_Operator>;
  version__slug?: InputMaybe<VersionsProduct_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsProduct_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsProduct_Version__UpdatedAt_Operator>;
  version__variantTypes?: InputMaybe<VersionsProduct_Version__VariantTypes_Operator>;
};

export type VersionsProduct_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VersionsProduct_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsProduct_Where_Or>>>;
  autosave?: InputMaybe<VersionsProduct_Autosave_Operator>;
  createdAt?: InputMaybe<VersionsProduct_CreatedAt_Operator>;
  id?: InputMaybe<VersionsProduct_Id_Operator>;
  latest?: InputMaybe<VersionsProduct_Latest_Operator>;
  parent?: InputMaybe<VersionsProduct_Parent_Operator>;
  publishedLocale?: InputMaybe<VersionsProduct_PublishedLocale_Operator>;
  snapshot?: InputMaybe<VersionsProduct_Snapshot_Operator>;
  updatedAt?: InputMaybe<VersionsProduct_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsProduct_Version___Status_Operator>;
  version__categories?: InputMaybe<VersionsProduct_Version__Categories_Operator>;
  version__createdAt?: InputMaybe<VersionsProduct_Version__CreatedAt_Operator>;
  version__deletedAt?: InputMaybe<VersionsProduct_Version__DeletedAt_Operator>;
  version__description?: InputMaybe<VersionsProduct_Version__Description_Operator>;
  version__enableVariants?: InputMaybe<VersionsProduct_Version__EnableVariants_Operator>;
  version__gallery__id?: InputMaybe<VersionsProduct_Version__Gallery__Id_Operator>;
  version__gallery__image?: InputMaybe<VersionsProduct_Version__Gallery__Image_Operator>;
  version__gallery__variantOption?: InputMaybe<VersionsProduct_Version__Gallery__VariantOption_Operator>;
  version__generateSlug?: InputMaybe<VersionsProduct_Version__GenerateSlug_Operator>;
  version__inventory?: InputMaybe<VersionsProduct_Version__Inventory_Operator>;
  version__meta__description?: InputMaybe<VersionsProduct_Version__Meta__Description_Operator>;
  version__meta__image?: InputMaybe<VersionsProduct_Version__Meta__Image_Operator>;
  version__meta__title?: InputMaybe<VersionsProduct_Version__Meta__Title_Operator>;
  version__priceInUSD?: InputMaybe<VersionsProduct_Version__PriceInUsd_Operator>;
  version__priceInUSDEnabled?: InputMaybe<VersionsProduct_Version__PriceInUsdEnabled_Operator>;
  version__relatedProducts?: InputMaybe<VersionsProduct_Version__RelatedProducts_Operator>;
  version__slug?: InputMaybe<VersionsProduct_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsProduct_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsProduct_Version__UpdatedAt_Operator>;
  version__variantTypes?: InputMaybe<VersionsProduct_Version__VariantTypes_Operator>;
};

export type VersionsProducts = {
  __typename?: 'versionsProducts';
  docs: Array<ProductVersion>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type VersionsVariant_Autosave_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsVariant_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsVariant_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type VersionsVariant_Latest_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsVariant_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export enum VersionsVariant_PublishedLocale_Input {
  De = 'de',
  En = 'en'
}

export type VersionsVariant_PublishedLocale_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsVariant_PublishedLocale_Input>>>;
  equals?: InputMaybe<VersionsVariant_PublishedLocale_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<VersionsVariant_PublishedLocale_Input>>>;
  not_equals?: InputMaybe<VersionsVariant_PublishedLocale_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsVariant_PublishedLocale_Input>>>;
};

export type VersionsVariant_Snapshot_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsVariant_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum VersionsVariant_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export type VersionsVariant_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsVariant_Version___Status_Input>>>;
  equals?: InputMaybe<VersionsVariant_Version___Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<VersionsVariant_Version___Status_Input>>>;
  not_equals?: InputMaybe<VersionsVariant_Version___Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsVariant_Version___Status_Input>>>;
};

export type VersionsVariant_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsVariant_Version__DeletedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsVariant_Version__Inventory_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type VersionsVariant_Version__Options_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsVariant_Version__PriceInUsdEnabled_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsVariant_Version__PriceInUsd_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type VersionsVariant_Version__Product_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsVariant_Version__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsVariant_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsVariant_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsVariant_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsVariant_Where_Or>>>;
  autosave?: InputMaybe<VersionsVariant_Autosave_Operator>;
  createdAt?: InputMaybe<VersionsVariant_CreatedAt_Operator>;
  id?: InputMaybe<VersionsVariant_Id_Operator>;
  latest?: InputMaybe<VersionsVariant_Latest_Operator>;
  parent?: InputMaybe<VersionsVariant_Parent_Operator>;
  publishedLocale?: InputMaybe<VersionsVariant_PublishedLocale_Operator>;
  snapshot?: InputMaybe<VersionsVariant_Snapshot_Operator>;
  updatedAt?: InputMaybe<VersionsVariant_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsVariant_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsVariant_Version__CreatedAt_Operator>;
  version__deletedAt?: InputMaybe<VersionsVariant_Version__DeletedAt_Operator>;
  version__inventory?: InputMaybe<VersionsVariant_Version__Inventory_Operator>;
  version__options?: InputMaybe<VersionsVariant_Version__Options_Operator>;
  version__priceInUSD?: InputMaybe<VersionsVariant_Version__PriceInUsd_Operator>;
  version__priceInUSDEnabled?: InputMaybe<VersionsVariant_Version__PriceInUsdEnabled_Operator>;
  version__product?: InputMaybe<VersionsVariant_Version__Product_Operator>;
  version__title?: InputMaybe<VersionsVariant_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsVariant_Version__UpdatedAt_Operator>;
};

export type VersionsVariant_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VersionsVariant_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsVariant_Where_Or>>>;
  autosave?: InputMaybe<VersionsVariant_Autosave_Operator>;
  createdAt?: InputMaybe<VersionsVariant_CreatedAt_Operator>;
  id?: InputMaybe<VersionsVariant_Id_Operator>;
  latest?: InputMaybe<VersionsVariant_Latest_Operator>;
  parent?: InputMaybe<VersionsVariant_Parent_Operator>;
  publishedLocale?: InputMaybe<VersionsVariant_PublishedLocale_Operator>;
  snapshot?: InputMaybe<VersionsVariant_Snapshot_Operator>;
  updatedAt?: InputMaybe<VersionsVariant_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsVariant_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsVariant_Version__CreatedAt_Operator>;
  version__deletedAt?: InputMaybe<VersionsVariant_Version__DeletedAt_Operator>;
  version__inventory?: InputMaybe<VersionsVariant_Version__Inventory_Operator>;
  version__options?: InputMaybe<VersionsVariant_Version__Options_Operator>;
  version__priceInUSD?: InputMaybe<VersionsVariant_Version__PriceInUsd_Operator>;
  version__priceInUSDEnabled?: InputMaybe<VersionsVariant_Version__PriceInUsdEnabled_Operator>;
  version__product?: InputMaybe<VersionsVariant_Version__Product_Operator>;
  version__title?: InputMaybe<VersionsVariant_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsVariant_Version__UpdatedAt_Operator>;
};

export type VersionsVariant_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VersionsVariant_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsVariant_Where_Or>>>;
  autosave?: InputMaybe<VersionsVariant_Autosave_Operator>;
  createdAt?: InputMaybe<VersionsVariant_CreatedAt_Operator>;
  id?: InputMaybe<VersionsVariant_Id_Operator>;
  latest?: InputMaybe<VersionsVariant_Latest_Operator>;
  parent?: InputMaybe<VersionsVariant_Parent_Operator>;
  publishedLocale?: InputMaybe<VersionsVariant_PublishedLocale_Operator>;
  snapshot?: InputMaybe<VersionsVariant_Snapshot_Operator>;
  updatedAt?: InputMaybe<VersionsVariant_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsVariant_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsVariant_Version__CreatedAt_Operator>;
  version__deletedAt?: InputMaybe<VersionsVariant_Version__DeletedAt_Operator>;
  version__inventory?: InputMaybe<VersionsVariant_Version__Inventory_Operator>;
  version__options?: InputMaybe<VersionsVariant_Version__Options_Operator>;
  version__priceInUSD?: InputMaybe<VersionsVariant_Version__PriceInUsd_Operator>;
  version__priceInUSDEnabled?: InputMaybe<VersionsVariant_Version__PriceInUsdEnabled_Operator>;
  version__product?: InputMaybe<VersionsVariant_Version__Product_Operator>;
  version__title?: InputMaybe<VersionsVariant_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsVariant_Version__UpdatedAt_Operator>;
};

export type VersionsVariants = {
  __typename?: 'versionsVariants';
  docs: Array<VariantVersion>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type FooterQueryVariables = Exact<{
  locale: LocaleInputType;
}>;


export type FooterQuery = { __typename?: 'Query', Footer?: { __typename?: 'Footer', slogan?: string | null, phone?: string | null, contactLink?: { __typename?: 'Footer_ContactLink', link?: { __typename?: 'Footer_ContactLink_Link', label?: string | null, type?: Footer_ContactLink_Link_Type | null, newTab?: boolean | null, url?: string | null, reference?: { __typename?: 'Footer_ContactLink_Link_Reference_Relationship', value?: { __typename?: 'Page', id: number, slug?: string | null } | null } | null } | null } | null, socialLink?: { __typename?: 'Footer_SocialLink', link?: { __typename?: 'Footer_SocialLink_Link', label?: string | null, type?: Footer_SocialLink_Link_Type | null, newTab?: boolean | null, url?: string | null, reference?: { __typename?: 'Footer_SocialLink_Link_Reference_Relationship', value?: { __typename?: 'Page', id: number, slug?: string | null } | null } | null } | null } | null, navItems?: Array<{ __typename?: 'Footer_NavItems', id?: string | null, link?: { __typename?: 'Footer_NavItems_Link', label?: string | null, type?: Footer_NavItems_Link_Type | null, newTab?: boolean | null, url?: string | null, reference?: { __typename?: 'Footer_NavItems_Link_Reference_Relationship', value?: { __typename?: 'Page', id: number, slug?: string | null } | null } | null } | null }> | null } | null };

export type HeaderQueryVariables = Exact<{
  locale: LocaleInputType;
}>;


export type HeaderQuery = { __typename?: 'Query', Header?: { __typename?: 'Header', slogan?: string | null, icon?: { __typename?: 'SvgMedia', id: number, svgContent?: string | null } | null, navItems?: Array<{ __typename?: 'Header_NavItems', id?: string | null, link?: { __typename?: 'Header_NavItems_Link', label?: string | null, type?: Header_NavItems_Link_Type | null, newTab?: boolean | null, url?: string | null, reference?: { __typename?: 'Header_NavItems_Link_Reference_Relationship', value?: { __typename?: 'Page', id: number, slug?: string | null } | null } | null } | null }> | null, navButtons?: Array<{ __typename?: 'Header_NavButtons', id?: string | null, link?: { __typename?: 'Header_NavButtons_Link', label?: string | null, type?: Header_NavButtons_Link_Type | null, newTab?: boolean | null, url?: string | null, reference?: { __typename?: 'Header_NavButtons_Link_Reference_Relationship', value?: { __typename?: 'Page', id: number, slug?: string | null } | null } | null } | null }> | null } | null };

export type InformationBannerQueryVariables = Exact<{
  locale: LocaleInputType;
}>;


export type InformationBannerQuery = { __typename?: 'Query', InformationBanner?: { __typename?: 'InformationBanner', items?: Array<{ __typename?: 'InformationBanner_Items', id?: string | null, text?: string | null, icon?: { __typename?: 'SvgMedia', id: number, svgContent?: string | null } | null }> | null } | null };
