import * as assert from 'assert';
import * as jsExports from '@my-workspace/js-exports';
import * as jsGlobalExports from '@my-workspace/js-global-exports';
import * as tsGlobalExports from '@my-workspace/ts-global-exports';
import tsDefaultExport from '@my-workspace/ts-default-export';

// 这里我们不导出任何内容,只是演示导入

export function checkImports() {
  assert(typeof jsExports.exportsFunction === 'function', 'jsExports.exportsFunction should be a function');
  assert(typeof jsExports.exportsVariable === 'string', 'jsExports.exportsVariable should be a string');
  assert(typeof jsGlobalExports.moduleExportsFunction === 'function', 'jsGlobalExports.moduleExportsFunction should be a function');
  assert(typeof jsGlobalExports.moduleExportsVariable === 'string', 'jsGlobalExports.moduleExportsVariable should be a string');
  assert(typeof tsGlobalExports.tsGlobalExportsFunction === 'function', 'tsGlobalExports.tsGlobalExportsFunction should be a function');
  assert(typeof tsGlobalExports.tsGlobalExportsVariable === 'string', 'tsGlobalExports.tsGlobalExportsVariable should be a string');
  assert(typeof tsDefaultExport.tsDefaultExportFunction === 'function', 'tsDefaultExport.tsDefaultExportFunction should be a function');
  assert(typeof tsDefaultExport.tsDefaultExportVariable === 'string', 'tsDefaultExport.tsDefaultExportVariable should be a string');
}