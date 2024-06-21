import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";

const options: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => ({
    type: "postgres",
    host: config.get("DB_HOST"),
    port: config.get("DB_PORT"),
    username: config.get("DB_USERNAME"),
    password: config.get("DB_PASSWORD"),
    database: config.get("DB_NAME"),
    entities: [],
    synchronize: true,
  }),
};

@Module({
  imports: [TypeOrmModule.forRootAsync(options)],
})
export class DatabaseModule {}
