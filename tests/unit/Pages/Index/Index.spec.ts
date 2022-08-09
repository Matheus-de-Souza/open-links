import { shallowMount } from '@vue/test-utils';

import Index from '@/Pages/Index.vue';

describe('Pages/Index.vue', () => {
  it('Smoke Test', () => {
    const wrapper = shallowMount(Index, { });
    expect(wrapper).toBeTruthy();
  });

  describe('InputOpener', () => {
    test('opens links on input', () => {
      // Arrange
      const spy = jest
        .spyOn(window, 'open')
        .mockImplementation(
          (url?: string, target?: string) => null,
        );

      const wrapper = shallowMount(Index, { });

      wrapper.vm.links = `
 https://cli.vuejs.org/config/#eslint https://cli.vuejs.org/config/#eslint
 https://cli.vuejs.org/config/#eslint https://cli.vuejs.org/config/#eslint 
 https://cli.vuejs.org/config/#eslint`;

      // Act
      wrapper.vm.openLinks();

      // Assert
      expect(spy).toHaveBeenCalledTimes(5);
      expect(spy).toHaveBeenCalledWith('https://cli.vuejs.org/config/#eslint', '_blank');

      spy.mockRestore();
    });
  });
});
