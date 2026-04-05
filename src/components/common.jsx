import React from 'react'

export const Container = ({ children, className = '' }) => {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-2xl font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40'

  const variants = {
    primary: 'bg-primary text-white shadow-soft hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-premium',
    secondary: 'bg-white text-slate-800 shadow-soft ring-1 ring-slate-200 hover:-translate-y-0.5 hover:shadow-medium',
    outline: 'bg-transparent text-slate-800 ring-1 ring-slate-300 hover:bg-slate-50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm sm:text-base',
    lg: 'px-7 py-3.5 text-base sm:text-lg',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export const Card = ({ children, className = '', hover = true, ...props }) => {
  const hoverClass = hover ? 'hover:-translate-y-1 hover:shadow-premium' : ''
  return (
    <div
      className={`rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft transition-all duration-300 ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export const Badge = ({ children, className = '' }) => {
  return (
    <span className={`inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-primary ${className}`}>
      {children}
    </span>
  )
}

export const SectionTitle = ({
  title,
  subtitle,
  centered = true,
  className = '',
  eyebrow,
}) => {
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} mb-12 max-w-3xl ${className}`}>
      {eyebrow && <Badge className="mb-5">{eyebrow}</Badge>}
      <h2 className="font-display text-3xl leading-tight text-slate-900 sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{subtitle}</p>}
    </div>
  )
}

const ICONS = {
  arrowRight: (
    <path d="M13.5 4.5L19 10m0 0l-5.5 5.5M19 10H5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  check: <path d="M5 10.2l3.3 3.3L15 6.8" strokeLinecap="round" strokeLinejoin="round" />,
  call: (
    <path
      d="M2.7 4.7c0-.7.6-1.3 1.3-1.3h2.3c.6 0 1.1.4 1.3 1l.7 2.6c.1.5 0 1-.4 1.3l-1 1c1.2 2.1 2.9 3.8 5 5l1-1c.3-.4.9-.5 1.3-.4l2.6.7c.6.2 1 .7 1 1.3V18c0 .7-.6 1.3-1.3 1.3h-.7C9.5 19.3 2.7 12.5 2.7 4.7z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  ruler: <path d="M4 16l8.5-8.5 3 3L7 19H4v-3zM9 8l3 3M7.5 9.5l2 2" strokeLinecap="round" strokeLinejoin="round" />,
  palette: (
    <path d="M10 3.5a6.5 6.5 0 100 13h1.5a2 2 0 001.9-2.6 2 2 0 011.9-2.6H16a3.5 3.5 0 000-7H10zM7.5 9h.01M6.5 6.5h.01M9.5 5.5h.01" strokeLinecap="round" strokeLinejoin="round" />
  ),
  install: <path d="M3 17h18M5 17V7h14v10M8 7V4h8v3" strokeLinecap="round" strokeLinejoin="round" />,
  map: <path d="M3.5 5.5l5-2 5 2 5-2v13l-5 2-5-2-5 2v-13zM8.5 3.5v13M13.5 5.5v13" strokeLinecap="round" strokeLinejoin="round" />,
  consultation: <path d="M4 4h16v10H8l-4 4V4z" strokeLinecap="round" strokeLinejoin="round" />,
  window: <path d="M4 4h16v16H4zM12 4v16M4 12h16" strokeLinecap="round" strokeLinejoin="round" />,
  roller: <path d="M4 6h16M6 6v10a2 2 0 002 2h8" strokeLinecap="round" strokeLinejoin="round" />,
  roman: <path d="M5 5h14v4H5zM5 9h14v4H5zM5 13h14v4H5z" strokeLinecap="round" strokeLinejoin="round" />,
  vertical: <path d="M4 4h16M6 4v16M10 4v16M14 4v16M18 4v16" strokeLinecap="round" strokeLinejoin="round" />,
  motorized: <path d="M4 9h10v6H4zM14 12h2l2-2 2 2" strokeLinecap="round" strokeLinejoin="round" />,
  solar: <path d="M12 4v2M12 18v2M4 12H2M22 12h-2M6.3 6.3L5 5m13 13-1.3-1.3M17.7 6.3L19 5m-13 13 1.3-1.3M12 8a4 4 0 100 8 4 4 0 000-8z" strokeLinecap="round" strokeLinejoin="round" />,
  quote: <path d="M8 8H5v4h3v5H3v-5a4 4 0 014-4h1v0zm9 0h-3v4h3v5h-5v-5a4 4 0 014-4h1v0z" strokeLinecap="round" strokeLinejoin="round" />,
  spark: <path d="M12 3l2.4 5.1L20 10l-5.6 1.9L12 17l-2.4-5.1L4 10l5.6-1.9L12 3z" strokeLinecap="round" strokeLinejoin="round" />,
}

export const Icon = ({ name, className = 'h-5 w-5' }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  )
}
