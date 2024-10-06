import * as jsExports from '@my-workspace/js-exports';
import * as jsGlobalExports from '@my-workspace/js-global-exports';
import * as tsGlobalExports from '@my-workspace/ts-global-exports';

console.log('Imported from js-exports:', jsExports);
console.log('Imported from js-global-exports:', jsGlobalExports);
console.log('Imported from ts-global-exports:', tsGlobalExports);

// 这里我们不导出任何内容,只是演示导入