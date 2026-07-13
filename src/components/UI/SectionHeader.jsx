
export default function SectionHeader({
  label,
  title,
  description,
  theme = 'light',
  align = 'center',
  className = ''
}) {
  const isDark = theme === 'dark';
  
  return (
    <div className={`section-header ${align === 'center' ? 'text-center mx-auto' : ''} ${className}`}>
      {label && (
        <span className={`section-label ${isDark ? 'section-label-light' : ''}`}>
          {label}
        </span>
      )}
      {title && (
        <h2 className={isDark ? 'h1 h1-light' : 'h2'}>
          {title}
        </h2>
      )}
      {description && (
        <p className={`lead mt-4 ${isDark ? 'lead-light' : ''} ${align === 'center' ? 'mx-auto' : ''}`} style={{ maxWidth: align === 'center' ? '700px' : 'none' }}>
          {description}
        </p>
      )}
    </div>
  );
}
