//* ?? => Ersatzwert

export function UserProfil({ name }: any) {
  return (
    <div>
      {/* Backup, wenn nichts da ist (undefined or null), dann sollte der Ersatzwert übernommen werden  */}
      <h2>{name ?? `Unbekannter Benutzer`}</h2>
    </div>
  )
}

//* && => Bedingung
export function Notifications({ count }: any) {
  return (
    <div>
      <h2>Benachrichtigung</h2>
      {count && <p>Du hast {count} neue Nachrichten</p>}
    </div>
  )
}
