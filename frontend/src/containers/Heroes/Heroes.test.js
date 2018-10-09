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

    it("should listHeroesService without terms call correct url", async () => {
      expect.assertions(1);
      const { listHeroesService } = require("./Heroes.service");
      await listHeroesService(10, 10).then(data =>
        expect(data.url).toEqual("/characters?limit=10&offset=10&")
      );
    });

    it("should listHeroesService with terms call correct url", async () => {
      expect.assertions(1);
      const { listHeroesService } = require("./Heroes.service");
      await listHeroesService(10, 10, 'asd').then(data =>
        expect(data.url).toEqual("/characters?limit=10&offset=10&nameStartsWith=asd&")
      );
    });
    
    it("should listHeroesService call correct url", async () => {
      expect.assertions(1);
      const { getHeroService } = require("./Heroes.service");
      await getHeroService(10).then(data =>
        expect(data.url).toEqual("/characters/10?")
      );
    });
  });
});
