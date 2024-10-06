import jsExports from '@my-workspace/js-exports';
import jsGlobalExports from '@my-workspace/js-global-exports';
import tsGlobalExports from '@my-workspace/ts-global-exports';
import tsDefaultExport from '@my-workspace/ts-default-export';

// 这里因为使用了 allowSyntheticDefaultImports，所以前三个都不会报错，但是实际在测试时都会报错

console.log('Imported from js-exports:', jsExports);
console.log('Imported from js-global-exports:', jsGlobalExports);
console.log('Imported from ts-global-exports:', tsGlobalExports);
console.log('Imported from ts-default-export:', tsDefaultExport);
// 这里我们不导出任何内容,只是演示导入