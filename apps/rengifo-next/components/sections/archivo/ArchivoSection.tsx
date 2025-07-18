import { rengifoSectionsConfig } from '@relatos/content/apps'

export const ArchivoSection = () => {
  const imaginarioSection = rengifoSectionsConfig.imaginario
  const archiveSubsection = imaginarioSection.subsections.archive

  return (
    <section
      id='archivo'
      className='relative flex min-h-screen items-center justify-center overflow-hidden'
      style={{
        backgroundColor: 'var(--color-rengifo-gris)',
      }}
    >
      {/* Background Images */}
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `url(${imaginarioSection.backgroundImages.main})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4,
        }}
      />

      {/* Additional facade image overlay */}
      <div
        className='z-1 absolute inset-0'
        style={{
          backgroundImage: `url(${imaginarioSection.backgroundImages.facade})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          opacity: 0.6,
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
              {imaginarioSection.title}
            </h2>

            <h3
              className='mb-[1.875rem] font-normal'
              style={{
                fontSize: 'var(--font-size-rengifo-sub-titles)',
                color: 'var(--color-rengifo-azul)',
                letterSpacing: '0.05em',
              }}
            >
              {imaginarioSection.subtitle}
            </h3>

            {/* Subsection Title */}
            <div className='mt-[1.875rem]'>
              <h4
                className='mb-[0.625rem] font-bold'
                style={{
                  fontSize: 'var(--font-size-rengifo-sub-titles)',
                  color: 'var(--color-rengifo-azul)',
                }}
              >
                {archiveSubsection.title}
              </h4>

              <h5
                className='font-normal'
                style={{
                  fontSize: 'var(--font-size-rengifo-parrafos)',
                  color: 'var(--color-rengifo-azul)',
                  letterSpacing: '0.05em',
                }}
              >
                {archiveSubsection.subtitle}
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
              {imaginarioSection.description
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
              <p>{archiveSubsection.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
