/* eslint-env detox/detox, mocha */

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show stars', async () => {
    await expect(element(by.id('stars'))).toBeVisible();
  });

  it('should animate in tapping star', async () => {
    await element(by.id('tap-star"')).tap();
    // await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
