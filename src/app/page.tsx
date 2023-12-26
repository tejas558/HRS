import Staff from "./components/Staff"
import Customer from "./components/Customer"

export default function Home() {
  return (
    <div className="">
      <div className="Header center">
        <h1 className="text-4xl mt-10">Welcome to World Hotels</h1>
      </div>
      <div className="center">
        <Staff />
        <div className="ml-40 mt-80"></div>
        <Customer />
      </div>
    </div>
  )
}
