const fs = require('fs');
const path = require('path');
const https = require('https');

// Zyn产品图片URL映射 (这些是常见的产品图片链接模式)
const productImageUrls = {
  // Cool Mint系列
  'cool-mint-3mg': 'https://images.zyn.com/products/cool-mint-3mg.webp',
  'cool-mint-6mg': 'https://images.zyn.com/products/cool-mint-6mg.webp', 
  'cool-mint-9mg': 'https://images.zyn.com/products/cool-mint-9mg.webp',
  
  // Peppermint系列
  'peppermint-3mg': 'https://images.zyn.com/products/peppermint-3mg.webp',
  'peppermint-6mg': 'https://images.zyn.com/products/peppermint-6mg.webp',
  
  // Spearmint系列
  'spearmint-3mg': 'https://images.zyn.com/products/spearmint-3mg.webp',
  'spearmint-6mg': 'https://images.zyn.com/products/spearmint-6mg.webp',
  
  // Wintergreen系列
  'wintergreen-3mg': 'https://images.zyn.com/products/wintergreen-3mg.webp',
  'wintergreen-6mg': 'https://images.zyn.com/products/wintergreen-6mg.webp',
  
  // Citrus系列
  'citrus-3mg': 'https://images.zyn.com/products/citrus-3mg.webp',
  'citrus-6mg': 'https://images.zyn.com/products/citrus-6mg.webp',
  
  // Coffee系列
  'coffee-3mg': 'https://images.zyn.com/products/coffee-3mg.webp',
  'coffee-6mg': 'https://images.zyn.com/products/coffee-6mg.webp',
  
  // Chill系列
  'chill-3mg': 'https://images.zyn.com/products/chill-3mg.webp',
  'chill-6mg': 'https://images.zyn.com/products/chill-6mg.webp',
  
  // Smooth系列
  'smooth-3mg': 'https://images.zyn.com/products/smooth-3mg.webp',
  'smooth-6mg': 'https://images.zyn.com/products/smooth-6mg.webp',
  
  // Cinnamon系列
  'cinnamon-3mg': 'https://images.zyn.com/products/cinnamon-3mg.webp',
  'cinnamon-6mg': 'https://images.zyn.com/products/cinnamon-6mg.webp',
  
  // Vanilla系列
  'vanilla-3mg': 'https://images.zyn.com/products/vanilla-3mg.webp',
  'vanilla-6mg': 'https://images.zyn.com/products/vanilla-6mg.webp',
};

// 备用图片URL (如果主URL不可用)
const fallbackImageUrls = {
  'cool-mint-3mg': 'https://cdn.shopify.com/s/files/1/0123/4567/products/zyn-cool-mint-3mg.jpg',
  // 可以添加更多备用URL
};

// 创建产品目录映射
const categoryMapping = {
  'cool-mint': 'mint',
  'peppermint': 'mint', 
  'spearmint': 'spearmint',
  'wintergreen': 'wintergreen',
  'citrus': 'citrus',
  'coffee': 'coffee',
  'chill': 'mint',
  'smooth': 'sweet',
  'cinnamon': 'spice',
  'vanilla': 'sweet'
};

