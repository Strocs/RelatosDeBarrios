import { rengifoSectionsConfig } from '@relatos/content/apps'

export const LibroDocumentalSection = () => {
  const discoverSection = rengifoSectionsConfig.discover

  return (
    <section
      id='libro-documental'
      className='relative flex min-h-screen items-center justify-center overflow-hidden'
      style={{
        backgroundColor: 'var(--color-rengifo-azul)',
      }}
    >
      {/* Content Container */}
      <div className='relative z-10 mx-auto w-full max-w-[85rem] px-[1.25rem] py-[3.125rem]'>
        {/* Section Header */}
        <div className='mb-[3.125rem] text-center'>
          <h2
            className='mb-[1.25rem] font-bold leading-tight text-white'
            style={{
              fontSize: 'var(--font-size-rengifo-titles)',
            }}
          >
            {discoverSection.title}
          </h2>

          <div
            className='mx-auto max-w-[50rem] text-center leading-relaxed text-white'
            style={{
              fontSize: 'var(--font-size-rengifo-parrafos)',
              lineHeight: '1.8',
              opacity: 0.9,
            }}
          >
            {discoverSection.description
              .split('\n\n')
              .map((paragraph, index) => (
                <p key={index} className='mb-[1.25rem] last:mb-0'>
                  {paragraph}
                </p>
              ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className='grid grid-cols-1 items-center gap-[3.125rem] md:grid-cols-2'>
          {discoverSection.resources.map((resource) => (
            <div key={resource.id} className='group relative cursor-pointer'>
              {/* Resource Card */}
              <a
                href={resource.href}
                target='_blank'
                rel='noopener noreferrer'
                className='relative block overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105'
                style={{
                  height: '25rem', // 40rem → 25rem conversion
                }}
              >
                {/* Background Image */}
                <div
                  className='absolute inset-0 z-0'
                  style={{
                    backgroundImage: `url(${resource.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-black bg-opacity-40 transition-all duration-300 group-hover:bg-opacity-30' />

                {/* Content */}
                <div className='absolute inset-0 flex flex-col items-center justify-center p-[1.875rem] text-center'>
                  <h3
                    className='mb-[0.625rem] font-bold text-white'
                    style={{
                      fontSize: 'var(--font-size-rengifo-sub-titles)',
                    }}
                  >
                    {resource.title}
                  </h3>

                  <h4
                    className='mb-[1.25rem] font-normal text-white'
                    style={{
                      fontSize: 'var(--font-size-rengifo-parrafos)',
                      letterSpacing: '0.05em',
                      opacity: 0.9,
                    }}
                  >
                    {resource.subtitle}
                  </h4>

                  {/* Resource Type Indicator */}
                  <div
                    className='inline-block rounded-full bg-white bg-opacity-20 px-[1.25rem] py-[0.625rem] text-white backdrop-blur-sm'
                    style={{
                      fontSize: 'var(--font-size-rengifo-parrafos)',
                      fontWeight: 500,
                    }}
                  >
                    {resource.type === 'book' ? 'Descargar PDF' : 'Ver Video'}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
