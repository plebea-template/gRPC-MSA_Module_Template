import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions } from "@nestjs/microservices";

import {
  grpcClientOptions,
  serviceHost,
  servicePort,
} from "src/modules/hello/options/hello.option";

import { AppModule } from "./modules/app";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    grpcClientOptions,
  );

  await app.listen();

  Logger.log(
    `Microservice is listening on ${serviceHost}:${servicePort}`,
    "Bootstrap",
  );
}
bootstrap();
