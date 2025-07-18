import { rengifoSectionsConfig } from '@relatos/content/apps'

export const PlanimetriasSection = () => {
  const domesticSection = rengifoSectionsConfig.domestic
  const planimetriesSubsection = domesticSection.subsections.planimetries

  return (
    <section
      id='planimetrias'
      className='relative flex min-h-screen items-center justify-center overflow-hidden'
      style={{
        backgroundColor: 'var(--color-rengifo-amarillo)',
      }}
    >
      {/* Background Image */}
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `url(${planimetriesSubsection.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3,
        }}
      />

      {/* Content Container */}
      <div className='relative z-10 mx-auto w-full max-w-[85rem] px-[1.25rem] py-[3.125rem]'>
        <div className='grid grid-cols-1 items-center gap-[3.125rem] lg:grid-cols-2'>
          {/* Left Column - Section Title */}
          <div className='flex flex-col justify-center'>
            <h2
              className='mb-[1.25rem] font-bold leading-tight'
              style={{
                fontSize: 'var(--font-size-rengifo-titles)',
                color: 'var(--color-rengifo-azul)',
                maxWidth: '37.5rem',
              }}
            >
              {domesticSection.title}
            </h2>

            {domesticSection.subtitle && (
              <h3
                className='mb-[1.875rem] font-normal'
                style={{
                  fontSize: 'var(--font-size-rengifo-sub-titles)',
                  color: 'var(--color-rengifo-azul)',
                  letterSpacing: '0.05em',
                }}
              >
                {domesticSection.subtitle}
              </h3>
            )}

            {/* Subsection Title */}
            <div className='mt-[1.875rem]'>
              <h4
                className='mb-[0.625rem] font-bold'
                style={{
                  fontSize: 'var(--font-size-rengifo-sub-titles)',
                  color: 'var(--color-rengifo-azul)',
                }}
              >
                {planimetriesSubsection.title}
              </h4>

              <h5
                className='font-normal'
                style={{
                  fontSize: 'var(--font-size-rengifo-parrafos)',
                  color: 'var(--color-rengifo-azul)',
                  letterSpacing: '0.05em',
                }}
              >
                {planimetriesSubsection.subtitle}
              </h5>
            </div>
          </div>

          {/* Right Column - Description */}
          <div className='flex flex-col justify-center'>
            <div
              className='mb-[1.875rem] text-justify leading-relaxed'
              style={{
                fontSize: 'var(--font-size-rengifo-parrafos)',
                color: 'var(--color-rengifo-azul)',
                lineHeight: '1.8',
                maxWidth: '50rem',
              }}
            >
              {domesticSection.description
                .split('\n\n')
                .map((paragraph, index) => (
                  <p key={index} className='mb-[1.25rem] last:mb-0'>
                    {paragraph}
                  </p>
                ))}
            </div>

            {/* Subsection Description */}
            <div
              className='text-justify leading-relaxed'
              style={{
                fontSize: 'var(--font-size-rengifo-parrafos)',
                color: 'var(--color-rengifo-azul)',
                lineHeight: '1.8',
                fontStyle: 'italic',
                opacity: 0.9,
              }}
            >
              <p>{planimetriesSubsection.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
