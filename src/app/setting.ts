export interface SettingResponse {
  status: number;
  data: Settings;
}

export interface Settings{
  lunchAmount?:SettingData;
  discountAmount?: SettingData;
  newAmount?: SettingData;
}

interface SettingData{
  label: string;
  price?: number;
  percentage?: number;
};
