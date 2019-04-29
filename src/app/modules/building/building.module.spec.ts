import { BuildingModule } from './building.module';

describe('BuildingModule', () => {
  let buildingModule: BuildingModule;

  beforeEach(() => {
    buildingModule = new BuildingModule();
  });

  it('should create an instance', () => {
    expect(buildingModule).toBeTruthy();
  });
});