function downloadImage(url, filename, category) {
  return new Promise((resolve, reject) => {
    const dir = path.join(__dirname, '..', 'public', 'products', category);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const filepath = path.join(dir, filename);
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ Downloaded: ${filename} to ${category}/`);
          resolve(filepath);
        });
      } else {
        file.close();
        fs.unlink(filepath, () => {}); // 删除失败的文件
        console.log(`❌ Failed to download: ${filename} (Status: ${response.statusCode})`);
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(filepath, () => {}); // 删除失败的文件
      console.log(`❌ Error downloading: ${filename} - ${err.message}`);
      reject(err);
    });
  });
}

// 创建占位符图片的SVG
function createPlaceholderImage(productName, flavor, strength, category) {
  const colors = {
    mint: '#00D4AA',
    citrus: '#FF9500', 
    berry: '#8B5A9F',
    coffee: '#8B4513',
    spearmint: '#00C89B',
    wintergreen: '#2E8B57',
    sweet: '#FF69B4',
    spice: '#DC143C'
  };
  
  const bgColor = colors[category] || '#6B7280';
  const filename = `${productName.toLowerCase().replace(/\s+/g, '-')}-${strength.toLowerCase()}.svg`;
  
  const svg = `
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="400" fill="${bgColor}"/>
  <circle cx="200" cy="150" r="60" fill="rgba(255,255,255,0.2)"/>
  <text x="200" y="250" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="24" font-weight="bold">ZYN</text>
  <text x="200" y="280" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="16">${flavor}</text>
  <text x="200" y="300" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="14">${strength}</text>
  <text x="200" y="330" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-family="Arial, sans-serif" font-size="12">Nicotine Pouches</text>
</svg>`;

  return { svg, filename };
}

async function downloadAllImages() {
  console.log('🚀 开始下载Zyn产品图片...\n');
  
  const results = {
    success: [],
    failed: [],
    placeholders: []
  };
  
  // 尝试下载真实图片
  for (const [slug, url] of Object.entries(productImageUrls)) {
    const parts = slug.split('-');
    const strength = parts.pop();
    const flavor = parts.join('-');
    const category = categoryMapping[flavor] || 'mint';
    const filename = `${slug}.webp`;
    
    try {
      await downloadImage(url, filename, category);
      results.success.push(slug);
    } catch (error) {
      console.log(`⚠️  主URL失败，尝试备用URL: ${slug}`);
      
      // 尝试备用URL
      if (fallbackImageUrls[slug]) {
        try {
          await downloadImage(fallbackImageUrls[slug], filename, category);
          results.success.push(slug);
          continue;
        } catch (fallbackError) {
          console.log(`❌ 备用URL也失败: ${slug}`);
        }
      }
      
      // 创建占位符图片
      const flavorName = flavor.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
      const { svg, filename: svgFilename } = createPlaceholderImage(`Zyn ${flavorName}`, flavorName, strength.toUpperCase(), category);
      
      const dir = path.join(__dirname, '..', 'public', 'products', category);
      const svgPath = path.join(dir, svgFilename);
      
      fs.writeFileSync(svgPath, svg);
      results.placeholders.push(slug);
      console.log(`📸 创建占位符图片: ${svgFilename}`);
    }
    
    // 添加延迟避免请求过快
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('\n📊 下载完成统计:');
  console.log(`✅ 成功下载: ${results.success.length} 个`);
  console.log(`📸 占位符图片: ${results.placeholders.length} 个`);
  console.log(`❌ 完全失败: ${results.failed.length} 个`);
  
  if (results.success.length > 0) {
    console.log('\n✅ 成功下载的产品:');
    results.success.forEach(slug => console.log(`  - ${slug}`));
  }
  
  if (results.placeholders.length > 0) {
    console.log('\n📸 创建占位符的产品:');
    results.placeholders.forEach(slug => console.log(`  - ${slug}`));
  }
  
  return results;
}

// 生成产品图片路径映射
function generateImageMapping() {
  const mapping = {};
  
  Object.keys(productImageUrls).forEach(slug => {
    const parts = slug.split('-');
    const strength = parts.pop();
    const flavor = parts.join('-');
    const category = categoryMapping[flavor] || 'mint';
    
    mapping[slug] = {
      webp: `/products/${category}/${slug}.webp`,
      svg: `/products/${category}/${slug}.svg`,
      category: category,
      flavor: flavor,
      strength: strength
    };
  });
  
  const mappingPath = path.join(__dirname, '..', 'data', 'product-images.json');
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2));
  console.log(`📝 图片映射已保存到: ${mappingPath}`);
  
  return mapping;
}

// 如果直接运行此脚本
if (require.main === module) {
  downloadAllImages()
    .then(() => {
      console.log('\n📝 生成图片映射文件...');
      generateImageMapping();
      console.log('\n🎉 所有任务完成！');
    })
    .catch(console.error);
}

module.exports = {
  downloadAllImages,
  generateImageMapping,
  createPlaceholderImage,
  productImageUrls,
  categoryMapping
};