// Shared admin UI components used across all Edit pages

export function PageHeader({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4 mb-6 pb-6 border-b border-stone-200">
      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-brand-crimson to-brand-sienna flex items-center justify-center text-white shadow-sm">
        {icon}
      </div>
      <div>
        <h2 className="text-xl font-bold text-stone-900">{title}</h2>
        <p className="text-sm text-stone-500 mt-0.5">{description}</p>
      </div>
    </div>
  )
}

export function Alert({ type, text, onDismiss }) {
  if (!text) return null
  const styles = {
    success: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    error: 'bg-red-50 border-red-200 text-red-800',
  }
  const icons = {
    success: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
    error: <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />,
  }
  return (
    <div className={`mb-6 flex items-start gap-3 p-4 rounded-xl border ${styles[type]}`}>
      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">{icons[type]}</svg>
      <p className="text-sm font-medium flex-1">{text}</p>
      {onDismiss && (
        <button onClick={onDismiss} className="text-stone-400 hover:text-stone-600 transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      )}
    </div>
  )
}

export function FormActions({ saving, onReset }) {
  return (
    <div className="flex flex-wrap gap-3 pt-6 border-t border-stone-200">
      <button
        type="submit"
        disabled={saving}
        className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-brand-crimson to-brand-sienna hover:from-brand-sienna hover:to-brand-rust text-white font-semibold rounded-xl transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed text-sm"
      >
        {saving ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Menyimpan...
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            Simpan Perubahan
          </>
        )}
      </button>
      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center gap-2 px-6 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold rounded-xl transition text-sm"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
        Reset
      </button>
    </div>
  )
}

export function InputField({ label, id, icon, hint, ...props }) {
  return (
    <div>
      {label && <label htmlFor={id} className="block text-sm font-semibold text-stone-700 mb-1.5">{label}</label>}
      <div className="relative">
        {icon && <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400">{icon}</div>}
        <input
          id={id}
          className={`w-full ${icon ? 'pl-10' : 'pl-4'} pr-4 py-2.5 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-crimson/40 focus:border-brand-crimson bg-white text-stone-900 text-sm transition`}
          {...props}
        />
      </div>
      {hint && <p className="mt-1 text-xs text-stone-400">{hint}</p>}
    </div>
  )
}

export function TextAreaField({ label, id, hint, ...props }) {
  return (
    <div>
      {label && <label htmlFor={id} className="block text-sm font-semibold text-stone-700 mb-1.5">{label}</label>}
      <textarea
        id={id}
        className="w-full px-4 py-2.5 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-crimson/40 focus:border-brand-crimson bg-white text-stone-900 text-sm transition resize-none"
        {...props}
      />
      {hint && <p className="mt-1 text-xs text-stone-400">{hint}</p>}
    </div>
  )
}

export function SectionCard({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-stone-200 p-6 sm:p-8 ${className}`}>
      {children}
    </div>
  )
}

export function AddButton({ onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold transition shadow-sm"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
      {label}
    </button>
  )
}

export function RemoveButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-1.5 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition"
      title="Hapus"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
    </button>
  )
}
