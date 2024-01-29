

interface Props {
  label: string
}

export const SubTitle = ({label}: Props) => {
  return (
    <div style={{
      fontFamily: 'Jost',
      fontWeight: '600',
      fontSize: '1.5rem',
      marginLeft: '1rem'
    }}>{ label }</div>
  )
}
