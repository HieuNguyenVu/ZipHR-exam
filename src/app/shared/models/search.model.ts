export interface ISearchModel {
  value: string;
  category: string;
}

export interface ISearchConfiguration {
  defaultValue?: string;
  defaultCategory?: string;
  categories: { value: string; label: string }[];
}
