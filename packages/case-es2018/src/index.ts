import * as jsExports from '@my-workspace/js-exports';
import * as jsGlobalExports from '@my-workspace/js-global-exports';
import * as tsGlobalExports from '@my-workspace/ts-global-exports';
import tsDefaultExport from '@my-workspace/ts-default-export';

console.log('Imported from js-exports:', jsExports);
console.log('Imported from js-global-exports:', jsGlobalExports);
console.log('Imported from ts-global-exports:', tsGlobalExports);
console.log('Imported from ts-default-export:', tsDefaultExport);

// 这里我们不导出任何内容,只是演示导入