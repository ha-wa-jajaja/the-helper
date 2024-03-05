export type WeatherData = {
    success: string;
    result: Result;
    records: Records;
};

export type Records = {
    locations: RecordsLocation[];
};

export type RecordsLocation = {
    datasetDescription: string;
    locationsName: string;
    dataid: string;
    location: LocationLocation[];
};

export type LocationLocation = {
    locationName: string;
    geocode: string;
    lat: string;
    lon: string;
    weatherElement: WeatherElement[];
};

export type ElementNames =
    | "PoP12h"
    // 12小時降雨機率
    | "T"
    // 平均溫度
    | "RH"
    | "MinCI"
    | "WS"
    | "MaxAT"
    | "Wx"
    // 天氣現象
    | "MaxCI"
    | "MinT"
    // 最低溫度
    | "UVI"
    | "WeatherDescription"
    | "MinAT"
    | "MaxT"
    // 最高溫度
    | "WD"
    | "Td";

export type WeatherElement = {
    elementName: ElementNames;
    description: string;
    time: Time[];
};

export type Time = {
    startTime: Date;
    endTime: Date;
    elementValue: ElementValue[];
};

export type ElementValue = {
    value: string;
    measures: Measures;
};

export type Measures =
    | "百分比"
    | "攝氏度"
    | "NA"
    | "自定義 CI 文字"
    | "公尺/秒"
    | "蒲福風級"
    | "自定義 Wx 文字"
    | "自定義 Wx 單位"
    | "NA "
    | "紫外線指數"
    | "曝曬級數"
    | "8方位";

export type Result = {
    resource_id: string;
    fields: Field[];
};

export type Field = {
    id: string;
    type: FieldType;
};

export type FieldType = "String" | "Double" | "Timestamp";
