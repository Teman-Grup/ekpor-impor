function AboutSection({ data }) {
  if (!data) return null

  return (
    <section className="py-16 md:py-24 bg-[#fbf9f4] border-b border-stone-200" id="tentang-kami">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-brand-sienna font-semibold text-xs tracking-wider uppercase mb-4">
            🏢 PROFIL KORPORASI & SEJARAH
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight mb-6">
            {data.title}
          </h2>
          
          <div className="space-y-4 text-stone-600 leading-relaxed text-sm sm:text-base">
            {data.paragraphs && data.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 p-5 bg-amber-50/80 border-l-4 border-brand-sienna rounded-r-sm text-stone-800 text-sm">
            <p className="italic font-medium">
              "Kami memiliki komitmen untuk membangun hubungan yang baik dengan para petani dan pemasok hasil alam di Indonesia. Bagi kami, keberhasilan perusahaan harus berjalan seiring dengan berkembangnya para petani dan seluruh pihak yang terlibat dalam rantai pasok."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
