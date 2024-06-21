import { Test, TestingModule } from "@nestjs/testing";

import { HelloController } from "src/modules/hello/hello.controller";
import { HelloService } from "src/modules/hello/hello.service";

describe("HelloController", () => {
  let controller: HelloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
      providers: [HelloService],
    }).compile();

    controller = module.get<HelloController>(HelloController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
