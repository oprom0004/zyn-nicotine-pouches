# Zyn Nicotine Pouches - Next.js E-commerce Website

A modern, full-featured e-commerce website for Zyn nicotine pouches built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, responsive design optimized for all devices
- **Product Catalog**: 22+ products with detailed information and filtering
- **Shopping Cart**: Full cart functionality with persistence
- **Search**: Real-time product search with suggestions
- **User Authentication**: Login/register system ready for integration
- **Payment Ready**: Stripe integration prepared
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Analytics Ready**: Google Analytics and conversion tracking prepared

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context + useReducer
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone or download the project**:
   ```bash
   cd zyn-nextjs
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000`

## 🚀 Deployment to Vercel

### Method 1: GitHub + Vercel (Recommended)

1. **Create a GitHub repository**:
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `zyn-nicotine-pouches` or similar

2. **Upload your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Zyn e-commerce website"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

3. **Deploy to Vercel**:
   - Go to [Vercel](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

### Method 2: Direct Upload to Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - Choose your team/account
   - Confirm project settings
   - Deploy!

## 🌐 Custom Domain Setup

1. **Purchase a domain** (e.g., from Namecheap, GoDaddy)
2. **In Vercel dashboard**:
   - Go to your project settings
   - Click "Domains"
   - Add your custom domain
   - Follow DNS setup instructions

## 🔧 Environment Variables

Create a `.env.local` file for sensitive data:

```env
# Database (when you add one)
DATABASE_URL=your_database_url

# Stripe (when you add payments)
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret

# NextAuth (when you add authentication)
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=https://yourdomain.com

# Email (when you add email functionality)
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password

# Analytics
GOOGLE_ANALYTICS_ID=your_ga_id
```

## 📈 Adding Real E-commerce Features

### 1. Database Setup (PlanetScale recommended)

```bash
npm install @planetscale/database
```

### 2. Authentication (NextAuth.js)

```bash
npm install next-auth
```

### 3. Payments (Stripe)

```bash
npm install stripe @stripe/stripe-js
```

### 4. Email (Resend)

```bash
npm install resend
```

## 📱 PWA Setup (Optional)

To make it a Progressive Web App:

```bash
npm install next-pwa
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the brand colors:

```javascript
colors: {
  'zyn-primary': '#0066cc',      // Main brand color
  'zyn-secondary': '#004499',    // Secondary color
  'zyn-accent': '#00aaff',       // Accent color
}
```

### Products
Edit `data/products.ts` to modify product information.

### Content
- Update `app/layout.tsx` for site metadata
- Modify components in `components/` folder
- Update pages in `app/` folder

## 📊 Analytics Setup

### Google Analytics 4
1. Create GA4 property
2. Add tracking ID to environment variables
3. Add tracking code to `app/layout.tsx`

### Google Tag Manager
1. Create GTM container
2. Add GTM script to `app/layout.tsx`
3. Configure conversion tracking

## 🛡 Security Considerations

- **Age Verification**: Implement proper age verification for nicotine products
- **SSL Certificate**: Always use HTTPS (Vercel provides this automatically)
- **Data Protection**: Implement GDPR compliance if targeting EU customers
- **Rate Limiting**: Add rate limiting to prevent abuse
- **Input Validation**: Validate all user inputs

## 📋 Legal Compliance

For nicotine products, ensure:
- Age verification (21+ in US)
- Proper disclaimers
- Shipping restrictions compliance
- Local regulations compliance
- Terms of service
- Privacy policy

## 🚀 Performance Optimization

The site is already optimized with:
- Next.js Image optimization
- Code splitting
- Lazy loading
- Caching strategies
- Minified assets

## 📞 Support

For technical support or customization:
- Check Next.js documentation
- Review Vercel deployment guides
- Consult Tailwind CSS documentation

## 📝 License

This project is for educational and commercial use. Ensure compliance with all applicable laws regarding nicotine product sales in your jurisdiction.

---

## 🎯 Next Steps

1. **Deploy the basic site** to test functionality
2. **Add your domain** for branding
3. **Integrate payment processing** for real transactions
4. **Add user authentication** for customer accounts
5. **Implement order management** for business operations
6. **Set up email notifications** for customer communication
7. **Add analytics tracking** for business insights

Congratulations on your new Zyn e-commerce website! 🎉