import { useState, useEffect } from 'react'
import axios from 'axios'

// Components
import TopBar from '../components/TopBar'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import PillarsSection from '../components/PillarsSection'
import CommoditiesSection from '../components/CommoditiesSection'
import OperationalSection from '../components/OperationalSection'
import PortfolioSection from '../components/PortfolioSection'
import LegalitasSection from '../components/LegalitasSection'
import Footer from '../components/Footer'

function HomePage() {
  const [content, setContent] = useState(getDefaultContent())
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Scroll to top on fresh load if no anchor hash is in URL
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
    fetchContent()
  }, [])

  const fetchContent = async () => {
    try {
      const response = await axios.get('/api/content')
      // Validate that response.data is a valid JSON object with data keys, not an HTML string
      if (
        response.data &&
        typeof response.data === 'object' &&
        !Array.isArray(response.data) &&
        (response.data.hero || response.data.navigation || response.data.topBar)
      ) {
        setContent((prev) => ({
          ...prev,
          ...response.data
        }))
      }
    } catch (error) {
      // Keep default content silently if backend is offline or connecting
    }
  }

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Sticky Header: TopBar + Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <TopBar data={content?.topBar} />
        <Navigation data={content?.navigation} />
      </header>
      <HeroSection data={content?.hero} />
      <AboutSection data={content?.about} />
      <PillarsSection data={content?.pillars} />
      <CommoditiesSection data={content?.commodities} />
      <OperationalSection />
      <PortfolioSection />
      <LegalitasSection />
      <Footer data={content?.contact} />
    </div>
  )
}

// Default content based on existing HTML
function getDefaultContent() {
  return {
    topBar: {
      location: "Medan, ID (GMT+7)",
      phone: "+62 812 600 100 28",
      email: "ptoriginaljernangasia@gmail.com"
    },
    navigation: {
      companyName: "PT. ORIGINAL JERNANG ASIA",
      tagline: "INDONESIAN NATURAL BOTANICAL COMMODITIES & TRADE",
      logo: "https://lh3.googleusercontent.com/aida/AEtjO1X2rg3ru0z-WwE_z1dhWflRfkkKBXCbRUzd4ce4bx4G6xhUp8TeV2fvsW90EDaLo1mlSbSyVP8P89lQmNjvnjKBMC1KEilpv2lACFtjij9aTo-R73gbcNwJdj4YDMQLNOYTQIB004GdX8oBUxvT7GN9nrKAjvhvq30w9zQerKu1Pb7LcZ4oyj7w00F2S6SKOAdGXA_1TP8YloMUbJf_pElQZlRsXF10x-JdXs1Zfu0qRMQ8GL07wOPO1A"
    },
    hero: {
      badge: "EST. 2016 • MEDAN, NORTH SUMATRA, INDONESIA",
      title: "PT. ORIGINAL JERNANG ASIA",
      subtitle: "Indonesian Natural Commodities Exporter & Trading",
      image: "https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ"
    },
    about: {
      title: "Tentang Kami & Integritas Perdagangan",
      content: [
        "PT. Original Jernang Asia merupakan perusahaan yang bergerak di bidang perdagangan besar, pengolahan, serta ekspor dan impor berbagai komoditas hasil alam Indonesia.",
        "Didirikan pada tahun 2016, perusahaan memulai kegiatan usaha dengan fokus pada komoditas jernang dan berkembang dengan memperdagangkan berbagai hasil alam lainnya."
      ]
    },
    pillars: [
      {
        id: 1,
        icon: "package-search",
        number: "01",
        title: "Perdagangan Komoditas Hasil Alam",
        description: "Kami menyediakan berbagai macam komoditas hasil alam Indonesia untuk kebutuhan perdagangan besar dan pasar ekspor."
      },
      {
        id: 2,
        icon: "cog",
        number: "02",
        title: "Pengolahan Modern Mandiri",
        description: "Melakukan proses pengolahan bahan baku dengan dukungan 6 mesin produksi modern."
      },
      {
        id: 3,
        icon: "flask-conical",
        number: "03",
        title: "Quality Control & Laboratory",
        description: "Memiliki laboratorium khusus untuk menjaga standar kualitas sebelum dipasarkan dan diekspor."
      },
      {
        id: 4,
        icon: "globe",
        number: "04",
        title: "Export & International Trading",
        description: "Pengalaman perdagangan ke pasar internasional termasuk China dan India."
      }
    ],
    commodities: [
      {
        id: 1,
        name: "Jernang (Dragon's Blood)",
        description: "Komoditas utama dengan pengolahan lengkap dari buah hingga blok.",
        image: "https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ",
        featured: true
      },
      {
        id: 2,
        name: "Kayu Gaharu",
        description: "Komoditas hasil alam bernilai tinggi untuk ekspor.",
        image: "https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ",
        featured: false
      }
    ],
    footer: {
      copyright: "© 2024 PT. Original Jernang Asia. All rights reserved."
    }
  }
}

export default HomePage
