# JavaScript 模块导出与导入测试工作空间

这个仓库是一个 pnpm 工作空间,用于测试和演示不同的 JavaScript 模块导出方式以及它们在 TypeScript 项目中的导入方法。

## 项目结构

- `packages/js-exports`: 使用 `exports` 语法导出的纯 JavaScript 模块
- `packages/js-global-exports`: 使用 `module.exports` 语法导出的纯 JavaScript 模块
- `packages/ts-global-exports`: 使用 `export =` 语法导出的 TypeScript 模块
- `packages/ts-default-export`: 使用 `export default` 语法导出的 TypeScript 模块
- `packages/case-es2018`: TypeScript 项目,测试导入上述 JavaScript 模块 (不使用 esModuleInterop)
- `packages/case-es2018-interop`: TypeScript 项目,测试导入上述 JavaScript 模块 (使用 esModuleInterop)
- `packages/case-node16`: TypeScript 项目,使用 Node16 模块系统测试导入上述 JavaScript 模块
- `packages/case-node16-interop`: TypeScript 项目,使用 Node16 模块系统测试导入上述 JavaScript 模块 (使用 esModuleInterop)
- `packages/case-node-next`: TypeScript 项目,使用 Node Next 模块系统测试导入上述 JavaScript 模���
- `packages/case-node-next-interop`: TypeScript 项目,使用 Node Next 模块系统测试导入上述 JavaScript 模块 (使用 esModuleInterop)
- `packages/case-node-next-synthetic`: TypeScript 项目,使用 Node Next 模块系统测试导入上述 JavaScript 模块 (使用 allowSyntheticDefaultImports)
- `packages-npm/case-supertest-es2018`: TypeScript 项目,测试导入 supertest 包 (export = 导出),使用 ES2018 模块系统

## 主要测试内容

1. 不同的模块导出方式:
   - `exports.xxx`
   - `module.exports`
   - `export =`
   - `export default`

2. TypeScript 中的模块导入:
   - 标准 ES6 导入
   - 使用 `esModuleInterop` 的导入
   - Node16 模块系统的导入
   - Node Next 模块系统的导入

3. TypeScript 配置对模块导入的影响:
   - `moduleResolution`
   - `module`
   - `esModuleInterop`

## 导出和导入方式总结

| 导出方式 | 导出示例 | 导入方式 (无 esModuleInterop) | 导入方式 (有 esModuleInterop) | 导入方式 (有 allowSyntheticDefaultImports) |
|---------|---------|----------------------------|----------------------------|------------------------------------------|
| CommonJS (`exports.xxx`) | `exports.myFunction = () => {...}` | `import * as myModule from 'myModule'; myModule.myFunction();` | `import myModule from 'myModule'; myModule.myFunction();` | `import myModule from 'myModule'; myModule.myFunction();` (只在类型检查时有效) |
| CommonJS (`module.exports`) | `module.exports = { myFunction: () => {...} }` | `import * as myModule from 'myModule'; myModule.myFunction();` | `import myModule from 'myModule'; myModule.myFunction();` | `import myModule from 'myModule'; myModule.myFunction();` (只在类型检查时有效) |
| TypeScript `export =` | `export = { myFunction: () => {...} }` | `import * as myModule from 'myModule'; myModule.myFunction();` | `import myModule from 'myModule'; myModule.myFunction();` | `import myModule from 'myModule'; myModule.myFunction();` (只在类型检查时有效) |
| ES6 `export default` | `export default { myFunction: () => {...} }` | `import myModule from 'myModule'; myModule.myFunction();` | `import myModule from 'myModule'; myModule.myFunction();` | `import myModule from 'myModule'; myModule.myFunction();` |
| ES6 命名导出 | `export const myFunction = () => {...}` | `import { myFunction } from 'myModule';` | `import { myFunction } from 'myModule';` | `import { myFunction } from 'myModule';` |

注意:
- 使用 `esModuleInterop` 可以使 CommonJS 和 `export =` 模块的导入方式与 ES6 模块一致。
- `allowSyntheticDefaultImports` 只影响类型检查,不改变生成的 JavaScript 代码。在运行时,使用此选项导入 CommonJS 模块可能会导致错误。
- Node16 和 NodeNext 模块系统在导入方式上与 ES6 模块类似,但可能在解析规则上有所不同。
- 实际项目中,建议统一使用一种模块系统和导入/导出语法,以避免混淆和潜在的兼容性问题。
- 使用 `allowSyntheticDefaultImports` 时要特别小心,因为它可能会在类型检查和运行时行为之间造成不一致。

## 导出和导入方式总结 (npm 包 `export =`)

| npm 包 `export =` | `export = function request() {...}` | `import * as request from 'supertest'; request(app)` | `import request from 'supertest'; request(app)` | `import request from 'supertest'; request(app)` (只在类型检查时有效) |

## 实际例子

### Supertest (export =) 导入示例

使用 ES2018 模块系统导入 supertest:

```typescript
import
```

## 如何使用

1. 安装依赖:
   ```
   pnpm install
   ```

2. 构建所有包:
   ```
   pnpm run build
   ```

3. 运行测试:
   ```
   pnpm test
   ```

这将运行所有测试用例,展示不同导出方式和导入配置的效果。

## 注意事项

- 这个项目主要用于学习和测试目的,展示了不同模块系统之间的交互。
- 在实际项目中,建议尽可能使用一致的模块系统和导入/导出语法。
- 不同的 TypeScript 版本可能会影响模块解析行为,请确保使用最新版本的 TypeScript。

## 贡献

欢迎提出问题或提交 pull requests 来改进这个测试套件。如果你发现了任何问题或有改进建议,请随时提出 issue 或 PR。