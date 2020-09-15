import getTime from '../Services/getTime'
import getLocation from '../Services/getLocation'
import IpTracker from '../components/IpTracker'

export default function Home ({ location, time }) {
  return <IpTracker location={location} time={time} />
}

export async function getServerSideProps () {
  const location = await getLocation({ ip: 'check' })
  const time = await getTime({ ip: '' })

  return { props: { location, time } }
}
