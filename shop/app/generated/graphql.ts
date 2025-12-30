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
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AddressesCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AddressesDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AddressesDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AddressesDocAccessFields = {
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
  create?: Maybe<AddressesDocAccessFields_AddressLine1_Create>;
  delete?: Maybe<AddressesDocAccessFields_AddressLine1_Delete>;
  read?: Maybe<AddressesDocAccessFields_AddressLine1_Read>;
  update?: Maybe<AddressesDocAccessFields_AddressLine1_Update>;
};

export type AddressesDocAccessFields_AddressLine1_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_AddressLine1_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_AddressLine1_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_AddressLine1_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_AddressLine2 = {
  create?: Maybe<AddressesDocAccessFields_AddressLine2_Create>;
  delete?: Maybe<AddressesDocAccessFields_AddressLine2_Delete>;
  read?: Maybe<AddressesDocAccessFields_AddressLine2_Read>;
  update?: Maybe<AddressesDocAccessFields_AddressLine2_Update>;
};

export type AddressesDocAccessFields_AddressLine2_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_AddressLine2_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_AddressLine2_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_AddressLine2_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_City = {
  create?: Maybe<AddressesDocAccessFields_City_Create>;
  delete?: Maybe<AddressesDocAccessFields_City_Delete>;
  read?: Maybe<AddressesDocAccessFields_City_Read>;
  update?: Maybe<AddressesDocAccessFields_City_Update>;
};

export type AddressesDocAccessFields_City_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_City_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_City_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_City_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Company = {
  create?: Maybe<AddressesDocAccessFields_Company_Create>;
  delete?: Maybe<AddressesDocAccessFields_Company_Delete>;
  read?: Maybe<AddressesDocAccessFields_Company_Read>;
  update?: Maybe<AddressesDocAccessFields_Company_Update>;
};

export type AddressesDocAccessFields_Company_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Company_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Company_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Company_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Country = {
  create?: Maybe<AddressesDocAccessFields_Country_Create>;
  delete?: Maybe<AddressesDocAccessFields_Country_Delete>;
  read?: Maybe<AddressesDocAccessFields_Country_Read>;
  update?: Maybe<AddressesDocAccessFields_Country_Update>;
};

export type AddressesDocAccessFields_Country_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Country_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Country_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Country_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_CreatedAt = {
  create?: Maybe<AddressesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<AddressesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<AddressesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<AddressesDocAccessFields_CreatedAt_Update>;
};

export type AddressesDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Customer = {
  create?: Maybe<AddressesDocAccessFields_Customer_Create>;
  delete?: Maybe<AddressesDocAccessFields_Customer_Delete>;
  read?: Maybe<AddressesDocAccessFields_Customer_Read>;
  update?: Maybe<AddressesDocAccessFields_Customer_Update>;
};

export type AddressesDocAccessFields_Customer_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Customer_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Customer_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Customer_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_FirstName = {
  create?: Maybe<AddressesDocAccessFields_FirstName_Create>;
  delete?: Maybe<AddressesDocAccessFields_FirstName_Delete>;
  read?: Maybe<AddressesDocAccessFields_FirstName_Read>;
  update?: Maybe<AddressesDocAccessFields_FirstName_Update>;
};

export type AddressesDocAccessFields_FirstName_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_FirstName_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_FirstName_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_FirstName_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_LastName = {
  create?: Maybe<AddressesDocAccessFields_LastName_Create>;
  delete?: Maybe<AddressesDocAccessFields_LastName_Delete>;
  read?: Maybe<AddressesDocAccessFields_LastName_Read>;
  update?: Maybe<AddressesDocAccessFields_LastName_Update>;
};

export type AddressesDocAccessFields_LastName_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_LastName_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_LastName_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_LastName_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Phone = {
  create?: Maybe<AddressesDocAccessFields_Phone_Create>;
  delete?: Maybe<AddressesDocAccessFields_Phone_Delete>;
  read?: Maybe<AddressesDocAccessFields_Phone_Read>;
  update?: Maybe<AddressesDocAccessFields_Phone_Update>;
};

export type AddressesDocAccessFields_Phone_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Phone_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Phone_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Phone_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_PostalCode = {
  create?: Maybe<AddressesDocAccessFields_PostalCode_Create>;
  delete?: Maybe<AddressesDocAccessFields_PostalCode_Delete>;
  read?: Maybe<AddressesDocAccessFields_PostalCode_Read>;
  update?: Maybe<AddressesDocAccessFields_PostalCode_Update>;
};

export type AddressesDocAccessFields_PostalCode_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_PostalCode_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_PostalCode_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_PostalCode_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_State = {
  create?: Maybe<AddressesDocAccessFields_State_Create>;
  delete?: Maybe<AddressesDocAccessFields_State_Delete>;
  read?: Maybe<AddressesDocAccessFields_State_Read>;
  update?: Maybe<AddressesDocAccessFields_State_Update>;
};

export type AddressesDocAccessFields_State_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_State_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_State_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_State_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Title = {
  create?: Maybe<AddressesDocAccessFields_Title_Create>;
  delete?: Maybe<AddressesDocAccessFields_Title_Delete>;
  read?: Maybe<AddressesDocAccessFields_Title_Read>;
  update?: Maybe<AddressesDocAccessFields_Title_Update>;
};

export type AddressesDocAccessFields_Title_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Title_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Title_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_Title_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_UpdatedAt = {
  create?: Maybe<AddressesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<AddressesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<AddressesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<AddressesDocAccessFields_UpdatedAt_Update>;
};

export type AddressesDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields = {
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
  create?: Maybe<AddressesFields_AddressLine1_Create>;
  delete?: Maybe<AddressesFields_AddressLine1_Delete>;
  read?: Maybe<AddressesFields_AddressLine1_Read>;
  update?: Maybe<AddressesFields_AddressLine1_Update>;
};

export type AddressesFields_AddressLine1_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_AddressLine1_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_AddressLine1_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_AddressLine1_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_AddressLine2 = {
  create?: Maybe<AddressesFields_AddressLine2_Create>;
  delete?: Maybe<AddressesFields_AddressLine2_Delete>;
  read?: Maybe<AddressesFields_AddressLine2_Read>;
  update?: Maybe<AddressesFields_AddressLine2_Update>;
};

export type AddressesFields_AddressLine2_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_AddressLine2_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_AddressLine2_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_AddressLine2_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_City = {
  create?: Maybe<AddressesFields_City_Create>;
  delete?: Maybe<AddressesFields_City_Delete>;
  read?: Maybe<AddressesFields_City_Read>;
  update?: Maybe<AddressesFields_City_Update>;
};

export type AddressesFields_City_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_City_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_City_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_City_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Company = {
  create?: Maybe<AddressesFields_Company_Create>;
  delete?: Maybe<AddressesFields_Company_Delete>;
  read?: Maybe<AddressesFields_Company_Read>;
  update?: Maybe<AddressesFields_Company_Update>;
};

export type AddressesFields_Company_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Company_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Company_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Company_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Country = {
  create?: Maybe<AddressesFields_Country_Create>;
  delete?: Maybe<AddressesFields_Country_Delete>;
  read?: Maybe<AddressesFields_Country_Read>;
  update?: Maybe<AddressesFields_Country_Update>;
};

export type AddressesFields_Country_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Country_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Country_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Country_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_CreatedAt = {
  create?: Maybe<AddressesFields_CreatedAt_Create>;
  delete?: Maybe<AddressesFields_CreatedAt_Delete>;
  read?: Maybe<AddressesFields_CreatedAt_Read>;
  update?: Maybe<AddressesFields_CreatedAt_Update>;
};

export type AddressesFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Customer = {
  create?: Maybe<AddressesFields_Customer_Create>;
  delete?: Maybe<AddressesFields_Customer_Delete>;
  read?: Maybe<AddressesFields_Customer_Read>;
  update?: Maybe<AddressesFields_Customer_Update>;
};

export type AddressesFields_Customer_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Customer_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Customer_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Customer_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_FirstName = {
  create?: Maybe<AddressesFields_FirstName_Create>;
  delete?: Maybe<AddressesFields_FirstName_Delete>;
  read?: Maybe<AddressesFields_FirstName_Read>;
  update?: Maybe<AddressesFields_FirstName_Update>;
};

export type AddressesFields_FirstName_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_FirstName_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_FirstName_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_FirstName_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_LastName = {
  create?: Maybe<AddressesFields_LastName_Create>;
  delete?: Maybe<AddressesFields_LastName_Delete>;
  read?: Maybe<AddressesFields_LastName_Read>;
  update?: Maybe<AddressesFields_LastName_Update>;
};

export type AddressesFields_LastName_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_LastName_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_LastName_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_LastName_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Phone = {
  create?: Maybe<AddressesFields_Phone_Create>;
  delete?: Maybe<AddressesFields_Phone_Delete>;
  read?: Maybe<AddressesFields_Phone_Read>;
  update?: Maybe<AddressesFields_Phone_Update>;
};

export type AddressesFields_Phone_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Phone_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Phone_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Phone_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_PostalCode = {
  create?: Maybe<AddressesFields_PostalCode_Create>;
  delete?: Maybe<AddressesFields_PostalCode_Delete>;
  read?: Maybe<AddressesFields_PostalCode_Read>;
  update?: Maybe<AddressesFields_PostalCode_Update>;
};

export type AddressesFields_PostalCode_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_PostalCode_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_PostalCode_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_PostalCode_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_State = {
  create?: Maybe<AddressesFields_State_Create>;
  delete?: Maybe<AddressesFields_State_Delete>;
  read?: Maybe<AddressesFields_State_Read>;
  update?: Maybe<AddressesFields_State_Update>;
};

export type AddressesFields_State_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_State_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_State_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_State_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Title = {
  create?: Maybe<AddressesFields_Title_Create>;
  delete?: Maybe<AddressesFields_Title_Delete>;
  read?: Maybe<AddressesFields_Title_Read>;
  update?: Maybe<AddressesFields_Title_Update>;
};

export type AddressesFields_Title_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Title_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Title_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_Title_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_UpdatedAt = {
  create?: Maybe<AddressesFields_UpdatedAt_Create>;
  delete?: Maybe<AddressesFields_UpdatedAt_Delete>;
  read?: Maybe<AddressesFields_UpdatedAt_Read>;
  update?: Maybe<AddressesFields_UpdatedAt_Update>;
};

export type AddressesFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type AddressesReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AddressesReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AddressesUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AddressesUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArchiveBlock = {
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
  id?: Maybe<Scalars['String']['output']>;
  link?: Maybe<CallToActionBlock_Links_Link>;
};

export type CallToActionBlock_Links_Link = {
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
  relationTo?: Maybe<CarouselBlock_PopulatedDocs_RelationTo>;
  value?: Maybe<CarouselBlock_PopulatedDocs>;
};

export type CarouselBlock_SelectedDocs = Product;

export enum CarouselBlock_SelectedDocs_RelationTo {
  Products = 'products'
}

export type CarouselBlock_SelectedDocs_Relationship = {
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
  Eur = 'EUR'
}

export enum CartUpdate_Status_MutationInput {
  Abandoned = 'abandoned',
  Active = 'active',
  Purchased = 'purchased'
}

export type Cart_Items = {
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
  Eur = 'EUR'
}

export enum Cart_Currency_Input {
  Eur = 'EUR'
}

export enum Cart_Currency_MutationInput {
  Eur = 'EUR'
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
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartsCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartsDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartsDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartsDocAccessFields = {
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
  create?: Maybe<CartsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<CartsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<CartsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<CartsDocAccessFields_CreatedAt_Update>;
};

export type CartsDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Currency = {
  create?: Maybe<CartsDocAccessFields_Currency_Create>;
  delete?: Maybe<CartsDocAccessFields_Currency_Delete>;
  read?: Maybe<CartsDocAccessFields_Currency_Read>;
  update?: Maybe<CartsDocAccessFields_Currency_Update>;
};

export type CartsDocAccessFields_Currency_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Currency_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Currency_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Currency_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Customer = {
  create?: Maybe<CartsDocAccessFields_Customer_Create>;
  delete?: Maybe<CartsDocAccessFields_Customer_Delete>;
  read?: Maybe<CartsDocAccessFields_Customer_Read>;
  update?: Maybe<CartsDocAccessFields_Customer_Update>;
};

export type CartsDocAccessFields_Customer_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Customer_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Customer_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Customer_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items = {
  create?: Maybe<CartsDocAccessFields_Items_Create>;
  delete?: Maybe<CartsDocAccessFields_Items_Delete>;
  fields?: Maybe<CartsDocAccessFields_Items_Fields>;
  read?: Maybe<CartsDocAccessFields_Items_Read>;
  update?: Maybe<CartsDocAccessFields_Items_Update>;
};

export type CartsDocAccessFields_Items_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Fields = {
  id?: Maybe<CartsDocAccessFields_Items_Id>;
  product?: Maybe<CartsDocAccessFields_Items_Product>;
  quantity?: Maybe<CartsDocAccessFields_Items_Quantity>;
  variant?: Maybe<CartsDocAccessFields_Items_Variant>;
};

export type CartsDocAccessFields_Items_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Id = {
  create?: Maybe<CartsDocAccessFields_Items_Id_Create>;
  delete?: Maybe<CartsDocAccessFields_Items_Id_Delete>;
  read?: Maybe<CartsDocAccessFields_Items_Id_Read>;
  update?: Maybe<CartsDocAccessFields_Items_Id_Update>;
};

export type CartsDocAccessFields_Items_Id_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Id_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Id_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Id_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Product = {
  create?: Maybe<CartsDocAccessFields_Items_Product_Create>;
  delete?: Maybe<CartsDocAccessFields_Items_Product_Delete>;
  read?: Maybe<CartsDocAccessFields_Items_Product_Read>;
  update?: Maybe<CartsDocAccessFields_Items_Product_Update>;
};

export type CartsDocAccessFields_Items_Product_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Product_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Product_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Product_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Quantity = {
  create?: Maybe<CartsDocAccessFields_Items_Quantity_Create>;
  delete?: Maybe<CartsDocAccessFields_Items_Quantity_Delete>;
  read?: Maybe<CartsDocAccessFields_Items_Quantity_Read>;
  update?: Maybe<CartsDocAccessFields_Items_Quantity_Update>;
};

export type CartsDocAccessFields_Items_Quantity_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Quantity_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Quantity_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Quantity_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Variant = {
  create?: Maybe<CartsDocAccessFields_Items_Variant_Create>;
  delete?: Maybe<CartsDocAccessFields_Items_Variant_Delete>;
  read?: Maybe<CartsDocAccessFields_Items_Variant_Read>;
  update?: Maybe<CartsDocAccessFields_Items_Variant_Update>;
};

export type CartsDocAccessFields_Items_Variant_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Variant_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Variant_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Variant_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_PurchasedAt = {
  create?: Maybe<CartsDocAccessFields_PurchasedAt_Create>;
  delete?: Maybe<CartsDocAccessFields_PurchasedAt_Delete>;
  read?: Maybe<CartsDocAccessFields_PurchasedAt_Read>;
  update?: Maybe<CartsDocAccessFields_PurchasedAt_Update>;
};

export type CartsDocAccessFields_PurchasedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_PurchasedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_PurchasedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_PurchasedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Status = {
  create?: Maybe<CartsDocAccessFields_Status_Create>;
  delete?: Maybe<CartsDocAccessFields_Status_Delete>;
  read?: Maybe<CartsDocAccessFields_Status_Read>;
  update?: Maybe<CartsDocAccessFields_Status_Update>;
};

export type CartsDocAccessFields_Status_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Status_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Status_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Status_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Subtotal = {
  create?: Maybe<CartsDocAccessFields_Subtotal_Create>;
  delete?: Maybe<CartsDocAccessFields_Subtotal_Delete>;
  read?: Maybe<CartsDocAccessFields_Subtotal_Read>;
  update?: Maybe<CartsDocAccessFields_Subtotal_Update>;
};

export type CartsDocAccessFields_Subtotal_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Subtotal_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Subtotal_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Subtotal_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_UpdatedAt = {
  create?: Maybe<CartsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<CartsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<CartsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<CartsDocAccessFields_UpdatedAt_Update>;
};

export type CartsDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields = {
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
  create?: Maybe<CartsFields_CreatedAt_Create>;
  delete?: Maybe<CartsFields_CreatedAt_Delete>;
  read?: Maybe<CartsFields_CreatedAt_Read>;
  update?: Maybe<CartsFields_CreatedAt_Update>;
};

export type CartsFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Currency = {
  create?: Maybe<CartsFields_Currency_Create>;
  delete?: Maybe<CartsFields_Currency_Delete>;
  read?: Maybe<CartsFields_Currency_Read>;
  update?: Maybe<CartsFields_Currency_Update>;
};

export type CartsFields_Currency_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Currency_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Currency_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Currency_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Customer = {
  create?: Maybe<CartsFields_Customer_Create>;
  delete?: Maybe<CartsFields_Customer_Delete>;
  read?: Maybe<CartsFields_Customer_Read>;
  update?: Maybe<CartsFields_Customer_Update>;
};

export type CartsFields_Customer_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Customer_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Customer_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Customer_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items = {
  create?: Maybe<CartsFields_Items_Create>;
  delete?: Maybe<CartsFields_Items_Delete>;
  fields?: Maybe<CartsFields_Items_Fields>;
  read?: Maybe<CartsFields_Items_Read>;
  update?: Maybe<CartsFields_Items_Update>;
};

export type CartsFields_Items_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Fields = {
  id?: Maybe<CartsFields_Items_Id>;
  product?: Maybe<CartsFields_Items_Product>;
  quantity?: Maybe<CartsFields_Items_Quantity>;
  variant?: Maybe<CartsFields_Items_Variant>;
};

export type CartsFields_Items_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Id = {
  create?: Maybe<CartsFields_Items_Id_Create>;
  delete?: Maybe<CartsFields_Items_Id_Delete>;
  read?: Maybe<CartsFields_Items_Id_Read>;
  update?: Maybe<CartsFields_Items_Id_Update>;
};

export type CartsFields_Items_Id_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Id_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Id_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Id_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Product = {
  create?: Maybe<CartsFields_Items_Product_Create>;
  delete?: Maybe<CartsFields_Items_Product_Delete>;
  read?: Maybe<CartsFields_Items_Product_Read>;
  update?: Maybe<CartsFields_Items_Product_Update>;
};

export type CartsFields_Items_Product_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Product_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Product_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Product_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Quantity = {
  create?: Maybe<CartsFields_Items_Quantity_Create>;
  delete?: Maybe<CartsFields_Items_Quantity_Delete>;
  read?: Maybe<CartsFields_Items_Quantity_Read>;
  update?: Maybe<CartsFields_Items_Quantity_Update>;
};

export type CartsFields_Items_Quantity_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Quantity_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Quantity_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Quantity_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Variant = {
  create?: Maybe<CartsFields_Items_Variant_Create>;
  delete?: Maybe<CartsFields_Items_Variant_Delete>;
  read?: Maybe<CartsFields_Items_Variant_Read>;
  update?: Maybe<CartsFields_Items_Variant_Update>;
};

export type CartsFields_Items_Variant_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Variant_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Variant_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Variant_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_PurchasedAt = {
  create?: Maybe<CartsFields_PurchasedAt_Create>;
  delete?: Maybe<CartsFields_PurchasedAt_Delete>;
  read?: Maybe<CartsFields_PurchasedAt_Read>;
  update?: Maybe<CartsFields_PurchasedAt_Update>;
};

export type CartsFields_PurchasedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_PurchasedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_PurchasedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_PurchasedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Status = {
  create?: Maybe<CartsFields_Status_Create>;
  delete?: Maybe<CartsFields_Status_Delete>;
  read?: Maybe<CartsFields_Status_Read>;
  update?: Maybe<CartsFields_Status_Update>;
};

export type CartsFields_Status_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Status_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Status_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Status_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Subtotal = {
  create?: Maybe<CartsFields_Subtotal_Create>;
  delete?: Maybe<CartsFields_Subtotal_Delete>;
  read?: Maybe<CartsFields_Subtotal_Read>;
  update?: Maybe<CartsFields_Subtotal_Update>;
};

export type CartsFields_Subtotal_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Subtotal_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Subtotal_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Subtotal_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_UpdatedAt = {
  create?: Maybe<CartsFields_UpdatedAt_Create>;
  delete?: Maybe<CartsFields_UpdatedAt_Delete>;
  read?: Maybe<CartsFields_UpdatedAt_Read>;
  update?: Maybe<CartsFields_UpdatedAt_Update>;
};

export type CartsFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CartsReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartsReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartsUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartsUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Categories = {
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
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesDocAccessFields = {
  createdAt?: Maybe<CategoriesDocAccessFields_CreatedAt>;
  description?: Maybe<CategoriesDocAccessFields_Description>;
  generateSlug?: Maybe<CategoriesDocAccessFields_GenerateSlug>;
  image?: Maybe<CategoriesDocAccessFields_Image>;
  meta?: Maybe<CategoriesDocAccessFields_Meta>;
  slug?: Maybe<CategoriesDocAccessFields_Slug>;
  title?: Maybe<CategoriesDocAccessFields_Title>;
  updatedAt?: Maybe<CategoriesDocAccessFields_UpdatedAt>;
};

export type CategoriesDocAccessFields_CreatedAt = {
  create?: Maybe<CategoriesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<CategoriesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<CategoriesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<CategoriesDocAccessFields_CreatedAt_Update>;
};

export type CategoriesDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Description = {
  create?: Maybe<CategoriesDocAccessFields_Description_Create>;
  delete?: Maybe<CategoriesDocAccessFields_Description_Delete>;
  read?: Maybe<CategoriesDocAccessFields_Description_Read>;
  update?: Maybe<CategoriesDocAccessFields_Description_Update>;
};

export type CategoriesDocAccessFields_Description_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Description_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Description_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Description_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_GenerateSlug = {
  create?: Maybe<CategoriesDocAccessFields_GenerateSlug_Create>;
  delete?: Maybe<CategoriesDocAccessFields_GenerateSlug_Delete>;
  read?: Maybe<CategoriesDocAccessFields_GenerateSlug_Read>;
  update?: Maybe<CategoriesDocAccessFields_GenerateSlug_Update>;
};

export type CategoriesDocAccessFields_GenerateSlug_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_GenerateSlug_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_GenerateSlug_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_GenerateSlug_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Image = {
  create?: Maybe<CategoriesDocAccessFields_Image_Create>;
  delete?: Maybe<CategoriesDocAccessFields_Image_Delete>;
  read?: Maybe<CategoriesDocAccessFields_Image_Read>;
  update?: Maybe<CategoriesDocAccessFields_Image_Update>;
};

export type CategoriesDocAccessFields_Image_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Image_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Image_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Image_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Meta = {
  description?: Maybe<CategoriesDocAccessFields_Meta_Description>;
  image?: Maybe<CategoriesDocAccessFields_Meta_Image>;
  title?: Maybe<CategoriesDocAccessFields_Meta_Title>;
};

export type CategoriesDocAccessFields_Meta_Description = {
  create?: Maybe<CategoriesDocAccessFields_Meta_Description_Create>;
  delete?: Maybe<CategoriesDocAccessFields_Meta_Description_Delete>;
  read?: Maybe<CategoriesDocAccessFields_Meta_Description_Read>;
  update?: Maybe<CategoriesDocAccessFields_Meta_Description_Update>;
};

export type CategoriesDocAccessFields_Meta_Description_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Meta_Description_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Meta_Description_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Meta_Description_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Meta_Image = {
  create?: Maybe<CategoriesDocAccessFields_Meta_Image_Create>;
  delete?: Maybe<CategoriesDocAccessFields_Meta_Image_Delete>;
  read?: Maybe<CategoriesDocAccessFields_Meta_Image_Read>;
  update?: Maybe<CategoriesDocAccessFields_Meta_Image_Update>;
};

export type CategoriesDocAccessFields_Meta_Image_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Meta_Image_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Meta_Image_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Meta_Image_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Meta_Title = {
  create?: Maybe<CategoriesDocAccessFields_Meta_Title_Create>;
  delete?: Maybe<CategoriesDocAccessFields_Meta_Title_Delete>;
  read?: Maybe<CategoriesDocAccessFields_Meta_Title_Read>;
  update?: Maybe<CategoriesDocAccessFields_Meta_Title_Update>;
};

export type CategoriesDocAccessFields_Meta_Title_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Meta_Title_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Meta_Title_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Meta_Title_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Slug = {
  create?: Maybe<CategoriesDocAccessFields_Slug_Create>;
  delete?: Maybe<CategoriesDocAccessFields_Slug_Delete>;
  read?: Maybe<CategoriesDocAccessFields_Slug_Read>;
  update?: Maybe<CategoriesDocAccessFields_Slug_Update>;
};

export type CategoriesDocAccessFields_Slug_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Slug_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Slug_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Slug_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Title = {
  create?: Maybe<CategoriesDocAccessFields_Title_Create>;
  delete?: Maybe<CategoriesDocAccessFields_Title_Delete>;
  read?: Maybe<CategoriesDocAccessFields_Title_Read>;
  update?: Maybe<CategoriesDocAccessFields_Title_Update>;
};

export type CategoriesDocAccessFields_Title_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Title_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Title_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Title_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_UpdatedAt = {
  create?: Maybe<CategoriesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<CategoriesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<CategoriesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<CategoriesDocAccessFields_UpdatedAt_Update>;
};

export type CategoriesDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields = {
  createdAt?: Maybe<CategoriesFields_CreatedAt>;
  description?: Maybe<CategoriesFields_Description>;
  generateSlug?: Maybe<CategoriesFields_GenerateSlug>;
  image?: Maybe<CategoriesFields_Image>;
  meta?: Maybe<CategoriesFields_Meta>;
  slug?: Maybe<CategoriesFields_Slug>;
  title?: Maybe<CategoriesFields_Title>;
  updatedAt?: Maybe<CategoriesFields_UpdatedAt>;
};

export type CategoriesFields_CreatedAt = {
  create?: Maybe<CategoriesFields_CreatedAt_Create>;
  delete?: Maybe<CategoriesFields_CreatedAt_Delete>;
  read?: Maybe<CategoriesFields_CreatedAt_Read>;
  update?: Maybe<CategoriesFields_CreatedAt_Update>;
};

export type CategoriesFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Description = {
  create?: Maybe<CategoriesFields_Description_Create>;
  delete?: Maybe<CategoriesFields_Description_Delete>;
  read?: Maybe<CategoriesFields_Description_Read>;
  update?: Maybe<CategoriesFields_Description_Update>;
};

export type CategoriesFields_Description_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Description_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Description_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Description_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_GenerateSlug = {
  create?: Maybe<CategoriesFields_GenerateSlug_Create>;
  delete?: Maybe<CategoriesFields_GenerateSlug_Delete>;
  read?: Maybe<CategoriesFields_GenerateSlug_Read>;
  update?: Maybe<CategoriesFields_GenerateSlug_Update>;
};

export type CategoriesFields_GenerateSlug_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_GenerateSlug_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_GenerateSlug_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_GenerateSlug_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Image = {
  create?: Maybe<CategoriesFields_Image_Create>;
  delete?: Maybe<CategoriesFields_Image_Delete>;
  read?: Maybe<CategoriesFields_Image_Read>;
  update?: Maybe<CategoriesFields_Image_Update>;
};

export type CategoriesFields_Image_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Image_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Image_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Image_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Meta = {
  description?: Maybe<CategoriesFields_Meta_Description>;
  image?: Maybe<CategoriesFields_Meta_Image>;
  title?: Maybe<CategoriesFields_Meta_Title>;
};

export type CategoriesFields_Meta_Description = {
  create?: Maybe<CategoriesFields_Meta_Description_Create>;
  delete?: Maybe<CategoriesFields_Meta_Description_Delete>;
  read?: Maybe<CategoriesFields_Meta_Description_Read>;
  update?: Maybe<CategoriesFields_Meta_Description_Update>;
};

export type CategoriesFields_Meta_Description_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Meta_Description_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Meta_Description_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Meta_Description_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Meta_Image = {
  create?: Maybe<CategoriesFields_Meta_Image_Create>;
  delete?: Maybe<CategoriesFields_Meta_Image_Delete>;
  read?: Maybe<CategoriesFields_Meta_Image_Read>;
  update?: Maybe<CategoriesFields_Meta_Image_Update>;
};

export type CategoriesFields_Meta_Image_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Meta_Image_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Meta_Image_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Meta_Image_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Meta_Title = {
  create?: Maybe<CategoriesFields_Meta_Title_Create>;
  delete?: Maybe<CategoriesFields_Meta_Title_Delete>;
  read?: Maybe<CategoriesFields_Meta_Title_Read>;
  update?: Maybe<CategoriesFields_Meta_Title_Update>;
};

export type CategoriesFields_Meta_Title_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Meta_Title_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Meta_Title_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Meta_Title_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Slug = {
  create?: Maybe<CategoriesFields_Slug_Create>;
  delete?: Maybe<CategoriesFields_Slug_Delete>;
  read?: Maybe<CategoriesFields_Slug_Read>;
  update?: Maybe<CategoriesFields_Slug_Update>;
};

export type CategoriesFields_Slug_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Slug_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Slug_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Slug_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Title = {
  create?: Maybe<CategoriesFields_Title_Create>;
  delete?: Maybe<CategoriesFields_Title_Delete>;
  read?: Maybe<CategoriesFields_Title_Read>;
  update?: Maybe<CategoriesFields_Title_Update>;
};

export type CategoriesFields_Title_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Title_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Title_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Title_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_UpdatedAt = {
  create?: Maybe<CategoriesFields_UpdatedAt_Create>;
  delete?: Maybe<CategoriesFields_UpdatedAt_Delete>;
  read?: Maybe<CategoriesFields_UpdatedAt_Read>;
  update?: Maybe<CategoriesFields_UpdatedAt_Update>;
};

export type CategoriesFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type CategoriesReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Category = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['JSON']['output']>;
  generateSlug?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Int']['output'];
  image: Media;
  meta?: Maybe<Category_Meta>;
  slug: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CategoryDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type Category_Meta = {
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Category_MetaImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
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

export type Category_Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
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

export type Category_Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Category_Meta__Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Category_Meta__Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Category_Meta__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  description?: InputMaybe<Category_Description_Operator>;
  generateSlug?: InputMaybe<Category_GenerateSlug_Operator>;
  id?: InputMaybe<Category_Id_Operator>;
  image?: InputMaybe<Category_Image_Operator>;
  meta__description?: InputMaybe<Category_Meta__Description_Operator>;
  meta__image?: InputMaybe<Category_Meta__Image_Operator>;
  meta__title?: InputMaybe<Category_Meta__Title_Operator>;
  slug?: InputMaybe<Category_Slug_Operator>;
  title?: InputMaybe<Category_Title_Operator>;
  updatedAt?: InputMaybe<Category_UpdatedAt_Operator>;
};

export type Category_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Category_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Category_Where_Or>>>;
  createdAt?: InputMaybe<Category_CreatedAt_Operator>;
  description?: InputMaybe<Category_Description_Operator>;
  generateSlug?: InputMaybe<Category_GenerateSlug_Operator>;
  id?: InputMaybe<Category_Id_Operator>;
  image?: InputMaybe<Category_Image_Operator>;
  meta__description?: InputMaybe<Category_Meta__Description_Operator>;
  meta__image?: InputMaybe<Category_Meta__Image_Operator>;
  meta__title?: InputMaybe<Category_Meta__Title_Operator>;
  slug?: InputMaybe<Category_Slug_Operator>;
  title?: InputMaybe<Category_Title_Operator>;
  updatedAt?: InputMaybe<Category_UpdatedAt_Operator>;
};

export type Category_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Category_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Category_Where_Or>>>;
  createdAt?: InputMaybe<Category_CreatedAt_Operator>;
  description?: InputMaybe<Category_Description_Operator>;
  generateSlug?: InputMaybe<Category_GenerateSlug_Operator>;
  id?: InputMaybe<Category_Id_Operator>;
  image?: InputMaybe<Category_Image_Operator>;
  meta__description?: InputMaybe<Category_Meta__Description_Operator>;
  meta__image?: InputMaybe<Category_Meta__Image_Operator>;
  meta__title?: InputMaybe<Category_Meta__Title_Operator>;
  slug?: InputMaybe<Category_Slug_Operator>;
  title?: InputMaybe<Category_Title_Operator>;
  updatedAt?: InputMaybe<Category_UpdatedAt_Operator>;
};

