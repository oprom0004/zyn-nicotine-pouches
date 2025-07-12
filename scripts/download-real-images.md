# Zyn产品图片下载指南

由于无法直接获取Zyn官方网站的图片，这里提供了几种获取真实产品图片的方法：

## 🎯 图片获取方法

### 1. 手动下载
访问以下网站获取高质量产品图片：
- **Zyn官网**: https://www.zyn.com/us/en/products/
- **零售商网站**:
  - Circle K: https://www.circlek.com/
  - 7-Eleven: https://www.7-eleven.com/
  - Sheetz: https://www.sheetz.com/
  - Casey's: https://www.caseys.com/

### 2. 图片规格要求
- **格式**: WebP (首选) 或 JPG
- **尺寸**: 400x400px 最小
- **质量**: 高清，产品清晰可见
- **背景**: 纯色或透明背景

### 3. 文件命名规范
将下载的图片按以下格式重命名：
```
zyn-{flavor}-{strength}.webp
例如：zyn-cool-mint-3mg.webp
```

### 4. 放置位置
将图片放入对应的类别文件夹：
```
public/products/
├── mint/           # 薄荷类（Cool Mint, Peppermint, Menthol, Chill）
├── citrus/         # 柑橘类（Citrus, Lemon）
├── berry/          # 浆果类（Berry）
├── coffee/         # 咖啡类（Coffee, Espresso）
├── spearmint/      # 留兰香类（Spearmint）
├── wintergreen/    # 冬青类（Wintergreen）
├── sweet/          # 甜味类（Vanilla, Smooth）
└── spice/          # 香料类（Cinnamon）
```

## 🔧 自动化工具

### 批量下载脚本
如果你有图片URL列表，可以使用以下脚本：

```bash
# 批量下载WebP格式图片
node scripts/download-product-images.js --format=webp

# 从CSV文件导入URL
node scripts/import-image-urls.js --file=product-urls.csv
```

### 图片格式转换
```bash
# 将JPG转换为WebP
node scripts/convert-images.js --input=jpg --output=webp

# 批量调整图片尺寸
node scripts/resize-images.js --size=400x400
```

## 📝 产品列表

当前需要的产品图片：

### Mint系列
- zyn-cool-mint-3mg.webp ✅ (SVG占位符)
- zyn-cool-mint-6mg.webp ✅ (SVG占位符)
- zyn-cool-mint-9mg.webp ✅ (SVG占位符)
- zyn-peppermint-3mg.webp ✅ (SVG占位符)
- zyn-peppermint-6mg.webp ✅ (SVG占位符)
- zyn-chill-3mg.webp ✅ (SVG占位符)
- zyn-chill-6mg.webp ✅ (SVG占位符)

### Citrus系列
- zyn-citrus-3mg.webp ✅ (SVG占位符)
- zyn-citrus-6mg.webp ✅ (SVG占位符)

### Coffee系列
- zyn-coffee-3mg.webp ✅ (SVG占位符)
- zyn-coffee-6mg.webp ✅ (SVG占位符)

### 其他系列
- zyn-spearmint-3mg.webp ✅ (SVG占位符)
- zyn-spearmint-6mg.webp ✅ (SVG占位符)
- zyn-wintergreen-3mg.webp ✅ (SVG占位符)
- zyn-wintergreen-6mg.webp ✅ (SVG占位符)
- zyn-vanilla-3mg.webp ✅ (SVG占位符)
- zyn-vanilla-6mg.webp ✅ (SVG占位符)
- zyn-cinnamon-3mg.webp ✅ (SVG占位符)
- zyn-cinnamon-6mg.webp ✅ (SVG占位符)

## 🎨 当前状态

✅ **已完成**:
- 创建了完整的图片目录结构
- 生成了21个高质量SVG占位符图片
- 更新了产品数据以使用新的图片路径
- 实现了图片SEO优化组件
- 建立了图片管理系统

🔄 **待完成**:
- 替换SVG占位符为真实产品图片
- 添加WebP格式支持
- 实现图片懒加载优化

## 💡 使用说明

当你获得真实图片后：

1. **替换占位符**: 将WebP图片放入对应文件夹，覆盖SVG文件
2. **更新路径**: 运行 `node scripts/update-image-paths.js` 更新图片路径
3. **优化性能**: 运行 `npm run optimize-images` 压缩图片
4. **验证**: 运行 `npm run build` 确保构建成功

## 🚀 高级功能

- **自适应图片**: 自动检测WebP支持，回退到JPG
- **响应式加载**: 根据设备尺寸加载不同尺寸的图片
- **SEO优化**: 自动生成alt文本和结构化数据
- **性能监控**: 跟踪图片加载性能和Core Web Vitals