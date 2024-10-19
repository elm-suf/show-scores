export type ISearchDto = {
  query: string;
  // Defaults to false
  include_adult?: boolean;
  // Defaults to en-US
  language?: string;

  primary_release_year?: string;
  // Defaults to 1
  page?: number;

  region?: string;

  year?: string;
};
