import { addReflectionToGrpcConfig } from "nestjs-grpc-reflection";

import { GrpcOptions, Transport } from "@nestjs/microservices";

export const serviceHost = "localhost";
export const servicePort = 10001;

export const grpcClientOptions: GrpcOptions = addReflectionToGrpcConfig({
  transport: Transport.GRPC,
  options: {
    url: `${serviceHost}:${servicePort}`,
    package: "hello",
    protoPath: "src/modules/hello/protos/hello.proto",
  },
});
