import { Test, TestingModule } from "@nestjs/testing";

import { HelloService } from "../../../src/modules/hello/hello.service";

describe("HelloService", () => {
  let service: HelloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelloService],
    }).compile();

    service = module.get<HelloService>(HelloService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
