# JavaScript 模块导出与导入测试工作空间

这个仓库是一个 pnpm 工作空间,用于测试和演示不同的 JavaScript 模块导出方式以及它们在 TypeScript 项目中的导入方法。

## 项目结构

- `packages/js-exports`: 使用 `exports` 语法导出的纯 JavaScript 模块
- `packages/js-global-exports`: 使用 `module.exports` 语法导出的纯 JavaScript 模块
- `packages/case-es2018`: TypeScript 项目,测试导入上述 JavaScript 模块 (不使用 esModuleInterop)
- `packages/case-es2018-interop`: TypeScript 项目,测试导入上述 JavaScript 模块 (使用 esModuleInterop)
- `packages/case-node16`: TypeScript 项目,使用 Node16 模块系统测试导入上述 JavaScript 模块

## 主要测试内容

1. 不同的 JavaScript 模块导出方式:
   - `exports.xxx`
   - `module.exports`

2. TypeScript 中的模块导入:
   - 标准 ES6 导入
   - 使用 `esModuleInterop` 的导入
   - Node16 模块系统的导入

3. TypeScript 配置对模块导入的影响:
   - `moduleResolution`
   - `module`
   - `esModuleInterop`

## 如何使用

1. 安装依赖:
   ```
   pnpm install
   ```

2. 运行测试:
   ```
   pnpm test
   ```

这将运行所有测试用例,展示不同导出方式和导入配置的效果。

## 注意事项

- 这个项目主要用于学习和测试目的,展示了不同模块系统之间的交互。
- 在实际项目中,建议尽可能使用一致的模块系统和导入/导出语法。

## 贡献

欢迎提出问题或提交 pull requests 来改进这个测试套件。
