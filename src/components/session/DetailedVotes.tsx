export default function DetailedVotes(props: {memberName: any, voted: any, group: any}) {
  return (
    <>
      <div className="flex-cell">
        <div className="memberItem">
          <h3>Member</h3>
          <p>{props.memberName}</p>
          <h3>Voted</h3>
          <p>{props.voted}</p>
          <h3>Group</h3>
          <p>{props.group}</p>
        </div>
      </div>
    </>
  );
}
