# HolidayService2
Web service that calculates holiday dates. (Version 2.0.1)

## Version: 1.0.0

### Security
**clientID**  

|apiKey|*API Key*|
|---|---|
|Name|X-IBM-Client-Id|
|In|header|
|Description||

### /GetCountriesAvailable

#### POST
##### Summary:

Operation GetCountriesAvailable

##### Description:

Get the available countries.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [GetCountriesAvailableInput](#getcountriesavailableinput) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| default |  | [GetCountriesAvailableOutput](#getcountriesavailableoutput) |

### /GetHolidaysAvailable

#### POST
##### Summary:

Operation GetHolidaysAvailable

##### Description:

Get the available holidays for a specified country.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [GetHolidaysAvailableInput](#getholidaysavailableinput) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| default |  | [GetHolidaysAvailableOutput](#getholidaysavailableoutput) |

### /GetHolidayDate

#### POST
##### Summary:

Operation GetHolidayDate

##### Description:

Get the date of a specific holiday.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [GetHolidayDateInput](#getholidaydateinput) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| default |  | [GetHolidayDateOutput](#getholidaydateoutput) |

### /GetHolidaysForDateRange

#### POST
##### Summary:

Operation GetHolidaysForDateRange

##### Description:

Get the holidays for a date range.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [GetHolidaysForDateRangeInput](#getholidaysfordaterangeinput) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| default |  | [GetHolidaysForDateRangeOutput](#getholidaysfordaterangeoutput) |

### /GetHolidaysForYear

#### POST
##### Summary:

Operation GetHolidaysForYear

##### Description:

Get the holidays for an entire year.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [GetHolidaysForYearInput](#getholidaysforyearinput) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| default |  | [GetHolidaysForYearOutput](#getholidaysforyearoutput) |

### /GetHolidaysForMonth

#### POST
##### Summary:

Operation GetHolidaysForMonth

##### Description:

Get the holidays for a specific month.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [GetHolidaysForMonthInput](#getholidaysformonthinput) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| default |  | [GetHolidaysForMonthOutput](#getholidaysformonthoutput) |

### Models


#### Security

Header for WS-Security

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| UsernameToken | object |  | No |
| Timestamp | object |  | No |

#### GetCountriesAvailableInput

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Envelope | object |  | Yes |

#### GetCountriesAvailableHeader

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Security | [Security](#security) |  | No |

#### GetCountriesAvailableOutput

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Envelope | object |  | Yes |

#### GetHolidaysAvailableInput

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Envelope | object |  | Yes |

#### GetHolidaysAvailableHeader

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Security | [Security](#security) |  | No |

#### GetHolidaysAvailableOutput

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Envelope | object |  | Yes |

#### GetHolidayDateInput

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Envelope | object |  | Yes |

#### GetHolidayDateHeader

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Security | [Security](#security) |  | No |

#### GetHolidayDateOutput

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Envelope | object |  | Yes |

#### GetHolidaysForDateRangeInput

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Envelope | object |  | Yes |

#### GetHolidaysForDateRangeHeader

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Security | [Security](#security) |  | No |

#### GetHolidaysForDateRangeOutput

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Envelope | object |  | Yes |

#### GetHolidaysForYearInput

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Envelope | object |  | Yes |

#### GetHolidaysForYearHeader

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Security | [Security](#security) |  | No |

#### GetHolidaysForYearOutput

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Envelope | object |  | Yes |

#### GetHolidaysForMonthInput

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Envelope | object |  | Yes |

#### GetHolidaysForMonthHeader

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Security | [Security](#security) |  | No |

#### GetHolidaysForMonthOutput

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Envelope | object |  | Yes |

#### GetCountriesAvailable_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

#### GetCountriesAvailableResponse_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| GetCountriesAvailableResult | [ArrayOfCountryCode_tns](#arrayofcountrycode_tns) |  | No |

#### GetHolidaysAvailable_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| countryCode | [Country_tns](#country_tns) |  | Yes |

#### GetHolidaysAvailableResponse_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| GetHolidaysAvailableResult | [ArrayOfHolidayCode_tns](#arrayofholidaycode_tns) |  | No |

#### GetHolidayDate_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| countryCode | [Country_tns](#country_tns) |  | Yes |
| holidayCode | string |  | No |
| year | integer |  | Yes |

#### GetHolidayDateResponse_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| GetHolidayDateResult | dateTime |  | Yes |

#### GetHolidaysForDateRange_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| countryCode | [Country_tns](#country_tns) |  | Yes |
| startDate | dateTime |  | Yes |
| endDate | dateTime |  | Yes |

#### GetHolidaysForDateRangeResponse_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| GetHolidaysForDateRangeResult | [ArrayOfHoliday_tns](#arrayofholiday_tns) |  | No |

#### GetHolidaysForYear_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| countryCode | [Country_tns](#country_tns) |  | Yes |
| year | integer |  | Yes |

#### GetHolidaysForYearResponse_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| GetHolidaysForYearResult | [ArrayOfHoliday_tns](#arrayofholiday_tns) |  | No |

#### GetHolidaysForMonth_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| countryCode | [Country_tns](#country_tns) |  | Yes |
| year | integer |  | Yes |
| month | integer |  | Yes |

#### GetHolidaysForMonthResponse_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| GetHolidaysForMonthResult | [ArrayOfHoliday_tns](#arrayofholiday_tns) |  | No |

#### ArrayOfCountryCode_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| CountryCode | [ [CountryCode_tns](#countrycode_tns) ] |  | No |

#### Country_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Country_tns | string |  |  |

#### ArrayOfHolidayCode_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| HolidayCode | [ [HolidayCode_tns](#holidaycode_tns) ] |  | No |

#### ArrayOfHoliday_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Holiday | [ [Holiday_tns](#holiday_tns) ] |  | No |

#### CountryCode_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| CountryCode_tns |  |  |  |

#### HolidayCode_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| HolidayCode_tns |  |  |  |

#### Holiday_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Country | [Country_tns](#country_tns) |  | Yes |
| HolidayCode | string |  | No |
| Descriptor | string |  | No |
| HolidayType | [HolidayType_tns](#holidaytype_tns) |  | Yes |
| DateType | [HolidayDateType_tns](#holidaydatetype_tns) |  | Yes |
| BankHoliday | [BankHoliday_tns](#bankholiday_tns) |  | Yes |
| Date | dateTime |  | Yes |
| RelatedHolidayCode | string |  | No |
| ApplicableRegions | [ArrayOfRegionCode_tns](#arrayofregioncode_tns) |  | No |

#### CodeDescriptionBase_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Code | string |  | No |
| Description | string |  | No |

#### HolidayType_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| HolidayType_tns | string |  |  |

#### HolidayDateType_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| HolidayDateType_tns | string |  |  |

#### BankHoliday_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| BankHoliday_tns | string |  |  |

#### ArrayOfRegionCode_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| RegionCode | [ [RegionCode_tns](#regioncode_tns) ] |  | No |

#### RegionCode_tns

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| RegionCode_tns |  |  |  |