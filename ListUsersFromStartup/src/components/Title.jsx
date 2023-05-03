export const Title = (props) => {
  if (props.primary) return <h1>{ props.children }</h1>
  if (props.secondary) return <h2>{ props.children }</h2>
  else return <strong>{ props.children }</strong>
}
