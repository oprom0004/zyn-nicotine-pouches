const fs = require('fs');
const path = require('path');

// 导入图片映射
const productImageMapping = require('../data/product-images.json');

// 根据产品信息生成正确的slug
function generateSlug(flavor, strength) {
  const flavorSlug = flavor.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  
  const strengthSlug = strength.toLowerCase();
  
  return `${flavorSlug}-${strengthSlug}`;
}

// 获取图片URL
function getImageUrl(slug) {
  const imageInfo = productImageMapping[slug];
  if (imageInfo) {
    return imageInfo.svg; // 使用SVG，因为我们现在有SVG图片
  }
  return `/products/placeholder.svg`;
}

// 更新产品数据
function updateProductImages() {
  const productsFilePath = path.join(__dirname, '..', 'data', 'products.ts');
  let content = fs.readFileSync(productsFilePath, 'utf8');
  
  console.log('🔄 更新产品图片路径...\n');
  
  // 更新映射表
  const updates = [
    // Cool Mint系列
    { old: '"/products/cool-mint-3mg.jpg"', new: '"/products/mint/zyn-cool-mint-3mg.svg"' },
    { old: '"/products/cool-mint-6mg.jpg"', new: '"/products/mint/zyn-cool-mint-6mg.svg"' },
    { old: '"/products/cool-mint-9mg.jpg"', new: '"/products/mint/zyn-cool-mint-9mg.svg"' },
    
    // Citrus系列
    { old: '"/products/citrus-3mg.jpg"', new: '"/products/citrus/zyn-citrus-3mg.svg"' },
    { old: '"/products/citrus-6mg.jpg"', new: '"/products/citrus/zyn-citrus-6mg.svg"' },
    
    // Coffee系列
    { old: '"/products/coffee-3mg.jpg"', new: '"/products/coffee/zyn-coffee-3mg.svg"' },
    { old: '"/products/coffee-6mg.jpg"', new: '"/products/coffee/zyn-coffee-6mg.svg"' },
    
    // Berry系列 (需要手动添加，因为脚本没有生成这些)
    { old: '"/products/berry-frost-3mg.jpg"', new: '"/products/berry/zyn-berry-frost-3mg.svg"' },
    { old: '"/products/berry-frost-6mg.jpg"', new: '"/products/berry/zyn-berry-frost-6mg.svg"' },
    
    // Spearmint系列
    { old: '"/products/spearmint-3mg.jpg"', new: '"/products/spearmint/zyn-spearmint-3mg.svg"' },
    { old: '"/products/spearmint-6mg.jpg"', new: '"/products/spearmint/zyn-spearmint-6mg.svg"' },
    
    // Wintergreen系列
    { old: '"/products/wintergreen-3mg.jpg"', new: '"/products/wintergreen/zyn-wintergreen-3mg.svg"' },
    { old: '"/products/wintergreen-6mg.jpg"', new: '"/products/wintergreen/zyn-wintergreen-6mg.svg"' },
    
    // Peppermint系列
    { old: '"/products/peppermint-3mg.jpg"', new: '"/products/mint/zyn-peppermint-3mg.svg"' },
    { old: '"/products/peppermint-6mg.jpg"', new: '"/products/mint/zyn-peppermint-6mg.svg"' },
    
    // Vanilla系列
    { old: '"/products/vanilla-3mg.jpg"', new: '"/products/sweet/zyn-vanilla-3mg.svg"' },
    { old: '"/products/vanilla-6mg.jpg"', new: '"/products/sweet/zyn-vanilla-6mg.svg"' },
    
    // Cinnamon系列
    { old: '"/products/cinnamon-3mg.jpg"', new: '"/products/spice/zyn-cinnamon-3mg.svg"' },
    { old: '"/products/cinnamon-6mg.jpg"', new: '"/products/spice/zyn-cinnamon-6mg.svg"' },
    
    // 其他可能的变体
    { old: '"/products/smooth-3mg.jpg"', new: '"/products/sweet/zyn-smooth-3mg.svg"' },
    { old: '"/products/smooth-6mg.jpg"', new: '"/products/sweet/zyn-smooth-6mg.svg"' },
    { old: '"/products/chill-3mg.jpg"', new: '"/products/mint/zyn-chill-3mg.svg"' },
    { old: '"/products/chill-6mg.jpg"', new: '"/products/mint/zyn-chill-6mg.svg"' },
  ];
  
  let updateCount = 0;
  
  updates.forEach(({ old, new: newPath }) => {
    if (content.includes(old)) {
      content = content.replace(new RegExp(old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newPath);
      console.log(`✅ 更新: ${old} -> ${newPath}`);
      updateCount++;
    }
  });
  
  // 写入更新后的文件
  fs.writeFileSync(productsFilePath, content);
  
  console.log(`\n🎉 完成！共更新了 ${updateCount} 个产品图片路径`);
  
  return updateCount;
}

// 创建缺失的SVG图片
function createMissingImages() {
  console.log('\n🎨 创建缺失的产品图片...');
  
  const missingProducts = [
    { name: 'Berry Frost', flavor: 'berry-frost', strength: '3mg', category: 'berry', color: '#8B5A9F' },
    { name: 'Berry Frost', flavor: 'berry-frost', strength: '6mg', category: 'berry', color: '#8B5A9F' },
  ];
  
  missingProducts.forEach(({ name, flavor, strength, category, color }) => {
    const filename = `zyn-${flavor}-${strength}.svg`;
    const dir = path.join(__dirname, '..', 'public', 'products', category);
    const filepath = path.join(dir, filename);
    
    // 确保目录存在
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const svg = `
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="400" fill="${color}"/>
  <circle cx="200" cy="150" r="60" fill="rgba(255,255,255,0.2)"/>
  <text x="200" y="250" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="24" font-weight="bold">ZYN</text>
  <text x="200" y="280" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="16">${name}</text>
  <text x="200" y="300" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="14">${strength.toUpperCase()}</text>
  <text x="200" y="330" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-family="Arial, sans-serif" font-size="12">Nicotine Pouches</text>
</svg>`;
    
    fs.writeFileSync(filepath, svg.trim());
    console.log(`✅ 创建: ${filename}`);
  });
}

// 如果直接运行此脚本
if (require.main === module) {
  console.log('🚀 开始更新产品图片系统...\n');
  
  try {
    updateProductImages();
    createMissingImages();
    console.log('\n🎉 产品图片系统更新完成！');
  } catch (error) {
    console.error('❌ 更新失败:', error);
    process.exit(1);
  }
}

module.exports = {
  updateProductImages,
  createMissingImages
};