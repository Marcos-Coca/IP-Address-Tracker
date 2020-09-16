import getTime from '../../Services/getTime'
import getLocation from '../../Services/getLocation'
import IpTracker from '../../components/IpTracker'

export default function ip ({ location, time }) {
  return <IpTracker location={location} time={time} />
}

export async function getServerSideProps (context) {
  const { params } = context
  const { ip } = params
  const location = await getLocation({ ip })
  const time = await getTime({ ip })

  return { props: { location, time } }
}
