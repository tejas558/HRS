export default function RoomInfo({roomNumber, availability}:{roomNumber: number, availability: string}) {
    return (
        <div className="center">
            <div>
                Room Number: {roomNumber}
            </div>
            <div className="ml-10">
                Status: {availability}
            </div>
        </div>
    )
}