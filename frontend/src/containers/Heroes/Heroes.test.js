describe("Heroes.service.js", () => {
  beforeAll(() => {
    jest.doMock("../../commons/Http", () => ({
      get: jest.fn(url => Promise.resolve(url))
    }));
  });

  afterAll(() => {
    jest.dontMock("../../commons/Http");
  });

  describe("List Heroes", () => {
    it("should listHeroesService method defined", () => {
      const { listHeroesService } = require("./Heroes.service");
      expect(listHeroesService).toBeDefined();
    });

    it("should listHeroesService call correct url", async () => {
      expect.assertions(1);
      const { listHeroesService } = require("./Heroes.service");
      await listHeroesService(10, 10).then(data =>
        expect(data.url).toEqual("/characters?limit=10&offset=10&")
      );
    });
  });
});
