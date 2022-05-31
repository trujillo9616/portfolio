const SocialShare = [
  {
    iconName: 'linkedin',
    link: 'https://www.linkedin.com/in/adrian-trujillo96/',
  },
  {
    iconName: 'github',
    link: 'https://github.com/trujillo9616',
  },
  { 
    iconName: 'medium',
    link: 'https://medium.com/@adrian-td96' 
  },
  { 
    iconName: 'twitter',
    link: 'https://twitter.com/trujillo9616' 
  },
  { 
    iconName: 'instagram',
    link: 'https://www.instagram.com/trujillo9616/' 
  }
]

const Social = () => {
  return (
    <>
      <ul className="social social-default position-relative">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END social */}
    </>
  )
}

export default Social
