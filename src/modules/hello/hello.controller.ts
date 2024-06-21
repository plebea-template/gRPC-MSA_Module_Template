import { Observable } from "rxjs";

import { Controller } from "@nestjs/common";

import {
  HelloServiceController,
  HelloServiceControllerMethods,
  SayHelloResponse,
} from "./generated/hello.proto";
import { HelloService } from "./hello.service";

@Controller("hello")
@HelloServiceControllerMethods()
export class HelloController implements HelloServiceController {
  constructor(private readonly helloService: HelloService) {}

  SayHello():
    | SayHelloResponse
    | Promise<SayHelloResponse>
    | Observable<SayHelloResponse> {
    return { message: this.helloService.sayHello() };
  }
}
