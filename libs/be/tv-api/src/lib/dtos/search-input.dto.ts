import { ISearchDto } from '@shared/models';
import { ApiProperty } from '@nestjs/swagger';

export class SearchInputDto implements ISearchDto {
  @ApiProperty({ required: true })
  query!: string;
  @ApiProperty({ required: false })
  include_adult?: boolean | undefined;
  @ApiProperty({ required: false })
  language?: string | undefined;
  @ApiProperty({ required: false })
  primary_release_year?: string | undefined;
  @ApiProperty({ required: false })
  page?: number | undefined;
  @ApiProperty({ required: false })
  region?: string | undefined;
  @ApiProperty({ required: false })
  year?: string;
}
