import {
  Controller,
  Get,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ExplorerService } from './explorer.service';
import { IParams } from './types';

@Controller('/api')
@UsePipes(ValidationPipe)
export class AppController {
  public constructor(private readonly explorerService: ExplorerService) {}

  @Get('/:type/:grid/:network')
  public resolver(
    @Param() params: IParams,
    @Query('flat') flatten: 'false',
  ): any {
    const urls = IParams.getUrls(params);
    return this.explorerService.fetchAll(urls, flatten !== 'false');
  }
}
