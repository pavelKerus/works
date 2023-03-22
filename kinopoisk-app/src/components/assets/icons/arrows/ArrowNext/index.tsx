interface Props{
  onClick:() => void,
  className:string
}

export const ArrowNext = (props:any) => {
  const {onClick,className} = props
  return(
    <div className={className} onClick={onClick}>
      <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 11L17.5 6M17.5 6L12.5 1M17.5 6H1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  )
}