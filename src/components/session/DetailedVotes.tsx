export default function DetailedVotes(props: { memberName: any, voted: any, group: any }) {
  return (
    <>
      <div className="flex-cell">
        <div className="memberItem">
          <p>
            {props.memberName}
            {' '}
            (
            {props.group}
            ),
            <p className={`voted ${props.voted.toLowerCase()}`}>{props.voted.toUpperCase()}</p>
          </p>
        </div>
      </div>
    </>
  );
}
