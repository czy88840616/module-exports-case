import * as jsExports from '@my-workspace/js-exports';
import * as jsGlobalExports from '@my-workspace/js-global-exports';

export function logExports() {
  console.log('Imported from js-exports:');
  console.log('exportsFunction:', jsExports.exportsFunction());
  console.log('exportsVariable:', jsExports.exportsVariable);

  console.log('Imported from js-global-exports:');
  console.log('moduleExportsFunction:', jsGlobalExports.moduleExportsFunction());
  console.log('moduleExportsVariable:', jsGlobalExports.moduleExportsVariable);
}

// 如果直接运行这个文件,就执行 logExports 函数
if (require.main === module) {
  logExports();
}