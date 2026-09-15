import { useState, useEffect } from 'react'
import axios from 'axios'

// Components
import TopBar from '../components/TopBar'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import PillarsSection from '../components/PillarsSection'
import CommoditiesSection from '../components/CommoditiesSection'
import Footer from '../components/Footer'

function HomePage() {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchContent()
  }, [])

  const fetchContent = async () => {
    try {
      const response = await axios.get('/api/content')
      setContent(response.data)
    } catch (error) {
      console.error('Error fetching content:', error)
      // Set default content if API fails
      setContent(getDefaultContent())
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-cream">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-brand-crimson mx-auto"></div>
          <p className="mt-4 text-stone-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-brand-cream">
      <TopBar data={content?.topBar} />
      <Navigation data={content?.navigation} />
      <HeroSection data={content?.hero} />
      <AboutSection data={content?.about} />
      <PillarsSection data={content?.pillars} />
      <CommoditiesSection data={content?.commodities} />
      <Footer data={content?.footer} />
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