export type Checkbox = {
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
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  columns?: Maybe<Array<ContentBlock_Columns>>;
  id?: Maybe<Scalars['String']['output']>;
};

export type ContentBlock_Columns = {
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
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Email = {
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
  contactLink?: Maybe<Footer_ContactLink>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  navItems?: Maybe<Array<Footer_NavItems>>;
  phone?: Maybe<Scalars['String']['output']>;
  slogan?: Maybe<Scalars['String']['output']>;
  socialLink?: Maybe<Footer_SocialLink>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FooterDocAccessFields = {
  contactLink?: Maybe<FooterDocAccessFields_ContactLink>;
  createdAt?: Maybe<FooterDocAccessFields_CreatedAt>;
  navItems?: Maybe<FooterDocAccessFields_NavItems>;
  phone?: Maybe<FooterDocAccessFields_Phone>;
  slogan?: Maybe<FooterDocAccessFields_Slogan>;
  socialLink?: Maybe<FooterDocAccessFields_SocialLink>;
  updatedAt?: Maybe<FooterDocAccessFields_UpdatedAt>;
};

export type FooterDocAccessFields_ContactLink = {
  create?: Maybe<FooterDocAccessFields_ContactLink_Create>;
  delete?: Maybe<FooterDocAccessFields_ContactLink_Delete>;
  fields?: Maybe<FooterDocAccessFields_ContactLink_Fields>;
  read?: Maybe<FooterDocAccessFields_ContactLink_Read>;
  update?: Maybe<FooterDocAccessFields_ContactLink_Update>;
};

export type FooterDocAccessFields_ContactLink_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Fields = {
  link?: Maybe<FooterDocAccessFields_ContactLink_Link>;
};

export type FooterDocAccessFields_ContactLink_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link = {
  create?: Maybe<FooterDocAccessFields_ContactLink_Link_Create>;
  delete?: Maybe<FooterDocAccessFields_ContactLink_Link_Delete>;
  fields?: Maybe<FooterDocAccessFields_ContactLink_Link_Fields>;
  read?: Maybe<FooterDocAccessFields_ContactLink_Link_Read>;
  update?: Maybe<FooterDocAccessFields_ContactLink_Link_Update>;
};

export type FooterDocAccessFields_ContactLink_Link_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Fields = {
  label?: Maybe<FooterDocAccessFields_ContactLink_Link_Label>;
  newTab?: Maybe<FooterDocAccessFields_ContactLink_Link_NewTab>;
  reference?: Maybe<FooterDocAccessFields_ContactLink_Link_Reference>;
  type?: Maybe<FooterDocAccessFields_ContactLink_Link_Type>;
  url?: Maybe<FooterDocAccessFields_ContactLink_Link_Url>;
};

export type FooterDocAccessFields_ContactLink_Link_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Label = {
  create?: Maybe<FooterDocAccessFields_ContactLink_Link_Label_Create>;
  delete?: Maybe<FooterDocAccessFields_ContactLink_Link_Label_Delete>;
  read?: Maybe<FooterDocAccessFields_ContactLink_Link_Label_Read>;
  update?: Maybe<FooterDocAccessFields_ContactLink_Link_Label_Update>;
};

export type FooterDocAccessFields_ContactLink_Link_Label_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Label_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Label_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Label_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_NewTab = {
  create?: Maybe<FooterDocAccessFields_ContactLink_Link_NewTab_Create>;
  delete?: Maybe<FooterDocAccessFields_ContactLink_Link_NewTab_Delete>;
  read?: Maybe<FooterDocAccessFields_ContactLink_Link_NewTab_Read>;
  update?: Maybe<FooterDocAccessFields_ContactLink_Link_NewTab_Update>;
};

export type FooterDocAccessFields_ContactLink_Link_NewTab_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_NewTab_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_NewTab_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_NewTab_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Reference = {
  create?: Maybe<FooterDocAccessFields_ContactLink_Link_Reference_Create>;
  delete?: Maybe<FooterDocAccessFields_ContactLink_Link_Reference_Delete>;
  read?: Maybe<FooterDocAccessFields_ContactLink_Link_Reference_Read>;
  update?: Maybe<FooterDocAccessFields_ContactLink_Link_Reference_Update>;
};

export type FooterDocAccessFields_ContactLink_Link_Reference_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Reference_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Reference_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Reference_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Type = {
  create?: Maybe<FooterDocAccessFields_ContactLink_Link_Type_Create>;
  delete?: Maybe<FooterDocAccessFields_ContactLink_Link_Type_Delete>;
  read?: Maybe<FooterDocAccessFields_ContactLink_Link_Type_Read>;
  update?: Maybe<FooterDocAccessFields_ContactLink_Link_Type_Update>;
};

export type FooterDocAccessFields_ContactLink_Link_Type_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Type_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Type_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Type_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Url = {
  create?: Maybe<FooterDocAccessFields_ContactLink_Link_Url_Create>;
  delete?: Maybe<FooterDocAccessFields_ContactLink_Link_Url_Delete>;
  read?: Maybe<FooterDocAccessFields_ContactLink_Link_Url_Read>;
  update?: Maybe<FooterDocAccessFields_ContactLink_Link_Url_Update>;
};

export type FooterDocAccessFields_ContactLink_Link_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_ContactLink_Link_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CreatedAt = {
  create?: Maybe<FooterDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<FooterDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<FooterDocAccessFields_CreatedAt_Read>;
  update?: Maybe<FooterDocAccessFields_CreatedAt_Update>;
};

export type FooterDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems = {
  create?: Maybe<FooterDocAccessFields_NavItems_Create>;
  delete?: Maybe<FooterDocAccessFields_NavItems_Delete>;
  fields?: Maybe<FooterDocAccessFields_NavItems_Fields>;
  read?: Maybe<FooterDocAccessFields_NavItems_Read>;
  update?: Maybe<FooterDocAccessFields_NavItems_Update>;
};

export type FooterDocAccessFields_NavItems_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Fields = {
  id?: Maybe<FooterDocAccessFields_NavItems_Id>;
  link?: Maybe<FooterDocAccessFields_NavItems_Link>;
};

export type FooterDocAccessFields_NavItems_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Id = {
  create?: Maybe<FooterDocAccessFields_NavItems_Id_Create>;
  delete?: Maybe<FooterDocAccessFields_NavItems_Id_Delete>;
  read?: Maybe<FooterDocAccessFields_NavItems_Id_Read>;
  update?: Maybe<FooterDocAccessFields_NavItems_Id_Update>;
};

export type FooterDocAccessFields_NavItems_Id_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Id_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Id_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Id_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link = {
  create?: Maybe<FooterDocAccessFields_NavItems_Link_Create>;
  delete?: Maybe<FooterDocAccessFields_NavItems_Link_Delete>;
  fields?: Maybe<FooterDocAccessFields_NavItems_Link_Fields>;
  read?: Maybe<FooterDocAccessFields_NavItems_Link_Read>;
  update?: Maybe<FooterDocAccessFields_NavItems_Link_Update>;
};

export type FooterDocAccessFields_NavItems_Link_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Fields = {
  label?: Maybe<FooterDocAccessFields_NavItems_Link_Label>;
  newTab?: Maybe<FooterDocAccessFields_NavItems_Link_NewTab>;
  reference?: Maybe<FooterDocAccessFields_NavItems_Link_Reference>;
  type?: Maybe<FooterDocAccessFields_NavItems_Link_Type>;
  url?: Maybe<FooterDocAccessFields_NavItems_Link_Url>;
};

export type FooterDocAccessFields_NavItems_Link_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Label = {
  create?: Maybe<FooterDocAccessFields_NavItems_Link_Label_Create>;
  delete?: Maybe<FooterDocAccessFields_NavItems_Link_Label_Delete>;
  read?: Maybe<FooterDocAccessFields_NavItems_Link_Label_Read>;
  update?: Maybe<FooterDocAccessFields_NavItems_Link_Label_Update>;
};

export type FooterDocAccessFields_NavItems_Link_Label_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Label_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Label_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Label_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_NewTab = {
  create?: Maybe<FooterDocAccessFields_NavItems_Link_NewTab_Create>;
  delete?: Maybe<FooterDocAccessFields_NavItems_Link_NewTab_Delete>;
  read?: Maybe<FooterDocAccessFields_NavItems_Link_NewTab_Read>;
  update?: Maybe<FooterDocAccessFields_NavItems_Link_NewTab_Update>;
};

export type FooterDocAccessFields_NavItems_Link_NewTab_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_NewTab_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_NewTab_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_NewTab_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Reference = {
  create?: Maybe<FooterDocAccessFields_NavItems_Link_Reference_Create>;
  delete?: Maybe<FooterDocAccessFields_NavItems_Link_Reference_Delete>;
  read?: Maybe<FooterDocAccessFields_NavItems_Link_Reference_Read>;
  update?: Maybe<FooterDocAccessFields_NavItems_Link_Reference_Update>;
};

export type FooterDocAccessFields_NavItems_Link_Reference_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Reference_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Reference_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Reference_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Type = {
  create?: Maybe<FooterDocAccessFields_NavItems_Link_Type_Create>;
  delete?: Maybe<FooterDocAccessFields_NavItems_Link_Type_Delete>;
  read?: Maybe<FooterDocAccessFields_NavItems_Link_Type_Read>;
  update?: Maybe<FooterDocAccessFields_NavItems_Link_Type_Update>;
};

export type FooterDocAccessFields_NavItems_Link_Type_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Type_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Type_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Type_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Url = {
  create?: Maybe<FooterDocAccessFields_NavItems_Link_Url_Create>;
  delete?: Maybe<FooterDocAccessFields_NavItems_Link_Url_Delete>;
  read?: Maybe<FooterDocAccessFields_NavItems_Link_Url_Read>;
  update?: Maybe<FooterDocAccessFields_NavItems_Link_Url_Update>;
};

export type FooterDocAccessFields_NavItems_Link_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_NavItems_Link_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Phone = {
  create?: Maybe<FooterDocAccessFields_Phone_Create>;
  delete?: Maybe<FooterDocAccessFields_Phone_Delete>;
  read?: Maybe<FooterDocAccessFields_Phone_Read>;
  update?: Maybe<FooterDocAccessFields_Phone_Update>;
};

export type FooterDocAccessFields_Phone_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Phone_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Phone_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Phone_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Slogan = {
  create?: Maybe<FooterDocAccessFields_Slogan_Create>;
  delete?: Maybe<FooterDocAccessFields_Slogan_Delete>;
  read?: Maybe<FooterDocAccessFields_Slogan_Read>;
  update?: Maybe<FooterDocAccessFields_Slogan_Update>;
};

export type FooterDocAccessFields_Slogan_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Slogan_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Slogan_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_Slogan_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink = {
  create?: Maybe<FooterDocAccessFields_SocialLink_Create>;
  delete?: Maybe<FooterDocAccessFields_SocialLink_Delete>;
  fields?: Maybe<FooterDocAccessFields_SocialLink_Fields>;
  read?: Maybe<FooterDocAccessFields_SocialLink_Read>;
  update?: Maybe<FooterDocAccessFields_SocialLink_Update>;
};

export type FooterDocAccessFields_SocialLink_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Fields = {
  link?: Maybe<FooterDocAccessFields_SocialLink_Link>;
};

export type FooterDocAccessFields_SocialLink_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link = {
  create?: Maybe<FooterDocAccessFields_SocialLink_Link_Create>;
  delete?: Maybe<FooterDocAccessFields_SocialLink_Link_Delete>;
  fields?: Maybe<FooterDocAccessFields_SocialLink_Link_Fields>;
  read?: Maybe<FooterDocAccessFields_SocialLink_Link_Read>;
  update?: Maybe<FooterDocAccessFields_SocialLink_Link_Update>;
};

export type FooterDocAccessFields_SocialLink_Link_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Fields = {
  label?: Maybe<FooterDocAccessFields_SocialLink_Link_Label>;
  newTab?: Maybe<FooterDocAccessFields_SocialLink_Link_NewTab>;
  reference?: Maybe<FooterDocAccessFields_SocialLink_Link_Reference>;
  type?: Maybe<FooterDocAccessFields_SocialLink_Link_Type>;
  url?: Maybe<FooterDocAccessFields_SocialLink_Link_Url>;
};

export type FooterDocAccessFields_SocialLink_Link_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Label = {
  create?: Maybe<FooterDocAccessFields_SocialLink_Link_Label_Create>;
  delete?: Maybe<FooterDocAccessFields_SocialLink_Link_Label_Delete>;
  read?: Maybe<FooterDocAccessFields_SocialLink_Link_Label_Read>;
  update?: Maybe<FooterDocAccessFields_SocialLink_Link_Label_Update>;
};

export type FooterDocAccessFields_SocialLink_Link_Label_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Label_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Label_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Label_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_NewTab = {
  create?: Maybe<FooterDocAccessFields_SocialLink_Link_NewTab_Create>;
  delete?: Maybe<FooterDocAccessFields_SocialLink_Link_NewTab_Delete>;
  read?: Maybe<FooterDocAccessFields_SocialLink_Link_NewTab_Read>;
  update?: Maybe<FooterDocAccessFields_SocialLink_Link_NewTab_Update>;
};

export type FooterDocAccessFields_SocialLink_Link_NewTab_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_NewTab_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_NewTab_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_NewTab_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Reference = {
  create?: Maybe<FooterDocAccessFields_SocialLink_Link_Reference_Create>;
  delete?: Maybe<FooterDocAccessFields_SocialLink_Link_Reference_Delete>;
  read?: Maybe<FooterDocAccessFields_SocialLink_Link_Reference_Read>;
  update?: Maybe<FooterDocAccessFields_SocialLink_Link_Reference_Update>;
};

export type FooterDocAccessFields_SocialLink_Link_Reference_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Reference_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Reference_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Reference_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Type = {
  create?: Maybe<FooterDocAccessFields_SocialLink_Link_Type_Create>;
  delete?: Maybe<FooterDocAccessFields_SocialLink_Link_Type_Delete>;
  read?: Maybe<FooterDocAccessFields_SocialLink_Link_Type_Read>;
  update?: Maybe<FooterDocAccessFields_SocialLink_Link_Type_Update>;
};

export type FooterDocAccessFields_SocialLink_Link_Type_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Type_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Type_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Type_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Url = {
  create?: Maybe<FooterDocAccessFields_SocialLink_Link_Url_Create>;
  delete?: Maybe<FooterDocAccessFields_SocialLink_Link_Url_Delete>;
  read?: Maybe<FooterDocAccessFields_SocialLink_Link_Url_Read>;
  update?: Maybe<FooterDocAccessFields_SocialLink_Link_Url_Update>;
};

export type FooterDocAccessFields_SocialLink_Link_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLink_Link_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_UpdatedAt = {
  create?: Maybe<FooterDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<FooterDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<FooterDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<FooterDocAccessFields_UpdatedAt_Update>;
};

export type FooterDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields = {
  contactLink?: Maybe<FooterFields_ContactLink>;
  createdAt?: Maybe<FooterFields_CreatedAt>;
  navItems?: Maybe<FooterFields_NavItems>;
  phone?: Maybe<FooterFields_Phone>;
  slogan?: Maybe<FooterFields_Slogan>;
  socialLink?: Maybe<FooterFields_SocialLink>;
  updatedAt?: Maybe<FooterFields_UpdatedAt>;
};

export type FooterFields_ContactLink = {
  create?: Maybe<FooterFields_ContactLink_Create>;
  delete?: Maybe<FooterFields_ContactLink_Delete>;
  fields?: Maybe<FooterFields_ContactLink_Fields>;
  read?: Maybe<FooterFields_ContactLink_Read>;
  update?: Maybe<FooterFields_ContactLink_Update>;
};

export type FooterFields_ContactLink_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Fields = {
  link?: Maybe<FooterFields_ContactLink_Link>;
};

export type FooterFields_ContactLink_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link = {
  create?: Maybe<FooterFields_ContactLink_Link_Create>;
  delete?: Maybe<FooterFields_ContactLink_Link_Delete>;
  fields?: Maybe<FooterFields_ContactLink_Link_Fields>;
  read?: Maybe<FooterFields_ContactLink_Link_Read>;
  update?: Maybe<FooterFields_ContactLink_Link_Update>;
};

export type FooterFields_ContactLink_Link_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Fields = {
  label?: Maybe<FooterFields_ContactLink_Link_Label>;
  newTab?: Maybe<FooterFields_ContactLink_Link_NewTab>;
  reference?: Maybe<FooterFields_ContactLink_Link_Reference>;
  type?: Maybe<FooterFields_ContactLink_Link_Type>;
  url?: Maybe<FooterFields_ContactLink_Link_Url>;
};

export type FooterFields_ContactLink_Link_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Label = {
  create?: Maybe<FooterFields_ContactLink_Link_Label_Create>;
  delete?: Maybe<FooterFields_ContactLink_Link_Label_Delete>;
  read?: Maybe<FooterFields_ContactLink_Link_Label_Read>;
  update?: Maybe<FooterFields_ContactLink_Link_Label_Update>;
};

export type FooterFields_ContactLink_Link_Label_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Label_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Label_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Label_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_NewTab = {
  create?: Maybe<FooterFields_ContactLink_Link_NewTab_Create>;
  delete?: Maybe<FooterFields_ContactLink_Link_NewTab_Delete>;
  read?: Maybe<FooterFields_ContactLink_Link_NewTab_Read>;
  update?: Maybe<FooterFields_ContactLink_Link_NewTab_Update>;
};

export type FooterFields_ContactLink_Link_NewTab_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_NewTab_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_NewTab_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_NewTab_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Reference = {
  create?: Maybe<FooterFields_ContactLink_Link_Reference_Create>;
  delete?: Maybe<FooterFields_ContactLink_Link_Reference_Delete>;
  read?: Maybe<FooterFields_ContactLink_Link_Reference_Read>;
  update?: Maybe<FooterFields_ContactLink_Link_Reference_Update>;
};

export type FooterFields_ContactLink_Link_Reference_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Reference_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Reference_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Reference_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Type = {
  create?: Maybe<FooterFields_ContactLink_Link_Type_Create>;
  delete?: Maybe<FooterFields_ContactLink_Link_Type_Delete>;
  read?: Maybe<FooterFields_ContactLink_Link_Type_Read>;
  update?: Maybe<FooterFields_ContactLink_Link_Type_Update>;
};

export type FooterFields_ContactLink_Link_Type_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Type_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Type_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Type_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Url = {
  create?: Maybe<FooterFields_ContactLink_Link_Url_Create>;
  delete?: Maybe<FooterFields_ContactLink_Link_Url_Delete>;
  read?: Maybe<FooterFields_ContactLink_Link_Url_Read>;
  update?: Maybe<FooterFields_ContactLink_Link_Url_Update>;
};

export type FooterFields_ContactLink_Link_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_ContactLink_Link_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_CreatedAt = {
  create?: Maybe<FooterFields_CreatedAt_Create>;
  delete?: Maybe<FooterFields_CreatedAt_Delete>;
  read?: Maybe<FooterFields_CreatedAt_Read>;
  update?: Maybe<FooterFields_CreatedAt_Update>;
};

export type FooterFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems = {
  create?: Maybe<FooterFields_NavItems_Create>;
  delete?: Maybe<FooterFields_NavItems_Delete>;
  fields?: Maybe<FooterFields_NavItems_Fields>;
  read?: Maybe<FooterFields_NavItems_Read>;
  update?: Maybe<FooterFields_NavItems_Update>;
};

export type FooterFields_NavItems_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Fields = {
  id?: Maybe<FooterFields_NavItems_Id>;
  link?: Maybe<FooterFields_NavItems_Link>;
};

export type FooterFields_NavItems_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Id = {
  create?: Maybe<FooterFields_NavItems_Id_Create>;
  delete?: Maybe<FooterFields_NavItems_Id_Delete>;
  read?: Maybe<FooterFields_NavItems_Id_Read>;
  update?: Maybe<FooterFields_NavItems_Id_Update>;
};

export type FooterFields_NavItems_Id_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Id_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Id_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Id_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link = {
  create?: Maybe<FooterFields_NavItems_Link_Create>;
  delete?: Maybe<FooterFields_NavItems_Link_Delete>;
  fields?: Maybe<FooterFields_NavItems_Link_Fields>;
  read?: Maybe<FooterFields_NavItems_Link_Read>;
  update?: Maybe<FooterFields_NavItems_Link_Update>;
};

export type FooterFields_NavItems_Link_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Fields = {
  label?: Maybe<FooterFields_NavItems_Link_Label>;
  newTab?: Maybe<FooterFields_NavItems_Link_NewTab>;
  reference?: Maybe<FooterFields_NavItems_Link_Reference>;
  type?: Maybe<FooterFields_NavItems_Link_Type>;
  url?: Maybe<FooterFields_NavItems_Link_Url>;
};

export type FooterFields_NavItems_Link_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Label = {
  create?: Maybe<FooterFields_NavItems_Link_Label_Create>;
  delete?: Maybe<FooterFields_NavItems_Link_Label_Delete>;
  read?: Maybe<FooterFields_NavItems_Link_Label_Read>;
  update?: Maybe<FooterFields_NavItems_Link_Label_Update>;
};

export type FooterFields_NavItems_Link_Label_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Label_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Label_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Label_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_NewTab = {
  create?: Maybe<FooterFields_NavItems_Link_NewTab_Create>;
  delete?: Maybe<FooterFields_NavItems_Link_NewTab_Delete>;
  read?: Maybe<FooterFields_NavItems_Link_NewTab_Read>;
  update?: Maybe<FooterFields_NavItems_Link_NewTab_Update>;
};

export type FooterFields_NavItems_Link_NewTab_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_NewTab_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_NewTab_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_NewTab_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Reference = {
  create?: Maybe<FooterFields_NavItems_Link_Reference_Create>;
  delete?: Maybe<FooterFields_NavItems_Link_Reference_Delete>;
  read?: Maybe<FooterFields_NavItems_Link_Reference_Read>;
  update?: Maybe<FooterFields_NavItems_Link_Reference_Update>;
};

export type FooterFields_NavItems_Link_Reference_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Reference_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Reference_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Reference_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Type = {
  create?: Maybe<FooterFields_NavItems_Link_Type_Create>;
  delete?: Maybe<FooterFields_NavItems_Link_Type_Delete>;
  read?: Maybe<FooterFields_NavItems_Link_Type_Read>;
  update?: Maybe<FooterFields_NavItems_Link_Type_Update>;
};

export type FooterFields_NavItems_Link_Type_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Type_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Type_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Type_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Url = {
  create?: Maybe<FooterFields_NavItems_Link_Url_Create>;
  delete?: Maybe<FooterFields_NavItems_Link_Url_Delete>;
  read?: Maybe<FooterFields_NavItems_Link_Url_Read>;
  update?: Maybe<FooterFields_NavItems_Link_Url_Update>;
};

export type FooterFields_NavItems_Link_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_NavItems_Link_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Phone = {
  create?: Maybe<FooterFields_Phone_Create>;
  delete?: Maybe<FooterFields_Phone_Delete>;
  read?: Maybe<FooterFields_Phone_Read>;
  update?: Maybe<FooterFields_Phone_Update>;
};

export type FooterFields_Phone_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Phone_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Phone_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Phone_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Slogan = {
  create?: Maybe<FooterFields_Slogan_Create>;
  delete?: Maybe<FooterFields_Slogan_Delete>;
  read?: Maybe<FooterFields_Slogan_Read>;
  update?: Maybe<FooterFields_Slogan_Update>;
};

export type FooterFields_Slogan_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Slogan_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Slogan_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_Slogan_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink = {
  create?: Maybe<FooterFields_SocialLink_Create>;
  delete?: Maybe<FooterFields_SocialLink_Delete>;
  fields?: Maybe<FooterFields_SocialLink_Fields>;
  read?: Maybe<FooterFields_SocialLink_Read>;
  update?: Maybe<FooterFields_SocialLink_Update>;
};

export type FooterFields_SocialLink_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Fields = {
  link?: Maybe<FooterFields_SocialLink_Link>;
};

export type FooterFields_SocialLink_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link = {
  create?: Maybe<FooterFields_SocialLink_Link_Create>;
  delete?: Maybe<FooterFields_SocialLink_Link_Delete>;
  fields?: Maybe<FooterFields_SocialLink_Link_Fields>;
  read?: Maybe<FooterFields_SocialLink_Link_Read>;
  update?: Maybe<FooterFields_SocialLink_Link_Update>;
};

export type FooterFields_SocialLink_Link_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Fields = {
  label?: Maybe<FooterFields_SocialLink_Link_Label>;
  newTab?: Maybe<FooterFields_SocialLink_Link_NewTab>;
  reference?: Maybe<FooterFields_SocialLink_Link_Reference>;
  type?: Maybe<FooterFields_SocialLink_Link_Type>;
  url?: Maybe<FooterFields_SocialLink_Link_Url>;
};

export type FooterFields_SocialLink_Link_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Label = {
  create?: Maybe<FooterFields_SocialLink_Link_Label_Create>;
  delete?: Maybe<FooterFields_SocialLink_Link_Label_Delete>;
  read?: Maybe<FooterFields_SocialLink_Link_Label_Read>;
  update?: Maybe<FooterFields_SocialLink_Link_Label_Update>;
};

export type FooterFields_SocialLink_Link_Label_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Label_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Label_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Label_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_NewTab = {
  create?: Maybe<FooterFields_SocialLink_Link_NewTab_Create>;
  delete?: Maybe<FooterFields_SocialLink_Link_NewTab_Delete>;
  read?: Maybe<FooterFields_SocialLink_Link_NewTab_Read>;
  update?: Maybe<FooterFields_SocialLink_Link_NewTab_Update>;
};

export type FooterFields_SocialLink_Link_NewTab_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_NewTab_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_NewTab_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_NewTab_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Reference = {
  create?: Maybe<FooterFields_SocialLink_Link_Reference_Create>;
  delete?: Maybe<FooterFields_SocialLink_Link_Reference_Delete>;
  read?: Maybe<FooterFields_SocialLink_Link_Reference_Read>;
  update?: Maybe<FooterFields_SocialLink_Link_Reference_Update>;
};

export type FooterFields_SocialLink_Link_Reference_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Reference_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Reference_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Reference_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Type = {
  create?: Maybe<FooterFields_SocialLink_Link_Type_Create>;
  delete?: Maybe<FooterFields_SocialLink_Link_Type_Delete>;
  read?: Maybe<FooterFields_SocialLink_Link_Type_Read>;
  update?: Maybe<FooterFields_SocialLink_Link_Type_Update>;
};

export type FooterFields_SocialLink_Link_Type_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Type_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Type_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Type_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Url = {
  create?: Maybe<FooterFields_SocialLink_Link_Url_Create>;
  delete?: Maybe<FooterFields_SocialLink_Link_Url_Delete>;
  read?: Maybe<FooterFields_SocialLink_Link_Url_Read>;
  update?: Maybe<FooterFields_SocialLink_Link_Url_Update>;
};

export type FooterFields_SocialLink_Link_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLink_Link_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_UpdatedAt = {
  create?: Maybe<FooterFields_UpdatedAt_Create>;
  delete?: Maybe<FooterFields_UpdatedAt_Delete>;
  read?: Maybe<FooterFields_UpdatedAt_Read>;
  update?: Maybe<FooterFields_UpdatedAt_Update>;
};

export type FooterFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FooterFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FooterReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FooterReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FooterUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FooterUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Footer_ContactLink = {
  link?: Maybe<Footer_ContactLink_Link>;
};

export type Footer_ContactLink_Link = {
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
  relationTo?: Maybe<Footer_ContactLink_Link_Reference_RelationTo>;
  value?: Maybe<Footer_ContactLink_Link_Reference>;
};

export enum Footer_ContactLink_Link_Type {
  Custom = 'custom',
  Reference = 'reference'
}

export type Footer_NavItems = {
  id?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Footer_NavItems_Link>;
};

export type Footer_NavItems_Link = {
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
  relationTo?: Maybe<Footer_NavItems_Link_Reference_RelationTo>;
  value?: Maybe<Footer_NavItems_Link_Reference>;
};

export enum Footer_NavItems_Link_Type {
  Custom = 'custom',
  Reference = 'reference'
}

export type Footer_SocialLink = {
  link?: Maybe<Footer_SocialLink_Link>;
};

export type Footer_SocialLink_Link = {
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
  relationTo?: Maybe<Footer_SocialLink_Link_Reference_RelationTo>;
  value?: Maybe<Footer_SocialLink_Link_Reference>;
};

export enum Footer_SocialLink_Link_Type {
  Custom = 'custom',
  Reference = 'reference'
}

export type Form = {
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
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormSubmissionsCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormSubmissionsDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormSubmissionsDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormSubmissionsDocAccessFields = {
  createdAt?: Maybe<FormSubmissionsDocAccessFields_CreatedAt>;
  form?: Maybe<FormSubmissionsDocAccessFields_Form>;
  submissionData?: Maybe<FormSubmissionsDocAccessFields_SubmissionData>;
  updatedAt?: Maybe<FormSubmissionsDocAccessFields_UpdatedAt>;
};

export type FormSubmissionsDocAccessFields_CreatedAt = {
  create?: Maybe<FormSubmissionsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<FormSubmissionsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<FormSubmissionsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<FormSubmissionsDocAccessFields_CreatedAt_Update>;
};

export type FormSubmissionsDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_Form = {
  create?: Maybe<FormSubmissionsDocAccessFields_Form_Create>;
  delete?: Maybe<FormSubmissionsDocAccessFields_Form_Delete>;
  read?: Maybe<FormSubmissionsDocAccessFields_Form_Read>;
  update?: Maybe<FormSubmissionsDocAccessFields_Form_Update>;
};

export type FormSubmissionsDocAccessFields_Form_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_Form_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_Form_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_Form_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData = {
  create?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Create>;
  delete?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Delete>;
  fields?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Fields>;
  read?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Read>;
  update?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Update>;
};

export type FormSubmissionsDocAccessFields_SubmissionData_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Fields = {
  field?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Field>;
  id?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Id>;
  value?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Value>;
};

export type FormSubmissionsDocAccessFields_SubmissionData_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Field = {
  create?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Field_Create>;
  delete?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Field_Delete>;
  read?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Field_Read>;
  update?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Field_Update>;
};

export type FormSubmissionsDocAccessFields_SubmissionData_Field_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Field_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Field_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Field_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Id = {
  create?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Id_Create>;
  delete?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Id_Delete>;
  read?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Id_Read>;
  update?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Id_Update>;
};

export type FormSubmissionsDocAccessFields_SubmissionData_Id_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Id_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Id_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Id_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Value = {
  create?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Value_Create>;
  delete?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Value_Delete>;
  read?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Value_Read>;
  update?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Value_Update>;
};

export type FormSubmissionsDocAccessFields_SubmissionData_Value_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Value_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Value_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Value_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_UpdatedAt = {
  create?: Maybe<FormSubmissionsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<FormSubmissionsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<FormSubmissionsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<FormSubmissionsDocAccessFields_UpdatedAt_Update>;
};

export type FormSubmissionsDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields = {
  createdAt?: Maybe<FormSubmissionsFields_CreatedAt>;
  form?: Maybe<FormSubmissionsFields_Form>;
  submissionData?: Maybe<FormSubmissionsFields_SubmissionData>;
  updatedAt?: Maybe<FormSubmissionsFields_UpdatedAt>;
};

export type FormSubmissionsFields_CreatedAt = {
  create?: Maybe<FormSubmissionsFields_CreatedAt_Create>;
  delete?: Maybe<FormSubmissionsFields_CreatedAt_Delete>;
  read?: Maybe<FormSubmissionsFields_CreatedAt_Read>;
  update?: Maybe<FormSubmissionsFields_CreatedAt_Update>;
};

export type FormSubmissionsFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_Form = {
  create?: Maybe<FormSubmissionsFields_Form_Create>;
  delete?: Maybe<FormSubmissionsFields_Form_Delete>;
  read?: Maybe<FormSubmissionsFields_Form_Read>;
  update?: Maybe<FormSubmissionsFields_Form_Update>;
};

export type FormSubmissionsFields_Form_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_Form_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_Form_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_Form_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData = {
  create?: Maybe<FormSubmissionsFields_SubmissionData_Create>;
  delete?: Maybe<FormSubmissionsFields_SubmissionData_Delete>;
  fields?: Maybe<FormSubmissionsFields_SubmissionData_Fields>;
  read?: Maybe<FormSubmissionsFields_SubmissionData_Read>;
  update?: Maybe<FormSubmissionsFields_SubmissionData_Update>;
};

export type FormSubmissionsFields_SubmissionData_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Fields = {
  field?: Maybe<FormSubmissionsFields_SubmissionData_Field>;
  id?: Maybe<FormSubmissionsFields_SubmissionData_Id>;
  value?: Maybe<FormSubmissionsFields_SubmissionData_Value>;
};

export type FormSubmissionsFields_SubmissionData_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Field = {
  create?: Maybe<FormSubmissionsFields_SubmissionData_Field_Create>;
  delete?: Maybe<FormSubmissionsFields_SubmissionData_Field_Delete>;
  read?: Maybe<FormSubmissionsFields_SubmissionData_Field_Read>;
  update?: Maybe<FormSubmissionsFields_SubmissionData_Field_Update>;
};

export type FormSubmissionsFields_SubmissionData_Field_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Field_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Field_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Field_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Id = {
  create?: Maybe<FormSubmissionsFields_SubmissionData_Id_Create>;
  delete?: Maybe<FormSubmissionsFields_SubmissionData_Id_Delete>;
  read?: Maybe<FormSubmissionsFields_SubmissionData_Id_Read>;
  update?: Maybe<FormSubmissionsFields_SubmissionData_Id_Update>;
};

export type FormSubmissionsFields_SubmissionData_Id_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Id_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Id_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Id_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Value = {
  create?: Maybe<FormSubmissionsFields_SubmissionData_Value_Create>;
  delete?: Maybe<FormSubmissionsFields_SubmissionData_Value_Delete>;
  read?: Maybe<FormSubmissionsFields_SubmissionData_Value_Read>;
  update?: Maybe<FormSubmissionsFields_SubmissionData_Value_Update>;
};

export type FormSubmissionsFields_SubmissionData_Value_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Value_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Value_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Value_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_UpdatedAt = {
  create?: Maybe<FormSubmissionsFields_UpdatedAt_Create>;
  delete?: Maybe<FormSubmissionsFields_UpdatedAt_Delete>;
  read?: Maybe<FormSubmissionsFields_UpdatedAt_Read>;
  update?: Maybe<FormSubmissionsFields_UpdatedAt_Update>;
};

export type FormSubmissionsFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormSubmissionsReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormSubmissionsUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormSubmissionsUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Form_Emails = {
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
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormsCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormsDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormsDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormsDocAccessFields = {
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
  create?: Maybe<FormsDocAccessFields_ConfirmationMessage_Create>;
  delete?: Maybe<FormsDocAccessFields_ConfirmationMessage_Delete>;
  read?: Maybe<FormsDocAccessFields_ConfirmationMessage_Read>;
  update?: Maybe<FormsDocAccessFields_ConfirmationMessage_Update>;
};

export type FormsDocAccessFields_ConfirmationMessage_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_ConfirmationMessage_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_ConfirmationMessage_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_ConfirmationMessage_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_ConfirmationType = {
  create?: Maybe<FormsDocAccessFields_ConfirmationType_Create>;
  delete?: Maybe<FormsDocAccessFields_ConfirmationType_Delete>;
  read?: Maybe<FormsDocAccessFields_ConfirmationType_Read>;
  update?: Maybe<FormsDocAccessFields_ConfirmationType_Update>;
};

export type FormsDocAccessFields_ConfirmationType_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_ConfirmationType_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_ConfirmationType_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_ConfirmationType_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_CreatedAt = {
  create?: Maybe<FormsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<FormsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<FormsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<FormsDocAccessFields_CreatedAt_Update>;
};

export type FormsDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails = {
  create?: Maybe<FormsDocAccessFields_Emails_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_Delete>;
  fields?: Maybe<FormsDocAccessFields_Emails_Fields>;
  read?: Maybe<FormsDocAccessFields_Emails_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_Update>;
};

export type FormsDocAccessFields_Emails_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Fields = {
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
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Bcc = {
  create?: Maybe<FormsDocAccessFields_Emails_Bcc_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_Bcc_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_Bcc_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_Bcc_Update>;
};

export type FormsDocAccessFields_Emails_Bcc_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Bcc_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Bcc_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Bcc_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Cc = {
  create?: Maybe<FormsDocAccessFields_Emails_Cc_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_Cc_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_Cc_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_Cc_Update>;
};

export type FormsDocAccessFields_Emails_Cc_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Cc_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Cc_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Cc_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailFrom = {
  create?: Maybe<FormsDocAccessFields_Emails_EmailFrom_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_EmailFrom_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_EmailFrom_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_EmailFrom_Update>;
};

export type FormsDocAccessFields_Emails_EmailFrom_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailFrom_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailFrom_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailFrom_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailTo = {
  create?: Maybe<FormsDocAccessFields_Emails_EmailTo_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_EmailTo_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_EmailTo_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_EmailTo_Update>;
};

export type FormsDocAccessFields_Emails_EmailTo_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailTo_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailTo_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailTo_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Id = {
  create?: Maybe<FormsDocAccessFields_Emails_Id_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_Id_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_Id_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_Id_Update>;
};

export type FormsDocAccessFields_Emails_Id_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Id_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Id_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Id_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Message = {
  create?: Maybe<FormsDocAccessFields_Emails_Message_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_Message_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_Message_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_Message_Update>;
};

export type FormsDocAccessFields_Emails_Message_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Message_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Message_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Message_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_ReplyTo = {
  create?: Maybe<FormsDocAccessFields_Emails_ReplyTo_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_ReplyTo_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_ReplyTo_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_ReplyTo_Update>;
};

export type FormsDocAccessFields_Emails_ReplyTo_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_ReplyTo_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_ReplyTo_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_ReplyTo_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Subject = {
  create?: Maybe<FormsDocAccessFields_Emails_Subject_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_Subject_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_Subject_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_Subject_Update>;
};

export type FormsDocAccessFields_Emails_Subject_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Subject_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Subject_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Subject_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Fields = {
  create?: Maybe<FormsDocAccessFields_Fields_Create>;
  delete?: Maybe<FormsDocAccessFields_Fields_Delete>;
  read?: Maybe<FormsDocAccessFields_Fields_Read>;
  update?: Maybe<FormsDocAccessFields_Fields_Update>;
};

export type FormsDocAccessFields_Fields_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Fields_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Fields_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Fields_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect = {
  create?: Maybe<FormsDocAccessFields_Redirect_Create>;
  delete?: Maybe<FormsDocAccessFields_Redirect_Delete>;
  fields?: Maybe<FormsDocAccessFields_Redirect_Fields>;
  read?: Maybe<FormsDocAccessFields_Redirect_Read>;
  update?: Maybe<FormsDocAccessFields_Redirect_Update>;
};

export type FormsDocAccessFields_Redirect_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect_Fields = {
  url?: Maybe<FormsDocAccessFields_Redirect_Url>;
};

export type FormsDocAccessFields_Redirect_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect_Url = {
  create?: Maybe<FormsDocAccessFields_Redirect_Url_Create>;
  delete?: Maybe<FormsDocAccessFields_Redirect_Url_Delete>;
  read?: Maybe<FormsDocAccessFields_Redirect_Url_Read>;
  update?: Maybe<FormsDocAccessFields_Redirect_Url_Update>;
};

export type FormsDocAccessFields_Redirect_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_SubmitButtonLabel = {
  create?: Maybe<FormsDocAccessFields_SubmitButtonLabel_Create>;
  delete?: Maybe<FormsDocAccessFields_SubmitButtonLabel_Delete>;
  read?: Maybe<FormsDocAccessFields_SubmitButtonLabel_Read>;
  update?: Maybe<FormsDocAccessFields_SubmitButtonLabel_Update>;
};

export type FormsDocAccessFields_SubmitButtonLabel_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_SubmitButtonLabel_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_SubmitButtonLabel_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_SubmitButtonLabel_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Title = {
  create?: Maybe<FormsDocAccessFields_Title_Create>;
  delete?: Maybe<FormsDocAccessFields_Title_Delete>;
  read?: Maybe<FormsDocAccessFields_Title_Read>;
  update?: Maybe<FormsDocAccessFields_Title_Update>;
};

export type FormsDocAccessFields_Title_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Title_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Title_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Title_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_UpdatedAt = {
  create?: Maybe<FormsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<FormsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<FormsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<FormsDocAccessFields_UpdatedAt_Update>;
};

export type FormsDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields = {
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
  create?: Maybe<FormsFields_ConfirmationMessage_Create>;
  delete?: Maybe<FormsFields_ConfirmationMessage_Delete>;
  read?: Maybe<FormsFields_ConfirmationMessage_Read>;
  update?: Maybe<FormsFields_ConfirmationMessage_Update>;
};

export type FormsFields_ConfirmationMessage_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_ConfirmationMessage_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_ConfirmationMessage_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_ConfirmationMessage_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_ConfirmationType = {
  create?: Maybe<FormsFields_ConfirmationType_Create>;
  delete?: Maybe<FormsFields_ConfirmationType_Delete>;
  read?: Maybe<FormsFields_ConfirmationType_Read>;
  update?: Maybe<FormsFields_ConfirmationType_Update>;
};

export type FormsFields_ConfirmationType_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_ConfirmationType_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_ConfirmationType_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_ConfirmationType_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_CreatedAt = {
  create?: Maybe<FormsFields_CreatedAt_Create>;
  delete?: Maybe<FormsFields_CreatedAt_Delete>;
  read?: Maybe<FormsFields_CreatedAt_Read>;
  update?: Maybe<FormsFields_CreatedAt_Update>;
};

export type FormsFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails = {
  create?: Maybe<FormsFields_Emails_Create>;
  delete?: Maybe<FormsFields_Emails_Delete>;
  fields?: Maybe<FormsFields_Emails_Fields>;
  read?: Maybe<FormsFields_Emails_Read>;
  update?: Maybe<FormsFields_Emails_Update>;
};

export type FormsFields_Emails_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Fields = {
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
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Bcc = {
  create?: Maybe<FormsFields_Emails_Bcc_Create>;
  delete?: Maybe<FormsFields_Emails_Bcc_Delete>;
  read?: Maybe<FormsFields_Emails_Bcc_Read>;
  update?: Maybe<FormsFields_Emails_Bcc_Update>;
};

export type FormsFields_Emails_Bcc_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Bcc_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Bcc_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Bcc_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Cc = {
  create?: Maybe<FormsFields_Emails_Cc_Create>;
  delete?: Maybe<FormsFields_Emails_Cc_Delete>;
  read?: Maybe<FormsFields_Emails_Cc_Read>;
  update?: Maybe<FormsFields_Emails_Cc_Update>;
};

export type FormsFields_Emails_Cc_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Cc_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Cc_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Cc_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailFrom = {
  create?: Maybe<FormsFields_Emails_EmailFrom_Create>;
  delete?: Maybe<FormsFields_Emails_EmailFrom_Delete>;
  read?: Maybe<FormsFields_Emails_EmailFrom_Read>;
  update?: Maybe<FormsFields_Emails_EmailFrom_Update>;
};

export type FormsFields_Emails_EmailFrom_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailFrom_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailFrom_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailFrom_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailTo = {
  create?: Maybe<FormsFields_Emails_EmailTo_Create>;
  delete?: Maybe<FormsFields_Emails_EmailTo_Delete>;
  read?: Maybe<FormsFields_Emails_EmailTo_Read>;
  update?: Maybe<FormsFields_Emails_EmailTo_Update>;
};

export type FormsFields_Emails_EmailTo_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailTo_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailTo_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailTo_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Id = {
  create?: Maybe<FormsFields_Emails_Id_Create>;
  delete?: Maybe<FormsFields_Emails_Id_Delete>;
  read?: Maybe<FormsFields_Emails_Id_Read>;
  update?: Maybe<FormsFields_Emails_Id_Update>;
};

export type FormsFields_Emails_Id_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Id_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Id_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Id_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Message = {
  create?: Maybe<FormsFields_Emails_Message_Create>;
  delete?: Maybe<FormsFields_Emails_Message_Delete>;
  read?: Maybe<FormsFields_Emails_Message_Read>;
  update?: Maybe<FormsFields_Emails_Message_Update>;
};

export type FormsFields_Emails_Message_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Message_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Message_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Message_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_ReplyTo = {
  create?: Maybe<FormsFields_Emails_ReplyTo_Create>;
  delete?: Maybe<FormsFields_Emails_ReplyTo_Delete>;
  read?: Maybe<FormsFields_Emails_ReplyTo_Read>;
  update?: Maybe<FormsFields_Emails_ReplyTo_Update>;
};

export type FormsFields_Emails_ReplyTo_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_ReplyTo_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_ReplyTo_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_ReplyTo_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Subject = {
  create?: Maybe<FormsFields_Emails_Subject_Create>;
  delete?: Maybe<FormsFields_Emails_Subject_Delete>;
  read?: Maybe<FormsFields_Emails_Subject_Read>;
  update?: Maybe<FormsFields_Emails_Subject_Update>;
};

export type FormsFields_Emails_Subject_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Subject_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Subject_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Subject_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Fields = {
  create?: Maybe<FormsFields_Fields_Create>;
  delete?: Maybe<FormsFields_Fields_Delete>;
  read?: Maybe<FormsFields_Fields_Read>;
  update?: Maybe<FormsFields_Fields_Update>;
};

export type FormsFields_Fields_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Fields_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Fields_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Fields_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect = {
  create?: Maybe<FormsFields_Redirect_Create>;
  delete?: Maybe<FormsFields_Redirect_Delete>;
  fields?: Maybe<FormsFields_Redirect_Fields>;
  read?: Maybe<FormsFields_Redirect_Read>;
  update?: Maybe<FormsFields_Redirect_Update>;
};

export type FormsFields_Redirect_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect_Fields = {
  url?: Maybe<FormsFields_Redirect_Url>;
};

export type FormsFields_Redirect_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect_Url = {
  create?: Maybe<FormsFields_Redirect_Url_Create>;
  delete?: Maybe<FormsFields_Redirect_Url_Delete>;
  read?: Maybe<FormsFields_Redirect_Url_Read>;
  update?: Maybe<FormsFields_Redirect_Url_Update>;
};

export type FormsFields_Redirect_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_SubmitButtonLabel = {
  create?: Maybe<FormsFields_SubmitButtonLabel_Create>;
  delete?: Maybe<FormsFields_SubmitButtonLabel_Delete>;
  read?: Maybe<FormsFields_SubmitButtonLabel_Read>;
  update?: Maybe<FormsFields_SubmitButtonLabel_Update>;
};

export type FormsFields_SubmitButtonLabel_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_SubmitButtonLabel_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_SubmitButtonLabel_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_SubmitButtonLabel_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Title = {
  create?: Maybe<FormsFields_Title_Create>;
  delete?: Maybe<FormsFields_Title_Delete>;
  read?: Maybe<FormsFields_Title_Read>;
  update?: Maybe<FormsFields_Title_Update>;
};

export type FormsFields_Title_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Title_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Title_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Title_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_UpdatedAt = {
  create?: Maybe<FormsFields_UpdatedAt_Create>;
  delete?: Maybe<FormsFields_UpdatedAt_Delete>;
  read?: Maybe<FormsFields_UpdatedAt_Read>;
  update?: Maybe<FormsFields_UpdatedAt_Update>;
};

export type FormsFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type FormsReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormsReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormsUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormsUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Header = {
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
  createdAt?: Maybe<HeaderDocAccessFields_CreatedAt>;
  icon?: Maybe<HeaderDocAccessFields_Icon>;
  navButtons?: Maybe<HeaderDocAccessFields_NavButtons>;
  navItems?: Maybe<HeaderDocAccessFields_NavItems>;
  slogan?: Maybe<HeaderDocAccessFields_Slogan>;
  updatedAt?: Maybe<HeaderDocAccessFields_UpdatedAt>;
};

export type HeaderDocAccessFields_CreatedAt = {
  create?: Maybe<HeaderDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<HeaderDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<HeaderDocAccessFields_CreatedAt_Read>;
  update?: Maybe<HeaderDocAccessFields_CreatedAt_Update>;
};

export type HeaderDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_Icon = {
  create?: Maybe<HeaderDocAccessFields_Icon_Create>;
  delete?: Maybe<HeaderDocAccessFields_Icon_Delete>;
  read?: Maybe<HeaderDocAccessFields_Icon_Read>;
  update?: Maybe<HeaderDocAccessFields_Icon_Update>;
};

export type HeaderDocAccessFields_Icon_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_Icon_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_Icon_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_Icon_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons = {
  create?: Maybe<HeaderDocAccessFields_NavButtons_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavButtons_Delete>;
  fields?: Maybe<HeaderDocAccessFields_NavButtons_Fields>;
  read?: Maybe<HeaderDocAccessFields_NavButtons_Read>;
  update?: Maybe<HeaderDocAccessFields_NavButtons_Update>;
};

export type HeaderDocAccessFields_NavButtons_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Fields = {
  id?: Maybe<HeaderDocAccessFields_NavButtons_Id>;
  link?: Maybe<HeaderDocAccessFields_NavButtons_Link>;
};

export type HeaderDocAccessFields_NavButtons_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Id = {
  create?: Maybe<HeaderDocAccessFields_NavButtons_Id_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavButtons_Id_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavButtons_Id_Read>;
  update?: Maybe<HeaderDocAccessFields_NavButtons_Id_Update>;
};

export type HeaderDocAccessFields_NavButtons_Id_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Id_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Id_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Id_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link = {
  create?: Maybe<HeaderDocAccessFields_NavButtons_Link_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavButtons_Link_Delete>;
  fields?: Maybe<HeaderDocAccessFields_NavButtons_Link_Fields>;
  read?: Maybe<HeaderDocAccessFields_NavButtons_Link_Read>;
  update?: Maybe<HeaderDocAccessFields_NavButtons_Link_Update>;
};

export type HeaderDocAccessFields_NavButtons_Link_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Fields = {
  label?: Maybe<HeaderDocAccessFields_NavButtons_Link_Label>;
  newTab?: Maybe<HeaderDocAccessFields_NavButtons_Link_NewTab>;
  reference?: Maybe<HeaderDocAccessFields_NavButtons_Link_Reference>;
  type?: Maybe<HeaderDocAccessFields_NavButtons_Link_Type>;
  url?: Maybe<HeaderDocAccessFields_NavButtons_Link_Url>;
};

export type HeaderDocAccessFields_NavButtons_Link_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Label = {
  create?: Maybe<HeaderDocAccessFields_NavButtons_Link_Label_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavButtons_Link_Label_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavButtons_Link_Label_Read>;
  update?: Maybe<HeaderDocAccessFields_NavButtons_Link_Label_Update>;
};

export type HeaderDocAccessFields_NavButtons_Link_Label_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Label_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Label_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Label_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_NewTab = {
  create?: Maybe<HeaderDocAccessFields_NavButtons_Link_NewTab_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavButtons_Link_NewTab_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavButtons_Link_NewTab_Read>;
  update?: Maybe<HeaderDocAccessFields_NavButtons_Link_NewTab_Update>;
};

export type HeaderDocAccessFields_NavButtons_Link_NewTab_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_NewTab_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_NewTab_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_NewTab_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Reference = {
  create?: Maybe<HeaderDocAccessFields_NavButtons_Link_Reference_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavButtons_Link_Reference_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavButtons_Link_Reference_Read>;
  update?: Maybe<HeaderDocAccessFields_NavButtons_Link_Reference_Update>;
};

export type HeaderDocAccessFields_NavButtons_Link_Reference_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Reference_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Reference_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Reference_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Type = {
  create?: Maybe<HeaderDocAccessFields_NavButtons_Link_Type_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavButtons_Link_Type_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavButtons_Link_Type_Read>;
  update?: Maybe<HeaderDocAccessFields_NavButtons_Link_Type_Update>;
};

export type HeaderDocAccessFields_NavButtons_Link_Type_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Type_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Type_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Type_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Url = {
  create?: Maybe<HeaderDocAccessFields_NavButtons_Link_Url_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavButtons_Link_Url_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavButtons_Link_Url_Read>;
  update?: Maybe<HeaderDocAccessFields_NavButtons_Link_Url_Update>;
};

export type HeaderDocAccessFields_NavButtons_Link_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavButtons_Link_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems = {
  create?: Maybe<HeaderDocAccessFields_NavItems_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavItems_Delete>;
  fields?: Maybe<HeaderDocAccessFields_NavItems_Fields>;
  read?: Maybe<HeaderDocAccessFields_NavItems_Read>;
  update?: Maybe<HeaderDocAccessFields_NavItems_Update>;
};

export type HeaderDocAccessFields_NavItems_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Fields = {
  id?: Maybe<HeaderDocAccessFields_NavItems_Id>;
  link?: Maybe<HeaderDocAccessFields_NavItems_Link>;
};

export type HeaderDocAccessFields_NavItems_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Id = {
  create?: Maybe<HeaderDocAccessFields_NavItems_Id_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavItems_Id_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavItems_Id_Read>;
  update?: Maybe<HeaderDocAccessFields_NavItems_Id_Update>;
};

export type HeaderDocAccessFields_NavItems_Id_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Id_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Id_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Id_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link = {
  create?: Maybe<HeaderDocAccessFields_NavItems_Link_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavItems_Link_Delete>;
  fields?: Maybe<HeaderDocAccessFields_NavItems_Link_Fields>;
  read?: Maybe<HeaderDocAccessFields_NavItems_Link_Read>;
  update?: Maybe<HeaderDocAccessFields_NavItems_Link_Update>;
};

export type HeaderDocAccessFields_NavItems_Link_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Fields = {
  label?: Maybe<HeaderDocAccessFields_NavItems_Link_Label>;
  newTab?: Maybe<HeaderDocAccessFields_NavItems_Link_NewTab>;
  reference?: Maybe<HeaderDocAccessFields_NavItems_Link_Reference>;
  type?: Maybe<HeaderDocAccessFields_NavItems_Link_Type>;
  url?: Maybe<HeaderDocAccessFields_NavItems_Link_Url>;
};

export type HeaderDocAccessFields_NavItems_Link_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Label = {
  create?: Maybe<HeaderDocAccessFields_NavItems_Link_Label_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavItems_Link_Label_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavItems_Link_Label_Read>;
  update?: Maybe<HeaderDocAccessFields_NavItems_Link_Label_Update>;
};

export type HeaderDocAccessFields_NavItems_Link_Label_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Label_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Label_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Label_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_NewTab = {
  create?: Maybe<HeaderDocAccessFields_NavItems_Link_NewTab_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavItems_Link_NewTab_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavItems_Link_NewTab_Read>;
  update?: Maybe<HeaderDocAccessFields_NavItems_Link_NewTab_Update>;
};

export type HeaderDocAccessFields_NavItems_Link_NewTab_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_NewTab_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_NewTab_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_NewTab_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Reference = {
  create?: Maybe<HeaderDocAccessFields_NavItems_Link_Reference_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavItems_Link_Reference_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavItems_Link_Reference_Read>;
  update?: Maybe<HeaderDocAccessFields_NavItems_Link_Reference_Update>;
};

export type HeaderDocAccessFields_NavItems_Link_Reference_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Reference_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Reference_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Reference_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Type = {
  create?: Maybe<HeaderDocAccessFields_NavItems_Link_Type_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavItems_Link_Type_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavItems_Link_Type_Read>;
  update?: Maybe<HeaderDocAccessFields_NavItems_Link_Type_Update>;
};

export type HeaderDocAccessFields_NavItems_Link_Type_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Type_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Type_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Type_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Url = {
  create?: Maybe<HeaderDocAccessFields_NavItems_Link_Url_Create>;
  delete?: Maybe<HeaderDocAccessFields_NavItems_Link_Url_Delete>;
  read?: Maybe<HeaderDocAccessFields_NavItems_Link_Url_Read>;
  update?: Maybe<HeaderDocAccessFields_NavItems_Link_Url_Update>;
};

export type HeaderDocAccessFields_NavItems_Link_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_NavItems_Link_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_Slogan = {
  create?: Maybe<HeaderDocAccessFields_Slogan_Create>;
  delete?: Maybe<HeaderDocAccessFields_Slogan_Delete>;
  read?: Maybe<HeaderDocAccessFields_Slogan_Read>;
  update?: Maybe<HeaderDocAccessFields_Slogan_Update>;
};

export type HeaderDocAccessFields_Slogan_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_Slogan_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_Slogan_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_Slogan_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_UpdatedAt = {
  create?: Maybe<HeaderDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<HeaderDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<HeaderDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<HeaderDocAccessFields_UpdatedAt_Update>;
};

export type HeaderDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields = {
  createdAt?: Maybe<HeaderFields_CreatedAt>;
  icon?: Maybe<HeaderFields_Icon>;
  navButtons?: Maybe<HeaderFields_NavButtons>;
  navItems?: Maybe<HeaderFields_NavItems>;
  slogan?: Maybe<HeaderFields_Slogan>;
  updatedAt?: Maybe<HeaderFields_UpdatedAt>;
};

export type HeaderFields_CreatedAt = {
  create?: Maybe<HeaderFields_CreatedAt_Create>;
  delete?: Maybe<HeaderFields_CreatedAt_Delete>;
  read?: Maybe<HeaderFields_CreatedAt_Read>;
  update?: Maybe<HeaderFields_CreatedAt_Update>;
};

export type HeaderFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_Icon = {
  create?: Maybe<HeaderFields_Icon_Create>;
  delete?: Maybe<HeaderFields_Icon_Delete>;
  read?: Maybe<HeaderFields_Icon_Read>;
  update?: Maybe<HeaderFields_Icon_Update>;
};

export type HeaderFields_Icon_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_Icon_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_Icon_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_Icon_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons = {
  create?: Maybe<HeaderFields_NavButtons_Create>;
  delete?: Maybe<HeaderFields_NavButtons_Delete>;
  fields?: Maybe<HeaderFields_NavButtons_Fields>;
  read?: Maybe<HeaderFields_NavButtons_Read>;
  update?: Maybe<HeaderFields_NavButtons_Update>;
};

export type HeaderFields_NavButtons_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Fields = {
  id?: Maybe<HeaderFields_NavButtons_Id>;
  link?: Maybe<HeaderFields_NavButtons_Link>;
};

export type HeaderFields_NavButtons_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Id = {
  create?: Maybe<HeaderFields_NavButtons_Id_Create>;
  delete?: Maybe<HeaderFields_NavButtons_Id_Delete>;
  read?: Maybe<HeaderFields_NavButtons_Id_Read>;
  update?: Maybe<HeaderFields_NavButtons_Id_Update>;
};

export type HeaderFields_NavButtons_Id_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Id_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Id_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Id_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link = {
  create?: Maybe<HeaderFields_NavButtons_Link_Create>;
  delete?: Maybe<HeaderFields_NavButtons_Link_Delete>;
  fields?: Maybe<HeaderFields_NavButtons_Link_Fields>;
  read?: Maybe<HeaderFields_NavButtons_Link_Read>;
  update?: Maybe<HeaderFields_NavButtons_Link_Update>;
};

export type HeaderFields_NavButtons_Link_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Fields = {
  label?: Maybe<HeaderFields_NavButtons_Link_Label>;
  newTab?: Maybe<HeaderFields_NavButtons_Link_NewTab>;
  reference?: Maybe<HeaderFields_NavButtons_Link_Reference>;
  type?: Maybe<HeaderFields_NavButtons_Link_Type>;
  url?: Maybe<HeaderFields_NavButtons_Link_Url>;
};

export type HeaderFields_NavButtons_Link_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Label = {
  create?: Maybe<HeaderFields_NavButtons_Link_Label_Create>;
  delete?: Maybe<HeaderFields_NavButtons_Link_Label_Delete>;
  read?: Maybe<HeaderFields_NavButtons_Link_Label_Read>;
  update?: Maybe<HeaderFields_NavButtons_Link_Label_Update>;
};

export type HeaderFields_NavButtons_Link_Label_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Label_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Label_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Label_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_NewTab = {
  create?: Maybe<HeaderFields_NavButtons_Link_NewTab_Create>;
  delete?: Maybe<HeaderFields_NavButtons_Link_NewTab_Delete>;
  read?: Maybe<HeaderFields_NavButtons_Link_NewTab_Read>;
  update?: Maybe<HeaderFields_NavButtons_Link_NewTab_Update>;
};

export type HeaderFields_NavButtons_Link_NewTab_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_NewTab_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_NewTab_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_NewTab_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Reference = {
  create?: Maybe<HeaderFields_NavButtons_Link_Reference_Create>;
  delete?: Maybe<HeaderFields_NavButtons_Link_Reference_Delete>;
  read?: Maybe<HeaderFields_NavButtons_Link_Reference_Read>;
  update?: Maybe<HeaderFields_NavButtons_Link_Reference_Update>;
};

export type HeaderFields_NavButtons_Link_Reference_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Reference_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Reference_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Reference_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Type = {
  create?: Maybe<HeaderFields_NavButtons_Link_Type_Create>;
  delete?: Maybe<HeaderFields_NavButtons_Link_Type_Delete>;
  read?: Maybe<HeaderFields_NavButtons_Link_Type_Read>;
  update?: Maybe<HeaderFields_NavButtons_Link_Type_Update>;
};

export type HeaderFields_NavButtons_Link_Type_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Type_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Type_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Type_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Url = {
  create?: Maybe<HeaderFields_NavButtons_Link_Url_Create>;
  delete?: Maybe<HeaderFields_NavButtons_Link_Url_Delete>;
  read?: Maybe<HeaderFields_NavButtons_Link_Url_Read>;
  update?: Maybe<HeaderFields_NavButtons_Link_Url_Update>;
};

export type HeaderFields_NavButtons_Link_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavButtons_Link_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems = {
  create?: Maybe<HeaderFields_NavItems_Create>;
  delete?: Maybe<HeaderFields_NavItems_Delete>;
  fields?: Maybe<HeaderFields_NavItems_Fields>;
  read?: Maybe<HeaderFields_NavItems_Read>;
  update?: Maybe<HeaderFields_NavItems_Update>;
};

export type HeaderFields_NavItems_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Fields = {
  id?: Maybe<HeaderFields_NavItems_Id>;
  link?: Maybe<HeaderFields_NavItems_Link>;
};

export type HeaderFields_NavItems_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Id = {
  create?: Maybe<HeaderFields_NavItems_Id_Create>;
  delete?: Maybe<HeaderFields_NavItems_Id_Delete>;
  read?: Maybe<HeaderFields_NavItems_Id_Read>;
  update?: Maybe<HeaderFields_NavItems_Id_Update>;
};

export type HeaderFields_NavItems_Id_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Id_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Id_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Id_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link = {
  create?: Maybe<HeaderFields_NavItems_Link_Create>;
  delete?: Maybe<HeaderFields_NavItems_Link_Delete>;
  fields?: Maybe<HeaderFields_NavItems_Link_Fields>;
  read?: Maybe<HeaderFields_NavItems_Link_Read>;
  update?: Maybe<HeaderFields_NavItems_Link_Update>;
};

export type HeaderFields_NavItems_Link_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Fields = {
  label?: Maybe<HeaderFields_NavItems_Link_Label>;
  newTab?: Maybe<HeaderFields_NavItems_Link_NewTab>;
  reference?: Maybe<HeaderFields_NavItems_Link_Reference>;
  type?: Maybe<HeaderFields_NavItems_Link_Type>;
  url?: Maybe<HeaderFields_NavItems_Link_Url>;
};

export type HeaderFields_NavItems_Link_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Label = {
  create?: Maybe<HeaderFields_NavItems_Link_Label_Create>;
  delete?: Maybe<HeaderFields_NavItems_Link_Label_Delete>;
  read?: Maybe<HeaderFields_NavItems_Link_Label_Read>;
  update?: Maybe<HeaderFields_NavItems_Link_Label_Update>;
};

export type HeaderFields_NavItems_Link_Label_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Label_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Label_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Label_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_NewTab = {
  create?: Maybe<HeaderFields_NavItems_Link_NewTab_Create>;
  delete?: Maybe<HeaderFields_NavItems_Link_NewTab_Delete>;
  read?: Maybe<HeaderFields_NavItems_Link_NewTab_Read>;
  update?: Maybe<HeaderFields_NavItems_Link_NewTab_Update>;
};

export type HeaderFields_NavItems_Link_NewTab_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_NewTab_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_NewTab_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_NewTab_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Reference = {
  create?: Maybe<HeaderFields_NavItems_Link_Reference_Create>;
  delete?: Maybe<HeaderFields_NavItems_Link_Reference_Delete>;
  read?: Maybe<HeaderFields_NavItems_Link_Reference_Read>;
  update?: Maybe<HeaderFields_NavItems_Link_Reference_Update>;
};

export type HeaderFields_NavItems_Link_Reference_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Reference_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Reference_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Reference_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Type = {
  create?: Maybe<HeaderFields_NavItems_Link_Type_Create>;
  delete?: Maybe<HeaderFields_NavItems_Link_Type_Delete>;
  read?: Maybe<HeaderFields_NavItems_Link_Type_Read>;
  update?: Maybe<HeaderFields_NavItems_Link_Type_Update>;
};

export type HeaderFields_NavItems_Link_Type_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Type_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Type_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Type_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Url = {
  create?: Maybe<HeaderFields_NavItems_Link_Url_Create>;
  delete?: Maybe<HeaderFields_NavItems_Link_Url_Delete>;
  read?: Maybe<HeaderFields_NavItems_Link_Url_Read>;
  update?: Maybe<HeaderFields_NavItems_Link_Url_Update>;
};

export type HeaderFields_NavItems_Link_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_NavItems_Link_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_Slogan = {
  create?: Maybe<HeaderFields_Slogan_Create>;
  delete?: Maybe<HeaderFields_Slogan_Delete>;
  read?: Maybe<HeaderFields_Slogan_Read>;
  update?: Maybe<HeaderFields_Slogan_Update>;
};

export type HeaderFields_Slogan_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_Slogan_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_Slogan_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_Slogan_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_UpdatedAt = {
  create?: Maybe<HeaderFields_UpdatedAt_Create>;
  delete?: Maybe<HeaderFields_UpdatedAt_Delete>;
  read?: Maybe<HeaderFields_UpdatedAt_Read>;
  update?: Maybe<HeaderFields_UpdatedAt_Update>;
};

export type HeaderFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type HeaderReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeaderReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeaderUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeaderUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Header_NavButtons = {
  id?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Header_NavButtons_Link>;
};

export type Header_NavButtons_Link = {
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
  relationTo?: Maybe<Header_NavButtons_Link_Reference_RelationTo>;
  value?: Maybe<Header_NavButtons_Link_Reference>;
};

export enum Header_NavButtons_Link_Type {
  Custom = 'custom',
  Reference = 'reference'
}

export type Header_NavItems = {
  id?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Header_NavItems_Link>;
};

export type Header_NavItems_Link = {
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
  relationTo?: Maybe<Header_NavItems_Link_Reference_RelationTo>;
  value?: Maybe<Header_NavItems_Link_Reference>;
};

export enum Header_NavItems_Link_Type {
  Custom = 'custom',
  Reference = 'reference'
}

export type InformationBanner = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  items?: Maybe<Array<InformationBanner_Items>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type InformationBannerDocAccessFields = {
  createdAt?: Maybe<InformationBannerDocAccessFields_CreatedAt>;
  items?: Maybe<InformationBannerDocAccessFields_Items>;
  updatedAt?: Maybe<InformationBannerDocAccessFields_UpdatedAt>;
};

export type InformationBannerDocAccessFields_CreatedAt = {
  create?: Maybe<InformationBannerDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<InformationBannerDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<InformationBannerDocAccessFields_CreatedAt_Read>;
  update?: Maybe<InformationBannerDocAccessFields_CreatedAt_Update>;
};

export type InformationBannerDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items = {
  create?: Maybe<InformationBannerDocAccessFields_Items_Create>;
  delete?: Maybe<InformationBannerDocAccessFields_Items_Delete>;
  fields?: Maybe<InformationBannerDocAccessFields_Items_Fields>;
  read?: Maybe<InformationBannerDocAccessFields_Items_Read>;
  update?: Maybe<InformationBannerDocAccessFields_Items_Update>;
};

export type InformationBannerDocAccessFields_Items_Create = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Fields = {
  icon?: Maybe<InformationBannerDocAccessFields_Items_Icon>;
  id?: Maybe<InformationBannerDocAccessFields_Items_Id>;
  text?: Maybe<InformationBannerDocAccessFields_Items_Text>;
};

export type InformationBannerDocAccessFields_Items_Read = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Update = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Icon = {
  create?: Maybe<InformationBannerDocAccessFields_Items_Icon_Create>;
  delete?: Maybe<InformationBannerDocAccessFields_Items_Icon_Delete>;
  read?: Maybe<InformationBannerDocAccessFields_Items_Icon_Read>;
  update?: Maybe<InformationBannerDocAccessFields_Items_Icon_Update>;
};

export type InformationBannerDocAccessFields_Items_Icon_Create = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Icon_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Icon_Read = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Icon_Update = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Id = {
  create?: Maybe<InformationBannerDocAccessFields_Items_Id_Create>;
  delete?: Maybe<InformationBannerDocAccessFields_Items_Id_Delete>;
  read?: Maybe<InformationBannerDocAccessFields_Items_Id_Read>;
  update?: Maybe<InformationBannerDocAccessFields_Items_Id_Update>;
};

export type InformationBannerDocAccessFields_Items_Id_Create = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Id_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Id_Read = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Id_Update = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Text = {
  create?: Maybe<InformationBannerDocAccessFields_Items_Text_Create>;
  delete?: Maybe<InformationBannerDocAccessFields_Items_Text_Delete>;
  read?: Maybe<InformationBannerDocAccessFields_Items_Text_Read>;
  update?: Maybe<InformationBannerDocAccessFields_Items_Text_Update>;
};

export type InformationBannerDocAccessFields_Items_Text_Create = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Text_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Text_Read = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_Items_Text_Update = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_UpdatedAt = {
  create?: Maybe<InformationBannerDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<InformationBannerDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<InformationBannerDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<InformationBannerDocAccessFields_UpdatedAt_Update>;
};

export type InformationBannerDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields = {
  createdAt?: Maybe<InformationBannerFields_CreatedAt>;
  items?: Maybe<InformationBannerFields_Items>;
  updatedAt?: Maybe<InformationBannerFields_UpdatedAt>;
};

export type InformationBannerFields_CreatedAt = {
  create?: Maybe<InformationBannerFields_CreatedAt_Create>;
  delete?: Maybe<InformationBannerFields_CreatedAt_Delete>;
  read?: Maybe<InformationBannerFields_CreatedAt_Read>;
  update?: Maybe<InformationBannerFields_CreatedAt_Update>;
};

export type InformationBannerFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items = {
  create?: Maybe<InformationBannerFields_Items_Create>;
  delete?: Maybe<InformationBannerFields_Items_Delete>;
  fields?: Maybe<InformationBannerFields_Items_Fields>;
  read?: Maybe<InformationBannerFields_Items_Read>;
  update?: Maybe<InformationBannerFields_Items_Update>;
};

export type InformationBannerFields_Items_Create = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Fields = {
  icon?: Maybe<InformationBannerFields_Items_Icon>;
  id?: Maybe<InformationBannerFields_Items_Id>;
  text?: Maybe<InformationBannerFields_Items_Text>;
};

export type InformationBannerFields_Items_Read = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Update = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Icon = {
  create?: Maybe<InformationBannerFields_Items_Icon_Create>;
  delete?: Maybe<InformationBannerFields_Items_Icon_Delete>;
  read?: Maybe<InformationBannerFields_Items_Icon_Read>;
  update?: Maybe<InformationBannerFields_Items_Icon_Update>;
};

export type InformationBannerFields_Items_Icon_Create = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Icon_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Icon_Read = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Icon_Update = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Id = {
  create?: Maybe<InformationBannerFields_Items_Id_Create>;
  delete?: Maybe<InformationBannerFields_Items_Id_Delete>;
  read?: Maybe<InformationBannerFields_Items_Id_Read>;
  update?: Maybe<InformationBannerFields_Items_Id_Update>;
};

export type InformationBannerFields_Items_Id_Create = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Id_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Id_Read = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Id_Update = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Text = {
  create?: Maybe<InformationBannerFields_Items_Text_Create>;
  delete?: Maybe<InformationBannerFields_Items_Text_Delete>;
  read?: Maybe<InformationBannerFields_Items_Text_Read>;
  update?: Maybe<InformationBannerFields_Items_Text_Update>;
};

export type InformationBannerFields_Items_Text_Create = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Text_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Text_Read = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_Items_Text_Update = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_UpdatedAt = {
  create?: Maybe<InformationBannerFields_UpdatedAt_Create>;
  delete?: Maybe<InformationBannerFields_UpdatedAt_Delete>;
  read?: Maybe<InformationBannerFields_UpdatedAt_Read>;
  update?: Maybe<InformationBannerFields_UpdatedAt_Update>;
};

export type InformationBannerFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type InformationBannerReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type InformationBannerReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type InformationBannerUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type InformationBannerUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type InformationBanner_Items = {
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
  alt: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  focalX?: Maybe<Scalars['Float']['output']>;
  focalY?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  mimeType?: Maybe<Scalars['String']['output']>;
  sizes?: Maybe<Media_Sizes>;
  thumbnailURL?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type MediaBlock = {
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
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDocAccessFields = {
  alt?: Maybe<MediaDocAccessFields_Alt>;
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  focalX?: Maybe<MediaDocAccessFields_FocalX>;
  focalY?: Maybe<MediaDocAccessFields_FocalY>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  sizes?: Maybe<MediaDocAccessFields_Sizes>;
  thumbnailURL?: Maybe<MediaDocAccessFields_ThumbnailUrl>;
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
  url?: Maybe<MediaDocAccessFields_Url>;
  width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Alt = {
  create?: Maybe<MediaDocAccessFields_Alt_Create>;
  delete?: Maybe<MediaDocAccessFields_Alt_Delete>;
  read?: Maybe<MediaDocAccessFields_Alt_Read>;
  update?: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt = {
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename = {
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize = {
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX = {
  create?: Maybe<MediaDocAccessFields_FocalX_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalX_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalX_Read>;
  update?: Maybe<MediaDocAccessFields_FocalX_Update>;
};

export type MediaDocAccessFields_FocalX_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY = {
  create?: Maybe<MediaDocAccessFields_FocalY_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalY_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalY_Read>;
  update?: Maybe<MediaDocAccessFields_FocalY_Update>;
};

export type MediaDocAccessFields_FocalY_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height = {
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType = {
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes = {
  create?: Maybe<MediaDocAccessFields_Sizes_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Update>;
};

export type MediaDocAccessFields_Sizes_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Fields = {
  categoryPreview?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview>;
  thumbnail?: Maybe<MediaDocAccessFields_Sizes_Thumbnail>;
};

export type MediaDocAccessFields_Sizes_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview = {
  create?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Update>;
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Fields = {
  filename?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Width>;
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Filename = {
  create?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Filename_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Filename_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Filename_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Filename_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Filesize = {
  create?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Filesize_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Filesize_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Filesize_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Filesize_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Height = {
  create?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Height_Update>;
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Height_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Height_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Height_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Height_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_MimeType = {
  create?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_CategoryPreview_MimeType_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_MimeType_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_MimeType_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_MimeType_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Url = {
  create?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Url_Update>;
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Width = {
  create?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_CategoryPreview_Width_Update>;
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Width_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Width_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Width_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_CategoryPreview_Width_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail = {
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Fields = {
  filename?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename = {
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize = {
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height = {
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType = {
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url = {
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width = {
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl = {
  create?: Maybe<MediaDocAccessFields_ThumbnailUrl_Create>;
  delete?: Maybe<MediaDocAccessFields_ThumbnailUrl_Delete>;
  read?: Maybe<MediaDocAccessFields_ThumbnailUrl_Read>;
  update?: Maybe<MediaDocAccessFields_ThumbnailUrl_Update>;
};

export type MediaDocAccessFields_ThumbnailUrl_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt = {
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url = {
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width = {
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields = {
  alt?: Maybe<MediaFields_Alt>;
  createdAt?: Maybe<MediaFields_CreatedAt>;
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  focalX?: Maybe<MediaFields_FocalX>;
  focalY?: Maybe<MediaFields_FocalY>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  sizes?: Maybe<MediaFields_Sizes>;
  thumbnailURL?: Maybe<MediaFields_ThumbnailUrl>;
  updatedAt?: Maybe<MediaFields_UpdatedAt>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
};

export type MediaFields_Alt = {
  create?: Maybe<MediaFields_Alt_Create>;
  delete?: Maybe<MediaFields_Alt_Delete>;
  read?: Maybe<MediaFields_Alt_Read>;
  update?: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt = {
  create?: Maybe<MediaFields_CreatedAt_Create>;
  delete?: Maybe<MediaFields_CreatedAt_Delete>;
  read?: Maybe<MediaFields_CreatedAt_Read>;
  update?: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename = {
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize = {
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX = {
  create?: Maybe<MediaFields_FocalX_Create>;
  delete?: Maybe<MediaFields_FocalX_Delete>;
  read?: Maybe<MediaFields_FocalX_Read>;
  update?: Maybe<MediaFields_FocalX_Update>;
};

export type MediaFields_FocalX_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY = {
  create?: Maybe<MediaFields_FocalY_Create>;
  delete?: Maybe<MediaFields_FocalY_Delete>;
  read?: Maybe<MediaFields_FocalY_Read>;
  update?: Maybe<MediaFields_FocalY_Update>;
};

export type MediaFields_FocalY_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height = {
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType = {
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes = {
  create?: Maybe<MediaFields_Sizes_Create>;
  delete?: Maybe<MediaFields_Sizes_Delete>;
  fields?: Maybe<MediaFields_Sizes_Fields>;
  read?: Maybe<MediaFields_Sizes_Read>;
  update?: Maybe<MediaFields_Sizes_Update>;
};

export type MediaFields_Sizes_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Fields = {
  categoryPreview?: Maybe<MediaFields_Sizes_CategoryPreview>;
  thumbnail?: Maybe<MediaFields_Sizes_Thumbnail>;
};

export type MediaFields_Sizes_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview = {
  create?: Maybe<MediaFields_Sizes_CategoryPreview_Create>;
  delete?: Maybe<MediaFields_Sizes_CategoryPreview_Delete>;
  fields?: Maybe<MediaFields_Sizes_CategoryPreview_Fields>;
  read?: Maybe<MediaFields_Sizes_CategoryPreview_Read>;
  update?: Maybe<MediaFields_Sizes_CategoryPreview_Update>;
};

export type MediaFields_Sizes_CategoryPreview_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Fields = {
  filename?: Maybe<MediaFields_Sizes_CategoryPreview_Filename>;
  filesize?: Maybe<MediaFields_Sizes_CategoryPreview_Filesize>;
  height?: Maybe<MediaFields_Sizes_CategoryPreview_Height>;
  mimeType?: Maybe<MediaFields_Sizes_CategoryPreview_MimeType>;
  url?: Maybe<MediaFields_Sizes_CategoryPreview_Url>;
  width?: Maybe<MediaFields_Sizes_CategoryPreview_Width>;
};

export type MediaFields_Sizes_CategoryPreview_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Filename = {
  create?: Maybe<MediaFields_Sizes_CategoryPreview_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_CategoryPreview_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_CategoryPreview_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_CategoryPreview_Filename_Update>;
};

export type MediaFields_Sizes_CategoryPreview_Filename_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Filename_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Filename_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Filename_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Filesize = {
  create?: Maybe<MediaFields_Sizes_CategoryPreview_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_CategoryPreview_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_CategoryPreview_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_CategoryPreview_Filesize_Update>;
};

export type MediaFields_Sizes_CategoryPreview_Filesize_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Filesize_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Filesize_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Filesize_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Height = {
  create?: Maybe<MediaFields_Sizes_CategoryPreview_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_CategoryPreview_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_CategoryPreview_Height_Read>;
  update?: Maybe<MediaFields_Sizes_CategoryPreview_Height_Update>;
};

export type MediaFields_Sizes_CategoryPreview_Height_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Height_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Height_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Height_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_MimeType = {
  create?: Maybe<MediaFields_Sizes_CategoryPreview_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_CategoryPreview_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_CategoryPreview_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_CategoryPreview_MimeType_Update>;
};

export type MediaFields_Sizes_CategoryPreview_MimeType_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_MimeType_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_MimeType_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_MimeType_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Url = {
  create?: Maybe<MediaFields_Sizes_CategoryPreview_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_CategoryPreview_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_CategoryPreview_Url_Read>;
  update?: Maybe<MediaFields_Sizes_CategoryPreview_Url_Update>;
};

export type MediaFields_Sizes_CategoryPreview_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Width = {
  create?: Maybe<MediaFields_Sizes_CategoryPreview_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_CategoryPreview_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_CategoryPreview_Width_Read>;
  update?: Maybe<MediaFields_Sizes_CategoryPreview_Width_Update>;
};

export type MediaFields_Sizes_CategoryPreview_Width_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Width_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Width_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_CategoryPreview_Width_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail = {
  create?: Maybe<MediaFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<MediaFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Update>;
};

export type MediaFields_Sizes_Thumbnail_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Fields = {
  filename?: Maybe<MediaFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<MediaFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<MediaFields_Sizes_Thumbnail_Url>;
  width?: Maybe<MediaFields_Sizes_Thumbnail_Width>;
};

export type MediaFields_Sizes_Thumbnail_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename = {
  create?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filename_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize = {
  create?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filesize_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height = {
  create?: Maybe<MediaFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaFields_Sizes_Thumbnail_Height_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType = {
  create?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaFields_Sizes_Thumbnail_MimeType_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url = {
  create?: Maybe<MediaFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaFields_Sizes_Thumbnail_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width = {
  create?: Maybe<MediaFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaFields_Sizes_Thumbnail_Width_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl = {
  create?: Maybe<MediaFields_ThumbnailUrl_Create>;
  delete?: Maybe<MediaFields_ThumbnailUrl_Delete>;
  read?: Maybe<MediaFields_ThumbnailUrl_Read>;
  update?: Maybe<MediaFields_ThumbnailUrl_Update>;
};

export type MediaFields_ThumbnailUrl_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt = {
  create?: Maybe<MediaFields_UpdatedAt_Create>;
  delete?: Maybe<MediaFields_UpdatedAt_Delete>;
  read?: Maybe<MediaFields_UpdatedAt_Read>;
  update?: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url = {
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width = {
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media_Sizes = {
  categoryPreview?: Maybe<Media_Sizes_CategoryPreview>;
  thumbnail?: Maybe<Media_Sizes_Thumbnail>;
};

export type Media_Sizes_CategoryPreview = {
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Thumbnail = {
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
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

export type Media_Sizes__CategoryPreview__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__CategoryPreview__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__CategoryPreview__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__CategoryPreview__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__CategoryPreview__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__CategoryPreview__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
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
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__categoryPreview__filename?: InputMaybe<Media_Sizes__CategoryPreview__Filename_Operator>;
  sizes__categoryPreview__filesize?: InputMaybe<Media_Sizes__CategoryPreview__Filesize_Operator>;
  sizes__categoryPreview__height?: InputMaybe<Media_Sizes__CategoryPreview__Height_Operator>;
  sizes__categoryPreview__mimeType?: InputMaybe<Media_Sizes__CategoryPreview__MimeType_Operator>;
  sizes__categoryPreview__url?: InputMaybe<Media_Sizes__CategoryPreview__Url_Operator>;
  sizes__categoryPreview__width?: InputMaybe<Media_Sizes__CategoryPreview__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__categoryPreview__filename?: InputMaybe<Media_Sizes__CategoryPreview__Filename_Operator>;
  sizes__categoryPreview__filesize?: InputMaybe<Media_Sizes__CategoryPreview__Filesize_Operator>;
  sizes__categoryPreview__height?: InputMaybe<Media_Sizes__CategoryPreview__Height_Operator>;
  sizes__categoryPreview__mimeType?: InputMaybe<Media_Sizes__CategoryPreview__MimeType_Operator>;
  sizes__categoryPreview__url?: InputMaybe<Media_Sizes__CategoryPreview__Url_Operator>;
  sizes__categoryPreview__width?: InputMaybe<Media_Sizes__CategoryPreview__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__categoryPreview__filename?: InputMaybe<Media_Sizes__CategoryPreview__Filename_Operator>;
  sizes__categoryPreview__filesize?: InputMaybe<Media_Sizes__CategoryPreview__Filesize_Operator>;
  sizes__categoryPreview__height?: InputMaybe<Media_Sizes__CategoryPreview__Height_Operator>;
  sizes__categoryPreview__mimeType?: InputMaybe<Media_Sizes__CategoryPreview__MimeType_Operator>;
  sizes__categoryPreview__url?: InputMaybe<Media_Sizes__CategoryPreview__Url_Operator>;
  sizes__categoryPreview__width?: InputMaybe<Media_Sizes__CategoryPreview__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
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
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['JSON']['output']>;
};


export type MessageMessageArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
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
  Eur = 'EUR'
}

export enum OrderUpdate_Status_MutationInput {
  Cancelled = 'cancelled',
  Completed = 'completed',
  Processing = 'processing',
  Refunded = 'refunded'
}

export type Order_Items = {
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
  Eur = 'EUR'
}

export enum Order_Currency_Input {
  Eur = 'EUR'
}

export enum Order_Currency_MutationInput {
  Eur = 'EUR'
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
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersDocAccessFields = {
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
  create?: Maybe<OrdersDocAccessFields_Amount_Create>;
  delete?: Maybe<OrdersDocAccessFields_Amount_Delete>;
  read?: Maybe<OrdersDocAccessFields_Amount_Read>;
  update?: Maybe<OrdersDocAccessFields_Amount_Update>;
};

export type OrdersDocAccessFields_Amount_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Amount_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Amount_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Amount_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CreatedAt = {
  create?: Maybe<OrdersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<OrdersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<OrdersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<OrdersDocAccessFields_CreatedAt_Update>;
};

export type OrdersDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Currency = {
  create?: Maybe<OrdersDocAccessFields_Currency_Create>;
  delete?: Maybe<OrdersDocAccessFields_Currency_Delete>;
  read?: Maybe<OrdersDocAccessFields_Currency_Read>;
  update?: Maybe<OrdersDocAccessFields_Currency_Update>;
};

export type OrdersDocAccessFields_Currency_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Currency_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Currency_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Currency_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Customer = {
  create?: Maybe<OrdersDocAccessFields_Customer_Create>;
  delete?: Maybe<OrdersDocAccessFields_Customer_Delete>;
  read?: Maybe<OrdersDocAccessFields_Customer_Read>;
  update?: Maybe<OrdersDocAccessFields_Customer_Update>;
};

export type OrdersDocAccessFields_CustomerEmail = {
  create?: Maybe<OrdersDocAccessFields_CustomerEmail_Create>;
  delete?: Maybe<OrdersDocAccessFields_CustomerEmail_Delete>;
  read?: Maybe<OrdersDocAccessFields_CustomerEmail_Read>;
  update?: Maybe<OrdersDocAccessFields_CustomerEmail_Update>;
};

export type OrdersDocAccessFields_CustomerEmail_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CustomerEmail_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CustomerEmail_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CustomerEmail_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Customer_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Customer_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Customer_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Customer_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items = {
  create?: Maybe<OrdersDocAccessFields_Items_Create>;
  delete?: Maybe<OrdersDocAccessFields_Items_Delete>;
  fields?: Maybe<OrdersDocAccessFields_Items_Fields>;
  read?: Maybe<OrdersDocAccessFields_Items_Read>;
  update?: Maybe<OrdersDocAccessFields_Items_Update>;
};

export type OrdersDocAccessFields_Items_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Fields = {
  id?: Maybe<OrdersDocAccessFields_Items_Id>;
  product?: Maybe<OrdersDocAccessFields_Items_Product>;
  quantity?: Maybe<OrdersDocAccessFields_Items_Quantity>;
  variant?: Maybe<OrdersDocAccessFields_Items_Variant>;
};

export type OrdersDocAccessFields_Items_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Id = {
  create?: Maybe<OrdersDocAccessFields_Items_Id_Create>;
  delete?: Maybe<OrdersDocAccessFields_Items_Id_Delete>;
  read?: Maybe<OrdersDocAccessFields_Items_Id_Read>;
  update?: Maybe<OrdersDocAccessFields_Items_Id_Update>;
};

export type OrdersDocAccessFields_Items_Id_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Id_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Id_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Id_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Product = {
  create?: Maybe<OrdersDocAccessFields_Items_Product_Create>;
  delete?: Maybe<OrdersDocAccessFields_Items_Product_Delete>;
  read?: Maybe<OrdersDocAccessFields_Items_Product_Read>;
  update?: Maybe<OrdersDocAccessFields_Items_Product_Update>;
};

export type OrdersDocAccessFields_Items_Product_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Product_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Product_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Product_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Quantity = {
  create?: Maybe<OrdersDocAccessFields_Items_Quantity_Create>;
  delete?: Maybe<OrdersDocAccessFields_Items_Quantity_Delete>;
  read?: Maybe<OrdersDocAccessFields_Items_Quantity_Read>;
  update?: Maybe<OrdersDocAccessFields_Items_Quantity_Update>;
};

export type OrdersDocAccessFields_Items_Quantity_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Quantity_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Quantity_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Quantity_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Variant = {
  create?: Maybe<OrdersDocAccessFields_Items_Variant_Create>;
  delete?: Maybe<OrdersDocAccessFields_Items_Variant_Delete>;
  read?: Maybe<OrdersDocAccessFields_Items_Variant_Read>;
  update?: Maybe<OrdersDocAccessFields_Items_Variant_Update>;
};

export type OrdersDocAccessFields_Items_Variant_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Variant_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Variant_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Variant_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress = {
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_Delete>;
  fields?: Maybe<OrdersDocAccessFields_ShippingAddress_Fields>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Fields = {
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
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_AddressLine1 = {
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_AddressLine1_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_AddressLine1_Delete>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_AddressLine1_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_AddressLine1_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_AddressLine1_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_AddressLine1_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_AddressLine1_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_AddressLine1_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_AddressLine2 = {
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_AddressLine2_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_AddressLine2_Delete>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_AddressLine2_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_AddressLine2_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_AddressLine2_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_AddressLine2_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_AddressLine2_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_AddressLine2_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_City = {
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_City_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_City_Delete>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_City_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_City_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_City_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_City_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_City_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_City_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Company = {
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_Company_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_Company_Delete>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_Company_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_Company_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_Company_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Company_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Company_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Company_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Country = {
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_Country_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_Country_Delete>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_Country_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_Country_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_Country_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Country_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Country_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Country_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_FirstName = {
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_FirstName_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_FirstName_Delete>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_FirstName_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_FirstName_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_FirstName_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_FirstName_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_FirstName_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_FirstName_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_LastName = {
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_LastName_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_LastName_Delete>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_LastName_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_LastName_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_LastName_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_LastName_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_LastName_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_LastName_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Phone = {
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_Phone_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_Phone_Delete>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_Phone_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_Phone_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_Phone_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Phone_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Phone_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Phone_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_PostalCode = {
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_PostalCode_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_PostalCode_Delete>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_PostalCode_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_PostalCode_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_PostalCode_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_PostalCode_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_PostalCode_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_PostalCode_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_State = {
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_State_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_State_Delete>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_State_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_State_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_State_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_State_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_State_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_State_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Title = {
  create?: Maybe<OrdersDocAccessFields_ShippingAddress_Title_Create>;
  delete?: Maybe<OrdersDocAccessFields_ShippingAddress_Title_Delete>;
  read?: Maybe<OrdersDocAccessFields_ShippingAddress_Title_Read>;
  update?: Maybe<OrdersDocAccessFields_ShippingAddress_Title_Update>;
};

export type OrdersDocAccessFields_ShippingAddress_Title_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Title_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Title_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_ShippingAddress_Title_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Status = {
  create?: Maybe<OrdersDocAccessFields_Status_Create>;
  delete?: Maybe<OrdersDocAccessFields_Status_Delete>;
  read?: Maybe<OrdersDocAccessFields_Status_Read>;
  update?: Maybe<OrdersDocAccessFields_Status_Update>;
};

export type OrdersDocAccessFields_Status_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Status_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Status_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Status_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Transactions = {
  create?: Maybe<OrdersDocAccessFields_Transactions_Create>;
  delete?: Maybe<OrdersDocAccessFields_Transactions_Delete>;
  read?: Maybe<OrdersDocAccessFields_Transactions_Read>;
  update?: Maybe<OrdersDocAccessFields_Transactions_Update>;
};

export type OrdersDocAccessFields_Transactions_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Transactions_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Transactions_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Transactions_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_UpdatedAt = {
  create?: Maybe<OrdersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<OrdersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<OrdersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<OrdersDocAccessFields_UpdatedAt_Update>;
};

export type OrdersDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields = {
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
  create?: Maybe<OrdersFields_Amount_Create>;
  delete?: Maybe<OrdersFields_Amount_Delete>;
  read?: Maybe<OrdersFields_Amount_Read>;
  update?: Maybe<OrdersFields_Amount_Update>;
};

export type OrdersFields_Amount_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Amount_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Amount_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Amount_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CreatedAt = {
  create?: Maybe<OrdersFields_CreatedAt_Create>;
  delete?: Maybe<OrdersFields_CreatedAt_Delete>;
  read?: Maybe<OrdersFields_CreatedAt_Read>;
  update?: Maybe<OrdersFields_CreatedAt_Update>;
};

export type OrdersFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Currency = {
  create?: Maybe<OrdersFields_Currency_Create>;
  delete?: Maybe<OrdersFields_Currency_Delete>;
  read?: Maybe<OrdersFields_Currency_Read>;
  update?: Maybe<OrdersFields_Currency_Update>;
};

export type OrdersFields_Currency_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Currency_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Currency_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Currency_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Customer = {
  create?: Maybe<OrdersFields_Customer_Create>;
  delete?: Maybe<OrdersFields_Customer_Delete>;
  read?: Maybe<OrdersFields_Customer_Read>;
  update?: Maybe<OrdersFields_Customer_Update>;
};

export type OrdersFields_CustomerEmail = {
  create?: Maybe<OrdersFields_CustomerEmail_Create>;
  delete?: Maybe<OrdersFields_CustomerEmail_Delete>;
  read?: Maybe<OrdersFields_CustomerEmail_Read>;
  update?: Maybe<OrdersFields_CustomerEmail_Update>;
};

export type OrdersFields_CustomerEmail_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CustomerEmail_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CustomerEmail_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CustomerEmail_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Customer_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Customer_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Customer_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Customer_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items = {
  create?: Maybe<OrdersFields_Items_Create>;
  delete?: Maybe<OrdersFields_Items_Delete>;
  fields?: Maybe<OrdersFields_Items_Fields>;
  read?: Maybe<OrdersFields_Items_Read>;
  update?: Maybe<OrdersFields_Items_Update>;
};

export type OrdersFields_Items_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Fields = {
  id?: Maybe<OrdersFields_Items_Id>;
  product?: Maybe<OrdersFields_Items_Product>;
  quantity?: Maybe<OrdersFields_Items_Quantity>;
  variant?: Maybe<OrdersFields_Items_Variant>;
};

export type OrdersFields_Items_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Id = {
  create?: Maybe<OrdersFields_Items_Id_Create>;
  delete?: Maybe<OrdersFields_Items_Id_Delete>;
  read?: Maybe<OrdersFields_Items_Id_Read>;
  update?: Maybe<OrdersFields_Items_Id_Update>;
};

export type OrdersFields_Items_Id_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Id_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Id_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Id_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Product = {
  create?: Maybe<OrdersFields_Items_Product_Create>;
  delete?: Maybe<OrdersFields_Items_Product_Delete>;
  read?: Maybe<OrdersFields_Items_Product_Read>;
  update?: Maybe<OrdersFields_Items_Product_Update>;
};

export type OrdersFields_Items_Product_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Product_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Product_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Product_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Quantity = {
  create?: Maybe<OrdersFields_Items_Quantity_Create>;
  delete?: Maybe<OrdersFields_Items_Quantity_Delete>;
  read?: Maybe<OrdersFields_Items_Quantity_Read>;
  update?: Maybe<OrdersFields_Items_Quantity_Update>;
};

export type OrdersFields_Items_Quantity_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Quantity_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Quantity_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Quantity_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Variant = {
  create?: Maybe<OrdersFields_Items_Variant_Create>;
  delete?: Maybe<OrdersFields_Items_Variant_Delete>;
  read?: Maybe<OrdersFields_Items_Variant_Read>;
  update?: Maybe<OrdersFields_Items_Variant_Update>;
};

export type OrdersFields_Items_Variant_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Variant_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Variant_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Variant_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress = {
  create?: Maybe<OrdersFields_ShippingAddress_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_Delete>;
  fields?: Maybe<OrdersFields_ShippingAddress_Fields>;
  read?: Maybe<OrdersFields_ShippingAddress_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_Update>;
};

export type OrdersFields_ShippingAddress_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Fields = {
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
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_AddressLine1 = {
  create?: Maybe<OrdersFields_ShippingAddress_AddressLine1_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_AddressLine1_Delete>;
  read?: Maybe<OrdersFields_ShippingAddress_AddressLine1_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_AddressLine1_Update>;
};

export type OrdersFields_ShippingAddress_AddressLine1_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_AddressLine1_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_AddressLine1_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_AddressLine1_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_AddressLine2 = {
  create?: Maybe<OrdersFields_ShippingAddress_AddressLine2_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_AddressLine2_Delete>;
  read?: Maybe<OrdersFields_ShippingAddress_AddressLine2_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_AddressLine2_Update>;
};

export type OrdersFields_ShippingAddress_AddressLine2_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_AddressLine2_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_AddressLine2_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_AddressLine2_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_City = {
  create?: Maybe<OrdersFields_ShippingAddress_City_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_City_Delete>;
  read?: Maybe<OrdersFields_ShippingAddress_City_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_City_Update>;
};

export type OrdersFields_ShippingAddress_City_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_City_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_City_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_City_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Company = {
  create?: Maybe<OrdersFields_ShippingAddress_Company_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_Company_Delete>;
  read?: Maybe<OrdersFields_ShippingAddress_Company_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_Company_Update>;
};

export type OrdersFields_ShippingAddress_Company_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Company_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Company_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Company_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Country = {
  create?: Maybe<OrdersFields_ShippingAddress_Country_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_Country_Delete>;
  read?: Maybe<OrdersFields_ShippingAddress_Country_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_Country_Update>;
};

export type OrdersFields_ShippingAddress_Country_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Country_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Country_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Country_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_FirstName = {
  create?: Maybe<OrdersFields_ShippingAddress_FirstName_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_FirstName_Delete>;
  read?: Maybe<OrdersFields_ShippingAddress_FirstName_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_FirstName_Update>;
};

export type OrdersFields_ShippingAddress_FirstName_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_FirstName_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_FirstName_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_FirstName_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_LastName = {
  create?: Maybe<OrdersFields_ShippingAddress_LastName_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_LastName_Delete>;
  read?: Maybe<OrdersFields_ShippingAddress_LastName_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_LastName_Update>;
};

export type OrdersFields_ShippingAddress_LastName_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_LastName_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_LastName_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_LastName_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Phone = {
  create?: Maybe<OrdersFields_ShippingAddress_Phone_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_Phone_Delete>;
  read?: Maybe<OrdersFields_ShippingAddress_Phone_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_Phone_Update>;
};

export type OrdersFields_ShippingAddress_Phone_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Phone_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Phone_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Phone_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_PostalCode = {
  create?: Maybe<OrdersFields_ShippingAddress_PostalCode_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_PostalCode_Delete>;
  read?: Maybe<OrdersFields_ShippingAddress_PostalCode_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_PostalCode_Update>;
};

export type OrdersFields_ShippingAddress_PostalCode_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_PostalCode_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_PostalCode_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_PostalCode_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_State = {
  create?: Maybe<OrdersFields_ShippingAddress_State_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_State_Delete>;
  read?: Maybe<OrdersFields_ShippingAddress_State_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_State_Update>;
};

export type OrdersFields_ShippingAddress_State_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_State_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_State_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_State_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Title = {
  create?: Maybe<OrdersFields_ShippingAddress_Title_Create>;
  delete?: Maybe<OrdersFields_ShippingAddress_Title_Delete>;
  read?: Maybe<OrdersFields_ShippingAddress_Title_Read>;
  update?: Maybe<OrdersFields_ShippingAddress_Title_Update>;
};

export type OrdersFields_ShippingAddress_Title_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Title_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Title_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_ShippingAddress_Title_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Status = {
  create?: Maybe<OrdersFields_Status_Create>;
  delete?: Maybe<OrdersFields_Status_Delete>;
  read?: Maybe<OrdersFields_Status_Read>;
  update?: Maybe<OrdersFields_Status_Update>;
};

export type OrdersFields_Status_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Status_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Status_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Status_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Transactions = {
  create?: Maybe<OrdersFields_Transactions_Create>;
  delete?: Maybe<OrdersFields_Transactions_Delete>;
  read?: Maybe<OrdersFields_Transactions_Read>;
  update?: Maybe<OrdersFields_Transactions_Update>;
};

export type OrdersFields_Transactions_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Transactions_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Transactions_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Transactions_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_UpdatedAt = {
  create?: Maybe<OrdersFields_UpdatedAt_Create>;
  delete?: Maybe<OrdersFields_UpdatedAt_Delete>;
  read?: Maybe<OrdersFields_UpdatedAt_Read>;
  update?: Maybe<OrdersFields_UpdatedAt_Update>;
};

export type OrdersFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Page = {
  _status?: Maybe<Page__Status>;
  content?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  generateSlug?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Int']['output'];
  layout?: Maybe<Array<Page_Layout>>;
  meta?: Maybe<Page_Meta>;
  publishedOn?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PageContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type PageVersion = {
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
  _status?: Maybe<PageVersion_Version__Status>;
  content?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  generateSlug?: Maybe<Scalars['Boolean']['output']>;
  layout?: Maybe<Array<PageVersion_Version_Layout>>;
  meta?: Maybe<PageVersion_Version_Meta>;
  publishedOn?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PageVersion_VersionContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type PageVersion_Version_Layout = ArchiveBlock | BannerBlock | CallToActionBlock | CarouselBlock | ContentBlock | FormBlock | MediaBlock | ThreeItemGridBlock;

export type PageVersion_Version_Meta = {
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

export type Page_Content_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
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
  content?: InputMaybe<Page_Content_Operator>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  generateSlug?: InputMaybe<Page_GenerateSlug_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  meta__description?: InputMaybe<Page_Meta__Description_Operator>;
  meta__image?: InputMaybe<Page_Meta__Image_Operator>;
  meta__title?: InputMaybe<Page_Meta__Title_Operator>;
  publishedOn?: InputMaybe<Page_PublishedOn_Operator>;
  slug?: InputMaybe<Page_Slug_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  _status?: InputMaybe<Page__Status_Operator>;
  content?: InputMaybe<Page_Content_Operator>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  generateSlug?: InputMaybe<Page_GenerateSlug_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  meta__description?: InputMaybe<Page_Meta__Description_Operator>;
  meta__image?: InputMaybe<Page_Meta__Image_Operator>;
  meta__title?: InputMaybe<Page_Meta__Title_Operator>;
  publishedOn?: InputMaybe<Page_PublishedOn_Operator>;
  slug?: InputMaybe<Page_Slug_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  _status?: InputMaybe<Page__Status_Operator>;
  content?: InputMaybe<Page_Content_Operator>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  generateSlug?: InputMaybe<Page_GenerateSlug_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  meta__description?: InputMaybe<Page_Meta__Description_Operator>;
  meta__image?: InputMaybe<Page_Meta__Image_Operator>;
  meta__title?: InputMaybe<Page_Meta__Title_Operator>;
  publishedOn?: InputMaybe<Page_PublishedOn_Operator>;
  slug?: InputMaybe<Page_Slug_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Pages = {
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
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDocAccessFields = {
  _status?: Maybe<PagesDocAccessFields__Status>;
  content?: Maybe<PagesDocAccessFields_Content>;
  createdAt?: Maybe<PagesDocAccessFields_CreatedAt>;
  generateSlug?: Maybe<PagesDocAccessFields_GenerateSlug>;
  layout?: Maybe<PagesDocAccessFields_Layout>;
  meta?: Maybe<PagesDocAccessFields_Meta>;
  publishedOn?: Maybe<PagesDocAccessFields_PublishedOn>;
  slug?: Maybe<PagesDocAccessFields_Slug>;
  title?: Maybe<PagesDocAccessFields_Title>;
  updatedAt?: Maybe<PagesDocAccessFields_UpdatedAt>;
};

export type PagesDocAccessFields__Status = {
  create?: Maybe<PagesDocAccessFields__Status_Create>;
  delete?: Maybe<PagesDocAccessFields__Status_Delete>;
  read?: Maybe<PagesDocAccessFields__Status_Read>;
  update?: Maybe<PagesDocAccessFields__Status_Update>;
};

export type PagesDocAccessFields__Status_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields__Status_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields__Status_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields__Status_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Content = {
  create?: Maybe<PagesDocAccessFields_Content_Create>;
  delete?: Maybe<PagesDocAccessFields_Content_Delete>;
  read?: Maybe<PagesDocAccessFields_Content_Read>;
  update?: Maybe<PagesDocAccessFields_Content_Update>;
};

export type PagesDocAccessFields_Content_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Content_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Content_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Content_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt = {
  create?: Maybe<PagesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PagesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PagesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PagesDocAccessFields_CreatedAt_Update>;
};

export type PagesDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_GenerateSlug = {
  create?: Maybe<PagesDocAccessFields_GenerateSlug_Create>;
  delete?: Maybe<PagesDocAccessFields_GenerateSlug_Delete>;
  read?: Maybe<PagesDocAccessFields_GenerateSlug_Read>;
  update?: Maybe<PagesDocAccessFields_GenerateSlug_Update>;
};

export type PagesDocAccessFields_GenerateSlug_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_GenerateSlug_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_GenerateSlug_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_GenerateSlug_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Layout = {
  create?: Maybe<PagesDocAccessFields_Layout_Create>;
  delete?: Maybe<PagesDocAccessFields_Layout_Delete>;
  read?: Maybe<PagesDocAccessFields_Layout_Read>;
  update?: Maybe<PagesDocAccessFields_Layout_Update>;
};

export type PagesDocAccessFields_Layout_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Layout_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Layout_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Layout_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta = {
  description?: Maybe<PagesDocAccessFields_Meta_Description>;
  image?: Maybe<PagesDocAccessFields_Meta_Image>;
  title?: Maybe<PagesDocAccessFields_Meta_Title>;
};

export type PagesDocAccessFields_Meta_Description = {
  create?: Maybe<PagesDocAccessFields_Meta_Description_Create>;
  delete?: Maybe<PagesDocAccessFields_Meta_Description_Delete>;
  read?: Maybe<PagesDocAccessFields_Meta_Description_Read>;
  update?: Maybe<PagesDocAccessFields_Meta_Description_Update>;
};

export type PagesDocAccessFields_Meta_Description_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Description_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Description_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Description_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Image = {
  create?: Maybe<PagesDocAccessFields_Meta_Image_Create>;
  delete?: Maybe<PagesDocAccessFields_Meta_Image_Delete>;
  read?: Maybe<PagesDocAccessFields_Meta_Image_Read>;
  update?: Maybe<PagesDocAccessFields_Meta_Image_Update>;
};

export type PagesDocAccessFields_Meta_Image_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Image_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Image_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Image_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Title = {
  create?: Maybe<PagesDocAccessFields_Meta_Title_Create>;
  delete?: Maybe<PagesDocAccessFields_Meta_Title_Delete>;
  read?: Maybe<PagesDocAccessFields_Meta_Title_Read>;
  update?: Maybe<PagesDocAccessFields_Meta_Title_Update>;
};

export type PagesDocAccessFields_Meta_Title_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Title_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Title_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Title_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PublishedOn = {
  create?: Maybe<PagesDocAccessFields_PublishedOn_Create>;
  delete?: Maybe<PagesDocAccessFields_PublishedOn_Delete>;
  read?: Maybe<PagesDocAccessFields_PublishedOn_Read>;
  update?: Maybe<PagesDocAccessFields_PublishedOn_Update>;
};

export type PagesDocAccessFields_PublishedOn_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PublishedOn_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PublishedOn_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PublishedOn_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug = {
  create?: Maybe<PagesDocAccessFields_Slug_Create>;
  delete?: Maybe<PagesDocAccessFields_Slug_Delete>;
  read?: Maybe<PagesDocAccessFields_Slug_Read>;
  update?: Maybe<PagesDocAccessFields_Slug_Update>;
};

export type PagesDocAccessFields_Slug_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title = {
  create?: Maybe<PagesDocAccessFields_Title_Create>;
  delete?: Maybe<PagesDocAccessFields_Title_Delete>;
  read?: Maybe<PagesDocAccessFields_Title_Read>;
  update?: Maybe<PagesDocAccessFields_Title_Update>;
};

export type PagesDocAccessFields_Title_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt = {
  create?: Maybe<PagesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PagesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PagesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PagesDocAccessFields_UpdatedAt_Update>;
};

export type PagesDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields = {
  _status?: Maybe<PagesFields__Status>;
  content?: Maybe<PagesFields_Content>;
  createdAt?: Maybe<PagesFields_CreatedAt>;
  generateSlug?: Maybe<PagesFields_GenerateSlug>;
  layout?: Maybe<PagesFields_Layout>;
  meta?: Maybe<PagesFields_Meta>;
  publishedOn?: Maybe<PagesFields_PublishedOn>;
  slug?: Maybe<PagesFields_Slug>;
  title?: Maybe<PagesFields_Title>;
  updatedAt?: Maybe<PagesFields_UpdatedAt>;
};

export type PagesFields__Status = {
  create?: Maybe<PagesFields__Status_Create>;
  delete?: Maybe<PagesFields__Status_Delete>;
  read?: Maybe<PagesFields__Status_Read>;
  update?: Maybe<PagesFields__Status_Update>;
};

export type PagesFields__Status_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields__Status_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields__Status_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields__Status_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Content = {
  create?: Maybe<PagesFields_Content_Create>;
  delete?: Maybe<PagesFields_Content_Delete>;
  read?: Maybe<PagesFields_Content_Read>;
  update?: Maybe<PagesFields_Content_Update>;
};

export type PagesFields_Content_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Content_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Content_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Content_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt = {
  create?: Maybe<PagesFields_CreatedAt_Create>;
  delete?: Maybe<PagesFields_CreatedAt_Delete>;
  read?: Maybe<PagesFields_CreatedAt_Read>;
  update?: Maybe<PagesFields_CreatedAt_Update>;
};

export type PagesFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_GenerateSlug = {
  create?: Maybe<PagesFields_GenerateSlug_Create>;
  delete?: Maybe<PagesFields_GenerateSlug_Delete>;
  read?: Maybe<PagesFields_GenerateSlug_Read>;
  update?: Maybe<PagesFields_GenerateSlug_Update>;
};

export type PagesFields_GenerateSlug_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_GenerateSlug_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_GenerateSlug_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_GenerateSlug_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Layout = {
  create?: Maybe<PagesFields_Layout_Create>;
  delete?: Maybe<PagesFields_Layout_Delete>;
  read?: Maybe<PagesFields_Layout_Read>;
  update?: Maybe<PagesFields_Layout_Update>;
};

export type PagesFields_Layout_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Layout_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Layout_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Layout_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta = {
  description?: Maybe<PagesFields_Meta_Description>;
  image?: Maybe<PagesFields_Meta_Image>;
  title?: Maybe<PagesFields_Meta_Title>;
};

export type PagesFields_Meta_Description = {
  create?: Maybe<PagesFields_Meta_Description_Create>;
  delete?: Maybe<PagesFields_Meta_Description_Delete>;
  read?: Maybe<PagesFields_Meta_Description_Read>;
  update?: Maybe<PagesFields_Meta_Description_Update>;
};

export type PagesFields_Meta_Description_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Description_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Description_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Description_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Image = {
  create?: Maybe<PagesFields_Meta_Image_Create>;
  delete?: Maybe<PagesFields_Meta_Image_Delete>;
  read?: Maybe<PagesFields_Meta_Image_Read>;
  update?: Maybe<PagesFields_Meta_Image_Update>;
};

export type PagesFields_Meta_Image_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Image_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Image_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Image_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Title = {
  create?: Maybe<PagesFields_Meta_Title_Create>;
  delete?: Maybe<PagesFields_Meta_Title_Delete>;
  read?: Maybe<PagesFields_Meta_Title_Read>;
  update?: Maybe<PagesFields_Meta_Title_Update>;
};

export type PagesFields_Meta_Title_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Title_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Title_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Title_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_PublishedOn = {
  create?: Maybe<PagesFields_PublishedOn_Create>;
  delete?: Maybe<PagesFields_PublishedOn_Delete>;
  read?: Maybe<PagesFields_PublishedOn_Read>;
  update?: Maybe<PagesFields_PublishedOn_Update>;
};

export type PagesFields_PublishedOn_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_PublishedOn_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_PublishedOn_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_PublishedOn_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug = {
  create?: Maybe<PagesFields_Slug_Create>;
  delete?: Maybe<PagesFields_Slug_Delete>;
  read?: Maybe<PagesFields_Slug_Read>;
  update?: Maybe<PagesFields_Slug_Update>;
};

export type PagesFields_Slug_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title = {
  create?: Maybe<PagesFields_Title_Create>;
  delete?: Maybe<PagesFields_Title_Delete>;
  read?: Maybe<PagesFields_Title_Read>;
  update?: Maybe<PagesFields_Title_Update>;
};

export type PagesFields_Title_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt = {
  create?: Maybe<PagesFields_UpdatedAt_Create>;
  delete?: Maybe<PagesFields_UpdatedAt_Delete>;
  read?: Maybe<PagesFields_UpdatedAt_Read>;
  update?: Maybe<PagesFields_UpdatedAt_Update>;
};

export type PagesFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PagesReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesReadVersionsAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesReadVersionsDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocument = {
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
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDocAccessFields = {
  createdAt?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt>;
  document?: Maybe<PayloadLockedDocumentsDocAccessFields_Document>;
  globalSlug?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadLockedDocumentsDocAccessFields_User>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt = {
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document = {
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_Document_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug = {
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt = {
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User = {
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_User_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields = {
  createdAt?: Maybe<PayloadLockedDocumentsFields_CreatedAt>;
  document?: Maybe<PayloadLockedDocumentsFields_Document>;
  globalSlug?: Maybe<PayloadLockedDocumentsFields_GlobalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsFields_UpdatedAt>;
  user?: Maybe<PayloadLockedDocumentsFields_User>;
};

export type PayloadLockedDocumentsFields_CreatedAt = {
  create?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document = {
  create?: Maybe<PayloadLockedDocumentsFields_Document_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_Document_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_Document_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_Document_Update>;
};

export type PayloadLockedDocumentsFields_Document_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug = {
  create?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsFields_GlobalSlug_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt = {
  create?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User = {
  create?: Maybe<PayloadLockedDocumentsFields_User_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_User_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_User_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_User_Update>;
};

export type PayloadLockedDocumentsFields_User_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreference = {
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
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDocAccessFields = {
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_User>;
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User = {
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields = {
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesFields_User>;
  value?: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key = {
  create?: Maybe<PayloadPreferencesFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesFields_Key_Read>;
  update?: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User = {
  create?: Maybe<PayloadPreferencesFields_User_Create>;
  delete?: Maybe<PayloadPreferencesFields_User_Delete>;
  read?: Maybe<PayloadPreferencesFields_User_Read>;
  update?: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value = {
  create?: Maybe<PayloadPreferencesFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesFields_Value_Read>;
  update?: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Product = {
  _status?: Maybe<Product__Status>;
  categories?: Maybe<Category>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['JSON']['output']>;
  enableVariants?: Maybe<Scalars['Boolean']['output']>;
  gallery?: Maybe<Array<Media>>;
  generateSlug?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Int']['output'];
  inventory?: Maybe<Scalars['Float']['output']>;
  layout?: Maybe<Array<Product_Layout>>;
  meta?: Maybe<Product_Meta>;
  priceInEUR?: Maybe<Scalars['Float']['output']>;
  priceInEUREnabled?: Maybe<Scalars['Boolean']['output']>;
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


export type ProductGalleryArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
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
  _status?: Maybe<ProductVersion_Version__Status>;
  categories?: Maybe<Category>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['JSON']['output']>;
  enableVariants?: Maybe<Scalars['Boolean']['output']>;
  gallery?: Maybe<Array<Media>>;
  generateSlug?: Maybe<Scalars['Boolean']['output']>;
  inventory?: Maybe<Scalars['Float']['output']>;
  layout?: Maybe<Array<ProductVersion_Version_Layout>>;
  meta?: Maybe<ProductVersion_Version_Meta>;
  priceInEUR?: Maybe<Scalars['Float']['output']>;
  priceInEUREnabled?: Maybe<Scalars['Boolean']['output']>;
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


export type ProductVersion_VersionGalleryArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
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

export type ProductVersion_Version_Layout = CallToActionBlock | ContentBlock | MediaBlock;

export type ProductVersion_Version_Meta = {
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ProductVersion_Version_MetaImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type ProductVersion_Version_Variants = {
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

export type Product_Layout = CallToActionBlock | ContentBlock | MediaBlock;

export type Product_Meta = {
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Product_MetaImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type Product_Variants = {
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

export type Product_Gallery_Operator = {
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

export type Product_PriceInEurEnabled_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_PriceInEur_Operator = {
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
  gallery?: InputMaybe<Product_Gallery_Operator>;
  generateSlug?: InputMaybe<Product_GenerateSlug_Operator>;
  id?: InputMaybe<Product_Id_Operator>;
  inventory?: InputMaybe<Product_Inventory_Operator>;
  meta__description?: InputMaybe<Product_Meta__Description_Operator>;
  meta__image?: InputMaybe<Product_Meta__Image_Operator>;
  meta__title?: InputMaybe<Product_Meta__Title_Operator>;
  priceInEUR?: InputMaybe<Product_PriceInEur_Operator>;
  priceInEUREnabled?: InputMaybe<Product_PriceInEurEnabled_Operator>;
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
  gallery?: InputMaybe<Product_Gallery_Operator>;
  generateSlug?: InputMaybe<Product_GenerateSlug_Operator>;
  id?: InputMaybe<Product_Id_Operator>;
  inventory?: InputMaybe<Product_Inventory_Operator>;
  meta__description?: InputMaybe<Product_Meta__Description_Operator>;
  meta__image?: InputMaybe<Product_Meta__Image_Operator>;
  meta__title?: InputMaybe<Product_Meta__Title_Operator>;
  priceInEUR?: InputMaybe<Product_PriceInEur_Operator>;
  priceInEUREnabled?: InputMaybe<Product_PriceInEurEnabled_Operator>;
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
  gallery?: InputMaybe<Product_Gallery_Operator>;
  generateSlug?: InputMaybe<Product_GenerateSlug_Operator>;
  id?: InputMaybe<Product_Id_Operator>;
  inventory?: InputMaybe<Product_Inventory_Operator>;
  meta__description?: InputMaybe<Product_Meta__Description_Operator>;
  meta__image?: InputMaybe<Product_Meta__Image_Operator>;
  meta__title?: InputMaybe<Product_Meta__Title_Operator>;
  priceInEUR?: InputMaybe<Product_PriceInEur_Operator>;
  priceInEUREnabled?: InputMaybe<Product_PriceInEurEnabled_Operator>;
  relatedProducts?: InputMaybe<Product_RelatedProducts_Operator>;
  slug?: InputMaybe<Product_Slug_Operator>;
  title?: InputMaybe<Product_Title_Operator>;
  updatedAt?: InputMaybe<Product_UpdatedAt_Operator>;
  variantTypes?: InputMaybe<Product_VariantTypes_Operator>;
};

export type Products = {
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
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsDocAccessFields = {
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
  priceInEUR?: Maybe<ProductsDocAccessFields_PriceInEur>;
  priceInEUREnabled?: Maybe<ProductsDocAccessFields_PriceInEurEnabled>;
  relatedProducts?: Maybe<ProductsDocAccessFields_RelatedProducts>;
  slug?: Maybe<ProductsDocAccessFields_Slug>;
  title?: Maybe<ProductsDocAccessFields_Title>;
  updatedAt?: Maybe<ProductsDocAccessFields_UpdatedAt>;
  variantTypes?: Maybe<ProductsDocAccessFields_VariantTypes>;
  variants?: Maybe<ProductsDocAccessFields_Variants>;
};

export type ProductsDocAccessFields__Status = {
  create?: Maybe<ProductsDocAccessFields__Status_Create>;
  delete?: Maybe<ProductsDocAccessFields__Status_Delete>;
  read?: Maybe<ProductsDocAccessFields__Status_Read>;
  update?: Maybe<ProductsDocAccessFields__Status_Update>;
};

export type ProductsDocAccessFields__Status_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields__Status_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields__Status_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields__Status_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Categories = {
  create?: Maybe<ProductsDocAccessFields_Categories_Create>;
  delete?: Maybe<ProductsDocAccessFields_Categories_Delete>;
  read?: Maybe<ProductsDocAccessFields_Categories_Read>;
  update?: Maybe<ProductsDocAccessFields_Categories_Update>;
};

export type ProductsDocAccessFields_Categories_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Categories_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Categories_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Categories_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CreatedAt = {
  create?: Maybe<ProductsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ProductsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ProductsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ProductsDocAccessFields_CreatedAt_Update>;
};

export type ProductsDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_DeletedAt = {
  create?: Maybe<ProductsDocAccessFields_DeletedAt_Create>;
  delete?: Maybe<ProductsDocAccessFields_DeletedAt_Delete>;
  read?: Maybe<ProductsDocAccessFields_DeletedAt_Read>;
  update?: Maybe<ProductsDocAccessFields_DeletedAt_Update>;
};

export type ProductsDocAccessFields_DeletedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_DeletedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_DeletedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_DeletedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Description = {
  create?: Maybe<ProductsDocAccessFields_Description_Create>;
  delete?: Maybe<ProductsDocAccessFields_Description_Delete>;
  read?: Maybe<ProductsDocAccessFields_Description_Read>;
  update?: Maybe<ProductsDocAccessFields_Description_Update>;
};

export type ProductsDocAccessFields_Description_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Description_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Description_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Description_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_EnableVariants = {
  create?: Maybe<ProductsDocAccessFields_EnableVariants_Create>;
  delete?: Maybe<ProductsDocAccessFields_EnableVariants_Delete>;
  read?: Maybe<ProductsDocAccessFields_EnableVariants_Read>;
  update?: Maybe<ProductsDocAccessFields_EnableVariants_Update>;
};

export type ProductsDocAccessFields_EnableVariants_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_EnableVariants_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_EnableVariants_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_EnableVariants_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery = {
  create?: Maybe<ProductsDocAccessFields_Gallery_Create>;
  delete?: Maybe<ProductsDocAccessFields_Gallery_Delete>;
  read?: Maybe<ProductsDocAccessFields_Gallery_Read>;
  update?: Maybe<ProductsDocAccessFields_Gallery_Update>;
};

export type ProductsDocAccessFields_Gallery_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_GenerateSlug = {
  create?: Maybe<ProductsDocAccessFields_GenerateSlug_Create>;
  delete?: Maybe<ProductsDocAccessFields_GenerateSlug_Delete>;
  read?: Maybe<ProductsDocAccessFields_GenerateSlug_Read>;
  update?: Maybe<ProductsDocAccessFields_GenerateSlug_Update>;
};

export type ProductsDocAccessFields_GenerateSlug_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_GenerateSlug_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_GenerateSlug_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_GenerateSlug_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Inventory = {
  create?: Maybe<ProductsDocAccessFields_Inventory_Create>;
  delete?: Maybe<ProductsDocAccessFields_Inventory_Delete>;
  read?: Maybe<ProductsDocAccessFields_Inventory_Read>;
  update?: Maybe<ProductsDocAccessFields_Inventory_Update>;
};

export type ProductsDocAccessFields_Inventory_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Inventory_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Inventory_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Inventory_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Layout = {
  create?: Maybe<ProductsDocAccessFields_Layout_Create>;
  delete?: Maybe<ProductsDocAccessFields_Layout_Delete>;
  read?: Maybe<ProductsDocAccessFields_Layout_Read>;
  update?: Maybe<ProductsDocAccessFields_Layout_Update>;
};

export type ProductsDocAccessFields_Layout_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Layout_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Layout_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Layout_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta = {
  description?: Maybe<ProductsDocAccessFields_Meta_Description>;
  image?: Maybe<ProductsDocAccessFields_Meta_Image>;
  title?: Maybe<ProductsDocAccessFields_Meta_Title>;
};

export type ProductsDocAccessFields_Meta_Description = {
  create?: Maybe<ProductsDocAccessFields_Meta_Description_Create>;
  delete?: Maybe<ProductsDocAccessFields_Meta_Description_Delete>;
  read?: Maybe<ProductsDocAccessFields_Meta_Description_Read>;
  update?: Maybe<ProductsDocAccessFields_Meta_Description_Update>;
};

export type ProductsDocAccessFields_Meta_Description_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta_Description_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta_Description_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta_Description_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta_Image = {
  create?: Maybe<ProductsDocAccessFields_Meta_Image_Create>;
  delete?: Maybe<ProductsDocAccessFields_Meta_Image_Delete>;
  read?: Maybe<ProductsDocAccessFields_Meta_Image_Read>;
  update?: Maybe<ProductsDocAccessFields_Meta_Image_Update>;
};

export type ProductsDocAccessFields_Meta_Image_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta_Image_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta_Image_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta_Image_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta_Title = {
  create?: Maybe<ProductsDocAccessFields_Meta_Title_Create>;
  delete?: Maybe<ProductsDocAccessFields_Meta_Title_Delete>;
  read?: Maybe<ProductsDocAccessFields_Meta_Title_Read>;
  update?: Maybe<ProductsDocAccessFields_Meta_Title_Update>;
};

export type ProductsDocAccessFields_Meta_Title_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta_Title_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta_Title_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Meta_Title_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PriceInEur = {
  create?: Maybe<ProductsDocAccessFields_PriceInEur_Create>;
  delete?: Maybe<ProductsDocAccessFields_PriceInEur_Delete>;
  read?: Maybe<ProductsDocAccessFields_PriceInEur_Read>;
  update?: Maybe<ProductsDocAccessFields_PriceInEur_Update>;
};

export type ProductsDocAccessFields_PriceInEurEnabled = {
  create?: Maybe<ProductsDocAccessFields_PriceInEurEnabled_Create>;
  delete?: Maybe<ProductsDocAccessFields_PriceInEurEnabled_Delete>;
  read?: Maybe<ProductsDocAccessFields_PriceInEurEnabled_Read>;
  update?: Maybe<ProductsDocAccessFields_PriceInEurEnabled_Update>;
};

export type ProductsDocAccessFields_PriceInEurEnabled_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PriceInEurEnabled_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PriceInEurEnabled_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PriceInEurEnabled_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PriceInEur_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PriceInEur_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PriceInEur_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PriceInEur_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_RelatedProducts = {
  create?: Maybe<ProductsDocAccessFields_RelatedProducts_Create>;
  delete?: Maybe<ProductsDocAccessFields_RelatedProducts_Delete>;
  read?: Maybe<ProductsDocAccessFields_RelatedProducts_Read>;
  update?: Maybe<ProductsDocAccessFields_RelatedProducts_Update>;
};

export type ProductsDocAccessFields_RelatedProducts_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_RelatedProducts_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_RelatedProducts_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_RelatedProducts_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Slug = {
  create?: Maybe<ProductsDocAccessFields_Slug_Create>;
  delete?: Maybe<ProductsDocAccessFields_Slug_Delete>;
  read?: Maybe<ProductsDocAccessFields_Slug_Read>;
  update?: Maybe<ProductsDocAccessFields_Slug_Update>;
};

export type ProductsDocAccessFields_Slug_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Slug_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Slug_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Slug_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Title = {
  create?: Maybe<ProductsDocAccessFields_Title_Create>;
  delete?: Maybe<ProductsDocAccessFields_Title_Delete>;
  read?: Maybe<ProductsDocAccessFields_Title_Read>;
  update?: Maybe<ProductsDocAccessFields_Title_Update>;
};

export type ProductsDocAccessFields_Title_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Title_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Title_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Title_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_UpdatedAt = {
  create?: Maybe<ProductsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ProductsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ProductsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ProductsDocAccessFields_UpdatedAt_Update>;
};

export type ProductsDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_VariantTypes = {
  create?: Maybe<ProductsDocAccessFields_VariantTypes_Create>;
  delete?: Maybe<ProductsDocAccessFields_VariantTypes_Delete>;
  read?: Maybe<ProductsDocAccessFields_VariantTypes_Read>;
  update?: Maybe<ProductsDocAccessFields_VariantTypes_Update>;
};

export type ProductsDocAccessFields_VariantTypes_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_VariantTypes_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_VariantTypes_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_VariantTypes_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Variants = {
  create?: Maybe<ProductsDocAccessFields_Variants_Create>;
  delete?: Maybe<ProductsDocAccessFields_Variants_Delete>;
  read?: Maybe<ProductsDocAccessFields_Variants_Read>;
  update?: Maybe<ProductsDocAccessFields_Variants_Update>;
};

export type ProductsDocAccessFields_Variants_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Variants_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Variants_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Variants_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields = {
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
  priceInEUR?: Maybe<ProductsFields_PriceInEur>;
  priceInEUREnabled?: Maybe<ProductsFields_PriceInEurEnabled>;
  relatedProducts?: Maybe<ProductsFields_RelatedProducts>;
  slug?: Maybe<ProductsFields_Slug>;
  title?: Maybe<ProductsFields_Title>;
  updatedAt?: Maybe<ProductsFields_UpdatedAt>;
  variantTypes?: Maybe<ProductsFields_VariantTypes>;
  variants?: Maybe<ProductsFields_Variants>;
};

export type ProductsFields__Status = {
  create?: Maybe<ProductsFields__Status_Create>;
  delete?: Maybe<ProductsFields__Status_Delete>;
  read?: Maybe<ProductsFields__Status_Read>;
  update?: Maybe<ProductsFields__Status_Update>;
};

export type ProductsFields__Status_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields__Status_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields__Status_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields__Status_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Categories = {
  create?: Maybe<ProductsFields_Categories_Create>;
  delete?: Maybe<ProductsFields_Categories_Delete>;
  read?: Maybe<ProductsFields_Categories_Read>;
  update?: Maybe<ProductsFields_Categories_Update>;
};

export type ProductsFields_Categories_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Categories_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Categories_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Categories_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CreatedAt = {
  create?: Maybe<ProductsFields_CreatedAt_Create>;
  delete?: Maybe<ProductsFields_CreatedAt_Delete>;
  read?: Maybe<ProductsFields_CreatedAt_Read>;
  update?: Maybe<ProductsFields_CreatedAt_Update>;
};

export type ProductsFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_DeletedAt = {
  create?: Maybe<ProductsFields_DeletedAt_Create>;
  delete?: Maybe<ProductsFields_DeletedAt_Delete>;
  read?: Maybe<ProductsFields_DeletedAt_Read>;
  update?: Maybe<ProductsFields_DeletedAt_Update>;
};

export type ProductsFields_DeletedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_DeletedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_DeletedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_DeletedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Description = {
  create?: Maybe<ProductsFields_Description_Create>;
  delete?: Maybe<ProductsFields_Description_Delete>;
  read?: Maybe<ProductsFields_Description_Read>;
  update?: Maybe<ProductsFields_Description_Update>;
};

export type ProductsFields_Description_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Description_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Description_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Description_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_EnableVariants = {
  create?: Maybe<ProductsFields_EnableVariants_Create>;
  delete?: Maybe<ProductsFields_EnableVariants_Delete>;
  read?: Maybe<ProductsFields_EnableVariants_Read>;
  update?: Maybe<ProductsFields_EnableVariants_Update>;
};

export type ProductsFields_EnableVariants_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_EnableVariants_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_EnableVariants_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_EnableVariants_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery = {
  create?: Maybe<ProductsFields_Gallery_Create>;
  delete?: Maybe<ProductsFields_Gallery_Delete>;
  read?: Maybe<ProductsFields_Gallery_Read>;
  update?: Maybe<ProductsFields_Gallery_Update>;
};

export type ProductsFields_Gallery_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_GenerateSlug = {
  create?: Maybe<ProductsFields_GenerateSlug_Create>;
  delete?: Maybe<ProductsFields_GenerateSlug_Delete>;
  read?: Maybe<ProductsFields_GenerateSlug_Read>;
  update?: Maybe<ProductsFields_GenerateSlug_Update>;
};

export type ProductsFields_GenerateSlug_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_GenerateSlug_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_GenerateSlug_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_GenerateSlug_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Inventory = {
  create?: Maybe<ProductsFields_Inventory_Create>;
  delete?: Maybe<ProductsFields_Inventory_Delete>;
  read?: Maybe<ProductsFields_Inventory_Read>;
  update?: Maybe<ProductsFields_Inventory_Update>;
};

export type ProductsFields_Inventory_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Inventory_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Inventory_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Inventory_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Layout = {
  create?: Maybe<ProductsFields_Layout_Create>;
  delete?: Maybe<ProductsFields_Layout_Delete>;
  read?: Maybe<ProductsFields_Layout_Read>;
  update?: Maybe<ProductsFields_Layout_Update>;
};

export type ProductsFields_Layout_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Layout_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Layout_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Layout_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta = {
  description?: Maybe<ProductsFields_Meta_Description>;
  image?: Maybe<ProductsFields_Meta_Image>;
  title?: Maybe<ProductsFields_Meta_Title>;
};

export type ProductsFields_Meta_Description = {
  create?: Maybe<ProductsFields_Meta_Description_Create>;
  delete?: Maybe<ProductsFields_Meta_Description_Delete>;
  read?: Maybe<ProductsFields_Meta_Description_Read>;
  update?: Maybe<ProductsFields_Meta_Description_Update>;
};

export type ProductsFields_Meta_Description_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta_Description_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta_Description_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta_Description_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta_Image = {
  create?: Maybe<ProductsFields_Meta_Image_Create>;
  delete?: Maybe<ProductsFields_Meta_Image_Delete>;
  read?: Maybe<ProductsFields_Meta_Image_Read>;
  update?: Maybe<ProductsFields_Meta_Image_Update>;
};

export type ProductsFields_Meta_Image_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta_Image_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta_Image_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta_Image_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta_Title = {
  create?: Maybe<ProductsFields_Meta_Title_Create>;
  delete?: Maybe<ProductsFields_Meta_Title_Delete>;
  read?: Maybe<ProductsFields_Meta_Title_Read>;
  update?: Maybe<ProductsFields_Meta_Title_Update>;
};

export type ProductsFields_Meta_Title_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta_Title_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta_Title_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Meta_Title_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PriceInEur = {
  create?: Maybe<ProductsFields_PriceInEur_Create>;
  delete?: Maybe<ProductsFields_PriceInEur_Delete>;
  read?: Maybe<ProductsFields_PriceInEur_Read>;
  update?: Maybe<ProductsFields_PriceInEur_Update>;
};

export type ProductsFields_PriceInEurEnabled = {
  create?: Maybe<ProductsFields_PriceInEurEnabled_Create>;
  delete?: Maybe<ProductsFields_PriceInEurEnabled_Delete>;
  read?: Maybe<ProductsFields_PriceInEurEnabled_Read>;
  update?: Maybe<ProductsFields_PriceInEurEnabled_Update>;
};

export type ProductsFields_PriceInEurEnabled_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PriceInEurEnabled_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PriceInEurEnabled_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PriceInEurEnabled_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PriceInEur_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PriceInEur_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PriceInEur_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PriceInEur_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_RelatedProducts = {
  create?: Maybe<ProductsFields_RelatedProducts_Create>;
  delete?: Maybe<ProductsFields_RelatedProducts_Delete>;
  read?: Maybe<ProductsFields_RelatedProducts_Read>;
  update?: Maybe<ProductsFields_RelatedProducts_Update>;
};

export type ProductsFields_RelatedProducts_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_RelatedProducts_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_RelatedProducts_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_RelatedProducts_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Slug = {
  create?: Maybe<ProductsFields_Slug_Create>;
  delete?: Maybe<ProductsFields_Slug_Delete>;
  read?: Maybe<ProductsFields_Slug_Read>;
  update?: Maybe<ProductsFields_Slug_Update>;
};

export type ProductsFields_Slug_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Slug_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Slug_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Slug_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Title = {
  create?: Maybe<ProductsFields_Title_Create>;
  delete?: Maybe<ProductsFields_Title_Delete>;
  read?: Maybe<ProductsFields_Title_Read>;
  update?: Maybe<ProductsFields_Title_Update>;
};

export type ProductsFields_Title_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Title_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Title_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Title_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_UpdatedAt = {
  create?: Maybe<ProductsFields_UpdatedAt_Create>;
  delete?: Maybe<ProductsFields_UpdatedAt_Delete>;
  read?: Maybe<ProductsFields_UpdatedAt_Read>;
  update?: Maybe<ProductsFields_UpdatedAt_Update>;
};

export type ProductsFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_VariantTypes = {
  create?: Maybe<ProductsFields_VariantTypes_Create>;
  delete?: Maybe<ProductsFields_VariantTypes_Delete>;
  read?: Maybe<ProductsFields_VariantTypes_Read>;
  update?: Maybe<ProductsFields_VariantTypes_Update>;
};

export type ProductsFields_VariantTypes_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_VariantTypes_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_VariantTypes_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_VariantTypes_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Variants = {
  create?: Maybe<ProductsFields_Variants_Create>;
  delete?: Maybe<ProductsFields_Variants_Delete>;
  read?: Maybe<ProductsFields_Variants_Read>;
  update?: Maybe<ProductsFields_Variants_Update>;
};

export type ProductsFields_Variants_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Variants_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Variants_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Variants_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsReadVersionsAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsReadVersionsDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
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
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type State = {
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type SvgMedia = {
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
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SvgMediaCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SvgMediaDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SvgMediaDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SvgMediaDocAccessFields = {
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
  create?: Maybe<SvgMediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<SvgMediaDocAccessFields_CreatedAt_Update>;
};

export type SvgMediaDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Filename = {
  create?: Maybe<SvgMediaDocAccessFields_Filename_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_Filename_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_Filename_Read>;
  update?: Maybe<SvgMediaDocAccessFields_Filename_Update>;
};

export type SvgMediaDocAccessFields_Filename_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Filename_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Filename_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Filename_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Filesize = {
  create?: Maybe<SvgMediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_Filesize_Read>;
  update?: Maybe<SvgMediaDocAccessFields_Filesize_Update>;
};

export type SvgMediaDocAccessFields_Filesize_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Filesize_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Filesize_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Filesize_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_FocalX = {
  create?: Maybe<SvgMediaDocAccessFields_FocalX_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_FocalX_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_FocalX_Read>;
  update?: Maybe<SvgMediaDocAccessFields_FocalX_Update>;
};

export type SvgMediaDocAccessFields_FocalX_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_FocalX_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_FocalX_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_FocalX_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_FocalY = {
  create?: Maybe<SvgMediaDocAccessFields_FocalY_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_FocalY_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_FocalY_Read>;
  update?: Maybe<SvgMediaDocAccessFields_FocalY_Update>;
};

export type SvgMediaDocAccessFields_FocalY_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_FocalY_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_FocalY_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_FocalY_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Height = {
  create?: Maybe<SvgMediaDocAccessFields_Height_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_Height_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_Height_Read>;
  update?: Maybe<SvgMediaDocAccessFields_Height_Update>;
};

export type SvgMediaDocAccessFields_Height_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Height_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Height_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Height_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_MimeType = {
  create?: Maybe<SvgMediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_MimeType_Read>;
  update?: Maybe<SvgMediaDocAccessFields_MimeType_Update>;
};

export type SvgMediaDocAccessFields_MimeType_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_MimeType_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_MimeType_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_MimeType_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_SvgContent = {
  create?: Maybe<SvgMediaDocAccessFields_SvgContent_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_SvgContent_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_SvgContent_Read>;
  update?: Maybe<SvgMediaDocAccessFields_SvgContent_Update>;
};

export type SvgMediaDocAccessFields_SvgContent_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_SvgContent_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_SvgContent_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_SvgContent_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_ThumbnailUrl = {
  create?: Maybe<SvgMediaDocAccessFields_ThumbnailUrl_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_ThumbnailUrl_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_ThumbnailUrl_Read>;
  update?: Maybe<SvgMediaDocAccessFields_ThumbnailUrl_Update>;
};

export type SvgMediaDocAccessFields_ThumbnailUrl_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_ThumbnailUrl_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_ThumbnailUrl_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_ThumbnailUrl_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_UpdatedAt = {
  create?: Maybe<SvgMediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<SvgMediaDocAccessFields_UpdatedAt_Update>;
};

export type SvgMediaDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Url = {
  create?: Maybe<SvgMediaDocAccessFields_Url_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_Url_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_Url_Read>;
  update?: Maybe<SvgMediaDocAccessFields_Url_Update>;
};

export type SvgMediaDocAccessFields_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Width = {
  create?: Maybe<SvgMediaDocAccessFields_Width_Create>;
  delete?: Maybe<SvgMediaDocAccessFields_Width_Delete>;
  read?: Maybe<SvgMediaDocAccessFields_Width_Read>;
  update?: Maybe<SvgMediaDocAccessFields_Width_Update>;
};

export type SvgMediaDocAccessFields_Width_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Width_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Width_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaDocAccessFields_Width_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields = {
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
  create?: Maybe<SvgMediaFields_CreatedAt_Create>;
  delete?: Maybe<SvgMediaFields_CreatedAt_Delete>;
  read?: Maybe<SvgMediaFields_CreatedAt_Read>;
  update?: Maybe<SvgMediaFields_CreatedAt_Update>;
};

export type SvgMediaFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Filename = {
  create?: Maybe<SvgMediaFields_Filename_Create>;
  delete?: Maybe<SvgMediaFields_Filename_Delete>;
  read?: Maybe<SvgMediaFields_Filename_Read>;
  update?: Maybe<SvgMediaFields_Filename_Update>;
};

export type SvgMediaFields_Filename_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Filename_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Filename_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Filename_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Filesize = {
  create?: Maybe<SvgMediaFields_Filesize_Create>;
  delete?: Maybe<SvgMediaFields_Filesize_Delete>;
  read?: Maybe<SvgMediaFields_Filesize_Read>;
  update?: Maybe<SvgMediaFields_Filesize_Update>;
};

export type SvgMediaFields_Filesize_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Filesize_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Filesize_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Filesize_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_FocalX = {
  create?: Maybe<SvgMediaFields_FocalX_Create>;
  delete?: Maybe<SvgMediaFields_FocalX_Delete>;
  read?: Maybe<SvgMediaFields_FocalX_Read>;
  update?: Maybe<SvgMediaFields_FocalX_Update>;
};

export type SvgMediaFields_FocalX_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_FocalX_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_FocalX_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_FocalX_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_FocalY = {
  create?: Maybe<SvgMediaFields_FocalY_Create>;
  delete?: Maybe<SvgMediaFields_FocalY_Delete>;
  read?: Maybe<SvgMediaFields_FocalY_Read>;
  update?: Maybe<SvgMediaFields_FocalY_Update>;
};

export type SvgMediaFields_FocalY_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_FocalY_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_FocalY_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_FocalY_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Height = {
  create?: Maybe<SvgMediaFields_Height_Create>;
  delete?: Maybe<SvgMediaFields_Height_Delete>;
  read?: Maybe<SvgMediaFields_Height_Read>;
  update?: Maybe<SvgMediaFields_Height_Update>;
};

export type SvgMediaFields_Height_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Height_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Height_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Height_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_MimeType = {
  create?: Maybe<SvgMediaFields_MimeType_Create>;
  delete?: Maybe<SvgMediaFields_MimeType_Delete>;
  read?: Maybe<SvgMediaFields_MimeType_Read>;
  update?: Maybe<SvgMediaFields_MimeType_Update>;
};

export type SvgMediaFields_MimeType_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_MimeType_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_MimeType_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_MimeType_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_SvgContent = {
  create?: Maybe<SvgMediaFields_SvgContent_Create>;
  delete?: Maybe<SvgMediaFields_SvgContent_Delete>;
  read?: Maybe<SvgMediaFields_SvgContent_Read>;
  update?: Maybe<SvgMediaFields_SvgContent_Update>;
};

export type SvgMediaFields_SvgContent_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_SvgContent_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_SvgContent_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_SvgContent_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_ThumbnailUrl = {
  create?: Maybe<SvgMediaFields_ThumbnailUrl_Create>;
  delete?: Maybe<SvgMediaFields_ThumbnailUrl_Delete>;
  read?: Maybe<SvgMediaFields_ThumbnailUrl_Read>;
  update?: Maybe<SvgMediaFields_ThumbnailUrl_Update>;
};

export type SvgMediaFields_ThumbnailUrl_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_ThumbnailUrl_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_ThumbnailUrl_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_ThumbnailUrl_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_UpdatedAt = {
  create?: Maybe<SvgMediaFields_UpdatedAt_Create>;
  delete?: Maybe<SvgMediaFields_UpdatedAt_Delete>;
  read?: Maybe<SvgMediaFields_UpdatedAt_Read>;
  update?: Maybe<SvgMediaFields_UpdatedAt_Update>;
};

export type SvgMediaFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Url = {
  create?: Maybe<SvgMediaFields_Url_Create>;
  delete?: Maybe<SvgMediaFields_Url_Delete>;
  read?: Maybe<SvgMediaFields_Url_Read>;
  update?: Maybe<SvgMediaFields_Url_Update>;
};

export type SvgMediaFields_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Width = {
  create?: Maybe<SvgMediaFields_Width_Create>;
  delete?: Maybe<SvgMediaFields_Width_Delete>;
  read?: Maybe<SvgMediaFields_Width_Read>;
  update?: Maybe<SvgMediaFields_Width_Update>;
};

export type SvgMediaFields_Width_Create = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Width_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Width_Read = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaFields_Width_Update = {
  permission: Scalars['Boolean']['output'];
};

export type SvgMediaReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SvgMediaReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SvgMediaUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SvgMediaUpdateDocAccess = {
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
  Eur = 'EUR'
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
  Eur = 'EUR'
}

export enum Transaction_Currency_Input {
  Eur = 'EUR'
}

export enum Transaction_Currency_MutationInput {
  Eur = 'EUR'
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
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TransactionsCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TransactionsDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TransactionsDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TransactionsDocAccessFields = {
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
  create?: Maybe<TransactionsDocAccessFields_Amount_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Amount_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Amount_Read>;
  update?: Maybe<TransactionsDocAccessFields_Amount_Update>;
};

export type TransactionsDocAccessFields_Amount_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Amount_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Amount_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Amount_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress = {
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_Delete>;
  fields?: Maybe<TransactionsDocAccessFields_BillingAddress_Fields>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Fields = {
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
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_AddressLine1 = {
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_AddressLine1_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_AddressLine1_Delete>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_AddressLine1_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_AddressLine1_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_AddressLine1_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_AddressLine1_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_AddressLine1_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_AddressLine1_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_AddressLine2 = {
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_AddressLine2_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_AddressLine2_Delete>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_AddressLine2_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_AddressLine2_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_AddressLine2_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_AddressLine2_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_AddressLine2_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_AddressLine2_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_City = {
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_City_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_City_Delete>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_City_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_City_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_City_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_City_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_City_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_City_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Company = {
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_Company_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_Company_Delete>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_Company_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_Company_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_Company_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Company_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Company_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Company_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Country = {
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_Country_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_Country_Delete>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_Country_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_Country_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_Country_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Country_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Country_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Country_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_FirstName = {
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_FirstName_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_FirstName_Delete>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_FirstName_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_FirstName_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_FirstName_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_FirstName_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_FirstName_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_FirstName_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_LastName = {
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_LastName_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_LastName_Delete>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_LastName_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_LastName_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_LastName_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_LastName_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_LastName_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_LastName_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Phone = {
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_Phone_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_Phone_Delete>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_Phone_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_Phone_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_Phone_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Phone_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Phone_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Phone_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_PostalCode = {
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_PostalCode_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_PostalCode_Delete>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_PostalCode_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_PostalCode_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_PostalCode_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_PostalCode_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_PostalCode_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_PostalCode_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_State = {
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_State_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_State_Delete>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_State_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_State_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_State_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_State_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_State_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_State_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Title = {
  create?: Maybe<TransactionsDocAccessFields_BillingAddress_Title_Create>;
  delete?: Maybe<TransactionsDocAccessFields_BillingAddress_Title_Delete>;
  read?: Maybe<TransactionsDocAccessFields_BillingAddress_Title_Read>;
  update?: Maybe<TransactionsDocAccessFields_BillingAddress_Title_Update>;
};

export type TransactionsDocAccessFields_BillingAddress_Title_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Title_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Title_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_BillingAddress_Title_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Cart = {
  create?: Maybe<TransactionsDocAccessFields_Cart_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Cart_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Cart_Read>;
  update?: Maybe<TransactionsDocAccessFields_Cart_Update>;
};

export type TransactionsDocAccessFields_Cart_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Cart_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Cart_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Cart_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_CreatedAt = {
  create?: Maybe<TransactionsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<TransactionsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<TransactionsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<TransactionsDocAccessFields_CreatedAt_Update>;
};

export type TransactionsDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Currency = {
  create?: Maybe<TransactionsDocAccessFields_Currency_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Currency_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Currency_Read>;
  update?: Maybe<TransactionsDocAccessFields_Currency_Update>;
};

export type TransactionsDocAccessFields_Currency_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Currency_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Currency_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Currency_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Customer = {
  create?: Maybe<TransactionsDocAccessFields_Customer_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Customer_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Customer_Read>;
  update?: Maybe<TransactionsDocAccessFields_Customer_Update>;
};

export type TransactionsDocAccessFields_CustomerEmail = {
  create?: Maybe<TransactionsDocAccessFields_CustomerEmail_Create>;
  delete?: Maybe<TransactionsDocAccessFields_CustomerEmail_Delete>;
  read?: Maybe<TransactionsDocAccessFields_CustomerEmail_Read>;
  update?: Maybe<TransactionsDocAccessFields_CustomerEmail_Update>;
};

export type TransactionsDocAccessFields_CustomerEmail_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_CustomerEmail_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_CustomerEmail_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_CustomerEmail_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Customer_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Customer_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Customer_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Customer_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items = {
  create?: Maybe<TransactionsDocAccessFields_Items_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Items_Delete>;
  fields?: Maybe<TransactionsDocAccessFields_Items_Fields>;
  read?: Maybe<TransactionsDocAccessFields_Items_Read>;
  update?: Maybe<TransactionsDocAccessFields_Items_Update>;
};

export type TransactionsDocAccessFields_Items_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Fields = {
  id?: Maybe<TransactionsDocAccessFields_Items_Id>;
  product?: Maybe<TransactionsDocAccessFields_Items_Product>;
  quantity?: Maybe<TransactionsDocAccessFields_Items_Quantity>;
  variant?: Maybe<TransactionsDocAccessFields_Items_Variant>;
};

export type TransactionsDocAccessFields_Items_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Id = {
  create?: Maybe<TransactionsDocAccessFields_Items_Id_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Items_Id_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Items_Id_Read>;
  update?: Maybe<TransactionsDocAccessFields_Items_Id_Update>;
};

export type TransactionsDocAccessFields_Items_Id_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Id_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Id_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Id_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Product = {
  create?: Maybe<TransactionsDocAccessFields_Items_Product_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Items_Product_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Items_Product_Read>;
  update?: Maybe<TransactionsDocAccessFields_Items_Product_Update>;
};

export type TransactionsDocAccessFields_Items_Product_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Product_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Product_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Product_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Quantity = {
  create?: Maybe<TransactionsDocAccessFields_Items_Quantity_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Items_Quantity_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Items_Quantity_Read>;
  update?: Maybe<TransactionsDocAccessFields_Items_Quantity_Update>;
};

export type TransactionsDocAccessFields_Items_Quantity_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Quantity_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Quantity_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Quantity_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Variant = {
  create?: Maybe<TransactionsDocAccessFields_Items_Variant_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Items_Variant_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Items_Variant_Read>;
  update?: Maybe<TransactionsDocAccessFields_Items_Variant_Update>;
};

export type TransactionsDocAccessFields_Items_Variant_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Variant_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Variant_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Items_Variant_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Order = {
  create?: Maybe<TransactionsDocAccessFields_Order_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Order_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Order_Read>;
  update?: Maybe<TransactionsDocAccessFields_Order_Update>;
};

export type TransactionsDocAccessFields_Order_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Order_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Order_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Order_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_PaymentMethod = {
  create?: Maybe<TransactionsDocAccessFields_PaymentMethod_Create>;
  delete?: Maybe<TransactionsDocAccessFields_PaymentMethod_Delete>;
  read?: Maybe<TransactionsDocAccessFields_PaymentMethod_Read>;
  update?: Maybe<TransactionsDocAccessFields_PaymentMethod_Update>;
};

export type TransactionsDocAccessFields_PaymentMethod_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_PaymentMethod_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_PaymentMethod_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_PaymentMethod_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Status = {
  create?: Maybe<TransactionsDocAccessFields_Status_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Status_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Status_Read>;
  update?: Maybe<TransactionsDocAccessFields_Status_Update>;
};

export type TransactionsDocAccessFields_Status_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Status_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Status_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Status_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe = {
  create?: Maybe<TransactionsDocAccessFields_Stripe_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Stripe_Delete>;
  fields?: Maybe<TransactionsDocAccessFields_Stripe_Fields>;
  read?: Maybe<TransactionsDocAccessFields_Stripe_Read>;
  update?: Maybe<TransactionsDocAccessFields_Stripe_Update>;
};

export type TransactionsDocAccessFields_Stripe_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe_Fields = {
  customerID?: Maybe<TransactionsDocAccessFields_Stripe_CustomerId>;
  paymentIntentID?: Maybe<TransactionsDocAccessFields_Stripe_PaymentIntentId>;
};

export type TransactionsDocAccessFields_Stripe_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe_CustomerId = {
  create?: Maybe<TransactionsDocAccessFields_Stripe_CustomerId_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Stripe_CustomerId_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Stripe_CustomerId_Read>;
  update?: Maybe<TransactionsDocAccessFields_Stripe_CustomerId_Update>;
};

export type TransactionsDocAccessFields_Stripe_CustomerId_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe_CustomerId_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe_CustomerId_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe_CustomerId_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe_PaymentIntentId = {
  create?: Maybe<TransactionsDocAccessFields_Stripe_PaymentIntentId_Create>;
  delete?: Maybe<TransactionsDocAccessFields_Stripe_PaymentIntentId_Delete>;
  read?: Maybe<TransactionsDocAccessFields_Stripe_PaymentIntentId_Read>;
  update?: Maybe<TransactionsDocAccessFields_Stripe_PaymentIntentId_Update>;
};

export type TransactionsDocAccessFields_Stripe_PaymentIntentId_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe_PaymentIntentId_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe_PaymentIntentId_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_Stripe_PaymentIntentId_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_UpdatedAt = {
  create?: Maybe<TransactionsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<TransactionsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<TransactionsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<TransactionsDocAccessFields_UpdatedAt_Update>;
};

export type TransactionsDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields = {
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
  create?: Maybe<TransactionsFields_Amount_Create>;
  delete?: Maybe<TransactionsFields_Amount_Delete>;
  read?: Maybe<TransactionsFields_Amount_Read>;
  update?: Maybe<TransactionsFields_Amount_Update>;
};

export type TransactionsFields_Amount_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Amount_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Amount_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Amount_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress = {
  create?: Maybe<TransactionsFields_BillingAddress_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_Delete>;
  fields?: Maybe<TransactionsFields_BillingAddress_Fields>;
  read?: Maybe<TransactionsFields_BillingAddress_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_Update>;
};

export type TransactionsFields_BillingAddress_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Fields = {
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
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_AddressLine1 = {
  create?: Maybe<TransactionsFields_BillingAddress_AddressLine1_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_AddressLine1_Delete>;
  read?: Maybe<TransactionsFields_BillingAddress_AddressLine1_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_AddressLine1_Update>;
};

export type TransactionsFields_BillingAddress_AddressLine1_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_AddressLine1_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_AddressLine1_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_AddressLine1_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_AddressLine2 = {
  create?: Maybe<TransactionsFields_BillingAddress_AddressLine2_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_AddressLine2_Delete>;
  read?: Maybe<TransactionsFields_BillingAddress_AddressLine2_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_AddressLine2_Update>;
};

export type TransactionsFields_BillingAddress_AddressLine2_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_AddressLine2_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_AddressLine2_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_AddressLine2_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_City = {
  create?: Maybe<TransactionsFields_BillingAddress_City_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_City_Delete>;
  read?: Maybe<TransactionsFields_BillingAddress_City_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_City_Update>;
};

export type TransactionsFields_BillingAddress_City_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_City_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_City_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_City_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Company = {
  create?: Maybe<TransactionsFields_BillingAddress_Company_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_Company_Delete>;
  read?: Maybe<TransactionsFields_BillingAddress_Company_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_Company_Update>;
};

export type TransactionsFields_BillingAddress_Company_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Company_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Company_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Company_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Country = {
  create?: Maybe<TransactionsFields_BillingAddress_Country_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_Country_Delete>;
  read?: Maybe<TransactionsFields_BillingAddress_Country_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_Country_Update>;
};

export type TransactionsFields_BillingAddress_Country_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Country_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Country_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Country_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_FirstName = {
  create?: Maybe<TransactionsFields_BillingAddress_FirstName_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_FirstName_Delete>;
  read?: Maybe<TransactionsFields_BillingAddress_FirstName_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_FirstName_Update>;
};

export type TransactionsFields_BillingAddress_FirstName_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_FirstName_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_FirstName_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_FirstName_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_LastName = {
  create?: Maybe<TransactionsFields_BillingAddress_LastName_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_LastName_Delete>;
  read?: Maybe<TransactionsFields_BillingAddress_LastName_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_LastName_Update>;
};

export type TransactionsFields_BillingAddress_LastName_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_LastName_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_LastName_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_LastName_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Phone = {
  create?: Maybe<TransactionsFields_BillingAddress_Phone_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_Phone_Delete>;
  read?: Maybe<TransactionsFields_BillingAddress_Phone_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_Phone_Update>;
};

export type TransactionsFields_BillingAddress_Phone_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Phone_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Phone_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Phone_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_PostalCode = {
  create?: Maybe<TransactionsFields_BillingAddress_PostalCode_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_PostalCode_Delete>;
  read?: Maybe<TransactionsFields_BillingAddress_PostalCode_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_PostalCode_Update>;
};

export type TransactionsFields_BillingAddress_PostalCode_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_PostalCode_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_PostalCode_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_PostalCode_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_State = {
  create?: Maybe<TransactionsFields_BillingAddress_State_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_State_Delete>;
  read?: Maybe<TransactionsFields_BillingAddress_State_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_State_Update>;
};

export type TransactionsFields_BillingAddress_State_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_State_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_State_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_State_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Title = {
  create?: Maybe<TransactionsFields_BillingAddress_Title_Create>;
  delete?: Maybe<TransactionsFields_BillingAddress_Title_Delete>;
  read?: Maybe<TransactionsFields_BillingAddress_Title_Read>;
  update?: Maybe<TransactionsFields_BillingAddress_Title_Update>;
};

export type TransactionsFields_BillingAddress_Title_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Title_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Title_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_BillingAddress_Title_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Cart = {
  create?: Maybe<TransactionsFields_Cart_Create>;
  delete?: Maybe<TransactionsFields_Cart_Delete>;
  read?: Maybe<TransactionsFields_Cart_Read>;
  update?: Maybe<TransactionsFields_Cart_Update>;
};

export type TransactionsFields_Cart_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Cart_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Cart_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Cart_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_CreatedAt = {
  create?: Maybe<TransactionsFields_CreatedAt_Create>;
  delete?: Maybe<TransactionsFields_CreatedAt_Delete>;
  read?: Maybe<TransactionsFields_CreatedAt_Read>;
  update?: Maybe<TransactionsFields_CreatedAt_Update>;
};

export type TransactionsFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Currency = {
  create?: Maybe<TransactionsFields_Currency_Create>;
  delete?: Maybe<TransactionsFields_Currency_Delete>;
  read?: Maybe<TransactionsFields_Currency_Read>;
  update?: Maybe<TransactionsFields_Currency_Update>;
};

export type TransactionsFields_Currency_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Currency_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Currency_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Currency_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Customer = {
  create?: Maybe<TransactionsFields_Customer_Create>;
  delete?: Maybe<TransactionsFields_Customer_Delete>;
  read?: Maybe<TransactionsFields_Customer_Read>;
  update?: Maybe<TransactionsFields_Customer_Update>;
};

export type TransactionsFields_CustomerEmail = {
  create?: Maybe<TransactionsFields_CustomerEmail_Create>;
  delete?: Maybe<TransactionsFields_CustomerEmail_Delete>;
  read?: Maybe<TransactionsFields_CustomerEmail_Read>;
  update?: Maybe<TransactionsFields_CustomerEmail_Update>;
};

export type TransactionsFields_CustomerEmail_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_CustomerEmail_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_CustomerEmail_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_CustomerEmail_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Customer_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Customer_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Customer_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Customer_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items = {
  create?: Maybe<TransactionsFields_Items_Create>;
  delete?: Maybe<TransactionsFields_Items_Delete>;
  fields?: Maybe<TransactionsFields_Items_Fields>;
  read?: Maybe<TransactionsFields_Items_Read>;
  update?: Maybe<TransactionsFields_Items_Update>;
};

export type TransactionsFields_Items_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Fields = {
  id?: Maybe<TransactionsFields_Items_Id>;
  product?: Maybe<TransactionsFields_Items_Product>;
  quantity?: Maybe<TransactionsFields_Items_Quantity>;
  variant?: Maybe<TransactionsFields_Items_Variant>;
};

export type TransactionsFields_Items_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Id = {
  create?: Maybe<TransactionsFields_Items_Id_Create>;
  delete?: Maybe<TransactionsFields_Items_Id_Delete>;
  read?: Maybe<TransactionsFields_Items_Id_Read>;
  update?: Maybe<TransactionsFields_Items_Id_Update>;
};

export type TransactionsFields_Items_Id_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Id_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Id_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Id_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Product = {
  create?: Maybe<TransactionsFields_Items_Product_Create>;
  delete?: Maybe<TransactionsFields_Items_Product_Delete>;
  read?: Maybe<TransactionsFields_Items_Product_Read>;
  update?: Maybe<TransactionsFields_Items_Product_Update>;
};

export type TransactionsFields_Items_Product_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Product_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Product_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Product_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Quantity = {
  create?: Maybe<TransactionsFields_Items_Quantity_Create>;
  delete?: Maybe<TransactionsFields_Items_Quantity_Delete>;
  read?: Maybe<TransactionsFields_Items_Quantity_Read>;
  update?: Maybe<TransactionsFields_Items_Quantity_Update>;
};

export type TransactionsFields_Items_Quantity_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Quantity_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Quantity_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Quantity_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Variant = {
  create?: Maybe<TransactionsFields_Items_Variant_Create>;
  delete?: Maybe<TransactionsFields_Items_Variant_Delete>;
  read?: Maybe<TransactionsFields_Items_Variant_Read>;
  update?: Maybe<TransactionsFields_Items_Variant_Update>;
};

export type TransactionsFields_Items_Variant_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Variant_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Variant_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Items_Variant_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Order = {
  create?: Maybe<TransactionsFields_Order_Create>;
  delete?: Maybe<TransactionsFields_Order_Delete>;
  read?: Maybe<TransactionsFields_Order_Read>;
  update?: Maybe<TransactionsFields_Order_Update>;
};

export type TransactionsFields_Order_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Order_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Order_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Order_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_PaymentMethod = {
  create?: Maybe<TransactionsFields_PaymentMethod_Create>;
  delete?: Maybe<TransactionsFields_PaymentMethod_Delete>;
  read?: Maybe<TransactionsFields_PaymentMethod_Read>;
  update?: Maybe<TransactionsFields_PaymentMethod_Update>;
};

export type TransactionsFields_PaymentMethod_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_PaymentMethod_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_PaymentMethod_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_PaymentMethod_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Status = {
  create?: Maybe<TransactionsFields_Status_Create>;
  delete?: Maybe<TransactionsFields_Status_Delete>;
  read?: Maybe<TransactionsFields_Status_Read>;
  update?: Maybe<TransactionsFields_Status_Update>;
};

export type TransactionsFields_Status_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Status_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Status_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Status_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe = {
  create?: Maybe<TransactionsFields_Stripe_Create>;
  delete?: Maybe<TransactionsFields_Stripe_Delete>;
  fields?: Maybe<TransactionsFields_Stripe_Fields>;
  read?: Maybe<TransactionsFields_Stripe_Read>;
  update?: Maybe<TransactionsFields_Stripe_Update>;
};

export type TransactionsFields_Stripe_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe_Fields = {
  customerID?: Maybe<TransactionsFields_Stripe_CustomerId>;
  paymentIntentID?: Maybe<TransactionsFields_Stripe_PaymentIntentId>;
};

export type TransactionsFields_Stripe_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe_CustomerId = {
  create?: Maybe<TransactionsFields_Stripe_CustomerId_Create>;
  delete?: Maybe<TransactionsFields_Stripe_CustomerId_Delete>;
  read?: Maybe<TransactionsFields_Stripe_CustomerId_Read>;
  update?: Maybe<TransactionsFields_Stripe_CustomerId_Update>;
};

export type TransactionsFields_Stripe_CustomerId_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe_CustomerId_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe_CustomerId_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe_CustomerId_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe_PaymentIntentId = {
  create?: Maybe<TransactionsFields_Stripe_PaymentIntentId_Create>;
  delete?: Maybe<TransactionsFields_Stripe_PaymentIntentId_Delete>;
  read?: Maybe<TransactionsFields_Stripe_PaymentIntentId_Read>;
  update?: Maybe<TransactionsFields_Stripe_PaymentIntentId_Update>;
};

export type TransactionsFields_Stripe_PaymentIntentId_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe_PaymentIntentId_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe_PaymentIntentId_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_Stripe_PaymentIntentId_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_UpdatedAt = {
  create?: Maybe<TransactionsFields_UpdatedAt_Create>;
  delete?: Maybe<TransactionsFields_UpdatedAt_Delete>;
  read?: Maybe<TransactionsFields_UpdatedAt_Read>;
  update?: Maybe<TransactionsFields_UpdatedAt_Update>;
};

export type TransactionsFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type TransactionsReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TransactionsReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TransactionsUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TransactionsUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type User = {
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
  docs: Array<Address>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type User_Cart = {
  docs: Array<Cart>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type User_Orders = {
  docs: Array<Order>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type User_Sessions = {
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
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
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
  create?: Maybe<UsersDocAccessFields_Addresses_Create>;
  delete?: Maybe<UsersDocAccessFields_Addresses_Delete>;
  read?: Maybe<UsersDocAccessFields_Addresses_Read>;
  update?: Maybe<UsersDocAccessFields_Addresses_Update>;
};

export type UsersDocAccessFields_Addresses_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Addresses_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Addresses_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Addresses_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Cart = {
  create?: Maybe<UsersDocAccessFields_Cart_Create>;
  delete?: Maybe<UsersDocAccessFields_Cart_Delete>;
  read?: Maybe<UsersDocAccessFields_Cart_Read>;
  update?: Maybe<UsersDocAccessFields_Cart_Update>;
};

export type UsersDocAccessFields_Cart_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Cart_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Cart_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Cart_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt = {
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Name = {
  create?: Maybe<UsersDocAccessFields_Name_Create>;
  delete?: Maybe<UsersDocAccessFields_Name_Delete>;
  read?: Maybe<UsersDocAccessFields_Name_Read>;
  update?: Maybe<UsersDocAccessFields_Name_Update>;
};

export type UsersDocAccessFields_Name_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Name_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Name_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Name_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Orders = {
  create?: Maybe<UsersDocAccessFields_Orders_Create>;
  delete?: Maybe<UsersDocAccessFields_Orders_Delete>;
  read?: Maybe<UsersDocAccessFields_Orders_Read>;
  update?: Maybe<UsersDocAccessFields_Orders_Update>;
};

export type UsersDocAccessFields_Orders_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Orders_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Orders_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Orders_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles = {
  create?: Maybe<UsersDocAccessFields_Roles_Create>;
  delete?: Maybe<UsersDocAccessFields_Roles_Delete>;
  read?: Maybe<UsersDocAccessFields_Roles_Read>;
  update?: Maybe<UsersDocAccessFields_Roles_Update>;
};

export type UsersDocAccessFields_Roles_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions = {
  create?: Maybe<UsersDocAccessFields_Sessions_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_Delete>;
  fields?: Maybe<UsersDocAccessFields_Sessions_Fields>;
  read?: Maybe<UsersDocAccessFields_Sessions_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_Update>;
};

export type UsersDocAccessFields_Sessions_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Fields = {
  createdAt?: Maybe<UsersDocAccessFields_Sessions_CreatedAt>;
  expiresAt?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt>;
  id?: Maybe<UsersDocAccessFields_Sessions_Id>;
};

export type UsersDocAccessFields_Sessions_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt = {
  create?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Update>;
};

export type UsersDocAccessFields_Sessions_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt = {
  create?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Delete>;
  read?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Update>;
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id = {
  create?: Maybe<UsersDocAccessFields_Sessions_Id_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_Id_Delete>;
  read?: Maybe<UsersDocAccessFields_Sessions_Id_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_Id_Update>;
};

export type UsersDocAccessFields_Sessions_Id_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
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
  create?: Maybe<UsersFields_Addresses_Create>;
  delete?: Maybe<UsersFields_Addresses_Delete>;
  read?: Maybe<UsersFields_Addresses_Read>;
  update?: Maybe<UsersFields_Addresses_Update>;
};

export type UsersFields_Addresses_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Addresses_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Addresses_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Addresses_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Cart = {
  create?: Maybe<UsersFields_Cart_Create>;
  delete?: Maybe<UsersFields_Cart_Delete>;
  read?: Maybe<UsersFields_Cart_Read>;
  update?: Maybe<UsersFields_Cart_Update>;
};

export type UsersFields_Cart_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Cart_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Cart_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Cart_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt = {
  create?: Maybe<UsersFields_CreatedAt_Create>;
  delete?: Maybe<UsersFields_CreatedAt_Delete>;
  read?: Maybe<UsersFields_CreatedAt_Read>;
  update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Name = {
  create?: Maybe<UsersFields_Name_Create>;
  delete?: Maybe<UsersFields_Name_Delete>;
  read?: Maybe<UsersFields_Name_Read>;
  update?: Maybe<UsersFields_Name_Update>;
};

export type UsersFields_Name_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Name_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Name_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Name_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Orders = {
  create?: Maybe<UsersFields_Orders_Create>;
  delete?: Maybe<UsersFields_Orders_Delete>;
  read?: Maybe<UsersFields_Orders_Read>;
  update?: Maybe<UsersFields_Orders_Update>;
};

export type UsersFields_Orders_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Orders_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Orders_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Orders_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles = {
  create?: Maybe<UsersFields_Roles_Create>;
  delete?: Maybe<UsersFields_Roles_Delete>;
  read?: Maybe<UsersFields_Roles_Read>;
  update?: Maybe<UsersFields_Roles_Update>;
};

export type UsersFields_Roles_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions = {
  create?: Maybe<UsersFields_Sessions_Create>;
  delete?: Maybe<UsersFields_Sessions_Delete>;
  fields?: Maybe<UsersFields_Sessions_Fields>;
  read?: Maybe<UsersFields_Sessions_Read>;
  update?: Maybe<UsersFields_Sessions_Update>;
};

export type UsersFields_Sessions_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Fields = {
  createdAt?: Maybe<UsersFields_Sessions_CreatedAt>;
  expiresAt?: Maybe<UsersFields_Sessions_ExpiresAt>;
  id?: Maybe<UsersFields_Sessions_Id>;
};

export type UsersFields_Sessions_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt = {
  create?: Maybe<UsersFields_Sessions_CreatedAt_Create>;
  delete?: Maybe<UsersFields_Sessions_CreatedAt_Delete>;
  read?: Maybe<UsersFields_Sessions_CreatedAt_Read>;
  update?: Maybe<UsersFields_Sessions_CreatedAt_Update>;
};

export type UsersFields_Sessions_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt = {
  create?: Maybe<UsersFields_Sessions_ExpiresAt_Create>;
  delete?: Maybe<UsersFields_Sessions_ExpiresAt_Delete>;
  read?: Maybe<UsersFields_Sessions_ExpiresAt_Read>;
  update?: Maybe<UsersFields_Sessions_ExpiresAt_Update>;
};

export type UsersFields_Sessions_ExpiresAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id = {
  create?: Maybe<UsersFields_Sessions_Id_Create>;
  delete?: Maybe<UsersFields_Sessions_Id_Delete>;
  read?: Maybe<UsersFields_Sessions_Id_Read>;
  update?: Maybe<UsersFields_Sessions_Id_Update>;
};

export type UsersFields_Sessions_Id_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
  create?: Maybe<UsersFields_UpdatedAt_Create>;
  delete?: Maybe<UsersFields_UpdatedAt_Delete>;
  read?: Maybe<UsersFields_UpdatedAt_Read>;
  update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Variant = {
  _status?: Maybe<Variant__Status>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  inventory?: Maybe<Scalars['Float']['output']>;
  options?: Maybe<Array<VariantOption>>;
  priceInEUR?: Maybe<Scalars['Float']['output']>;
  priceInEUREnabled?: Maybe<Scalars['Boolean']['output']>;
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
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantOptionsCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantOptionsDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantOptionsDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantOptionsDocAccessFields = {
  _variantOptions_options_order?: Maybe<VariantOptionsDocAccessFields__VariantOptions_Options_Order>;
  createdAt?: Maybe<VariantOptionsDocAccessFields_CreatedAt>;
  deletedAt?: Maybe<VariantOptionsDocAccessFields_DeletedAt>;
  label?: Maybe<VariantOptionsDocAccessFields_Label>;
  updatedAt?: Maybe<VariantOptionsDocAccessFields_UpdatedAt>;
  value?: Maybe<VariantOptionsDocAccessFields_Value>;
  variantType?: Maybe<VariantOptionsDocAccessFields_VariantType>;
};

export type VariantOptionsDocAccessFields__VariantOptions_Options_Order = {
  create?: Maybe<VariantOptionsDocAccessFields__VariantOptions_Options_Order_Create>;
  delete?: Maybe<VariantOptionsDocAccessFields__VariantOptions_Options_Order_Delete>;
  read?: Maybe<VariantOptionsDocAccessFields__VariantOptions_Options_Order_Read>;
  update?: Maybe<VariantOptionsDocAccessFields__VariantOptions_Options_Order_Update>;
};

export type VariantOptionsDocAccessFields__VariantOptions_Options_Order_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields__VariantOptions_Options_Order_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields__VariantOptions_Options_Order_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields__VariantOptions_Options_Order_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_CreatedAt = {
  create?: Maybe<VariantOptionsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<VariantOptionsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<VariantOptionsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<VariantOptionsDocAccessFields_CreatedAt_Update>;
};

export type VariantOptionsDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_DeletedAt = {
  create?: Maybe<VariantOptionsDocAccessFields_DeletedAt_Create>;
  delete?: Maybe<VariantOptionsDocAccessFields_DeletedAt_Delete>;
  read?: Maybe<VariantOptionsDocAccessFields_DeletedAt_Read>;
  update?: Maybe<VariantOptionsDocAccessFields_DeletedAt_Update>;
};

export type VariantOptionsDocAccessFields_DeletedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_DeletedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_DeletedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_DeletedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_Label = {
  create?: Maybe<VariantOptionsDocAccessFields_Label_Create>;
  delete?: Maybe<VariantOptionsDocAccessFields_Label_Delete>;
  read?: Maybe<VariantOptionsDocAccessFields_Label_Read>;
  update?: Maybe<VariantOptionsDocAccessFields_Label_Update>;
};

export type VariantOptionsDocAccessFields_Label_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_Label_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_Label_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_Label_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_UpdatedAt = {
  create?: Maybe<VariantOptionsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<VariantOptionsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<VariantOptionsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<VariantOptionsDocAccessFields_UpdatedAt_Update>;
};

export type VariantOptionsDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_Value = {
  create?: Maybe<VariantOptionsDocAccessFields_Value_Create>;
  delete?: Maybe<VariantOptionsDocAccessFields_Value_Delete>;
  read?: Maybe<VariantOptionsDocAccessFields_Value_Read>;
  update?: Maybe<VariantOptionsDocAccessFields_Value_Update>;
};

export type VariantOptionsDocAccessFields_Value_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_Value_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_Value_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_Value_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_VariantType = {
  create?: Maybe<VariantOptionsDocAccessFields_VariantType_Create>;
  delete?: Maybe<VariantOptionsDocAccessFields_VariantType_Delete>;
  read?: Maybe<VariantOptionsDocAccessFields_VariantType_Read>;
  update?: Maybe<VariantOptionsDocAccessFields_VariantType_Update>;
};

export type VariantOptionsDocAccessFields_VariantType_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_VariantType_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_VariantType_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsDocAccessFields_VariantType_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields = {
  _variantOptions_options_order?: Maybe<VariantOptionsFields__VariantOptions_Options_Order>;
  createdAt?: Maybe<VariantOptionsFields_CreatedAt>;
  deletedAt?: Maybe<VariantOptionsFields_DeletedAt>;
  label?: Maybe<VariantOptionsFields_Label>;
  updatedAt?: Maybe<VariantOptionsFields_UpdatedAt>;
  value?: Maybe<VariantOptionsFields_Value>;
  variantType?: Maybe<VariantOptionsFields_VariantType>;
};

export type VariantOptionsFields__VariantOptions_Options_Order = {
  create?: Maybe<VariantOptionsFields__VariantOptions_Options_Order_Create>;
  delete?: Maybe<VariantOptionsFields__VariantOptions_Options_Order_Delete>;
  read?: Maybe<VariantOptionsFields__VariantOptions_Options_Order_Read>;
  update?: Maybe<VariantOptionsFields__VariantOptions_Options_Order_Update>;
};

export type VariantOptionsFields__VariantOptions_Options_Order_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields__VariantOptions_Options_Order_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields__VariantOptions_Options_Order_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields__VariantOptions_Options_Order_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_CreatedAt = {
  create?: Maybe<VariantOptionsFields_CreatedAt_Create>;
  delete?: Maybe<VariantOptionsFields_CreatedAt_Delete>;
  read?: Maybe<VariantOptionsFields_CreatedAt_Read>;
  update?: Maybe<VariantOptionsFields_CreatedAt_Update>;
};

export type VariantOptionsFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_DeletedAt = {
  create?: Maybe<VariantOptionsFields_DeletedAt_Create>;
  delete?: Maybe<VariantOptionsFields_DeletedAt_Delete>;
  read?: Maybe<VariantOptionsFields_DeletedAt_Read>;
  update?: Maybe<VariantOptionsFields_DeletedAt_Update>;
};

export type VariantOptionsFields_DeletedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_DeletedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_DeletedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_DeletedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_Label = {
  create?: Maybe<VariantOptionsFields_Label_Create>;
  delete?: Maybe<VariantOptionsFields_Label_Delete>;
  read?: Maybe<VariantOptionsFields_Label_Read>;
  update?: Maybe<VariantOptionsFields_Label_Update>;
};

export type VariantOptionsFields_Label_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_Label_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_Label_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_Label_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_UpdatedAt = {
  create?: Maybe<VariantOptionsFields_UpdatedAt_Create>;
  delete?: Maybe<VariantOptionsFields_UpdatedAt_Delete>;
  read?: Maybe<VariantOptionsFields_UpdatedAt_Read>;
  update?: Maybe<VariantOptionsFields_UpdatedAt_Update>;
};

export type VariantOptionsFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_Value = {
  create?: Maybe<VariantOptionsFields_Value_Create>;
  delete?: Maybe<VariantOptionsFields_Value_Delete>;
  read?: Maybe<VariantOptionsFields_Value_Read>;
  update?: Maybe<VariantOptionsFields_Value_Update>;
};

export type VariantOptionsFields_Value_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_Value_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_Value_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_Value_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_VariantType = {
  create?: Maybe<VariantOptionsFields_VariantType_Create>;
  delete?: Maybe<VariantOptionsFields_VariantType_Delete>;
  read?: Maybe<VariantOptionsFields_VariantType_Read>;
  update?: Maybe<VariantOptionsFields_VariantType_Update>;
};

export type VariantOptionsFields_VariantType_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_VariantType_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_VariantType_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsFields_VariantType_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantOptionsReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantOptionsReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantOptionsUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantOptionsUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantType = {
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
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantTypesCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantTypesDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantTypesDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantTypesDocAccessFields = {
  createdAt?: Maybe<VariantTypesDocAccessFields_CreatedAt>;
  deletedAt?: Maybe<VariantTypesDocAccessFields_DeletedAt>;
  label?: Maybe<VariantTypesDocAccessFields_Label>;
  name?: Maybe<VariantTypesDocAccessFields_Name>;
  options?: Maybe<VariantTypesDocAccessFields_Options>;
  updatedAt?: Maybe<VariantTypesDocAccessFields_UpdatedAt>;
};

export type VariantTypesDocAccessFields_CreatedAt = {
  create?: Maybe<VariantTypesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<VariantTypesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<VariantTypesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<VariantTypesDocAccessFields_CreatedAt_Update>;
};

export type VariantTypesDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_DeletedAt = {
  create?: Maybe<VariantTypesDocAccessFields_DeletedAt_Create>;
  delete?: Maybe<VariantTypesDocAccessFields_DeletedAt_Delete>;
  read?: Maybe<VariantTypesDocAccessFields_DeletedAt_Read>;
  update?: Maybe<VariantTypesDocAccessFields_DeletedAt_Update>;
};

export type VariantTypesDocAccessFields_DeletedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_DeletedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_DeletedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_DeletedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Label = {
  create?: Maybe<VariantTypesDocAccessFields_Label_Create>;
  delete?: Maybe<VariantTypesDocAccessFields_Label_Delete>;
  read?: Maybe<VariantTypesDocAccessFields_Label_Read>;
  update?: Maybe<VariantTypesDocAccessFields_Label_Update>;
};

export type VariantTypesDocAccessFields_Label_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Label_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Label_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Label_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Name = {
  create?: Maybe<VariantTypesDocAccessFields_Name_Create>;
  delete?: Maybe<VariantTypesDocAccessFields_Name_Delete>;
  read?: Maybe<VariantTypesDocAccessFields_Name_Read>;
  update?: Maybe<VariantTypesDocAccessFields_Name_Update>;
};

export type VariantTypesDocAccessFields_Name_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Name_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Name_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Name_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Options = {
  create?: Maybe<VariantTypesDocAccessFields_Options_Create>;
  delete?: Maybe<VariantTypesDocAccessFields_Options_Delete>;
  read?: Maybe<VariantTypesDocAccessFields_Options_Read>;
  update?: Maybe<VariantTypesDocAccessFields_Options_Update>;
};

export type VariantTypesDocAccessFields_Options_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Options_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Options_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_Options_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_UpdatedAt = {
  create?: Maybe<VariantTypesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<VariantTypesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<VariantTypesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<VariantTypesDocAccessFields_UpdatedAt_Update>;
};

export type VariantTypesDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields = {
  createdAt?: Maybe<VariantTypesFields_CreatedAt>;
  deletedAt?: Maybe<VariantTypesFields_DeletedAt>;
  label?: Maybe<VariantTypesFields_Label>;
  name?: Maybe<VariantTypesFields_Name>;
  options?: Maybe<VariantTypesFields_Options>;
  updatedAt?: Maybe<VariantTypesFields_UpdatedAt>;
};

export type VariantTypesFields_CreatedAt = {
  create?: Maybe<VariantTypesFields_CreatedAt_Create>;
  delete?: Maybe<VariantTypesFields_CreatedAt_Delete>;
  read?: Maybe<VariantTypesFields_CreatedAt_Read>;
  update?: Maybe<VariantTypesFields_CreatedAt_Update>;
};

export type VariantTypesFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_DeletedAt = {
  create?: Maybe<VariantTypesFields_DeletedAt_Create>;
  delete?: Maybe<VariantTypesFields_DeletedAt_Delete>;
  read?: Maybe<VariantTypesFields_DeletedAt_Read>;
  update?: Maybe<VariantTypesFields_DeletedAt_Update>;
};

export type VariantTypesFields_DeletedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_DeletedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_DeletedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_DeletedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Label = {
  create?: Maybe<VariantTypesFields_Label_Create>;
  delete?: Maybe<VariantTypesFields_Label_Delete>;
  read?: Maybe<VariantTypesFields_Label_Read>;
  update?: Maybe<VariantTypesFields_Label_Update>;
};

export type VariantTypesFields_Label_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Label_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Label_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Label_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Name = {
  create?: Maybe<VariantTypesFields_Name_Create>;
  delete?: Maybe<VariantTypesFields_Name_Delete>;
  read?: Maybe<VariantTypesFields_Name_Read>;
  update?: Maybe<VariantTypesFields_Name_Update>;
};

export type VariantTypesFields_Name_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Name_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Name_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Name_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Options = {
  create?: Maybe<VariantTypesFields_Options_Create>;
  delete?: Maybe<VariantTypesFields_Options_Delete>;
  read?: Maybe<VariantTypesFields_Options_Read>;
  update?: Maybe<VariantTypesFields_Options_Update>;
};

export type VariantTypesFields_Options_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Options_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Options_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_Options_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_UpdatedAt = {
  create?: Maybe<VariantTypesFields_UpdatedAt_Create>;
  delete?: Maybe<VariantTypesFields_UpdatedAt_Delete>;
  read?: Maybe<VariantTypesFields_UpdatedAt_Read>;
  update?: Maybe<VariantTypesFields_UpdatedAt_Update>;
};

export type VariantTypesFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantTypesReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantTypesReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantTypesUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantTypesUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export enum VariantUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type VariantVersion = {
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
  _status?: Maybe<VariantVersion_Version__Status>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  inventory?: Maybe<Scalars['Float']['output']>;
  options?: Maybe<Array<VariantOption>>;
  priceInEUR?: Maybe<Scalars['Float']['output']>;
  priceInEUREnabled?: Maybe<Scalars['Boolean']['output']>;
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

export type Variant_PriceInEurEnabled_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Variant_PriceInEur_Operator = {
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
  priceInEUR?: InputMaybe<Variant_PriceInEur_Operator>;
  priceInEUREnabled?: InputMaybe<Variant_PriceInEurEnabled_Operator>;
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
  priceInEUR?: InputMaybe<Variant_PriceInEur_Operator>;
  priceInEUREnabled?: InputMaybe<Variant_PriceInEurEnabled_Operator>;
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
  priceInEUR?: InputMaybe<Variant_PriceInEur_Operator>;
  priceInEUREnabled?: InputMaybe<Variant_PriceInEurEnabled_Operator>;
  product?: InputMaybe<Variant_Product_Operator>;
  title?: InputMaybe<Variant_Title_Operator>;
  updatedAt?: InputMaybe<Variant_UpdatedAt_Operator>;
};

export type Variants = {
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
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantsCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantsDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantsDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantsDocAccessFields = {
  _status?: Maybe<VariantsDocAccessFields__Status>;
  createdAt?: Maybe<VariantsDocAccessFields_CreatedAt>;
  deletedAt?: Maybe<VariantsDocAccessFields_DeletedAt>;
  inventory?: Maybe<VariantsDocAccessFields_Inventory>;
  options?: Maybe<VariantsDocAccessFields_Options>;
  priceInEUR?: Maybe<VariantsDocAccessFields_PriceInEur>;
  priceInEUREnabled?: Maybe<VariantsDocAccessFields_PriceInEurEnabled>;
  product?: Maybe<VariantsDocAccessFields_Product>;
  title?: Maybe<VariantsDocAccessFields_Title>;
  updatedAt?: Maybe<VariantsDocAccessFields_UpdatedAt>;
};

export type VariantsDocAccessFields__Status = {
  create?: Maybe<VariantsDocAccessFields__Status_Create>;
  delete?: Maybe<VariantsDocAccessFields__Status_Delete>;
  read?: Maybe<VariantsDocAccessFields__Status_Read>;
  update?: Maybe<VariantsDocAccessFields__Status_Update>;
};

export type VariantsDocAccessFields__Status_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields__Status_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields__Status_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields__Status_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_CreatedAt = {
  create?: Maybe<VariantsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<VariantsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<VariantsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<VariantsDocAccessFields_CreatedAt_Update>;
};

export type VariantsDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_DeletedAt = {
  create?: Maybe<VariantsDocAccessFields_DeletedAt_Create>;
  delete?: Maybe<VariantsDocAccessFields_DeletedAt_Delete>;
  read?: Maybe<VariantsDocAccessFields_DeletedAt_Read>;
  update?: Maybe<VariantsDocAccessFields_DeletedAt_Update>;
};

export type VariantsDocAccessFields_DeletedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_DeletedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_DeletedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_DeletedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Inventory = {
  create?: Maybe<VariantsDocAccessFields_Inventory_Create>;
  delete?: Maybe<VariantsDocAccessFields_Inventory_Delete>;
  read?: Maybe<VariantsDocAccessFields_Inventory_Read>;
  update?: Maybe<VariantsDocAccessFields_Inventory_Update>;
};

export type VariantsDocAccessFields_Inventory_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Inventory_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Inventory_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Inventory_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Options = {
  create?: Maybe<VariantsDocAccessFields_Options_Create>;
  delete?: Maybe<VariantsDocAccessFields_Options_Delete>;
  read?: Maybe<VariantsDocAccessFields_Options_Read>;
  update?: Maybe<VariantsDocAccessFields_Options_Update>;
};

export type VariantsDocAccessFields_Options_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Options_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Options_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Options_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_PriceInEur = {
  create?: Maybe<VariantsDocAccessFields_PriceInEur_Create>;
  delete?: Maybe<VariantsDocAccessFields_PriceInEur_Delete>;
  read?: Maybe<VariantsDocAccessFields_PriceInEur_Read>;
  update?: Maybe<VariantsDocAccessFields_PriceInEur_Update>;
};

export type VariantsDocAccessFields_PriceInEurEnabled = {
  create?: Maybe<VariantsDocAccessFields_PriceInEurEnabled_Create>;
  delete?: Maybe<VariantsDocAccessFields_PriceInEurEnabled_Delete>;
  read?: Maybe<VariantsDocAccessFields_PriceInEurEnabled_Read>;
  update?: Maybe<VariantsDocAccessFields_PriceInEurEnabled_Update>;
};

export type VariantsDocAccessFields_PriceInEurEnabled_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_PriceInEurEnabled_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_PriceInEurEnabled_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_PriceInEurEnabled_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_PriceInEur_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_PriceInEur_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_PriceInEur_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_PriceInEur_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Product = {
  create?: Maybe<VariantsDocAccessFields_Product_Create>;
  delete?: Maybe<VariantsDocAccessFields_Product_Delete>;
  read?: Maybe<VariantsDocAccessFields_Product_Read>;
  update?: Maybe<VariantsDocAccessFields_Product_Update>;
};

export type VariantsDocAccessFields_Product_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Product_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Product_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Product_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Title = {
  create?: Maybe<VariantsDocAccessFields_Title_Create>;
  delete?: Maybe<VariantsDocAccessFields_Title_Delete>;
  read?: Maybe<VariantsDocAccessFields_Title_Read>;
  update?: Maybe<VariantsDocAccessFields_Title_Update>;
};

export type VariantsDocAccessFields_Title_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Title_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Title_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_Title_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_UpdatedAt = {
  create?: Maybe<VariantsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<VariantsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<VariantsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<VariantsDocAccessFields_UpdatedAt_Update>;
};

export type VariantsDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields = {
  _status?: Maybe<VariantsFields__Status>;
  createdAt?: Maybe<VariantsFields_CreatedAt>;
  deletedAt?: Maybe<VariantsFields_DeletedAt>;
  inventory?: Maybe<VariantsFields_Inventory>;
  options?: Maybe<VariantsFields_Options>;
  priceInEUR?: Maybe<VariantsFields_PriceInEur>;
  priceInEUREnabled?: Maybe<VariantsFields_PriceInEurEnabled>;
  product?: Maybe<VariantsFields_Product>;
  title?: Maybe<VariantsFields_Title>;
  updatedAt?: Maybe<VariantsFields_UpdatedAt>;
};

export type VariantsFields__Status = {
  create?: Maybe<VariantsFields__Status_Create>;
  delete?: Maybe<VariantsFields__Status_Delete>;
  read?: Maybe<VariantsFields__Status_Read>;
  update?: Maybe<VariantsFields__Status_Update>;
};

export type VariantsFields__Status_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields__Status_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields__Status_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields__Status_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_CreatedAt = {
  create?: Maybe<VariantsFields_CreatedAt_Create>;
  delete?: Maybe<VariantsFields_CreatedAt_Delete>;
  read?: Maybe<VariantsFields_CreatedAt_Read>;
  update?: Maybe<VariantsFields_CreatedAt_Update>;
};

export type VariantsFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_DeletedAt = {
  create?: Maybe<VariantsFields_DeletedAt_Create>;
  delete?: Maybe<VariantsFields_DeletedAt_Delete>;
  read?: Maybe<VariantsFields_DeletedAt_Read>;
  update?: Maybe<VariantsFields_DeletedAt_Update>;
};

export type VariantsFields_DeletedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_DeletedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_DeletedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_DeletedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Inventory = {
  create?: Maybe<VariantsFields_Inventory_Create>;
  delete?: Maybe<VariantsFields_Inventory_Delete>;
  read?: Maybe<VariantsFields_Inventory_Read>;
  update?: Maybe<VariantsFields_Inventory_Update>;
};

export type VariantsFields_Inventory_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Inventory_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Inventory_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Inventory_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Options = {
  create?: Maybe<VariantsFields_Options_Create>;
  delete?: Maybe<VariantsFields_Options_Delete>;
  read?: Maybe<VariantsFields_Options_Read>;
  update?: Maybe<VariantsFields_Options_Update>;
};

export type VariantsFields_Options_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Options_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Options_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Options_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_PriceInEur = {
  create?: Maybe<VariantsFields_PriceInEur_Create>;
  delete?: Maybe<VariantsFields_PriceInEur_Delete>;
  read?: Maybe<VariantsFields_PriceInEur_Read>;
  update?: Maybe<VariantsFields_PriceInEur_Update>;
};

export type VariantsFields_PriceInEurEnabled = {
  create?: Maybe<VariantsFields_PriceInEurEnabled_Create>;
  delete?: Maybe<VariantsFields_PriceInEurEnabled_Delete>;
  read?: Maybe<VariantsFields_PriceInEurEnabled_Read>;
  update?: Maybe<VariantsFields_PriceInEurEnabled_Update>;
};

export type VariantsFields_PriceInEurEnabled_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_PriceInEurEnabled_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_PriceInEurEnabled_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_PriceInEurEnabled_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_PriceInEur_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_PriceInEur_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_PriceInEur_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_PriceInEur_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Product = {
  create?: Maybe<VariantsFields_Product_Create>;
  delete?: Maybe<VariantsFields_Product_Delete>;
  read?: Maybe<VariantsFields_Product_Read>;
  update?: Maybe<VariantsFields_Product_Update>;
};

export type VariantsFields_Product_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Product_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Product_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Product_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Title = {
  create?: Maybe<VariantsFields_Title_Create>;
  delete?: Maybe<VariantsFields_Title_Delete>;
  read?: Maybe<VariantsFields_Title_Read>;
  update?: Maybe<VariantsFields_Title_Update>;
};

export type VariantsFields_Title_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Title_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Title_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_Title_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_UpdatedAt = {
  create?: Maybe<VariantsFields_UpdatedAt_Create>;
  delete?: Maybe<VariantsFields_UpdatedAt_Delete>;
  read?: Maybe<VariantsFields_UpdatedAt_Read>;
  update?: Maybe<VariantsFields_UpdatedAt_Update>;
};

export type VariantsFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type VariantsReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantsReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantsReadVersionsAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantsReadVersionsDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantsUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VariantsUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AddressesAccess = {
  create?: Maybe<AddressesCreateAccess>;
  delete?: Maybe<AddressesDeleteAccess>;
  fields?: Maybe<AddressesFields>;
  read?: Maybe<AddressesReadAccess>;
  update?: Maybe<AddressesUpdateAccess>;
};

export type AddressesDocAccess = {
  create?: Maybe<AddressesCreateDocAccess>;
  delete?: Maybe<AddressesDeleteDocAccess>;
  fields?: Maybe<AddressesDocAccessFields>;
  read?: Maybe<AddressesReadDocAccess>;
  update?: Maybe<AddressesUpdateDocAccess>;
};

export type AllMedia = {
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
  create?: Maybe<CartsCreateAccess>;
  delete?: Maybe<CartsDeleteAccess>;
  fields?: Maybe<CartsFields>;
  read?: Maybe<CartsReadAccess>;
  update?: Maybe<CartsUpdateAccess>;
};

export type CartsDocAccess = {
  create?: Maybe<CartsCreateDocAccess>;
  delete?: Maybe<CartsDeleteDocAccess>;
  fields?: Maybe<CartsDocAccessFields>;
  read?: Maybe<CartsReadDocAccess>;
  update?: Maybe<CartsUpdateDocAccess>;
};

export type CategoriesAccess = {
  create?: Maybe<CategoriesCreateAccess>;
  delete?: Maybe<CategoriesDeleteAccess>;
  fields?: Maybe<CategoriesFields>;
  read?: Maybe<CategoriesReadAccess>;
  update?: Maybe<CategoriesUpdateAccess>;
};

export type CategoriesDocAccess = {
  create?: Maybe<CategoriesCreateDocAccess>;
  delete?: Maybe<CategoriesDeleteDocAccess>;
  fields?: Maybe<CategoriesDocAccessFields>;
  read?: Maybe<CategoriesReadDocAccess>;
  update?: Maybe<CategoriesUpdateDocAccess>;
};

export type CountAddresses = {
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountCarts = {
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountCategories = {
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountFormSubmissions = {
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountForms = {
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountOrders = {
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPages = {
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadLockedDocuments = {
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadPreferences = {
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountProducts = {
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountSvgMedias = {
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountTransactions = {
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountUsers = {
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountVariantOptions = {
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountVariantTypes = {
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountVariants = {
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountallMedia = {
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type FooterAccess = {
  fields?: Maybe<FooterFields>;
  read?: Maybe<FooterReadAccess>;
  update?: Maybe<FooterUpdateAccess>;
};

export type FooterDocAccess = {
  fields?: Maybe<FooterDocAccessFields>;
  read?: Maybe<FooterReadDocAccess>;
  update?: Maybe<FooterUpdateDocAccess>;
};

export type Form_SubmissionsAccess = {
  create?: Maybe<FormSubmissionsCreateAccess>;
  delete?: Maybe<FormSubmissionsDeleteAccess>;
  fields?: Maybe<FormSubmissionsFields>;
  read?: Maybe<FormSubmissionsReadAccess>;
  update?: Maybe<FormSubmissionsUpdateAccess>;
};

export type Form_SubmissionsDocAccess = {
  create?: Maybe<FormSubmissionsCreateDocAccess>;
  delete?: Maybe<FormSubmissionsDeleteDocAccess>;
  fields?: Maybe<FormSubmissionsDocAccessFields>;
  read?: Maybe<FormSubmissionsReadDocAccess>;
  update?: Maybe<FormSubmissionsUpdateDocAccess>;
};

export type FormsAccess = {
  create?: Maybe<FormsCreateAccess>;
  delete?: Maybe<FormsDeleteAccess>;
  fields?: Maybe<FormsFields>;
  read?: Maybe<FormsReadAccess>;
  update?: Maybe<FormsUpdateAccess>;
};

export type FormsDocAccess = {
  create?: Maybe<FormsCreateDocAccess>;
  delete?: Maybe<FormsDeleteDocAccess>;
  fields?: Maybe<FormsDocAccessFields>;
  read?: Maybe<FormsReadDocAccess>;
  update?: Maybe<FormsUpdateDocAccess>;
};

export type HeaderAccess = {
  fields?: Maybe<HeaderFields>;
  read?: Maybe<HeaderReadAccess>;
  update?: Maybe<HeaderUpdateAccess>;
};

export type HeaderDocAccess = {
  fields?: Maybe<HeaderDocAccessFields>;
  read?: Maybe<HeaderReadDocAccess>;
  update?: Maybe<HeaderUpdateDocAccess>;
};

export type Information_BannerAccess = {
  fields?: Maybe<InformationBannerFields>;
  read?: Maybe<InformationBannerReadAccess>;
  update?: Maybe<InformationBannerUpdateAccess>;
};

export type Information_BannerDocAccess = {
  fields?: Maybe<InformationBannerDocAccessFields>;
  read?: Maybe<InformationBannerReadDocAccess>;
  update?: Maybe<InformationBannerUpdateDocAccess>;
};

export type MediaAccess = {
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
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
  description?: InputMaybe<Scalars['JSON']['input']>;
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  image?: InputMaybe<Scalars['Int']['input']>;
  meta?: InputMaybe<MutationCategory_MetaInput>;
  slug: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCategoryUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  image?: InputMaybe<Scalars['Int']['input']>;
  meta?: InputMaybe<MutationCategoryUpdate_MetaInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCategoryUpdate_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCategory_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
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
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<MutationMedia_SizesInput>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<MutationMediaUpdate_SizesInput>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_SizesInput = {
  categoryPreview?: InputMaybe<MutationMediaUpdate_Sizes_CategoryPreviewInput>;
  thumbnail?: InputMaybe<MutationMediaUpdate_Sizes_ThumbnailInput>;
};

export type MutationMediaUpdate_Sizes_CategoryPreviewInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_SizesInput = {
  categoryPreview?: InputMaybe<MutationMedia_Sizes_CategoryPreviewInput>;
  thumbnail?: InputMaybe<MutationMedia_Sizes_ThumbnailInput>;
};

export type MutationMedia_Sizes_CategoryPreviewInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
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
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  layout?: InputMaybe<Scalars['JSON']['input']>;
  meta?: InputMaybe<MutationPage_MetaInput>;
  publishedOn?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPageUpdateInput = {
  _status?: InputMaybe<PageUpdate__Status_MutationInput>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  layout?: InputMaybe<Scalars['JSON']['input']>;
  meta?: InputMaybe<MutationPageUpdate_MetaInput>;
  publishedOn?: InputMaybe<Scalars['String']['input']>;
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
  categories?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  enableVariants?: InputMaybe<Scalars['Boolean']['input']>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  inventory?: InputMaybe<Scalars['Float']['input']>;
  layout?: InputMaybe<Scalars['JSON']['input']>;
  meta?: InputMaybe<MutationProduct_MetaInput>;
  priceInEUR?: InputMaybe<Scalars['Float']['input']>;
  priceInEUREnabled?: InputMaybe<Scalars['Boolean']['input']>;
  relatedProducts?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  slug: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  variantTypes?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type MutationProductUpdateInput = {
  _status?: InputMaybe<ProductUpdate__Status_MutationInput>;
  categories?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  enableVariants?: InputMaybe<Scalars['Boolean']['input']>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  inventory?: InputMaybe<Scalars['Float']['input']>;
  layout?: InputMaybe<Scalars['JSON']['input']>;
  meta?: InputMaybe<MutationProductUpdate_MetaInput>;
  priceInEUR?: InputMaybe<Scalars['Float']['input']>;
  priceInEUREnabled?: InputMaybe<Scalars['Boolean']['input']>;
  relatedProducts?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  variantTypes?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type MutationProductUpdate_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
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
  priceInEUR?: InputMaybe<Scalars['Float']['input']>;
  priceInEUREnabled?: InputMaybe<Scalars['Boolean']['input']>;
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
  priceInEUR?: InputMaybe<Scalars['Float']['input']>;
  priceInEUREnabled?: InputMaybe<Scalars['Boolean']['input']>;
  product?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type OrdersAccess = {
  create?: Maybe<OrdersCreateAccess>;
  delete?: Maybe<OrdersDeleteAccess>;
  fields?: Maybe<OrdersFields>;
  read?: Maybe<OrdersReadAccess>;
  update?: Maybe<OrdersUpdateAccess>;
};

export type OrdersDocAccess = {
  create?: Maybe<OrdersCreateDocAccess>;
  delete?: Maybe<OrdersDeleteDocAccess>;
  fields?: Maybe<OrdersDocAccessFields>;
  read?: Maybe<OrdersReadDocAccess>;
  update?: Maybe<OrdersUpdateDocAccess>;
};

export type PagesAccess = {
  create?: Maybe<PagesCreateAccess>;
  delete?: Maybe<PagesDeleteAccess>;
  fields?: Maybe<PagesFields>;
  read?: Maybe<PagesReadAccess>;
  readVersions?: Maybe<PagesReadVersionsAccess>;
  update?: Maybe<PagesUpdateAccess>;
};

export type PagesDocAccess = {
  create?: Maybe<PagesCreateDocAccess>;
  delete?: Maybe<PagesDeleteDocAccess>;
  fields?: Maybe<PagesDocAccessFields>;
  read?: Maybe<PagesReadDocAccess>;
  readVersions?: Maybe<PagesReadVersionsDocAccess>;
  update?: Maybe<PagesUpdateDocAccess>;
};

export type Payload_Locked_DocumentsAccess = {
  create?: Maybe<PayloadLockedDocumentsCreateAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteAccess>;
  fields?: Maybe<PayloadLockedDocumentsFields>;
  read?: Maybe<PayloadLockedDocumentsReadAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateAccess>;
};

export type Payload_Locked_DocumentsDocAccess = {
  create?: Maybe<PayloadLockedDocumentsCreateDocAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteDocAccess>;
  fields?: Maybe<PayloadLockedDocumentsDocAccessFields>;
  read?: Maybe<PayloadLockedDocumentsReadDocAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateDocAccess>;
};

export type Payload_PreferencesAccess = {
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type ProductsAccess = {
  create?: Maybe<ProductsCreateAccess>;
  delete?: Maybe<ProductsDeleteAccess>;
  fields?: Maybe<ProductsFields>;
  read?: Maybe<ProductsReadAccess>;
  readVersions?: Maybe<ProductsReadVersionsAccess>;
  update?: Maybe<ProductsUpdateAccess>;
};

export type ProductsDocAccess = {
  create?: Maybe<ProductsCreateDocAccess>;
  delete?: Maybe<ProductsDeleteDocAccess>;
  fields?: Maybe<ProductsDocAccessFields>;
  read?: Maybe<ProductsReadDocAccess>;
  readVersions?: Maybe<ProductsReadVersionsDocAccess>;
  update?: Maybe<ProductsUpdateDocAccess>;
};

export type Svg_MediaAccess = {
  create?: Maybe<SvgMediaCreateAccess>;
  delete?: Maybe<SvgMediaDeleteAccess>;
  fields?: Maybe<SvgMediaFields>;
  read?: Maybe<SvgMediaReadAccess>;
  update?: Maybe<SvgMediaUpdateAccess>;
};

export type Svg_MediaDocAccess = {
  create?: Maybe<SvgMediaCreateDocAccess>;
  delete?: Maybe<SvgMediaDeleteDocAccess>;
  fields?: Maybe<SvgMediaDocAccessFields>;
  read?: Maybe<SvgMediaReadDocAccess>;
  update?: Maybe<SvgMediaUpdateDocAccess>;
};

export type TransactionsAccess = {
  create?: Maybe<TransactionsCreateAccess>;
  delete?: Maybe<TransactionsDeleteAccess>;
  fields?: Maybe<TransactionsFields>;
  read?: Maybe<TransactionsReadAccess>;
  update?: Maybe<TransactionsUpdateAccess>;
};

export type TransactionsDocAccess = {
  create?: Maybe<TransactionsCreateDocAccess>;
  delete?: Maybe<TransactionsDeleteDocAccess>;
  fields?: Maybe<TransactionsDocAccessFields>;
  read?: Maybe<TransactionsReadDocAccess>;
  update?: Maybe<TransactionsUpdateDocAccess>;
};

export type UsersAccess = {
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
};

export type UsersLoginResult = {
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type VariantOptionsAccess = {
  create?: Maybe<VariantOptionsCreateAccess>;
  delete?: Maybe<VariantOptionsDeleteAccess>;
  fields?: Maybe<VariantOptionsFields>;
  read?: Maybe<VariantOptionsReadAccess>;
  update?: Maybe<VariantOptionsUpdateAccess>;
};

export type VariantOptionsDocAccess = {
  create?: Maybe<VariantOptionsCreateDocAccess>;
  delete?: Maybe<VariantOptionsDeleteDocAccess>;
  fields?: Maybe<VariantOptionsDocAccessFields>;
  read?: Maybe<VariantOptionsReadDocAccess>;
  update?: Maybe<VariantOptionsUpdateDocAccess>;
};

export type VariantTypesAccess = {
  create?: Maybe<VariantTypesCreateAccess>;
  delete?: Maybe<VariantTypesDeleteAccess>;
  fields?: Maybe<VariantTypesFields>;
  read?: Maybe<VariantTypesReadAccess>;
  update?: Maybe<VariantTypesUpdateAccess>;
};

export type VariantTypesDocAccess = {
  create?: Maybe<VariantTypesCreateDocAccess>;
  delete?: Maybe<VariantTypesDeleteDocAccess>;
  fields?: Maybe<VariantTypesDocAccessFields>;
  read?: Maybe<VariantTypesReadDocAccess>;
  update?: Maybe<VariantTypesUpdateDocAccess>;
};

export type VariantsAccess = {
  create?: Maybe<VariantsCreateAccess>;
  delete?: Maybe<VariantsDeleteAccess>;
  fields?: Maybe<VariantsFields>;
  read?: Maybe<VariantsReadAccess>;
  readVersions?: Maybe<VariantsReadVersionsAccess>;
  update?: Maybe<VariantsUpdateAccess>;
};

export type VariantsDocAccess = {
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

export type VersionsPage_Version__Content_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
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
  version__content?: InputMaybe<VersionsPage_Version__Content_Operator>;
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>;
  version__generateSlug?: InputMaybe<VersionsPage_Version__GenerateSlug_Operator>;
  version__meta__description?: InputMaybe<VersionsPage_Version__Meta__Description_Operator>;
  version__meta__image?: InputMaybe<VersionsPage_Version__Meta__Image_Operator>;
  version__meta__title?: InputMaybe<VersionsPage_Version__Meta__Title_Operator>;
  version__publishedOn?: InputMaybe<VersionsPage_Version__PublishedOn_Operator>;
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
  version__content?: InputMaybe<VersionsPage_Version__Content_Operator>;
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>;
  version__generateSlug?: InputMaybe<VersionsPage_Version__GenerateSlug_Operator>;
  version__meta__description?: InputMaybe<VersionsPage_Version__Meta__Description_Operator>;
  version__meta__image?: InputMaybe<VersionsPage_Version__Meta__Image_Operator>;
  version__meta__title?: InputMaybe<VersionsPage_Version__Meta__Title_Operator>;
  version__publishedOn?: InputMaybe<VersionsPage_Version__PublishedOn_Operator>;
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
  version__content?: InputMaybe<VersionsPage_Version__Content_Operator>;
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>;
  version__generateSlug?: InputMaybe<VersionsPage_Version__GenerateSlug_Operator>;
  version__meta__description?: InputMaybe<VersionsPage_Version__Meta__Description_Operator>;
  version__meta__image?: InputMaybe<VersionsPage_Version__Meta__Image_Operator>;
  version__meta__title?: InputMaybe<VersionsPage_Version__Meta__Title_Operator>;
  version__publishedOn?: InputMaybe<VersionsPage_Version__PublishedOn_Operator>;
  version__slug?: InputMaybe<VersionsPage_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsPage_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPage_Version__UpdatedAt_Operator>;
};

export type VersionsPages = {
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

export type VersionsProduct_Version__Gallery_Operator = {
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

export type VersionsProduct_Version__PriceInEurEnabled_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsProduct_Version__PriceInEur_Operator = {
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
  version__gallery?: InputMaybe<VersionsProduct_Version__Gallery_Operator>;
  version__generateSlug?: InputMaybe<VersionsProduct_Version__GenerateSlug_Operator>;
  version__inventory?: InputMaybe<VersionsProduct_Version__Inventory_Operator>;
  version__meta__description?: InputMaybe<VersionsProduct_Version__Meta__Description_Operator>;
  version__meta__image?: InputMaybe<VersionsProduct_Version__Meta__Image_Operator>;
  version__meta__title?: InputMaybe<VersionsProduct_Version__Meta__Title_Operator>;
  version__priceInEUR?: InputMaybe<VersionsProduct_Version__PriceInEur_Operator>;
  version__priceInEUREnabled?: InputMaybe<VersionsProduct_Version__PriceInEurEnabled_Operator>;
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
  version__gallery?: InputMaybe<VersionsProduct_Version__Gallery_Operator>;
  version__generateSlug?: InputMaybe<VersionsProduct_Version__GenerateSlug_Operator>;
  version__inventory?: InputMaybe<VersionsProduct_Version__Inventory_Operator>;
  version__meta__description?: InputMaybe<VersionsProduct_Version__Meta__Description_Operator>;
  version__meta__image?: InputMaybe<VersionsProduct_Version__Meta__Image_Operator>;
  version__meta__title?: InputMaybe<VersionsProduct_Version__Meta__Title_Operator>;
  version__priceInEUR?: InputMaybe<VersionsProduct_Version__PriceInEur_Operator>;
  version__priceInEUREnabled?: InputMaybe<VersionsProduct_Version__PriceInEurEnabled_Operator>;
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
  version__gallery?: InputMaybe<VersionsProduct_Version__Gallery_Operator>;
  version__generateSlug?: InputMaybe<VersionsProduct_Version__GenerateSlug_Operator>;
  version__inventory?: InputMaybe<VersionsProduct_Version__Inventory_Operator>;
  version__meta__description?: InputMaybe<VersionsProduct_Version__Meta__Description_Operator>;
  version__meta__image?: InputMaybe<VersionsProduct_Version__Meta__Image_Operator>;
  version__meta__title?: InputMaybe<VersionsProduct_Version__Meta__Title_Operator>;
  version__priceInEUR?: InputMaybe<VersionsProduct_Version__PriceInEur_Operator>;
  version__priceInEUREnabled?: InputMaybe<VersionsProduct_Version__PriceInEurEnabled_Operator>;
  version__relatedProducts?: InputMaybe<VersionsProduct_Version__RelatedProducts_Operator>;
  version__slug?: InputMaybe<VersionsProduct_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsProduct_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsProduct_Version__UpdatedAt_Operator>;
  version__variantTypes?: InputMaybe<VersionsProduct_Version__VariantTypes_Operator>;
};

export type VersionsProducts = {
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

export type VersionsVariant_Version__PriceInEurEnabled_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsVariant_Version__PriceInEur_Operator = {
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
  version__priceInEUR?: InputMaybe<VersionsVariant_Version__PriceInEur_Operator>;
  version__priceInEUREnabled?: InputMaybe<VersionsVariant_Version__PriceInEurEnabled_Operator>;
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
  version__priceInEUR?: InputMaybe<VersionsVariant_Version__PriceInEur_Operator>;
  version__priceInEUREnabled?: InputMaybe<VersionsVariant_Version__PriceInEurEnabled_Operator>;
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
  version__priceInEUR?: InputMaybe<VersionsVariant_Version__PriceInEur_Operator>;
  version__priceInEUREnabled?: InputMaybe<VersionsVariant_Version__PriceInEurEnabled_Operator>;
  version__product?: InputMaybe<VersionsVariant_Version__Product_Operator>;
  version__title?: InputMaybe<VersionsVariant_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsVariant_Version__UpdatedAt_Operator>;
};

export type VersionsVariants = {
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

export type HeaderQueryVariables = Exact<{
  locale: LocaleInputType;
}>;


export type HeaderQuery = { Header?: { slogan?: string | null, icon?: { id: number, svgContent?: string | null } | null, navItems?: Array<{ id?: string | null, link?: { label?: string | null, type?: Header_NavItems_Link_Type | null, newTab?: boolean | null, url?: string | null, reference?: { value?: { id: number, slug?: string | null } | null } | null } | null }> | null, navButtons?: Array<{ id?: string | null, link?: { label?: string | null, type?: Header_NavButtons_Link_Type | null, newTab?: boolean | null, url?: string | null, reference?: { value?: { id: number, slug?: string | null } | null } | null } | null }> | null } | null };
