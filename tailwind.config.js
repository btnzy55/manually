// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'soft-black': '#1A1A1A',
        'rich-gold': '#D4AF37', // Atau #FFB300
        'off-white': '#F5F5F5',
        'muted-gray': '#888888',
      },
      fontFamily: {
        'display': ['"Clash Display"', 'sans-serif'], // Untuk Heading
        'body': ['Inter', 'sans-serif'], // Untuk Teks
      },
      backgroundImage: {
        // Kita akan menggunakan grid Anda sebagai pattern
        'grid-pattern': "url('~/assets/images/gradient.png')", 
      }
    }
  }
}