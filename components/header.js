import { buildImageUrl } from "cloudinary-build-url"

export default function Header() {
  const logoBg = buildImageUrl('vueschool/Asset_1', {
    cloud: {
      cloudName: 'mayashavin'
    },
    transformations: {
      resize: {
        width: 200,
        type: 'scale',
      },
      opacity: 30,
      effect: {
        name: 'blur'
      }
    }
  })

  const logo = buildImageUrl('vueschool/pokeball_2', {
    transformations: {
      resize: {
        width: 36,
        height: 36,
        type: 'scale',
      },
    }
  })

  return (
    <header className="pokemon-gallery-header">
      <div className="overlay">
        <img src={logoBg} aria-hidden="true" />
      </div>
      <div className="pokemon-gallery-title">
        <img src={logo} />
        <h1>Gallery</h1>
      </div>
    </header>
  )
}
