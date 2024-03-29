

interface Props {
  label: string
}

export const Title = ({label}: Props) => {
  return (
    <div style={{
      fontFamily: 'Jost',
      fontWeight: '600',
      fontSize: '2rem',
      textAlign: 'center',
      marginBottom: '3rem'
    }}>{ label }</div>
  )
}