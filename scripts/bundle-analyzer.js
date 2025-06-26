#!/usr/bin/env node

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('📊 Analyzing bundle size...\n')

// Check if build exists
if (!fs.existsSync('.next')) {
  console.error('❌ No build found. Run "npm run build" first.')
  process.exit(1)
}

try {
  // Set environment variable for bundle analysis
  process.env.ANALYZE = 'true'
  
  // Run build with analyzer
  console.log('🔍 Generating bundle analysis...')
  
  // Simple bundle size analysis without webpack config access
  analyzeBundleSize()
  
  console.log('\n✅ Bundle analysis completed!')
  
} catch (error) {
  console.error('❌ Analysis failed:', error.message)
  process.exit(1)
}

function analyzeBundleSize() {
  const buildDir = '.next'
  const staticDir = path.join(buildDir, 'static')
  
  if (!fs.existsSync(staticDir)) {
    console.warn('⚠️  Static directory not found')
    return
  }
  
  console.log('📦 Bundle Size Analysis:')
  console.log('========================\n')
  
  // Analyze chunks
  const chunksDir = path.join(staticDir, 'chunks')
  if (fs.existsSync(chunksDir)) {
    const chunks = analyzeDirectory(chunksDir, 'JavaScript Chunks')
    logAnalysis('JavaScript Chunks', chunks)
  }
  
  // Analyze CSS
  const cssDir = path.join(staticDir, 'css')
  if (fs.existsSync(cssDir)) {
    const css = analyzeDirectory(cssDir, 'CSS Files')
    logAnalysis('CSS Files', css)
  }
  
  // Total bundle size
  const totalStats = analyzeDirectory(staticDir, 'Total Bundle')
  logAnalysis('Total Bundle Size', totalStats)
  
  // Recommendations
  provideBundleRecommendations(totalStats.totalSize)
}

function analyzeDirectory(dir, name) {
  const files = []
  let totalSize = 0
  
  function walkDir(currentDir) {
    try {
      const items = fs.readdirSync(currentDir)
      
      for (const item of items) {
        const itemPath = path.join(currentDir, item)
        const stats = fs.statSync(itemPath)
        
        if (stats.isDirectory()) {
          walkDir(itemPath)
        } else {
          const size = stats.size
          totalSize += size
          
          files.push({
            name: path.relative(dir, itemPath),
            size,
            formatted: formatBytes(size)
          })
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not read directory ${currentDir}`)
    }
  }
  
  walkDir(dir)
  
  // Sort files by size (largest first)
  files.sort((a, b) => b.size - a.size)
  
  return {
    files: files.slice(0, 10), // Top 10 largest files
    totalFiles: files.length,
    totalSize,
    formattedSize: formatBytes(totalSize)
  }
}

function logAnalysis(title, stats) {
  console.log(`\n${title}:`)
  console.log('─'.repeat(title.length + 1))
  console.log(`Total Size: ${stats.formattedSize}`)
  console.log(`Total Files: ${stats.totalFiles}`)
  
  if (stats.files.length > 0) {
    console.log('\nLargest Files:')
    stats.files.forEach((file, index) => {
      console.log(`  ${index + 1}. ${file.name} (${file.formatted})`)
    })
  }
}

function provideBundleRecommendations(totalSize) {
  console.log('\n🎯 Optimization Recommendations:')
  console.log('================================\n')
  
  const sizeMB = totalSize / (1024 * 1024)
  
  if (sizeMB > 2) {
    console.log('❌ Bundle size is larger than recommended (2MB)')
    console.log('   Consider:')
    console.log('   • Code splitting for route-based chunks')
    console.log('   • Dynamic imports for heavy components')
    console.log('   • Tree shaking unused code')
    console.log('   • Removing unused dependencies')
  } else if (sizeMB > 1) {
    console.log('⚠️  Bundle size is acceptable but could be optimized')
    console.log('   Consider:')
    console.log('   • Dynamic imports for non-critical components')
    console.log('   • Image optimization')
    console.log('   • Font optimization')
  } else {
    console.log('✅ Bundle size is optimized!')
  }
  
  console.log('\n📚 General recommendations:')
  console.log('   • Use next/image for automatic image optimization')
  console.log('   • Implement lazy loading for below-the-fold content')
  console.log('   • Consider using a CDN for static assets')
  console.log('   • Monitor Core Web Vitals in production')
  
  // Specific file recommendations
  console.log('\n🔍 File-specific recommendations:')
  console.log('   • Keep individual chunks under 250KB')
  console.log('   • Main bundle should be under 200KB')
  console.log('   • CSS files should be under 50KB each')
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// Performance budget checker
function checkPerformanceBudget() {
  const budget = {
    totalSize: 2 * 1024 * 1024, // 2MB
    jsSize: 1 * 1024 * 1024,    // 1MB
    cssSize: 200 * 1024,        // 200KB
    imageSize: 500 * 1024,      // 500KB
  }
  
  // This would be expanded to check actual sizes against budget
  console.log('\n💰 Performance Budget:')
  console.log('   Total Bundle: < 2MB')
  console.log('   JavaScript: < 1MB')
  console.log('   CSS: < 200KB')
  console.log('   Images: < 500KB')
}