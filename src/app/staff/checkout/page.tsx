import RoomInfo from "@/app/components/RoomInfo";

export default function Home() {
    return (
      <div className="">
        <RoomInfo roomNumber={101} availability={"open"}/>
      </div>
    )
  }
  