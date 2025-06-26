#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🚀 Starting production build...\n')

// Environment check
const requiredEnvVars = [
  'SITE_URL'
]

const missingVars = requiredEnvVars.filter(varName => !process.env[varName])
if (missingVars.length > 0) {
  console.warn('⚠️  Missing environment variables:', missingVars.join(', '))
  console.warn('   Using defaults for missing variables\n')
}

try {
  // Clean previous builds
  console.log('🧹 Cleaning previous builds...')
  if (fs.existsSync('.next')) {
    fs.rmSync('.next', { recursive: true, force: true })
  }
  if (fs.existsSync('out')) {
    fs.rmSync('out', { recursive: true, force: true })
  }

  // Type checking
  console.log('🔍 Running type check...')
  execSync('npx tsc --noEmit', { stdio: 'inherit' })

  // Linting
  console.log('🔧 Running ESLint...')
  execSync('npx eslint . --ext .ts,.tsx --fix', { stdio: 'inherit' })

  // Build application
  console.log('📦 Building Next.js application...')
  execSync('npx next build', { stdio: 'inherit' })

  // Export static files
  console.log('📤 Exporting static files...')
  execSync('npx next export', { stdio: 'inherit' })

  // Bundle analysis (optional)
  if (process.env.ANALYZE === 'true') {
    console.log('📊 Analyzing bundle size...')
    execSync('node scripts/bundle-analyzer.js', { stdio: 'inherit' })
  }

  // Post-build optimizations
  console.log('⚡ Running post-build optimizations...')
  
  // Generate sitemap
  generateSitemap()
  
  // Optimize images (placeholder)
  optimizeImages()
  
  // Validate build output
  validateBuild()

  console.log('\n✅ Build completed successfully!')
  console.log('📁 Static files are ready in the /out directory')
  console.log('🌐 Run "npm run serve:static" to test locally\n')

} catch (error) {
  console.error('\n❌ Build failed:', error.message)
  process.exit(1)
}

function generateSitemap() {
  console.log('   Generating sitemap...')
  
  const baseUrl = process.env.SITE_URL || 'https://study-in-germany.com'
  const pages = [
    '',
    '/universities',
    '/programs',
    '/scholarships',
    '/guide',
    '/contact',
    '/blog',
  ]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`

  fs.writeFileSync('out/sitemap.xml', sitemap)
}

function optimizeImages() {
  console.log('   Optimizing images...')
  // Placeholder for image optimization
  // In production, you might use sharp, imagemin, or similar tools
}

function validateBuild() {
  console.log('   Validating build output...')
  
  const requiredFiles = [
    'out/index.html',
    'out/_next',
    'out/sitemap.xml',
  ]
  
  const missingFiles = requiredFiles.filter(file => !fs.existsSync(file))
  
  if (missingFiles.length > 0) {
    throw new Error(`Missing required files: ${missingFiles.join(', ')}`)
  }
  
  // Check bundle size
  const bundleDir = path.join('out', '_next', 'static')
  if (fs.existsSync(bundleDir)) {
    const stats = getBundleStats(bundleDir)
    console.log(`   Bundle size: ${formatBytes(stats.totalSize)}`)
    
    // Warn if bundle is too large
    if (stats.totalSize > 2 * 1024 * 1024) { // 2MB
      console.warn('   ⚠️  Bundle size is larger than recommended (2MB)')
    }
  }
}

function getBundleStats(dir) {
  let totalSize = 0
  
  function walkDir(currentDir) {
    const files = fs.readdirSync(currentDir)
    
    for (const file of files) {
      const filePath = path.join(currentDir, file)
      const stats = fs.statSync(filePath)
      
      if (stats.isDirectory()) {
        walkDir(filePath)
      } else {
        totalSize += stats.size
      }
    }
  }
  
  walkDir(dir)
  return { totalSize }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}