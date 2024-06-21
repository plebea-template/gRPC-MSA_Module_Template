import importToArray from "import-to-array";
import * as moment from "moment-timezone";

import { Module } from "@nestjs/common";

import * as providers from "src/common/providers";
import * as modules from "src/modules";

@Module({
  imports: [...importToArray(providers), ...importToArray(modules)],
})
export class AppModule {
  constructor() {
    moment.tz.setDefault("Asia/Seoul");
  }
}
