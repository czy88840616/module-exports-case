import * as jsExports from '@my-workspace/js-exports';
import * as jsGlobalExports from '@my-workspace/js-global-exports';
import * as tsGlobalExports from '@my-workspace/ts-global-exports';

describe('case-node16', () => {
  describe('js-exports', () => {
    it('should import and use exportsFunction correctly', () => {
      expect(jsExports.exportsFunction()).toBe('I am from exports');
    });

    it('should import and use exportsVariable correctly', () => {
      expect(jsExports.exportsVariable).toBe('This is an exports variable');
    });
  });

  describe('js-global-exports', () => {
    it('should import and use moduleExportsFunction correctly', () => {
      expect(jsGlobalExports.moduleExportsFunction()).toBe('I am from module.exports');
    });

    it('should import and use moduleExportsVariable correctly', () => {
      expect(jsGlobalExports.moduleExportsVariable).toBe('This is a module.exports variable');
    });
  });

  describe('ts-global-exports', () => {
    it('should import and use tsGlobalExportsFunction correctly', () => {
      expect(tsGlobalExports.tsGlobalExportsFunction()).toBe('I am from ts-global-exports');
    });

    it('should import and use tsGlobalExportsVariable correctly', () => {
      expect(tsGlobalExports.tsGlobalExportsVariable).toBe('This is a ts-global-exports variable');
    });
  });
});